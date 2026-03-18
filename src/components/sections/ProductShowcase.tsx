"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BentoCard } from '@/components/ui/BentoCard';

const projects = [
    {
        id: '01',
        title: 'Echoing Through Time',
        type: 'Tracklist',
        bg: 'bg-[#F3F4F6]',
        gridClass: 'col-span-12 lg:col-span-8 h-[400px]',
    },
    {
        id: '02',
        title: 'Visual Identity',
        type: 'Portrait',
        bg: 'bg-[#E5E7EB]',
        gridClass: 'col-span-12 lg:col-span-4 h-[400px]',
    },
    {
        id: '03',
        title: 'Brand Purpose',
        type: 'Gradient',
        bg: 'bg-gradient-to-br from-[#FF007A] to-[#FF8A00]',
        gridClass: 'col-span-12 lg:col-span-4 h-[300px]',
    },
    {
        id: '04',
        title: 'Tech Specs',
        type: 'Specs',
        bg: 'bg-[#D1D5DB]',
        gridClass: 'col-span-12 lg:col-span-8 h-[300px]',
    }
];

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
        <section className="py-32 px-6 bg-[#0B0D11]">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-24 px-4">
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
                        Selected <br /><span className="text-white/30 italic">Works.</span>
                    </h2>
                    <p className="mt-8 text-xl text-white/50 font-medium leading-relaxed max-w-xl">
                        A curated selection of our most impactful brand transformations and creative solutions.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-12 gap-6"
                >
                    {/* Tile 1: Large Top-Left */}
                    <motion.div
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        className="col-span-12 lg:col-span-8 group cursor-pointer"
                        onHoverStart={() => setClickedId('01')}
                        onHoverEnd={() => setClickedId(null)}
                        onClick={() => handleInteraction('01')}
                    >
                        <BentoCard className="h-[400px]">
                            <div className="absolute inset-0 bg-[#F3F4F6]">
                                <div className="absolute top-10 left-10 z-10">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Tracklist</span>
                                    <div className="mt-4 flex flex-col gap-1">
                                        {['Echoing', 'Through', 'Time', 'Light', 'Shadows', 'Distant', 'Horizons'].map((t, idx) => (
                                            <div key={idx} className="flex gap-8 text-[12px] font-bold text-black/40">
                                                <span>0{idx + 1}</span>
                                                <span className="text-black">{t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Image
                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
                                    alt="Product 01"
                                    fill
                                    className="object-cover object-right opacity-80 group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* Tile 2: Top-Right */}
                    <motion.div
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        className="col-span-12 lg:col-span-4 group cursor-pointer"
                        onHoverStart={() => setClickedId('02')}
                        onHoverEnd={() => setClickedId(null)}
                        onClick={() => handleInteraction('02')}
                    >
                        <BentoCard className="h-[400px]">
                            <div className="absolute inset-0 bg-[#E5E7EB]">
                                <Image
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000"
                                    alt="Product 02"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* Tile 3: Bottom-Left (Gradient) */}
                    <motion.div
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        className="col-span-12 lg:col-span-4 group cursor-pointer"
                        onHoverStart={() => setClickedId('03')}
                        onHoverEnd={() => setClickedId(null)}
                        onClick={() => handleInteraction('03')}
                    >
                        <BentoCard className="h-[350px] bg-gradient-to-br from-brand-orange to-[#CC3D00]">
                            <div className="p-12 h-full flex flex-col justify-center">
                                <span className="text-4xl font-black text-white mb-6">TM</span>
                                <p className="text-xs font-bold text-white/60 leading-relaxed uppercase tracking-widest">
                                    To the creators who envisioned tomorrow, and to those who will shape it with boldness and curiosity.
                                </p>
                            </div>
                        </BentoCard>
                    </motion.div>

                    {/* Tile 4: Bottom-Right (Specs) */}
                    <motion.div
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        className="col-span-12 lg:col-span-8 group cursor-pointer"
                        onHoverStart={() => setClickedId('04')}
                        onHoverEnd={() => setClickedId(null)}
                        onClick={() => handleInteraction('04')}
                    >
                        <BentoCard className="h-[350px] bg-[#BEC2C7]">
                            <div className="absolute inset-0 flex items-center justify-between p-12">
                                <div className="flex flex-col gap-8 text-[10px] font-black uppercase tracking-widest text-black/40">
                                    <div>M * G — 2</div>
                                    <div className="text-black">HTTPS://</div>
                                </div>

                                <div className="flex flex-col gap-8 text-[10px] font-black uppercase tracking-widest text-black/40 text-center">
                                    <div>(C) 2026</div>
                                    <div className="text-black">EXPOSR.SYSTEMS</div>
                                </div>

                                <div className="flex flex-col gap-8 text-[10px] font-black uppercase tracking-widest text-black/40 text-right">
                                    <div>NEW FACES HOSTED BY N-VISION</div>
                                    <div className="text-black">DVL 09:30:21XZ</div>
                                </div>

                                <div className="absolute bottom-0 right-10 w-64 h-64">
                                    <Image
                                        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000"
                                        alt="Product 04"
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </BentoCard>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowcase;
