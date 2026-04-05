import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Social Media Management Services | eXposr India",
    description: "Scale your brand with eXposr’s data-driven social media management.",
    alternates: {
        canonical: "https://www.xposr.com/social-media-management",
    },
    openGraph: {
        title: "Social Media Management Services | eXposr India",
        description: "Scale your brand with eXposr’s data-driven social media management.",
        url: "https://www.xposr.com/social-media-management",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Social Media Management Services | eXposr India",
        "url": "https://www.xposr.com/social-media-management",
        "description": "Scale your brand with eXposr’s data-driven social media management.",
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
                "name": "Social Media Management",
                "item": "https://www.xposr.com/social-media-management"
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