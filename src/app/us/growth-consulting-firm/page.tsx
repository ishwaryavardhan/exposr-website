"use client";

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRight, Target, Search, BarChart3, Video,
    Users, Zap, Globe, CheckCircle, Send, Mail, Phone,
    TrendingUp, Layers, ShieldCheck, Brain, Rocket, DollarSign
} from 'lucide-react';
import Link from 'next/link';
import BlurText from '@/components/reactbits/BlurText';
import WordReveal from '@/components/reactbits/WordReveal';
import DecryptedText from '@/components/reactbits/DecryptedText';
import CountUp from '@/components/reactbits/CountUp';

// ── Services ─────────────────────────────────────────────────────────────────
const services = [
    {
        icon: <Target size={28} />,
        title: "Performance Marketing",
        desc: "We build and manage paid acquisition systems across Google, Meta, and LinkedIn — engineered for US market ROAS, not vanity metrics.",
        tag: "Paid Acquisition"
    },
    {
        icon: <Search size={28} />,
        title: "SEO & GEO Optimization",
        desc: "Organic dominance across traditional search and AI-powered answer engines. We rank your brand where US buyers are looking — including ChatGPT and Perplexity.",
        tag: "Organic Growth"
    },
    {
        icon: <BarChart3 size={28} />,
        title: "Growth Strategy & Consulting",
        desc: "Full-funnel GTM design, channel mix audits, pipeline modeling and revenue attribution frameworks — built for B2B and D2C brands scaling in the US.",
        tag: "GTM Strategy"
    },
    {
        icon: <Brain size={28} />,
        title: "AI-Powered Marketing Systems",
        desc: "We architect autonomous marketing engines using AI agents — demand generation workflows, predictive targeting and real-time bid optimization that outperform human-managed campaigns.",
        tag: "Agentic AI"
    },
    {
        icon: <Users size={28} />,
        title: "Social Media Management",
        desc: "Platform-native content strategies for LinkedIn, X, Instagram, and TikTok — built for US audience behavior and category authority.",
        tag: "Social & Brand"
    },
    {
        icon: <Video size={28} />,
        title: "Media Production",
        desc: "Cinema-grade brand films, SaaS product demos, short-form content and motion graphics — produced to perform across every US digital channel.",
        tag: "Content Studio"
    },
    {
        icon: <Layers size={28} />,
        title: "PPC Management",
        desc: "Hands-on Google Ads, Microsoft Ads, and LinkedIn campaign architecture — built for US competitive landscapes with continuous optimization loops.",
        tag: "Paid Search"
    },
    {
        icon: <Rocket size={28} />,
        title: "Influencer & Creator Marketing",
        desc: "Strategic influencer partnerships and creator programs built for US audience credibility — from nano-creators to category-defining thought leaders.",
        tag: "Creator Economy"
    },
];

// ── Differentiators ────────────────────────────────────────────────────────
const differentiators = [
    {
        icon: <Brain size={32} />,
        title: "We're Not An Agency. We're An AI System.",
        desc: "While US agencies still rely on human decision-making loops that take days, eXposr deploys autonomous AI agents that optimize campaigns in real time — 24 hours a day, 7 days a week. We compress weeks of manual testing into hours of machine-driven iteration.",
    },
    {
        icon: <Globe size={32} />,
        title: "Global Intelligence, US-Market Precision.",
        desc: "We bring pattern recognition from scaling brands across multiple international markets — giving US brands an unfair advantage. We know what works, what doesn't, and where the opportunities are before your US-only competitors have even started testing.",
    },
    {
        icon: <DollarSign size={32} />,
        title: "Revenue Attribution — Not Vanity Dashboards.",
        desc: "We don't report on impressions and followers. Every engagement we run is architectured against pipeline influence and revenue attribution from day one. Our clients see exactly what marketing is generating — in dollars.",
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "No Lock-In. Just Results.",
        desc: "We don't believe in long-term retainer traps. We earn renewal every single month by delivering measurable growth. Our contracts are performance-aligned — when you grow, we grow. That's the only model we operate under.",
    },
];

const stats = [
    { end: 50, suffix: '+', label: 'Brands Scaled Globally' },
    { end: 8, suffix: '+', label: 'Years of Market Expertise' },
    { end: 500, suffix: '+', label: 'Keywords Ranked Page 1' },
    { end: 300, suffix: '%', label: 'Avg. ROAS Improvement' },
];

const faqs = [
    {
        q: "What makes eXposr different from US-based growth agencies?",
        a: "eXposr is the only Agentic AI growth firm operating in the US market. We don't use AI as a tool — we deploy autonomous marketing systems that execute, optimize, and scale campaigns without human bottlenecks. This means faster iteration, lower cost-per-lead, and compounding performance gains that conventional agencies cannot deliver."
    },
    {
        q: "What industries do you specialize in for the US market?",
        a: "We work across SaaS, EdTech, FinTech, D2C E-Commerce, Healthcare, Real Estate, and enterprise technology. Our AI systems are trained on US-specific buyer behavior patterns, allowing for precision targeting that outperforms generalist approaches."
    },
    {
        q: "How quickly can you generate measurable ROI for a US business?",
        a: "Paid channels (Google, Meta, LinkedIn) typically show measurable results within 2–4 weeks. Organic SEO and GEO strategies build sustainable visibility over 3–6 months with compounding returns. We architect a blended strategy to ensure immediate pipeline coverage while building long-term brand equity."
    },
    {
        q: "Do you work with early-stage startups or only enterprise brands?",
        a: "Both. We work with Series A SaaS startups building their first US go-to-market engine and enterprise brands unlocking new acquisition channels in the American market. Our modular model scales with your growth stage."
    },
    {
        q: "What does a growth consulting engagement look like?",
        a: "We start with a comprehensive audit of your current digital performance, competitive landscape, and growth model. We then deliver a tailored 90-day roadmap, begin execution, and provide weekly performance reporting with monthly strategic reviews. Most clients see a clear ROI projection within the first strategy call."
    },
];

// ── Budget tiers keyed by service starting price ────────────────────────────
const STANDARD_BUDGETS = [
    '$1,000 – $2,500 / mo',
    '$2,500 – $5,000 / mo',
    '$5,000 – $10,000 / mo',
    '$10,000 – $25,000 / mo',
    '$25,000+ / mo',
];

const PREMIUM_BUDGETS = [
    '$6,000 – $10,000 / mo',
    '$10,000 – $25,000 / mo',
    '$25,000 – $50,000 / mo',
    '$50,000+ / mo',
];

const PREMIUM_SERVICES = ['AI Marketing Systems — from $6,000/mo', 'Full-Service Growth Partnership — from $6,000/mo'];

export default function USGrowthConsultingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '', email: '', businessUrl: '', phone: '',
        service: 'Growth Consulting — from $1,000/mo',
        budget: STANDARD_BUDGETS[0],
        message: ''
    });
    const [budgetOptions, setBudgetOptions] = useState(STANDARD_BUDGETS);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleServiceChange = (service: string) => {
        const isPremium = PREMIUM_SERVICES.includes(service);
        const options = isPremium ? PREMIUM_BUDGETS : STANDARD_BUDGETS;
        setBudgetOptions(options);
        setFormData(prev => ({ ...prev, service, budget: options[0] }));
    };
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); setIsSubmitting(true); setError('');
        try {
            const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, businessName: formData.businessUrl, source: 'US Growth Consulting Page', country: 'US' }) });
            const data = await res.json();
            if (res.ok && data.success) {
                setSuccess(true);
                const resetBudgets = STANDARD_BUDGETS;
                setBudgetOptions(resetBudgets);
                setFormData({ name: '', email: '', businessUrl: '', phone: '', service: 'Growth Consulting — from $1,000/mo', budget: resetBudgets[0], message: '' });
            }
            else { setError(data.message || 'Something went wrong'); }
        } catch { setError('Failed to send. Please try again.'); }
        finally { setIsSubmitting(false); }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-hidden">

            {/* ── HERO — Parallax + DecryptedText ── */}
            <section ref={heroRef} className="relative bg-black min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
                {/* Animated grid background */}
                <div className="absolute inset-0 z-0 opacity-[0.06]" style={{
                    backgroundImage: 'linear-gradient(rgba(255,77,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,1) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}>
                    <motion.div className="absolute inset-0" animate={{ backgroundPosition: ['0px 0px', '80px 80px'] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} />
                </div>

                {/* Glowing orb */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange rounded-full blur-[120px] pointer-events-none z-0"
                />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto relative z-10 max-w-7xl">
                    {/* Location pill */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 border border-brand-orange/30 bg-brand-orange/10 rounded-full px-6 py-2.5 mb-10">
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                        <span className="text-brand-orange text-[11px] font-black uppercase tracking-[0.4em]">United States · Growth Consulting</span>
                    </motion.div>

                    {/* Main headline with DecryptedText on key word */}
                    <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl xl:text-[110px] font-black text-white tracking-tighter leading-[0.87] mb-8">
                        The US Market<br />
                        Doesn't Reward{" "}
                        <span className="text-brand-orange italic font-serif font-light">
                            <DecryptedText text="Average." speed={40} maxIterations={12} delay={800} />
                        </span>
                    </motion.h1>

                    {/* Hook subtext with BlurText */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="max-w-3xl mb-4">
                        <BlurText
                            text="American buyers are the most saturated, most skeptical, and most valuable in the world."
                            className="text-2xl text-white/70 font-semibold leading-relaxed"
                            delay={60}
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="max-w-3xl mb-12">
                        <BlurText
                            text="eXposr is the AI-first growth consultancy built to break through — engineering the paid acquisition systems, organic visibility strategies, and brand narratives that compound revenue at scale."
                            className="text-xl text-white/40 font-medium leading-relaxed"
                            delay={30}
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }} className="flex flex-col sm:flex-row gap-5">
                        <a href="#contact" className="inline-flex items-center gap-3 bg-brand-orange text-black font-black px-10 py-5 rounded-2xl text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-2xl shadow-brand-orange/20 group">
                            Book a Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link href="/services" className="inline-flex items-center gap-3 border border-white/20 text-white font-black px-10 py-5 rounded-2xl text-sm uppercase tracking-widest hover:border-white/60 hover:bg-white/5 transition-all">
                            Our Services
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                    <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em]">Scroll</span>
                </motion.div>
            </section>

            {/* ── LIVE STATS — CountUp ── */}
            <section className="py-20 px-6 bg-brand-orange">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }} viewport={{ once: true }}
                                className="text-center">
                                <div className="text-5xl md:text-6xl font-black text-black tracking-tighter">
                                    <CountUp end={stat.end} suffix={stat.suffix} duration={2000} />
                                </div>
                                <div className="text-black/60 font-bold uppercase tracking-widest text-xs mt-3">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE US PROBLEM STATEMENT ── */}
            <section className="py-28 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                                <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] mb-6 block">The Reality</span>
                                <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-[0.9] mb-8">
                                    US growth is the<br />hardest game{" "}
                                    <span className="text-brand-orange italic font-serif font-light">on earth.</span>
                                </h2>
                            </motion.div>
                            <WordReveal
                                text="The American market has the highest CPCs, the most sophisticated buyers, and the fiercest competition across every category. Most global brands fail not because their product isn't good — but because their growth engine wasn't built for this level of competition."
                                className="text-xl text-black/50 font-medium leading-relaxed"
                            />
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10">
                                <WordReveal
                                    text="eXposr was built specifically for this challenge. We combine AI-driven performance systems, deep US market intelligence, and a cross-channel growth strategy architecture that turns complex buyer journeys into predictable revenue."
                                    className="text-lg text-black/40 font-medium leading-relaxed"
                                />
                            </motion.div>
                        </div>

                        <div className="space-y-4">
                            {[
                                { label: "Average US CAC vs Global Average", val: "3.2x Higher", icon: <TrendingUp size={18} /> },
                                { label: "Buyer Research Touchpoints Before Conversion", val: "8–12 Touches", icon: <Search size={18} /> },
                                { label: "Brands That Fail US Market Entry", val: "74%", icon: <Target size={18} /> },
                                { label: "eXposr Client Retention Rate", val: "94%", icon: <CheckCircle size={18} /> },
                            ].map((item, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.12, duration: 0.6 }} viewport={{ once: true }}
                                    className="flex items-center justify-between p-6 rounded-2xl border border-black/5 bg-neutral-50 hover:border-brand-orange/20 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-all">{item.icon}</div>
                                        <span className="text-black/60 font-semibold text-sm">{item.label}</span>
                                    </div>
                                    <span className="text-black font-black text-lg tracking-tight">{item.val}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ── */}
            <section className="py-28 px-6 bg-black">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 block">What We Do</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                                Every channel.<br />Every format.<br />
                                <span className="text-brand-orange italic font-serif font-light">One growth system.</span>
                            </h2>
                        </motion.div>
                        <WordReveal
                            text="We don't sell individual services. We build integrated growth ecosystems where every channel reinforces every other — creating compounding returns that siloed agencies can't match."
                            className="text-xl text-white/40 font-medium leading-relaxed"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((svc, idx) => (
                            <motion.div key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.06, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, borderColor: 'rgba(255,77,0,0.4)' }}
                                className="p-8 rounded-3xl border border-white/5 bg-white/[0.03] flex flex-col gap-6 transition-all duration-500 group cursor-default">
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-xl border border-brand-orange/20 bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black group-hover:border-brand-orange transition-all duration-300">
                                        {svc.icon}
                                    </div>
                                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest border border-white/10 rounded-full px-3 py-1">{svc.tag}</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-lg tracking-tight mb-3 group-hover:text-brand-orange transition-colors">{svc.title}</h3>
                                    <p className="text-white/40 text-sm font-medium leading-relaxed">{svc.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW WE STAND OUT ── */}
            <section className="py-28 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mb-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em] mb-6 block">Why eXposr</span>
                            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9] mb-8">
                                The US has thousands<br />of agencies.
                                <span className="text-brand-orange italic font-serif font-light block">Only one of us.</span>
                            </h2>
                        </motion.div>
                        <WordReveal
                            text="We're not competing with US agencies on their terms. We're operating by an entirely different model — one that makes the traditional agency approach commercially obsolete."
                            className="text-xl text-black/50 font-medium leading-relaxed"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {differentiators.map((diff, idx) => (
                            <motion.div key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.12, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className="p-10 rounded-[2.5rem] border border-black/5 bg-neutral-50 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 group">
                                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-black transition-all duration-300">
                                    {diff.icon}
                                </div>
                                <h3 className="text-2xl font-black text-black tracking-tight mb-4">{diff.title}</h3>
                                <p className="text-black/50 font-medium leading-relaxed">{diff.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS — Horizontal Step ── */}
            <section className="py-28 px-6 bg-black overflow-hidden">
                <div className="container mx-auto">
                    <div className="max-w-3xl mb-20">
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 block">The Engagement Model</span>
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                            From zero to growth<br />
                            <span className="text-brand-orange italic font-serif font-light">in 4 phases.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {[
                            { num: "01", title: "Growth Audit", desc: "We audit your current digital footprint, competitive landscape, and revenue model to identify the highest-leverage growth opportunities in the US market." },
                            { num: "02", title: "Strategy Design", desc: "We build a 90-day GTM roadmap — channel mix, budget allocation, creative briefs, and success metrics — aligned to your specific US revenue goals." },
                            { num: "03", title: "System Execution", desc: "Our AI systems launch, learn, and optimize campaigns continuously. No waiting weeks for human review cycles. Performance compounds from day one." },
                            { num: "04", title: "Scale & Compound", desc: "We reinvest insights from winning campaigns into new channels and formats. Every dollar works harder. Every month outperforms the last." },
                        ].map((step, idx) => (
                            <motion.div key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative p-10 border-l border-white/10 group hover:bg-white/[0.03] transition-colors duration-500">
                                <div className="text-[80px] font-black text-white/5 group-hover:text-brand-orange/10 transition-colors leading-none mb-4">{step.num}</div>
                                <h3 className="text-white font-black text-xl tracking-tight mb-4 group-hover:text-brand-orange transition-colors">{step.title}</h3>
                                <p className="text-white/40 text-sm font-medium leading-relaxed">{step.desc}</p>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="absolute bottom-0 left-0 h-[2px] bg-brand-orange origin-left w-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQS ── */}
            <section className="py-28 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
                        <h2 className="text-5xl font-black text-black tracking-tighter uppercase mb-4">
                            Frequently Asked<br /><span className="text-brand-orange italic font-serif font-normal">Questions.</span>
                        </h2>
                        <p className="text-lg text-black/40 font-medium">Everything you need to know before we start scaling your US growth.</p>
                    </motion.div>
                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} viewport={{ once: true }}
                                className="border border-black/5 rounded-3xl overflow-hidden">
                                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full text-left px-10 py-8 flex items-center justify-between gap-6 hover:bg-neutral-50 transition-colors">
                                    <span className="text-black font-black uppercase tracking-tight text-sm">{faq.q}</span>
                                    <motion.span animate={{ rotate: openFaq === idx ? 45 : 0 }} transition={{ duration: 0.2 }}
                                        className="text-2xl text-brand-orange shrink-0 font-black w-8 h-8 flex items-center justify-center border border-brand-orange/30 rounded-full">+</motion.span>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden">
                                    <p className="px-10 pb-8 text-black/60 font-medium leading-relaxed">{faq.a}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT CTA ── */}
            <section id="contact" className="py-28 px-6 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,77,0,0.12)_0%,transparent_65%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <span className="text-[10px] font-black text-brand-orange uppercase tracking-[0.4em] mb-6 block">Ready to Grow in the US?</span>
                                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                                    Stop leaving US<br />revenue on{" "}
                                    <span className="text-brand-orange italic font-serif font-light">the table.</span>
                                </h2>
                            </motion.div>
                            <WordReveal
                                text="Book a 45-minute US growth strategy session. We'll audit your current performance, map the exact opportunities you're missing, and show you the path to compounding American market growth."
                                className="text-xl text-white/50 font-medium leading-relaxed mb-12"
                            />
                            <div className="space-y-6">
                                <a href="mailto:contact@exposr.co" className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors"><Mail size={20} className="text-white" /></div>
                                    <span className="text-white font-black uppercase tracking-tight">contact@exposr.co</span>
                                </a>
                                <a href="tel:+918300109955" className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors"><Phone size={20} className="text-white" /></div>
                                    <span className="text-white font-black uppercase tracking-tight">+91 83001 09955</span>
                                </a>
                            </div>
                        </div>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            className="p-10 md:p-14 rounded-[3rem] bg-white">
                            <h3 className="text-2xl font-black text-black mb-2 tracking-tight uppercase">Book My Campaign Strategy</h3>
                            <p className="text-black/40 text-sm font-medium mb-8">We respond within 24 hours — guaranteed.</p>
                            {success ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
                                    <CheckCircle size={48} className="text-green-500" />
                                    <h4 className="text-xl font-black uppercase">Strategy Session Booked!</h4>
                                    <p className="font-medium">Our US growth team will reach out within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {error && <div className="text-red-500 text-sm p-4 bg-red-50 rounded-xl">{error}</div>}

                                    {/* Row 1: Name + Email */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Name</label>
                                            <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm placeholder:text-black/30 transition-all" placeholder="John Smith" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Email ID</label>
                                            <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm placeholder:text-black/30 transition-all" placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    {/* Business URL */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Business URL</label>
                                        <input value={formData.businessUrl} onChange={e => setFormData({ ...formData, businessUrl: e.target.value })} className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm placeholder:text-black/30 transition-all" placeholder="https://yourcompany.com" />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Phone Number</label>
                                        <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm placeholder:text-black/30 transition-all" placeholder="+1 (555) 000-0000" />
                                    </div>

                                    {/* Services Required */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Services Required</label>
                                        <div className="relative">
                                            <select value={formData.service} onChange={e => handleServiceChange(e.target.value)} className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm appearance-none cursor-pointer transition-all">
                                                <option>Growth Consulting — from $1,000/mo</option>
                                                <option>Performance Marketing — from $1,000/mo</option>
                                                <option>SEO &amp; GEO Optimization — from $1,000/mo</option>
                                                <option>AI Marketing Systems — from $6,000/mo</option>
                                                <option>PPC Management — from $1,000/mo</option>
                                                <option>Social Media Management — from $1,000/mo</option>
                                                <option>Media Production — from $1,000/mo</option>
                                                <option>Influencer &amp; Creator Marketing — from $1,000/mo</option>
                                                <option>Full-Service Growth Partnership — from $6,000/mo</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/40">▾</div>
                                        </div>
                                    </div>

                                    {/* Project Budget */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Project Budget (USD)</label>
                                        <div className="relative">
                                            <select value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm appearance-none cursor-pointer transition-all">
                                                {budgetOptions.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/40">▾</div>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Service You Want</label>
                                        <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange/40 text-sm resize-none placeholder:text-black/30 transition-all" placeholder="Tell us about your goals and current challenges..." />
                                    </div>

                                    <motion.button disabled={isSubmitting} type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                        className="w-full py-5 bg-black hover:bg-brand-orange text-white hover:text-black font-black rounded-2xl transition-all duration-300 uppercase tracking-[0.15em] text-sm flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl">
                                        {isSubmitting ? 'Sending...' : 'Book My Campaign Strategy'} {!isSubmitting && <Send size={16} />}
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
