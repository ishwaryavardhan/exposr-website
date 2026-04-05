import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Performance Marketing | eXposr India",
    description: "Revenue-focused performance marketing solutions for brands.",
    alternates: {
        canonical: "https://www.xposr.com/performance-marketing",
    },
    openGraph: {
        title: "Performance Marketing | eXposr India",
        description: "Revenue-focused performance marketing solutions for brands.",
        url: "https://www.xposr.com/performance-marketing",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Performance Marketing | eXposr India",
        "url": "https://www.xposr.com/performance-marketing",
        "description": "Revenue-focused performance marketing solutions for brands.",
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
                "name": "Performance Marketing",
                "item": "https://www.xposr.com/performance-marketing"
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