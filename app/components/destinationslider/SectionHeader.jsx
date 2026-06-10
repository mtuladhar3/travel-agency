import React from 'react';

export default function SliderHeader() {
  return (
    <div className="text-center mb-12 px-4">
      {/* Badge Container */}
      <div className="flex items-center justify-center gap-1.5 text-[#7cb041] font-semibold text-xs tracking-wider uppercase mb-3">
        <span className="text-sm">🌴</span> Destinations
      </div>
      
      {/* Main Title Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-[#0f2d59] tracking-tight mb-3">
        Moments and Memories
      </h2>
      
      {/* Subtext description */}
      <p className="text-gray-400 text-xs md:text-sm tracking-wide font-normal">
        Plan your journey to our most sought-after spots.
      </p>
    </div>
  );
}