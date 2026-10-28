"use client";

import React from "react";
import { 
  Smartphone, 
  MessageSquare, 
  Database, 
  CheckCircle2, 
  Sparkles,
  Send,
  User,
  Zap,
  BarChart3
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decorative Elements (Curved Vector Arc & Ambient Sky Glows) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Sky Ambient Radial Glows */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#BAE6FD]/25 via-[#E0F2FE]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-[#BAE6FD]/30 via-[#E0F2FE]/20 to-transparent rounded-full blur-3xl" />

        {/* Minimal Abstract Curved Line (Matches Reference Image) */}
        <svg 
          className="absolute top-12 left-0 w-full h-[450px] stroke-[#38BDF8]/25 fill-none" 
          viewBox="0 0 1200 450" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M -50 220 C 300 40, 850 40, 1250 260" 
            strokeWidth="1.5" 
            strokeDasharray="6 6"
          />
          <path 
            d="M 50 180 C 450 320, 850 120, 1250 180" 
            strokeWidth="1" 
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* 1. SECTION HEADING (Exact Match to Approved Reference)   */}
      {/* ======================================================== */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
        
        {/* Top Badge */}
        <div className="inline-block">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE]/80 border border-[#BAE6FD] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>DIGITAL CAPABILITIES</span>
          </div>
        </div>

        {/* Main Heading with "Modernize & Grow" Highlight */}
        <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.18]">
          Everything You Need to <br />
          <span className="font-serif italic font-normal text-[#0284C7]">
            Modernize &amp; Grow
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-xl mx-auto font-normal">
          Digital tools built to help ambitious local businesses move forward.
        </p>

      </div>

      {/* ======================================================== */}
      {/* 2. THREE SERVICE CARDS (Exact Layout & Visual Mockups)   */}
      {/* ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        
        {/* ------------------------------------------------------ */}
        {/* CARD 1: High-Speed Mobile Websites                     */}
        {/* ------------------------------------------------------ */}
        <div className="group rounded-3xl p-7 sm:p-8 bg-white border border-[#38BDF8] shadow-[0_15px_35px_-5px_rgba(56,189,248,0.12)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
          
          <div className="space-y-6">
            
            {/* Top Row: Icon Badge & Upper Illustration Area */}
            <div className="relative">
              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD]/80 text-[#0284C7] flex items-center justify-center shadow-xs">
                <Smartphone className="w-6 h-6 text-[#0284C7]" />
              </div>

              {/* Upper Illustration: Modern Mobile Website Mockup */}
              <div className="w-full h-44 relative flex items-center justify-center my-2 select-none pointer-events-none">
                {/* Soft ambient center glow */}
                <div className="absolute w-36 h-36 bg-[#E0F2FE]/70 rounded-full blur-2xl" />

                {/* Floating Left UI Pill */}
                <div className="absolute left-2 top-8 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center gap-1.5 transform -rotate-6 z-10 group-hover:scale-105 transition-transform">
                  <div className="w-6 h-6 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-[#0F172A]">99+ Speed</span>
                </div>

                {/* Center Floating Phone Mockup */}
                <div className="relative z-10 w-28 h-40 bg-white rounded-[22px] border-2 border-slate-200 shadow-xl p-2 flex flex-col justify-between transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  {/* Phone Notch */}
                  <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto" />
                  
                  {/* Mockup Screen Content */}
                  <div className="space-y-1.5 pt-1">
                    {/* Hero Banner Mockup */}
                    <div className="w-full h-14 rounded-lg bg-gradient-to-tr from-[#E0F2FE] to-[#BAE6FD]/40 flex items-center justify-center">
                      <div className="w-6 h-4 rounded bg-white/60" />
                    </div>
                    {/* Placeholder Text Lines */}
                    <div className="w-3/4 h-1.5 bg-slate-200 rounded-full" />
                    <div className="w-1/2 h-1 bg-slate-100 rounded-full" />
                  </div>

                  {/* Mockup Button */}
                  <div className="w-full h-3.5 rounded-full bg-[#0284C7] text-white flex items-center justify-center text-[7px] font-bold">
                    Book Now
                  </div>
                </div>

                {/* Floating Right UI Pill */}
                <div className="absolute right-2 bottom-6 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#BAE6FD] shadow-md transform rotate-6 z-10 group-hover:scale-105 transition-transform">
                  <div className="w-6 h-6 rounded-lg bg-[#0284C7] text-white flex items-center justify-center text-[10px] font-bold">
                    SEO
                  </div>
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                High-Speed Mobile Websites
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Next.js ultra-fast mobile storefronts with 99+ Google PageSpeed, instant lead capture, and Google Maps local SEO.
              </p>
            </div>

          </div>

          {/* Bottom Divider & Feature Checklist */}
          <div className="pt-5 mt-6 border-t border-slate-100 space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Next.js App Router &amp; Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Google Maps Profile Ranking</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Domain &amp; Cloud Hosting Included</span>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------ */}
        {/* CARD 2: 24/7 WhatsApp Chatbots                         */}
        {/* ------------------------------------------------------ */}
        <div className="group rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04)] hover:border-[#38BDF8] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
          
          <div className="space-y-6">
            
            {/* Top Row: Icon Badge & Upper Illustration Area */}
            <div className="relative">
              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD]/80 text-[#0284C7] flex items-center justify-center shadow-xs">
                <MessageSquare className="w-6 h-6 text-[#0284C7]" />
              </div>

              {/* Upper Illustration: WhatsApp Chatbot with Floating Bubbles */}
              <div className="w-full h-44 relative flex items-center justify-center my-2 select-none pointer-events-none">
                {/* Soft ambient center glow */}
                <div className="absolute w-36 h-36 bg-emerald-100/60 rounded-full blur-2xl" />

                {/* Left Floating Customer Message Bubble */}
                <div className="absolute left-1 top-10 p-2.5 rounded-2xl rounded-tl-xs bg-white border border-slate-200 shadow-md max-w-[110px] space-y-1 z-10 transform -rotate-3 group-hover:scale-105 transition-transform">
                  <div className="w-16 h-1.5 bg-slate-200 rounded-full" />
                  <div className="w-10 h-1 bg-slate-100 rounded-full" />
                </div>

                {/* Center WhatsApp Glowing Badge */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-emerald-500/25 ring-4 ring-emerald-100 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 2c-5.508 0-9.986 4.471-9.986 9.974 0 1.764.464 3.486 1.346 5.013l-1.428 5.213 5.342-1.4c1.474.805 3.134 1.229 4.826 1.229 5.508 0 9.985-4.471 9.985-9.975 0-5.503-4.477-9.974-9.985-9.974zm5.794 14.113c-.244.685-1.421 1.312-1.956 1.38-.517.066-1.189.094-1.922-.141-.444-.143-1.018-.332-1.761-.653-3.117-1.353-5.143-4.526-5.3-4.733-.155-.208-1.268-1.688-1.268-3.22 0-1.533.805-2.287 1.09-2.585.285-.298.625-.373.834-.373.208 0 .416.002.599.011.193.009.452-.073.707.539.263.633.9 2.203.978 2.363.078.16.131.348.026.557-.104.208-.157.339-.312.52-.155.18-.328.403-.468.541-.155.155-.317.324-.136.634.181.311.808 1.334 1.733 2.158 1.19 1.06 2.193 1.389 2.504 1.545.311.155.493.13.676-.078.181-.208.777-.905.984-1.216.208-.311.415-.26.696-.155.281.104 1.782.84 2.089.995.307.155.512.234.588.364.076.13.076.753-.168 1.438z"/>
                  </svg>
                </div>

                {/* Right Floating Auto-Reply Bubble */}
                <div className="absolute right-1 bottom-8 p-2.5 rounded-2xl rounded-tr-xs bg-[#E0F2FE] border border-[#BAE6FD] shadow-md max-w-[125px] space-y-1.5 z-10 transform rotate-3 group-hover:scale-105 transition-transform">
                  <div className="w-18 h-1.5 bg-[#0284C7] rounded-full" />
                  <div className="w-12 h-1 bg-[#38BDF8] rounded-full" />
                </div>

                {/* Top Right Send Arrow Pill */}
                <div className="absolute right-3 top-6 w-7 h-7 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-md transform rotate-12 z-10">
                  <Send className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                24/7 WhatsApp Chatbots
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Automate inquiries, send instant product catalogs, book appointments, and dispatch auto-replies directly on WhatsApp.
              </p>
            </div>

          </div>

          {/* Bottom Divider & Feature Checklist */}
          <div className="pt-5 mt-6 border-t border-slate-100 space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Instant Auto-Reply Under 15 Seconds</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Digital Catalog &amp; PDF Delivery</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Zero Server Latency</span>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------ */}
        {/* CARD 3: Custom CRM & ERP Software                      */}
        {/* ------------------------------------------------------ */}
        <div className="group rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 shadow-[0_10px_35px_-5px_rgba(15,23,42,0.04)] hover:border-[#38BDF8] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
          
          <div className="space-y-6">
            
            {/* Top Row: Icon Badge & Upper Illustration Area */}
            <div className="relative">
              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD]/80 text-[#0284C7] flex items-center justify-center shadow-xs">
                <Database className="w-6 h-6 text-[#0284C7]" />
              </div>

              {/* Upper Illustration: CRM Dashboard Mockup with Charts */}
              <div className="w-full h-44 relative flex items-center justify-center my-2 select-none pointer-events-none">
                {/* Soft ambient center glow */}
                <div className="absolute w-36 h-36 bg-[#E0F2FE]/70 rounded-full blur-2xl" />

                {/* Left Floating Staff Avatar Tag */}
                <div className="absolute left-2 top-8 p-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-1.5 transform -rotate-6 z-10 group-hover:scale-105 transition-transform">
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold text-[#0F172A]">Staff Access</span>
                </div>

                {/* Center 3D Dashboard Mockup */}
                <div className="relative z-10 w-44 sm:w-48 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                  {/* Dark Navy Dashboard Bar */}
                  <div className="bg-[#0F172A] px-2.5 py-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Dashboard Content: Trend Chart */}
                  <div className="p-2.5 space-y-2">
                    <div className="flex items-center justify-between text-[8px] font-semibold text-[#64748B]">
                      <span>Live Revenue</span>
                      <span className="text-[#0284C7]">+28.4%</span>
                    </div>

                    {/* SVG Line / Area Graph */}
                    <svg className="w-full h-12" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 0 35 Q 25 15, 50 25 T 100 8 L 100 40 L 0 40 Z" 
                        fill="url(#chartGrad)" 
                      />
                      <path 
                        d="M 0 35 Q 25 15, 50 25 T 100 8" 
                        fill="none" 
                        stroke="#0284C7" 
                        strokeWidth="2" 
                      />
                      <circle cx="50" cy="25" r="2.5" fill="#0284C7" />
                      <circle cx="100" cy="8" r="2.5" fill="#0284C7" />
                    </svg>

                    {/* Metric mini bars */}
                    <div className="grid grid-cols-2 gap-1 pt-0.5">
                      <div className="h-2 rounded bg-slate-100" />
                      <div className="h-2 rounded bg-[#E0F2FE]" />
                    </div>
                  </div>
                </div>

                {/* Right Floating Bar Chart Pill */}
                <div className="absolute right-1 bottom-6 p-2 rounded-xl bg-[#0284C7] text-white shadow-md transform rotate-6 z-10 flex items-center gap-1 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-bold">GST Invoicing</span>
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                Custom CRM &amp; ERP Software
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Bespoke operations software with automated GST billing, live stock tracking, customer records, and staff management.
              </p>
            </div>

          </div>

          {/* Bottom Divider & Feature Checklist */}
          <div className="pt-5 mt-6 border-t border-slate-100 space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Automated WhatsApp GST Invoicing</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Real-Time Inventory &amp; Stock Audit</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Role-Based Staff Access</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
