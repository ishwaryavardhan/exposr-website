"use client";

import { motion } from 'framer-motion';
import { Target, Search, Video, BarChart3, ArrowRight } from 'lucide-react';
import BlurText from '@/components/reactbits/BlurText';
import Link from 'next/link';
import ServiceStages from '@/components/sections/ServiceStages';

const services = [
    {
        id: 'ppc',
        title: 'Performance Marketing',
        icon: <Target className="text-white" size={32} />,
        desc: 'Hyper-targeted ad campaigns that drive ROI for Indian direct-to-consumer brands.',
        features: ['Google Ads', 'Meta Ads', 'Native Advertising', 'Conversion Tracking']
    },
    {
        id: 'seo',
        title: 'SEO & Content Growth',
        icon: <Search className="text-white" size={32} />,
        desc: 'Winning the Google search wars across all Indian languages and regions.',
        features: ['Technical SEO', 'Local SEO India', 'Multilingual Content', 'Link Building']
    },
    {
        id: 'production',
        title: 'Production House',
        icon: <Video className="text-white" size={32} />,
        desc: 'Global-standard media production localized for diverse Indian audiences.',
        features: ['TVC Production', 'Digital Ads', 'Brand Films', 'Social Content']
    },
    {
        id: 'analytics',
        title: 'Data & Analytics',
        icon: <BarChart3 className="text-white" size={32} />,
        desc: 'Turning raw data into actionable insights for the Indian consumer market.',
        features: ['Market Research', 'Competitor Analysis', 'Attribution Modeling', 'Data Visualization']
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-24 pb-32 bg-black overflow-visible">
            <ServiceStages />

            <div className="container mx-auto px-6 mt-32">
                <div className="max-w-4xl mb-24">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9] uppercase">
                        Core <span className="text-white/20 block italic font-serif font-light lowercase">Capabilities.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, idx) => (
                        <Link href={`/services/${service.id}`} key={service.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-12 rounded-[4rem] bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white/10 transition-all duration-500 flex flex-col items-start gap-8 h-full"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight uppercase text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/40 group-hover:text-white/60 text-lg font-medium leading-relaxed mb-8">
                                        {service.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {service.features.map(f => (
                                            <span key={f} className="text-[10px] font-black uppercase tracking-widest border border-white/20 text-white/40 px-4 py-2 rounded-full group-hover:border-white/40 group-hover:text-white transition-colors">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto pt-8 flex items-center gap-3 font-black text-xs uppercase tracking-[0.2em] text-white/40 group-hover:text-white group-hover:gap-6 transition-all">
                                    Exploration <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
