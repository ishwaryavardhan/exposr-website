"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Target, Search, Video, BarChart3, ArrowRight,
    MapPin, Phone, Mail, CheckCircle, Send, Zap,
    TrendingUp, Award, Star,
    GraduationCap, Landmark, ShoppingBag, Activity, Home as HomeIcon, Coffee, Users as UsersIcon
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import WebShorties from '@/components/sections/WebShorties';
import Partners from '@/components/sections/Partners';
import AeoFaqs from '@/components/sections/AeoFaqs';

const services = [
    { icon: <Target size={28} />, title: "Performance Marketing", desc: "Data-led Google, Meta & LinkedIn campaigns engineered to maximize ROAS for Bangalore brands." },
    { icon: <Search size={28} />, title: "SEO & AEO Optimization", desc: "Dominate local and national search. We rank Bangalore businesses on page one and inside AI overviews." },
    { icon: <BarChart3 size={28} />, title: "Growth Consultancy", desc: "Full-funnel digital growth strategy tailored to Bangalore's competitive startup and enterprise ecosystem." },
    { icon: <Video size={28} />, title: "Media Production", desc: "High-converting video and visual content built for Bangalore's tech-savvy, premium audience." },
    { icon: <UsersIcon size={28} />, title: "Social Media Management", desc: "Hyper-local social presence for Bangalore's dynamic startup, SaaS and D2C brand landscape." },
    { icon: <Zap size={28} />, title: "AI-Powered Marketing", desc: "Autonomous marketing systems built for Bangalore's fast-paced digital growth environment." }
];

const stats = [
    { stat: "8+", label: "Years in Market" },
    { stat: "50+", label: "Brands Scaled" },
    { stat: "2Cr+", label: "Revenue Generated" },
    { stat: "500+", label: "Keywords Ranked" },
];

const industries = [
    { name: 'Edutech', icon: <GraduationCap size={24} /> },
    { name: 'Fin-Tech', icon: <Landmark size={24} /> },
    { name: 'SaaS', icon: <Zap size={24} /> },
    { name: 'E-Commerce', icon: <ShoppingBag size={24} /> },
    { name: 'Health & Fitness', icon: <Activity size={24} /> },
    { name: 'Real-Estate', icon: <HomeIcon size={24} /> },
    { name: 'Hospitality', icon: <Coffee size={24} /> },
];

const clients = [
    ["Lavie", "Sri Bhojan", "Fue Tree Clinic", "Kanmani Fertility Centre", "VSEP"],
    ["SolarRun", "Happy Socks", "Hard Rockk", "Hungover", "Upfunda"],
    ["Nitrous Oxide Spec", "AppBowl", "Microline", "Limn", "Nine Oh Nine"],
    ["Bajoria Hospitality", "thefsync", "Fluency Arc", "CII SOL", "Roast and Leaf"]
];

const projects = [
    { title: 'Ecommerce Revenue Scaling', category: 'Performance Marketing', description: 'Scaled ecommerce conversions and maximized ROAS through targeted PPC campaigns and data-driven ad optimizations.', image: '/case studies/Exposr/portfolio- PPC/screen shots/Ecommerce.png' },
    { title: 'EdTech / Education Enrollments', category: 'Performance Marketing', description: 'Boosted student enrollments and course purchases with precision-targeted multichannel advertising.', image: '/case studies/Exposr/portfolio- PPC/screen shots/education.png' },
    { title: 'Real Estate Conversions', category: 'Performance Marketing', description: 'Decreased Cost-Per-Acquisition while driving qualified property buyer inquiries through localized performance marketing.', image: '/case studies/Exposr/portfolio- PPC/screen shots/Real Estate.png' },
];

const bangaloreLocalFaqs = [
    { question: 'Why choose eXposr as your digital marketing consultancy in Bangalore?', answer: 'eXposr is India\'s first Agentic AI digital marketing agency with proven expertise in scaling Bangalore\'s fastest-growing startups and enterprise brands. We combine cutting-edge autonomous AI systems with deep Bangalore market intelligence to deliver measurable ROI across all digital channels.' },
    { question: 'What industries do you serve in Bangalore?', answer: 'We have deep expertise serving Bangalore\'s core verticals — SaaS, EdTech, FinTech, D2C E-Commerce, Real Estate, Healthcare, and enterprise technology companies. Our AI systems are calibrated for the specific buyer behavior and competitive dynamics of Bangalore\'s digital market.' },
    { question: 'How quickly can you scale a Bangalore startup with digital marketing?', answer: 'Paid channels (Google Ads, Meta, LinkedIn) typically show measurable results within 2–4 weeks of launch. For startups, we prioritize fast pipeline generation while simultaneously building organic SEO equity that delivers compounding returns at a fraction of the long-term acquisition cost.' },
    { question: 'Do you specialize in B2B SaaS marketing for Bangalore companies?', answer: 'Yes. Bangalore\'s SaaS ecosystem is a core specialization. We run intent-based demand generation, LinkedIn ABM campaigns, and SEO content strategies optimized specifically for SaaS buyer journeys — from awareness through to qualified product trial and conversion.' },
    { question: 'What makes eXposr different from other digital marketing agencies in Bangalore?', answer: 'eXposr is the only Agentic AI marketing agency operating in Bangalore. We don\'t just use AI tools — we build autonomous marketing systems. Our teams of performance engineers, AI architects, and creative strategists consistently deliver higher output, faster iteration cycles, and measurably better KPIs than conventional Bangalore agencies.' },
];

export default function BangaloreDigitalMarketingPage() {
    const [formData, setFormData] = useState({ businessName: '', name: '', email: '', phone: '', service: 'Performance Marketing', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, source: 'Bangalore Location Page' }) });
            const data = await res.json();
            if (res.ok && data.success) { setSuccess(true); setFormData({ businessName: '', name: '', email: '', phone: '', service: 'Performance Marketing', message: '' }); }
            else { setError(data.message || 'Something went wrong'); }
        } catch { setError('Failed to send message. Please try again.'); }
        finally { setIsSubmitting(false); }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-hidden">

            {/* ── Hero ── */}
            <section className="relative bg-black pt-44 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,77,0,0.15)_0%,transparent_60%)] pointer-events-none" />
                <div className="container mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl">
                        <div className="flex items-center gap-3 mb-8">
                            <MapPin size={16} className="text-brand-orange" />
                            <span className="text-brand-orange text-[11px] font-black uppercase tracking-[0.3em]">Bangalore, Karnataka</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            Digital Marketing<br />
                            <span className="text-brand-orange italic font-serif font-light">Growth Consultancy</span><br />
                            in Bangalore.
                        </h1>
                        <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl mb-12">
                            eXposr is Bangalore's premier AI-powered digital growth consultancy. We engineer performance-led marketing systems that scale Karnataka's fastest-growing brands with data and precision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href="#contact" className="inline-flex items-center gap-3 bg-brand-orange text-black font-black px-10 py-5 rounded-2xl text-sm uppercase tracking-widest hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/20">
                                Get a Free Audit <ArrowRight size={18} />
                            </a>
                            <Link href="/services" className="inline-flex items-center gap-3 border-2 border-white/20 text-white font-black px-10 py-5 rounded-2xl text-sm uppercase tracking-widest hover:border-white/60 transition-all">
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <section className="py-16 px-6 bg-brand-orange">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="text-center">
                                <div className="text-5xl font-black text-black tracking-tighter">{item.stat}</div>
                                <div className="text-black/70 font-bold uppercase tracking-widest text-xs mt-2">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services ── */}
            <section className="py-28 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9] uppercase mb-6">
                            Services We<br /><span className="text-brand-orange italic font-serif font-normal">Deliver.</span>
                        </h2>
                        <p className="text-xl text-black/50 font-medium leading-relaxed">End-to-end digital marketing services for Bangalore businesses — from acquisition to retention.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} viewport={{ once: true }} whileHover={{ y: -6 }}
                                className="p-10 rounded-[2.5rem] border border-black/5 bg-neutral-50 hover:shadow-xl hover:shadow-black/5 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform">{svc.icon}</div>
                                <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3">{svc.title}</h3>
                                <p className="text-black/50 font-medium leading-relaxed">{svc.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Web Shorties ── */}
            <WebShorties />

            {/* ── Selected Works / Portfolio ── */}
            <section className="py-28 px-6 bg-black">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-20">
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
                            Selected <span className="text-brand-orange block italic font-serif font-light">Works.</span>
                        </h2>
                        <p className="text-2xl text-white/60 font-medium leading-relaxed max-w-2xl">A curation of our most impactful transformations for brands navigating the Indian digital landscape.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-16">
                        {projects.map((project, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                className="group relative border-b-2 border-white/10 pb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                                <div className="max-w-xl">
                                    <div className="text-white/40 font-black uppercase tracking-[0.2em] text-xs mb-4">0{idx + 1} / {project.category}</div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500">{project.title}</h3>
                                    <p className="text-lg text-white/60 mb-8 max-w-md">{project.description}</p>
                                    <Link href="/portfolio" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm border-b-2 border-white pb-1 hover:text-brand-orange hover:border-brand-orange transition-all">
                                        View Full Portfolio <ArrowRight size={20} />
                                    </Link>
                                </div>
                                <div className="lg:w-1/2 aspect-video bg-neutral-900 rounded-[3rem] overflow-hidden border border-white/10 relative group-hover:shadow-[0_0_40px_rgba(255,77,0,0.2)] transition-all duration-700">
                                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industries We Serve ── */}
            <section className="py-28 px-6 bg-white overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
                        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-none">
                            Industries <br /><span className="text-brand-orange">We Serve.</span>
                        </h2>
                        <div className="max-w-md">
                            <p className="text-xl text-black/50 font-medium leading-relaxed">Specialized growth strategies for Bangalore's most competitive market verticals.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                        {industries.map((industry, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -5 }} viewport={{ once: true }}
                                className="flex flex-col items-center justify-center p-8 rounded-[2rem] border border-black/5 text-center gap-4 transition-all hover:bg-neutral-50">
                                <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center text-black">{industry.icon}</div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-black/50">{industry.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Clientele ── */}
            <section className="py-16 px-6 bg-black overflow-hidden border-y border-white/5">
                <div className="container mx-auto pb-4">
                    <div className="text-center">
                        <h2 className="text-sm font-black text-white/20 tracking-[0.5em] uppercase p-8">Trusted By Forward-Thinking Brands</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-12 group pb-12">
                    {clients.map((row, rowIdx) => (
                        <div key={rowIdx} className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {row.map((client, clientIdx) => (
                                <motion.div key={clientIdx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: (rowIdx * 0.1) + (clientIdx * 0.05) }}
                                    viewport={{ once: true }}
                                    className="text-2xl md:text-4xl font-black tracking-tighter text-white whitespace-nowrap cursor-default opacity-30 group-hover:opacity-10 hover:!opacity-100 hover:!text-brand-orange transition-all duration-300 uppercase">
                                    {client}
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── eXposr Partners ── */}
            <Partners />

            {/* ── FAQs ── */}
            <AeoFaqs
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about eXposr's digital marketing services in Bangalore."
                faqs={bangaloreLocalFaqs}
            />

            {/* ── Why Bangalore Brands Choose eXposr ── */}
            <section className="py-28 px-6 bg-black">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8">
                                Why Bangalore Brands<br />
                                <span className="text-brand-orange italic font-serif font-normal">Choose eXposr.</span>
                            </h2>
                            <p className="text-xl text-white/50 font-medium leading-relaxed mb-12">
                                We understand Bangalore's unique startup and enterprise ecosystem — from Koramangala's D2C hubs to Whitefield's IT corridors. Our strategies are calibrated for Karnataka's digital dynamics.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Deep expertise in Bangalore's hyper-competitive SaaS and startup acquisition market",
                                    "Campaigns engineered for Bangalore's English-first, tech-savvy digital audience",
                                    "AI systems built to scale fast-iteration growth loops across Bangalore's startup ecosystem",
                                    "Proven track record in IT, FinTech, D2C E-Commerce and SaaS in Karnataka"
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-start gap-5">
                                        <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle size={16} className="text-black" />
                                        </div>
                                        <p className="text-white/70 font-medium leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            {[
                                { icon: <TrendingUp size={24} />, title: "AI-First Strategy", desc: "Autonomous systems that optimize campaigns 24/7 without manual intervention." },
                                { icon: <Award size={24} />, title: "Measurable ROI", desc: "Every rupee tracked. Clear attribution across all digital touchpoints." },
                                { icon: <Star size={24} />, title: "Bangalore-Specific Insights", desc: "Deep Karnataka market data informing every campaign decision we make." }
                            ].map((item, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }}
                                    className="p-8 rounded-3xl border border-white/10 bg-white/5 flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center text-black shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="text-white font-black uppercase tracking-tight mb-2">{item.title}</h3>
                                        <p className="text-white/50 font-medium text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Contact CTA ── */}
            <section id="contact" className="py-28 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-[0.9] uppercase mb-8">
                                Ready to Grow<br />
                                <span className="text-brand-orange italic font-serif font-normal">in Bangalore?</span>
                            </h2>
                            <p className="text-xl text-black/50 font-medium leading-relaxed mb-12">
                                Book a free growth strategy session. We'll audit your current digital presence and show you the exact opportunities you're leaving on the table.
                            </p>
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
                            <h3 className="text-2xl font-black text-black mb-8 tracking-tight uppercase">Get a Free Audit</h3>
                            {success ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-3xl flex flex-col items-center text-center space-y-4">
                                    <CheckCircle size={48} className="text-green-500" />
                                    <h4 className="text-xl font-black uppercase">Message Received!</h4>
                                    <p className="font-medium">Our Bangalore growth team will reach out within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {error && <div className="text-red-500 text-sm p-4 bg-red-50 rounded-xl">{error}</div>}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Business Name</label>
                                            <input value={formData.businessName} onChange={e => setFormData({ ...formData, businessName: e.target.value })} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20" placeholder="Your Company" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Full Name</label>
                                            <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Service Required</label>
                                        <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                            <option>Performance Marketing</option>
                                            <option>SEO & Content</option>
                                            <option>Growth Consultancy</option>
                                            <option>Social Media Management</option>
                                            <option>Production House</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Message</label>
                                        <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full border-b-2 border-black/10 py-3 text-black font-semibold focus:outline-none focus:border-black transition-all resize-none placeholder:text-black/20" placeholder="Tell us about your goals..." />
                                    </div>
                                    <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-brand-orange hover:bg-brand-orange/90 text-black font-black rounded-2xl transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 disabled:opacity-50">
                                        {isSubmitting ? 'Sending...' : 'Book Free Audit'} {!isSubmitting && <Send size={16} />}
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
