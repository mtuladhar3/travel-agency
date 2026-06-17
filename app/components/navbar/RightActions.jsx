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

      <Link
        href="/enquire"
        className={`rounded-md border px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
          isScrolled
            ? "border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
            : "border-white text-white hover:bg-white hover:text-[#0F2220]"
        }`}
      >
        Enquire Now
      </Link>
    </div>
  );
}
