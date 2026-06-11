// whyus/WhyUsHeader.jsx
import React from 'react';

export default function WhyUsHeader() {
  return (
    <div className="whyus-header mb-8 text-center lg:text-left">
      <div className="inline-flex items-center gap-1 text-orange-500 font-black text-xs uppercase tracking-wider mb-2">
        <span className="text-sm">🪂</span> Why Aventour
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0f2c59] tracking-tight leading-tight mb-3">
        Your Trusted Travel Partner
      </h2>
      <p className="text-slate-400 font-medium text-xs sm:text-sm max-w-lg">
        Guiding you to unforgettable experiences across the world's wonders.
      </p>
    </div>
  );
}