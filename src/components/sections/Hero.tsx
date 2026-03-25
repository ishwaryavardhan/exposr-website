"use client";

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
const Hero = () => {
    return (
        <section className="bg-white min-h-[70vh] pt-40 md:pt-52 lg:pt-40 sm:pt-44 pb-12 px-6 md:px-12 flex items-start relative overflow-hidden">

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">Next-Gen Media Agency</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-black leading-[1.05] tracking-[-0.04em] mb-12">
                            Your Creative, Media & Technology <br className="hidden lg:block" />
                            Transformation Partner
                        </h1>

                        <p className="text-xl md:text-2xl text-black/60 max-w-4xl leading-relaxed font-medium mb-4">
                            We're a team of 1200+ Specialists delivering award-winning work for 350+ brands worldwide, 10 years and counting!
                        </p>

                        <div className="flex items-center gap-8 pt-5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="w-16 h-px bg-black/10"
                            />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30 ">Scroll to Explore</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Texture/Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />

        </section>
    );
};

export default Hero;
