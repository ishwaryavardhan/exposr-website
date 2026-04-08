"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface VideoMessengerInlineProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
}

const VideoMessengerInline = ({ 
    title = "Scale <span class='text-brand-orange italic'>Your Brand.</span>", 
    subtitle = "Get a Free Growth Audit",
    buttonText = "Start Growth Journey"
}: VideoMessengerInlineProps) => {
    const pathname = usePathname();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        service: '',
        budget: '',
        message: ''
    });

    const services = [
        "Web Development",
        "SEO",
        "Performance Marketing",
        "Media Production",
        "Influencer Marketing"
    ];

    const budgets = [
        "50K - 1L",
        "1L to 3L",
        "3L to 5L",
        "> 5L"
    ];

    const seoSubServices = [
        "End-to-End SEO Services",
        "AI SEO Optimization Services",
        "SaaS SEO Services",
        "Off-Page SEO Services",
        "On-Page SEO Services",
        "Technical SEO Services",
        "Local SEO Services",
        "SEO Package"
    ];

    const seoBudgets = [
        "60K – 1L",
        "1L – 3L",
        "3L – 5L"
    ];

    const isSEOPage = pathname.includes('seo');
    const isUSPage = pathname.includes('/us/');

    const currentBudgets = isUSPage 
        ? ["$1,000 – $2,500 / mo", "$2,500 – $5,000 / mo", "$5,000 – $10,000 / mo", "$10,000+ / mo"]
        : (isSEOPage ? seoBudgets : budgets);

    // Determine current service context based on URL
    useEffect(() => {
        let currentService = "";
        const path = pathname.toLowerCase();
        if (path.includes('seo')) currentService = "SEO";
        else if (path.includes('performance') || path.includes('ppc')) currentService = "Performance Marketing";
        else if (path.includes('influencer')) currentService = "Influencer Marketing";
        else if (path.includes('media')) currentService = "Media Production";
        else if (path.includes('branding') || path.includes('development')) currentService = "Web Development";
        
        setFormData(prev => ({ ...prev, service: currentService }));
    }, [pathname]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {});
        }
    }, []);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch(() => {});
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    businessName: formData.website,
                    service: formData.service,
                    source: 'Hero Form',
                    message: `Budget: ${formData.budget} | Message: ${formData.message}`
                })
            });
            
            if (res.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    const path = pathname.toLowerCase();
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        website: '',
                        service: path.includes('seo') ? 'SEO' : '',
                        budget: '',
                        message: ''
                    });
                }, 3000);
            }
        } catch (error) {
            // silently fail — form reset handles UX
        } finally {
            setIsSubmitting(false);
        }
    };

    const currentContextService = (() => {
        const path = pathname.toLowerCase();
        if (path.includes('seo')) return "SEO";
        if (path.includes('performance') || path.includes('ppc')) return "Performance Marketing";
        if (path.includes('influencer')) return "Influencer Marketing";
        if (path.includes('media')) return "Media Production";
        if (path.includes('branding') || path.includes('development')) return "Web Development";
        return null;
    })();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md ml-auto overflow-hidden rounded-[3rem] shadow-2xl relative border border-black/5 bg-white"
        >
            {/* Video Header */}
            <div className="h-48 bg-black relative overflow-hidden">
                <video
                    ref={videoRef}
                    src="/Video assets/rose and leaf/Rose and leaf.mp4"
                    muted={isMuted}
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Video Controls */}
                <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                        onClick={togglePlayPause}
                        className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
                    >
                        {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                    </button>
                    <button 
                        onClick={toggleMute}
                        className="w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
                    >
                        {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                    </button>
                </div>
                
                {/* Header Text & Category Badge */}
                <div className="absolute bottom-4 left-6 right-6">
                    {currentContextService && (
                        <motion.span 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-block px-2 py-0.5 bg-brand-orange text-black text-[9px] font-black uppercase tracking-widest rounded mb-2"
                        >
                            {currentContextService} Service
                        </motion.span>
                    )}
                    <h3 className="text-white font-black text-xl tracking-tight leading-none" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="text-white/80 text-[10px] font-black uppercase tracking-widest mt-1">{subtitle}</p>
                </div>
            </div>

            {/* Form Area */}
            <div className="p-6 bg-white overflow-y-auto overflow-x-hidden max-h-[60vh]">
                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-12 text-center"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="text-xl font-black text-black mb-2">Message Sent!</h4>
                            <p className="text-black/50 text-sm">We'll get back to you shortly.</p>
                        </motion.div>
                    ) : (
                        <motion.form 
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-3"
                        >
                            <div className="grid grid-cols-2 gap-3">
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Name" 
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-black/5 border-none rounded-xl text-sm focus:ring-1 focus:ring-brand-orange outline-none transition-shadow"
                                />
                                <input 
                                    required
                                    type="email" 
                                    placeholder="Email ID" 
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-black/5 border-none rounded-xl text-sm focus:ring-1 focus:ring-brand-orange outline-none transition-shadow"
                                />
                            </div>
                            
                            <input 
                                required
                                type="url" 
                                placeholder="Business URL" 
                                value={formData.website}
                                onChange={e => setFormData({...formData, website: e.target.value})}
                                className="w-full px-4 py-2.5 bg-black/5 border-none rounded-xl text-sm focus:ring-1 focus:ring-brand-orange outline-none transition-shadow"
                            />

                            <input
                                required
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                pattern={isUSPage ? ".{10,}" : "[6-9][0-9]{9}"}
                                maxLength={isUSPage ? 15 : 10}
                                onInvalid={e => (e.target as HTMLInputElement).setCustomValidity(isUSPage ? 'Enter a valid phone number' : 'Enter a valid 10-digit number starting with 6, 7, 8 or 9')}
                                onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                                className="w-full px-4 py-2.5 bg-black/5 border-none rounded-xl text-sm focus:ring-1 focus:ring-brand-orange outline-none transition-shadow"
                            />

                            <div className="relative">
                                {currentContextService ? (
                                    <div className="w-full px-4 py-2.5 bg-black/5 text-black font-semibold rounded-xl text-xs uppercase tracking-widest flex items-center justify-between border border-black/5">
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                                            Category: {currentContextService}
                                        </span>
                                    </div>
                                ) : (
                                    <div className="relative">
                                        <select 
                                            required
                                            value={formData.service}
                                            onChange={e => setFormData({...formData, service: e.target.value})}
                                            className="w-full px-4 py-2.5 bg-black/5 border-none rounded-xl text-sm appearance-none focus:ring-1 focus:ring-brand-orange outline-none cursor-pointer pr-10"
                                        >
                                            <option value="" disabled>Services Required</option>
                                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/30"/>
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <select 
                                    required
                                    value={formData.budget}
                                    onChange={e => setFormData({...formData, budget: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-black/5 border-none rounded-xl text-sm appearance-none focus:ring-1 focus:ring-brand-orange outline-none cursor-pointer pr-10"
                                >
                                    <option value="" disabled>Project Budget {isUSPage ? '(USD)' : ''}</option>
                                    {currentBudgets.map(b => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black/30"/>
                                    </svg>
                                </div>
                            </div>

                            {isSEOPage ? (
                                <div className="relative">
                                    <select 
                                        required
                                        value={formData.message}
                                        onChange={e => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-2.5 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-sm appearance-none focus:ring-1 focus:ring-brand-orange outline-none cursor-pointer pr-10 font-medium text-black"
                                    >
                                        <option value="" disabled>Select SEO Service</option>
                                        {seoSubServices.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"/>
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <textarea 
                                    required
                                    placeholder="Service you want" 
                                    rows={2}
                                    value={formData.message}
                                    onChange={e => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-2.5 bg-black/5 border-none rounded-xl text-sm focus:ring-1 focus:ring-brand-orange outline-none resize-none transition-shadow"
                                />
                            )}

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-black text-white py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-brand-orange hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : buttonText}
                                {!isSubmitting && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                            
                            <p className="text-[9px] text-center text-black/20 font-bold uppercase tracking-widest">No Spam. Only ROI.</p>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default VideoMessengerInline;
