"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactShowcase = () => {
    return (
        <section className="py-32 px-6 bg-[#fcfcfd]">
            <div className="container mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    {/* Left Column: Content */}
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] uppercase">
                                How Can We <br />
                                <span className="text-brand-orange italic">Scale You?</span>
                            </h2>
                            <p className="text-xl text-black/50 font-medium leading-relaxed max-w-xl">
                                Connect with our growth specialists for high-conversion strategies, SEO audits, or full-stack digital transformation.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Request a Free SEO Audit",
                                "Book a Performance Strategy Call",
                                "Explore Media Production Packages"
                            ].map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 group cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-black/30 group-hover:bg-brand-orange group-hover:text-black transition-colors">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className="text-xl font-bold text-black group-hover:translate-x-2 transition-transform">{item}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                            <div className="p-8 rounded-[2rem] bg-white border border-black/5 shadow-sm space-y-4 group cursor-pointer hover:border-black/10 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-black">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-black/30 mb-1">Quick Connect</h4>
                                    <p className="text-lg font-bold text-black">growth@exposr.media</p>
                                </div>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-white border border-black/5 shadow-sm space-y-4 group cursor-pointer hover:border-black/10 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-black">
                                    <ArrowUpRight size={24} />
                                </div>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-black/30 mb-1">Resource Hub</h4>
                                        <p className="text-lg font-bold text-black">Case Studies</p>
                                    </div>
                                    <ArrowRight size={20} className="text-black/20 group-hover:translate-x-1 group-hover:text-brand-orange transition-all" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-10 md:p-14 rounded-[3rem] bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden"
                    >
                        {/* Decorative background for the form card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-black/[0.02] to-transparent pointer-events-none" />

                        <div className="relative z-10 space-y-12">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-black text-black tracking-tight uppercase">Start Your <br />Growth Journey</h3>
                                <p className="text-black/40 font-medium">Fill in the details below and we'll be in touch.</p>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">First Name</label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-black/5 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-black/5 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Business Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-black/5 transition-all outline-none"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-black/5 transition-all outline-none"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Website URL</label>
                                    <input
                                        type="url"
                                        placeholder="https://yourbrand.com"
                                        className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-black/5 transition-all outline-none"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Growth Goals</label>
                                    <textarea
                                        placeholder="Tell us about your project..."
                                        rows={4}
                                        className="w-full bg-black/5 border-none rounded-2xl px-6 py-4 text-black font-bold placeholder:text-black/20 focus:ring-2 focus:ring-black/5 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full h-16 bg-brand-orange text-black font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 transition-all"
                                >
                                    Unlock Growth
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactShowcase;
