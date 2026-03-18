"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SEOImpactReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15%" });

    const paragraph =
        "True SEO isn't just about traffic. It's about intercepting your perfect audience at their highest point of intent, building compounding trust that pays dividends for years.";
    const words = paragraph.split(" ");

    return (
        <section className="relative bg-black text-white overflow-hidden py-40">

            {/* ── Background Layers ── */}

            {/* 1. Deep pulsing orange glow — bottom center */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center bottom, rgba(255,77,0,0.35) 0%, rgba(255,77,0,0.08) 45%, transparent 75%)",
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 2. Subtle orange grid */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#FF4D00 1px, transparent 1px), linear-gradient(90deg, #FF4D00 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* 3. Moving horizontal scan line */}
            <motion.div
                className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-30 pointer-events-none"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* 4. Vignette top + bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 pointer-events-none" />

            {/* ── Content ── */}
            <div
                ref={ref}
                className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12"
            >
                {/* Eyebrow tag */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 mb-10"
                >
                    <span className="w-8 h-[2px] bg-brand-orange" />
                    <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em]">
                        The SEO Advantage
                    </span>
                </motion.div>

                {/* Main headline — large, one line via fluid font */}
                <div className="overflow-hidden mb-10">
                    <motion.h2
                        initial={{ y: "110%", opacity: 0 }}
                        animate={isInView ? { y: "0%", opacity: 1 } : {}}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-black tracking-tighter uppercase leading-none whitespace-nowrap"
                        style={{ fontSize: "clamp(3.5rem, 8.5vw, 8.5rem)" }}
                    >
                        OWN THE{" "}
                        <span className="text-brand-orange italic relative">
                            SEARCH.
                            {/* Underline glow */}
                            <motion.span
                                className="absolute -bottom-2 left-0 h-[3px] bg-brand-orange"
                                initial={{ width: "0%" }}
                                animate={isInView ? { width: "100%" } : {}}
                                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </span>
                    </motion.h2>
                </div>

                {/* Separator line */}
                <motion.div
                    className="w-full h-px bg-white/10 mb-12"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Word-by-word paragraph */}
                <p
                    className="font-medium leading-relaxed flex flex-wrap gap-y-2 max-w-4xl text-white/80"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)" }}
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            className="mr-[0.3em] inline-block"
                            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                                    : {}
                            }
                            transition={{
                                delay: 0.6 + i * 0.028,
                                duration: 0.55,
                                ease: "easeOut",
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>
        </section>
    );
}
