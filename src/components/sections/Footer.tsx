"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Github as Dribbble } from 'lucide-react';

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

// Common Styles to ensure consistency
const headingStyle = "text-[15px] font-bold uppercase tracking-[0.2em] text-brand-orange mb-6";
const linkStyle = "text-[15px] font-medium text-white/50 hover:text-white transition-colors duration-300";
const textStyle = "text-[15px] font-medium text-white/50 leading-relaxed";

const Footer = () => {
    return (
        <footer className="relative bg-black text-white pt-16 pb-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-20">
                
                {/* 2 columns on mobile, 12 columns on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16">

                    {/* Column 1: Sneakpeak - Full width on mobile */}
                    <div className="col-span-2 lg:col-span-3">
                        <h4 className={headingStyle}>Sneakpeak</h4>
                        <p className={`${textStyle} max-w-xs text-justify`}>
                            We are a growth-focused digital agency dedicated to scaling Indian brands through precision-engineered marketing and high-end production.
                        </p>
                    </div>

                    {/* Column 2: Services - Half width on mobile */}
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className={headingStyle}>Services</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={linkStyle}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Solutions - Half width on mobile */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className={headingStyle}>Solutions</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={linkStyle}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Company - Half width on mobile */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className={headingStyle}>Company</h4>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={linkStyle}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Get In Touch - Half width on mobile */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className={headingStyle}>Get In Touch</h4>
                        <p className={`${textStyle} mb-6`}>
                            Ready to scale? Leave your email — we'll reach out.
                        </p>

                        <form className="relative flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-all w-full"
                            />
                            <button
                                type="submit"
                                className="bg-brand-orange text-black px-4 py-3 rounded-lg text-[15px] font-black uppercase tracking-widest hover:bg-white transition-all w-full"
                            >
                                Submit
                            </button>
                        </form>

                        <div className="mt-8 flex gap-5">
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Twitter size={18} /></Link>
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Instagram size={18} /></Link>
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                            <Link href="#" className="text-white/30 hover:text-white transition-colors"><Dribbble size={18} /></Link>
                        </div>
                    </div>
                </div>

                {/* Separator line */}
                <div className="w-full h-px bg-white/5 mb-4"></div>

                {/* Bottom Section: Big Brand Logo */}
                <div className="flex flex-col">
                    <div className="relative overflow-hidden">
                        <motion.h2
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[18vw] font-black tracking-tighter leading-[0.8] mb-0 -ml-2"
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