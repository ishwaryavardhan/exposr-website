import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/portal') {
        const authCookie = request.cookies.get('portal_auth');
        
        if (!authCookie || !authCookie.value) {
            return NextResponse.redirect(new URL('/portal/login', request.url));
        }

        // Dynamically import to utilize edge api correctly
        const { verifyToken } = await import('@/lib/auth');
        const isValid = await verifyToken(authCookie.value);

        if (!isValid) {
            return NextResponse.redirect(new URL('/portal/login', request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/portal'],
};
