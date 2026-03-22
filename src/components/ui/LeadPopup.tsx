"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const LeadPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = localStorage.getItem('hasSeenLeadPopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
            }
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenLeadPopup', 'true');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    ...formData,
                    source: 'Lead Popup'
                })
            });
            if (res.ok) {
                setIsSubmitted(true);
                setTimeout(() => closePopup(), 2000);
            }
        } catch (error) {
            console.error('Failed to submit popup form', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-black/5"
                    >
                        <button
                            onClick={closePopup}
                            className="absolute top-8 right-8 text-black/20 hover:text-black transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-12 md:p-16">
                            {!isSubmitted ? (
                                <>
                                    <div className="mb-10">
                                        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-none uppercase mb-4">
                                            Scale Your <br /><span className="text-brand-orange">Brand Now.</span>
                                        </h2>
                                        <p className="text-black/50 font-bold uppercase tracking-widest text-[10px]">Get a free 30-minute strategy session</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="YOUR NAME"
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData({...formData, name: e.target.value})}
                                                className="w-full bg-neutral-50 border border-black/5 px-6 py-4 rounded-2xl text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="WORK EMAIL"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({...formData, email: e.target.value})}
                                                className="w-full bg-neutral-50 border border-black/5 px-6 py-4 rounded-2xl text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20 text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="PHONE NUMBER"
                                                required
                                                value={formData.phone}
                                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                                className="w-full bg-neutral-50 border border-black/5 px-6 py-4 rounded-2xl text-black font-semibold focus:outline-none focus:border-black transition-all placeholder:text-black/20 text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-5 bg-brand-orange text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-orange/10 flex items-center justify-center gap-2 disabled:opacity-50"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Book My Session'} {!isSubmitting && <Send size={14} />}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="py-20 text-center"
                                >
                                    <div className="w-20 h-20 bg-brand-orange text-black rounded-full flex items-center justify-center mx-auto mb-8">
                                        <X size={40} className="rotate-45" /> {/* Using X rotated as a checkmark/plus alternative if Check doesn't exist, but I'll use CheckCircle from lucide if available */}
                                    </div>
                                    <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-4">You're All Set!</h3>
                                    <p className="text-black/50 font-medium">Our strategist will reach out to you within 24 hours.</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadPopup;
