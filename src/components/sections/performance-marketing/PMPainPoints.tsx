"use client";

import { motion } from 'framer-motion';
import { AlertCircle, Target, TrendingDown, Users } from 'lucide-react';

const painPoints = [
    {
        icon: <TrendingDown className="text-brand-orange" />,
        title: "Stagnant ROI",
        desc: "Running ads that burn budget without showing real-world business growth or returns."
    },
    {
        icon: <Users className="text-brand-orange" />,
        title: "Poor Lead Quality",
        desc: "Getting high volume of leads that don't convert, wasting sales team time and resources."
    },
    {
        icon: <Target className="text-brand-orange" />,
        title: "Bad Targeting",
        desc: "Failing to reach the specific Indian demographics that actually have intent to buy."
    },
    {
        icon: <AlertCircle className="text-brand-orange" />,
        title: "Lack of Transparency",
        desc: "Vague reporting that hides where your money is going and what's actually working."
    }
];

const PMPainPoints = () => {
    return (
        <section className="py-8 px-6 bg-neutral-950 text-white">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-sm font-black text-white/20 tracking-[0.5em] uppercase mb-8">Industry Reality</h2>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        Wasted Ad Spend is the <br /><span className="text-brand-orange">Silent Brand Killer.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {painPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                                {point.icon}
                            </div>
                            <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{point.title}</h4>
                            <p className="text-white/50 font-medium leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PMPainPoints;
