"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github as Dribbble, ArrowUpRight } from 'lucide-react';

const footerLinks = {
    services: [
        { name: 'SEO Optimization', href: '/seo-optimization' },
        { name: 'PPC Management', href: '/ppc-management' },
        { name: 'Social Media Management', href: '/social-media-management' },
        { name: 'Media Production', href: '/media-production' },
        { name: 'Performance Marketing', href: '/performance-marketing' },
        { name: 'Influencer Marketing', href: '/influencer-marketing-for-brands' },
    ],
    solutions: [
        { name: 'Branding', href: '/solutions/branding' },
        { name: 'All Services', href: '/services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Clients', href: '/clients' },
    ],
    company: [
        { name: 'Home', href: '/' },
        { name: 'Our Work', href: '/work' },
        { name: 'Blog', href: '/blog' },
        { name: 'Resources', href: '/resources' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Portal', href: '/portal/login' },
    ]
};

const Footer = () => {
    return (
        <footer className="relative bg-black text-white pt-10 pb-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-10">

                    {/* Column 1: Sneakpeak/About */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Sneakpeak</h4>
                        <p className="text-white/50 text-base leading-relaxed font-medium">
                            We are a growth-focused digital agency dedicated to scaling Indian brands through precision-engineered marketing and high-end production.
                        </p>
                    </div>

                    {/* Column 2: Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Services</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-bold">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Solutions</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-bold">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-bold">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Newsletter/Connect */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4">Get In Touch</h4>
                        <p className="text-white/50 mb-4 text-sm font-medium leading-relaxed">
                            Ready to scale? Leave your email — we'll reach out.
                        </p>

                        <form className="relative flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white outline-none focus:border-white/30 transition-all w-full"
                            />
                            <button
                                type="submit"
                                className="bg-brand-orange text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-all w-full"
                            >
                                Submit
                            </button>
                        </form>

                        <div className="mt-6 flex gap-6">
                            <Link href="#" className="text-white/20 hover:text-white transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-white/20 hover:text-white transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="text-white/20 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="text-white/20 hover:text-white transition-colors"><Dribbble size={20} /></Link>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-white/5 mb-4"></div>

                {/* Bottom Section: Big Brand */}
                <div className="flex flex-col gap-0">
                    <div className="relative">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[15vw] font-black tracking-tighter leading-[0.8] mb-0"
                        >
                            eXposr<span className="text-brand-orange">.</span>
                        </motion.h2>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
