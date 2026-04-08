import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Growth Consulting Firm for US Brands | eXposr',
    description: 'eXposr is an AI-first growth consulting firm helping US brands scale with performance marketing, SEO, paid acquisition, AI marketing systems, and full-funnel GTM strategy.',
    alternates: { canonical: 'https://xposr.co/us/growth-consulting-firm' },
    openGraph: {
        title: 'Growth Consulting Firm for US Brands | eXposr',
        description: 'eXposr is an AI-first growth consulting firm helping US brands scale with performance marketing, SEO, paid acquisition, AI marketing systems, and full-funnel GTM strategy.',
        url: 'https://xposr.co/us/growth-consulting-firm',
        locale: 'en_US',
    },
    keywords: [
        'growth consulting firm USA', 'digital marketing consultancy United States',
        'AI marketing agency USA', 'performance marketing agency US',
        'SaaS growth consulting USA', 'B2B growth agency United States',
        'ecommerce growth consultancy USA', 'SEO agency United States',
        'GTM strategy consulting US', 'paid acquisition agency USA',
        'growth hacking agency USA', 'revenue growth consulting United States'
    ]
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Growth Consulting Firm for US Brands | eXposr",
        "url": "https://xposr.co/us/growth-consulting-firm",
        "description": "eXposr is an AI-first growth consulting firm helping US brands scale with performance marketing, SEO, and AI-powered marketing systems.",
        "publisher": { "@id": "https://xposr.co/#organization" }
    },
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "eXposr – Growth Consulting Firm USA",
        "url": "https://xposr.co/us/growth-consulting-firm",
        "description": "AI-first growth consultancy serving US-based SaaS, D2C, FinTech, and enterprise brands with performance marketing, SEO, GTM strategy, and autonomous AI marketing systems.",
        "telephone": "+918300109955",
        "email": "contact@exposr.co",
        "areaServed": {
            "@type": "Country",
            "name": "United States"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        },
        "parentOrganization": { "@id": "https://xposr.co/#organization" },
        "priceRange": "$$$",
        "serviceType": [
            "Growth Consulting", "Performance Marketing", "SEO Optimization",
            "AI Marketing Systems", "PPC Management", "Social Media Marketing",
            "Media Production", "Influencer Marketing"
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xposr.co/" },
            { "@type": "ListItem", "position": 2, "name": "United States", "item": "https://xposr.co/us" },
            { "@type": "ListItem", "position": 3, "name": "Growth Consulting Firm", "item": "https://xposr.co/us/growth-consulting-firm" }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes eXposr different from US-based growth agencies?",
                "acceptedAnswer": { "@type": "Answer", "text": "eXposr is the only Agentic AI growth firm operating in the US market. We deploy autonomous marketing systems that execute, optimize, and scale campaigns without human bottlenecks — delivering faster iteration, lower cost-per-lead, and compounding gains." }
            },
            {
                "@type": "Question",
                "name": "How quickly can you generate ROI for a US business?",
                "acceptedAnswer": { "@type": "Answer", "text": "Paid channels typically show measurable results within 2–4 weeks. SEO and GEO strategies build sustainable visibility over 3–6 months with compounding returns. We architect a blended strategy for immediate pipeline and long-term equity." }
            },
            {
                "@type": "Question",
                "name": "What industries do you serve in the US market?",
                "acceptedAnswer": { "@type": "Answer", "text": "We work across SaaS, EdTech, FinTech, D2C E-Commerce, Healthcare, Real Estate, and enterprise technology. Our AI systems are calibrated on US-specific buyer behavior patterns for precision targeting." }
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
