"use client";

import React from "react";
import Link from "next/link";

export default function PackageCard({ tour, regionHref }) {
  // Fallback link in case regionHref isn't passed for some reason
  const cardLink = regionHref || "/trekking";

  return (
    <Link 
      href={cardLink}
      className="tour-card-item group flex flex-col bg-[#F9F9F9] rounded-[2rem] border border-neutral-100 transition-all duration-300 hover:bg-white cursor-pointer"
    >
      {/* Image Window Container with Hover Scale */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-neutral-200">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Floating pill badge */}
        <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-neutral-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
          {tour.location}
        </span>
      </div>

      {/* Text Meta Fields */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-neutral-900 tracking-tight leading-tight mb-2 group-hover:text-sky-700 transition-colors duration-200">
          {tour.title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-6">
          {tour.description}
        </p>

        {/* Decorative separation baseline */}
        <div className="w-full border-t border-dashed border-neutral-200 mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-neutral-900">{tour.price}</span>
            <span className="text-xs text-neutral-400 font-normal">/person</span>
          </div>
          <span className="bg-black text-white text-xs font-bold tracking-wider px-3 py-1.5 rounded-md">
            {tour.duration}
          </span>
        </div>
      </div>
    </Link>
  );
}