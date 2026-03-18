Agency Website Implementation Plan (Next.js Version)
Create a premium digital marketing agency website for eXposr using Next.js for the frontend and Node.js for the backend, with advanced transitions and animations.

User Review Required
IMPORTANT

Framework: Next.js (App Router).
Animations: Framer Motion for advanced page and component transitions.
Backend: Node.js API routes for lead generation and dynamic resources.
Proposed Changes
Tech Stack & Initialization
[NEW] 

Next.js Project
: Initialize a new Next.js project in the root directory.
Dependencies: React, Next.js, Framer Motion, Lucide React (icons), Phosphor Icons (retaining brand style).
Core Components (React/Next.js)
Navigation: Animated "Pill" navbar using Framer Motion. Sticky behavior with background blur and layout transitions.
Split Hero: Responsive 2-column layout with staggered text entrance and floating element animations.
Advanced Transitions: Implement AnimatePresence for smooth page-to-page transitions.
Shared Sections
WhyUs, ServicesList, Outcomes, Testimonials, FAQ, LeadForm. All built as reusable React components.
Pages (App Router)
app/page.tsx: Home.
app/services/[id]/page.tsx: Dynamic service landing pages (PPC, SEO, Media).
app/portfolio/page.tsx: Animated portfolio grid.
app/case-studies/page.tsx: Case studies showcase.
app/resources/page.tsx: Resource hub. under this there should blogs( Articles, Guides, Whitepapers, Videos, Shorts, Podcasts)  
app/contact/page.tsx: Interactive contact form with validation.
Backend (Node.js)
app/api/leads/route.ts: Node.js handler for form submissions.
Verification Plan
Automated Tests
npm run build to verify production readiness.
Manual Verification
Verify Framer Motion transitions between all pages.
Confirm lead form submissions reach the backend API. ( the lead form shoudl have )
Check "Pill" nav transition on scroll.