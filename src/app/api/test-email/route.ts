import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
    try {
        console.log('📧 Testing email configuration...');
        
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

        console.log('📧 Transporter created for test');

        // Verify connection
        await transporter.verify();
        console.log('✅ SMTP connection verified successfully');

        // Send test email
        const testEmail = await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.SMTP_TO,
            subject: "🧪 Test Email - Exposr Contact Form",
            html: `
                <h2>Test Email</h2>
                <p>This is a test email to verify the SMTP configuration is working.</p>
                <p><strong>Sent at:</strong> ${new Date().toISOString()}</p>
                <p><strong>From:</strong> ${process.env.SMTP_FROM || process.env.SMTP_USER}</p>
                <p><strong>To:</strong> ${process.env.SMTP_TO}</p>
            `,
        });

        console.log('✅ Test email sent successfully!');
        console.log('📧 Message ID:', testEmail.messageId);

        return NextResponse.json({
            success: true,
            message: 'Test email sent successfully',
            messageId: testEmail.messageId
        });

    } catch (error) {
        console.error('❌ Test email failed:', error);
        
        return NextResponse.json({
            success: false,
            message: 'Test email failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            details: {
                stack: error instanceof Error ? error.stack : undefined
            }
        }, { status: 500 });
    }
}
