import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const decodedId = id.replace(/-/g, ' ');
    const capitalizedWord = decodedId.replace(/\b\w/g, c => c.toUpperCase());
    const currentUrl = `https://www.xposr.com/services/${id}`;

    return {
        title: `${capitalizedWord} Services | eXposr India`,
        description: `Learn more about our dedicated ${capitalizedWord} services aimed to scale your brand.`,
        alternates: {
            canonical: currentUrl,
        },
        openGraph: {
            title: `${capitalizedWord} Services | eXposr India`,
            description: `Learn more about our dedicated ${capitalizedWord} services aimed to scale your brand.`,
            url: currentUrl,
        }
    };
}

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ id: string }> }) {
    const { id } = await params;
    const decodedId = id.replace(/-/g, ' ');
    const capitalizedWord = decodedId.replace(/\b\w/g, c => c.toUpperCase());
    const currentUrl = `https://www.xposr.com/services/${id}`;


    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${capitalizedWord} Services | eXposr India`,
            "url": currentUrl,
            "description": `Learn more about our dedicated ${capitalizedWord} services aimed to scale your brand.`
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
                    "name": capitalizedWord,
                    "item": currentUrl
                }
            ]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
            />
            {children}
        </>
    );
}
