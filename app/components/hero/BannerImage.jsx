"use client";
import React from "react";
import { SLIDER_DATA } from "../../data/sliderData";

export default function BannerImage({ onNext, numberSize }) {
  return (
    <div 
      id="pagination" 
      className="absolute z-[60] flex items-center gap-2 sm:gap-4 md:gap-6 text-white pointer-events-auto select-none max-w-[calc(100%-2rem)]"
    >
      {/* Interaction Handlers */}
      <div 
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
        onClick={onNext}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </div>
      <div 
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
        onClick={onNext}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>

      {/* Progress Tracking Line Element */}
      <div className="hidden sm:block h-[2px] bg-white/20 relative rounded-full overflow-hidden shrink min-w-0 max-w-[500px] w-[min(500px,35vw)]">
        <div className="gProgF h-full bg-amber-500 w-0 rounded-full transition-all duration-300"></div>
      </div>

      {/* Sliding Numbers Track */}
      <div 
        id="slide-numbers" 
        className="relative flex items-center overflow-hidden font-bold text-lg shrink-0"
        style={{ width: numberSize, height: numberSize }}
      >
        {SLIDER_DATA.map((_, index) => (
          <div
            key={`slide${index}`}
            id={`slide-item-${index}`}
            className="absolute flex items-center justify-center h-full font-black text-xl"
            style={{ position: "absolute", width: numberSize }}
          >
            {index + 1}
          </div>
        ))}
      </div>

    </div>
  );
}