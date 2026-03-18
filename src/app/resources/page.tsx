"use client";

import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, ArrowRight } from 'lucide-react';

const resources = [
    {
        title: "2024 Indian Digital Report",
        type: "Guide",
        icon: <BookOpen size={24} />,
        desc: "Insights into consumer behavior in Tier 1 & 2 cities."
    },
    {
        title: "Scaling D2C in India",
        type: "Video",
        icon: <Video size={24} />,
        desc: "A video series on full-funnel marketing strategies."
    },
    {
        title: "SEO Checklist for Local Brands",
        type: "Checklist",
        icon: <FileText size={24} />,
        desc: "A comprehensive guide to local SEO in regional languages."
    }
];

export default function ResourcesPage() {
    return (
        <div className="pt-44 pb-32 px-6 bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-24">
                    <h1 className="text-6xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.9]">
                        Knowledge <span className="text-brand-orange block italic font-serif font-light">Hub.</span>
                    </h1>
                    <p className="text-2xl text-black/50 font-medium leading-relaxed max-w-2xl">
                        Exclusive insights designed to help entrepreneurs dominate the Indian marketplace.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                    {resources.map((res, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-12 rounded-[3.5rem] bg-neutral-50 border border-black/5 hover:border-black hover:bg-black hover:text-white transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-brand-orange text-black flex items-center justify-center mb-10 group-hover:bg-white group-hover:text-black transition-colors">
                                {res.icon}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-40 group-hover:opacity-60">{res.type}</div>
                            <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:translate-x-2 transition-transform">
                                {res.title}
                            </h3>
                            <p className="text-black/40 font-medium leading-relaxed flex-grow group-hover:text-white/60 transition-colors">{res.desc}</p>
                            <button className="mt-12 flex items-center gap-3 font-black text-sm uppercase tracking-widest group-hover:gap-6 transition-all">
                                Access Now <ArrowRight size={20} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="p-16 md:p-24 rounded-[5rem] bg-black text-white relative overflow-hidden group">
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none uppercase">
                            Subscribe to <br />
                            <span className="text-brand-orange italic font-serif font-light">Insights.</span>
                        </h2>
                        <p className="text-white/60 text-xl font-medium mb-12 max-w-xl leading-relaxed">Get the latest digital marketing trends in the Indian landscape directly to your inbox.</p>
                        <form className="flex flex-col md:flex-row gap-6">
                            <input className="flex-grow bg-white/10 border border-white/10 rounded-[1.5rem] px-8 py-5 text-white font-bold outline-none focus:bg-white/20 transition-all placeholder:text-white/20" placeholder="Email Address" />
                            <button className="bg-brand-orange text-black px-12 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl shadow-brand-orange/10">Subscribe</button>
                        </form>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] -skew-x-12 translate-x-1/4 group-hover:translate-x-1/3 transition-transform duration-1000"></div>
                </div>
            </div>
        </div>
    );
}
