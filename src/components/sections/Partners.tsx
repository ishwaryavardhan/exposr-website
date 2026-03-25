"use client";

import { ShoppingBag, Cloud, Infinity } from 'lucide-react';
import { motion } from 'framer-motion';
import BlurText from '@/components/reactbits/BlurText';

export default function Partners() {
    return (
        <section className="py-4 px-6 bg-[#fcfcfd] overflow-hidden text-center z-10 relative border-t border-black/5">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                 {/* First Line */}
                            <h2 className="uppercase leading-[0.9] tracking-tight font-extrabold">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-x-5">
                    
                    {/* Line 1 / Word 1: EXPOSR */}
                    <div className="text-[56px] md:text-[80px] flex pt-5">
                        <BlurText text="E" animateBy="letters" delay={20} className="inline-block" />
                        <BlurText text="X" animateBy="letters" delay={20} className="text-brand-orange inline-block" />
                        <BlurText text="POSR" animateBy="letters" delay={20} className="inline-block" />
                    </div>

                    {/* Line 2 / Word 2: PARTNERS */}
                    <div className="text-[56px] md:text-[80px] pt-5">
                        <BlurText text="PARTNERS" animateBy="letters" delay={20} />
                    </div>

                    {/* Line 3 / Word 3: WITH */}
                    <div className="text-[56px] md:text-[80px] pt-5">
                        <BlurText text="WITH" animateBy="letters" delay={20} />
                    </div>

                </div>
            </h2>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-6 pt-5">
                    <BlurText text="Esteemed Collaborations with Industry Leaders" delay={30} />
                </h3>
                <div className="text-black/60 font-medium text-lg leading-relaxed mb-20 max-w-4xl mx-auto flex justify-center text-center">
                    <BlurText 
                        text="We take pride in our partnerships with industry giants such as Google, Microsoft, Amazon, and Meta. These relationships empower us to offer our clients unparalleled access to the latest tools and valuable insights in the ever-evolving world of digital marketing and web development." 
                        delay={10} 
                        className="justify-center text-center "
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {/* Google Premier */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center gap-3 rounded-xl">
                        <div 
                            className="bg-[#EA4335] text-white text-[7px] font-bold tracking-widest uppercase p-1 rounded-sm"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            PREMIER
                        </div>
                        <div className="flex flex-col text-left">
                            <div className="text-xl font-medium tracking-tight leading-none mb-1">
                                <span className="text-[#4285F4]">G</span>
                                <span className="text-[#EA4335]">o</span>
                                <span className="text-[#FBBC05]">o</span>
                                <span className="text-[#4285F4]">g</span>
                                <span className="text-[#34A853]">l</span>
                                <span className="text-[#EA4335]">e</span>
                            </div>
                            <div className="text-xl text-gray-500 font-light leading-none">Partner</div>
                        </div>
                    </motion.div>

                    {/* Meta */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center gap-2 rounded-xl">
                        <Infinity size={28} className="text-[#0668E1]" />
                        <div className="flex flex-col text-left leading-tight">
                            <span className="text-xl font-semibold text-gray-800">Meta</span>
                            <span className="text-gray-600 font-medium text-sm">Business Partners</span>
                        </div>
                    </motion.div>

                    {/* Google Analytics */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center rounded-xl">
                        <div className="flex flex-col text-left">
                            <div className="text-[10px] font-semibold text-gray-500 flex gap-1 items-center">
                                <span>
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">o</span>
                                    <span className="text-[#FBBC05]">o</span>
                                    <span className="text-[#4285F4]">g</span>
                                    <span className="text-[#34A853]">l</span>
                                    <span className="text-[#EA4335]">e</span>
                                </span>
                                Analytics Certified
                            </div>
                            <div className="text-3xl text-gray-500 font-normal leading-none my-1">Partner</div>
                            <div className="text-[10px] text-gray-400">Services</div>
                        </div>
                    </motion.div>

                    {/* Semrush */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center gap-3 rounded-xl">
                        <div 
                            className="bg-[#6138B2] text-white text-[7px] font-bold tracking-widest uppercase p-1 rounded-sm"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            CERTIFIED
                        </div>
                        <div className="flex flex-col text-left">
                            <div className="text-xs font-black tracking-tight text-[#FF642D] flex items-center gap-1 mb-1">
                                <div className="w-3 h-3 border-[3px] border-[#FF642D] rounded-full border-r-transparent rotate-45"></div> SEMRUSH
                            </div>
                            <div className="text-sm text-[#6138B2] font-semibold leading-tight">Agency<br/>Partner</div>
                        </div>
                    </motion.div>

                    {/* Microsoft */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center gap-3 text-left rounded-xl">
                        <div className="grid grid-cols-2 gap-[2px]">
                            <div className="w-3 h-3 bg-[#F25022]"></div>
                            <div className="w-3 h-3 bg-[#7FBA00]"></div>
                            <div className="w-3 h-3 bg-[#00A4EF]"></div>
                            <div className="w-3 h-3 bg-[#FFB900]"></div>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-semibold text-gray-600">Microsoft</span>
                            <span className="text-gray-500 font-light text-[13px]">Gold Partner</span>
                        </div>
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-[#F3F6F8] shadow-sm p-4 h-[100px] justify-center gap-3 rounded-xl border border-black/5">
                        <div className="bg-[#0A66C2] text-white font-bold text-2xl px-2 py-0.5 rounded-sm">in</div>
                        <div className="flex flex-col text-left leading-tight">
                            <span className="text-[#0A66C2] text-lg font-semibold">Marketing</span>
                            <span className="text-[#0A66C2] font-light text-sm">Partner</span>
                        </div>
                    </motion.div>

                    {/* Amazon */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center rounded-xl">
                        <div className="flex flex-col text-left">
                            <div className="text-2xl font-black tracking-tighter text-black flex items-center mb-1">
                                amazon <span className="text-gray-500 font-normal ml-1">ads</span>
                            </div>
                            <div className="text-[#232F3E] text-[11px] font-semibold flex items-center gap-1">
                                Verified <span className="text-[#00A8E1] font-normal">partner</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* AWS */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center gap-3 rounded-xl">
                        <div className="flex flex-col text-center">
                            <div className="text-3xl font-black text-[#232F3E] relative leading-none mb-1">
                                aws
                                {/* simplistic smile */}
                                <div className="absolute -bottom-1 left-1 w-8 h-1 bg-[#FF9900] rounded-r-full rounded-l-full rotate-[4deg]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col text-left text-gray-500 text-[10px] leading-tight font-medium uppercase mt-2">
                            <span>partner</span>
                            <span>network</span>
                        </div>
                    </motion.div>

                    {/* Shopify */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center gap-2 rounded-xl">
                        <ShoppingBag className="text-[#95BF47] fill-[#95BF47]" size={24} />
                        <div className="text-lg font-bold text-black tracking-tight">
                            shopify <span className="font-light">experts</span>
                        </div>
                    </motion.div>

                    {/* Cloudways */}
                    <motion.div whileHover={{ y: -5 }} className="flex items-center bg-white border border-black/5 shadow-sm p-4 h-[100px] justify-center gap-3 rounded-xl">
                        <div 
                            className="bg-[#1C2C54] text-white text-[7px] font-bold tracking-widest uppercase p-1 rounded-sm"
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            GOLD
                        </div>
                        <div className="flex flex-col text-left">
                            <div className="flex items-center gap-1 text-[#1C2C54] font-bold text-sm mb-1">
                                <Cloud size={16} className="fill-[#1C2C54]" /> CLOUDWAYS
                            </div>
                            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-[0.05em]">Agency Partner</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
