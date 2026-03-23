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

        // Send email notification
        console.log('📧 Starting email send process...');
        
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
            requireTLS: true,
            debug: true,
            logger: true
        });
        
        const emailFrom = process.env.SMTP_FROM || process.env.SMTP_USER;
        const emailTo = process.env.SMTP_TO;
        console.log('📧 Using Gmail SMTP from environment variables');

        console.log('📧 Transporter created successfully');

        const emailContent = `
            <h2>New Lead Submission</h2>
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Business Name:</strong> ${businessName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
            <p><strong>Message:</strong> ${message || 'Not provided'}</p>
            <p><strong>Source:</strong> ${source || 'website'}</p>
        `;

        const mailOptions = {
            from: emailFrom,
            to: emailTo,
            subject: `New Lead: ${name || businessName || 'Unknown'} - ${service || 'General Inquiry'}`,
            html: emailContent,
        };

        console.log('📧 Attempting to send email with options:', {
            from: mailOptions.from,
            to: mailOptions.to,
            subject: mailOptions.subject
        });

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('✅ Email sent successfully!');
            console.log('📧 Message ID:', info.messageId);
            console.log('📧 Response:', info.response);
        } catch (emailError) {
            console.error('❌ Email send failed:', emailError);
            console.error('📧 Error details:', {
                message: emailError instanceof Error ? emailError.message : 'Unknown error',
                stack: emailError instanceof Error ? emailError.stack : undefined
            });
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
