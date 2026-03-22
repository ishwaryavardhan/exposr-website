import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/portal') {
        const auth = request.cookies.get('portal_auth');
        if (!auth || auth.value !== 'true') {
            return NextResponse.redirect(new URL('/portal/login', request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/portal'],
};
