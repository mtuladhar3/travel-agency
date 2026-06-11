"use client";
import React from "react";
import { SLIDER_DATA } from "../../data/sliderData";

export default function BannerContent() {
  const initialSlide = SLIDER_DATA[0] || {
    subtitle: "",
    title: "",
    description: ""
  };

  return (
    <>
      {/* Alternating Text Details Section - Even Layout */}
      <div 
        id="details-even" 
        className="absolute left-4 top-[22%] sm:left-[10%] sm:top-[30%] z-[22] flex max-w-[90vw] sm:max-w-[500px] flex-col gap-4 text-white pointer-events-auto"
      >
        <div className="overflow-hidden h-[30px]">
          <div className="gText text-sm font-semibold tracking-[4px] uppercase text-amber-500">
            {initialSlide.subtitle}
          </div>
        </div>
        <div className="overflow-hidden min-h-[140px] flex flex-col justify-end">
          <div className="gTitle1 text-6xl font-black tracking-wide uppercase leading-[1.1]">
            {initialSlide.title}
          </div>
        </div>
        <div className="gDesc text-sm leading-relaxed text-gray-300 opacity-90 font-medium mt-2">
          {initialSlide.description}
        </div>
        <div className="gCta flex items-center gap-4 mt-2">
          <button type="button" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button type="button" className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Discover Location
          </button>
        </div>
      </div>

      {/* Alternating Text Details Section - Odd Layout */}
      <div 
        id="details-odd" 
        className="absolute left-4 top-[22%] sm:left-[10%] sm:top-[30%] z-[12] flex max-w-[90vw] sm:max-w-[500px] flex-col gap-4 text-white pointer-events-auto opacity-0"
      >
        <div className="overflow-hidden h-[30px]">
          <div className="gText text-sm font-semibold tracking-[4px] uppercase text-amber-500">
            {initialSlide.subtitle}
          </div>
        </div>
        <div className="overflow-hidden min-h-[140px] flex flex-col justify-end">
          <div className="gTitle1 text-6xl font-black tracking-wide uppercase leading-[1.1]">
            {initialSlide.title}
          </div>
        </div>
        <div className="gDesc text-sm leading-relaxed text-gray-300 opacity-90 font-medium mt-2">
          {initialSlide.description}
        </div>
        <div className="gCta flex items-center gap-4 mt-2">
          <button type="button" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button type="button" className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Discover Location
          </button>
        </div>
      </div>
    </>
  );
}