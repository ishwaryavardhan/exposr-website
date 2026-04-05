import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Digital Marketing Blog | eXposr India",
    description: "Insights, trends, and strategies on digital marketing and performance scaling.",
    alternates: {
        canonical: "https://www.xposr.com/blog",
    },
    openGraph: {
        title: "Digital Marketing Blog | eXposr India",
        description: "Insights, trends, and strategies on digital marketing and performance scaling.",
        url: "https://www.xposr.com/blog",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Digital Marketing Blog | eXposr India",
        "url": "https://www.xposr.com/blog",
        "description": "Insights, trends, and strategies on digital marketing and performance scaling.",
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
                "name": "Blog",
                "item": "https://www.xposr.com/blog"
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