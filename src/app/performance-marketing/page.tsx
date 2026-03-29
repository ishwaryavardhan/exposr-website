"use client";

import { motion } from 'framer-motion';
import PMHero from '@/components/sections/performance-marketing/PMHero';
import PMPainPoints from '@/components/sections/performance-marketing/PMPainPoints';
import PMWhyUs from '@/components/sections/performance-marketing/PMWhyUs';
import PMAiSection from '@/components/sections/performance-marketing/PMAiSection';
import PMPlatformsTools from '@/components/sections/performance-marketing/PMPlatformsTools';
import ProductShowcase from '@/components/sections/ProductShowcase';
import WebShorties from '@/components/sections/WebShorties';
import WordReveal from '@/components/reactbits/WordReveal';
import AeoFaqs from '@/components/sections/AeoFaqs';

const perfFaqs = [
  { question: 'What is full-funnel performance marketing?', answer: 'Full-funnel performance marketing is an integrated strategy that targets customers at every stage of the buying journey—from top-of-funnel awareness (reaching cold audiences unfamiliar with your brand) through mid-funnel consideration (nurturing prospects comparing options) to bottom-of-funnel conversion (driving purchase or sign-up decisions). eXposr designs coordinated messaging, creative, and channel strategies for each stage, ensuring no part of your funnel leaks revenue.' },
  { question: 'What is multi-touch attribution and why does it matter?', answer: 'Multi-touch attribution (MTA) assigns credit for a conversion across all the marketing touchpoints a customer interacted with prior to converting—rather than crediting only the last click or first click. This gives a far more accurate picture of which channels and campaigns are actually driving revenue. eXposr implements data-driven attribution models using Google Analytics 4 and custom tracking frameworks, enabling smarter budget allocation decisions that reduce overall CAC.' },
  { question: 'How do AI bidding algorithms improve performance marketing results?', answer: 'AI bidding algorithms process millions of contextual signals at auction time—device, location, time, audience behavior, weather, and intent signals—that no human can process at scale. Properly configured, they consistently outperform manual bidding by dynamically allocating budget to the highest-converting opportunities in real time. eXposr trains and constrains AI bidding systems with first-party data inputs and conversion event hierarchies that align the algorithm precisely to your business objectives, not just platform-level metrics.' },
  { question: 'What is a Customer Acquisition Cost (CAC) and what is a good benchmark?', answer: 'Customer Acquisition Cost (CAC) is the total investment required (ad spend + agency fees) to acquire one new paying customer. Benchmarks vary widely by industry: SaaS companies typically target a CAC:LTV ratio of 1:3 or better, meaning the lifetime value of a customer should be at least 3x the cost to acquire them. eXposr tracks CAC at a granular level by channel and campaign, identifying where acquisition is most efficient and continuously reallocating budget to improve the overall ratio.' },
  { question: 'What is a creative fatigue and how do you combat it in paid campaigns?', answer: 'Creative fatigue occurs when your target audience has been exposed to the same ad creative repeatedly, causing engagement rates (CTR, conversion rate) to decline. It is one of the most common causes of declining ROAS in mature campaigns. eXposr combats fatigue through disciplined creative refresh cycles, systematic A/B testing of ad copy, visuals and CTAs, and performance-threshold triggers that automatically pause underperforming creatives and rotate in fresh variants before fatigue significantly impacts results.' },
  { question: 'How do you scale performance marketing campaigns without losing efficiency?', answer: 'Scaling paid campaigns while maintaining efficiency is one of the hardest problems in performance marketing. Simply increasing budget typically inflates CPCs and CPAs. eXposr scales through audience expansion (finding lookalike and adjacent audiences with high conversion probability), geographic expansion, dayparting optimization, and creative volume increases. We scale in controlled increments—monitoring efficiency metrics at each step—rather than making aggressive budget jumps that destabilize campaign learning phases.' },
  { question: 'What first-party data strategies should I prioritise in a cookieless world?', answer: 'With third-party cookies being phased out, first-party data (data you collect directly from your customers and prospects) has become the most valuable asset in performance marketing. eXposr helps clients build first-party data strategies around CRM integration, email capture campaigns, gated content, and customer data platforms (CDPs). This data powers custom audiences, lookalike modeling, and personalization across paid channels—creating a durable competitive advantage that is immune to privacy regulation changes.' },
  { question: 'How important is landing page optimization to performance marketing results?', answer: 'Critically important. You can have the most efficient ad targeting and the most compelling creative in the world, but if your landing page fails to convert visitors, you will never achieve your target CPA. eXposr treats landing page conversion rate optimization (CRO) as an integral part of performance marketing—not an afterthought. We audit landing pages for message match, page speed, form friction, trust signals, and mobile UX, testing improvements systematically to improve conversion rates before scaling spend.' },
  { question: 'What reporting metrics should performance marketing campaigns be measured by?', answer: 'The right metrics depend on your business model, but the hierarchy we recommend is: Revenue Attributed → ROAS → CPA → Conversion Rate → CTR. Avoid optimizing for upstream vanity metrics (impressions, clicks) in isolation. eXposr builds bespoke performance dashboards that surface the metrics directly tied to your business outcomes, updated in real time, with weekly and monthly performance review calls to contextualize the data and align on strategic decisions.' },
  { question: 'How does performance marketing differ from brand marketing?', answer: 'Performance marketing is measurable, outcome-focused advertising where you pay for and measure specific actions (clicks, leads, purchases, sign-ups). Brand marketing focuses on long-term awareness, perception, and preference building where ROI is harder to measure directly but creates the conditions that make performance marketing more efficient over time. eXposr typically recommends a blended 70/30 or 80/20 split (performance/brand) for growth-stage companies, shifting toward more brand investment as market position matures.' },
];

export default function PerformanceMarketingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* 1. Hero Section */}
            <PMHero />

            {/* 2. About Us Layout */}
            <section className="py-8 px-6 bg-black text-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-24">
                        <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">
                            About <span className="text-white/30 italic">Performance.</span>
                        </h2>
                        <WordReveal
                            text="We are obsessed with data, but driven by human insight. Our mission is to scale Indian brands through surgical precision in digital advertising."
                            className="text-2xl text-white/60 font-medium leading-relaxed max-w-2xl"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { stat: "300%", label: "Avg. ROI Increase", desc: "Performance uplift for clients" },
                            { stat: "50Cr+", label: "Ad Spend Managed", desc: "Experience across scales" },
                            { stat: "100+", label: "Expert Analysts", desc: "Data experts at your service" },
                            { stat: "24/7", label: "Real-time Optimization", desc: "Always-on growth engine" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-4 border-l border-white/10 pl-8"
                            >
                                <div className="text-6xl font-black tracking-tighter">{item.stat}</div>
                                <div className="text-white/80 font-bold uppercase tracking-widest text-sm">{item.label}</div>
                                <p className="text-sm text-white/40 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Pain Point of Industry */}
            <PMPainPoints />

            {/* 4. Why choose us for Performance Marketing */}
            <PMWhyUs />

            {/* 5. Projects showcases */}
            <WebShorties />
            <ProductShowcase />

            {/* 6. Ai optimized Performace Marketing */}
            <PMAiSection />

            {/* 7 & 8. Platforms & Tools */}
            <PMPlatformsTools />

            {/* 9. Client Testimonials */}
            <section className="py-32 px-6 bg-black overflow-hidden border-y border-white/5">
                <div className="container mx-auto mb-24">
                    <div className="text-center">
                        <h2 className="text-sm font-black text-white/20 tracking-[0.5em] uppercase mb-16">Results Speak Louder</h2>
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    {[
                        "EXPOSR Performance",
                        "High Conversion",
                        "Scalable Growth",
                        "Data Mastery",
                        "Indian Market Experts"
                    ].map((text, idx) => (
                        <div key={idx} className="flex flex-wrap justify-center gap-16 opacity-30 hover:opacity-100 transition-opacity duration-700">
                             <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-4xl md:text-7xl font-black tracking-tighter text-white whitespace-nowrap cursor-default uppercase"
                            >
                                {text}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 10. FAQs - AEO Optimized */}
            <AeoFaqs
                title="Performance Marketing FAQs."
                subtitle="The strategic answers behind the metrics that matter most to your growth."
                faqs={perfFaqs}
            />

            {/* 11 & 12 (CTA & Footer are in layout.tsx) */}
        </div>
    );
}
