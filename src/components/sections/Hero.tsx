"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import VideoMessengerInline from '@/components/ui/VideoMessengerInline';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [hasBeenClosed, setHasBeenClosed] = useState(false);

    useEffect(() => {
        // Only show pop-up after 3 seconds if user hasn't closed it yet
        const timer = setTimeout(() => {
            if (!hasBeenClosed) {
                setShowPopup(true);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [hasBeenClosed]);

    return (
        <section className="bg-white min-h-[70vh] pt-40 md:pt-52 lg:pt-40 sm:pt-44 pb-12 px-6 md:px-12 flex items-start relative overflow-hidden">

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 rounded-full bg-brand-orange"></div>
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/50">Next-Gen Media Agency</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-[110px] font-black text-black mb-12">
                          Your Agentic AI Marketing Transformation Partner
                        </h1>

                        <p className="text-xl md:text-2xl text-black/60 max-w-4xl leading-relaxed font-medium mb-4">
A SaaS-focused digital marketing agency using AI-powered systems to accelerate pipeline, optimize conversion, and maximize LTV.                        </p>

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

            {/* Floating Pop-up Form */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] w-[90vw] max-w-md"
                    >
                        <div className="relative">
                            <button 
                                onClick={() => {
                                    setShowPopup(false);
                                    setHasBeenClosed(true);
                                }}
                                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center z-[110] shadow-xl hover:bg-brand-orange hover:text-black transition-all border-4 border-white"
                            >
                                <X size={20} />
                            </button>
                            <div className="shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[3rem] overflow-hidden">
                                <VideoMessengerInline />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Texture/Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />

        </section>
    );
};

export default Hero;
