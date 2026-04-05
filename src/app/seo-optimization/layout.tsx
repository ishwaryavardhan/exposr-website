import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SEO Optimization Services | eXposr India",
    description: "Dominate organic search with eXposr’s advanced SEO and AEO optimization strategies.",
    alternates: {
        canonical: "https://www.xposr.com/seo-optimization",
    },
    openGraph: {
        title: "SEO Optimization Services | eXposr India",
        description: "Dominate organic search with eXposr’s advanced SEO and AEO optimization strategies.",
        url: "https://www.xposr.com/seo-optimization",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "SEO Optimization Services | eXposr India",
        "url": "https://www.xposr.com/seo-optimization",
        "description": "Dominate organic search with eXposr’s advanced SEO and AEO optimization strategies.",
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
                "name": "SEO Optimization",
                "item": "https://www.xposr.com/seo-optimization"
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