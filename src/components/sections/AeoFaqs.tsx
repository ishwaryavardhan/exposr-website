"use client";

import React, { useState } from 'react';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export type FaqItem = {
    question: string;
    answer: string;
};

interface AeoFaqsProps {
    title?: string;
    subtitle?: string;
    faqs: FaqItem[];
}

const AeoFaqs: React.FC<AeoFaqsProps> = ({ 
    title = "Frequently Asked Questions", 
    subtitle = "Everything you need to know about our approach.",
    faqs 
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    // Generate JSON-LD Schema for Answer Engine Optimization
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className="bg-white py-24 md:py-32 px-6 relative">
            {/* Inject JSON-LD Schema for Google/AI crawling */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
            />

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-start">
                
                {/* Left Column: Headers */}
                <div className="lg:col-span-4 flex flex-col items-start top-32 self-start h-fit">
                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block border border-black/10 rounded-full px-4 py-1.5 mb-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">AEO / FAQ</span>
                    </m.div>
                    
                    <m.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter leading-[1.1] mb-6"
                    >
                        {title}
                    </m.h2>
                    
                    <m.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl font-bold text-black/40 leading-relaxed max-w-sm"
                    >
                        {subtitle}
                    </m.p>
                </div>

                {/* Right Column: Accordion */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        
                        return (
                            <m.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                key={index}
                                className={`group border rounded-3xl overflow-hidden transition-all duration-500 ${isOpen ? 'bg-black border-black shadow-2xl scale-[1.02]' : 'bg-transparent border-black/10 hover:border-brand-orange/50 hover:bg-black/[0.02]'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left gap-6 cursor-pointer"
                                >
                                    <h3 className={`text-xl md:text-2xl font-black tracking-tight leading-snug transition-colors duration-300 pr-4 ${isOpen ? 'text-white' : 'text-black group-hover:text-brand-orange'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-orange text-black rotate-180' : 'bg-black/5 text-black group-hover:bg-brand-orange/20'}`}>
                                        {isOpen ? <Minus size={20} className="stroke-[3]" /> : <Plus size={20} className="stroke-[3]" />}
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <m.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-0 items-start">
                                                <div className="w-12 h-1 bg-brand-orange mb-6 rounded-full" />
                                                <p className="text-white/80 text-lg leading-relaxed font-medium">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </m.div>
                                    )}
                                </AnimatePresence>
                            </m.div>
                        );
                    })}
                </div>

            </div>
        </section>
        </LazyMotion>
    );
};

export default AeoFaqs;
