"use client";

import { motion } from 'framer-motion';

const platforms = ["Google Ads", "Meta (FB/IG)", "Amazon Ads", "Hotstar Ads", "YouTube", "LinkedIn"];
const tools = ["AppsFlyer", "Branch", "Mixpanel", "Taboola", "MoEngage", "CleverTap"];

const PMPlatformsTools = () => {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden border-y border-black/5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    {/* Platforms */}
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30 mb-12">Premium Platforms</h3>
                        <div className="grid grid-cols-2 gap-8">
                            {platforms.map((p, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10, color: '#FF4D00' }}
                                    className="text-2xl font-black text-black/20 tracking-tighter uppercase whitespace-nowrap cursor-default transition-colors hover:text-brand-orange"
                                >
                                    {p}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30 mb-12">Growth Stack</h3>
                        <div className="grid grid-cols-2 gap-8">
                            {tools.map((t, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10, color: '#FF4D00' }}
                                    className="text-2xl font-black text-black/20 tracking-tighter uppercase whitespace-nowrap cursor-default transition-colors hover:text-brand-orange"
                                >
                                    {t}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PMPlatformsTools;
