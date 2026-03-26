"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github as Dribbble } from 'lucide-react';

const footerLinks = {
    services: [
        { name: 'SEO Optimization', href: '/seo-optimization' },
        { name: 'PPC Management', href: '/ppc-management' },
        { name: 'Media Production', href: '/media-production' },
        { name: 'Performance Marketing', href: '/performance-marketing' },
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
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Portal', href: '/portal/login' },
    ]
};

const headingStyle = "text-[13px] lg:text-[15px] font-bold uppercase tracking-[0.2em] text-brand-orange mb-6";
const linkStyle = "text-[14px] lg:text-[15px] font-medium text-white/50 hover:text-white transition-colors duration-300";
const textStyle = "text-[14px] lg:text-[15px] font-medium text-white/50 leading-relaxed";

const Footer = () => {
    return (
        <footer className="relative bg-black text-white pt-16 pb-4 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-20">
                
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16">

                    {/* Sneakpeak - Full width on mobile */}
                    <div className="col-span-2 lg:col-span-3">
                        <h4 className={headingStyle}>Sneakpeak</h4>
                        <p className={`${textStyle} max-w-sm`}>
                            We are a growth-focused digital agency dedicated to scaling Indian brands through precision-engineered marketing and high-end production.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className={headingStyle}>Services</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={linkStyle}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className={headingStyle}>Solutions</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={linkStyle}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1 lg:col-span-2 mt-4 lg:mt-0">
                        <h4 className={headingStyle}>Company</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={linkStyle}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div className="col-span-2 lg:col-span-2 mt-4 lg:mt-0">
                        <h4 className={headingStyle}>Get In Touch</h4>
                        <form className="relative flex flex-col gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-brand-orange/50 transition-all w-full"
                            />
                            <button
                                type="submit"
                                className="bg-brand-orange text-black px-4 py-3 rounded-lg text-[13px] font-black uppercase tracking-widest hover:bg-white transition-all w-full"
                            >
                                Submit
                            </button>
                        </form>

                        <div className="flex gap-5 justify-start">
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Twitter size={18} /></Link>
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Instagram size={18} /></Link>
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Dribbble size={18} /></Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-4"></div>

                {/* Big Brand Logo Section */}
                <div className="relative mt-10 lg:mt-20">
                    <div className="overflow-visible lg:overflow-hidden">
                        <motion.h2
                            initial={{ opacity: 0, y: "40%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[22vw] font-black tracking-tighter leading-[0.7] mb-0 -ml-2 select-none pointer-events-none"
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