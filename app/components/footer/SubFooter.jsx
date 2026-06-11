"use client";

import React from 'react';
import gsap from 'gsap';

export default function SubFooter() {
  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 0.6, ease: 'power2.inOut' });
  };

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-gray-500 font-medium">
      
      {/* Language Toggle */}
      <div className="flex items-center gap-1.5 bg-[#042d4f] border border-white/5 rounded-full px-3 py-1 cursor-pointer hover:bg-[#063964] text-white/80 transition-colors">
        <span>🇺🇸</span>
        <span>Lang: En</span>
        <span className="text-[9px] text-gray-400 ml-1">▼</span>
      </div>

      {/* Copy */}
      <div className="text-center sm:text-left order-3 sm:order-2">
        Copyrights © <span className="text-orange-500">Aventour</span> 2026, All rights reserved.
      </div>

      {/* Scroll Up Control */}
      <button 
        onClick={scrollToTop}
        className="flex items-center gap-1.5 bg-[#042d4f] hover:bg-orange-500 text-white border border-white/5 hover:border-transparent rounded-full px-3.5 py-1 transition-all duration-300 group order-2 sm:order-3"
      >
        <span>Back to Top</span>
        <span className="w-3.5 h-3.5 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-orange-500 flex items-center justify-center text-[9px] font-bold transform -rotate-90 transition-all duration-300">
          ➔
        </span>
      </button>

    </div>
  );
}