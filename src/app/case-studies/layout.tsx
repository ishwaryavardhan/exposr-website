import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Digital Marketing Case Studies | eXposr India",
    description: "In-depth case studies analyzing our performance marketing strategies.",
    alternates: {
        canonical: "https://www.xposr.com/case-studies",
    },
    openGraph: {
        title: "Digital Marketing Case Studies | eXposr India",
        description: "In-depth case studies analyzing our performance marketing strategies.",
        url: "https://www.xposr.com/case-studies",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Digital Marketing Case Studies | eXposr India",
        "url": "https://www.xposr.com/case-studies",
        "description": "In-depth case studies analyzing our performance marketing strategies.",
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
                "name": "Case Studies",
                "item": "https://www.xposr.com/case-studies"
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