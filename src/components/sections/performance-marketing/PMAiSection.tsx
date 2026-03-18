"use client";

import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Brain } from 'lucide-react';

const features = [
    { title: "Predictive Analytics", desc: "Modeling future consumer behavior to optimize bidding strategies before the auction begins." },
    { title: "Automated Creative", desc: "Dynamic creative optimization (DCO) to serve the most relevant visual for every segment." },
    { title: "Smart Attribution", desc: "Understanding the true path to conversion beyond simple last-click models." }
];

const PMAiSection = () => {
    return (
        <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mb-24">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-12">
                        AI-Optimized <br /><span className="text-brand-orange">Intelligence.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-2xl">
                        Our AI-first approach ensures that every rupee of your budget is deployed with maximum efficiency and tactical precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            <div className="text-4xl font-black text-white/10 uppercase tracking-tighter">0{idx + 1}</div>
                            <h4 className="text-2xl font-black uppercase tracking-tight">{feature.title}</h4>
                            <p className="text-white/40 font-medium leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* AI Visual Decoration */}
            <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default PMAiSection;
