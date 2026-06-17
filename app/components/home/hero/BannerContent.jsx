"use client";
import React from "react";
import { SLIDER_DATA } from "../../../data/sliderData";

export default function BannerContent() {
  const initialSlide = SLIDER_DATA[0] || {
    subtitle: "",
    title: "",
    description: ""
  };

  return (
    <>
      <div
        id="details-even"
        className="absolute left-4 top-[7rem] sm:left-[6%] sm:top-[20%] lg:left-[8%] lg:top-[15%] xl:left-[10%] xl:top-[30%] z-[25] flex w-full max-w-[calc(100%-2rem)] sm:max-w-[var(--banner-content-max,340px)] flex-col gap-4 sm:gap-3 lg:gap-3 xl:gap-4 text-white pointer-events-auto md:max-h-[52vh] md:overflow-hidden pr-2"
      >
        <div className="overflow-hidden h-[30px]">
          <div className="gText text-sm font-semibold tracking-[4px] uppercase text-amber-500">
            {initialSlide.subtitle}
          </div>
        </div>
        <div className="overflow-hidden min-h-[80px] sm:min-h-[110px] lg:min-h-[120px] xl:min-h-[140px] flex flex-col justify-end">
          <div className="gTitle1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wide uppercase leading-[1.1] break-words">
            {initialSlide.title}
          </div>
        </div>
        <div className="gDesc text-xs sm:text-sm leading-relaxed text-gray-300 opacity-90 font-medium mt-1 lg:mt-2 line-clamp-3 lg:line-clamp-3">
          {initialSlide.description}
        </div>
        <div className="gCta flex items-center gap-3 lg:gap-4 mt-1 lg:mt-2 shrink-0">
          <button type="button" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button type="button" className="px-4 py-2.5 lg:px-6 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[10px] lg:text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Discover Location
          </button>
        </div>
      </div>

      <div
        id="details-odd"
        className="absolute left-4 top-[7rem] sm:left-[6%] sm:top-[20%] lg:left-[8%] lg:top-[15%] xl:left-[10%] xl:top-[30%] z-[25] flex w-full max-w-[calc(100%-2rem)] sm:max-w-[var(--banner-content-max,340px)] flex-col gap-4 sm:gap-3 lg:gap-3 xl:gap-4 text-white pointer-events-auto opacity-0 md:max-h-[52vh] md:overflow-hidden pr-2"
      >
        <div className="overflow-hidden h-[30px]">
          <div className="gText text-sm font-semibold tracking-[4px] uppercase text-amber-500">
            {initialSlide.subtitle}
          </div>
        </div>
        <div className="overflow-hidden min-h-[80px] sm:min-h-[110px] lg:min-h-[120px] xl:min-h-[140px] flex flex-col justify-end">
          <div className="gTitle1 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wide uppercase leading-[1.1] break-words">
            {initialSlide.title}
          </div>
        </div>
        <div className="gDesc text-xs sm:text-sm leading-relaxed text-gray-300 opacity-90 font-medium mt-1 lg:mt-2 line-clamp-3 lg:line-clamp-3">
          {initialSlide.description}
        </div>
        <div className="gCta flex items-center gap-3 lg:gap-4 mt-1 lg:mt-2 shrink-0">
          <button type="button" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button type="button" className="px-4 py-2.5 lg:px-6 lg:py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[10px] lg:text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Discover Location
          </button>
        </div>
      </div>
    </>
  );
}
