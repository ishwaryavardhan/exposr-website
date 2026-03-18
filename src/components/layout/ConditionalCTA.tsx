"use client";

import { usePathname } from 'next/navigation';
import PreFooterCTA from '@/components/sections/PreFooterCTA';

export default function ConditionalCTA() {
    const pathname = usePathname();
    
    // Hide PreFooterCTA on blog-related pages
    if (pathname?.startsWith('/blog')) {
        return null;
    }

    return <PreFooterCTA />;
}
