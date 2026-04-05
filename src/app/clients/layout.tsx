import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Clients | eXposr India",
    description: "Discover the innovative brands scaling their revenue with eXposr.",
    alternates: {
        canonical: "https://www.xposr.com/clients",
    },
    openGraph: {
        title: "Our Clients | eXposr India",
        description: "Discover the innovative brands scaling their revenue with eXposr.",
        url: "https://www.xposr.com/clients",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Clients | eXposr India",
        "url": "https://www.xposr.com/clients",
        "description": "Discover the innovative brands scaling their revenue with eXposr.",
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
                "name": "Our Clients",
                "item": "https://www.xposr.com/clients"
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