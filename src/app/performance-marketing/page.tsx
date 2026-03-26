"use client";

import { motion } from 'framer-motion';
import PMHero from '@/components/sections/performance-marketing/PMHero';
import PMPainPoints from '@/components/sections/performance-marketing/PMPainPoints';
import PMWhyUs from '@/components/sections/performance-marketing/PMWhyUs';
import PMAiSection from '@/components/sections/performance-marketing/PMAiSection';
import PMPlatformsTools from '@/components/sections/performance-marketing/PMPlatformsTools';
import ProductShowcase from '@/components/sections/ProductShowcase';
import WebShorties from '@/components/sections/WebShorties';
import WordReveal from '@/components/reactbits/WordReveal';

export default function PerformanceMarketingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* 1. Hero Section */}
            <PMHero />

            {/* 2. About Us Layout */}
            <section className="py-8 px-6 bg-black text-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-24">
                        <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">
                            About <span className="text-white/30 italic">Performance.</span>
                        </h2>
                        <WordReveal
                            text="We are obsessed with data, but driven by human insight. Our mission is to scale Indian brands through surgical precision in digital advertising."
                            className="text-2xl text-white/60 font-medium leading-relaxed max-w-2xl"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { stat: "300%", label: "Avg. ROI Increase", desc: "Performance uplift for clients" },
                            { stat: "50Cr+", label: "Ad Spend Managed", desc: "Experience across scales" },
                            { stat: "100+", label: "Expert Analysts", desc: "Data experts at your service" },
                            { stat: "24/7", label: "Real-time Optimization", desc: "Always-on growth engine" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
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

            {/* 3. Pain Point of Industry */}
            <PMPainPoints />

            {/* 4. Why choose us for Performance Marketing */}
            <PMWhyUs />

            {/* 5. Projects showcases */}
            <WebShorties />
            <ProductShowcase />

            {/* 6. Ai optimized Performace Marketing */}
            <PMAiSection />

            {/* 7 & 8. Platforms & Tools */}
            <PMPlatformsTools />

            {/* 9. Client Testimonials */}
            <section className="py-32 px-6 bg-black overflow-hidden border-y border-white/5">
                <div className="container mx-auto mb-24">
                    <div className="text-center">
                        <h2 className="text-sm font-black text-white/20 tracking-[0.5em] uppercase mb-16">Results Speak Louder</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    {[
                        "EXPOSR Performance",
                        "High Conversion",
                        "Scalable Growth",
                        "Data Mastery",
                        "Indian Market Experts"
                    ].map((text, idx) => (
                        <div key={idx} className="flex flex-wrap justify-center gap-16 opacity-30 hover:opacity-100 transition-opacity duration-700">
                             <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-4xl md:text-7xl font-black tracking-tighter text-white whitespace-nowrap cursor-default uppercase"
                            >
                                {text}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 10. FAQs */}
            <section className="py-32 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-5xl font-black text-black text-center mb-24 tracking-tight uppercase">Performance <span className="text-black/30">FAQs</span></h2>
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { q: "How do you define ROI?", a: "We look beyond just clicks. We track end-to-end conversions and life-time value to ensure your marketing spend is truly profitable." },
                            { q: "What budget should I start with?", a: "We recommend a budget that's large enough to gather statistically significant data for testing, usually depending on your industry scale." },
                            { q: "Do you handle creative as well?", a: "Yes, our performance teams work closely with our creative department to ensure high-converting ad assets." },
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-2xl font-black text-black mb-4 tracking-tight uppercase">{faq.q}</h3>
                                <p className="text-black/50 text-lg leading-relaxed font-medium">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11 & 12 (CTA & Footer are in layout.tsx) */}
        </div>
    );
}
