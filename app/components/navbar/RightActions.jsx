"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useNavbarScrolled } from "./NavbarScrollContext";

export default function RightActions() {
  const isScrolled = useNavbarScrolled();

  return (
    <div className="hidden shrink-0 items-center gap-6 lg:flex">
      <button
        type="button"
        className={`flex items-center gap-1 text-sm font-bold tracking-wider transition-colors ${
          isScrolled
            ? "text-neutral-900 hover:text-[#FF4E25]"
            : "text-white hover:text-white/80"
        }`}
      >
        <span>ENG</span>
        <ChevronDown className="h-4 w-4 opacity-70" />
      </button>

      {/* <Link
        href="/enquire"
        className={`rounded-md border px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
          isScrolled
            ? "border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
            : "border-white text-white hover:bg-white hover:text-[#0F2220]"
        }`}
      >
        Enquire Now
      </Link> */}
     <button 
  className={`group flex items-center gap-3 transition-all duration-300 rounded-full pl-6 pr-2 py-2 text-sm font-semibold shadow-md ${
    isScrolled
      ? "bg-black hover:bg-neutral-800 text-white"
      : "bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xs" // 💡 Clean look for transparent state
  }`}
>
Enquire Now
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
  );
}
