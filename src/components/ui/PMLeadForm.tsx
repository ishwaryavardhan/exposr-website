"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

const PMLeadForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md ml-auto p-1px bg-gradient-to-br from-black/20 via-black/5 to-black/20 rounded-[3rem] shadow-2xl"
        >
            <div className="bg-white rounded-[3rem] p-10 md:p-12 border border-black/5">
                <div className="mb-10">
                    <h3 className="text-3xl font-black text-black tracking-tighter uppercase mb-2">Scale <span className="text-brand-orange italic">Now.</span></h3>
                    <p className="text-sm text-black/40 font-bold uppercase tracking-widest">Get a Free Growth Audit</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/30 px-2">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full px-6 py-5 bg-neutral-50 border border-black/5 rounded-2xl text-black font-bold focus:outline-none focus:border-black/20 transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/30 px-2">Work Email</label>
                            <input 
                                type="email" 
                                className="w-full px-6 py-5 bg-neutral-50 border border-black/5 rounded-2xl text-black font-bold focus:outline-none focus:border-black/20 transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black/30 px-2">Market Budget</label>
                            <select className="w-full px-6 py-5 bg-neutral-50 border border-black/5 rounded-2xl text-black font-bold focus:outline-none focus:border-black/20 appearance-none transition-colors">
                                <option>₹5L - ₹10L</option>
                                <option>₹10L - ₹50L</option>
                                <option>₹50L+</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-black/30 px-2">Company Website</label>
                        <input 
                            type="text" 
                            className="w-full px-6 py-5 bg-neutral-50 border border-black/5 rounded-2xl text-black font-bold focus:outline-none focus:border-black/20 transition-colors"
                            placeholder="www.company.com"
                        />
                    </div>

                    <button className="group w-full py-6 bg-brand-orange text-black rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-brand-orange/20">
                        Start Growth Journey
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-[9px] text-center text-black/20 font-bold uppercase tracking-widest mt-15">No Spam. Only ROI.</p>
                </form>
            </div>
        </motion.div>
    );
};

export default PMLeadForm;
