"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    Target, Search, BarChart3, ArrowRight,
    Zap, ShoppingBag, CheckCircle, TrendingUp,
    MousePointer2, Globe, ShieldCheck, PlayCircle
} from 'lucide-react';
import Image from 'next/image';

import WordReveal from '@/components/reactbits/WordReveal';
import ProductShowcase from '@/components/sections/ProductShowcase';
import WebShorties from '@/components/sections/WebShorties';
import ContactShowcase from '@/components/sections/ContactShowcase';
import Partners from '@/components/sections/Partners';
import VideoMessengerInline from '@/components/ui/VideoMessengerInline';
import AeoFaqs from '@/components/sections/AeoFaqs';

const ppcStages = [
    {
        id: 'audit',
        label: 'Account Audit',
        title: 'Identifying Untapped Growth Potential',
        description: 'We dive deep into your existing accounts to find leakages, inefficient bidding, and keyword opportunities you\'re currently missing. No stone left unturned.'
    },
    {
        id: 'strategy',
        label: 'Strategy',
        title: 'Precision-Engineered Funnel Design',
        description: 'We build a multi-channel PPC strategy that aligns with your CAC goals. From high-intent search to visual remarketing, we map the journey from click to conversion.'
    },
    {
        id: 'execution',
        label: 'Execution',
        title: 'Hyper-Targeted Campaign Launch',
        description: 'Our specialists deploy data-driven campaigns across Google, Meta, and LinkedIn. We utilize smart-bidding and proprietary keyword clusters for maximum reach.'
    },
    {
        id: 'optimization',
        label: 'Optimization',
        title: 'Continuous ROI Extraction',
        description: 'PPC is never "set and forget". We perform daily optimizations on ad copy, negative keywords, and landing pages to ensure your ROAS keeps trending upwards.'
    },
    {
        id: 'scale',
        label: 'Scaling',
        title: 'Aggressive Global Growth',
        description: 'Once we find the winning formula, we scale vertically and horizontally. Expanding your brand footprint into new markets and platforms with proven efficiency.'
    }
];

const industries = [
    { name: 'Edutech', icon: <Search size={24} /> },
    { name: 'Fin-Tech', icon: <TrendingUp size={24} /> },
    { name: 'SaaS', icon: <Zap size={24} /> },
    { name: 'E-Commerce', icon: <ShoppingBag size={24} /> },
    { name: 'Health & Fitness', icon: <CheckCircle size={24} /> },
    { name: 'Real-Estate', icon: <Globe size={24} /> },
    { name: 'Hospitality', icon: <BarChart3 size={24} /> },
];

const ppcFaqs = [
  { question: 'What is PPC management and why do I need a specialist?', answer: 'Pay-Per-Click (PPC) management is the ongoing process of planning, launching, monitoring, and optimizing paid advertising campaigns across platforms like Google Ads, Meta, and LinkedIn. A specialist like eXposr uses proprietary scripts, data-driven bid strategies, and advanced audience segmentation that most in-house teams lack the tooling and expertise to replicate—leading to dramatically lower CPCs and higher ROAS.' },
  { question: 'How does Google Smart Bidding actually work?', answer: 'Google Smart Bidding uses machine learning to set bids at auction-time using a vast array of contextual signals including device, location, time of day, search query, and user behavior history. Strategies like Target CPA and Target ROAS instruct Google to bid the precise amount needed to achieve your performance goals. eXposr\'s specialists configure, monitor, and constrain smart bidding with proprietary guard rails to prevent budget inefficiency during the AI\'s learning phases.' },
  { question: 'What is Performance Max and should my brand use it?', answer: 'Performance Max (PMax) is Google\'s goal-based campaign type that uses AI to serve ads across all Google channels (Search, Display, YouTube, Shopping, Maps) from a single campaign. It works best for brands with sufficient conversion data and high-quality creative assets. eXposr assesses whether PMax is appropriate for your current stage and configures asset groups, audience signals, and brand exclusions to maximize signal quality and minimize wasted spend.' },
  { question: 'How do I know if my PPC agency is actually performing?', answer: 'Key performance indicators to monitor include ROAS (return on ad spend), CPA (cost per acquisition), impression share, and click-through rate trends over time—not in isolation. Poor agencies optimize for vanity metrics (clicks, impressions) without tying spend to revenue. eXposr provides transparent reporting dashboards tied to real business outcomes: qualified leads, pipeline generated, and revenue attributed, with weekly performance reviews.' },
  { question: 'What is remarketing and how effective is it for B2B brands?', answer: 'Remarketing delivers targeted ads to users who have previously visited your website or engaged with your content, keeping your brand top-of-mind throughout long B2B buying cycles. eXposr builds layered remarketing audiences segmented by funnel stage—site visitors, product page viewers, free trial sign-ups, and demo requesters—serving relevant, personalized ad experiences that accelerate deals through the pipeline.' },
  { question: 'How do you prevent ad budget waste from invalid clicks and brand bidding?', answer: 'eXposr deploys automated click fraud detection scripts, comprehensive negative keyword management, and placement exclusion lists that continuously protect your budget from irrelevant, fraudulent, or competitor-generated clicks. For brand campaigns, we monitor competitor bidding activity and develop defensive strategies that protect brand CPCs. Our clients typically see a 15-25% immediate improvement in budget efficiency from these measures alone.' },
  { question: 'LinkedIn Ads vs. Google Ads: which is better for SaaS lead generation?', answer: 'For SaaS, both play distinct roles in a mature demand generation strategy. Google Search Ads capture high-intent, bottom-of-funnel demand from prospects actively searching for solutions. LinkedIn Ads enables precise account-based marketing (ABM) by targeting by job title, company size, and industry—creating demand at the top of the funnel and nurturing decision-makers. eXposr builds integrated strategies that leverage both platforms in concert, typically lowering blended CAC significantly.' },
  { question: 'How much ad spend do I need to get started?', answer: 'The minimum effective budget varies by industry and platform. For Google Search campaigns targeting competitive SaaS or B2B keywords, eXposr recommends a minimum of ₹1.5L-₹3L per month to gather statistically significant conversion data. Meta advertising can begin at lower thresholds. We always structure budgets to ensure you have enough data to test, learn, and optimize—avoiding the common mistake of spreading a small budget too thin across too many campaigns.' },
  { question: 'What is a Quality Score and why does it affect my costs?', answer: 'Quality Score is Google\'s measure of the relevance and quality of your keywords, ads, and landing pages, rated 1-10. A high Quality Score directly lowers your cost-per-click (Google rewards relevant advertisers with cheaper clicks) and improves your ad rank. eXposr audits and optimises Quality Scores as a foundational activity, improving ad copy relevance, landing page alignment, and expected CTR to systematically reduce your CPCs across campaigns.' },
  { question: 'Can you run PPC campaigns alongside our existing SEO strategy?', answer: 'Absolutely—and you should. PPC and SEO work best as complementary channels. PPC provides immediate, controllable visibility for high-priority keywords while your organic authority builds. Keyword data from PPC campaigns (actual search queries that convert) informs your SEO content strategy, and organic rankings reduce your dependence on paid traffic over time. eXposr\'s integrated growth approach manages both channels in unison to maximize total search visibility and minimize blended acquisition costs.' },
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
        <div ref={ref} className={`flex flex-col justify-center py-4 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
            <motion.div
                animate={isActive ? { x: 0, opacity: 1 } : { x: -20, opacity: 0.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6 block">STAGE 0{index + 1} / {stage.label}</span>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">
                    {stage.title}
                </h3>
                <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed max-w-2xl">
                    {stage.description}
                </p>
                {/* <div className="mt-12 flex items-center gap-4 group cursor-pointer inline-flex">
                    <span className="text-xs font-black uppercase tracking-widest group-hover:mr-2 transition-all">View Process Details</span>
                    <ArrowRight size={16} className="text-black/40 group-hover:text-brand-orange transition-colors" />
                </div> */}
            </motion.div>
        </div>
    );
}

export default function PPCManagementPage() {
    const [activeId, setActiveId] = useState(ppcStages[0].id);

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-visible">
            {/* Minimalist Hero - Replicated from Hero.tsx logic */}
            <section className="bg-white min-h-[90vh] pt-50  px-6 md:px-12 flex items-start relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">Performance Marketing Experts</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl lg:text-[85px] font-black text-black  mb-12">
                                Dominate Search <br className="hidden lg:block" />
                                Drive Profitable Growth.
                            </h1>

                            <p className="text-xl md:text-2xl text-black/60 max-w-4xl leading-relaxed font-medium mb-12">
                                We manage over $50M+ in annual ad spend with a focus on one metric: Your bottom line. Precision-engineered PPC for ambitious brands.
                            </p>

                            <div className="flex items-center gap-8">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="w-16 h-px bg-black/10"
                                />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 pb-5">Scroll to View Impact</span>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <VideoMessengerInline 
                                title="Scale <span class='text-brand-orange italic'>PPC.</span>"
                                subtitle="Get a Free Campaign Audit"
                                buttonText="Start Campaign Strategy"
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

            {/* About PPC / Impact Section - Replicated from Home Page */}
            <section className="py-8 px-6 bg-black text-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-24">
                        <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">
                            Impact <span className="text-brand-orange italic">Driven.</span>
                        </h2>
                        <WordReveal
                            text="Our PPC management is built on data, not guesses. We combine proprietary scripts with human expertise to deliver 12x average ROAS."
                            className="text-2xl text-white/60 font-medium leading-relaxed max-w-2xl"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { stat: "12x", label: "Average ROAS", desc: "Across our active portfolio" },
                            { stat: "$50M+", label: "Managed Spend", desc: "Annualized performance budget" },
                            { stat: "98%", label: "Retention Rate", desc: "Clients scaling with us" },
                            { stat: "24/7", label: "Monitoring", desc: "Real-time automated protection" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4 border-l border-white/10 pl-8"
                            >
                                <div className="text-6xl font-black tracking-tighter">{item.stat}</div>
                                <div className="text-white/80 font-bold uppercase tracking-widest text-sm">{item.label}</div>
                                <p className="text-sm text-white/40 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Stages (PPC Workflow) - Replicated from ServiceStages.tsx */}
            <section className="py-8 px-6 md:px-12 bg-white text-black font-sans relative overflow-visible">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                        <div className="max-w-3xl">
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-6 block">
                                OUR PERFORMANCE WORKFLOW
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] text-black">
                                Scientific steps <br /> to scaling revenue
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative border-t border-black/5">
                        <div className="hidden lg:flex lg:w-1/4 sticky top-40 h-fit self-start flex-col gap-10 py-10 z-20">
                            {ppcStages.map((stage) => (
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
                                    className={`text-left text-lg md:text-xl font-black transition-all duration-700 flex items-center gap-8 group ${activeId === stage.id
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
                            {ppcStages.map((stage, index) => (
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

            {/* Interactive Product Showcase - Standard Home Component */}
            <ProductShowcase />

            {/* Industries Served - Reproduced Home Grid */}
            <section className="py-8 px-6 bg-white overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-12">
                        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-none">
                            Our Vertical <br /><span className="text-brand-orange">Expertise.</span>
                        </h2>
                        <div className="max-w-md">
                            <p className="text-xl text-black/50 font-medium leading-relaxed">
                                We specialize in high-transaction sectors where efficiency and scale are mission-critical.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {industries.map((industry, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5, backgroundColor: 'rgba(0,0,0,0.05)' }}
                                className="flex flex-col items-center justify-center p-8 rounded-[2rem] border border-black/5 text-center gap-4 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center text-black">
                                    {industry.icon}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-black/50">{industry.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section - Ticker Style */}
            <section className="py-32 px-6 bg-black overflow-hidden border-y border-white/5">
                <div className="container mx-auto mb-24">
                    <div className="text-center">
                        <h2 className="text-sm font-black text-white/20 tracking-[0.5em] uppercase mb-16">Trusted for Performance Excellence</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-12">
                    {[
                        ["AFAQS!", "FOXGLOVE", "MENTOS", "STREAX", "VODAFONE", "IDEA", "AIRTEL"],
                        ["RELIANCE", "JIO", "BYJU'S", "UNACADEMY", "UPGRAD", "SCALER", "ZOMATO"]
                    ].map((row, rowIdx) => (
                        <div key={rowIdx} className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 hover:opacity-100 transition-opacity duration-700">
                            {row.map((client, clientIdx) => (
                                <motion.div
                                    key={clientIdx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.1, color: '#fff' }}
                                    className="text-2xl md:text-4xl font-black tracking-tighter text-white whitespace-nowrap cursor-default"
                                >
                                    {client}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Partners */}
            <Partners />

            {/* AEO FAQ Section */}
            <AeoFaqs
                title="PPC Questions, Answered."
                subtitle="Straight answers to the questions that determine whether your paid media investment delivers 3x or 12x returns."
                faqs={ppcFaqs}
            />

            {/* Final Contact Showcase */}
            <ContactShowcase />
        </div>
    );
}
