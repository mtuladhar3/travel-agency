import React from "react";

export default function SectionHeader() {
  return (
    <div className="text-center mb-12 relative w-full">
      {/* Small top tag */}
      <p className="animate-header text-sm font-semibold text-orange-500 tracking-wide flex justify-center items-center gap-1">
        <span className="inline-block w-4 h-4 bg-[#82C134] opacity-20 rounded-full"></span>
        Recommended Countries
      </p>
      
      {/* Main Title */}
      <h2 className="animate-header text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B3546] mt-2 tracking-tight">
        Favorites for Every Explorer
      </h2>
      
      {/* Subtitle */}
      <p className="animate-header text-sm md:text-base text-gray-500 mt-3 max-w-xl mx-auto">
        Plan your journey to our most sought-after spots.
      </p>
    </div>
  );
}