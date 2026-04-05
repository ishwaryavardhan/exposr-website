import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Branding Solutions | eXposr India",
    description: "Transform your identity with eXposr’s comprehensive branding solutions.",
    alternates: {
        canonical: "https://www.xposr.com/solutions/branding",
    },
    openGraph: {
        title: "Branding Solutions | eXposr India",
        description: "Transform your identity with eXposr’s comprehensive branding solutions.",
        url: "https://www.xposr.com/solutions/branding",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Branding Solutions | eXposr India",
        "url": "https://www.xposr.com/solutions/branding",
        "description": "Transform your identity with eXposr’s comprehensive branding solutions.",
        "publisher": {
            "@id": "https://www.xposr.com/#organization"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.xposr.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Branding Solutions",
                "item": "https://www.xposr.com/solutions/branding"
            }
        ]
    }
];

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }}
            />
            {children}
        </>
    );
}