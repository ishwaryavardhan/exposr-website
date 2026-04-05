import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Media Production Services | eXposr India",
    description: "High-end visual media and video production engineered to convert.",
    alternates: {
        canonical: "https://www.xposr.com/media-production",
    },
    openGraph: {
        title: "Media Production Services | eXposr India",
        description: "High-end visual media and video production engineered to convert.",
        url: "https://www.xposr.com/media-production",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Media Production Services | eXposr India",
        "url": "https://www.xposr.com/media-production",
        "description": "High-end visual media and video production engineered to convert.",
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
                "name": "Media Production",
                "item": "https://www.xposr.com/media-production"
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