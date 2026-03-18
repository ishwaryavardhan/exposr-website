"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Instagram, Youtube, Twitter, Linkedin, TrendingUp, Users, BarChart3, Zap } from 'lucide-react';

import ProductShowcase from '@/components/sections/ProductShowcase';
import WebShorties from '@/components/sections/WebShorties';
import ContactShowcase from '@/components/sections/ContactShowcase';
import Partners from '@/components/sections/Partners';
import SMMImpactReveal from '@/components/sections/SMMImpactReveal';
import SMMServicesTimeline from '@/components/sections/SMMServicesTimeline';

const smmStages = [
    {
        id: 'audit',
        label: 'Brand Audit',
        title: 'Diagnosing Your Social Presence',
        description: 'We begin with a comprehensive audit across all your social channels — analysing engagement rates, content quality, audience demographics, and competitive positioning to identify exact growth levers.'
    },
    {
        id: 'strategy',
        label: 'Content Strategy',
        title: 'Building Your Content Engine',
        description: 'Every post has a purpose. We develop a data-backed content calendar aligned to your brand voice, audience intent, and platform algorithms — ensuring every piece drives measurable outcomes.'
    },
    {
        id: 'creation',
        label: 'Creative Production',
        title: 'Content That Stops the Scroll',
        description: 'From short-form Reels to long-form LinkedIn thought leadership, our creative team produces scroll-stopping content designed for platform virality and brand recall.'
    },
    {
        id: 'community',
        label: 'Community Management',
        title: 'Building Loyal Brand Communities',
        description: 'We actively engage with your audience — responding, nurturing, and converting followers into brand advocates. Community building is the long game that separates leading brands from the rest.'
    },
    {
        id: 'scale',
        label: 'Growth & Reporting',
        title: 'Data-Driven Scaling',
        description: 'Real-time dashboards, monthly performance reports, and continuous A/B testing of formats, captions, and posting schedules ensure your social growth compounds with every cycle.'
    }
];

function StageItem({ stage, index, activeId, setActiveId }: { stage: any, index: number, activeId: string, setActiveId: (id: string) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0% -45% 0%", once: false });
    const isActive = activeId === stage.id;

    useEffect(() => {
        if (isInView) setActiveId(stage.id);
    }, [isInView, stage.id, setActiveId]);

    return (
        <div ref={ref} className={`min-h-[70vh] flex flex-col justify-center py-24 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
            <motion.div
                animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6 block">PHASE 0{index + 1} / {stage.label}</span>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">{stage.title}</h3>
                <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-2xl">{stage.description}</p>
                <div className="mt-12 flex items-center gap-4 group cursor-pointer">
                    <span className="text-xs font-black uppercase tracking-widest group-hover:mr-2 transition-all">View Process Details</span>
                    <ArrowRight size={16} className="text-black/40 group-hover:text-brand-orange transition-colors" />
                </div>
            </motion.div>
        </div>
    );
}

const platforms = [
    { icon: Instagram, name: "Instagram", color: "from-purple-500 to-pink-500", handle: "@yourbrand" },
    { icon: Youtube, name: "YouTube", color: "from-red-500 to-red-600", handle: "youtube.com/c/yourbrand" },
    { icon: Twitter, name: "X (Twitter)", color: "from-gray-700 to-black", handle: "@yourbrand" },
    { icon: Linkedin, name: "LinkedIn", color: "from-blue-600 to-blue-700", handle: "linkedin.com/company/yourbrand" },
];

export default function SocialMediaManagementPage() {
    const [activeId, setActiveId] = useState(smmStages[0].id);

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-visible">

            {/* ── Hero ── */}
            <section className="bg-white min-h-[90vh] pt-60 pb-32 px-6 md:px-12 flex items-start relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <div className="max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-3 h-3 rounded-full bg-brand-orange" />
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">Social Media Management</span>
                            </div>

                            <h1
                                className="text-6xl md:text-8xl lg:text-[145px] font-black text-black mb-8 mt-4"
                                style={{ lineHeight: '0.88', letterSpacing: '-0.07em' }}
                            >
                                Stop Posting.<br />
                                Start<br />
                                <span className="text-brand-orange italic">Dominating.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-black/60 max-w-4xl leading-relaxed font-medium mb-12 mt-8">
                                We build and manage social media ecosystems that grow audiences, build communities, and convert followers into loyal customers — at scale.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-black transition-colors duration-300 shadow-xl shadow-brand-orange/20"
                                >
                                    Grow My Social
                                    <ArrowRight size={20} />
                                </a>
                                <div className="hidden md:flex items-center gap-6">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="w-16 h-px bg-black/10"
                                    />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">See the Framework</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Platform icons floating */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-10">
                    {platforms.map(({ icon: Icon }, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                            className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center"
                        >
                            <Icon size={28} className="text-white" />
                        </motion.div>
                    ))}
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />
            </section>

            {/* ── Cinematic Impact ── */}
            <SMMImpactReveal />

            {/* ── 3-Pillar Stats ── */}
            <section className="pb-32 pt-12 px-6 bg-black text-white relative z-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {[
                            { stat: "10x", label: "Audience Reach", desc: "Strategic platform management multiplies your organic reach by converting passive followers into active brand advocates." },
                            { stat: "Always", label: "Brand Consistency", desc: "Every post, story, and reply is crafted to a unified voice — building trust and recognition across every touchpoint." },
                            { stat: "Viral", label: "Content Potential", desc: "We engineer content that's built for shares. Format testing, trend-jacking, and platform-native creation maximise virality." },
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

            {/* ── Platforms We Manage ── */}
            <section className="py-24 px-6 md:px-12 bg-white text-black">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4 block">Platforms</span>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
                            Where your audience lives,<br />
                            <span className="text-brand-orange italic">we are already there.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {platforms.map(({ icon: Icon, name, color, handle }, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="group relative bg-black rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-[200px] cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                <Icon size={36} className="text-white/70 group-hover:text-white transition-colors duration-300" />
                                <div>
                                    <p className="text-white font-black text-xl tracking-tight">{name}</p>
                                    <p className="text-white/30 text-xs mt-1 font-medium">{handle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Workflow Sticky Rail ── */}
            <section className="py-24 px-6 md:px-12 bg-white text-black font-sans relative overflow-visible">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                        <div className="max-w-3xl">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-6 block">The Social Blueprint</span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-10 text-black">
                                Engineering your<br /> social dominance
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative border-t border-black/5 pt-20">
                        <div className="hidden lg:flex lg:w-1/4 sticky top-40 h-fit self-start flex-col gap-10 py-10 z-20">
                            {smmStages.map((stage) => (
                                <button
                                    key={stage.id}
                                    onClick={() => {
                                        const el = document.getElementById(stage.id);
                                        if (el) {
                                            const offset = 200;
                                            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                                            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
                                        }
                                    }}
                                    className={`text-left text-lg md:text-xl font-black transition-all duration-700 flex items-center gap-8 group ${
                                        activeId === stage.id
                                            ? 'text-brand-orange opacity-100 translate-x-4'
                                            : 'text-black/5 hover:text-black/20 translate-x-0'
                                    }`}
                                >
                                    <span className={`h-[2px] bg-brand-orange transition-all duration-700 ${activeId === stage.id ? 'w-24' : 'w-8 opacity-0'}`} />
                                    {stage.label}
                                </button>
                            ))}
                        </div>

                        <div className="w-full lg:w-3/4 pb-[40vh]">
                            {smmStages.map((stage, index) => (
                                <div key={stage.id} id={stage.id} className="scroll-mt-[30vh]">
                                    <StageItem stage={stage} index={index} activeId={activeId} setActiveId={setActiveId} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services Timeline ── */}
            <SMMServicesTimeline />

            {/* ── Web Shorties ── */}
            <WebShorties />

            {/* ── Shared Sections ── */}
            <ProductShowcase />
            <Partners />
            <ContactShowcase />
        </div>
    );
}
