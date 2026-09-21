"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "../data/projects-showcase";

export default function CurveFlowCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Repeated 4 times to ensure seamless infinite looping
  const duplicatedProjects = [
    ...SHOWCASE_PROJECTS,
    ...SHOWCASE_PROJECTS,
    ...SHOWCASE_PROJECTS,
    ...SHOWCASE_PROJECTS,
  ];

  const offsetRef = useRef(0);
  const velocityRef = useRef(-1.0); // Baseline natural drift velocity
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const isHoveredRef = useRef(false);
  const singleSetWidthRef = useRef(0);
  const [activeSpeedLabel, setActiveSpeedLabel] = useState<"normal" | "fast">("normal");

  // Calculate layout parameters
  const getCardMetrics = () => {
    if (typeof window === "undefined") return { cardWidth: 380, gap: 28 };
    if (window.innerWidth < 640) return { cardWidth: 290, gap: 20 };
    if (window.innerWidth < 1024) return { cardWidth: 340, gap: 24 };
    return { cardWidth: 390, gap: 28 };
  };

  const updateCardPositions = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const centerPoint = containerWidth / 2;
    const { cardWidth, gap } = getCardMetrics();
    const slotWidth = cardWidth + gap;
    singleSetWidthRef.current = SHOWCASE_PROJECTS.length * slotWidth;

    const cards = trackRef.current.children;
    const totalCards = cards.length;

    for (let i = 0; i < totalCards; i++) {
      const card = cards[i] as HTMLElement;
      // Position of this card relative to the track
      const cardBaseX = i * slotWidth;
      const cardCurrentX = cardBaseX + offsetRef.current;
      const cardCenter = cardCurrentX + cardWidth / 2;

      // Normalized distance from viewport center: -1.0 (left edge) to 1.0 (right edge)
      const distFromCenter = (cardCenter - centerPoint) / (containerWidth / 2);
      const absDist = Math.abs(distFromCenter);

      // 3D Curve Flow Geometry:
      // 1. Subtle Y-axis rotation (cards on the left angle inwards, right angle inwards)
      const rotateY = Math.max(Math.min(distFromCenter * -14, 25), -25);
      // 2. Parabolic vertical arc (cards gently dip along a curved horizon towards edges)
      const translateY = Math.min(absDist * absDist * 16, 42);
      // 3. Gentle depth scale (center card prominent, edge cards gracefully scale)
      const scale = Math.max(0.88, 1 - absDist * 0.07);
      // 4. Z-axis translation for physical depth
      const translateZ = Math.max(-50, (1 - Math.min(absDist, 1.2)) * 30);
      // 5. Subtle opacity on far edges
      const opacity = Math.max(0.45, 1 - Math.max(0, absDist - 0.7) * 0.85);

      card.style.transform = `translateX(${cardCurrentX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = `${opacity}`;
    }
  }, []);

  // Main RAF physics loop
  useEffect(() => {
    let rafId: number;
    let prefersReducedMotion = false;

    if (typeof window !== "undefined") {
      prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    const animate = () => {
      if (!isDraggingRef.current && !prefersReducedMotion) {
        // Target velocity: slow when card hovered, normal baseline otherwise
        const targetV = isHoveredRef.current ? -0.25 : -1.0;

        // Smooth momentum friction decay back to baseline speed
        velocityRef.current += (targetV - velocityRef.current) * 0.045;

        // Apply velocity to offset
        offsetRef.current += velocityRef.current;

        // Update speed label for UI feedback if accelerated
        const isAccelerated = Math.abs(velocityRef.current) > 3.0;
        setActiveSpeedLabel((prev) => (isAccelerated ? "fast" : "normal"));
      }

      // Infinite wrapping logic
      const setWidth = singleSetWidthRef.current;
      if (setWidth > 0) {
        if (offsetRef.current < -setWidth * 2) {
          offsetRef.current += setWidth;
        } else if (offsetRef.current > -setWidth) {
          offsetRef.current -= setWidth;
        }
      }

      updateCardPositions();
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    // Pause animation when tab is inactive to preserve performance
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [updateCardPositions]);

  // Mouse Wheel / Trackpad Scroll Acceleration Listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Allow user to accelerate carousel with wheel / trackpad
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 1.5) {
        // Accelerate velocity in the scroll direction
        velocityRef.current -= delta * 0.045;
        // Clamp maximum velocity to avoid dizzying jumps
        const maxV = 22;
        velocityRef.current = Math.max(Math.min(velocityRef.current, maxV), -maxV);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Drag & Swipe Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    dragDistanceRef.current = 0;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - lastXRef.current;
    offsetRef.current += delta;
    velocityRef.current = delta * 0.7; // Impart drag fling velocity
    lastXRef.current = e.clientX;
    dragDistanceRef.current += Math.abs(delta);
    updateCardPositions();
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Nudge Controls (Previous / Next Buttons)
  const nudge = (direction: "left" | "right") => {
    const { cardWidth, gap } = getCardMetrics();
    const impulse = (cardWidth + gap) * (direction === "left" ? 0.06 : -0.06);
    velocityRef.current += impulse;
  };

  return (
    <div className="relative w-full py-6 select-none overflow-hidden">
      {/* 3D Perspective Curved Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full h-[520px] sm:h-[560px] lg:h-[600px] cursor-grab active:cursor-grabbing overflow-hidden"
        style={{
          perspective: "1300px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Left & Right Subtle Atmospheric Edge Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent z-20 pointer-events-none" />

        {/* Dynamic 3D Track Container */}
        <div
          ref={trackRef}
          className="absolute inset-0 flex items-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {duplicatedProjects.map((project, idx) => {
            const projectNumber = String((idx % SHOWCASE_PROJECTS.length) + 1).padStart(2, "0");

            return (
              <div
                key={`${project.id}-${idx}`}
                onMouseEnter={() => {
                  isHoveredRef.current = true;
                }}
                onMouseLeave={() => {
                  isHoveredRef.current = false;
                }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[290px] sm:w-[340px] lg:w-[390px] h-[440px] sm:h-[480px] lg:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(15,23,42,0.18)] hover:shadow-[0_25px_60px_-15px_rgba(2,132,199,0.3)] hover:border-[#38BDF8] transition-shadow duration-300 flex flex-col justify-between"
                style={{
                  willChange: "transform, opacity",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Full-bleed Project Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center brightness-[0.92] hover:brightness-100 transition-all duration-500 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Top Badge: Number and Category */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/90 backdrop-blur-md text-[#0F172A] border border-white/60 shadow-xs">
                    {projectNumber}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0284C7]/90 backdrop-blur-md text-white shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Content Card Dock */}
                <div className="relative z-10 m-3 sm:m-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h3 className="font-bold text-base sm:text-lg text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    <a
                      href={project.link || "#"}
                      onClick={(e) => {
                        // Prevent accidental navigation when user flings or drags
                        if (dragDistanceRef.current > 6) {
                          e.preventDefault();
                        }
                      }}
                      className="w-9 h-9 rounded-full bg-[#0F172A] hover:bg-[#0284C7] text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-xs"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls & Momentum Feedback Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
        {/* Left: Interactive guidance pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
          <span className="font-medium text-[#0F172A]">Curve Flow</span>
          <span className="text-slate-300">•</span>
          <span>Scroll, drag, or swipe to accelerate movement</span>
          {activeSpeedLabel === "fast" && (
            <span className="ml-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full">
              Boost Active
            </span>
          )}
        </div>

        {/* Right: Step navigation arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => nudge("left")}
            aria-label="Previous Project"
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200/80 text-[#0F172A] flex items-center justify-center transition-all shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => nudge("right")}
            aria-label="Next Project"
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200/80 text-[#0F172A] flex items-center justify-center transition-all shadow-xs active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
