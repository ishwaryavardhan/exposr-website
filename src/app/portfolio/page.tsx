"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';

const projects = [
    { title: 'Project One', category: 'Digital Strategy', image: '/portfolio/p1.jpg' },
    { title: 'Project Two', category: 'Performance Marketing', image: '/portfolio/p2.jpg' },
    { title: 'Project Three', category: 'Content Production', image: '/portfolio/p3.jpg' },
];

export default function PortfolioPage() {
    return (
        <div className="pt-44 pb-32 px-6 bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-24">
                    <h1 className="text-6xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.9]">
                        Selected <span className="text-brand-orange block italic font-serif font-light">Works.</span>
                    </h1>
                    <p className="text-2xl text-black/50 font-medium leading-relaxed max-w-2xl">
                        A curation of our most impactful transformations for brands navigating the Indian digital landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-20">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative border-b-2 border-black/5 pb-20"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                                <div className="max-w-xl">
                                    <div className="text-black/30 font-black uppercase tracking-[0.2em] text-xs mb-4">0{idx + 1} / {project.category}</div>
                                    <h3 className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <button className="flex items-center gap-3 text-black font-black uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:opacity-50 transition-all">
                                        View Case Study <ArrowUpRight size={20} />
                                    </button>
                                </div>
                                <div className="lg:w-1/2 aspect-video bg-neutral-100 rounded-[3rem] overflow-hidden border border-black/5 relative group-hover:shadow-2xl transition-all duration-700">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
