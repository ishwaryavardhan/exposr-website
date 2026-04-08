import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketing Growth Consultancy in Chennai | eXposr India',
    description: 'eXposr is Chennai\'s leading AI-powered digital marketing growth consultancy. We scale Tamil Nadu brands with performance marketing, SEO, PPC & social media strategies.',
    alternates: {
        canonical: 'https://xposr.co/chennai/digital-marketing-agency',
    },
    openGraph: {
        title: 'Digital Marketing Growth Consultancy in Chennai | eXposr India',
        description: 'eXposr is Chennai\'s leading AI-powered digital marketing growth consultancy. We scale Tamil Nadu brands with performance marketing, SEO, PPC & social media strategies.',
        url: 'https://xposr.co/chennai/digital-marketing-agency',
    },
    keywords: [
        'digital marketing agency Chennai',
        'digital marketing consultancy Chennai',
        'SEO agency Chennai',
        'performance marketing Chennai',
        'PPC agency Chennai',
        'social media marketing Chennai',
        'growth consultancy Chennai',
        'digital marketing company Tamil Nadu',
        'AI marketing agency Chennai',
        'best digital marketing agency Chennai'
    ]
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Digital Marketing Growth Consultancy in Chennai | eXposr India",
        "url": "https://xposr.co/chennai/digital-marketing-agency",
        "description": "eXposr is Chennai's leading AI-powered digital marketing growth consultancy. We scale Tamil Nadu brands with performance marketing, SEO, PPC & social media strategies.",
        "publisher": { "@id": "https://xposr.co/#organization" }
    },
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "eXposr – Digital Marketing Growth Consultancy Chennai",
        "url": "https://xposr.co/chennai/digital-marketing-agency",
        "description": "AI-powered digital marketing agency serving Chennai and Tamil Nadu brands with performance marketing, SEO, PPC and growth consultancy.",
        "telephone": "+918300109955",
        "email": "contact@exposr.co",
        "areaServed": {
            "@type": "City",
            "name": "Chennai",
            "containedIn": { "@type": "State", "name": "Tamil Nadu" }
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        },
        "parentOrganization": { "@id": "https://xposr.co/#organization" },
        "priceRange": "₹₹₹",
        "sameAs": [
            "https://twitter.com/exposr",
            "https://www.linkedin.com/company/exposr"
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xposr.co/" },
            { "@type": "ListItem", "position": 2, "name": "Chennai", "item": "https://xposr.co/chennai" },
            { "@type": "ListItem", "position": 3, "name": "Digital Marketing Agency", "item": "https://xposr.co/chennai/digital-marketing-agency" }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why choose eXposr as your digital marketing consultancy in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "eXposr is India's first Agentic AI digital marketing agency with deep expertise in scaling Chennai brands. We combine autonomous AI systems with Chennai-specific market intelligence to deliver measurably superior results across SEO, PPC, and performance marketing channels."
                }
            },
            {
                "@type": "Question",
                "name": "What industries do you serve in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in EdTech, FinTech, E-Commerce, Real Estate, Healthcare, Hospitality, and SaaS businesses in Chennai. Our campaigns are tailored to the specific buyer behavior patterns unique to the Chennai market."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer local SEO for businesses targeting Chennai customers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We run comprehensive local SEO strategies including Google Business Profile optimization, Chennai-specific keyword targeting, local citation building, and review management to ensure you dominate Chennai local search results."
                }
            }
        ]
    }
];

export default function Layout({ children }: { children: React.ReactNode }) {
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
