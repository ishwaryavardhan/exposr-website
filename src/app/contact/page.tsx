"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';

export default function ContactPage() {
    return (
        <div className="pt-44 pb-32 px-6 bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-24">
                    <h1 className="text-6xl md:text-8xl font-black text-black mb-10 tracking-tighter leading-[0.9]">
                        Let's <span className="text-brand-orange block italic font-serif font-light">Collaborate.</span>
                    </h1>
                    <p className="text-2xl text-black/50 font-medium leading-relaxed max-w-2xl">
                        Ready to scale your brand in the world's fastest-growing digital economy? We're listening.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <div className="space-y-12 mb-20">
                            {[
                                { icon: <Mail size={24} />, label: "Email Us", val: "growth@exposr.in", href: "mailto:growth@exposr.in" },
                                { icon: <Phone size={24} />, label: "Call Us", val: "+91 98765 43210", href: "tel:+919876543210" },
                                { icon: <MapPin size={24} />, label: "Our Office", val: "Mumbai, Maharashtra, India", href: "#" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-8 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-brand-orange text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-2">{item.label}</div>
                                        <a href={item.href} className="text-2xl font-black text-black hover:text-black/60 transition-colors uppercase tracking-tight">
                                            {item.val}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-12 border-t border-black/5">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30 mb-8">Follow Our Journey</div>
                            <div className="flex gap-6">
                                {['LinkedIn', 'Instagram', 'Twitter'].map(social => (
                                    <a key={social} href="#" className="text-lg font-black text-black border-b-2 border-transparent hover:border-black transition-all uppercase tracking-tighter">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-12 md:p-16 rounded-[4rem] bg-neutral-50 border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
                    >
                        <h3 className="text-4xl font-black text-black mb-10 tracking-tight uppercase">Brief Us</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                    <input className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/10" placeholder="Your Name" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                    <input className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/10" placeholder="name@company.com" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Service Required</label>
                                <select className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                    <option>Performance Marketing</option>
                                    <option>SEO & Content</option>
                                    <option>Production House</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Your Message</label>
                                <textarea rows={4} className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/10 resize-none" placeholder="Tell us about your goals..."></textarea>
                            </div>
                            <button className="w-full py-5 bg-brand-orange hover:bg-brand-orange/90 text-black font-black rounded-2xl transition-all uppercase tracking-[0.2em] text-xs mt-8 shadow-xl shadow-brand-orange/10 flex items-center justify-center gap-3">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
