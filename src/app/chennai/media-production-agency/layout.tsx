import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Media Production Agency in Chennai | eXposr India',
    description: 'eXposr is Chennai\'s full-stack media production agency. We produce brand films, TVCs, commercial photography, Reels, motion graphics and podcasts for Tamil Nadu brands.',
    alternates: { canonical: 'https://xposr.co/chennai/media-production-agency' },
    openGraph: {
        title: 'Media Production Agency in Chennai | eXposr India',
        description: 'eXposr is Chennai\'s full-stack media production agency. We produce brand films, TVCs, commercial photography, Reels, motion graphics and podcasts for Tamil Nadu brands.',
        url: 'https://xposr.co/chennai/media-production-agency',
    },
    keywords: [
        'media production agency Chennai', 'video production company Chennai', 'brand film production Chennai',
        'commercial photography Chennai', 'TVC production Chennai', 'reels production Chennai',
        'motion graphics agency Chennai', 'podcast production Chennai', 'corporate video production Chennai',
        'media production Tamil Nadu'
    ]
};

const structuredData = [
    {
        "@context": "https://schema.org", "@type": "WebPage",
        "name": "Media Production Agency in Chennai | eXposr India",
        "url": "https://xposr.co/chennai/media-production-agency",
        "description": "eXposr is Chennai's full-stack media production agency.",
        "publisher": { "@id": "https://xposr.co/#organization" }
    },
    {
        "@context": "https://schema.org", "@type": "LocalBusiness",
        "name": "eXposr – Media Production Agency Chennai",
        "url": "https://xposr.co/chennai/media-production-agency",
        "description": "Full-stack media production studio serving Chennai and Tamil Nadu brands.",
        "telephone": "+918300109955", "email": "contact@exposr.co",
        "areaServed": { "@type": "City", "name": "Chennai", "containedIn": { "@type": "State", "name": "Tamil Nadu" } },
        "address": { "@type": "PostalAddress", "addressLocality": "Chennai", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
        "parentOrganization": { "@id": "https://xposr.co/#organization" }, "priceRange": "₹₹₹"
    },
    {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://xposr.co/" },
            { "@type": "ListItem", "position": 2, "name": "Chennai", "item": "https://xposr.co/chennai" },
            { "@type": "ListItem", "position": 3, "name": "Media Production Agency", "item": "https://xposr.co/chennai/media-production-agency" }
        ]
    },
    {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "What media production services does eXposr offer in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "eXposr offers full-stack media production in Chennai including brand films, TVCs, commercial photography, Reels and short-form content, motion graphics, podcast production, corporate videos, event coverage, and post-production services." } },
            { "@type": "Question", "name": "How much does video production cost in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Brand film production in Chennai typically ranges from ₹3L for a minimalist single-location shoot to ₹25L+ for multi-location, high-end commercial productions. eXposr provides transparent, itemized production quotes based on your specific brief." } },
            { "@type": "Question", "name": "Can you produce content in Tamil for the Chennai market?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We work with bilingual scriptwriters, directors, and talent fluent in Tamil. We produce brand content in Tamil, English, and bilingual formats tailored for regional audience resonance." } }
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
