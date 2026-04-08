import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media Production Agency in Bangalore | eXposr India',
    description: 'eXposr is Bangalore\'s full-stack media production agency. We produce brand films, TVCs, SaaS demo videos, photography, motion graphics and podcasts for Karnataka brands.',
    alternates: { canonical: 'https://xposr.co/bangalore/media-production-agency' },
    openGraph: {
        title: 'Media Production Agency in Bangalore | eXposr India',
        description: 'eXposr is Bangalore\'s full-stack media production agency. We produce brand films, TVCs, SaaS demo videos, photography, motion graphics and podcasts for Karnataka brands.',
        url: 'https://xposr.co/bangalore/media-production-agency',
    },
    keywords: [
        'media production agency Bangalore', 'video production company Bangalore', 'brand film production Bangalore',
        'commercial photography Bangalore', 'TVC production Bangalore', 'SaaS video production Bangalore',
        'motion graphics agency Bangalore', 'podcast production Bangalore', 'corporate video production Bangalore',
        'media production Karnataka', 'startup video production Bangalore'
    ]
};

const structuredData = [
    {
        "@context": "https://schema.org", "@type": "WebPage",
        "name": "Media Production Agency in Bangalore | eXposr India",
        "url": "https://xposr.co/bangalore/media-production-agency",
        "description": "eXposr is Bangalore's full-stack media production agency.",
        "publisher": { "@id": "https://xposr.co/#organization" }
    },
    {
        "@context": "https://schema.org", "@type": "LocalBusiness",
        "name": "eXposr – Media Production Agency Bangalore",
        "url": "https://xposr.co/bangalore/media-production-agency",
        "description": "Full-stack media production studio serving Bangalore and Karnataka brands.",
        "telephone": "+918300109955", "email": "contact@exposr.co",
        "areaServed": { "@type": "City", "name": "Bangalore", "containedIn": { "@type": "State", "name": "Karnataka" } },
        "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" },
        "parentOrganization": { "@id": "https://xposr.co/#organization" }, "priceRange": "₹₹₹"
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xposr.co/" },
            { "@type": "ListItem", "position": 2, "name": "Bangalore", "item": "https://xposr.co/bangalore" },
            { "@type": "ListItem", "position": 3, "name": "Media Production Agency", "item": "https://xposr.co/bangalore/media-production-agency" }
        ]
    },
    {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "What media production services does eXposr offer in Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "eXposr offers full-stack media production in Bangalore including brand films, TVCs, commercial photography, Reels and short-form content, SaaS product demo videos, motion graphics, podcast production, corporate videos, event coverage, and post-production services." } },
            { "@type": "Question", "name": "Do you specialize in SaaS and tech brand video production in Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Bangalore's SaaS and tech startup ecosystem is a core specialization. We produce SaaS product demo videos, explainer animations, investor pitch videos, startup brand films, and thought leadership content specifically engineered for Bangalore's B2B tech audience." } },
            { "@type": "Question", "name": "How much does video production cost in Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Brand film production in Bangalore typically ranges from ₹3L to ₹25L+ depending on complexity. eXposr provides transparent, itemized production quotes — no hidden costs." } }
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
