"use client";

import React from "react";
import { 
  Zap, 
  Users, 
  BarChart3, 
  Calendar, 
  ArrowRight, 
  Smile, 
  Paperclip, 
  Send, 
  MoreVertical,
  Check
} from "lucide-react";

export default function WhatsAppChatbotSection() {
  const featureCards = [
    {
      title: "Instant 24/7 Response",
      description: "Never lose a prospect who messages after showroom hours.",
      icon: Zap,
    },
    {
      title: "Automated Follow-ups",
      description: "Nurture pending leads with zero manual typing.",
      icon: Users,
    },
    {
      title: "Share Pricing & Catalogs",
      description: "Instantly send product catalogs, prices, and PDFs on WhatsApp.",
      icon: BarChart3,
    },
    {
      title: "Book Appointments",
      description: "Turn inquiries into confirmed bookings automatically.",
      icon: Calendar,
    },
  ];

  return (
    <section 
      id="whatsapp-chatbot" 
      className="relative lg:h-screen lg:min-h-[620px] lg:max-h-[100dvh] flex flex-col justify-center py-12 sm:py-16 lg:py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Anchor for CRM & Extension compatibility */}
      <div id="crm-extension" className="absolute -top-20" />

      {/* ======================================================== */}
      {/* Background Decorative Flowing Elements                   */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Sky Ambient Radial Glows */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-[#BAE6FD]/30 via-[#E0F2FE]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] w-[550px] h-[550px] bg-gradient-to-bl from-[#38BDF8]/25 via-[#BAE6FD]/35 to-transparent rounded-full blur-[90px]" />
        
        {/* Subtle Decorative Flowing Waves */}
        <svg 
          className="absolute top-6 right-0 w-full max-w-4xl h-[500px] stroke-[#38BDF8]/20 fill-none opacity-45"
          viewBox="0 0 900 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M 100 160 C 350 60, 650 260, 950 120" 
            strokeWidth="1.5" 
            strokeDasharray="6 6"
          />
          <path 
            d="M 50 210 C 380 110, 700 310, 950 180" 
            strokeWidth="1" 
            strokeOpacity="0.45"
          />
        </svg>
      </div>

      {/* ======================================================== */}
      {/* Main Two-Column Layout (Fit Within 100vh on Desktop)      */}
      {/* ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto w-full">
        
        {/* ------------------------------------------------------ */}
        {/* LEFT COLUMN: Header, Description, 2x2 Features, CTA    */}
        {/* ------------------------------------------------------ */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-4 xl:space-y-5">
          
          {/* Top Pill Badge */}
          <div className="inline-block">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD] shadow-xs">
              <Zap className="w-3 h-3 text-[#0284C7] fill-[#0284C7]" />
              <span>INSTANT CUSTOMER CONVERSION</span>
            </div>
          </div>

          {/* Main Dominant Heading */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl lg:text-[1.95rem] xl:text-[2.35rem] 2xl:text-[2.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              Turn Every WhatsApp <br className="hidden sm:inline" />
              Inquiry into a <br />
              <span className="font-serif italic font-normal text-[#0284C7]">
                Confirmed Paying Customer
              </span>
            </h2>
          </div>

          {/* Supporting Description */}
          <p className="text-xs sm:text-[13px] xl:text-sm text-[#64748B] leading-relaxed max-w-lg font-normal">
            Our custom WhatsApp bot and CRM extension instantly answers client queries, shares pricing and catalogs, and sends automatic follow-ups while you focus on running your business.
          </p>

          {/* 4 Compact Feature Cards in a 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-0.5">
            {featureCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div 
                  key={idx}
                  className="group rounded-xl p-3 bg-white border border-slate-200/90 hover:border-[#38BDF8] shadow-xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD]/60 text-[#0284C7] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <IconComp className="w-3.5 h-3.5 text-[#0284C7]" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-[12.5px] font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-[10.5px] sm:text-[11px] text-[#64748B] leading-snug mt-0.5 font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-1">
            <a
              href="https://wa.me/918178557544?text=Hello%20Webify%2C%20show%20me%20a%20live%20WhatsApp%20bot%20demo."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-[13px] font-semibold shadow-md shadow-slate-900/10 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Test WhatsApp Demo Bot</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#7DD3FC] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* ------------------------------------------------------ */}
        {/* RIGHT COLUMN: Realistic Scaled WhatsApp Chatbot Mockup */}
        {/* ------------------------------------------------------ */}
        <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center py-4 lg:py-2">
          
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-gradient-to-br from-[#BAE6FD]/40 via-[#E0F2FE]/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Floating Analytics Mini-Cards Around Mockup (Desktop / Tablet) */}
          
          {/* 1. Floating WhatsApp Badge (Top Left) */}
          <div className="absolute -top-2 left-2 sm:left-4 z-20 hidden sm:flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/90 shadow-md shadow-emerald-500/10">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M12.031 2c-5.508 0-9.986 4.471-9.986 9.974 0 1.764.464 3.486 1.346 5.013l-1.428 5.213 5.342-1.4c1.474.805 3.134 1.229 4.826 1.229 5.508 0 9.985-4.471 9.985-9.975 0-5.503-4.477-9.974-9.985-9.974zm5.794 14.113c-.244.685-1.421 1.312-1.956 1.38-.517.066-1.189.094-1.922-.141-.444-.143-1.018-.332-1.761-.653-3.117-1.353-5.143-4.526-5.3-4.733-.155-.208-1.268-1.688-1.268-3.22 0-1.533.805-2.287 1.09-2.585.285-.298.625-.373.834-.373.208 0 .416.002.599.011.193.009.452-.073.707.539.263.633.9 2.203.978 2.363.078.16.131.348.026.557-.104.208-.157.339-.312.52-.155.18-.328.403-.468.541-.155.155-.317.324-.136.634.181.311.808 1.334 1.733 2.158 1.19 1.06 2.193 1.389 2.504 1.545.311.155.493.13.676-.078.181-.208.777-.905.984-1.216.208-.311.415-.26.696-.155.281.104 1.782.84 2.089.995.307.155.512.234.588.364.076.13.076.753-.168 1.438z"/>
            </svg>
          </div>

          {/* 2. Floating Leads Card (Mid Left) */}
          <div className="absolute top-1/4 -left-3 sm:-left-6 z-20 hidden sm:flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/5 min-w-[72px] sm:min-w-[80px] select-none hover:scale-105 transition-transform">
            <BarChart3 className="w-4 h-4 text-[#0284C7]" />
            <span className="text-[9.5px] font-semibold text-[#64748B] mt-0.5">Leads</span>
            <span className="text-xs font-extrabold text-emerald-600 tracking-tight">+240%</span>
          </div>

          {/* 3. Floating Bookings Card (Top Right) */}
          <div className="absolute top-6 -right-2 sm:-right-5 z-20 hidden sm:flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/5 min-w-[72px] sm:min-w-[80px] select-none hover:scale-105 transition-transform">
            <Calendar className="w-4 h-4 text-[#0284C7]" />
            <span className="text-[9.5px] font-semibold text-[#64748B] mt-0.5">Bookings</span>
            <span className="text-xs font-extrabold text-emerald-600 tracking-tight">+180%</span>
          </div>

          {/* 4. Floating Customers Card (Mid-Bottom Right) */}
          <div className="absolute bottom-12 -right-2 sm:-right-5 z-20 hidden sm:flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/5 min-w-[72px] sm:min-w-[80px] select-none hover:scale-105 transition-transform">
            <Users className="w-4 h-4 text-[#0284C7]" />
            <span className="text-[9.5px] font-semibold text-[#64748B] mt-0.5">Customers</span>
            <span className="text-xs font-extrabold text-emerald-600 tracking-tight">+3x</span>
          </div>

          {/* ==================================================== */}
          {/* Main Scaled WhatsApp Chatbot Mockup Window           */}
          {/* ==================================================== */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[365px] xl:max-w-[385px] rounded-2xl sm:rounded-[24px] bg-white border border-slate-200/90 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.1)] overflow-hidden flex flex-col justify-between">
            
            {/* Mockup Header */}
            <div className="px-4 py-2.5 sm:py-3 border-b border-slate-100 flex items-center justify-between bg-white select-none">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                  WA
                </div>
                <div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] tracking-tight">
                    Webify Bot Assistant
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] text-emerald-600 font-medium">Online 24/7</span>
                  </div>
                </div>
              </div>

              <div className="text-slate-400 hover:text-slate-600 transition-colors p-0.5">
                <MoreVertical className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Mockup Chat Body */}
            <div className="p-3 sm:p-3.5 space-y-2.5 bg-[#FAFBFD] min-h-[250px] sm:min-h-[270px] flex flex-col justify-start">
              
              {/* Message 1: Bot Welcome */}
              <div className="flex flex-col items-start max-w-[88%]">
                <div className="p-2.5 sm:p-3 rounded-xl rounded-tl-xs bg-white border border-slate-200/80 shadow-xs text-[11px] sm:text-xs text-[#0F172A] leading-relaxed">
                  Namaste! Welcome to Webify. How can we assist your business today?
                </div>
                <span className="text-[9px] text-slate-400 mt-0.5 pl-1">10:24 AM</span>
              </div>

              {/* Message 2: User Query */}
              <div className="flex flex-col items-end max-w-[85%] ml-auto">
                <div className="p-2.5 sm:p-3 rounded-xl rounded-tr-xs bg-[#0284C7] text-white text-[11px] sm:text-xs leading-relaxed shadow-xs">
                  I need a modern website and WhatsApp automated booking.
                </div>
                <div className="flex items-center gap-1 text-[9px] text-slate-400 mt-0.5 pr-1">
                  <span>10:25 AM</span>
                  <div className="flex text-[#0284C7]">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    <Check className="w-2.5 h-2.5 -ml-1.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Message 3: Bot Response & Prompt */}
              <div className="flex flex-col items-start max-w-[92%] space-y-0.5">
                <div className="p-2.5 sm:p-3 rounded-xl rounded-tl-xs bg-white border border-slate-200/80 shadow-xs text-[11px] sm:text-xs text-[#0F172A] leading-relaxed space-y-1">
                  <p>
                    Awesome! We launch high-converting websites in ~5 days with full domain &amp; source code ownership.
                  </p>
                  <p className="font-semibold text-[#0284C7]">
                    Would you like to review our client portfolio?
                  </p>
                </div>
                <span className="text-[9px] text-slate-400 pl-1">10:25 AM</span>
              </div>

              {/* Quick Action Interactive Pill Buttons */}
              <div className="pt-0.5 flex flex-wrap items-center gap-1.5">
                <a
                  href="#our-work"
                  className="px-2.5 py-1 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-[10px] font-semibold shadow-xs hover:shadow-sm transition-all"
                >
                  View Portfolio
                </a>
                <a
                  href="https://wa.me/918178557544?text=Hello%20Webify%2C%20what%20are%20your%20pricing%20packages%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 text-[10px] font-semibold shadow-xs hover:shadow-sm transition-all"
                >
                  Get Pricing
                </a>
                <a
                  href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20book%20a%20call."
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 text-[10px] font-semibold shadow-xs hover:shadow-sm transition-all"
                >
                  Book a Call
                </a>
              </div>

            </div>

            {/* Mockup Chat Message Input Bar */}
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-2 select-none">
              <Smile className="w-4 h-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer shrink-0" />
              <div className="flex-1 text-[11px] text-slate-400 px-2 py-0.5 bg-slate-50 rounded-lg border border-slate-200/60 flex items-center justify-between">
                <span>Type a message...</span>
                <Paperclip className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer shrink-0" />
              </div>
              <button 
                type="button"
                aria-label="Send message"
                className="w-6 h-6 rounded-full bg-[#0F172A] hover:bg-[#0284C7] text-white flex items-center justify-center transition-colors shadow-xs shrink-0"
              >
                <Send className="w-3 h-3 ml-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
