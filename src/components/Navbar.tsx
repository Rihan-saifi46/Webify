"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Disappear when scrolling down past the 100vh Home Page
      const heroThreshold = window.innerHeight * 0.72;
      setIsPastHero(window.scrollY > heroThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only active on the Home Page root ("/")
  const isHomePage = pathname === "/";

  // If not on Home Page, or if scrolled past the 100vh Hero, hide navbar completely
  const shouldHide = !isHomePage || isPastHero;

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#our-work" },
    { name: "CRM & Extension", href: "#crm-extension" },
    { name: "WhatsApp Chatbot", href: "#whatsapp-chatbot" },
  ];

  return (
    <>
      <header 
        className={`fixed top-5 sm:top-7 lg:top-8 left-0 right-0 z-50 flex justify-center px-5 sm:px-9 lg:px-12 pointer-events-none transition-all duration-300 ease-out ${
          shouldHide ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="w-full max-w-[1380px] mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* ========================================================= */}
          {/* LEFT: Webify Logo / Brand Anchor (Visible on Home Page)   */}
          {/* ========================================================= */}
          <div className="flex-1 flex items-center justify-start">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
            >
              {/* Minimalist Modern Logo Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-slate-700/30 flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:border-[#38BDF8]/60 transition-colors">
                <span className="font-extrabold text-sm sm:text-base tracking-tighter text-[#38BDF8]">
                  W
                </span>
              </div>
              
              <div className="flex items-baseline">
                <span className="font-brand font-extrabold text-xl sm:text-2xl tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                  Webify
                </span>
              </div>
            </Link>
          </div>

          {/* ========================================================= */}
          {/* CENTER: Rounded Pill Glassmorphism Navigation Container   */}
          {/* (Not globally sticky, only visible on Home Page)          */}
          {/* ========================================================= */}
          <div className="hidden lg:flex items-center justify-center">
            <nav className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-1 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] border border-slate-200/90 hover:border-slate-300 transition-all bg-white/75 backdrop-blur-xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/80 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: "Start a Project" CTA + Mobile Toggle              */}
          {/* ========================================================= */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <a
              href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20start%20a%20new%20project%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white text-xs sm:text-sm font-semibold shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(2,132,199,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-full glass-pill text-[#0F172A] hover:text-[#0284C7] hover:border-[#38BDF8]/40 transition-colors shadow-sm"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE / TABLET DRAWER OVERLAY                            */}
      {/* ========================================================= */}
      {isOpen && !shouldHide && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-start pt-24 px-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Navigation</span>
              <span className="text-xs text-[#0284C7] font-medium">Webify Studio</span>
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
