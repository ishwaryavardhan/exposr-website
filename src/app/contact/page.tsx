"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Performance Marketing', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'Contact Page' })
            });
            const data = await res.json();
            
            if (res.ok && data.success) {
                setSuccess(true);
                setFormData({ name: '', email: '', phone: '', service: 'Performance Marketing', message: '' });
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        {success ? (
                            <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-4">
                                <CheckCircle size={48} className="text-green-500" />
                                <h4 className="text-2xl font-black uppercase tracking-tight">Message Received</h4>
                                <p className="font-medium">Thank you! Our growth team will reach out to you within 24 hours.</p>
                                <button onClick={() => setSuccess(false)} className="mt-4 text-xs font-black uppercase tracking-widest text-green-600 hover:text-green-800 transition-colors">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {error && <div className="text-red-500 text-sm font-semibold p-4 bg-red-50 rounded-xl">{error}</div>}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/10" placeholder="Your Name" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/10" placeholder="name@company.com" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    value={formData.phone}
                                    onChange={e => setFormData({...formData, phone: e.target.value})}
                                    pattern="[6-9][0-9]{9}"
                                    maxLength={10}
                                    onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9')}
                                    onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                                    className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/10"
                                    placeholder="98XXXXXXXX"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Service Required</label>
                                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all appearance-none cursor-pointer">
                                    <option>Performance Marketing</option>
                                    <option>SEO & Content</option>
                                    <option>Production House</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em] ml-1">Your Message</label>
                                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-white border-b-2 border-black/10 px-0 py-4 text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/10 resize-none" placeholder="Tell us about your goals..."></textarea>
                            </div>
                            <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-brand-orange hover:bg-brand-orange/90 text-black font-black rounded-2xl transition-all uppercase tracking-[0.2em] text-xs mt-8 shadow-xl shadow-brand-orange/10 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={16} />}
                            </button>
                        </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
