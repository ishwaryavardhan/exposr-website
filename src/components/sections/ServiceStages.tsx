"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        id: 'seo',
        label: 'SEO',
        title: 'Dominate Search & Drive Organic Growth',
        description: 'Comprehensive SEO strategies tailored for the Indian market. From technical audits to multilingual content and local SEO, we ensure your brand stays at the top of the search results.'
    },
    {
        id: 'web-dev',
        label: 'Website Development',
        title: 'Modern, Scalable & High-Conversion Digital Platforms',
        description: 'We build fast, responsive, and secure websites that don’t just look good but are engineered to convert. Specializing in Next.js, headless commerce, and intuitive design.'
    },
    {
        id: 'paid-ads',
        label: 'Paid Ads',
        title: 'Hyper-Targeted Advertising with Proven ROI',
        description: 'Strategic ad campaigns across social and search platforms. We optimize your ad spend to reach the right audience at the right time, minimizing CAC and maximizing ROI.'
    },
    {
        id: 'performance-marketing',
        label: 'Performance Marketing',
        title: 'Data-Driven Strategies for Aggressive Scaling',
        description: 'Advanced marketing funnels and attribution modeling. We focus on the metric that matters most: your bottom line. Scalable growth solutions for ambitious startups.'
    },
    {
        id: 'media-production',
        label: 'Media Production',
        title: 'Cinematic Storytelling for the Digital Age',
        description: 'Global-standard media production including TVCs, digital ads, and social content. We craft visual experiences that resonate with diverse Indian and global audiences.'
    }
];

const ServiceItem = ({ service, index, activeId, setActiveId }: { service: any, index: number, activeId: string, setActiveId: (id: string) => void }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-45% 0% -45% 0%",
        once: false
    });

    const isActive = activeId === service.id;

    useEffect(() => {
        if (isInView) {
            setActiveId(service.id);
        }
    }, [isInView, service.id, setActiveId]);

    return (
        <div ref={ref} className={`min-h-[70vh] flex flex-col justify-center py-24 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
            <motion.div
                animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6 block">0{index + 1} / {service.label}</span>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">
                    {service.title}
                </h3>
                <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-2xl">
                    {service.description}
                </p>
                <div className="mt-12 flex items-center gap-4 group cursor-pointer inline-flex">
                    <span className="text-xs font-black uppercase tracking-widest group-hover:mr-2 transition-all">Explore Service</span>
                    <ArrowRight size={16} className="text-black/40 group-hover:text-brand-orange transition-colors" />
                </div>
            </motion.div>
        </div>
    );
};

const ServiceStages = () => {
    const [activeId, setActiveId] = useState(services[0].id);

    return (
        <section className="py-24 px-6 md:px-12 bg-white text-black font-sans relative overflow-visible">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                    <div className="max-w-3xl">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-6 block">
                            FULL-STACK DIGITAL GROWTH SERVICES
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-10 text-black">
                            Comprehensive strategies <br /> from launch to scale
                        </h2>
                    </div>
                </div>

                {/* Main Content with Sticky Nav */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative border-t border-black/5 pt-20">

                    {/* Left Sticky Nav - Rail Style */}
                    <div className="hidden lg:flex lg:w-1/4 sticky top-40 h-fit self-start flex-col gap-10 py-10 z-20">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => {
                                    const el = document.getElementById(service.id);
                                    if (el) {
                                        const offset = 200; // Offset for sticky header if any
                                        const bodyRect = document.body.getBoundingClientRect().top;
                                        const elementRect = el.getBoundingClientRect().top;
                                        const elementPosition = elementRect - bodyRect;
                                        const offsetPosition = elementPosition - offset;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className={`text-left text-lg md:text-xl font-black transition-all duration-700 flex items-center gap-8 group ${activeId === service.id
                                        ? 'text-brand-orange opacity-100 translate-x-4'
                                        : 'text-black/5 hover:text-black/20 translate-x-0'
                                    }`}
                            >
                                <span className={`h-[2px] bg-brand-orange transition-all duration-700 ${activeId === service.id ? 'w-24' : 'w-8 opacity-0'}`}></span>
                                {service.label}
                            </button>
                        ))}
                    </div>

                    {/* Right Scrollable Content */}
                    <div className="w-full lg:w-3/4 pb-[40vh]"> {/* Bottom padding for scroll trigger space */}
                        {services.map((service, index) => (
                            <div key={service.id} id={service.id} className="scroll-mt-[30vh]">
                                <ServiceItem
                                    service={service}
                                    index={index}
                                    activeId={activeId}
                                    setActiveId={setActiveId}
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Scroll Progress Indicator - Global Detail */}
            <div className="fixed right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 z-50">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`w-1 h-1 rounded-full transition-all duration-700 ${activeId === service.id
                                ? 'bg-brand-orange h-16 ring-8 ring-brand-orange/5'
                                : 'bg-black/10'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServiceStages;
