"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

interface ClientProject {
    name: string;
    logo?: string;
}

interface ClientCategory {
    id: string;
    title: string;
    projects: ClientProject[];
}

const clientData: ClientCategory[] = [
    {
        id: 'voxit',
        title: 'Voxit / Startup Xperts',
        projects: [
            { name: 'Aravaazhi Jewellers' },
            { name: 'Magik Mat' },
            { name: 'My Talking Tree' },
            { name: 'Hour Developer' },
            { name: 'AppBowl' },
            { name: 'Microline' },
        ]
    },
    {
        id: '8spades',
        title: '8 Spades Advertising',
        projects: [
            { name: 'Leo Coffee' },
            { name: 'Stone & Acres' },
            { name: 'B Logo Project' },
        ]
    },
    {
        id: 'federal',
        title: 'Federal Soft Systems',
        projects: [
            { name: 'Roll Overstock' },
            { name: 'Federal Soft Systems' },
            { name: 'Magik Mat (FSS)' },
            { name: 'My Talking Tree (FSS)' },
            { name: '1 Hour Developer' },
        ]
    },
    {
        id: 'egrove',
        title: 'Egrove Systems',
        projects: [
            { name: 'Egrove Systems' },
            { name: 'V-Circle Project' },
        ]
    },
    {
        id: 'general',
        title: 'Client Projects',
        projects: [
            { name: 'La Vie' },
            { name: 'Bajoria Hospitality' },
            { name: 'Sri Bhojan' },
            { name: 'Tree Clinic' },
            { name: 'Kanmani Fertility Centre' },
            { name: 'Hungover' },
            { name: 'Blue Kite' },
            { name: 'Vos Taxi' },
            { name: 'VSEP' },
            { name: 'Solar Run' },
            { name: 'Ready Realty' },
            { name: 'Cube Logo' },
            { name: 'Hard Rockk' },
        ]
    }
];

export default function ClientsPage() {
    const allProjects = clientData.flatMap(cat => cat.projects);

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <section className="pt-48 pb-32 px-6 md:px-12">
                <div className="max-w-[1200px] mx-auto">
                    
                    <div className="text-center mb-24">
                        <Link href="/" className="inline-flex items-center gap-2 text-black/40 font-black uppercase tracking-[0.2em] text-[10px] mb-8 hover:text-black transition-colors">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        
                        <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-4">
                            Trusted <span className="text-brand-orange italic font-serif font-light lowercase">Outcomes.</span>
                        </h1>
                        <p className="text-black/40 font-black uppercase tracking-[0.3em] text-xs">Client Projects</p>
                    </div>

                    <div className="bg-[#F0F0F0] rounded-[3rem] p-8 md:p-16">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                            {allProjects.map((project, pIdx) => (
                                <motion.div
                                    key={pIdx}
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    className="relative bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-500 group w-full aspect-square max-w-[170px]"
                                >
                                    {/* Logo Placeholder - maintaining spacing/size as requested */}
                                    <div className="w-full h-full flex items-center justify-center">
                                        <h2 className="text-[10px] font-black uppercase tracking-widest text-black/20 group-hover:text-brand-orange transition-colors">
                                            {project.name}
                                        </h2>
                                    </div>
                                    
                                    {/* Hover Indicator */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink size={14} className="text-brand-orange" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Bottom Info */}
                    <div className="mt-20 p-12 md:p-20 rounded-[3rem] bg-black text-white text-center">
                        <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-none uppercase">
                            Your Brand <span className="text-brand-orange italic">Next?</span>
                        </h3>
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-brand-orange text-black px-8 py-5 rounded-full text-lg font-bold hover:bg-white transition-colors duration-300">
                            Let's Talk Growth
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
