"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, BarChart, Globe } from 'lucide-react';

const reasons = [
    {
        title: "Localized Expertise",
        desc: "We understand the nuances of 29 states and 8+ major languages in India.",
        icon: <Globe className="text-black" />
    },
    {
        title: "Full-Funnel Focus",
        desc: "Our strategies cover everything from awareness to final conversion and advocacy.",
        icon: <Zap className="text-black" />
    },
    {
        title: "Data-Driven Precision",
        desc: "Real-time analytics and custom dashboards for complete transparency.",
        icon: <BarChart className="text-black" />
    }
];

const PMWhyUs = () => {
    return (
        <section className="py-8 px-6 bg-white overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-[0.9] mb-12">
                            Why Choose Us for <br /><span className="text-brand-orange">Performance.</span>
                        </h2>
                        <p className="text-xl text-black/50 font-medium leading-relaxed max-w-xl mb-12">
                            Success in the Indian market requires more than just high bids. It requires a deep understanding of cultural nuances and platform algorithms.
                        </p>
                        
                        <div className="space-y-6">
                            {reasons.map((reason, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 p-8 rounded-3xl border border-black/5 hover:border-black/10 transition-colors bg-neutral-50"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-black uppercase mb-2">{reason.title}</h4>
                                        <p className="text-black/40 font-medium">{reason.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 relative">
                        <div className="relative aspect-square rounded-[4rem] bg-black overflow-hidden flex items-center justify-center">
                           <div className="p-20 text-center">
                                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-8">
                                    Winning <br />The <span className="text-brand-orange italic">Auction.</span>
                                </h3>
                                <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-black uppercase tracking-widest text-xs">
                                    Strategy first, always
                                </div>
                           </div>
                           
                           {/* Decorative elements */}
                           <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/5 blur-3xl" />
                           <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PMWhyUs;
