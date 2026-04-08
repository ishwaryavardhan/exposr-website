"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Play, Pause, Volume2, VolumeX, ChevronDown, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const VideoMessenger = () => {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
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
    }, [isExpanded]);

    const [isSubmitting, setIsSubmitting] = useState(false);

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
                    source: 'Video Messenger',
                    message: `Budget: ${formData.budget} | Message: ${formData.message}`
                })
            });
            
            if (res.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    setIsExpanded(false);
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

    if (!isVisible) return null;

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
        <div className="fixed bottom-8 right-8 z-[70]">
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    /* Expanded State */
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="w-[340px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-black/5 flex flex-col max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(false);
                            }}
                            className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
                        >
                            <X size={14} />
                        </button>

                        {/* Top Video Header */}
                        <div className="h-48 bg-black relative shrink-0 overflow-hidden">
                            <video
                                ref={videoRef}
                                src="/Video%20assets/rose%20and%20leaf/Rose%20and%20leaf.mp4"
                                muted={isMuted}
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            
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
                                <h3 className="text-white font-black text-xl tracking-tight leading-none">
                                    Scale <span className="text-brand-orange italic font-serif">Your Brand</span>
                                </h3>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="p-6 bg-white overflow-y-auto overflow-x-hidden custom-scrollbar">
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
                                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/30" />
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
                                            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/30" />
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
                                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-orange" />
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
                                            {isSubmitting ? 'Sending...' : 'Book my campaign Strategy'}
                                            {!isSubmitting && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform p-5"   />}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ) : (
                    /* Circular Initial State */
                    <motion.div
                        key="circular"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group cursor-pointer"
                        onMouseEnter={() => setIsExpanded(true)}
                        onClick={() => setIsExpanded(true)}
                    >
                        {/* Dismiss Button (Small X) */}
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsVisible(false);
                            }}
                            className="absolute -top-1 -right-1 z-30 w-6 h-6 bg-white border border-black/10 rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X size={10} />
                        </button>

                        {/* Circular Video */}
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand-orange shadow-2xl relative">
                            <video
                                src="/Video%20assets/rose%20and%20leaf/rose%20and%20leaf%20-%20hot%20chocolate.mp4"
                                muted
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-full object-cover scale-150"
                            />
                            
                            {/* Overlay Ping */}
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors" />
                            
                            {/* Text Badge Overlaid */}
                            <div className="absolute inset-0 flex items-center justify-center p-2">
                                <span className="bg-black/80 text-white text-[8px] md:text-[9px] font-black uppercase tracking-tight text-center px-1 py-0.5 rounded leading-none backdrop-blur-sm">
                                    Talk With Us
                                </span>
                            </div>

                            {/* Ping Animation */}
                            <div className="absolute inset-0 bg-brand-orange/20 rounded-full animate-ping pointer-events-none" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style dangerouslySetInnerHTML={{ __html: scrollbarStyle }} />
        </div>
    );
};

// Custom scrollbar style for the form container
const scrollbarStyle = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 77, 0, 0.2);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 77, 0, 0.5);
  }
`;

export default VideoMessenger;
