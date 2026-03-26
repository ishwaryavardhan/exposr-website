"use client";

import { motion } from 'framer-motion';
import PMLeadForm from '../../ui/PMLeadForm';

const PMHero = () => {
    return (
        <section className="bg-white min-h-[90vh] pt-52 pb-4 px-6 md:px-12 flex items-center relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[1.05] tracking-[-0.04em] mb-12 uppercase">
                            Precision <br />
                            Engineered <br />
                            Performance <span className="text-black/30 italic font-serif leading-none">Marketing</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed font-medium mb-12">
                            We don't just run ads; we engineer growth. Leveraging local insights and data-driven precision to dominate India's digital landscape.
                        </p>

                        <div className="flex items-center gap-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="w-16 h-px bg-black/10"
                            />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/30">ROI Driven Results</span>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <PMLeadForm />
                        
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

            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/[0.02] to-transparent pointer-events-none" />
        </section>
    );
};

export default PMHero;
