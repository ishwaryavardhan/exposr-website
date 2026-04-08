import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.xposr.com';
    
    // Core pages
    const pages = [
        '/',
        '/services',
        '/solutions',
        '/portfolio',
        '/case-studies',
        '/blog',
        '/contact',
        '/careers',
        '/news',
        '/seo-optimization',
        '/performance-marketing',
        '/ppc-management',
        '/social-media-management',
        '/media-production',
        '/influencer-marketing-for-brands',
        '/clients',
        '/work',
        '/digital-marketing-agency-chennai',
        '/digital-marketing-agency-bangalore',
        '/chennai/digital-marketing-agency',
        '/bangalore/digital-marketing-agency',
        '/chennai/media-production-agency',
        '/bangalore/media-production-agency',
        '/us/growth-consulting-firm'
    ];

    // Blog Posts
    const posts = [
        { id: '1', title: 'Soon Sex Robots Will Replace Humans, But Why?', image: '/blog/article_1.png' },
        { id: '2', title: 'New Intelligent Robots Are Able To Become Musicians', image: '/blog/article_2.png' },
        { id: '3', title: 'Maggie, A Home Robot For Your Children To Play And Entertain', image: '/blog/article_3.png' },
        { id: '4', title: 'How Do Phones With Thermal Cameras Work?', image: '/blog/article_4.png' },
        { id: '5', title: 'What Is Virtual Reality And Why Is It So Important?', image: '/blog/article_5.png' },
        { id: '6', title: 'Fantasy Robots Were Made Of Low-Alloy Materials', image: '/blog/article_6.png' }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    
    <!-- ======================= -->
    <!-- PAGES                   -->
    <!-- ======================= -->
    ${pages.map(page => `
    <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>`).join('')}

    <!-- ======================= -->
    <!-- POSTS & IMAGES          -->
    <!-- ======================= -->
    ${posts.map(post => `
    <url>
        <loc>${baseUrl}/blog/${post.id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
        <image:image>
            <image:loc>${baseUrl}${post.image}</image:loc>
            <image:title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</image:title>
        </image:image>
    </url>`).join('')}

    <!-- ======================= -->
    <!-- VIDEOS                  -->
    <!-- ======================= -->
    <url>
        <loc>${baseUrl}/media-production</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
        <video:video>
            <video:thumbnail_loc>${baseUrl}/images/video-thumbnail-placeholder.jpg</video:thumbnail_loc>
            <video:title>eXposr Media Production</video:title>
            <video:description>High-quality media and video production services</video:description>
            <!-- Assuming a default video URL for demonstration. Can be replaced with dynamic URLs -->
            <video:content_loc>${baseUrl}/videos/showcase.mp4</video:content_loc>
        </video:video>
    </url>

</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        },
    });
}
