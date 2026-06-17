import React from 'react';

export default function SliderControls({ total, activeIndex }) {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center mt-10 px-6">
      
      {/* Dynamic Progress Line Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ease-out ${
              idx === activeIndex ? 'w-10 bg-[#7cb041]' : 'w-6 bg-gray-200'
            }`}
          />
        ))}
      </div>

     
    </div>
  );
}