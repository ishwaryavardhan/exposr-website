import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { password } = await request.json();
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

    if (password === ADMIN_PASSWORD) {
        const response = NextResponse.json({ success: true });
        response.cookies.set("portal_auth", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/"
        });
        return response;
    }

    return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
}
