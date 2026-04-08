import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketing Growth Consultancy in Bangalore | eXposr India',
    description: 'eXposr is Bangalore\'s leading AI-powered digital marketing growth consultancy. We scale Karnataka startups & enterprises with performance marketing, SEO, PPC & growth strategy.',
    alternates: {
        canonical: 'https://xposr.co/bangalore/digital-marketing-agency',
    },
    openGraph: {
        title: 'Digital Marketing Growth Consultancy in Bangalore | eXposr India',
        description: 'eXposr is Bangalore\'s leading AI-powered digital marketing growth consultancy. We scale Karnataka startups & enterprises with performance marketing, SEO, PPC & growth strategy.',
        url: 'https://xposr.co/bangalore/digital-marketing-agency',
    },
    keywords: [
        'digital marketing agency Bangalore', 'digital marketing consultancy Bangalore',
        'SEO agency Bangalore', 'performance marketing Bangalore', 'PPC agency Bangalore',
        'social media marketing Bangalore', 'growth consultancy Bangalore',
        'digital marketing company Karnataka', 'AI marketing agency Bangalore',
        'SaaS marketing agency Bangalore', 'best digital marketing agency Bangalore'
    ]
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Digital Marketing Growth Consultancy in Bangalore | eXposr India",
        "url": "https://xposr.co/bangalore/digital-marketing-agency",
        "description": "eXposr is Bangalore's leading AI-powered digital marketing growth consultancy.",
        "publisher": { "@id": "https://xposr.co/#organization" }
    },
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "eXposr – Digital Marketing Growth Consultancy Bangalore",
        "url": "https://xposr.co/bangalore/digital-marketing-agency",
        "description": "AI-powered digital marketing agency serving Bangalore and Karnataka brands.",
        "telephone": "+918300109955",
        "email": "contact@exposr.co",
        "areaServed": {
            "@type": "City",
            "name": "Bangalore",
            "containedIn": { "@type": "State", "name": "Karnataka" }
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
        },
        "parentOrganization": { "@id": "https://xposr.co/#organization" },
        "priceRange": "₹₹₹"
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xposr.co/" },
            { "@type": "ListItem", "position": 2, "name": "Bangalore", "item": "https://xposr.co/bangalore" },
            { "@type": "ListItem", "position": 3, "name": "Digital Marketing Agency", "item": "https://xposr.co/bangalore/digital-marketing-agency" }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why choose eXposr as your digital marketing consultancy in Bangalore?",
                "acceptedAnswer": { "@type": "Answer", "text": "eXposr is India's first Agentic AI digital marketing agency with proven expertise in scaling Bangalore's fastest-growing startups and enterprise brands." }
            },
            {
                "@type": "Question",
                "name": "Do you specialize in B2B SaaS marketing for Bangalore companies?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Bangalore's SaaS ecosystem is a core specialization. We run intent-based demand generation, LinkedIn ABM campaigns, and SEO content strategies optimized specifically for SaaS buyer journeys." }
            }
        ]
    }
];

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
            {children}
        </>
    );
}
