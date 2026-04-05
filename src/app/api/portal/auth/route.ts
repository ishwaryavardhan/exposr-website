import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { password } = await request.json();
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_PASSWORD) {
        console.error("CRITICAL: ADMIN_PASSWORD is not set in environment variables.");
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }

    if (password === ADMIN_PASSWORD) {
        const response = NextResponse.json({ success: true });
        
        // Generate securely signed edge-compatible token
        const { createToken } = await import('@/lib/auth');
        const token = await createToken("authenticated");

        response.cookies.set("portal_auth", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
            sameSite: 'strict'
        });
        return response;
    }

    return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
}
