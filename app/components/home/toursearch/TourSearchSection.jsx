"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeader from "./SectionHeader";
import SearchCard from "./SearchCard";
import FloatingBadge from "./FloatingBadge";

export default function TourSearchSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate header text elements dropping in
      tl.fromTo(".animate-header", { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 })
        // Animate main form card scale and fade up
        .fromTo(".animate-card", { y: 60, scale: 0.95, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.8 }, "-=0.4")
        // Pop in the badges and decorative suitcase graphics dynamically
        .fromTo(".animate-badge-left", { x: -50, scale: 0.8, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 0.6 }, "-=0.5")
        .fromTo(".animate-badge-right", { x: 50, scale: 0.8, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 0.6 }, "-=0.6")
        .fromTo(".animate-badge-bottom", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

      // Soft infinite floating animation for the decorative suitcase graphic
      gsap.to(".floating-suitcase", {
        y: -12,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative  w-full flex flex-col items-center justify-center py-12 px-4 overflow-hidden bg-slate-50"
      style={{
        backgroundImage: "url('/images/shape-1.png')", // Place a light world-map pattern in your public/images folder
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative Grid Overlays to match the background grid lines in image_46af16.jpg */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* 1. Header Section */}
      <SectionHeader />

      {/* Main Content Layout container */}
      <div className="relative w-full max-w-6xl mt-12 flex flex-col lg:flex-row items-center justify-center gap-12 z-10">
        
        {/* LEFT COLUMN: Floating Badges Group */}
        <div className="hidden lg:flex flex-col items-center gap-16 w-1/4 animate-badge-left">
          <FloatingBadge variant="dark-blue" title="80+" subtitle="Handpicked Tour Packages" />
          
          {/* Circular Badge: Rotating text badge seen at the bottom-left of image_46af16.jpg */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-700 text-[8.5px] font-bold uppercase tracking-[2px]">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text><textPath href="#circlePath">Experience Travel The Aventour Way • </textPath></text>
              </svg>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/images/rotate-1.webp" alt="Traveler" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Main Booking Form Card */}
        <div className="w-full max-w-lg lg:w-2/4 animate-card">
          <SearchCard />
        </div>

        {/* RIGHT COLUMN: Suitcase Graphic & Extra Badge */}
        <div className="relative w-full max-w-xs lg:w-1/4 flex flex-col items-center lg:items-start gap-8">
          {/* Decorative Traveling Suitcase Illustration */}
          <div className="floating-suitcase animate-badge-right w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center">
            <img 
              src="/images/travel-1.webp" 
              alt="Travel Illustration" 
              className="w-full h-full object-contain"
            />
          </div>

          <div className="animate-badge-bottom lg:ml-4">
            <FloatingBadge variant="dark-blue" title="80+" subtitle="Handpicked Tour Packages" />
          </div>
        </div>

      </div>
    </section>
  );
}