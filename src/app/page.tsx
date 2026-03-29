"use client";

import Hero from '@/components/sections/Hero';
import BlurText from '@/components/reactbits/BlurText';
import ServiceStages from '@/components/sections/ServiceStages';
import ProductShowcase from '@/components/sections/ProductShowcase';
import WebShorties from '@/components/sections/WebShorties';
import ContactShowcase from '@/components/sections/ContactShowcase';
import Partners from '@/components/sections/Partners';
import {
  Target, Search, Video, BarChart3, ArrowRight,
  GraduationCap, Landmark, Zap, ShoppingBag,
  Activity, Home as HomeIcon, Coffee, Users as UsersIcon,
  PlayCircle, CheckCircle
} from 'lucide-react';

import { motion } from 'framer-motion';

import WordReveal from '@/components/reactbits/WordReveal';
import AeoFaqs from '@/components/sections/AeoFaqs';

const industries = [
  { name: 'Edutech', icon: <GraduationCap size={24} /> },
  { name: 'Fin-Tech', icon: <Landmark size={24} /> },
  { name: 'SaaS', icon: <Zap size={24} /> },
  { name: 'E-Commerce', icon: <ShoppingBag size={24} /> },
  { name: 'Health & Fitness', icon: <Activity size={24} /> },
  { name: 'Real-Estate', icon: <HomeIcon size={24} /> },
  { name: 'Hospitality', icon: <Coffee size={24} /> },
];

const testimonials = [
  { name: "Rahul S.", role: "Founder, BloomTech India", quote: "eXposr didn't just bring traffic; they brought the right traffic. Our sales increased 3x in six months." },
  { name: "Ananya M.", role: "Marketing Head, Veda Care", quote: "Their understanding of the Indian consumer mindset is unparalleled. A game-changer for our scale." },
];

const homeFaqs = [
  { question: 'What is an Agentic AI digital marketing agency?', answer: 'An Agentic AI digital marketing agency like eXposr uses autonomous AI systems and intelligent agents to execute, optimize, and scale marketing campaigns with minimal manual intervention. This means faster decision-making, real-time bid optimization, predictive audience targeting, and compounding performance gains that traditional agencies cannot replicate at scale.' },
  { question: 'How does eXposr use AI to accelerate SaaS pipeline growth?', answer: 'eXposr deploys AI-powered demand generation workflows that map each stage of your SaaS buyer journey—from awareness to MQL to SQL. We combine automated intent-signal targeting, AI-assisted ad copy generation, and conversion rate optimization loops to consistently reduce your cost-per-qualified-lead while maximizing pipeline velocity.' },
  { question: 'What digital marketing services does eXposr offer?', answer: 'eXposr offers a full suite of growth services including SEO Optimization (technical, on-page, and off-page), PPC Management across Google and LinkedIn, Performance Marketing, Social Media Management, Website Development, and high-end Media Production. All services are powered by AI agents and data-led strategy frameworks.' },
  { question: 'How long does it take to see ROI from digital marketing?', answer: 'ROI timelines depend on the channel mix. Paid channels (PPC, Performance Marketing) typically show measurable results within 2-4 weeks of campaign launch. Organic channels like SEO require 3-6 months for significant traction but deliver compounding, lower-cost returns long-term. eXposr typically creates a blended strategy to ensure short-term pipeline coverage while building long-term organic equity.' },
  { question: 'What industries does eXposr specialise in?', answer: 'eXposr has deep expertise in high-growth verticals including SaaS, Edutech, Fin-Tech, E-Commerce, Health & Fitness, Real Estate, and Hospitality. Our AI systems are trained to understand the nuanced buyer behaviour in each of these industries, allowing for hyper-targeted campaigns that perform significantly above industry benchmarks.' },
  { question: 'Does eXposr work with early-stage startups or only enterprise brands?', answer: 'eXposr works with companies across the growth curve—from Series A SaaS startups building their first GTM engine to established enterprise brands looking to unlock new acquisition channels. Our modular service model means we can start with a focused engagement and scale up as your needs grow.' },
  { question: 'What makes eXposr different from other digital marketing agencies in India?', answer: 'eXposr is India\'s first Agentic AI marketing agency, meaning we don\'t just use AI tools—we build autonomous marketing systems. Our team combines performance marketing engineers, AI prompt architects, and creative strategists under one roof, allowing us to deliver higher output, faster iteration cycles, and measurably better KPIs than conventional agencies.' },
  { question: 'How does eXposr measure and report on campaign performance?', answer: 'We use a combination of real-time dashboards, weekly performance reports, and monthly strategic reviews. Every campaign is tracked against agreed-upon KPIs including qualified leads generated, cost per acquisition, pipeline influenced, and revenue attributed. Our clients have full visibility into spend, performance, and strategic recommendations at all times.' },
  { question: 'Can eXposr manage both paid and organic marketing channels simultaneously?', answer: 'Yes. eXposr\'s strength lies in building integrated growth ecosystems where paid acquisition channels (Google Ads, Meta, LinkedIn) and organic channels (SEO, Content Marketing) work together to maximize total funnel coverage and reduce blended CAC. Our AI systems allocate budget and effort dynamically based on real-time performance signals.' },
  { question: 'How do I get started with eXposr?', answer: 'Getting started is simple. Visit our contact page or book a growth strategy session directly. We begin with a comprehensive audit of your current marketing performance, identify the highest-leverage opportunities, and present a tailored roadmap aligned to your revenue goals. Most clients see a clear ROI projection within the first strategy call.' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-visible">
      <Hero />

      {/* About Us / Impact Section */}
      <section className="py-12 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-8">
            <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-[0.9] uppercase">
              About <span className="text-brand-orange italic">Us.</span>
            </h2>
            <WordReveal
              text="We are a team of specialists dedicated to accelerating the growth of Indian brands through precision-engineered digital strategies."
              className="text-2xl text-white/60 font-medium leading-relaxed max-w-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { stat: "8+", label: "Years of Experience", desc: "Proven track record in India" },
              { stat: "50+", label: "Projects Done", desc: "Successful brand transformations" },
              { stat: "2Cr+", label: "Revenue Generated", desc: "Impact delivered for our clients" },
              { stat: "500+", label: "Keywords Ranked", desc: "First page rankings on Google" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
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

      {/* Services Section */}
      <ServiceStages />

      {/* Short-Form Media Section */}
      <WebShorties />

      {/* Interactive Product Showcase */}
      <ProductShowcase />

      {/* Contact & CTA Section */}
      <ContactShowcase />

      {/* Industries Served Section */}
      <section className="py-8 px-6 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
            <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter uppercase leading-none">
              Industries <br /><span className="text-brand-orange">We Serve.</span>
            </h2>
            <div className="max-w-md">
              <p className="text-xl text-black/50 font-medium leading-relaxed">
                Our expertise spans across diverse sectors, delivering specialized growth strategies for each unique marketplace.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(0,0,0,0.05)' }}
                className="flex flex-col items-center justify-center p-8 rounded-[2rem] border border-black/5 text-center gap-4 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center text-black">
                  {industry.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/50">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-4 px-6 bg-black overflow-hidden border-y border-white/5">
        <div className="container mx-auto pb-4">
          <div className="text-center">
            <h2 className="text-sm font-black text-white/20 tracking-[0.5em] uppercase p-8">Trusted By Forward-Thinking Brands</h2>
          </div>
        </div>

        <div className="flex flex-col gap-12 group pb-15">
          {[
            ["AFAQS!", "FOXGLOVE", "MENTOS", "STREAX", "VODAFONE", "IDEA", "AIRTEL"],
            ["TATA PLAY", "ZEE5", "SONY LIV", "DISNEY+", "HOTSTAR", "NETFLIX", "AMAZON"],
            ["RELIANCE", "JIO", "BYJU'S", "UNACADEMY", "UPGRAD", "SCALER", "ZOMATO"],
            ["SWIGGY", "BLINKIT", "ZEPTO", "CRED", "RAZORPAY", "PHONEPE", "PAYTM"],
            ["NYKAA", "MAMAEARTH", "SUGAR", "PLUM", "WOW", "MCaffeine", "EXPOSR"]
          ].map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center gap-8 md:gap-16">
              {row.map((client, clientIdx) => (
                <motion.div
                  key={clientIdx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, color: '#FF4D00' }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: (rowIdx * 0.1) + (clientIdx * 0.05)
                  }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-black tracking-tighter text-white whitespace-nowrap cursor-default opacity-30 group-hover:opacity-10 hover:!opacity-100 hover:!text-brand-orange transition-all duration-300"
                >
                  {client}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* FAQ */}
      <AeoFaqs
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about eXposr and our AI-powered marketing approach."
        faqs={homeFaqs}
      />
    </div>
  );
}
