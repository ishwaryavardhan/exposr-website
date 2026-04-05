import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { businessName, name, email, phone, service, message, source } = body;

        // Ensure email exists as it's required
        if (!email) {
            return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
        }

        const lead = await prisma.lead.create({
            data: {
                businessName,
                name: name || undefined,
                email,
                phone,
                service,
                message,
                source: source || 'website'
            }
        });

        // Gmail SMTP configuration from environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST, 
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                ciphers: 'SSLv3'
            },
            requireTLS: true
        });
        
        const emailFrom = process.env.SMTP_FROM || process.env.SMTP_USER;
        const emailTo = process.env.SMTP_TO;

        // Escape HTML to prevent Reflected XSS within email clients
        const escapeHTML = (str: string) => str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );

        const emailContent = `
            <h2>New Lead Submission</h2>
            <p><strong>Name:</strong> ${escapeHTML(name || 'Not provided')}</p>
            <p><strong>Business Name:</strong> ${escapeHTML(businessName || 'Not provided')}</p>
            <p><strong>Email:</strong> ${escapeHTML(email)}</p>
            <p><strong>Phone:</strong> ${escapeHTML(phone || 'Not provided')}</p>
            <p><strong>Service:</strong> ${escapeHTML(service || 'Not specified')}</p>
            <p><strong>Message:</strong> ${escapeHTML(message || 'Not provided')}</p>
            <p><strong>Source:</strong> ${escapeHTML(source || 'website')}</p>
        `;

        const mailOptions = {
            from: emailFrom,
            to: emailTo, // Assuming valid string exists, transporter checks this
            subject: `New Lead: ${escapeHTML(name || businessName || 'Unknown')} - ${escapeHTML(service || 'General Inquiry')}`,
            html: emailContent,
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            console.error('❌ Email send failed quietly.');
            // Continue execution even if email fails
        }

        return NextResponse.json({
            success: true,
            message: 'Thank you! We will contact you shortly.',
            leadId: lead.id
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong. Please try again.'
        }, { status: 500 });
    }
}
