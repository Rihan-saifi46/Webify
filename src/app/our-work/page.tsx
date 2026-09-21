"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CurveFlowCarousel from "../../components/CurveFlowCarousel";
import { SHOWCASE_PROJECTS } from "../../data/projects-showcase";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export default function OurWorkPage() {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#7DD3FC]/30 selection:text-[#0F172A] overflow-x-hidden flex flex-col justify-between">
      
      {/* Top Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#BAE6FD]/25 via-[#E0F2FE]/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#E0F2FE]/20 to-transparent rounded-full blur-[100px]" />
      </div>

      <div>
        {/* ======================================================== */}
        {/* Top Header with Shared Navbar                            */}
        {/* ======================================================== */}
        <div className="pt-3 sm:pt-4 lg:pt-5 px-5 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <Navbar />
        </div>

        {/* ======================================================== */}
        {/* Dedicated Page Hero Intro                                */}
        {/* ======================================================== */}
        <section className="relative z-10 pt-12 sm:pt-16 lg:pt-20 pb-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-4">
          
          {/* Back to Home Link */}
          <div className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#0284C7] transition-colors py-1 px-3 rounded-full bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Top Pill Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#E0F2FE] border border-[#BAE6FD] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              <span>SELECTED WORKS &amp; CASE STUDIES</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
            Crafting Digital Platforms <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#0284C7]">
              Engineered for Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed font-normal">
            A curated showcase of high-speed websites, intelligent WhatsApp bots, and bespoke software systems built for ambitious local and global businesses.
          </p>

        </section>

        {/* ======================================================== */}
        {/* Centerpiece: Interactive Curve Flow Carousel            */}
        {/* ======================================================== */}
        <section className="relative z-10 w-full mt-4 pb-12 sm:pb-16 overflow-hidden">
          <CurveFlowCarousel />
        </section>

        {/* ======================================================== */}
        {/* Structured Projects Grid (All 6 Client Projects)        */}
        {/* ======================================================== */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0284C7]">
                Project Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1">
                All Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
              Each platform is custom engineered with modern web stacks, 99+ PageSpeed scores, and zero server latency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOWCASE_PROJECTS.map((project, idx) => {
              const projectNumber = String(idx + 1).padStart(2, "0");
              return (
                <div
                  key={project.id}
                  className="group rounded-2xl sm:rounded-3xl p-5 bg-white border border-slate-200/90 hover:border-[#38BDF8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white/95 text-[#0F172A] shadow-xs">
                        {projectNumber}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0284C7]">
                        {project.category}
                      </span>
                      <h3 className="text-base font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors mt-0.5">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-[#64748B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link || "#"}
                      className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0284C7] group-hover:text-white text-[#0F172A] flex items-center justify-center transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================================================== */}
        {/* Project Call to Action Banner                            */}
        {/* ======================================================== */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 sm:p-12 lg:p-16 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient background glow inside banner */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase">
                READY TO ELEVATE YOUR BUSINESS?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Let&apos;s Build Your Next High-Performance Platform
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Websites launched in ~5 days with 100% domain and code ownership, plus automated WhatsApp customer conversion bots.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/918178557544?text=Hello%20Webify%2C%20I%20would%20like%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start a Project on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Back to Homepage</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* ======================================================== */}
      {/* Minimal Site Footer                                      */}
      {/* ======================================================== */}
      <footer className="relative z-10 py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-brand font-extrabold text-lg text-[#0F172A] hover:text-[#0284C7] transition-colors">
              Webify
            </Link>
            <span className="text-xs text-[#64748B]">© 2026 Webify. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#64748B]">
            <Link href="/#services" className="hover:text-[#0F172A] transition-colors">Services</Link>
            <Link href="/our-work" className="font-semibold text-[#0284C7]">Our Work</Link>
            <Link href="/#crm-extension" className="hover:text-[#0F172A] transition-colors">CRM &amp; Extension</Link>
            <Link href="/#whatsapp-chatbot" className="hover:text-[#0F172A] transition-colors">WhatsApp Chatbot</Link>
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
