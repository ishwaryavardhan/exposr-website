import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ConditionalCTA from "@/components/layout/ConditionalCTA";
import Footer from "@/components/sections/Footer";
import LeadPopup from "@/components/ui/LeadPopup";
import VideoMessenger from "@/components/ui/VideoMessenger";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eXposr | Digital Marketing Agency India",
  description: "Accelerating Indian brands with high-conversion digital marketing, SEO, and performance marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.xposr.com/#organization",
                "name": "eXposr",
                "url": "https://www.xposr.com/",
                "logo": "https://www.xposr.com/logo.png",
                "description": "Accelerating Indian brands with high-conversion digital marketing, SEO, and performance marketing strategies.",
                "address": { "@type": "PostalAddress", "addressCountry": "IN" },
                "sameAs": [
                    "https://twitter.com/exposr",
                    "https://www.linkedin.com/company/exposr",
                    "https://www.youtube.com/exposr"
                ]
            }).replace(/</g, '\\u003c') }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased selection:bg-black selection:text-white`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <ConditionalCTA />
        <Footer />
        <LeadPopup />
        <VideoMessenger />
      </body>
    </html>
  );
}
