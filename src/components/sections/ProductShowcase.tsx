"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BentoCard } from '@/components/ui/BentoCard';
import { ArrowUpRight } from 'lucide-react';

const ProductShowcase = () => {
    const router = useRouter();
    const [clickedId, setClickedId] = useState<string | null>(null);

    const handleInteraction = (id: string) => {
        if (clickedId === id) {
            router.push('/portfolio');
        } else {
            setClickedId(id);
        }
    };

    return (
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[#0B0D11] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="mb-16 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[18vw] md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] uppercase"
                    >
                        Selected <br />
                        <span className="text-white/20 italic block md:inline md:ml-4">Works.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-xl md:text-2xl text-white/50 font-medium leading-tight max-w-2xl"
                    >
                        A curated selection of our most impactful brand transformations and creative solutions.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-12 gap-4 md:gap-6"
                >
{/* Tile 1: Tracklist */}
<motion.div
    variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
    className="col-span-12 lg:col-span-8 group cursor-pointer"
    onMouseEnter={() => setClickedId('01')}
    onMouseLeave={() => setClickedId(null)}
    onClick={() => handleInteraction('01')}
>
    <BentoCard className="h-[500px] md:h-[500px] relative overflow-hidden bg-[#D1202F]"> 
        
        {/* 1. BADGE: Always at the top (Right on mobile, Left on Desktop) */}
        <div className="absolute top-6 right-6 md:top-10 md:left-10 md:right-auto z-30">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black bg-white/80 backdrop-blur-sm px-3 py-1.5">
                Tracklist 2024
            </span>
        </div>

        {/* 2. TEXT LIST: Centered vertically on mobile right side */}
        <div className="absolute 
            /* Mobile: Centered vertically on the right */
            right-6 top-1/2 -translate-y-1/2 
            /* Desktop: Back to top-left under the badge */
            md:top-24 md:left-10 md:translate-y-0 md:right-auto 
            z-20 flex flex-col items-end md:items-start"
        >
            <div className="flex flex-col gap-3 md:gap-2 text-right md:text-left">
                {['Echoing', 'Through', 'Time', 'Light', 'Shadows', 'Distant'].map((t, idx) => (
                    <div 
                        key={idx} 
                        className="flex items-center justify-end md:justify-start gap-3 md:gap-8 text-[14px] md:text-[16px] font-bold"
                    >
                        {/* Track Name */}
                        <span className="text-black uppercase order-1 md:order-2">{t}</span>
                        {/* Track Number */}
                        <span className="text-black/70 text-[12px] order-2 md:order-1">0{idx + 1}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* 3. VIDEO BACKGROUND: Replaced image with video */}
        <div className="absolute inset-0 z-0">
            <video
                className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-100 group-hover:scale-105 transition-transform duration-1000"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="https://res.cloudinary.com/dabyqx1mz/video/upload/v1774895963/reel_1_tz52x0.mov" type="video/mp4" />
            </video>
        </div>

        {/* 4. ARROW BUTTON: Bottom Left on mobile */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:right-10 md:left-auto z-30">
            <div className="bg-black text-white p-4 rounded-full shadow-xl group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowUpRight size={24} />
            </div>
        </div>

        {/* Dark Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 md:hidden pointer-events-none" />
    </BentoCard>
</motion.div>

                    {/* Tile 2: Portrait */}
                    <motion.div
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="col-span-12 lg:col-span-4 group cursor-pointer"
                        onMouseEnter={() => setClickedId('02')}
                        onMouseLeave={() => setClickedId(null)}
                        onClick={() => handleInteraction('02')}
                    >
                        <BentoCard className="h-[450px] md:h-[500px] bg-[#E5E7EB] relative overflow-hidden">
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/DSC01659.JPG.jpeg"
                                    alt="Work Portrait"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* Tile 3: Brand Purpose (Gradient) */}
                    <motion.div
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="col-span-12 lg:col-span-4 group cursor-pointer"
                        onMouseEnter={() => setClickedId('03')}
                        onMouseLeave={() => setClickedId(null)}
                        onClick={() => handleInteraction('03')}
                    >
                        <BentoCard className="h-[350px] md:h-[400px] relative overflow-hidden">
                            {/* Video Background */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="https://res.cloudinary.com/dabyqx1mz/video/upload/v1774895845/IMG_6293_fijpvt.mp4" type="video/mp4" />
                                </video>
                            </div>
                            {/* Semi-transparent overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 to-red-700/80 z-5" />
                            <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
                                <span className="text-5xl md:text-6xl font-black text-white italic tracking-tighter">TM.</span>
                                <p className="text-sm md:text-base font-bold text-white/80 leading-tight uppercase tracking-widest">
                                    To the creators who envisioned tomorrow, and to those who will shape it with boldness and curiosity.
                                </p>
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* Tile 4: Specs (Responsive layout fix) */}
                    <motion.div
                        variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                        className="col-span-12 lg:col-span-8 group cursor-pointer"
                        onMouseEnter={() => setClickedId('04')}
                        onMouseLeave={() => setClickedId(null)}
                        onClick={() => handleInteraction('04')}
                    >
                        <BentoCard className="h-[450px] md:h-[400px] bg-black relative overflow-hidden border-none">
                            {/* Video Background */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover object-center scale-110 group-hover:scale-115 transition-transform duration-1000"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="https://res.cloudinary.com/dabyqx1mz/video/upload/v1774895828/Hard_Rock_bxpixy.mp4" type="video/mp4" />
                                </video>
                            </div>
                            
                            {/* Semi-transparent overlay for text readability */}
                            <div className="absolute inset-0 bg-black/40 z-5" />
                            
                            <div className="relative h-full w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 z-10 p-8 md:p-12">
                                
                              
                            </div>
                        </BentoCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;