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
      <header className="relative z-30 w-full flex items-center justify-between py-0 select-none">
        
        {/* ========================================================= */}
        {/* LEFT: Unified Frosted Capsule Pill (Matching Reference)    */}
        {/* [ Webify  |  Services  Our Work  CRM & Extension ... ]     */}
        {/* ========================================================= */}
        <div className="flex items-center">
          <div className="flex items-center bg-white/85 hover:bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] rounded-full px-4 sm:px-5 py-2 sm:py-2.5 transition-all">
            {/* Brand Logo & Name */}
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 group mr-1"
            >
              <span className="font-brand font-extrabold text-sm sm:text-base tracking-tight text-[#0F172A] group-hover:text-[#0284C7] transition-colors">
                Webify
              </span>
            </Link>

            {/* Subtle Vertical Divider */}
            <div className="hidden md:block h-3.5 w-px bg-slate-300/80 mx-3 sm:mx-4" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-[#64748B] hover:text-[#0F172A] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Trigger Icon inside capsule */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-2 p-1 text-[#64748B] hover:text-[#0F172A] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT: Glowing Blue Pill CTA (Matching Reference Button)   */}
        {/* ========================================================= */}
        <div className="flex items-center">
          <a
            href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20start%20a%20new%20project%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0284C7] via-[#0ea5e9] to-[#2563EB] hover:from-[#0369A1] hover:to-[#1D4ED8] text-white text-xs sm:text-sm font-semibold shadow-[0_6px_22px_rgba(2,132,199,0.38)] hover:shadow-[0_8px_28px_rgba(2,132,199,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </header>

      {/* ========================================================= */}
      {/* MOBILE DRAWER OVERLAY                                     */}
      {/* ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start pt-20 px-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-brand font-bold text-base text-[#0F172A]">Webify Menu</span>
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
