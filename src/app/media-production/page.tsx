"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Film, Camera, Mic, Tv, Play, Video, Layers, Monitor } from 'lucide-react';

import ProductShowcase from '@/components/sections/ProductShowcase';
import ContactShowcase from '@/components/sections/ContactShowcase';
import Partners from '@/components/sections/Partners';
import MediaImpactReveal from '@/components/sections/MediaImpactReveal';
import MediaServicesTimeline from '@/components/sections/MediaServicesTimeline';
import WebShorties from '@/components/sections/WebShorties';

// ── Workflow stages ─────────────────────────────────────────────────────────
const stages = [
    {
        id: 'discovery',
        label: 'Discovery & Concept',
        title: 'From Brief to Vision',
        description: 'Every great production begins with an interrogation of your brief. Our creative directors, strategists, and producers sit with you to understand your brand, your audience, your objectives, and the story you need to tell. We translate ambiguous marketing goals into precise creative mandates — scripts, shot lists, mood boards, and casting briefs that leave nothing to chance. Pre-production discipline is what separates a great production from an expensive one.',
    },
    {
        id: 'preproduction',
        label: 'Pre-Production',
        title: 'Planning Every Frame',
        description: 'Great results are built in pre-production. Our production managers handle location scouting, talent casting, crew hiring, equipment specification, permit acquisition, and detailed shoot schedules. Storyboards are approved. Scripts are locked. Every contingency is planned. By the time shoot day arrives, the creative vision is so clearly defined that the entire crew can execute with confidence — and our clients can relax knowing everything is under control.',
    },
    {
        id: 'production',
        label: 'On-Location Production',
        title: 'Execution at the Highest Level',
        description: 'Our production crews are equipped with cinema-grade cameras, professional lighting rigs, broadcast-quality audio gear, and an experienced director at the helm. Whether we\'re shooting a hero brand film on a managed studio set, a documentary-style interview series on location, or a high-energy lifestyle shoot across multiple locations — our crews operate with precision, speed, and creative adaptability. We balance technical perfection with a creative atmosphere that draws out the best performances.',
    },
    {
        id: 'postproduction',
        label: 'Post-Production',
        title: 'The Art of the Edit',
        description: 'Post-production is where the real storytelling happens. Our editors, colourists, sound designers, and motion graphics artists work together to transform raw footage into finished, broadcast-ready deliverables. We apply cinematic colour grades that establish mood and identity. We design bespoke soundscapes that enhance emotional impact. We add motion graphics and typography that reinforce brand personality. The result is a final deliverable that looks and sounds distinctly premium — suited for broadcast, digital platforms, and out-of-home display alike.',
    },
    {
        id: 'delivery',
        label: 'Distribution & Delivery',
        title: 'Optimised for Every Platform',
        description: 'A great video asset has to perform across multiple contexts. We produce platform-optimised cuts for every major channel — 16:9 for YouTube and broadcast, 9:16 for Instagram Reels and TikTok, 1:1 for social feed placements, and 4:3 for legacy display networks. Captions, metadata, and platform-specific encoding specifications are handled as standard. We don\'t just hand over a file — we hand over a deployment-ready content package built for performance from the first view.',
    },
];

// ── Production formats showcase ──────────────────────────────────────────────
const formats = [
    { icon: Film, title: "Brand & TVC Films", desc: "High-impact commercial video built for broadcast and digital campaigns." },
    { icon: Camera, title: "Photography", desc: "Product, lifestyle, editorial and corporate imagery engineered to convert." },
    { icon: Play, title: "Reels & Short-Form", desc: "Scroll-stopping short-form content optimised for platform virality." },
    { icon: Layers, title: "Motion Graphics", desc: "2D/3D animation and kinetic typography for complex brand stories." },
    { icon: Mic, title: "Podcast Production", desc: "Studio-quality podcast recording, editing, and full episode packaging." },
    { icon: Video, title: "Corporate Videos", desc: "Investor decks, product demos, recruitment and internal comms content." },
    { icon: Tv, title: "Event Coverage", desc: "Multi-camera live event and documentary-style brand activation capture." },
    { icon: Monitor, title: "Post-Production", desc: "Editing, colour grading, sound design and platform delivery mastering." },
];

// ── Stage item ───────────────────────────────────────────────────────────────
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
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6 block">
                    PHASE 0{index + 1} / {stage.label}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">
                    {stage.title}
                </h3>
                <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-2xl">
                    {stage.description}
                </p>
                <div className="mt-12 flex items-center gap-4 group cursor-pointer">
                    <span className="text-xs font-black uppercase tracking-widest group-hover:mr-2 transition-all">
                        Explore This Phase
                    </span>
                    <ArrowRight size={16} className="text-black/40 group-hover:text-brand-orange transition-colors" />
                </div>
            </motion.div>
        </div>
    );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MediaProductionPage() {
    const [activeId, setActiveId] = useState(stages[0].id);
    const formatsRef = useRef<HTMLDivElement>(null);
    const formatsInView = useInView(formatsRef, { once: true, margin: "-10%" });

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
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">
                                    Media Production
                                </span>
                            </div>

                            <h1
                                className="text-6xl md:text-8xl lg:text-[145px] font-black text-black mb-8 mt-4"
                                style={{ lineHeight: '0.88', letterSpacing: '-0.07em' }}
                            >
                                Every Frame.<br />
                                A{" "}
                                <span className="text-brand-orange italic">Statement.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-black/60 max-w-4xl leading-relaxed font-medium mb-4 mt-8">
                                We are a full-stack media production studio — from concept and script through to post-production, delivery, and platform-ready distribution. We produce brand films, commercials, photography, motion graphics, podcasts, and short-form video that doesn't just look premium — it performs.
                            </p>
                            <p className="text-lg md:text-xl text-black/40 max-w-3xl leading-relaxed font-medium mb-12">
                                Our clients are brands, agencies, and organisations that understand the compounding value of consistently excellent creative output. If you're ready to invest in media production that builds brand equity with every piece, let's start the conversation.
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-black transition-colors duration-300 shadow-xl shadow-brand-orange/20"
                                >
                                    Start a Production
                                    <ArrowRight size={20} />
                                </a>
                                <div className="hidden md:flex items-center gap-6">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="w-16 h-px bg-black/10"
                                    />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">
                                        View Our Process
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />
            </section>

            {/* ── Cinematic Impact ── */}
            <MediaImpactReveal />

            {/* ── 3-Pillar Stats ── */}
            <section className="pb-32 pt-12 px-6 bg-black text-white relative z-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {[
                            {
                                stat: "Cinema",
                                label: "Grade Quality",
                                desc: "We deploy the same cameras, lenses, and lighting rigs used in feature film production — because your brand deserves nothing less than cinematic.",
                            },
                            {
                                stat: "Zero",
                                label: "Brief-to-Brief",
                                desc: "Every project begins from your brief — no templated approaches, no recycled concepts. Every production is built uniquely for your brand's specific objectives.",
                            },
                            {
                                stat: "Platform",
                                label: "Native Delivery",
                                desc: "We don't just deliver a single master file. Every asset is re-cut and re-formatted for every platform — from broadcast to TikTok — as standard in every project.",
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4 border-l border-white/10 pl-8"
                            >
                                <div className="text-5xl md:text-6xl font-black tracking-tighter text-white">
                                    {item.stat}
                                </div>
                                <div className="text-brand-orange font-bold uppercase tracking-widest text-sm">
                                    {item.label}
                                </div>
                                <p className="text-sm md:text-base text-white/50 font-medium leading-relaxed mt-4 max-w-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Format Offerings Bento Grid ── */}
            <section className="py-24 px-6 md:px-12 bg-white text-black">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4 block">
                            What We Produce
                        </span>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                            Every format. Every platform.<br />
                            <span className="text-brand-orange italic">Produced to perfection.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-black/50 font-medium max-w-3xl leading-relaxed">
                            From a single hero brand film to a full-year content production retainer, eXposr Media operates as your dedicated creative production partner — built for scale, obsessed with detail.
                        </p>
                    </div>

                    <div ref={formatsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

                        {/* HERO card — Brand Films (spans 2 cols) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={formatsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="md:col-span-2 group relative bg-black rounded-3xl p-10 flex flex-col justify-between min-h-[360px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-auto">
                                    <Film size={40} className="text-brand-orange" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20 group-hover:text-brand-orange/60 transition-colors duration-500">01 / Hero Format</span>
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4 leading-none">Brand &amp; TVC Films</h3>
                                    <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-lg">
                                        High-impact commercial video built end-to-end — from creative concept and script through to full crew production and broadcast delivery. Your brand's most powerful asset, crafted with cinematic precision.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card — Photography */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={formatsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-black rounded-3xl p-8 flex flex-col justify-between min-h-[360px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-auto">
                                    <Video size={32} className="text-white/40 group-hover:text-brand-orange transition-colors duration-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/15">02 / Still</span>
                                </div>
                                <div className="mt-12">
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3 leading-tight">Commercial Photography</h3>
                                    <p className="text-white/45 text-sm md:text-base font-medium leading-relaxed">
                                        Product, lifestyle, editorial and corporate imagery designed to sell and inspire — precisely lit, professionally retouched.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card — Reels */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={formatsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-black rounded-3xl p-8 flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-auto">
                                    <Play size={32} className="text-white/40 group-hover:text-brand-orange transition-colors duration-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/15">03 / Short-Form</span>
                                </div>
                                <div className="mt-10">
                                    <h3 className="text-2xl font-black tracking-tight text-white mb-3">Reels &amp; Short-Form</h3>
                                    <p className="text-white/45 text-sm font-medium leading-relaxed">
                                        Scroll-stopping content engineered for platform algorithms and organic virality.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card — Motion */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={formatsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-black rounded-3xl p-8 flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-auto">
                                    <Layers size={32} className="text-white/40 group-hover:text-brand-orange transition-colors duration-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/15">04 / Motion</span>
                                </div>
                                <div className="mt-10">
                                    <h3 className="text-2xl font-black tracking-tight text-white mb-3">Motion Graphics &amp; Animation</h3>
                                    <p className="text-white/45 text-sm font-medium leading-relaxed">
                                        2D/3D animation and kinetic typography that visualise what live-action cannot.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card — Podcast (wide) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={formatsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-black rounded-3xl p-8 flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/30 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-auto">
                                    <Mic size={32} className="text-white/40 group-hover:text-brand-orange transition-colors duration-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/15">05 / Audio</span>
                                </div>
                                <div className="mt-10">
                                    <h3 className="text-2xl font-black tracking-tight text-white mb-3">Podcast Production</h3>
                                    <p className="text-white/45 text-sm font-medium leading-relaxed">
                                        Broadcast-quality recording, editing, and full episode packaging for thought leadership content.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom fullwidth strip — remaining 3 services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={formatsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="md:col-span-3 grid grid-cols-3 divide-x divide-white/10 bg-black rounded-3xl overflow-hidden border border-white/5"
                        >
                            {[
                                { icon: Monitor, num: "06", tag: "Corporate", title: "Corporate Videos", desc: "Investor, product demo, recruitment, and internal comms content." },
                                { icon: Tv, num: "07", tag: "Events", title: "Event Coverage", desc: "Multi-camera live event and documentary-style brand activation capture." },
                                { icon: Layers, num: "08", tag: "Post", title: "Post-Production", desc: "Editing, colour grading, sound design and platform-optimised delivery." },
                            ].map(({ icon: Icon, num, tag, title, desc }, i) => (
                                <div key={i} className="group p-8 flex flex-col gap-8 cursor-pointer hover:bg-white/[0.03] transition-colors duration-400">
                                    <div className="flex items-start justify-between">
                                        <Icon size={28} className="text-white/30 group-hover:text-brand-orange transition-colors duration-400" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/15">{num} / {tag}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black tracking-tight text-white mb-2">{title}</h4>
                                        <p className="text-white/35 text-sm font-medium leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Workflow Sticky Rail ── */}
            <section className="py-24 px-6 md:px-12 bg-white text-black font-sans relative overflow-visible">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-20">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6 block">
                            The Production Blueprint
                        </span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6 text-black whitespace-nowrap">
                            How we build your story
                        </h2>
                        <p className="text-lg text-black/40 font-medium max-w-2xl leading-relaxed">
                            Our production process is built around three principles: creative precision, operational excellence, and absolute transparency. From the first brief to the final deliverable, you know exactly where your project stands at every stage.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative border-t border-black/5 pt-20">
                        <div className="hidden lg:flex lg:w-1/4 sticky top-40 h-fit self-start flex-col gap-10 py-10 z-20">
                            {stages.map((stage) => (
                                <button
                                    key={stage.id}
                                    onClick={() => {
                                        const el = document.getElementById(stage.id);
                                        if (el) {
                                            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                                            window.scrollTo({ top: elementPosition - 200, behavior: 'smooth' });
                                        }
                                    }}
                                    className={`text-left text-lg md:text-xl font-black transition-all duration-700 flex items-center gap-8 group ${
                                        activeId === stage.id
                                            ? 'text-brand-orange opacity-100 translate-x-4'
                                            : 'text-black/5 hover:text-black/20 translate-x-0'
                                    }`}
                                >
                                    <span
                                        className={`h-[2px] bg-brand-orange transition-all duration-700 ${
                                            activeId === stage.id ? 'w-24' : 'w-8 opacity-0'
                                        }`}
                                    />
                                    {stage.label}
                                </button>
                            ))}
                        </div>

                        <div className="w-full lg:w-3/4 pb-[40vh]">
                            {stages.map((stage, index) => (
                                <div key={stage.id} id={stage.id} className="scroll-mt-[30vh]">
                                    <StageItem
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

            {/* ── Services Timeline ── */}
            <MediaServicesTimeline />

            {/* ── Web Shorties ── */}
            <WebShorties />

            {/* ── Shared Sections ── */}
            <ProductShowcase />
            <Partners />
            <ContactShowcase />
        </div>
    );
}
