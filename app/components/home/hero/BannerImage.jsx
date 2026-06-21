"use client";
import React from "react";
import { SLIDER_DATA } from "../../../data/sliderData";

export default function BannerImage({ onNext, numberSize }) {
  return (
    <div
      id="pagination"
      className="absolute z-[60] top-[-20] flex items-center justify-center sm:justify-start gap-2 sm:gap-4 lg:gap-5 xl:gap-6 text-white pointer-events-auto select-none w-[calc(100%-2rem)] sm:w-auto max-w-[calc(100vw-2rem)] sm:max-w-none pr-2 pb-[50px]"
    >
      <div
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 shrink-0"
        onClick={onNext}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </div>
      <div
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 shrink-0"
        onClick={onNext}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>

      <div
        className="h-[2px] bg-white/20 relative rounded-full overflow-hidden shrink min-w-[80px]"
        style={{ width: "var(--banner-progress-width, 240px)" }}
      >
        <div className="gProgF h-full bg-amber-500 w-0 rounded-full transition-all duration-300"></div>
      </div>

      <div
        id="slide-numbers"
        className="relative flex items-center overflow-hidden font-bold text-lg shrink-0 text-white"
        style={{ width: numberSize, height: numberSize }}
      >
        {SLIDER_DATA.map((_, index) => (
          <div
            key={`slide${index}`}
            id={`slide-item-${index}`}
            className="absolute inset-y-0 left-0 flex items-center justify-center font-black text-xl text-white"
            style={{ width: numberSize }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
