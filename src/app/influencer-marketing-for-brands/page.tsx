"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { 
    Users, 
    Globe, 
    BarChart3, 
    MousePointer2, 
    Zap, 
    ShieldCheck, 
    Target, 
    TrendingUp,
    Star,
    Play
} from 'lucide-react';
import Image from 'next/image';
import WebShorties from '@/components/sections/WebShorties';

const stats = [
    { label: "Top Creators", value: "500+", icon: <Users size={20} /> },
    { label: "Global Presence", value: "12+", icon: <Globe size={20} /> },
    { label: "Avg. ROAS", value: "8.5x", icon: <BarChart3 size={20} /> },
    { label: "Mo. Reach", value: "15M+", icon: <MousePointer2 size={20} /> },
];

const services = [
    {
        title: "Strategic Advisory",
        desc: "Tailored influencer strategies aligned with your brand's core KPIs and growth goals.",
        icon: <Target className="text-brand-orange" size={24} />
    },
    {
        title: "Campaign Operations",
        desc: "End-to-end management from brief creation to final content approval and tracking.",
        icon: <Zap className="text-pink-500" size={24} />
    },
    {
        title: "Creator Matching",
        desc: "Data-driven selection process ensuring perfect alignment with your brand voice.",
        icon: <Users className="text-blue-500" size={24} />
    }
];

export default function InfluencerMarketingPage() {
    const containerRef = useRef(null);
    const expertiseRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: expertiseProgress } = useScroll({
        target: expertiseRef,
        offset: ["start start", "end end"]
    });

    // Smooth values for page-wide parallax
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    // Smooth values for Expertise section specifically
    const smoothExpertise = useSpring(expertiseProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const heroY = useTransform(smoothProgress, [0, 0.2], [0, -100]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

    // Expertise Header Animations
    const expertiseHeaderOpacity = useTransform(smoothExpertise, [0.1, 0.4], [1, 0.2]);
    const expertiseHeaderScale = useTransform(smoothExpertise, [0, 0.3], [1, 0.95]);

    return (
        <div ref={containerRef} className="min-h-screen bg-white selection:bg-brand-orange selection:text-black">
            {/* Hero Section */}
            <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-black text-white rounded-b-[3.5rem] md:rounded-b-[5rem] lg:sticky lg:top-0">
                <motion.div 
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 py-24 md:py-32 lg:py-0"
                >
                    <div className="text-center lg:text-left">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/20 text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 border border-brand-orange/20"
                        >
                            <Star size={10} fill="currentColor" /> Premium Managed Service
                        </motion.span>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                            Scale Your <br />
                            <span className="text-brand-orange italic font-serif font-light text-4xl sm:text-6xl md:text-7xl lowercase">Impact</span> Globally.
                        </h1>
                        <p className="text-white/40 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Expert-led campaign management powered by proprietary matching technology and real-time performance tracking.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6">
                            <button className="bg-brand-orange text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl shadow-brand-orange/20">
                                Launch Campaign
                            </button>
                            <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                                <Play size={14} fill="white" /> Book a Demo
                            </button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <motion.div 
                            animate={{ 
                                y: [0, -20, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ 
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative aspect-square md:aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <Image 
                                src="/influencer_marketing_hero_main.png" 
                                alt="Influencer Marketing" 
                                fill 
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                        {/* Floating elements */}
                        <motion.div 
                            style={{ y: useTransform(smoothProgress, [0, 1], [0, -200]) }}
                            className="absolute -top-10 -right-10 p-8 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center">
                                    <TrendingUp size={28} className="text-black" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/40 leading-none mb-1">Success</div>
                                    <div className="text-2xl font-black">94% ROI</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                
                {/* Parallax Background Elements */}
                <motion.div 
                    style={{ y: useTransform(smoothProgress, [0, 1], [0, 400]) }}
                    className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none"
                />
            </section>

            {/* Statistics Section */}
            <section className="relative z-20 py-24 md:py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {stats.map((s, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-[#F8FAFC] border border-black/5 text-center group hover:bg-black hover:text-white transition-all duration-500"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-white border border-black/5 flex items-center justify-center text-black mb-6 md:mb-8 mx-auto group-hover:scale-110 transition-transform shadow-sm">
                                    {s.icon}
                                </div>
                                <div className="text-3xl md:text-5xl font-black mb-2 md:mb-4 tracking-tighter">{s.value}</div>
                                <div className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-black/30 group-hover:text-white/40">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stacking Service Cards */}
            <section ref={expertiseRef} className="py-24 px-6 bg-black text-white overflow-visible rounded-t-[3.5rem] md:rounded-t-[5rem]">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div 
                        style={{ opacity: expertiseHeaderOpacity, scale: expertiseHeaderScale }}
                        className="lg:sticky lg:top-32 h-fit mb-24 md:mb-40 text-center lg:text-left z-0"
                    >
                        <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                            What we <br />
                            <span className="text-brand-orange italic font-serif font-light text-4xl md:text-7xl lowercase">deliver.</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-12 md:space-y-40 pb-20 md:pb-40">
                        {services.map((s, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="lg:sticky lg:top-[30rem] p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] bg-[#111] border border-white/5 shadow-2xl flex flex-col md:flex-row gap-10 md:gap-16 items-center"
                                style={{
                                    marginTop: i === 0 ? 0 : "-5vh",
                                    zIndex: i + 10
                                }}
                            >
                                <div className="w-full md:w-1/2">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-brand-orange">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-none">{s.title}</h3>
                                    <p className="text-white/40 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                        {s.desc}
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 aspect-video rounded-[2.5rem] overflow-hidden bg-white/10 relative">
                                    <Image src="/campaign_performance_graph.png" alt={s.title} fill className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Web Shorties ── */}
            <WebShorties />

            {/* Bento Success Cases */}
            <section className="py-24 md:py-40 px-6 bg-white overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20 md:mb-32">
                        <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Case Studies</span>
                        <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none uppercase text-black">
                            Proven <span className="text-brand-orange italic font-serif font-light text-3xl md:text-7xl lowercase">Results</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-fit lg:h-[800px]">
                        <motion.div 
                            whileHover={{ scale: 0.98 }}
                            className="md:col-span-8 bg-[#F8FAFC] rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 overflow-hidden relative group border border-black/5"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-6 block">E-commerce / Fashion</span>
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-8 leading-none">LuxeVibe <br />Global Launch</h3>
                                </div>
                                <div className="grid grid-cols-3 gap-8 pt-10 border-t border-black/5">
                                    <div><div className="text-2xl md:text-3xl font-black">10.2x</div><div className="text-[10px] font-black uppercase text-black/30 tracking-widest">ROAS</div></div>
                                    <div><div className="text-2xl md:text-3xl font-black">1.2M</div><div className="text-[10px] font-black uppercase text-black/30 tracking-widest">Clicks</div></div>
                                    <div><div className="text-2xl md:text-3xl font-black">4.2%</div><div className="text-[10px] font-black uppercase text-black/30 tracking-widest">CVR</div></div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 group-hover:opacity-100 transition-opacity duration-700">
                                <Image src="/blog/article_5.png" alt="LuxeVibe" fill className="object-cover" />
                            </div>
                        </motion.div>

                        <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
                            <motion.div 
                                whileHover={{ scale: 0.98 }}
                                className="flex-1 bg-black text-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-10 overflow-hidden relative group"
                            >
                                <div className="relative z-10">
                                    <h4 className="text-xl md:text-2xl font-black uppercase mb-4">GlowUp Beauty</h4>
                                    <div className="text-brand-orange text-2xl md:text-3xl font-black">7.8x ROI</div>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                whileHover={{ scale: 0.98 }}
                                className="flex-1 bg-brand-orange text-black rounded-[3rem] md:rounded-[4rem] p-8 md:p-10 flex flex-col justify-center items-center text-center"
                            >
                                <div className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">+500</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Verified Creators</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="p-12 md:p-32 rounded-[3.5rem] md:rounded-[5rem] bg-black text-white relative overflow-hidden text-center group">
                        <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-none uppercase mb-12">
                            Redefine <br />
                            <span className="text-brand-orange italic font-serif font-light text-4xl md:text-8xl lowercase">Influence.</span>
                        </h2>
                        <p className="text-white/40 text-lg md:text-2xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                            Join 2,000+ brands cutting through the noise with data-driven creator marketing.
                        </p>
                        <button className="relative z-10 bg-brand-orange text-black px-10 py-6 md:px-14 md:py-7 rounded-3xl font-black uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-transform shadow-2xl shadow-brand-orange/20">
                            Get Started Now
                        </button>
                        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[6000px] bg-brand-orange/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
