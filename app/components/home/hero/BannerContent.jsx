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
          <div className="gText text-sm font-semibold tracking-[4px] uppercase text-white">
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
          <button className="group flex items-center gap-3 bg-white hover:bg-neutral-300 transition-all duration-300 text-black rounded-full pl-6 pr-2 py-2 text-sm font-semibold shadow-md">
          Read More
          <div className="flex items-center justify-center bg-black text-white w-8 h-8 rounded-full transition-transform duration-300 group-hover:rotate-45">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </button>
        </div>
      </div>

      <div
        id="details-odd"
        className="absolute left-4 top-[7rem] sm:left-[6%] sm:top-[20%] lg:left-[8%] lg:top-[15%] xl:left-[10%] xl:top-[30%] z-[25] flex w-full max-w-[calc(100%-2rem)] sm:max-w-[var(--banner-content-max,340px)] flex-col gap-4 sm:gap-3 lg:gap-3 xl:gap-4 text-white pointer-events-auto opacity-0 md:max-h-[52vh] md:overflow-hidden pr-2"
      >
        <div className="overflow-hidden h-[30px]">
          <div className="gText text-sm font-semibold tracking-[4px] uppercase text-white">
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
          <button className="group flex items-center gap-3 bg-white hover:bg-neutral-300 transition-all duration-300 text-black rounded-full pl-6 pr-2 py-2 text-sm font-semibold shadow-md">
          Read More
          <div className="flex items-center justify-center bg-black text-white w-8 h-8 rounded-full transition-transform duration-300 group-hover:rotate-45">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </button>
        </div>
      </div>
    </>
  );
}
