import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming your lib/prisma.ts is mapped to @/lib

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

        // Optional: send an email via Resend/Nodemailer here

        return NextResponse.json({
            success: true,
            message: 'Thank you! We will contact you shortly.',
            leadId: lead.id
        });

    } catch (error) {
        console.error('Lead creation error:', error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong. Please try again.'
        }, { status: 500 });
    }
}
