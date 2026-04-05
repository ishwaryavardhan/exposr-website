import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Digital Marketing Resources | eXposr India",
    description: "Explore guides, insights, and resources on digital marketing.",
    alternates: {
        canonical: "https://www.xposr.com/resources",
    },
    openGraph: {
        title: "Digital Marketing Resources | eXposr India",
        description: "Explore guides, insights, and resources on digital marketing.",
        url: "https://www.xposr.com/resources",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Digital Marketing Resources | eXposr India",
        "url": "https://www.xposr.com/resources",
        "description": "Explore guides, insights, and resources on digital marketing.",
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
                "name": "Resources",
                "item": "https://www.xposr.com/resources"
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