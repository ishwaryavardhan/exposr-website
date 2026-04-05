import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Performance Marketing Portfolio | eXposr India",
    description: "Explore eXposr's performance marketing and Shopify DTC scaling portfolio.",
    alternates: {
        canonical: "https://www.xposr.com/portfolio",
    },
    openGraph: {
        title: "Performance Marketing Portfolio | eXposr India",
        description: "Explore eXposr's performance marketing and Shopify DTC scaling portfolio.",
        url: "https://www.xposr.com/portfolio",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Performance Marketing Portfolio | eXposr India",
        "url": "https://www.xposr.com/portfolio",
        "description": "Explore eXposr's performance marketing and Shopify DTC scaling portfolio.",
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
                "name": "Portfolio",
                "item": "https://www.xposr.com/portfolio"
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