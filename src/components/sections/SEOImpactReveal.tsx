"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Search } from "lucide-react"; // Install lucide-react or use an SVG

export default function SEOImpactReveal() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15%" });
    const [searchValue, setSearchValue] = useState("");

    const paragraph =
        "True SEO isn't just about traffic. It's about intercepting your perfect audience at their highest point of intent, building compounding trust that pays dividends for years.";
    const words = paragraph.split(" ");

    return (
        <section className="relative bg-black text-white overflow-hidden py-12 md:py-20">

            {/* ── Background Layers ── */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center bottom, rgba(255,77,0,0.35) 0%, rgba(255,77,0,0.08) 45%, transparent 75%)",
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#FF4D00 1px, transparent 1px), linear-gradient(90deg, #FF4D00 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

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
                    className="flex items-center gap-3 mb-8 md:mb-10"
                >
                    <span className="w-8 h-[2px] bg-brand-orange" />
                    <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em]">
                        The SEO Advantage
                    </span>
                </motion.div>

                {/* Main headline — Fixed for Mobile Wrapping */}
                <div className="mb-8 md:mb-10">
                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-black tracking-tighter uppercase leading-[0.9] flex flex-wrap gap-x-4"
                        style={{ fontSize: "clamp(2.8rem, 10vw, 8.5rem)" }}
                    >
                        <span>OWN THE</span>
                        <span className="text-brand-orange italic relative inline-block">
                            SEARCH.
                            <motion.span
                                className="absolute -bottom-1 md:-bottom-2 left-0 h-[2px] md:h-[4px] bg-brand-orange"
                                initial={{ width: "0%" }}
                                animate={isInView ? { width: "100%" } : {}}
                                transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />
                        </span>
                    </motion.h2>
                </div>

                {/* ── NEW: Search Bar Component ── */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="relative max-w-2xl mb-12 md:mb-16 group"
                >
                    <div className="relative flex items-center">
                        <Search className="absolute left-4 w-5 h-5 text-brand-orange/70 group-focus-within:text-brand-orange transition-colors" />
                        <input
                            type="text"
                            placeholder="Type a keyword to dominate..."
                            className="w-full bg-white/5 border border-white/10 py-4 md:py-6 pl-12 pr-6 rounded-xl md:rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange/50 transition-all backdrop-blur-sm placeholder:text-white/20"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button className="absolute right-3 px-4 py-2 bg-brand-orange text-black font-bold text-sm uppercase rounded-lg hover:bg-white transition-colors hidden sm:block">
                            Analyze
                        </button>
                    </div>
                </motion.div>

                {/* Separator line */}
                <motion.div
                    className="w-full h-px bg-white/10 mb-10 md:mb-12"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Word-by-word paragraph */}
                <p
                    className="font-medium leading-relaxed flex flex-wrap gap-y-1 md:gap-y-2 max-w-4xl text-white/80"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.75rem)" }}
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
                                delay: 1.4 + i * 0.02,
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