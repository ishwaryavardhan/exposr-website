"use client";

import { motion } from 'framer-motion';
import { Search, Twitter, Youtube, Calendar, Eye, ArrowRight, User, Mail, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const categories = ["All", "Manufacturing", "Technology", "Sport", "Design", "Programming", "Engineering"];

const blogPosts = [
    {
        id: 1,
        title: "Soon Sex Robots Will Replace Humans, But Why?",
        excerpt: "The future of human-sex may not be with humans at all. Sex robot technology is advancing at such a rate that experts believe human...",
        author: "Courtney Henry",
        date: "2023/06/23",
        views: "10K Viewers",
        image: "/blog/article_1.png",
        isTrending: true
    },
    {
        id: 2,
        title: "New Intelligent Robots Are Able To Become Musicians",
        excerpt: "Robots equipped with advanced AI tech will be able to generate and perform original music in a live performance customized to real-time...",
        author: "Leslie Alexander",
        date: "2023/06/28",
        views: "6K Viewers",
        image: "/blog/article_2.png",
        isTrending: false
    },
    {
        id: 3,
        title: "Maggie, A Home Robot For Your Children To Play And Entertain",
        excerpt: "In 2021, a company in the Netherlands claimed to have developed a robot that can entertain children and help them spend their free...",
        author: "Robert Foxman",
        date: "2023/07/01",
        views: "15K Viewers",
        image: "/blog/article_3.png",
        isTrending: true
    },
    {
        id: 4,
        title: "How Do Phones With Thermal Cameras Work?",
        excerpt: "All the articles and content of today's site have been updated and you can freely add your new articles and con...",
        author: "Marvin McKinney",
        date: "2023/06/29",
        views: "12K Viewers",
        image: "/blog/article_4.png",
        isTrending: false
    },
    {
        id: 5,
        title: "What Is Virtual Reality And Why Is It So Important?",
        excerpt: "Virtual Reality (VR) is considered an important technology, giving scope for a great leap for adverse fields. Virtual Reality is sometimes...",
        author: "Brooklyn Simmons",
        date: "2023/07/23",
        views: "18K Viewers",
        image: "/blog/article_5.png",
        isTrending: true
    },
    {
        id: 6,
        title: "Fantasy Robots Were Made Of Low-Alloy Materials",
        excerpt: "Low-alloy steels belong to the group of ferrous materials containing alloying elements in less than stainless steels, that is, less than 10%...",
        author: "Ronald Richards",
        date: "2023/07/29",
        views: "15K Viewers",
        image: "/blog/article_6.png",
        isTrending: false
    }
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("Technology");

    return (
        <div className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 px-6">
            <div className="max-w-[1400px] mx-auto">
                {/* Blog Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4">
                            Discover Nice <br /><span className="text-black/20">Articles Here</span>
                        </h1>
                        <p className="text-sm font-bold text-black/40 uppercase tracking-widest leading-relaxed">
                            All the articles and contents of this site have been <span className="text-black">updated today</span> and you can find <br />
                            your <span className="text-black">articles and contents</span> quickly and without any problems.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 bg-white rounded-2xl border border-black/5 text-[#1DA1F2] hover:scale-110 transition-transform">
                            <Twitter fill="currentColor" size={24} />
                        </button>
                        <button className="p-4 bg-white rounded-2xl border border-black/5 text-[#FF0000] hover:scale-110 transition-transform">
                            <Youtube fill="currentColor" size={24} />
                        </button>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-20 bg-white p-6 rounded-[2.5rem] border border-black/5 shadow-sm">
                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search..."
                            className="w-full pl-16 pr-6 py-5 bg-[#F8FAFC] border border-black/5 rounded-2xl text-black font-bold focus:outline-none focus:border-brand-orange transition-colors"
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                                    activeCategory === cat 
                                    ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20' 
                                    : 'bg-[#F8FAFC] text-black/40 hover:text-black'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Post */}
                <div className="mb-24">
                    <h2 className="text-sm font-black text-black/20 uppercase tracking-[0.5em] mb-10 text-center">Featured Article</h2>
                    <Link href="/blog/ai-beyond-imagination">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="relative aspect-[21/9] w-full rounded-[4rem] overflow-hidden group cursor-pointer border border-black/5 shadow-2xl"
                        >
                            <Image 
                                src="/blog/featured_hero.png"
                                alt="AI Beyond Imaginations"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center p-12 text-center">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-full border-2 border-brand-orange overflow-hidden">
                                        <div className="w-full h-full bg-brand-orange flex items-center justify-center text-black font-black">SK</div>
                                    </div>
                                    <span className="text-white font-black uppercase tracking-widest text-xs">Saraj Kohyaeg</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase mb-8 max-w-4xl">
                                    Artificial Intelligence <br />Beyond Imaginations
                                </h3>
                                <p className="text-white/60 text-lg font-medium max-w-2xl mb-10 leading-relaxed">
                                    Artificial Intelligence has been advancing beyond <span className="text-white">what humans have imagined</span> for decades and will dominate humans in the coming years, but the question is... <span className="text-brand-orange">Read More</span>
                                </p>
                                <div className="flex gap-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-brand-orange' : 'bg-white/20'}`}></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[3.5rem] overflow-hidden border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image 
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                />
                                {post.isTrending && (
                                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <span role="img" aria-label="hot">🔥</span>
                                    </div>
                                )}
                                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5">
                                    <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-[10px] font-black">{post.author.split(' ').map(n=>n[0]).join('')}</div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-black">{post.author}</span>
                                </div>
                            </div>
                            
                            <div className="p-10 flex flex-col flex-grow">
                                <h4 className="text-2xl font-black text-black leading-tight uppercase tracking-tight mb-6">
                                    {post.title}
                                </h4>
                                <p className="text-black/40 font-medium text-sm leading-relaxed mb-8 flex-grow">
                                    {post.excerpt}
                                </p>
                                
                                <div className="flex items-center justify-between mb-8 pb-8 border-b border-black/5">
                                    <div className="flex items-center gap-2 text-[10px] font-black text-black/30 uppercase tracking-widest">
                                        <Calendar size={12} className="text-brand-orange" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black text-black/30 uppercase tracking-widest">
                                        <Eye size={12} className="text-brand-orange" />
                                        {post.views}
                                    </div>
                                </div>

                                <Link href={`/blog/${post.id}`}>
                                    <button className="w-full py-5 bg-[#F8FAFC] hover:bg-brand-orange text-black/40 hover:text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all border border-black/5">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 mb-32">
                    <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-black/5 text-black/20 hover:text-black transition-colors rotate-180">
                        <ArrowRight size={20} />
                    </button>
                    {[1, 2, 3, '...', 8, 9].map((p, i) => (
                        <button 
                            key={i}
                            className={`w-12 h-12 flex items-center justify-center rounded-xl text-xs font-black transition-all ${
                                p === 3 
                                ? 'bg-brand-orange text-black border border-brand-orange shadow-lg shadow-brand-orange/20' 
                                : 'bg-white border border-black/5 text-black/40 hover:text-black'
                            }`}
                        >
                            {p}
                        </button>
                    ))}
                    <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-orange text-black shadow-lg shadow-brand-orange/20">
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Site-Wide Newsletter */}
                <div className="p-16 md:p-24 rounded-[5rem] bg-black text-white relative overflow-hidden group">
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none uppercase">
                            Subscribe For <br />
                            <span className="text-brand-orange italic font-serif font-light text-6xl">Weekly Insights.</span>
                        </h2>
                        <p className="text-white/60 text-xl font-medium mb-12 max-w-xl leading-relaxed">
                            By becoming a member of our blog, you have access to articles and content.
                        </p>
                        <form className="flex flex-col md:flex-row gap-6">
                            <div className="flex-grow relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
                                <input 
                                    className="w-full bg-white/10 border border-white/10 rounded-[1.5rem] pl-16 pr-8 py-5 text-white font-bold outline-none focus:bg-white/20 transition-all placeholder:text-white/20" 
                                    placeholder="Mostafaraghapour1991@Gmail.Com" 
                                />
                            </div>
                            <button className="bg-white text-black px-12 py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-2xl shadow-white/10">Subscribe</button>
                        </form>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/4 group-hover:translate-x-1/3 transition-transform duration-1000"></div>
                </div>
            </div>
        </div>
    );
}
