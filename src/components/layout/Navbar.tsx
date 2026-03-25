"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react';

const navItems = [
    { name: 'Work', href: '/work' },
    {
        name: 'Solutions',
        href: '/services',
        hasMegaMenu: true,
        categories: ['Branding'],
        featured: [
            {
                title: 'Repositioning Of Skybags from a bag to Adventure Identity',
                category: 'Branding',
                image: '/case-study-skybags.png'
            }
        ]
    },
    { name: 'About', href: '/portfolio', hasDropdown: true },
    { name: 'Resources', href: '/resources', hasDropdown: true },
    { name: 'Careers', href: '/careers' },
];

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Pages with white heroes shouldn't use light state text (white text on white bg).
    // Currently, Home, PPC, and SEO pages all have white hero sections.
    const isLightState = isScrolled; // Dynamic based on scroll state

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            onMouseLeave={() => setActiveDropdown(null)}
        >
            {/* Announcement Bar */}
            <div className={`w-full bg-white border-b border-black/5 py-2 px-4 flex justify-center items-center gap-2 text-[11px] md:text-[13px] font-medium text-black/60 transition-all duration-500 ${isScrolled ? '-mt-12 opacity-0' : 'mt-0 opacity-100'}`}>
                <span role="img" aria-label="party">🎉</span>
                <span>"eXposr is the Growth Partner at afaqs! Foxglove Awards 2026."</span>
                <Link href="/news" className="text-brand-orange hover:underline font-bold">Check it out here.</Link>
            </div>

            <div className={`w-full transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm' : 'bg-transparent'}`}>
                <div className={`max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-500 px-6 relative ${isScrolled ? 'py-4' : 'py-8'}`}>

                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${isLightState ? 'bg-orange' : 'bg-orange'}`}></div>
                        <Link href="/" className={`text-2xl font-black tracking-tighter flex items-baseline transition-colors ${isLightState ? 'text-black' : 'text-black'}`}>
                            eXposr<span className={`text-sm font-bold ml-0.5 transition-colors ${isLightState ? 'text-black/40' : 'text-black/40'}`}>.Media</span>
                        </Link>
                    </div>

                    {/* PC Menu */}
                    <div className="hidden lg:flex items-center gap-10 pointer-events-auto">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative py-2"
                                onMouseEnter={() => item.hasMegaMenu && setActiveDropdown(item.name)}
                            >
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-1.5 text-[14px] font-bold transition-colors ${activeDropdown === item.name 
                                        ? (isLightState ? 'text-black' : 'text-black') 
                                        : (isLightState ? 'text-black/80 hover:text-black' : 'text-black/80 hover:text-black')
                                        }`}
                                >
                                    {item.name}
                                    {(item.hasMegaMenu || item.hasDropdown) && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 opacity-100' : 'opacity-40'} ${isLightState ? 'text-white' : 'text-black'}`}
                                        />
                                    )}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3 pointer-events-auto">
                        <Link
                            href="/portfolio"
                            className="bg-white text-black border border-black/5 px-8 py-3.5 rounded-full text-[14px] font-black tracking-tight hover:bg-black/5 transition-all hidden md:block"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-black text-white px-8 py-3.5 rounded-full text-[14px] font-black tracking-tight hover:bg-black/90 transition-all flex items-center gap-2 group"
                        >
                            Contact
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className={`lg:hidden p-2 transition-colors ${isLightState ? 'text-gray-800' : 'text-black'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
                {activeDropdown === 'Solutions' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-0 right-0 bg-white border-b border-black/10 shadow-2xl pointer-events-auto overflow-hidden z-40"
                    >
                        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12 py-16 px-6">
                            {/* Categories Column */}
                            <div className="col-span-3 flex flex-col gap-8 border-r border-black/5">
                                {navItems.find(i => i.name === 'Solutions')?.categories?.map((cat) => (
                                    <Link
                                        key={cat}
                                        href={cat === 'Branding' ? '/solutions/branding' : `/services#${cat.toLowerCase().replace(' ', '-')}`}
                                        className="text-3xl font-black tracking-tighter text-black/20 hover:text-black transition-all duration-500 hover:translate-x-2"
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>

                            {/* Featured Showcase Grid */}
                            <div className="col-span-9 grid grid-cols-2 gap-8">
                                {navItems.find(i => i.name === 'Solutions')?.featured?.map((item, idx) => (
                                    <div key={idx} className="group cursor-pointer">
                                        <div className="relative aspect-[16/9] bg-black/5 rounded-3xl overflow-hidden mb-6">
                                            {/* Placeholder for real images */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 group-hover:scale-105 transition-transform duration-700" />
                                            {/* Simulate the graphic/text content inside image */}
                                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                                <div className="w-full text-center">
                                                    <span className="inline-block px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">Case Study</span>
                                                    <h4 className="text-xl font-black text-black leading-tight max-w-xs mx-auto">{item.title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm font-bold text-black/40 group-hover:text-black transition-colors">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-[120px] bg-white z-40 lg:hidden p-8 pointer-events-auto overflow-y-auto"
                    >
                        <div className="flex flex-col gap-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="flex flex-col gap-4">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-black text-black uppercase tracking-tighter flex items-center justify-between group"
                                    >
                                        {item.name}
                                        <ChevronRight size={24} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                    {item.hasMegaMenu && (
                                        <div className="flex flex-col gap-4 pl-4 border-l-2 border-black/5">
                                            {item.categories?.map(cat => (
                                                <Link
                                                    key={cat}
                                                    href="/services"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-lg font-bold text-black/40 hover:text-black transition-colors"
                                                >
                                                    {cat}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
