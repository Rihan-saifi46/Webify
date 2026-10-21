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
      {/* 1. HERO CANVAS SECTION (Faithfully Replicated from Img 2) */}
      {/* ======================================================== */}
      <div className="p-3 sm:p-5 lg:p-6 xl:p-8 bg-[#DFE5EC]">
        <section className="relative w-full max-w-[1440px] mx-auto h-[calc(100vh-1.5rem)] sm:h-[calc(100vh-2.5rem)] lg:h-[calc(100vh-3rem)] min-h-[620px] max-h-[880px] rounded-[24px] sm:rounded-[34px] lg:rounded-[40px] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFD] to-[#EDF5FC] border border-white/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] flex flex-col justify-between p-5 sm:p-8 lg:p-10 xl:p-12 overflow-hidden z-10">
          
          {/* ====================================================== */}
          {/* Navbar (Contained Inside Canvas Card at Top)           */}
          {/* ====================================================== */}
          <Navbar />

          {/* ====================================================== */}
          {/* Soft, Subtle, Low-Contrast Abstract Silk Waves         */}
          {/* (Blends naturally into white, NO harsh/oversized blues)*/}
          {/* ====================================================== */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Ultra-soft ambient watercolor radial glow top right */}
            <div className="absolute -top-16 -right-16 w-[550px] h-[550px] bg-gradient-to-bl from-[#BAE6FD]/25 via-[#E0F2FE]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

            {/* Delicate Glass-like Flowing Waves SVG */}
            <svg
              className="absolute top-0 right-0 w-[80%] sm:w-[70%] lg:w-[60%] h-full pointer-events-none"
              viewBox="0 0 850 750"
              preserveAspectRatio="xMaxYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Soft Silk Primary Gradient (Pastel sky blue with smooth fade) */}
                <linearGradient id="softSilkGrad1" x1="100" y1="20" x2="800" y2="700" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
                  <stop offset="40%" stopColor="#7DD3FC" stopOpacity="0.30" />
                  <stop offset="80%" stopColor="#E0F2FE" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                </linearGradient>

                {/* Soft Silk Inner Fold Gradient */}
                <linearGradient id="softSilkGrad2" x1="250" y1="80" x2="750" y2="600" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                </linearGradient>

                {/* Delicate Illuminated Edge Contour */}
                <linearGradient id="softEdgeContour" x1="150" y1="80" x2="750" y2="550" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#7DD3FC" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Layer 1: Background fluid translucent veil */}
              <path
                d="M 220 -30 C 400 100 650 70 880 150 L 880 -30 Z"
                fill="url(#softSilkGrad2)"
                opacity="0.6"
              />

              {/* Layer 2: Main Graceful Silk Wave Loop (Upper Right) */}
              <path
                d="M 380 -40 C 620 40 850 170 830 390 C 810 570 630 550 490 410 C 390 310 350 130 380 -40 Z"
                fill="url(#softSilkGrad1)"
                stroke="url(#softEdgeContour)"
                strokeWidth="1.25"
              />

              {/* Layer 3: Inner Translucent Fold */}
              <path
                d="M 460 30 C 650 80 810 200 760 390 C 720 490 590 470 510 370 C 440 280 430 150 460 30 Z"
                fill="url(#softSilkGrad2)"
                stroke="rgba(255, 255, 255, 0.75)"
                strokeWidth="1"
              />

              {/* Layer 4: Sweeping lower contour wave line */}
              <path
                d="M 200 420 C 390 290 640 310 850 460"
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="1.5"
              />
              <path
                d="M 260 460 C 430 350 680 370 880 500"
                fill="none"
                stroke="rgba(186, 230, 253, 0.35)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* ====================================================== */}
          {/* Hero Content (Positioned in Lower-Left / Middle)       */}
          {/* ====================================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl lg:max-w-[660px] my-auto py-2 sm:py-4 select-none"
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
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg font-normal">
              Live in about a week. Built to turn visitors into calls, bookings, and customers, with hosting, updates, and support handled every month.
            </p>

            {/* Dual CTA Buttons (Matching Reference Image 2) */}
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
