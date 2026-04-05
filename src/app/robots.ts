import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.xposr.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/portal/',      // Restricted sensitive area
        '/api/',         // Internal API routes
        '/_next/',       // Next.js build assets
        '/private/',     // Other private paths
        '/admin/'        // Assuming admin exists and should be restricted
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
