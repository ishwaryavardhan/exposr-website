import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { businessName, email, phone, service } = body;

        // Here you would typically integrate with a CRM (HubSpot, Salesforce) 
        // or send an email via Resend/Nodemailer
        console.log('New Lead Received:', { businessName, email, phone, service });

        // Mock successful response
        return NextResponse.json({
            success: true,
            message: 'Thank you! We will contact you shortly.'
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Something went wrong. Please try again.'
        }, { status: 500 });
    }
}
