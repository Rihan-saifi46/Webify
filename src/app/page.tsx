"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TechCarousel from "../components/TechCarousel";
import ProjectsShowcase from "../components/ProjectsShowcase";
import ServicesSection from "../components/ServicesSection";
import WhatsAppChatbotSection from "../components/WhatsAppChatbotSection";
import { 
  ArrowUpRight
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#7DD3FC]/30 selection:text-[#0F172A] overflow-x-hidden">
      
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR (Sticky ONLY on Home Page)                 */}
      {/* ======================================================== */}
      <Navbar />

      {/* ======================================================== */}
      {/* 1. HERO SECTION (Replicated from Reference Image 2)      */}
      {/* ======================================================== */}
      <div className="p-3 sm:p-5 lg:p-7 xl:p-8 bg-[#DFE4EA]">
        <section className="relative w-full max-w-[1380px] mx-auto h-auto min-h-[calc(100dvh-1.5rem)] sm:min-h-[calc(100dvh-2.5rem)] lg:h-[calc(100vh-3.5rem)] lg:min-h-[640px] lg:max-h-[880px] rounded-[24px] sm:rounded-[36px] lg:rounded-[42px] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F6FC] border border-white/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden z-10">
          
          {/* ====================================================== */}
          {/* Soft Abstract Fluid Curves & Ambient Lighting          */}
          {/* (Faithfully replicates Image 2's silky flowing waves)  */}
          {/* ====================================================== */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Ambient base glows behind waves */}
            <div className="absolute -top-24 right-[-5%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] bg-gradient-to-bl from-[#38BDF8]/35 via-[#60A5FA]/20 to-transparent rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute top-1/4 right-[5%] w-[520px] h-[520px] bg-gradient-to-tr from-[#BAE6FD]/40 via-[#E0F2FE]/25 to-transparent rounded-full blur-[85px] pointer-events-none" />

            {/* High-Fidelity Flowing Wave Ribbons SVG */}
            <svg
              className="absolute top-0 right-0 w-[88%] sm:w-[78%] lg:w-[68%] h-full pointer-events-none"
              viewBox="0 0 920 800"
              preserveAspectRatio="xMaxYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Primary Deep Sky Ribbon Gradient */}
                <linearGradient id="primaryWaveGrad" x1="150" y1="50" x2="880" y2="720" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                  <stop offset="35%" stopColor="#0284C7" stopOpacity="0.55" />
                  <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.08" />
                </linearGradient>

                {/* Secondary Inner Silk Fold Gradient */}
                <linearGradient id="innerWaveGrad" x1="300" y1="100" x2="820" y2="600" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.80" />
                  <stop offset="45%" stopColor="#BAE6FD" stopOpacity="0.50" />
                  <stop offset="90%" stopColor="#38BDF8" stopOpacity="0.25" />
                </linearGradient>

                {/* Subtle Backdrop Silk Veil */}
                <linearGradient id="softBackdropGrad" x1="100" y1="0" x2="700" y2="700" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.32" />
                  <stop offset="60%" stopColor="#E0F2FE" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                {/* Luminous Edge Stroke Gradient */}
                <linearGradient id="edgeStrokeGrad1" x1="200" y1="100" x2="800" y2="600" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient id="edgeStrokeGrad2" x1="350" y1="150" x2="750" y2="550" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Layer 1: Wide background fluid veil */}
              <path
                d="M 250 -50 C 450 120 700 80 950 180 L 950 -50 Z"
                fill="url(#softBackdropGrad)"
              />

              {/* Layer 2: Major Translucent Ribbon Loop (Orbital arch flowing across upper right) */}
              <path
                d="M 450 -50 C 700 30 920 180 900 420 C 880 620 680 600 520 450 C 400 330 380 140 450 -50 Z"
                fill="url(#primaryWaveGrad)"
                stroke="url(#edgeStrokeGrad1)"
                strokeWidth="1.5"
              />

              {/* Layer 3: Nested Inner Fold Wave (Multi-layered glass translucency) */}
              <path
                d="M 540 40 C 740 90 910 220 860 440 C 820 560 670 540 560 410 C 480 310 470 170 540 40 Z"
                fill="url(#innerWaveGrad)"
                stroke="url(#edgeStrokeGrad2)"
                strokeWidth="1.2"
              />

              {/* Layer 4: Sweeping lower contour arcs */}
              <path
                d="M 220 460 C 420 320 680 340 920 520"
                fill="none"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.75"
              />
              <path
                d="M 280 500 C 460 380 720 400 950 560"
                fill="none"
                stroke="rgba(56, 189, 248, 0.35)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Layer 5: Subtle upper orbital whisper line */}
              <path
                d="M 380 120 C 580 40 820 120 920 280"
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* ====================================================== */}
          {/* Hero Content (Positioned in Lower-Left / Middle)       */}
          {/* Matches Image 2's Exact Placement and Proportions      */}
          {/* ====================================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl lg:max-w-[680px] my-auto py-4 sm:py-6 select-none"
          >
            {/* Left-Aligned Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] font-bold text-[#0F172A] tracking-[-0.03em] leading-[1.12]">
                Websites &amp; AI chatbots{" "}
                <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-[#0284C7]">
                  for local businesses.
                </span>
              </h1>
            </div>

            {/* Description (Directly below heading) */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl font-normal">
              Live in about a week. Built to turn visitors into calls, bookings, and customers, with hosting, updates, and support handled every month.
            </p>

            {/* Dual CTA Buttons (Matching Image 2) */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5">
              {/* Primary CTA: Glowing Rich Blue Pill Button */}
              <a
                href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20start%20a%20new%20project%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_20px_rgba(2,132,199,0.38)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary CTA: Clean White/Translucent Pill Button */}
              <a
                href="#our-work"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 hover:border-slate-300 text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>See Our Work</span>
              </a>
            </div>
          </motion.div>

          {/* ====================================================== */}
          {/* Subtle bottom divider & presence line (Matching Img 2) */}
          {/* ====================================================== */}
          <div className="relative z-10 w-full pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-2 select-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-[#64748B]">Ready for New Projects</span>
              <span className="text-slate-300">•</span>
              <span>Rapid ~5 Days Deployment</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[#94A3B8]">
              <span>Ahmedabad</span>
              <span>•</span>
              <span>Surat</span>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <span>Pan-India</span>
            </div>
          </div>

        </section>
      </div>

        </section>
      </div>

      {/* ======================================================== */}
      {/* 2. ABOUT SECTION (Fits Cleanly Within 100vh + Tech Track) */}
      {/* ======================================================== */}
      <section 
        id="about"
        className="relative z-20 min-h-screen bg-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4rem] border-t border-slate-200/90 shadow-[0_-20px_50px_-10px_rgba(15,23,42,0.06)] flex flex-col justify-between items-center px-4 sm:px-8 lg:px-16 pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden"
      >
        
        {/* Subtle Ambient Background inside About section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-gradient-to-tr from-[#E0F2FE]/40 via-[#BAE6FD]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Main Centered Content */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 lg:space-y-7 my-auto py-8 sm:py-12"
        >
          {/* Top Label */}
          <div className="inline-block">
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[#64748B] uppercase">
              FOR LOCAL BUSINESSES
            </span>
          </div>

          {/* Balanced Responsive Heading (Webify builds...) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[2.95rem] font-medium sm:font-semibold text-[#0F172A] tracking-tight leading-[1.22] sm:leading-[1.25] max-w-4xl mx-auto">
            Webify builds{" "}
            <span className="font-serif italic font-normal text-[#0F172A]">
              websites and AI chatbots
            </span>{" "}
            for small businesses across all industries, helping them attract customers, streamline operations, and grow their businesses.
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto font-normal">
            Most small business websites are slow, outdated, or hard to use on a phone, and that costs you customers. Webify builds fast, clean websites that make it easy for people to call, book, or buy, then keeps them running so you don't have to think about it.
          </p>
        </motion.div>

        {/* ====================================================== */}
        {/* Continuous Technologies Carousel (End of About Page)   */}
        {/* ====================================================== */}
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-6 border-t border-slate-100 flex flex-col items-center gap-3">
          <span className="text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase">
            Technologies &amp; Platforms We Master
          </span>
          <TechCarousel />
        </div>

      </section>

      {/* ======================================================== */}
      {/* 3. PROJECTS SHOWCASE (Directly Below Tech Carousel)      */}
      {/* ======================================================== */}
      <ProjectsShowcase />

      {/* ======================================================== */}
      {/* 4. SERVICES SECTION (Matches Approved Visual Design)     */}
      {/* ======================================================== */}
      <ServicesSection />

      {/* ======================================================== */}
      {/* 5. WHATSAPP CHATBOT SECTION (Matches Approved Reference)  */}
      {/* ======================================================== */}
      <WhatsAppChatbotSection />

      {/* ======================================================== */}
      {/* 6. MINIMAL FOOTER                                        */}
      {/* ======================================================== */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-brand font-extrabold text-lg text-[#0F172A]">Webify</span>
            <span className="text-xs text-[#64748B]">© 2026 Webify. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#64748B]">
            <a href="#services" className="hover:text-[#0F172A] transition-colors">Services</a>
            <a href="#our-work" className="hover:text-[#0F172A] transition-colors">Projects</a>
            <a href="#crm-extension" className="hover:text-[#0F172A] transition-colors">CRM &amp; Extension</a>
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
