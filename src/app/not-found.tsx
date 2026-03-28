"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-black flex flex-col items-center pt-32 pb-24 relative overflow-hidden font-sans">
        <style dangerouslySetInnerHTML={{ __html: '#global-cta { display: none !important; }' }} />

        {/* Subtle Background Glows / Textures */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#E08643]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
            
            {/* Text Hierarchy imitating the uploaded image */}
            <div className="text-center mb-10 mt-8 z-20">
                <motion.p 
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="text-lg md:text-xl font-bold text-black mb-3"
                >
                   oops 404 error :
                </motion.p>
                <motion.h1 
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.2 }}
                   className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tighter text-brand-orange leading-[1.1] mb-6"
                >
                   That path didn’t <span className="text-black">convert</span>
                </motion.h1>
                
                <motion.p 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: 0.4 }}
                   className="text-2xl md:text-4xl font-bold text-brand-orange uppercase tracking-tight max-w-4xl mx-auto leading-snug mb-8"
                >
                   The page is gone, but your growth potential isn’t.
                </motion.p>

                <motion.div
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
                   className="inline-block border border-brand-orange/40 rounded-full px-6 py-2 bg-white/50 backdrop-blur-sm shadow-sm"
                >
                    <span className="font-bold text-black flex items-center gap-2">
                        Let’s plug you back into an AI-powered strategy that actually performs.
                    </span>
                </motion.div>
            </div>

            {/* Orange Robot Image */}
            <motion.div 
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
               className="relative w-full max-w-lg aspect-square mt-[-1rem] md:mt-[-3rem] z-10 mix-blend-multiply"
            >
                <Image src="/orange-robot.png" alt="AI Agent Robot" fill className="object-contain" priority />
            </motion.div>
            
        </div>

        {/* Helpful Links Grid (Light Theme) moved ABOVE the Go Back button */}
        <div className="relative z-10 w-full max-w-5xl px-6 mt-10 mb-16">
            <h2 className="text-sm font-black text-black/30 tracking-[0.5em] uppercase mb-12 text-center">Re-route Your Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white rounded-3xl p-10 border border-black/5 hover:border-brand-orange/30 transition-colors shadow-lg shadow-black/5 group">
                   <h3 className="text-2xl font-black mb-8 text-black uppercase tracking-tight flex items-center gap-3">
                       <span className="w-3 h-3 rounded-full bg-brand-orange group-hover:scale-150 transition-transform"></span>
                       Our Services
                   </h3>
                   <ul className="flex flex-col gap-4">
                       <li><Link href="/seo-optimization" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">SEO Optimization</Link></li>
                       <li><Link href="/services/website-development" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Website Development</Link></li>
                       <li><Link href="/ppc-management" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Paid Ads (PPC)</Link></li>
                       <li><Link href="/performance-marketing" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Performance Marketing</Link></li>
                       <li><Link href="/media-production" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Media Production</Link></li>
                   </ul>
                </div>
                <div className="bg-white rounded-3xl p-10 border border-black/5 hover:border-brand-orange/30 transition-colors shadow-lg shadow-black/5 group">
                   <h3 className="text-2xl font-black mb-8 text-black uppercase tracking-tight flex items-center gap-3">
                       <span className="w-3 h-3 rounded-full bg-brand-orange group-hover:scale-150 transition-transform"></span>
                       Explore More
                   </h3>
                   <ul className="flex flex-col gap-4">
                       <li><Link href="/blog" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Marketing Blog</Link></li>
                       <li><Link href="/case-studies" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Success Case Studies</Link></li>
                       <li><Link href="/portfolio" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Our Portfolio</Link></li>
                       <li><Link href="/contact" className="text-lg text-black/60 hover:text-brand-orange hover:translate-x-2 transition-all font-bold block">Get in Touch</Link></li>
                   </ul>
                </div>
            </div>
        </div>

        {/* Go Back to Homepage Button moved to the BOTTOM */}
        <motion.div
           initial={{ scale: 0.9, opacity: 0, y: 10 }}
           animate={{ scale: 1, opacity: 1, y: 0 }}
           transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }}
           className="relative z-20 mt-8"
        >
            <Link href="/" className="bg-brand-orange hover:bg-black text-white px-12 py-4 rounded-full text-lg font-black tracking-tight transition-all duration-300 inline-block uppercase shadow-xl shadow-brand-orange/20">
                Go Back to Homepage
            </Link>
        </motion.div>

    </div>
  );
}
