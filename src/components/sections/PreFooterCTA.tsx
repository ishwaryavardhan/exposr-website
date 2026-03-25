"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PreFooterCTA = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Rotation effect linked to scroll
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section
            ref={containerRef}
            className="relative bg-brand-orange py-16 md:py-24 px-6 overflow-hidden flex flex-col items-center justify-center text-center"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            {/* 1. THE TEXT SECTION */}
            <div className="relative z-10 flex flex-col items-center">
                {["What", "Shall We", "Create Next"].map((line, i) => (
                    <motion.h2
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: i * 0.12 }}
                        viewport={{ once: true }}
                        className="text-white font-black uppercase leading-[0.85] tracking-[-0.04em] whitespace-nowrap"
                        style={{ fontSize: "clamp(2.8rem, 11vw, 8.5rem)" }}
                    >
                        {line}
                    </motion.h2>
                ))}
            </div>

            {/* 2. THE SPINNING CIRCLE (Now in the middle of the flow) */}
            <motion.div
                style={{ rotate }}
                className="
                    relative 
                    z-20 
                    my-8 md:my-12 
                    w-28 h-28 md:w-40 md:h-40 
                    bg-[#FDF0D5] rounded-full flex items-center justify-center 
                    border-4 border-brand-orange shadow-2xl 
                    /* On Desktop: you can keep it in flow or use 'md:absolute md:right-20' if you prefer */
                "
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full p-2" viewBox="0 0 100 100">
                        <path id="textPath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] font-black uppercase tracking-[0.2em] fill-brand-orange">
                            <textPath href="#textPath">Let's Talk • Let's Talk • Let's Talk •</textPath>
                        </text>
                    </svg>
                    <ArrowRight className="text-brand-orange w-8 h-8 md:w-12 md:h-12" />
                </div>
            </motion.div>

            {/* 3. THE BUTTON SECTION */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative z-10"
            >
                <a
                    href="/contact"
                    className="bg-[#F6E05E] text-black px-12 md:px-20 py-5 rounded-full text-lg md:text-xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl inline-flex items-center gap-4"
                >
                    Talk With Us
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    >
                        →
                    </motion.span>
                </a>
            </motion.div>


        </section>
    );
};

export default PreFooterCTA;