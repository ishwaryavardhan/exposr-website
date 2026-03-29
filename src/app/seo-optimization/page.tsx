"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    Search, BarChart3, ArrowRight,
    TrendingUp, Globe, ShieldCheck,
    Target, Zap, ShoppingBag, CheckCircle
} from 'lucide-react';

import WordReveal from '@/components/reactbits/WordReveal';
import ProductShowcase from '@/components/sections/ProductShowcase';
import WebShorties from '@/components/sections/WebShorties';
import ContactShowcase from '@/components/sections/ContactShowcase';
import Partners from '@/components/sections/Partners';
import SEOServicesAccordion from '@/components/sections/SEOServicesAccordion';
import SEOImpactReveal from '@/components/sections/SEOImpactReveal';
import LeadForm from '@/components/ui/LeadForm';

const seoStages = [
    {
        id: 'audit',
        label: 'Technical Audit',
        title: 'Laying a Flawless Foundation',
        description: 'We perform deep-crawls to uncover and eradicate technical debt—fixing indexing issues, core web vitals, and architecture flaws that hold your domain back.'
    },
    {
        id: 'strategy',
        label: 'Keyword Strategy',
        title: 'Owning High-Intent Search',
        description: 'Moving beyond vanity metrics, we target semantic clusters and long-tail queries that drive qualified, high-converting organic traffic directly to your funnel.'
    },
    {
        id: 'on-page',
        label: 'On-Page Optimization',
        title: 'Algorithmic Relevance',
        description: 'Every URL is meticulously optimized. From meta data injections to entity-based content framing, we ensure search engines and users instantly recognize your authority.'
    },
    {
        id: 'off-page',
        label: 'Off-Page Authority',
        title: 'Building Long-Term Trust',
        description: 'Through digital PR and relationship-based link building, we acquire high-DR placements that signal undeniable brand prominence to the algorithms.'
    },
    {
        id: 'scale',
        label: 'Content Scaling',
        title: 'The Organic Growth Engine',
        description: 'We deploy programmatic and editorial content strategies, capturing total impression share across the entire buyer journey for compounding, scalable ROI.'
    }
];

function ServiceItem({ stage, index, activeId, setActiveId }: { stage: any, index: number, activeId: string, setActiveId: (id: string) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-45% 0% -45% 0%",
        once: false
    });

    const isActive = activeId === stage.id;

    useEffect(() => {
        if (isInView) {
            setActiveId(stage.id);
        }
    }, [isInView, stage.id, setActiveId]);

    return (
        <div ref={ref} className={` flex flex-col justify-center py-4 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
            <motion.div
                animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6 block">PHASE 0{index + 1} / {stage.label}</span>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">
                    {stage.title}
                </h3>
                <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-2xl">
                    {stage.description}
                </p>
                <div className="mt-12 flex items-center gap-4 group cursor-pointer inline-flex">
                    <span className="text-xs font-black uppercase tracking-widest group-hover:mr-2 transition-all">View Process Details</span>
                    <ArrowRight size={16} className="text-black/40 group-hover:text-brand-orange transition-colors" />
                </div>
            </motion.div>
        </div>
    );
}

export default function SEOOptimizationPage() {
    const [activeId, setActiveId] = useState(seoStages[0].id);

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-visible">
            {/* Minimalist Hero */}
            <section className="bg-white min-h-[90vh] pt-54 pb-8 px-6 md:px-12 flex items-start relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-1 mb-6">
                                <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">Search Engine Optimization</span>
                            </div>
                            
                            <h1 
                                className="text-6xl md:text-8xl lg:text-[95px] font-black text-black mb-8 mt-4"
                                style={{ 
                                    lineHeight: '0.88', 
                                    letterSpacing: '-0.07em',
                                    transformOrigin: 'left center',
                                }}
                            >
                                Stop Chasing Traffic.<br />
                                Build an Organic<br />
                                Growth Engine.
                            </h1>

                            <p className="text-xl md:text-2xl text-black/60 max-w-4xl leading-relaxed font-medium mb-12 mt-8">
                                We transform websites into authority brands that rank, attract, and convert consistently.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                                <a 
                                    href="/contact" 
                                    className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-black transition-colors duration-300 shadow-xl shadow-brand-orange/20"
                                >
                                    Build My Growth Engine
                                    <ArrowRight size={20} />
                                </a>
                                <div className="hidden md:flex items-center gap-6">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="w-16 h-px bg-black/10"
                                    />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">Scroll to View Impact</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <LeadForm 
                                title="Scale <span class='text-brand-orange italic'>SEO.</span>"
                                subtitle="Get a Free SEO Audit"
                                buttonText="Start SEO Journey"
                            />
                            
                            {/* Decorative floating elements */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 w-32 h-32 bg-black/[0.02] rounded-full blur-3xl -z-10" 
                            />
                            <motion.div 
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/[0.02] rounded-full blur-3xl -z-10" 
                            />
                        </div>
                    </div>
                </div>
                {/* Subtle Texture */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />
            </section>

            {/* Impact Section - Tailored for SEO */}
            <SEOImpactReveal />

            <section className="pb-8 pt-12 px-6 bg-black text-white relative z-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {[
                            { stat: "Scalable", label: "ROI Ecosystem", desc: "Unlike paid media, organic growth compounds over time, dramatically lowering your blended acquisition costs as you scale." },
                            { stat: "Organic", label: "Audience Reach", desc: "Position your brand directly in front of active searchers, capturing market share without renting visibility from platforms." },
                            { stat: "Trust", label: "Long-term Dominance", desc: "High organic rankings signal undeniable authority. We build the architecture and PR needed for enduring market trust." },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4 border-l border-white/10 pl-8"
                            >
                                <div className="text-5xl md:text-6xl font-black tracking-tighter text-white">{item.stat}</div>
                                <div className="text-brand-orange font-bold uppercase tracking-widest text-sm">{item.label}</div>
                                <p className="text-sm md:text-base text-white/50 font-medium leading-relaxed mt-4 max-w-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Stages (SEO Workflow) */}
            <section className="py-8 px-6 md:px-12 bg-white text-black font-sans relative overflow-visible flex-grow">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-4">
                        <div className="max-w-3xl">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-6 block">
                                THE ORGANIC BLUEPRINT
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1]  text-black">
                                Engineering your <br /> unfair advantage
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative border-t border-black/5">
                        <div className="hidden lg:flex lg:w-1/4 sticky top-40 h-fit self-start flex-col gap-10 py-10 z-20">
                            {seoStages.map((stage) => (
                                <button
                                    key={stage.id}
                                    onClick={() => {
                                        const el = document.getElementById(stage.id);
                                        if (el) {
                                            const offset = 200;
                                            const bodyRect = document.body.getBoundingClientRect().top;
                                            const elementRect = el.getBoundingClientRect().top;
                                            const elementPosition = elementRect - bodyRect;
                                            const offsetPosition = elementPosition - offset;
                                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                        }
                                    }}
                                    className={`text-left text-lg md:text-xl font-black transition-all duration-700 flex items-center gap-8 group ${
                                        activeId === stage.id
                                            ? 'text-brand-orange opacity-100 translate-x-4'
                                            : 'text-black/5 hover:text-black/20 translate-x-0'
                                        }`}
                                >
                                    <span className={`h-[2px] bg-brand-orange transition-all duration-700 ${activeId === stage.id ? 'w-24' : 'w-8 opacity-0'}`}></span>
                                    {stage.label}
                                </button>
                            ))}
                        </div>

                        <div className="w-full lg:w-3/4">
                            {seoStages.map((stage, index) => (
                                <div key={stage.id} id={stage.id} className="scroll-mt-[30vh]">
                                    <ServiceItem
                                        stage={stage}
                                        index={index}
                                        activeId={activeId}
                                        setActiveId={setActiveId}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive SEO Services Accordion */}
            <SEOServicesAccordion />

            {/* Interactive Product Showcase - reused from Home */}
            <ProductShowcase />

            {/* Partners Section (Recently Added) */}
            <Partners />

            {/* ── Web Shorties ── */}
            <WebShorties />

            {/* ── Shared Sections ── */}
            <ProductShowcase />
        </div>
    );
}
