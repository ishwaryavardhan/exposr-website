"use client";

import React from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import WebShorties from '@/components/sections/WebShorties';

const services = [
    {
        title: "Social Media Management",
        description: "We go beyond the likes and other vanity metrics to create well-researched, insight-driven and sustainable content strategies that your target audience finds valuable. The core belief that drives our work is that social media is all about having a conversation and building a real community."
    },
    {
        title: "Original Content and Copywriting",
        description: "Our wordsmiths create compelling ad copy, editorial pieces other original content that prioritizes impact, clarity and empathy over mere loudness. We put customer intent behind every word we craft to drive clicks and shares."
    },
    {
        title: "Graphic Design, Iconography and Illustrations",
        description: "Visual content is now the most popular format for content consumption. Our digital artists execute thumb-stopping content that brings your brand's vision and personality to life. We also design high-converting content for websites, apps and e-commerce touchpoints."
    },
    {
        title: "Video Editing and Animation",
        description: "As the world is moving towards video content, we turn around high-quality 2D/3D animations and video edits that are optimized for social and digital sharing."
    },
    {
        title: "Film Production, AVs and Product Photography",
        description: "Schbang Motion Pictures is our in-house production hub that comprises scriptwriters, photographers, videographers, producers, directors, editors and animators who together create ad films, photo/video assets, and feature-length content."
    },
    {
        title: "Campaign Planning",
        description: "Alongside daily content, we also work on creating memorable events that address client briefs, deliver beyond expectations and leave a lasting impression. Schbang offers a turnkey approach to events from the initial conceptualization, to final production and management."
    },
    {
        title: "Schbang Fluence & ORM",
        description: "Our Schbang Fluence Team connect you with some of the largest influencers, brand advocates and thought leaders on the internet to work on meaningful collaborations that harness their social following to drive recall and business for your brand.\n\nWith solid partnerships across mainstream and digital media networks, we work with press houses to get the word out and generate traction for your campaigns.\n\nIn close relation, our ORM specialists (Online Reputation Management) leverage media contacts and social listening tools to monitor, guard and improve conversations around your brand."
    },
    {
        title: "Print, OOH, Mainline Advertising",
        description: "Although we are proudly digital-first, we understand the need to have a brand presence at all physical touchpoints, too. So we work with our partner vendors to create neck-turning outdoor assets like billboards and ad banners to more personalized solutions like standees, brochures, magazines and business cards."
    },
    {
        title: "New Brand Launch and Rebranding",
        description: "Our Branding and Consumer Centricity division, called \"Schbang Theta,\" meditates on your brand purpose, analyzes the audience along with you, and uses data-driven strategies to craft a long-lasting yet fluid personality kit for your business. This will comprise everything from logos and iconography to custom types, brand tonality, visual and copy guidelines, and more..."
    }
];

const clients = [
    { name: "P&G", logo: "P&G" },
    { name: "Glow & Lovely", logo: "Glow & Lovely" },
    { name: "Garnier Men", logo: "Garnier Men" },
    { name: "kotak 8II", logo: "kotak 8II" },
    { name: "Jio", logo: "Jio" },
    { name: "UNO", logo: "UNO" },
    { name: "Godrej", logo: "Godrej" },
    { name: "ASHOK LEYLAND", logo: "ASHOK LEYLAND" },
    { name: "Domino's", logo: "Domino's" },
];

export default function BrandingPage() {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <section className="pt-48 pb-32 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Column (Sticky Rail) */}
                    <div className="lg:sticky lg:top-48 self-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl md:text-7xl font-black text-black tracking-tighter mb-8">
                                Brand Solutions
                            </h1>
                            <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-medium mb-12 max-w-xl">
                                Our Strategists, Designers, Video Editors and Animators provide you with holistic solutions to grow your digital presence and achieve your business goals through both day-to-day content and integrated flagship campaigns.
                            </p>

                            <div className="border-t border-black/10 pt-12">
                                <p className="text-sm font-black text-black uppercase tracking-widest mb-12">
                                    Proud to work with the biggest brands in India & Abroad
                                </p>

                                <div className="grid grid-cols-3 gap-x-12 gap-y-16">
                                    {clients.map((client) => (
                                        <div
                                            key={client.name}
                                            className="h-12 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                        >
                                            <span className="text-xl font-bold tracking-tighter text-black">{client.logo}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (Accordion) */}
                    <div className="flex flex-col gap-px bg-black/5 border border-black/5 rounded-[3rem] overflow-hidden self-start">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className={`w-full text-left p-8 md:p-10 transition-all duration-500 flex items-start justify-between gap-6 ${openIndex === idx ? 'bg-black/[0.05]' : 'bg-white hover:bg-black/[0.02]'
                                        }`}
                                >
                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xl md:text-2xl font-black text-black tracking-tight flex items-center gap-3">
                                            {service.title}
                                            {openIndex === idx && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                                        </h3>

                                        <AnimatePresence initial={false}>
                                            {openIndex === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    <p className="text-base md:text-lg text-black/70 leading-relaxed font-medium whitespace-pre-line pt-2">
                                                        {service.description}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className={`p-2 rounded-full transition-all duration-500 shrink-0 ${openIndex === idx ? 'bg-black text-white' : 'border border-black/5 text-black'
                                        }`}>
                                        {openIndex === idx ? <X size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <WebShorties />
        </main>
    );
}
