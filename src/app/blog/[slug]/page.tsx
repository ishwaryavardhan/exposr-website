"use client";

import { motion } from 'framer-motion';
import { Calendar, Eye, Clock, ArrowLeft, Twitter, Linkedin, Facebook, Link as LinkIcon, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock data for the demo
const blogPosts = {
    "ai-beyond-imagination": {
        title: "Artificial Intelligence Beyond Imaginations",
        category: "Technology",
        author: "Saraj Kohyaeg",
        authorRole: "Technical Director",
        date: "2023/07/15",
        views: "12K Viewers",
        readTime: "8 min read",
        image: "/blog/featured_hero.png",
        content: `
            <p class="text-xl text-black/60 leading-relaxed mb-8">
                Artificial Intelligence (AI) has been advancing beyond <span class="text-black font-bold">what humans have imagined</span> for decades. It's no longer a concept limited to science fiction; it's the invisible engine driving our digital world. From the algorithms that decide what you see on social media to the autonomous systems navigating our streets, AI is everywhere.
            </p>
            
            <h2 class="text-4xl font-black text-black uppercase tracking-tight mb-8 mt-16"> The Dawn of AGI </h2>
            <p class="text-lg text-black/50 leading-relaxed mb-8">
                While narrow AI excels at specific tasks, the race towards Artificial General Intelligence (AGI)—machines that can understand, learn, and apply knowledge across any domain just like humans—is heating up. This transition marks the most significant leap in technological history.
            </p>
            
            <div class="my-16 p-12 bg-black rounded-[3rem] text-white relative overflow-hidden group">
                <div class="relative z-10">
                    <span class="text-brand-orange text-6xl font-serif italic mb-6 block">"</span>
                    <p class="text-3xl font-bold tracking-tight mb-8">
                        The question isn't whether AI will dominate, but how we will evolve alongside it to create a symbiotic future.
                    </p>
                    <span class="text-sm font-black uppercase tracking-widest text-white/40">— Saraj Kohyaeg</span>
                </div>
                <div class="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/20 transition-all duration-700"></div>
            </div>

            <h3 class="text-2xl font-black text-black uppercase tracking-tight mb-6 mt-12"> Transforming the Indian Marketplace </h3>
            <p class="text-lg text-black/50 leading-relaxed mb-8">
                In India, AI is solving uniquely local challenges. Multilingual LLMs are bridging the language gap for millions of users in Tier 2 and Tier 3 cities. Precision agriculture models are helping farmers optimize yields, and fintech solutions are providing credit to the previously unbanked through AI-driven risk assessment.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                <div class="aspect-square bg-neutral-100 rounded-[2.5rem] overflow-hidden relative border border-black/5">
                    <Image src="/blog/article_5.png" alt="VR Future" fill class="object-cover" />
                </div>
                <div class="flex flex-col justify-center">
                    <h4 class="text-xl font-black text-black uppercase mb-4"> Immersive Experiences </h4>
                    <p class="text-black/50 font-medium"> The convergence of AI and XR is creating digital storefronts that feel as real as physical ones, enabling consumers to 'try before they buy' in a virtual space. </p>
                </div>
            </div>

            <h2 class="text-4xl font-black text-black uppercase tracking-tight mb-8 mt-16"> Ethical Considerations </h2>
            <p class="text-lg text-black/50 leading-relaxed mb-8">
                As we move forward, the focus must shift towards ethical AI—ensuring transparency, fairness, and safety. The goal remains to create systems that augment human capability rather than replace it.
            </p>
        `
    }
};

const relatedPosts = [
    {
        id: "vr-and-importance",
        title: "What Is Virtual Reality And Why Is It So Important?",
        author: "Brooklyn Simmons",
        image: "/blog/article_5.png",
        category: "Technology"
    },
    {
        id: "robots-musicians",
        title: "New Intelligent Robots Are Able To Become Musicians",
        author: "Leslie Alexander",
        image: "/blog/article_2.png",
        category: "Programming"
    }
];

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogPosts[slug as keyof typeof blogPosts] || blogPosts["ai-beyond-imagination"];

    // Extract headers for TOC and Add IDs to headers in content
    const toc: { id: string, text: string, level: number }[] = [];
    let processedContent = post.content.replace(/<(h[23])(.*?)>(.*?)<\/h[23]>/g, (match, tag, attrs, text) => {
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s-]+/g, '-');
        toc.push({ id, text, level: parseInt(tag[1]) });
        return `<${tag}${attrs} id="${id}">${text}</${tag}>`;
    });

    // Inject In-Article CTA after the second paragraph
    const pCount = (processedContent.match(/<\/p>/g) || []).length;
    if (pCount >= 2) {
        const parts = processedContent.split('</p>');
        const ctaHtml = `
            <div class="my-16 p-12 rounded-[3.5rem] bg-brand-orange text-black relative overflow-hidden group">
                <div class="relative z-10">
                    <h3 class="text-3xl font-black uppercase tracking-tight mb-4">Ready to scale your digital presence?</h3>
                    <p class="text-black/70 font-bold mb-8 max-w-xl">Our experts use data-driven strategies to explode your brand's growth and conversion rates.</p>
                    <a href="/contact" class="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl">
                        Schedule a Strategy Kall →
                    </a>
                </div>
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            </div>
        `;
        processedContent = parts.slice(0, 2).join('</p>') + '</p>' + ctaHtml + parts.slice(2).join('</p>');
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            {/* Header Content */}
            <header className="pt-20 pb-16 px-6">
                <div className="max-w-[1000px] mx-auto text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-brand-orange transition-colors mb-12">
                        <ArrowLeft size={14} /> Back to Hub
                    </Link>
                    
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="px-4 py-1.5 bg-brand-orange/10 text-brand-orange text-[10px] font-black uppercase tracking-widest rounded-full">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] font-black text-black/20 uppercase tracking-widest">
                            <Clock size={12} /> {post.readTime}
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.95] uppercase mb-12">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 pb-12 border-b border-black/5">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center text-black font-black text-lg">
                                {post.author.split(' ').map(n=>n[0]).join('')}
                            </div>
                            <div className="text-left">
                                <div className="text-sm font-black uppercase tracking-tight text-black">{post.author}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-black/30">{post.authorRole}</div>
                            </div>
                        </div>
                        <div className="h-10 w-[1px] bg-black/5"></div>
                        <div className="flex flex-col text-left">
                            <div className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1">Published On</div>
                            <div className="text-xs font-black text-black">{post.date}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="px-6 mb-20">
                <div className="max-w-[1400px] mx-auto aspect-[21/9] rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl relative">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-6 relative">
                <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">
                    
                    {/* Left Sidebar: Share + TOC */}
                    <aside className="lg:w-64 hidden lg:block sticky top-40 h-fit">
                        <div className="space-y-12">
                            {/* TOC */}
                            <div className="p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-black/5">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 mb-6">Table of Contents</h4>
                                <nav className="space-y-4">
                                    {toc.map((item, i) => (
                                        <a 
                                            key={i} 
                                            href={`#${item.id}`}
                                            className={`block text-xs font-black uppercase tracking-widest hover:text-brand-orange transition-colors ${item.level === 3 ? 'pl-4 text-black/40' : 'text-black/60'}`}
                                        >
                                            {item.text}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Share */}
                            <div className="flex flex-col gap-6 items-center">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30">Share Article</h4>
                                {[
                                    { icon: <Twitter size={20} />, label: "Twitter" },
                                    { icon: <Linkedin size={20} />, label: "LinkedIn" },
                                    { icon: <Facebook size={20} />, label: "Facebook" },
                                    { icon: <LinkIcon size={20} />, label: "Copy" },
                                ].map((s, i) => (
                                    <button key={i} className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-black/5 flex items-center justify-center text-black/20 hover:text-brand-orange hover:bg-white hover:shadow-xl transition-all">
                                        {s.icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <article className="max-w-[800px] flex-grow mx-auto lg:mx-0">
                        <div 
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                            className="blog-content"
                        />

                        {/* Tags */}
                        <div className="pt-20 mt-20 border-t border-black/5 flex flex-wrap gap-4">
                            {["AI", "Innovation", "Digital India", "FutureTech", "Automation"].map(tag => (
                                <span key={tag} className="px-6 py-3 bg-[#F8FAFC] border border-black/5 text-black/40 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-black hover:border-black transition-all cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </article>

                    {/* Sidebar / More Stories (Sticky) */}
                    <aside className="lg:w-[350px] space-y-12 sticky top-40 h-fit">
                        <div className="p-10 rounded-[3rem] bg-[#F8FAFC] border border-black/5">
                            <h3 className="text-xl font-black text-black uppercase tracking-tight mb-8">Related Stories</h3>
                            <div className="space-y-8">
                                {relatedPosts.map(rp => (
                                    <Link key={rp.id} href={`/blog/${rp.id}`} className="group block">
                                        <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-4 border border-black/5">
                                            <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-2">{rp.category}</div>
                                        <h4 className="text-lg font-black text-black leading-tight uppercase group-hover:text-brand-orange transition-colors">
                                            {rp.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mini Newsletter Sidebar */}
                        <div className="p-10 rounded-[3rem] bg-black text-white relative overflow-hidden group">
                            <h3 className="text-xl font-black uppercase mb-4 relative z-10">Stay Updated</h3>
                            <p className="text-white/40 text-sm font-medium mb-8 relative z-10">Get the latest insights directly in your inbox.</p>
                            <form className="space-y-4 relative z-10">
                                <input className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:bg-white/20 transition-all font-sans" placeholder="Email Address" />
                                <button className="w-full bg-brand-orange text-black py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">Join Now</button>
                            </form>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Author Section */}
            <div className="container mx-auto px-6 mt-32">
                <div className="max-w-[800px] mx-auto p-12 md:p-16 rounded-[4rem] bg-[#F8FAFC] border border-black/5 flex flex-col md:flex-row gap-10 items-center md:items-start relative overflow-hidden">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-orange flex items-center justify-center text-black font-black text-4xl shrink-0 relative z-10">
                        {post.author.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div className="flex-grow text-center md:text-left relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-4 block">About the Author</span>
                        <h3 className="text-3xl font-black text-black uppercase tracking-tight mb-4">{post.author}</h3>
                        <p className="text-black/50 font-medium leading-relaxed mb-8">
                            A seasoned technical strategist with over a decade of experience in AI and digital transformation. Saraj leads the innovation lab at eXposr, focusing on bridging the gap between cutting-edge technology and human-centric design.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {[<Twitter size={18} />, <Linkedin size={18} />, <Mail size={18} />].map((icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center text-black/20 hover:text-brand-orange hover:border-brand-orange transition-all">
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
            </div>

            {/* Prominent Newsletter Section */}
            <div className="container mx-auto px-6 mt-20">
                <div className="p-16 md:p-24 rounded-[5rem] bg-black text-white relative overflow-hidden group">
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none uppercase">
                            Subscribe For <br />
                            <span className="text-brand-orange italic font-serif font-light text-6xl">Latest Insights.</span>
                        </h2>
                        <p className="text-white/40 text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
                            Join 5,000+ industry leaders receiving our weekly breakdown of technology, marketing, and the future.
                        </p>
                        <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
                            <div className="flex-grow relative text-left">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                                <input 
                                    className="w-full bg-white/10 border border-white/10 rounded-[1.5rem] pl-16 pr-8 py-5 text-white font-bold outline-none focus:bg-white/20 transition-all placeholder:text-white/20" 
                                    placeholder="yourname@domain.com" 
                                />
                            </div>
                            <button className="bg-brand-orange text-black px-12 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl shadow-brand-orange/20 whitespace-nowrap">Subscribe Now</button>
                        </form>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>
                </div>
            </div>

            <style jsx global>{`
                .blog-content p {
                    margin-bottom: 2rem;
                }
                .blog-content h2 {
                    color: black !important;
                }
            `}</style>
        </div>
    );
}
