const fs = require('fs');
const path = require('path');

const absoluteSrcAppDir = path.join(__dirname, 'src', 'app');

const routes = [
    { dir: 'solutions/branding', title: 'Branding Solutions | eXposr India', name: 'Branding Solutions', description: 'Transform your identity with eXposr’s comprehensive branding solutions.' },
    { dir: 'social-media-management', title: 'Social Media Management Services | eXposr India', name: 'Social Media Management', description: 'Scale your brand with eXposr’s data-driven social media management.' },
    { dir: 'services', title: 'Digital Marketing Services | eXposr India', name: 'Digital Marketing Services', description: 'Comprehensive performance marketing, SEO, and branding services by eXposr.' },
    { dir: 'seo-optimization', title: 'SEO Optimization Services | eXposr India', name: 'SEO Optimization', description: 'Dominate organic search with eXposr’s advanced SEO and AEO optimization strategies.' },
    { dir: 'resources', title: 'Digital Marketing Resources | eXposr India', name: 'Resources', description: 'Explore guides, insights, and resources on digital marketing.' },
    { dir: 'ppc-management', title: 'PPC Management Services | eXposr India', name: 'PPC Management', description: 'Maximize ROAS with eXposr’s highly targeted Google and PPC ad campaigns.' },
    { dir: 'performance-marketing', title: 'Performance Marketing | eXposr India', name: 'Performance Marketing', description: 'Revenue-focused performance marketing solutions for brands.' },
    { dir: 'media-production', title: 'Media Production Services | eXposr India', name: 'Media Production', description: 'High-end visual media and video production engineered to convert.' },
    { dir: 'influencer-marketing-for-brands', title: 'Influencer Marketing for Brands | eXposr India', name: 'Influencer Marketing', description: 'Amplify reach natively using eXposr’s curated influencer networks.' },
    { dir: 'contact', title: 'Contact eXposr | Digital Marketing Agency', name: 'Contact Us', description: 'Get in touch with eXposr to accelerate your digital growth.' },
    { dir: 'clients', title: 'Our Clients | eXposr India', name: 'Our Clients', description: 'Discover the innovative brands scaling their revenue with eXposr.' },
    { dir: 'case-studies', title: 'Digital Marketing Case Studies | eXposr India', name: 'Case Studies', description: 'In-depth case studies analyzing our performance marketing strategies.' },
    { dir: 'blog', title: 'Digital Marketing Blog | eXposr India', name: 'Blog', description: 'Insights, trends, and strategies on digital marketing and performance scaling.' },
    { dir: 'portfolio', title: 'Performance Marketing Portfolio | eXposr India', name: 'Portfolio', description: 'Explore eXposr\'s performance marketing and Shopify DTC scaling portfolio.' }
];

const generateLayoutContent = (route) => {
    return `import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "${route.title}",
    description: "${route.description}",
    alternates: {
        canonical: "https://www.xposr.com/${route.dir.replace(/\/$/, '')}",
    },
    openGraph: {
        title: "${route.title}",
        description: "${route.description}",
        url: "https://www.xposr.com/${route.dir.replace(/\/$/, '')}",
    }
};

const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "${route.title}",
        "url": "https://www.xposr.com/${route.dir.replace(/\/$/, '')}",
        "description": "${route.description}",
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
                "name": "${route.name}",
                "item": "https://www.xposr.com/${route.dir.replace(/\/$/, '')}"
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
            />
            {children}
        </>
    );
}`;
};

routes.forEach(route => {
    const layoutPath = path.join(absoluteSrcAppDir, route.dir, 'layout.tsx');
    const dirMap = path.dirname(layoutPath);
    if (!fs.existsSync(dirMap)) {
        fs.mkdirSync(dirMap, { recursive: true });
    }
    fs.writeFileSync(layoutPath, generateLayoutContent(route));
});
