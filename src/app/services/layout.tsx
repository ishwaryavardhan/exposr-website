import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Digital Marketing Services | eXposr India",
    description: "Comprehensive performance marketing, SEO, and branding services by eXposr.",
    alternates: {
        canonical: "https://www.xposr.com/services",
    },
    openGraph: {
        title: "Digital Marketing Services | eXposr India",
        description: "Comprehensive performance marketing, SEO, and branding services by eXposr.",
        url: "https://www.xposr.com/services",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Digital Marketing Services | eXposr India",
        "url": "https://www.xposr.com/services",
        "description": "Comprehensive performance marketing, SEO, and branding services by eXposr.",
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
                "name": "Digital Marketing Services",
                "item": "https://www.xposr.com/services"
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