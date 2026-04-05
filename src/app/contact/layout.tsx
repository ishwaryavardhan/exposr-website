import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact eXposr | Digital Marketing Agency",
    description: "Get in touch with eXposr to accelerate your digital growth.",
    alternates: {
        canonical: "https://www.xposr.com/contact",
    },
    openGraph: {
        title: "Contact eXposr | Digital Marketing Agency",
        description: "Get in touch with eXposr to accelerate your digital growth.",
        url: "https://www.xposr.com/contact",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Contact eXposr | Digital Marketing Agency",
        "url": "https://www.xposr.com/contact",
        "description": "Get in touch with eXposr to accelerate your digital growth.",
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
                "name": "Contact Us",
                "item": "https://www.xposr.com/contact"
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