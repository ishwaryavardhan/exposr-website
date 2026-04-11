import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const decodedSlug = slug.replace(/-/g, ' ');
    const capitalizedWord = decodedSlug.replace(/\b\w/g, c => c.toUpperCase());
    const currentUrl = `https://www.xposr.com/blog/${slug}`;

    return {
        title: `${capitalizedWord} | eXposr Blog`,
        description: `Read our comprehensive guide and strategy regarding ${capitalizedWord}.`,
        alternates: {
            canonical: currentUrl,
        },
        openGraph: {
            title: `${capitalizedWord} | eXposr Blog`,
            description: `Read our comprehensive guide and strategy regarding ${capitalizedWord}.`,
            url: currentUrl,
        }
    };
}

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const decodedSlug = slug.replace(/-/g, ' ');
    const capitalizedWord = decodedSlug.replace(/\b\w/g, c => c.toUpperCase());
    const currentUrl = `https://www.xposr.com/blog/${slug}`;


    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${capitalizedWord} | eXposr Blog`,
            "url": currentUrl,
            "description": `Read our comprehensive guide and strategy regarding ${capitalizedWord}.`
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
