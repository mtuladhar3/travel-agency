"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TestimonialHeader() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the heading title text blocks
      gsap.fromTo(
        ".animate-header-text",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // Reveal the localized sidebar statement and button parameters
      gsap.fromTo(
        ".animate-header-aside",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={headerRef} 
      className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between w-full pb-6 border-b border-neutral-100 align-items-center"
    >
      {/* Target Content Header Block */}
      <div className="flex flex-col max-w-xl">
        {/* Tiny top accent capsule */}
        <h2 className="animate-header-text text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-neutral-900 leading-[1.1]">
          What Our Clients About <span className="font-serif italic font-normal text-sky-700">Their Jourmey</span>
        </h2>
      </div>

      {/* Aside Right Description and Circular CTA */}
      <div className="animate-header-aside flex flex-col items-start lg:items-end gap-5 max-w-sm lg:text-right">
        
        {/* Interactive Loop Arrow Button */}
        <button className="group flex items-center gap-3 bg-black hover:bg-neutral-800 transition-all duration-300 text-white rounded-full pl-6 pr-2 py-2 text-sm font-semibold shadow-md">
          View All 
          <div className="flex items-center justify-center bg-white text-black w-8 h-8 rounded-full transition-transform duration-300 group-hover:rotate-45">
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
  );
}