"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SHOWCASE_PROJECTS } from "../data/projects-showcase";

export default function CurveFlowCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Repeat projects 4 times for a seamless, continuous infinite loop
  const duplicatedProjects = [
    ...SHOWCASE_PROJECTS,
    ...SHOWCASE_PROJECTS,
    ...SHOWCASE_PROJECTS,
    ...SHOWCASE_PROJECTS,
  ];

  const offsetRef = useRef(0);
  const velocityRef = useRef(-0.75); // Gentle baseline continuous drift
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const isHoveredRef = useRef(false);
  const singleSetWidthRef = useRef(0);
  const [isAccelerating, setIsAccelerating] = useState(false);

  // Responsive Card Dimensions: compact so ≥3 cards fit comfortably on desktop
  const getCardMetrics = () => {
    if (typeof window === "undefined") return { cardWidth: 320, gap: 26 };
    if (window.innerWidth < 640) return { cardWidth: 265, gap: 18 };
    if (window.innerWidth < 1024) return { cardWidth: 295, gap: 22 };
    if (window.innerWidth < 1440) return { cardWidth: 315, gap: 26 };
    return { cardWidth: 330, gap: 28 };
  };

  // Subtle 3D depth calculation for each card
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
      const cardBaseX = i * slotWidth;
      const cardCurrentX = cardBaseX + offsetRef.current;
      const cardCenter = cardCurrentX + cardWidth / 2;

      // Normalized distance from center (-1.0 to 1.0 across viewport half-width)
      const distFromCenter = (cardCenter - centerPoint) / (containerWidth / 2);
      const absDist = Math.abs(distFromCenter);

      // 1. Subtle, elegant Y-axis rotation (max 12 deg, no heavy distortion)
      const rotateY = Math.max(Math.min(distFromCenter * -7, 12), -12);
      // 2. Gentle parabolic vertical arc (center level, edges gently dip max 22px)
      const translateY = Math.min(absDist * absDist * 10, 22);
      // 3. Subtle depth scale (center 1.0, adjacent ~0.94, edges ~0.88)
      const scale = Math.max(0.88, 1 - absDist * 0.08);
      // 4. Subtle Z-axis depth (center card sits 30px forward, edges sit back)
      const translateZ = Math.max(-45, (1 - Math.min(absDist, 1.4)) * 30);
      // 5. Gentle opacity gradient for far-edge cards
      const opacity = Math.max(0.65, 1 - Math.max(0, absDist - 0.75) * 0.55);

      // Center card highlight class / shadow
      const isCenterCard = absDist < 0.28;

      card.style.transform = `translateX(${cardCurrentX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = `${Math.round((1 - Math.min(absDist, 2)) * 10) + 10}`;

      if (isCenterCard) {
        card.style.borderColor = "rgba(56, 189, 248, 0.75)";
        card.style.boxShadow = "0 20px 45px -12px rgba(2, 132, 199, 0.22), 0 4px 15px rgba(15, 23, 42, 0.06)";
      } else {
        card.style.borderColor = "rgba(226, 232, 240, 0.9)";
        card.style.boxShadow = "0 10px 30px -10px rgba(15, 23, 42, 0.08)";
      }
    }
  }, []);

  // Main RAF Physics Engine with Momentum & Infinite Looping
  useEffect(() => {
    let rafId: number;
    let prefersReducedMotion = false;

    if (typeof window !== "undefined") {
      prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    const animate = () => {
      if (!isDraggingRef.current && !prefersReducedMotion) {
        // Natural drift speed: slower if card hovered, normal baseline otherwise
        const baseSpeed = isHoveredRef.current ? -0.2 : -0.75;

        // Smooth momentum friction decay: returns smoothly to baseSpeed when scroll input stops
        velocityRef.current += (baseSpeed - velocityRef.current) * 0.045;

        // Apply velocity to position offset
        offsetRef.current += velocityRef.current;

        // Visual feedback state when user accelerates
        const fast = Math.abs(velocityRef.current) > 2.8;
        setIsAccelerating(fast);
      }

      // Seamless infinite looping wrap
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

    // Pause RAF when page/tab is hidden
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

  // SCROLL BEHAVIOR: Mouse Wheel & Trackpad Intercept & Horizontal Acceleration
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelDebounce: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      // 1. Prevent vertical page scrolling while scrolling over the carousel
      e.preventDefault();

      // 2. Measure scroll impulse (supports mouse wheel deltaY and trackpad deltaX)
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (Math.abs(delta) > 0.5) {
        // Down/Right scroll pushes carousel forward (negative offset), Up/Left scrolls backward
        const scrollSensitivity = 0.075;
        velocityRef.current -= delta * scrollSensitivity;

        // Clamp maximum velocity to ensure fluid, controllable flight
        const maxVelocity = 26;
        velocityRef.current = Math.max(Math.min(velocityRef.current, maxVelocity), -maxVelocity);

        setIsAccelerating(true);
        if (wheelDebounce) clearTimeout(wheelDebounce);
        wheelDebounce = setTimeout(() => {
          setIsAccelerating(false);
        }, 300);
      }
    };

    // Attach with passive: false to allow e.preventDefault()
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (wheelDebounce) clearTimeout(wheelDebounce);
    };
  }, []);

  // Pointer Drag & Touch Swipe Handlers
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
    velocityRef.current = delta * 0.75; // Impart drag fling momentum
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

  // Nudge Buttons (Manual step navigation)
  const nudge = (direction: "left" | "right") => {
    const { cardWidth, gap } = getCardMetrics();
    const impulse = (cardWidth + gap) * (direction === "left" ? 0.05 : -0.05);
    velocityRef.current += impulse;
  };

  return (
    <div className="relative w-full py-2 select-none overflow-hidden flex flex-col justify-center items-center">
      
      {/* 3D Perspective Viewport Area */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full h-[430px] sm:h-[460px] lg:h-[490px] cursor-grab active:cursor-grabbing overflow-hidden"
        style={{
          perspective: "1600px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Subtle Atmospheric Left & Right Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent z-20 pointer-events-none" />

        {/* 3D Preserved Moving Track */}
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
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[265px] sm:w-[295px] lg:w-[315px] xl:w-[330px] h-[370px] sm:h-[400px] lg:h-[430px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-900 border transition-all duration-300 flex flex-col justify-between"
                style={{
                  willChange: "transform, opacity, box-shadow",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Full-bleed Project Image */}
                <div className="absolute inset-0 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center brightness-[0.94] hover:brightness-100 transition-all duration-500 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                </div>

                {/* Top Badge: Number and Category */}
                <div className="relative z-10 p-3.5 sm:p-4 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-white/90 backdrop-blur-md text-[#0F172A] border border-white/60 shadow-xs">
                    {projectNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#0284C7]/90 backdrop-blur-md text-white shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Content Card Dock */}
                <div className="relative z-10 m-2.5 sm:m-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-sm sm:text-base text-[#0F172A] leading-snug line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#64748B] line-clamp-1 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    <a
                      href={project.link || "#"}
                      onClick={(e) => {
                        // Prevent accidental navigation when user drags or flings
                        if (dragDistanceRef.current > 6) {
                          e.preventDefault();
                        }
                      }}
                      className="w-8 h-8 rounded-full bg-[#0F172A] hover:bg-[#0284C7] text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-xs"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls & Momentum Feedback Bar */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 mt-4 w-full flex items-center justify-between text-xs text-[#64748B]">
        {/* Left: Interactive guidance pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
          <span className="font-medium text-[#0F172A]">Scroll to Accelerate</span>
          <span className="text-slate-300">•</span>
          <span className="hidden sm:inline">Mouse wheel &amp; trackpad drive horizontal flow</span>
          {isAccelerating && (
            <span className="ml-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-full">
              Speed Boost Active
            </span>
          )}
        </div>

        {/* Right: Step navigation arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => nudge("left")}
            aria-label="Previous Project"
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200/80 text-[#0F172A] flex items-center justify-center transition-all shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => nudge("right")}
            aria-label="Next Project"
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-slate-200/80 text-[#0F172A] flex items-center justify-center transition-all shadow-xs active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
