"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "../data/projects-showcase";

export default function ProjectsShowcase() {
  return (
    <section id="our-work" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Our Work
        </h2>
      </div>

      {/* Projects Grid (Responsive 1/2/3 Columns matching Reference Card Design) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SHOWCASE_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative h-[460px] sm:h-[500px] rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.06)] hover:shadow-2xl hover:border-[#38BDF8]/60 transition-all duration-300 flex flex-col justify-end"
          >
            {/* Background Project Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.92] group-hover:brightness-100"
                loading="lazy"
              />
              {/* Subtle top-to-bottom dark gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />
            </div>

            {/* Overlaid Project Card Badge (Exact Match to Screenshot Reference) */}
            <div className="relative z-10 m-3 sm:m-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg group-hover:shadow-xl transition-all">
              <div className="flex items-start justify-between gap-3">
                {/* Left: Title & Subtitle/Date */}
                <div className="space-y-1">
                  <h3 className="font-bold text-base sm:text-lg text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium">
                    {project.date}
                  </p>
                </div>

                {/* Right: Soundwave / Status Pill Indicator + Category */}
                <div className="flex flex-col items-end text-right space-y-1 shrink-0">
                  {/* Stylized Modern Activity Indicator (as in reference image) */}
                  <div className="flex items-center gap-1 text-[#0F172A] py-0.5">
                    <span className="w-1 h-3.5 bg-[#0F172A] rounded-full group-hover:animate-pulse" />
                    <span className="w-1 h-3 bg-[#0F172A] rounded-full group-hover:animate-pulse delay-75" />
                    <span className="w-1 h-2 bg-slate-300 rounded-full" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#0284C7]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Short project description & tag preview */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[#64748B] line-clamp-1 pr-2">
                  {project.subtitle}
                </span>
                <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0F172A] flex items-center justify-center shrink-0 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

