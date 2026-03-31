"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const shorts = [
    {
        id: 1,
        tag: "Brand Film",
        title: "Roast& Leaf Brand Film",
        client: "Roast& Leaf",
        views: "2.4M views",
        accent: "#FF4D00",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Rose%20and%20leaf.mp4",
    },
    {
        id: 2,
        tag: "Social Reel",
        title: "Roast& Leaf - Tea",
        client: "Roast& Leaf",
        views: "890K views",
        accent: "#A78BFA",
        videoSrc: "/Video%20assets/rose%20and%20leaf/rose%20and%20leaf%20-%20Tea.mp4",
    },
    {
        id: 3,
        tag: "Hero Short",
        title: "Roast& Leaf - Hot Chocolate",
        client: "Roast& Leaf",
        views: "5.1M views",
        accent: "#FF4D00",
        featured: true,
        videoSrc: "/Video%20assets/rose%20and%20leaf/rose%20and%20leaf%20-%20hot%20chocolate.mp4",
    },
    {
        id: 4,
        tag: "Product Demo",
        title: "Unboxing film that builds desire",
        client: "Roast& Leaf",
        views: "1.7M views",
        accent: "#FBBF24",
        videoSrc: "/Video%20assets/rose%20and%20leaf/Rose%20and%20leaf.mp4",
    },
    {
        id: 5,
        tag: "Testimonial",
        title: "Real stories. Real reach.",
        client: "Roast& Leaf",
        views: "640K views",
        accent: "#34D399",
        videoSrc: "/Video%20assets/rose%20and%20leaf/rose%20and%20leaf%20-%20Tea.mp4",
    },
];

export default function WebShorties() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [mutedStates, setMutedStates] = useState<boolean[]>(shorts.map(() => true));
    const [activeIdx, setActiveIdx] = useState<number>(2); // featured card default

    const scroll = (dir: "left" | "right") => {
        scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    };

    const toggleMute = (e: React.MouseEvent, idx: number) => {
        e.stopPropagation(); // don't trigger card click
        const video = videoRefs.current[idx];
        if (!video) return;
        const newMuted = !mutedStates[idx];
        video.muted = newMuted;
        setMutedStates(prev => prev.map((m, i) => (i === idx ? newMuted : m)));
    };

    const handleCardClick = (idx: number) => {
        setActiveIdx(idx);
    };

    useEffect(() => {
        videoRefs.current.forEach((video, i) => {
            if (!video) return;
            if (i === activeIdx) {
                video.play().catch(() => { });
            } else {
                video.pause();
                video.currentTime = 0; // Rewind paused videos
            }
        });
    }, [activeIdx]);

    return (
        <section className="relative bg-[#0a0a0a] py-8 overflow-hidden">
            {/* Ambient glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #FF4D00 0%, transparent 70%)" }}
            />

            <div className="max-w-[1400px] mx-auto px-6">

                {/* Header */}
                <div className="flex items-end justify-between mb-4">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-brand-orange" />
                            <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em]">
                                Short-Form Production
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">
                            Web <span className="text-brand-orange italic">Shorties</span>
                        </h2>
                        <p className="mt-4 text-white/50 text-base max-w-md">
                            Vertical videos, Reels, and short-form ads engineered to stop the scroll and drive action.
                        </p>
                    </div>

                    {/* Nav arrows */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-brand-orange hover:text-brand-orange transition-all"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-brand-orange hover:text-brand-orange transition-all"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide items-center"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {shorts.map((s, i) => {
                        const isActive = activeIdx === i;
                        const isFeatured = s.featured;
                        const isMuted = mutedStates[i];

                        return (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                animate={{
                                    scale: isActive ? 1.06 : 1,
                                    y: isActive ? -8 : 0,
                                    zIndex: isActive ? 10 : 1,
                                }}
                                onClick={() => handleCardClick(i)}
                                className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
                                style={{
                                    width: isActive ? "270px" : "210px",
                                    height: isActive ? "470px" : "370px",
                                    scrollSnapAlign: "center",
                                    transition: "width 0.3s ease, height 0.3s ease",
                                }}
                            >
                                {/* Video */}
                                <video
                                    ref={el => { videoRefs.current[i] = el; }}
                                    src={s.videoSrc}
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Dim overlay — lighter when active */}
                                <div
                                    className="absolute inset-0 transition-opacity duration-300"
                                    style={{
                                        background: isActive
                                            ? "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.05) 100%)"
                                            : "linear-gradient(to top, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.35) 100%)",
                                    }}
                                />

                                {/* Active glow border */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            key="ring"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 rounded-2xl pointer-events-none"
                                            style={{
                                                boxShadow: `0 0 0 2.5px ${s.accent}, 0 0 40px 0px ${s.accent}66`,
                                            }}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Featured / Active badge */}
                                {(isFeatured || isActive) && (
                                    <div
                                        className="absolute top-4 left-1/2 -translate-x-1/2 text-black text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap z-10"
                                        style={{ backgroundColor: s.accent }}
                                    >
                                        {isActive ? "▶ Now Playing" : "⭐ Featured"}
                                    </div>
                                )}

                                {/* Sound toggle */}
                                <button
                                    onClick={e => toggleMute(e, i)}
                                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
                                    title={isMuted ? "Click for sound" : "Mute"}
                                >
                                    {isMuted
                                        ? <VolumeX size={14} className="text-white/60" />
                                        : <Volume2 size={14} className="text-white" />
                                    }
                                </button>

                                {/* Sound hint on hover */}
                                {isMuted && (
                                    <div className="absolute top-14 right-3 z-10 bg-black/70 text-white text-[9px] font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        Tap 🔊 for sound
                                    </div>
                                )}

                                {/* Bottom info */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                                    <span
                                        className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 block"
                                        style={{ color: s.accent }}
                                    >
                                        {s.tag}
                                    </span>
                                    <p className="text-white font-bold text-sm leading-tight mb-3">
                                        {s.title}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-wider">Client</p>
                                            <p className="text-white/80 text-xs font-bold">{s.client}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white/40 text-[10px] uppercase tracking-wider">Reach</p>
                                            <p className="font-black text-xs" style={{ color: s.accent }}>{s.views}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-white/30 text-sm">
                        Vertical video production · Reels · Shorts · TikTok · OTT Pre-rolls
                    </p>
                    <Link
                        href="/media-production"
                        className="inline-flex items-center gap-2 text-brand-orange font-black text-sm uppercase tracking-widest hover:gap-4 transition-all"
                    >
                        See All Productions <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
