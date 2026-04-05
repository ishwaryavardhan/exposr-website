import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "PPC Management Services | eXposr India",
    description: "Maximize ROAS with eXposr’s highly targeted Google and PPC ad campaigns.",
    alternates: {
        canonical: "https://www.xposr.com/ppc-management",
    },
    openGraph: {
        title: "PPC Management Services | eXposr India",
        description: "Maximize ROAS with eXposr’s highly targeted Google and PPC ad campaigns.",
        url: "https://www.xposr.com/ppc-management",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "PPC Management Services | eXposr India",
        "url": "https://www.xposr.com/ppc-management",
        "description": "Maximize ROAS with eXposr’s highly targeted Google and PPC ad campaigns.",
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
                "name": "PPC Management",
                "item": "https://www.xposr.com/ppc-management"
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