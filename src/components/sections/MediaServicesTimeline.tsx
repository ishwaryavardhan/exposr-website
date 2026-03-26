"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ScrollRevealText from "@/components/ui/ScrollRevealText";

const items = [
    {
        tag: "Brand Films",
        title: "Commercial & Brand Film Production",
        content: "Your brand film is the single most powerful asset in your marketing arsenal. We handle everything — from concept development and creative direction to full crew deployment, talent coordination, and cinematography. Every commercial we produce is built to create an emotional response, establish brand identity, and leave a lasting impression in the minds of your target audience. Whether it's a 30-second TVC or a 3-minute hero film, we craft visuals that don't just communicate — they resonate.",
    },
    {
        tag: "Corporate",
        title: "Corporate Video Production",
        content: "Internal communications, investor presentations, recruitment videos, product demonstrations, and executive thought-leadership content — our corporate production team delivers polished results that enhance your brand credibility across every professional touchpoint. We bring a sharp editorial sensibility to corporate content, elevating it beyond the generic and into the genuinely compelling.",
    },
    {
        tag: "Photography",
        title: "Commercial & Product Photography",
        content: "Static visuals drive the majority of purchase decisions across e-commerce, social media, and digital advertising. Our photography team specialises in product photography, lifestyle shoots, corporate portraiture, and large-scale campaign imagery. Every shot is planned with precision — lighting design, set styling, post-production retouching — to produce imagery that sells and inspires simultaneously.",
    },
    {
        tag: "Motion",
        title: "Motion Graphics & 2D/3D Animation",
        content: "Not every story is best told through live-action footage. Motion graphics and animation allow us to visualise complex ideas, abstract data, and brand universes in ways that live-action simply cannot. From explainer animations and logo reveals to full 3D product visualisations and kinetic typography campaigns, our motion team builds animation assets that are crafted, considered, and conversion-optimised.",
    },
    {
        tag: "Short-Form",
        title: "Short-Form Video & Reels Production",
        content: "Short-form video is the highest-engagement content format across every platform. Our reels and short-form production team scripts, shoots, and edits platform-native content designed to hook within the first second and retain attention through to the call-to-action. We study platform algorithms, trending formats, and your audience behaviour to produce content that consistently earns organic amplification.",
    },
    {
        tag: "Post-Production",
        title: "Editing, Colour Grading & Sound Design",
        content: "Post-production is where raw footage becomes a finished piece of art. Our post-production suite offers professional editing, cinematic colour grading, bespoke sound design, and professional-grade audio mixing. We turn hours of footage into tight, punchy, emotionally precise deliverables — every cut intentional, every sound purposeful. The finish and polish of your final video directly reflects the quality of your brand.",
    },
    {
        tag: "Events",
        title: "Live Event & Documentary Coverage",
        content: "Conferences, product launches, brand activations, and live performances — we capture the energy, scale, and story of live events with multi-camera setups, dynamic handheld cinematography, and real-time editing capabilities. Our documentary-style coverage transforms your brand events into compelling long-form content assets that continue generating value long after the event concludes.",
    },
    {
        tag: "Podcasts",
        title: "Podcast & Long-Form Video Production",
        content: "Thought leadership content builds brand authority over time. Our podcast and long-form production service handles studio setup, multi-camera recording, audio post-processing, visual title cards, and full episode distribution packaging. Whether you're launching a branded podcast series or producing executive interview content for LinkedIn, we ensure every episode is produced to broadcast-quality standards.",
    },
];

function TimelineNode({ item, index }: { item: typeof items[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15%" });

    return (
        <div ref={ref} className="relative flex gap-8 md:gap-16 group">
            <div className="flex flex-col items-center shrink-0">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10"
                >
                    <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm transition-all duration-500 ${
                            isInView
                                ? "border-brand-orange bg-brand-orange/10 text-brand-orange shadow-[0_0_20px_rgba(255,77,0,0.25)]"
                                : "border-white/20 text-white/40"
                        }`}
                    >
                        {(index + 1).toString().padStart(2, "0")}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="pb-16 flex-1 min-w-0"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-2 block">
                    {item.tag}
                </span>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4 leading-none group-hover:text-brand-orange transition-colors duration-500">
                    {item.title}
                </h3>
                <motion.div
                    className="h-px bg-white/10 mb-5 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                />
                <p className="text-white/55 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                    {item.content}
                </p>
            </motion.div>
        </div>
    );
}

export default function MediaServicesTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 80%", "end 15%"],
    });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 55, damping: 22, restDelta: 0.001 });
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-black text-white overflow-hidden font-sans py-8"
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(to right, #FF4D00 1px, transparent 1px), linear-gradient(to bottom, #FF4D00 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="mb-24 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="text-brand-orange text-xs font-black tracking-[0.3em] uppercase mb-8 flex items-center gap-3"
                    >
                        <span className="w-6 h-[2px] bg-brand-orange inline-block" />
                        <DecryptedText
                            text="End-to-End Media Production Services"
                            speed={35}
                            maxIterations={15}
                        />
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-white uppercase mt-6">
                        <ScrollRevealText
                            text="Every format. every platform. produced to perfection."
                            className="flex-wrap"
                        />
                    </h2>
                </div>

                <div ref={timelineRef} className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5" />
                    <div
                        className="absolute left-6 top-0 w-px overflow-hidden"
                        style={{ height: "100%" }}
                    >
                        <motion.div
                            className="w-full bg-gradient-to-b from-brand-orange via-brand-orange to-transparent"
                            style={{ height: lineHeight, originY: 0 }}
                        />
                    </div>

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
