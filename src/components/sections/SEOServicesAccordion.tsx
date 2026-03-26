"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollRevealText from "@/components/ui/ScrollRevealText";

const items = [
    { tag: "Foundation", title: "Technical SEO", content: "Advanced technical optimizations ensuring peak crawlability, fast load times, and perfect structural health across all devices and search engines." },
    { tag: "Content", title: "On-Page SEO", content: "Data-driven content optimization, semantic HTML structuring, and high-intent keyword targeting designed to maximize relevance and ranking potential." },
    { tag: "Authority", title: "Off-Page SEO", content: "Building undeniable domain authority through high-tier link acquisition, digital PR, and strategic global brand placements." },
    { tag: "Geographic", title: "Local SEO", content: "Dominating localized search markets with optimized Google Business Profiles, precise local citations, and highly geo-targeted content strategies." },
    { tag: "AI-Ready", title: "Generative Engine Optimization", content: "Future-proofing your brand visibility for AI-driven search engines by optimizing for conversational queries and deep entity recognition." },
    { tag: "Revenue", title: "E-commerce SEO", content: "Scaling online store revenue with targeted massive category optimizations, deep product schema markup, and advanced faceted navigation handling." },
    { tag: "Voice", title: "Voice Search Optimization", content: "Capturing the rapidly growing voice market with natural language targeting, robust featured snippet optimization, and question-based content framing." },
    { tag: "Scale", title: "Enterprise SEO", content: "Enterprise SEO strategies that handle thousands of pages, internal links, and technical challenges — built for complexity, engineered for dominance." },
];

function TimelineNode({ item, index }: { item: typeof items[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15%" });

    return (
        <div ref={ref} className="relative flex gap-8 md:gap-16 group">
            {/* Timeline dot + connector */}
            <div className="flex flex-col items-center shrink-0">
                {/* Dot */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10"
                >
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all duration-500
                        ${isInView
                            ? "border-brand-orange bg-brand-orange/10 text-brand-orange shadow-[0_0_20px_rgba(255,77,0,0.25)]"
                            : "border-white/20 text-white/40"
                        }`}
                    >
                        {(index + 1).toString().padStart(2, "0")}
                    </div>
                </motion.div>
            </div>

            {/* Content card */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="pb-16 flex-1 min-w-0"
            >
                {/* Tag */}
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-2 block">
                    {item.tag}
                </span>
                {/* Title */}
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4 leading-none group-hover:text-brand-orange transition-colors duration-500">
                    {item.title}
                </h3>
                {/* Divider line */}
                <motion.div
                    className="h-px bg-white/10 mb-5 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Description */}
                <p className="text-white/50 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                    {item.content}
                </p>
            </motion.div>
        </div>
    );
}

export default function SEOServicesAccordion() {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    // Scroll-linked line drawing — spring for slow silky motion
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 80%", "end 15%"],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 55, damping: 22, restDelta: 0.001 });
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    const headerInView = useInView(sectionRef, { once: true, margin: "-10%" });

    return (
        <section ref={sectionRef} className="relative w-full bg-black text-white overflow-hidden font-sans py-12">
            {/* Grid overlay */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(to right, #FF4D00 1px, transparent 1px), linear-gradient(to bottom, #FF4D00 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

                {/* Section header */}
                <div className="mb-8 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-brand-orange text-xs font-black tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
                    >
                        <span className="w-6 h-[2px] bg-brand-orange inline-block" />
                        <DecryptedText text="Scaling Startups, Empowering Brands, Accelerating Corporates" speed={35} maxIterations={15} />
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-white uppercase mt-6">
                        <ScrollRevealText
                            text="Strategic solutions designed to help businesses grow. compete. and lead in the digital landscape."
                            className="flex-wrap"
                        />
                    </h2>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="relative">
                    {/* Vertical track line (background) */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5" />

                    {/* Scroll-driven fill line */}
                    <div className="absolute left-6 top-0 w-px overflow-hidden" style={{ height: "100%" }}>
                        <motion.div
                            className="w-full bg-gradient-to-b from-brand-orange via-brand-orange to-transparent"
                            style={{ height: lineHeight, originY: 0 }}
                        />
                    </div>

                    {/* Timeline nodes */}
                    <div className="pl-0">
                        {items.map((item, index) => (
                            <TimelineNode key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
