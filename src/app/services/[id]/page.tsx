"use client";

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Target, Search, Video, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import WebShorties from '@/components/sections/WebShorties';

const serviceData = {
    ppc: {
        title: 'Performance Marketing',
        desc: 'Maximize your ROI with data-driven advertising across India\'s most used platforms.',
        icon: <Target size={40} />,
        approach: ['Deep Audience Research', 'A/B Creative Testing', 'Real-time Optimization', 'Local Language Targeting']
    },
    seo: {
        title: 'SEO & Content Growth',
        desc: 'Dominate search results across India with a localized, technical-first SEO strategy.',
        icon: <Search size={40} />,
        approach: ['Technical Site Audits', 'Regional Keyword Research', 'High-Authority Backlinks', 'Content Hub Strategy']
    },
    production: {
        title: 'Production House',
        desc: 'Engaging, high-standard video production localized for the diverse Indian demographic.',
        icon: <Video size={40} />,
        approach: ['Conceptualization', 'Storyboard Design', 'On-Location Shoot', 'High-End Post Production']
    }
};

export default function ServiceDetail() {
    const params = useParams();
    const id = params.id as string;
    const service = serviceData[id as keyof typeof serviceData] || serviceData.ppc;

    return (
        <div className="pt-44 pb-32 px-6 bg-white">
            <div className="container mx-auto">
                <Link href="/services" className="inline-flex items-center gap-2 text-black/40 font-black uppercase tracking-[0.2em] text-[10px] mb-16 hover:text-black transition-colors">
                    <ArrowLeft size={16} /> Back to Capabilities
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <div>
                        <div className="w-20 h-20 rounded-3xl bg-black text-white flex items-center justify-center mb-10 shadow-2xl shadow-black/10">
                            {service.icon}
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.9] uppercase">
                            {service.title}
                        </h1>
                        <p className="text-2xl text-black/50 font-medium leading-relaxed max-w-xl">
                            {service.desc}
                        </p>
                    </div>

                    <div className="p-12 md:p-16 rounded-[4rem] bg-neutral-50 border border-black/5">
                        <h3 className="text-2xl font-black text-black mb-10 tracking-tight uppercase">Strategic Approach</h3>
                        <div className="space-y-6">
                            {service.approach.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-5 p-6 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <CheckCircle2 className="text-black shrink-0" size={24} />
                                    <span className="text-lg font-bold text-black/70">{step}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-24 -mx-6 md:mx-0 rounded-[3rem] overflow-hidden">
                    <WebShorties />
                </div>

                <div className="p-20 md:p-32 rounded-[5rem] bg-black text-white text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none uppercase">
                        Ready to <span className="text-white/30 italic font-serif font-light underline">Ignite</span> Your Growth?
                    </h2>
                    <Link href="/contact" className="inline-block px-16 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform shadow-2xl shadow-white/10">
                        Connect with Experts
                    </Link>
                </div>
            </div>
        </div>
    );
}
