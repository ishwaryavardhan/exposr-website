"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Film, Camera, Mic, Tv, Play, Video, Layers, Monitor, MapPin, CheckCircle, Send, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

import Partners from '@/components/sections/Partners';
import MediaImpactReveal from '@/components/sections/MediaImpactReveal';
import MediaServicesTimeline from '@/components/sections/MediaServicesTimeline';
import WebShorties from '@/components/sections/WebShorties';
import AeoFaqs from '@/components/sections/AeoFaqs';

// ── Workflow stages ───────────────────────────────────────────────────────────
const stages = [
    { id: 'discovery', label: 'Discovery & Concept', title: 'From Brief to Vision', description: 'Every great production begins with an interrogation of your brief. Our creative directors, strategists, and producers sit with you to understand your brand, your audience, your objectives, and the story you need to tell. We translate ambiguous marketing goals into precise creative mandates — scripts, shot lists, mood boards and casting briefs that leave nothing to chance.' },
    { id: 'preproduction', label: 'Pre-Production', title: 'Planning Every Frame', description: 'Great results are built in pre-production. Our production managers handle location scouting, talent casting, crew hiring, equipment specification, permit acquisition, and detailed shoot schedules. Storyboards are approved. Scripts are locked. By the time shoot day arrives in Chennai, the creative vision is so clearly defined that the entire crew can execute with confidence.' },
    { id: 'production', label: 'On-Location Production', title: 'Execution at the Highest Level', description: 'Our Chennai production crews are equipped with cinema-grade cameras, professional lighting rigs, and broadcast-quality audio gear. Whether shooting a hero brand film on location in Chennai or a high-energy lifestyle shoot across Tamil Nadu — our crews operate with precision, speed, and creative adaptability.' },
    { id: 'postproduction', label: 'Post-Production', title: 'The Art of the Edit', description: 'Post-production is where the real storytelling happens. Our editors, colourists, sound designers and motion graphics artists work together to transform raw footage into finished, broadcast-ready deliverables — with cinematic colour grades, bespoke soundscapes, and motion graphics that reinforce brand personality.' },
    { id: 'delivery', label: 'Distribution & Delivery', title: 'Optimised for Every Platform', description: 'A great video asset has to perform across multiple contexts. We produce platform-optimised cuts for every major channel — 16:9 for YouTube and broadcast, 9:16 for Instagram Reels and TikTok, 1:1 for social feed placements. Captions, metadata and encoding are handled as standard — a deployment-ready content package built for performance from day one.' },
];

const mediaFaqs = [
    { question: 'What media production services does eXposr offer in Chennai?', answer: 'eXposr offers full-stack media production in Chennai including brand films, TVCs, commercial photography, Reels and short-form content, motion graphics, podcast production, corporate videos, event coverage, and post-production services including colour grading and sound design.' },
    { question: 'How much does video production cost in Chennai?', answer: 'Brand film production in Chennai typically ranges from ₹3L for a minimalist single-location shoot to ₹25L+ for multi-location, high-end commercial productions with talent and complex post-production. eXposr provides transparent, itemized production quotes based on your specific brief — no hidden costs.' },
    { question: 'How long does a typical video production project take in Chennai?', answer: 'A social media content series (Reels, product videos) typically takes 2-3 weeks. A brand film or TVC production runs 4-8 weeks including pre-production, shoot days, and post-production. eXposr provides detailed project timelines with client approval checkpoints at every stage.' },
    { question: 'Do you handle location scouting and talent sourcing for Chennai shoots?', answer: 'Yes. Our production management team handles all location scouting across Chennai (including Anna Nagar, OMR, ECR, and studio facilities), talent casting through our established agency network, permit applications, and full logistics coordination for both studio and on-location shoots in Tamil Nadu.' },
    { question: 'Can you produce content in Tamil for the Chennai market?', answer: 'Absolutely. We work with bilingual scriptwriters, directors, and talent who are fluent in Tamil and understand the cultural nuances of the Chennai and broader Tamil Nadu market. We produce brand content in Tamil, English, and bilingual formats tailored for regional audience resonance.' },
    { question: 'Do you offer ongoing content production retainers for Chennai brands?', answer: 'Yes. For Chennai brands requiring consistent social media and digital content output, a production retainer is significantly more cost-effective than commissioning individual projects. Our retainer packages include a fixed monthly volume of Reels, short-form videos, photography, and motion graphics produced on a rolling shoot schedule.' },
];

function StageItem({ stage, index, activeId, setActiveId }: { stage: typeof stages[0], index: number, activeId: string, setActiveId: (id: string) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0% -45% 0%", once: false });
    const isActive = activeId === stage.id;
    useEffect(() => { if (isInView) setActiveId(stage.id); }, [isInView, stage.id, setActiveId]);
    return (
        <div ref={ref} className={`flex flex-col justify-center py-8 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
            <motion.div animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0.5 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6 block">PHASE 0{index + 1} / {stage.label}</span>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">{stage.title}</h3>
                <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-2xl">{stage.description}</p>
            </motion.div>
        </div>
    );
}

export default function ChennaiMediaProductionPage() {
    const [activeId, setActiveId] = useState(stages[0].id);
    const formatsRef = useRef<HTMLDivElement>(null);
    const formatsInView = useInView(formatsRef, { once: true, margin: "-10%" });
    const [formData, setFormData] = useState({ businessName: '', name: '', email: '', phone: '', service: 'Media Production', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); setIsSubmitting(true); setError('');
        try {
            const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, source: 'Chennai Media Production Page' }) });
            const data = await res.json();
            if (res.ok && data.success) { setSuccess(true); setFormData({ businessName: '', name: '', email: '', phone: '', service: 'Media Production', message: '' }); }
            else { setError(data.message || 'Something went wrong'); }
        } catch { setError('Failed to send. Please try again.'); }
        finally { setIsSubmitting(false); }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-hidden">

            {/* ── Hero ── */}
            <section className="bg-white pt-36 pb-4 px-6 md:px-12 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin size={16} className="text-brand-orange" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-orange">Chennai, Tamil Nadu</span>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-brand-orange" />
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">Media Production · Chennai</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-[95px] font-black text-black mb-8 mt-4" style={{ lineHeight: '0.88' }}>
                            Chennai Brands<br />
                            That Get{" "}
                            <span className="text-brand-orange italic">Noticed.<br />Finally.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/60 max-w-3xl leading-relaxed font-medium mb-4 mt-8">
                            Most brands in Chennai look the same. Sound the same. Get ignored the same way.
                        </p>
                        <p className="text-xl md:text-2xl text-black/40 max-w-3xl leading-relaxed font-medium mb-8">
                            eXposr is a full-stack media production studio built to end that — with cinema-grade brand films, scroll-stopping short-form content, and visual identities so sharp they force attention.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start gap-5">
                            <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-5 rounded-full text-lg font-bold hover:bg-black transition-colors duration-300 shadow-xl shadow-brand-orange/20">
                                Start a Production <ArrowRight size={20} />
                            </a>
                            <Link href="/media-production" className="inline-flex items-center gap-3 border-2 border-black/10 text-black font-bold px-8 py-5 rounded-full hover:border-black transition-colors">
                                View Full Studio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Cinematic Impact ── */}
            <MediaImpactReveal />

            {/* ── 3-Pillar Stats ── */}
            <section className="pb-4 pt-12 px-6 bg-black text-white relative z-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {[
                            { stat: "Cinema", label: "Grade Quality", desc: "We deploy the same cameras, lenses, and lighting rigs used in feature film production — because your Chennai brand deserves cinematic quality." },
                            { stat: "Zero", label: "Brief-to-Brief", desc: "Every project begins from your brief. No templated approaches, no recycled concepts. Every production is built uniquely for your brand's specific objectives." },
                            { stat: "Platform", label: "Native Delivery", desc: "We don't just deliver a master file. Every asset is re-cut for every platform — from broadcast to TikTok — as standard in every project." },
                        ].map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
                                className="space-y-4 border-l border-white/10 pl-8">
                                <div className="text-5xl md:text-6xl font-black tracking-tighter text-white">{item.stat}</div>
                                <div className="text-brand-orange font-bold uppercase tracking-widest text-sm">{item.label}</div>
                                <p className="text-sm md:text-base text-white/50 font-medium leading-relaxed mt-4 max-w-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Format Offerings Bento Grid ── */}
            <section className="py-8 px-6 md:px-12 bg-white text-black">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4 block">What We Produce in Chennai</span>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">One brief. Infinite formats.<br /><span className="text-brand-orange italic">Every platform conquered.</span></h2>
                        <p className="text-lg md:text-xl text-black/50 font-medium max-w-3xl leading-relaxed">Whether it's a 90-second hero brand film or a 12-month content retainer for your entire Tamil Nadu marketing calendar — we build every asset to perform, not just to look good.</p>
                    </div>
                    <div ref={formatsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={formatsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="md:col-span-2 group relative bg-black rounded-3xl p-10 flex flex-col justify-between min-h-[360px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/30 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-auto">
                                    <Film size={40} className="text-brand-orange" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20 group-hover:text-brand-orange/60 transition-colors duration-500">01 / Hero Format</span>
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4 leading-none">Brand & TVC Films</h3>
                                    <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-lg">High-impact commercial video built end-to-end — from creative concept and script through to full crew production and broadcast delivery. Your Chennai brand's most powerful asset, crafted with cinematic precision.</p>
                                </div>
                            </div>
                        </motion.div>
                        {[
                            { Icon: Video, num: "02", tag: "Still", title: "Commercial Photography", desc: "Product, lifestyle, editorial and corporate imagery designed to sell — precisely lit, professionally retouched for Chennai brands." },
                            { Icon: Play, num: "03", tag: "Short-Form", title: "Reels & Short-Form", desc: "Scroll-stopping content engineered for platform algorithms and organic virality in the Tamil Nadu market." },
                            { Icon: Layers, num: "04", tag: "Motion", title: "Motion Graphics & Animation", desc: "2D/3D animation and kinetic typography that visualize what live-action cannot." },
                            { Icon: Mic, num: "05", tag: "Audio", title: "Podcast Production", desc: "Broadcast-quality recording, editing, and full episode packaging for thought leadership content." },
                        ].map(({ Icon, num, tag, title, desc }, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={formatsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: (i + 1) * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-black rounded-3xl p-8 flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer border border-white/5 hover:border-brand-orange/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-auto">
                                        <Icon size={32} className="text-white/40 group-hover:text-brand-orange transition-colors duration-400" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/15">{num} / {tag}</span>
                                    </div>
                                    <div className="mt-10">
                                        <h3 className="text-2xl font-black tracking-tight text-white mb-3">{title}</h3>
                                        <p className="text-white/45 text-sm font-medium leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={formatsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7 }}
                            className="md:col-span-3 grid grid-cols-3 divide-x divide-white/10 bg-black rounded-3xl overflow-hidden border border-white/5">
                            {[
                                { Icon: Monitor, num: "06", tag: "Corporate", title: "Corporate Videos", desc: "Investor, product demo, recruitment, and internal comms content for Chennai enterprises." },
                                { Icon: Tv, num: "07", tag: "Events", title: "Event Coverage", desc: "Multi-camera live event and documentary-style brand activation capture across Tamil Nadu." },
                                { Icon: Layers, num: "08", tag: "Post", title: "Post-Production", desc: "Editing, colour grading, sound design and platform-optimised delivery mastering." },
                            ].map(({ Icon, num, tag, title, desc }, i) => (
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
            <section className="py-8 px-6 md:px-12 bg-white text-black font-sans relative overflow-visible">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6 block">The Production Blueprint</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6 text-black">We don't just shoot.<br /><span className="text-brand-orange italic">We architect attention.</span></h2>
                        <p className="text-lg text-black/40 font-medium max-w-2xl leading-relaxed">Most productions get 80% right and deliver 20% of the impact. Our five-phase production system is built to eliminate that gap — from the first brief call to the moment your content goes live across every platform.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative border-t border-black/5 pt-4">
                        <div className="hidden lg:flex lg:w-1/4 sticky top-40 h-fit self-start flex-col gap-10 py-10 z-20">
                            {stages.map((stage) => (
                                <button key={stage.id} onClick={() => { const el = document.getElementById(stage.id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 200, behavior: 'smooth' }); }}
                                    className={`text-left text-lg md:text-xl font-black transition-all duration-700 flex items-center gap-8 group ${activeId === stage.id ? 'text-brand-orange opacity-100 translate-x-4' : 'text-black/5 hover:text-black/20 translate-x-0'}`}>
                                    <span className={`h-[2px] bg-brand-orange transition-all duration-700 ${activeId === stage.id ? 'w-24' : 'w-8 opacity-0'}`} />
                                    {stage.label}
                                </button>
                            ))}
                        </div>
                        <div className="w-full lg:w-3/4">
                            {stages.map((stage, index) => (
                                <div key={stage.id} id={stage.id} className="scroll-mt-[30vh]">
                                    <StageItem stage={stage} index={index} activeId={activeId} setActiveId={setActiveId} />
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

            {/* ── Why Chennai ── */}
            <section className="py-28 px-6 bg-black">
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-brand-orange/10 border border-brand-orange/20 rounded-full px-6 py-2 mb-8">
                                <span className="text-brand-orange text-[11px] font-black uppercase tracking-[0.3em]">Why eXposr · Chennai</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                                Your competitors are<br />
                                already{" "}<span className="text-brand-orange italic font-serif font-normal">filming.</span>
                            </h2>
                            <p className="text-xl text-white/50 font-medium leading-relaxed mb-12 max-w-xl">
                                The question isn't whether to invest in media production. It's whether you can afford to let someone else's content outshine yours in Chennai's market.
                            </p>
                        <div className="space-y-6">
                            {[
                                "Deep knowledge of Chennai's visual culture — from T. Nagar's retail energy to OMR's corporate polish",
                                "On-the-ground crews for shoots across Anna Nagar, OMR, ECR, and premiere studio facilities in Tamil Nadu",
                                "Bilingual production in Tamil and English — content that resonates, not translates",
                                "Single production partner for every format: from hero brand film to daily Instagram Reel"
                            ].map((point, idx) => (
                                <div key={idx} className="flex items-start gap-5">
                                    <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle size={16} className="text-black" />
                                    </div>
                                    <p className="text-white/70 font-medium leading-relaxed text-lg">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Partners ── */}
            <Partners />

            {/* ── FAQs ── */}
            <AeoFaqs title="Media Production FAQs — Chennai." subtitle="Everything you need to know before commissioning your next production in Chennai." faqs={mediaFaqs} />

            {/* ── Contact CTA ── */}
            <section id="contact" className="py-28 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-[0.9] mb-8">
                                Great content doesn't<br />
                                happen by <span className="text-brand-orange italic font-serif font-normal">accident.</span>
                            </h2>
                            <p className="text-xl text-black/50 font-medium leading-relaxed mb-4">Every brand film, every Reel, every campaign asset that gets results — was built on a clear brief and a production team that refused to settle.</p>
                            <p className="text-lg text-black/40 font-medium leading-relaxed mb-12">Brief us. We'll respond with a full production plan and itemised estimate within 48 hours.</p>
                            <div className="space-y-8">
                                <a href="mailto:contact@exposr.co" className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center group-hover:bg-brand-orange transition-colors"><Mail size={20} className="text-white" /></div>
                                    <span className="text-black font-black uppercase tracking-tight">contact@exposr.co</span>
                                </a>
                                <a href="tel:+918300109955" className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center group-hover:bg-brand-orange transition-colors"><Phone size={20} className="text-white" /></div>
                                    <span className="text-black font-black uppercase tracking-tight">+91 83001 09955</span>
                                </a>
                            </div>
                        </div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            className="p-10 md:p-14 rounded-[3rem] bg-neutral-50 border border-black/5">
                            <h3 className="text-2xl font-black text-black mb-8 tracking-tight uppercase">Brief Us</h3>
                            {success ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
                                    <CheckCircle size={48} className="text-green-500" />
                                    <h4 className="text-xl font-black uppercase">Production Brief Received!</h4>
                                    <p className="font-medium">Our Chennai production team will reach out within 48 hours with a detailed proposal.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {error && <div className="text-red-500 text-sm p-4 bg-red-50 rounded-xl">{error}</div>}
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Business Name</label>
                                            <input value={formData.businessName} onChange={e => setFormData({ ...formData, businessName: e.target.value })} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20" placeholder="Your Company" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Full Name</label>
                                            <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Email</label>
                                            <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20" placeholder="name@company.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Phone</label>
                                            <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} pattern="[6-9][0-9]{9}" maxLength={10} onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Enter a valid 10-digit Indian mobile number')} onInput={e => (e.target as HTMLInputElement).setCustomValidity('')} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20" placeholder="98XXXXXXXX" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Production Type</label>
                                        <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                            <option>Media Production</option>
                                            <option>Brand Film / TVC</option>
                                            <option>Commercial Photography</option>
                                            <option>Reels & Short-Form Content</option>
                                            <option>Motion Graphics & Animation</option>
                                            <option>Podcast Production</option>
                                            <option>Corporate / Event Video</option>
                                            <option>Post-Production Only</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Project Brief</label>
                                        <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all resize-none placeholder:text-black/20" placeholder="Tell us about your production project..." />
                                    </div>
                                    <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-brand-orange hover:bg-brand-orange/90 text-black font-black rounded-2xl transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 disabled:opacity-50">
                                        {isSubmitting ? 'Sending...' : 'Send Production Brief'} {!isSubmitting && <Send size={16} />}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
