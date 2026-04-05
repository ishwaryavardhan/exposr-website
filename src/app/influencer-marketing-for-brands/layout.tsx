import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Influencer Marketing for Brands | eXposr India",
    description: "Amplify reach natively using eXposr’s curated influencer networks.",
    alternates: {
        canonical: "https://www.xposr.com/influencer-marketing-for-brands",
    },
    openGraph: {
        title: "Influencer Marketing for Brands | eXposr India",
        description: "Amplify reach natively using eXposr’s curated influencer networks.",
        url: "https://www.xposr.com/influencer-marketing-for-brands",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Influencer Marketing for Brands | eXposr India",
        "url": "https://www.xposr.com/influencer-marketing-for-brands",
        "description": "Amplify reach natively using eXposr’s curated influencer networks.",
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
                "name": "Influencer Marketing",
                "item": "https://www.xposr.com/influencer-marketing-for-brands"
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