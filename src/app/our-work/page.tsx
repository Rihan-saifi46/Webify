"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import CurveFlowCarousel from "../../components/CurveFlowCarousel";

export default function OurWorkPage() {
  return (
    <div className="relative h-screen max-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#7DD3FC]/30 selection:text-[#0F172A] overflow-hidden flex flex-col justify-between">
      
      {/* Subtle Atmospheric Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#BAE6FD]/20 via-[#E0F2FE]/15 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#E0F2FE]/15 to-transparent rounded-full blur-[100px]" />
      </div>

      {/* ======================================================== */}
      {/* 1. Top Navbar (Header Navigation)                        */}
      {/* ======================================================== */}
      <header className="relative z-30 pt-3 sm:pt-4 lg:pt-5 px-5 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto w-full">
        <Navbar />
      </header>

      {/* ======================================================== */}
      {/* 2. Main Full-Screen Interactive Project Carousel         */}
      {/* (Only section on the page, occupying the main viewport)  */}
      {/* ======================================================== */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center w-full overflow-hidden px-2 sm:px-4">
        <CurveFlowCarousel />
      </main>

      {/* Bottom anchor for balanced viewport positioning */}
      <div className="relative z-10 w-full h-3 sm:h-4 pointer-events-none" />

    </div>
  );
}
