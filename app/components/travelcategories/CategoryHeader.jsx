import React from "react";
import Link from "next/link";

export default function CategoryHeader() {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-end justify-between text-white gap-4 px-2">
      <div className="flex flex-col gap-2 text-center md:text-left">
        {/* Tiny Green Tag */}
        <div className="flex items-center justify-center md:justify-start gap-1.5 text-white font-bold text-xs uppercase tracking-widest">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
          </svg>
          <span>Tour Categories</span>
        </div>

        {/* Main Title Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight leading-none">
          Choose Your Travel Style
        </h2>
        <p className="text-white/60 text-xs sm:text-sm font-medium tracking-wide">
          Adventure, luxury, culture — your choice, your way.
        </p>
      </div>

      {/* View All Button Right Side */}
      <div className="flex items-center justify-center pt-1 md:pt-0">
        <Link 
          href="/categories" 
          className="group flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide hover:text-lime-400 transition-colors duration-200"
        >
          <span>View All Categories</span>
          <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
            <svg className="w-2.5 h-2.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="3">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}