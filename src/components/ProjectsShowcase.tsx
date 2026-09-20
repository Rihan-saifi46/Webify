"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "../data/projects-showcase";

interface ProjectCardProps {
  project: ShowcaseProject;
  index: number;
  heightClass: string;
}

function ProjectCard({ project, index, heightClass }: ProjectCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.link || "#"}
      className={`group relative w-full ${heightClass} rounded-[26px] sm:rounded-[32px] overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.18)] hover:border-[#38BDF8]/60 transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Upper portion: Project Image */}
      <div className="relative w-full flex-1 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.96] group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Lower content area (Exact match to Reference Screenshot 2) */}
      <div className="relative z-10 m-3 sm:m-3.5 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md group-hover:shadow-lg transition-all">
        {/* Top row: Number identifier + Arrow ↗ */}
        <div className="flex items-start justify-between">
          <span className="font-brand font-extrabold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-none group-hover:text-[#0284C7] transition-colors">
            {formattedIndex}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0284C7] text-[#0F172A] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Content details */}
        <div className="mt-2.5 sm:mt-3 space-y-1">
          <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284C7]">
            {project.category}
          </span>
          <h3 className="font-bold text-base sm:text-lg text-[#0F172A] tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed line-clamp-2 font-normal">
            {project.subtitle}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="our-work" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
          Our Work
        </h2>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP LAYOUT (3-Column Masonry Collage - Screenshot 3) */}
      {/* ======================================================== */}
      <div className="hidden lg:grid grid-cols-3 gap-6 sm:gap-7 items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 sm:gap-7">
          <ProjectCard project={SHOWCASE_PROJECTS[0]} index={0} heightClass="h-[530px]" />
          <ProjectCard project={SHOWCASE_PROJECTS[3]} index={3} heightClass="h-[390px]" />
        </div>

        {/* Column 2 (Offset staggered rhythm) */}
        <div className="flex flex-col gap-6 sm:gap-7 pt-6">
          <ProjectCard project={SHOWCASE_PROJECTS[1]} index={1} heightClass="h-[350px]" />
          <ProjectCard project={SHOWCASE_PROJECTS[4]} index={4} heightClass="h-[490px]" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6 sm:gap-7">
          <ProjectCard project={SHOWCASE_PROJECTS[2]} index={2} heightClass="h-[460px]" />
          <ProjectCard project={SHOWCASE_PROJECTS[5]} index={5} heightClass="h-[380px]" />
        </div>
      </div>

      {/* ======================================================== */}
      {/* TABLET LAYOUT (2-Column Balanced Collage)                */}
      {/* ======================================================== */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <ProjectCard project={SHOWCASE_PROJECTS[0]} index={0} heightClass="h-[480px]" />
          <ProjectCard project={SHOWCASE_PROJECTS[2]} index={2} heightClass="h-[390px]" />
          <ProjectCard project={SHOWCASE_PROJECTS[4]} index={4} heightClass="h-[460px]" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <ProjectCard project={SHOWCASE_PROJECTS[1]} index={1} heightClass="h-[370px]" />
          <ProjectCard project={SHOWCASE_PROJECTS[3]} index={3} heightClass="h-[480px]" />
          <ProjectCard project={SHOWCASE_PROJECTS[5]} index={5} heightClass="h-[390px]" />
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE LAYOUT (Single Column Clean Stack)                */}
      {/* ======================================================== */}
      <div className="grid md:hidden grid-cols-1 gap-6">
        {SHOWCASE_PROJECTS.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            heightClass="h-[420px] sm:h-[450px]"
          />
        ))}
      </div>

    </section>
  );
}
