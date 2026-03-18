"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MediaImpactReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15%" });

    const paragraph =
        "Exceptional media production is not about expensive equipment — it's about purposeful storytelling. Every frame we compose, every sound we capture, and every cut we make is a deliberate creative decision designed to move your audience from attention to action.";
    const words = paragraph.split(" ");

    return (
        <section className="relative bg-black text-white overflow-hidden py-40">
            {/* Deep cinematic glow — warm amber */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center bottom, rgba(255,77,0,0.28) 0%, rgba(255,160,0,0.08) 50%, transparent 75%)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#FF4D00 1px, transparent 1px), linear-gradient(90deg, #FF4D00 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Horizontal scan line */}
            <motion.div
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-25 pointer-events-none"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 pointer-events-none" />

            <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 mb-10"
                >
                    <span className="w-8 h-[2px] bg-brand-orange" />
                    <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em]">
                        The Production Advantage
                    </span>
                </motion.div>

                <div className="overflow-hidden mb-10">
                    <motion.h2
                        initial={{ y: "110%", opacity: 0 }}
                        animate={isInView ? { y: "0%", opacity: 1 } : {}}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-black tracking-tighter uppercase leading-none whitespace-nowrap"
                        style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
                    >
                        CRAFT THE{" "}
                        <span className="text-brand-orange italic relative">
                            NARRATIVE.
                            <motion.span
                                className="absolute -bottom-2 left-0 h-[3px] bg-brand-orange"
                                initial={{ width: "0%" }}
                                animate={isInView ? { width: "100%" } : {}}
                                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </span>
                    </motion.h2>
                </div>

                <motion.div
                    className="w-full h-px bg-white/10 mb-12"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />

                <p
                    className="font-medium leading-relaxed flex flex-wrap gap-y-2 max-w-4xl text-white/80"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)" }}
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            className="mr-[0.3em] inline-block"
                            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                            transition={{ delay: 0.6 + i * 0.028, duration: 0.55, ease: "easeOut" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>
        </section>
    );
}
