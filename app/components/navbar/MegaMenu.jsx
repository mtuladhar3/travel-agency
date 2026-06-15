"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function MegaMenu({ item, isOpen }) {
  const [activeTabId, setActiveTabId] = useState(item.tabs?.[0]?.id ?? "");

  useEffect(() => {
    if (isOpen) {
      setActiveTabId(item.tabs?.[0]?.id ?? "");
    }
  }, [isOpen, item.tabs]);

  if (!isOpen || !item.tabs?.length) return null;

  const activeTab = item.tabs.find((tab) => tab.id === activeTabId) ?? item.tabs[0];

  return (
    <div className="fixed top-20 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:top-24 lg:px-8">
      <div className="w-full max-w-7xl overflow-hidden rounded-b-2xl border border-gray-100 bg-white text-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-top-2 duration-150">
        <div className="flex flex-col lg:min-h-[300px] lg:flex-row lg:items-stretch">
          {/* Left tab navigation */}
          <div className="flex w-full shrink-0 flex-col border-b border-gray-100 lg:w-[220px] lg:border-b-0 lg:border-r">
            <ul className="flex-1 py-2">
              {item.tabs.map((tab) => {
                const isActive = tab.id === activeTabId;

                return (
                  <li key={tab.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveTabId(tab.id)}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`flex w-full items-center justify-between px-5 py-3.5 text-left text-[15px] font-medium transition-colors ${
                        isActive
                          ? "text-[#FF4E25]"
                          : "text-slate-800 hover:text-[#FF4E25]"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? "text-[#FF4E25]" : "text-slate-400"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="border-t border-gray-100 px-5 py-4">
              <Link
                href={item.viewAllHref ?? "/destinations"}
                className="text-sm font-semibold text-[#FF4E25] transition-colors hover:text-[#e0441f]"
              >
                View all
              </Link>
            </div>
          </div>

          {/* Middle destinations panel */}
          <div className="flex min-w-0 flex-1 flex-col justify-between px-6 py-5 lg:px-8 lg:py-6">
            <div className="flex min-h-0 flex-1 flex-col">
              <h3 className="mb-4 shrink-0 text-xs font-semibold tracking-[0.18em] text-slate-400">
                {activeTab.title}
              </h3>

              <div className="grid flex-1 grid-cols-3 grid-rows-3 gap-4">
                {activeTab.destinations.map((destination) => (
                  <Link
                    key={destination.name}
                    href={destination.href}
                    className="group flex min-w-0 items-center gap-2.5"
                  >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        sizes="40px"
                        className="object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                    </div>
                    <span className="truncate text-sm font-medium text-slate-800 transition-colors group-hover:text-[#FF4E25]">
                      {destination.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 shrink-0">
              <Link
                href={activeTab.viewAllHref}
                className="text-sm font-semibold text-[#FF4E25] transition-colors hover:text-[#e0441f]"
              >
                View all
              </Link>
            </div>
          </div>

          {/* Right promo card */}
          {item.promo && (
            <div className="flex w-full shrink-0 border-t border-gray-100 p-4 lg:w-[280px] lg:border-l lg:border-t-0 lg:p-5">
              <div className="relative min-h-[220px] w-full flex-1 overflow-hidden rounded-2xl lg:min-h-[300px]">
                <Image
                  src={item.promo.image}
                  alt={item.promo.title}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h4 className="text-lg font-bold leading-snug text-white">
                    {item.promo.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {item.promo.subtitle}
                  </p>
                  <Link
                    href={item.promo.ctaHref}
                    className="mt-4 inline-flex w-fit rounded-lg bg-[#FF4E25] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e0441f]"
                  >
                    {item.promo.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
