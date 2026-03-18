"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Target, TrendingUp, Users } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';

const caseStudies = [
    {
        brand: 'TechNexus India',
        title: '340% Increase in Enterprise Leads',
        stats: '₹12M pipeline generated',
        tags: ['PPC', 'B2B'],
        icon: <Target size={24} />
    },
    {
        brand: 'LuxeLiving',
        title: 'Reducing CPL by 65% on Meta Ads',
        stats: '1,200+ qualified inquiries',
        tags: ['Social', 'Real Estate'],
        icon: <TrendingUp size={24} />
    },
    {
        brand: 'EduStream',
        title: 'Ranking #1 for Competitive EdTech Keywords',
        stats: '85k Organic Traffic/mo',
        tags: ['SEO', 'Content'],
        icon: <Users size={24} />
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="pt-44 pb-32 px-6 bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-24">
                    <h1 className="text-6xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.9]">
                        Impact <span className="text-brand-orange block italic font-serif font-light">Stories.</span>
                    </h1>
                    <p className="text-2xl text-black/50 font-medium leading-relaxed max-w-2xl">
                        Measurable growth delivered for visionary brands across the subcontinent.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 overflow-hidden rounded-[4rem] border border-black/5 bg-neutral-50/50">
                    {caseStudies.map((cs, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white p-12 md:p-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 hover:bg-black hover:text-white transition-all duration-700"
                        >
                            <div className="flex-1">
                                <div className="font-black uppercase tracking-[0.2em] text-[10px] mb-6 opacity-40 group-hover:text-white group-hover:opacity-100 transition-all">{cs.brand}</div>
                                <h3 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-tight uppercase">
                                    {cs.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-8 group-hover:text-white transition-all">
                                    <div className="text-2xl md:text-3xl font-black tracking-tight">{cs.stats}</div>
                                    <div className="flex gap-3">
                                        {cs.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase font-black tracking-widest border border-current px-3 py-1.5 rounded-full opacity-30 group-hover:opacity-100">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-20 h-20 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500 shrink-0">
                                <ArrowUpRight size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
