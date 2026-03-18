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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-visible">
      <Hero />

      {/* About Us / Impact Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mb-24">
            <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">
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
      <section className="py-32 px-6 bg-white overflow-hidden">
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
      <section className="py-32 px-6 bg-black overflow-hidden border-y border-white/5">
        <div className="container mx-auto mb-24">
          <div className="text-center">
            <h2 className="text-sm font-black text-white/20 tracking-[0.5em] uppercase mb-16">Trusted By Forward-Thinking Brands</h2>
          </div>
        </div>

        <div className="flex flex-col gap-12 group">
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
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-black text-black text-center mb-24 tracking-tight uppercase">Frequently Asked <span className="text-brand-orange">Questions</span></h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              { q: "How do you handle regional Indian languages?", a: "We have native experts for 8+ major Indian languages to ensure your message resonates locally." },
              { q: "What's the typical timeline for results?", a: "PPC often shows results in weeks, while SEO strategies are built for sustainable 3-6 month growth." },
              { q: "Do you only work with big brands?", a: "We work with visionaries—whether you're a funded startup or an established enterprise scaling further." },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-10 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-black text-black mb-4 tracking-tight uppercase">{faq.q}</h3>
                <p className="text-black/50 text-lg leading-relaxed font-medium">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
