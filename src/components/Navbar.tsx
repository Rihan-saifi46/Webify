"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "CRM & Extension", href: "#crm-extension" },
    { name: "WhatsApp Chatbot", href: "#whatsapp-chatbot" },
  ];

  return (
    <>
      <header className="relative z-30 w-full flex items-center justify-between py-1 select-none">
        
        {/* ========================================================= */}
        {/* LEFT: Webify Logo / Brand Anchor                          */}
        {/* ========================================================= */}
        <div className="flex items-center">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
          >
            {/* Minimalist Modern Logo Icon */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-slate-700/30 flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:border-[#38BDF8]/60 transition-colors">
              <span className="font-extrabold text-xs sm:text-sm tracking-tighter text-[#38BDF8]">
                W
              </span>
            </div>
            
            <span className="font-brand font-extrabold text-xl sm:text-2xl tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
              Webify
            </span>
          </Link>
        </div>

        {/* ========================================================= */}
        {/* CENTER: One single rounded white pill-shaped container    */}
        {/* ========================================================= */}
        <div className="hidden lg:flex items-center justify-center">
          <nav className="px-6 py-2 rounded-full flex items-center gap-7 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* ========================================================= */}
        {/* RIGHT: Separate blue gradient "Start a Project" button    */}
        {/* ========================================================= */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20start%20a%20new%20project%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white text-xs sm:text-sm font-semibold shadow-[0_6px_20px_rgba(2,132,199,0.38)] hover:shadow-[0_8px_25px_rgba(2,132,199,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-white/90 border border-slate-200/80 text-[#0F172A] hover:text-[#0284C7] shadow-xs transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </header>

      {/* ========================================================= */}
      {/* MOBILE / TABLET DRAWER OVERLAY                            */}
      {/* ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-start pt-20 px-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-semibold text-[#0F172A] hover:bg-[#F1F5F9] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <a
                href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20start%20a%20new%20project%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white text-sm font-semibold shadow-[0_6px_20px_rgba(2,132,199,0.35)] active:scale-95 transition-all"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
