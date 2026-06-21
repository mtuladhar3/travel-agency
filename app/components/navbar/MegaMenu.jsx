"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// 💡 Step 1: Import the programmatic router tool from next/navigation
import { useRouter } from "next/navigation";
import MegaMenuPackageSlider from "./MegaMenuPackageSlider";

export default function MegaMenu({ item, isOpen, onClose }) {
  const router = useRouter(); // 💡 Step 2: Initialize your dynamic application router
  const [activeRegionHref, setActiveRegionHref] = useState(
    item.regions?.[0]?.href ?? ""
  );

  useEffect(() => {
    if (isOpen) {
      setActiveRegionHref(item.regions?.[0]?.href ?? "");
    }
  }, [isOpen, item.regions]);

  if (!isOpen || !item.regions?.length) return null;

  // 💡 Step 3: A safe, explicit navigation function to handle routing
  const handleNavigation = (e, href) => {
    e.preventDefault(); // Stop any conflicting parent event bubbling actions
    router.push(href);
    
    // Optional: If your parent header component passes down a close menu handler, 
    // invoke it here to clean up background overlays instantly
    if (onClose) onClose(); 
  };

  return (
    <div className="fixed top-20 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:top-24 lg:px-8">
      <div className="w-full max-w-7xl overflow-hidden rounded-b-2xl border border-[#E8E4DC] bg-[#F7F5F1] text-[#1C2B2A] shadow-[0_24px_60px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-top-2 duration-150">
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-5 lg:p-6 lg:min-h-[420px]">
          
          {/* Left: trekking regions list profile */}
          <div className="flex flex-col border-b border-[#E0DBD2] pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-2">
            <ul className="flex-1 space-y-0.5">
              {item.regions.map((region) => {
                const isActive = region.href === activeRegionHref;

                return (
                  <li key={region.href}>
                    {/* 💡 Step 4: Swapped the <Link> element to a button layout bound cleanly with click tracking handlers */}
                    <button
                      onClick={(e) => handleNavigation(e, region.href)}
                      onMouseEnter={() => setActiveRegionHref(region.href)}
                      onFocus={() => setActiveRegionHref(region.href)}
                      className={`w-full text-left flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-white text-orange-500"
                          : "text-[#1C2B2A] hover:bg-white/70 hover:text-orange-500"
                      }`}
                    >
                      <span>{region.label}</span>
                      {isActive && <span className="text-xs">→</span>}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 border-t border-[#E0DBD2] pt-4">
              <button
                onClick={(e) => handleNavigation(e, item.viewAllHref ?? item.href)}
                className="w-full text-left px-3 text-sm font-bold text-[#1C2B2A] transition-colors hover:text-orange-500 cursor-pointer"
              >
                {item.viewAllLabel ?? "View all"}
              </button>
            </div>
          </div>

          {/* Middle: package slider */}
          <MegaMenuPackageSlider
            regions={item.regions}
            featuredEyebrow={item.featuredEyebrow}
            activeRegionHref={activeRegionHref}
          />

          {/* Right: stacked promo cards */}
          {item.promos?.length > 0 && (
            <div className="flex min-h-[320px] flex-col gap-4">
              {item.promos.map((promo) => (
                <div
                  key={promo.ctaHref}
                  className={`flex flex-1 flex-col justify-between rounded-2xl p-5 text-white ${
                    promo.variant === "green" ? "bg-[#2F4F44]" : "bg-orange-500"
                  }`}
                >
                  <div>
                    <h4 className="text-lg font-semibold leading-snug sm:text-xl">
                      {promo.title}
                    </h4>
                    {promo.description && (
                      <p className="mt-2 text-sm leading-relaxed text-white/85">
                        {promo.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-5 border-t border-white/25 pt-4">
                    <button
                      onClick={(e) => handleNavigation(e, promo.ctaHref)}
                      className="text-left text-sm font-semibold text-white transition-opacity hover:opacity-80 cursor-pointer"
                    >
                      {promo.ctaLabel}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}