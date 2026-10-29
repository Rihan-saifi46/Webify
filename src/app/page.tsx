"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare, 
  Smartphone, 
  Database, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Zap, 
  ExternalLink 
} from "lucide-react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for page transition animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth subtle scale down and dimming of Hero as Section 2 slides over it
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.4]);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#7DD3FC]/30 selection:text-[#0F172A] overflow-x-hidden">
      
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR                                            */}
      {/* ======================================================== */}
      <Navbar />

      {/* ======================================================== */}
      {/* STACKED TRANSITION CONTAINER (Hero + Section 2)          */}
      {/* ======================================================== */}
      <div ref={containerRef} className="relative">

        {/* ======================================================== */}
        {/* HERO SECTION (Exactly 100vh Full Viewport Height)        */}
        {/* ======================================================== */}
        <section className="sticky top-0 h-screen min-h-[100dvh] max-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-14 overflow-hidden z-10 bg-[#F8FAFC]">
          
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="w-full h-full flex flex-col justify-between"
          >
            {/* Soft Ambient Hero Background (Original Sky Blue & Slate Theme) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Subtle architectural dot grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />

              {/* Soft ambient sky-blue radial glow top right */}
              <div className="absolute -top-24 right-0 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-gradient-to-bl from-[#BAE6FD]/40 via-[#E0F2FE]/30 to-transparent rounded-full blur-3xl animate-ambient-glow" />

              {/* Gentle secondary light glow bottom left behind brand typography */}
              <div className="absolute bottom-0 left-[-10%] w-[500px] h-[400px] bg-gradient-to-tr from-[#7DD3FC]/20 via-[#38BDF8]/10 to-transparent rounded-full blur-3xl" />

              {/* Minimal vector accent curve (Modern SaaS / Architectural aesthetic) */}
              <svg 
                className="absolute top-1/4 right-0 w-full max-w-4xl h-[420px] stroke-[#38BDF8]/20 fill-none opacity-60" 
                viewBox="0 0 800 400" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M0,200 C300,120 450,280 800,160" 
                  strokeWidth="1.5" 
                  strokeDasharray="6 6"
                />
                <path 
                  d="M0,240 C320,160 480,320 800,200" 
                  strokeWidth="1" 
                  strokeOpacity="0.6"
                />
              </svg>
            </div>

            {/* Central Hero Composition (Balanced Baseline Alignment) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-2 sm:py-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                
                {/* ------------------------------------------------------ */}
                {/* LEFT SIDE: Brand Typography ("Webify" - No Dot)        */}
                {/* ------------------------------------------------------ */}
                <div className="lg:col-span-6 flex flex-col justify-end select-none">
                  <div className="relative">
                    {/* Subtle soft backdrop accent */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-sky-100/30 to-transparent rounded-3xl blur-2xl pointer-events-none" />

                    <h1 className="relative font-brand text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[7.5rem] 2xl:text-[8.5rem] font-extrabold tracking-[-0.04em] text-[#0F172A] leading-[0.88] transition-all">
                      Webify
                    </h1>
                  </div>
                </div>

                {/* ------------------------------------------------------ */}
                {/* RIGHT SIDE: Hero Content & Dual CTA Buttons            */}
                {/* ------------------------------------------------------ */}
                <div className="lg:col-span-6 flex flex-col justify-end space-y-4 sm:space-y-5 pb-1">
                  
                  {/* Exact Heading */}
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] xl:text-[2.65rem] font-bold text-[#0F172A] tracking-tight leading-[1.2]">
                      Websites &amp; AI chatbots{" "}
                      <span className="font-serif italic font-normal text-[#0F172A]">
                        for local businesses.
                      </span>
                    </h2>
                  </div>

                  {/* Exact Description */}
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl font-normal">
                    Live in about a week. Built to turn visitors into calls, bookings, and customers, with hosting, updates, and support handled every month.
                  </p>

                  {/* Dual CTA Buttons */}
                  <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    {/* Primary CTA */}
                    <a
                      href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20start%20a%20new%20project%20for%20my%20business."
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs sm:text-sm shadow-md shadow-slate-900/10 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Start a Project</span>
                      <span className="w-5 h-5 rounded-full bg-white/20 text-[#7DD3FC] flex items-center justify-center text-xs group-hover:bg-[#38BDF8] group-hover:text-[#0F172A] group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </a>

                    {/* Secondary CTA */}
                    <a
                      href="#our-work"
                      className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/80 hover:bg-white text-[#0F172A] border border-slate-300/80 hover:border-slate-400 text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>See Our Work</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

            {/* Ambient bottom divider line */}
            <div className="relative z-10 w-full max-w-7xl mx-auto pt-4 border-t border-slate-200/60" />
          </motion.div>

        </section>

        {/* ======================================================== */}
        {/* 2. SECOND SECTION (Slide-Over Card Sheet Transition)     */}
        {/* ======================================================== */}
        <section className="relative z-20 min-h-screen bg-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4rem] border-t border-slate-200/90 shadow-[0_-25px_60px_-15px_rgba(15,23,42,0.08)] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-20 sm:py-32 overflow-hidden">
          
          {/* Subtle Ambient Background inside Section 2 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-gradient-to-tr from-[#E0F2FE]/40 via-[#BAE6FD]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8"
          >
            {/* Small Label at Top */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#64748B] uppercase">
                FOR LOCAL BUSINESSES
              </span>
            </div>

            {/* Large Visually Dominant Heading */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-medium sm:font-semibold text-[#0F172A] tracking-tight leading-[1.14] max-w-5xl mx-auto">
              Lunex builds{" "}
              <span className="font-serif italic font-normal text-[#0F172A]">
                websites and AI chatbots
              </span>{" "}
              for small businesses across all industries, helping them attract customers, streamline operations, and grow their businesses.
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto pt-2 sm:pt-4 font-normal">
              Most small business websites are slow, outdated, or hard to use on a phone, and that costs you customers. Lunex builds fast, clean websites that make it easy for people to call, book, or buy, then keeps them running so you don't have to think about it.
            </p>
          </motion.div>

        </section>

      </div>

      {/* ======================================================== */}
      {/* 3. KEY METRICS STRIP (Crisp Glassmorphism Cards)        */}
      {/* ======================================================== */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-16 sm:my-24">
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_12px_36px_-12px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
            
            {/* Metric 1 */}
            <div className="space-y-1 sm:pr-6">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-brand tracking-tight">22+</p>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold">Live Client Websites</p>
              <p className="text-[11px] text-[#0284C7] font-medium">Deployed & Google Maps Ranked</p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1 pt-4 sm:pt-0 sm:px-6">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0284C7] font-brand tracking-tight">100k+</p>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold">Automated WA Messages</p>
              <p className="text-[11px] text-[#0F172A]/70">Zero Server Latency</p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-1 pt-4 sm:pt-0 sm:px-6">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-brand tracking-tight">5 Days</p>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold">Fast Production Launch</p>
              <p className="text-[11px] text-[#0284C7] font-medium">48-Hour Live Prototype</p>
            </div>

            {/* Metric 4 */}
            <div className="space-y-1 pt-4 sm:pt-0 sm:pl-6">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-brand tracking-tight">100%</p>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-semibold">Code & Domain Ownership</p>
              <p className="text-[11px] text-[#0F172A]/70">No Lock-in Fees</p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CORE SERVICES PREVIEW SECTION (#services)             */}
      {/* ======================================================== */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Digital Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Everything You Need to Modernize & Grow
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Tailored digital solutions engineered specifically for retailers, manufacturers, clinics, and local enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Service Card 1 */}
          <div className="glass-card rounded-3xl p-7 border border-slate-200/90 hover:border-[#38BDF8]/60 transition-all hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">High-Speed Mobile Websites</h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Next.js ultra-fast mobile storefronts with 99+ Google PageSpeed, instant lead capture, and Google Maps local SEO.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-[#0F172A] pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Next.js App Router & Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Google Maps Profile Ranking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Domain & Cloud Hosting Included</span>
              </li>
            </ul>
          </div>

          {/* Service Card 2 */}
          <div className="glass-card rounded-3xl p-7 border border-slate-200/90 hover:border-[#38BDF8]/60 transition-all hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">24/7 WhatsApp Chatbots</h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Automate inquiries, send instant product catalogs, book appointments, and dispatch auto-replies directly on WhatsApp.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-[#0F172A] pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Instant Auto-Reply Under 15 Seconds</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Digital Catalog & PDF Delivery</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Zero Server Latency</span>
              </li>
            </ul>
          </div>

          {/* Service Card 3 */}
          <div className="glass-card rounded-3xl p-7 border border-slate-200/90 hover:border-[#38BDF8]/60 transition-all hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A]">Custom CRM & ERP Software</h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Bespoke operations software with automated GST billing, live stock tracking, customer records, and staff management.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-[#0F172A] pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Automated WhatsApp GST Invoicing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Real-Time Inventory & Stock Audit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Role-Based Staff Access</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. FEATURED CLIENT WORK PREVIEW (#our-work)              */}
      {/* ======================================================== */}
      <section id="our-work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD]">
              <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Real Systems Built & Delivered
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
              Explore live platforms built for jewellery houses, industrial manufacturers, and B2B clients.
            </p>
          </div>
          <a
            href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20view%20more%20portfolio%20case%20studies."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0F172A] transition-colors"
          >
            <span>Request Full 22+ Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Project 1 */}
          <div className="glass-card rounded-3xl p-6 border border-slate-200/90 hover:border-[#38BDF8]/60 transition-all hover:shadow-lg space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7]">
                Retail & Jewellery
              </span>
              <span className="text-xs text-[#64748B]">2024</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Swastik Jewel</h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 line-clamp-2">
                Digital luxury jewellery storefront featuring live bullion rates, bridal lookbooks, and 1-tap WhatsApp inquiries.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-semibold text-[#0284C7]">4.8x Walk-in Inquiries</span>
              <a 
                href="https://www.swastikjewel.in/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 text-[#0F172A] transition-colors"
                title="Visit Live Client Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-card rounded-3xl p-6 border border-slate-200/90 hover:border-[#38BDF8]/60 transition-all hover:shadow-lg space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7]">
                B2B & Enterprise ERP
              </span>
              <span className="text-xs text-[#64748B]">2024</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Swastik Operations CRM</h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 line-clamp-2">
                Full operations suite managing diamond carat pricing, automated WhatsApp GST invoice delivery, and stock audits.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-semibold text-[#0284C7]">100% Automated Invoicing</span>
              <a 
                href="https://crm.swastikjewel.in/admin/dashboard" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 text-[#0F172A] transition-colors"
                title="Visit Live System"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="glass-card rounded-3xl p-6 border border-slate-200/90 hover:border-[#38BDF8]/60 transition-all hover:shadow-lg space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7]">
                Industrial & Metals
              </span>
              <span className="text-xs text-[#64748B]">2024</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">RK Steel Company</h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 line-clamp-2">
                Industrial steel supplies, structural beams, and custom metal fabrication portal built for B2B tenders and quotes.
              </p>
            </div>
            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-semibold text-[#0284C7]">Direct B2B Steel Tenders</span>
              <a 
                href="https://www.rksteelcompany.in/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-slate-100 text-[#0F172A] transition-colors"
                title="Visit Live Client Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. WHATSAPP & CRM FEATURE HIGHLIGHT (#crm-extension)     */}
      {/* ======================================================== */}
      <section id="crm-extension" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div id="whatsapp-chatbot" className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden">
          
          {/* Subtle sky background accent */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-tl from-[#BAE6FD]/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD]">
                <Zap className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Instant Customer Conversion</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Turn Every WhatsApp Inquiry into a Confirmed Paying Customer
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Our custom WhatsApp bot and CRM extension instantly answers client queries, shares pricing and catalogs, and sends automatic follow-ups while you focus on running your business.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                  <p className="text-xs font-bold text-[#0F172A]">Instant 24/7 Response</p>
                  <p className="text-xs text-[#64748B] mt-1">Never lose a prospect who messages after showroom hours.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80">
                  <p className="text-xs font-bold text-[#0F172A]">Automated Follow-ups</p>
                  <p className="text-xs text-[#64748B] mt-1">Nurture pending leads with zero manual typing.</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/918178557544?text=Hello%20Webify%2C%20show%20me%20a%20live%20WhatsApp%20bot%20demo."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
                >
                  <span>Test WhatsApp Demo Bot</span>
                  <ArrowRight className="w-4 h-4 text-[#7DD3FC]" />
                </a>
              </div>
            </div>

            {/* Interactive Bot Mock Preview Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-5 border border-slate-200 shadow-md space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-xs">
                    WA
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A]">Webify Bot Assistant</p>
                    <p className="text-[10px] text-emerald-600 font-medium">● Online 24/7</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-2xl rounded-tl-none bg-slate-100 text-[#0F172A] max-w-[85%]">
                    Namaste! Welcome to Webify. How can we assist your business today?
                  </div>
                  <div className="p-3 rounded-2xl rounded-tr-none bg-[#E0F2FE] text-[#0284C7] font-medium ml-auto max-w-[85%] text-right">
                    I need a modern website and WhatsApp automated booking.
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-slate-100 text-[#0F172A] max-w-[85%] space-y-2">
                    <p>Awesome! We launch high-converting websites in ~5 days with full domain & source code ownership.</p>
                    <p className="text-[11px] font-semibold text-[#0284C7]">Would you like to review our client portfolio?</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. MINIMAL FOOTER                                        */}
      {/* ======================================================== */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-brand font-extrabold text-lg text-[#0F172A]">Webify</span>
            <span className="text-xs text-[#64748B]">© 2026 Webify. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#64748B]">
            <a href="#services" className="hover:text-[#0F172A] transition-colors">Services</a>
            <a href="#our-work" className="hover:text-[#0F172A] transition-colors">Our Work</a>
            <a href="#crm-extension" className="hover:text-[#0F172A] transition-colors">CRM & Extension</a>
            <a href="#whatsapp-chatbot" className="hover:text-[#0F172A] transition-colors">WhatsApp Chatbot</a>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7]">
            <a 
              href="https://wa.me/918178557544" 
              target="_blank" 
              rel="noreferrer"
              className="hover:underline"
            >
              WhatsApp: +91 8178557544
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
