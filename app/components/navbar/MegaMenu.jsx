"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MegaMenu({ item, isOpen }) {
  const [activeRegionHref, setActiveRegionHref] = useState(
    item.regions?.[0]?.href ?? ""
  );

  useEffect(() => {
    if (isOpen) {
      setActiveRegionHref(item.regions?.[0]?.href ?? "");
    }
  }, [isOpen, item.regions]);

  if (!isOpen || !item.regions?.length) return null;

  const activeRegion =
    item.regions.find((region) => region.href === activeRegionHref) ??
    item.regions[0];
  const activePackage = activeRegion.popularPackage;

  return (
    <div className="fixed top-20 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:top-24 lg:px-8">
      <div className="w-full max-w-7xl overflow-hidden rounded-b-2xl border border-[#E8E4DC] bg-[#F7F5F1] text-[#1C2B2A] shadow-[0_24px_60px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-top-2 duration-150">
        <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-5 lg:p-6 lg:min-h-[420px]">
          {/* Left: trekking regions */}
          <div className="flex flex-col border-b border-[#E0DBD2] pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-2">
            <ul className="flex-1 space-y-0.5">
              {item.regions.map((region) => {
                const isActive = region.href === activeRegionHref;

                return (
                  <li key={region.href}>
                    <Link
                      href={region.href}
                      onMouseEnter={() => setActiveRegionHref(region.href)}
                      onFocus={() => setActiveRegionHref(region.href)}
                      className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-white text-orange-500"
                          : "text-[#1C2B2A] hover:bg-white/70 hover:text-orange-500"
                      }`}
                    >
                      <span>{region.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 border-t border-[#E0DBD2] pt-4">
              <Link
                href={item.viewAllHref ?? item.href}
                className="px-3 text-sm font-bold text-[#1C2B2A] transition-colors hover:text-orange-500"
              >
                {item.viewAllLabel ?? "View all"}
              </Link>
            </div>
          </div>

          {/* Middle: popular package for hovered region */}
          {activePackage && (
            <div className="flex min-h-[320px] flex-col rounded-2xl bg-[#E9E5DD] p-5 sm:p-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-500">
                  {item.featuredEyebrow ?? "Most popular in"}{" "}
                  {item.featuredLabelMode === "full"
                    ? activeRegion.label
                    : activeRegion.label.replace(" Region", "")}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-[#1C2B2A] sm:text-xl">
                  {activePackage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5C57]">
                  {activePackage.description}
                </p>
              </div>

              <div className="relative my-5 flex min-h-[160px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#DDD8CE]">
                <Image
                  key={activePackage.image}
                  src={activePackage.image}
                  alt={activePackage.imageAlt ?? activePackage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover transition-opacity duration-300"
                />
              </div>

              <div className="border-t border-[#D5CFC3] pt-4">
                <Link
                  href={activePackage.ctaHref}
                  className="text-sm font-semibold text-[#1C2B2A] transition-colors hover:text-orange-500"
                >
                  {activePackage.ctaLabel}
                </Link>
              </div>
            </div>
          )}

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
                    <Link
                      href={promo.ctaHref}
                      className="text-sm font-semibold text-white transition-opacity hover:opacity-80"
                    >
                      {promo.ctaLabel}
                    </Link>
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
