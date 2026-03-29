"use client";

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import LeadForm from '@/components/ui/LeadForm';
const Hero = () => {
    return (
        <section className="bg-white min-h-[70vh] pt-40 md:pt-52 lg:pt-40 sm:pt-44 pb-12 px-6 md:px-12 flex items-start relative overflow-hidden">

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">Next-Gen Media Agency</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[98px] font-black text-black mb-12">
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

                    <div className="relative">
                        <LeadForm />
                        
                        {/* Decorative floating elements */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 w-32 h-32 bg-black/[0.02] rounded-full blur-3xl -z-10" 
                        />
                        <motion.div 
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/[0.02] rounded-full blur-3xl -z-10" 
                        />
                    </div>
                </div>
            </div>

            {/* Subtle Texture/Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />

        </section>
    );
};

export default Hero;
