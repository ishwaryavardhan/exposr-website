"use client";

import { m, LazyMotion, domAnimation } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';

const projects = [
    { 
        title: 'Ecommerce Revenue Scaling', 
        category: 'Performance Marketing', 
        description: 'Scaled ecommerce conversions and maximized ROAS through targeted PPC campaigns and data-driven ad optimizations.',
        image: '/case studies/Exposr/portfolio- PPC/screen shots/Ecommerce.png',
        video: '/case studies/Exposr/portfolio- PPC/videos/to be edited 1.mp4'
    },
    { 
        title: 'Interior Design Growth', 
        category: 'Performance Marketing', 
        description: 'Generated high-quality leads for premium interior design services using visually compelling search and display ads.',
        image: '/case studies/Exposr/portfolio- PPC/screen shots/Interior Design.png',
        video: '/case studies/Exposr/portfolio- PPC/videos/to be edited.mp4'
    },
    { 
        title: 'Real Estate Conversions', 
        category: 'Performance Marketing', 
        description: 'Decreased Cost-Per-Acquisition while driving qualified property buyer inquiries through localized performance marketing.',
        image: '/case studies/Exposr/portfolio- PPC/screen shots/Real Estate.png',
        video: '/case studies/Exposr/portfolio- PPC/videos/Screen Recording 2026-01-08 172453.mp4'
    },
    { 
        title: 'EdTech / Education Enrollments', 
        category: 'Performance Marketing', 
        description: 'Boosted student enrollments and course purchases with precision-targeted multichannel advertising.',
        image: '/case studies/Exposr/portfolio- PPC/screen shots/education.png',
        video: '/case studies/Exposr/portfolio- PPC/videos/Screen Recording 2026-01-09 113218.mp4'
    },
    { 
        title: 'Medical & Fertility Leads', 
        category: 'Performance Marketing', 
        description: 'Delivered high-intent patient consultations for specialized medical services while maintaining strict healthcare compliance.',
        image: '/case studies/Exposr/portfolio- PPC/screen shots/medical fertility.png',
        video: '/case studies/Exposr/portfolio- PPC/videos/Screen Recording 2026-01-09 113807.mp4'
    },
];

const geoResults = [
    { name: 'GEO Result 1', image: '/case studies/Exposr/portfolio- PPC/GEO Result/geo-new-1.png' },
    { name: 'GEO Result 2', image: '/case studies/Exposr/portfolio- PPC/GEO Result/geo-new-2.png' },
    { name: 'GEO Result 3', image: '/case studies/Exposr/portfolio- PPC/GEO Result/geo-new-3.png' }
];

const adsResults = [
    { name: 'Google Ads Results', image: '/case studies/google ads and X/google ads results.jpg' },
    { name: 'X Ads Results', image: '/case studies/google ads and X/X ads results.jpg' }
];

const shopifyResults = [
    { name: 'Shopify Orders', image: '/case studies/shoppify/eXposr-orders.jpg' },
    { name: 'Shopify Coffee Brand Growth', image: '/case studies/shoppify/Shopify coffee brand from 2L to 4.5L.jpg' },
    { name: 'Shopify Coffee Brand Overview', image: '/case studies/shoppify/Shopify coffee brand.jpg' }
];

function ImageCarousel({ title, description, items }: { title: string, description: string, items: { name: string, image: string }[] }) {
    return (
        <div className="mb-32">
            <div className="max-w-4xl mb-12">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
                    {title}
                </h2>
                <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
            
            <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
                {items.map((item, idx) => (
                    <div key={idx} className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-center">
                        <div className="aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-white/10 group bg-neutral-900 border-opacity-50 hover:border-brand-orange/50 transition-colors duration-500">
                            <Image 
                                src={item.image} 
                                alt={item.name} 
                                fill 
                                className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]" 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function PortfolioPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate random grid items for the mosaic background
    const gridItems = Array.from({ length: 40 }).map((_, i) => {
        const isWide = i % 7 === 0;
        const isTall = i % 5 === 0;
        const isBrand = i % 11 === 0;
        
        return {
            id: i,
            className: `rounded-xl overflow-hidden relative ${
                isWide ? 'col-span-2' : 'col-span-1'
            } ${
                isTall ? 'row-span-2' : 'row-span-1'
            } ${
                isBrand ? 'bg-brand-orange/20' : 'bg-white/5'
            }`
        };
    });

    return (
        <LazyMotion features={domAnimation}>
            <div className="relative min-h-screen bg-black overflow-hidden pt-44 pb-32 px-6">
            {/* Mosaic Background Grid */}
            <div className="fixed inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
                <m.div 
                    initial={{ y: 0 }}
                    animate={{ y: "-100px", x: "-100px" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 30,
                        ease: "linear"
                    }}
                    className="w-[150vw] h-[150vh] grid gap-4 p-4 -rotate-12 scale-110"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                        gridAutoRows: '180px',
                        gridAutoFlow: 'dense',
                    }}
                >
                    {mounted && gridItems.map((item) => (
                        <div key={item.id} className={item.className}>
                            <div className="absolute inset-0 border border-white/10 rounded-xl" />
                        </div>
                    ))}
                </m.div>
            </div>

            {/* Dark Overlay for Readability */}
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

            {/* Foreground Content */}
            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mb-24">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                        Selected <span className="text-brand-orange block italic font-serif font-light">Works.</span>
                    </h1>
                    <p className="text-2xl text-white/70 font-medium leading-relaxed max-w-2xl">
                        A curation of our most impactful transformations for brands navigating the Indian digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-20">
                    {projects.map((project, idx) => (
                        <m.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative border-b-2 border-white/10 pb-20"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                                <div className="max-w-xl">
                                    <div className="text-white/40 font-black uppercase tracking-[0.2em] text-xs mb-4">
                                        0{idx + 1} / {project.category}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-white/60 mb-8 max-w-md group-hover:translate-x-2 transition-transform duration-500 delay-75">
                                        {project.description}
                                    </p>
                                    <Link href="/performance-marketing" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm border-b-2 border-white pb-1 hover:text-brand-orange hover:border-brand-orange transition-all">
                                        Explore Performance Marketing <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                                <div className="lg:w-1/2 aspect-video bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 relative group-hover:shadow-[0_0_40px_rgba(255,77,0,0.2)] transition-all duration-700">
                                    <Image 
                                        src={project.image} 
                                        alt={project.title} 
                                        fill 
                                        className="object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-700 z-10" 
                                    />
                                    <video
                                        src={project.video}
                                        preload="none"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none"></div>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>
                
                {/* Embedded Segregated Carousels */}
                <div className="mt-40 border-t border-white/10 pt-32">
                    <div className="mb-24">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                            Platform <span className="text-brand-orange block italic font-serif font-light">Deep Dives.</span>
                        </h2>
                        <p className="text-2xl text-white/70 font-medium leading-relaxed max-w-2xl">
                            Visual proof of scaled operations directly from inside our channel dashboards.
                        </p>
                    </div>

                    <ImageCarousel 
                        title="Shopify DTC Growth" 
                        description="Revenue and order volume scaling dashboards for Direct-to-Consumer brands."
                        items={shopifyResults} 
                    />
                    
                    <ImageCarousel 
                        title="Search & Social Ad Results" 
                        description="High ROAS and conversion metrics from complex Google Ads and X (Twitter) campaigns."
                        items={adsResults} 
                    />
                    
                    <ImageCarousel 
                        title="Generative Engine Optimization (GEO)" 
                        description="Dominating AI overviews and zero-click search environments for massive organic impressions."
                        items={geoResults} 
                    />
                </div>
            </div>
            </div>
        </LazyMotion>
    );
}
