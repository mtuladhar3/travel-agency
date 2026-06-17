import React from 'react';

export default function SliderCard({ item }) {
  return (
    <div className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] lg:w-[22.8vw] h-[52vh] min-h-[420px] max-h-[520px] relative rounded-[1.8rem] overflow-hidden select-none mx-2.5 shadow-sm group">
      
      {/* Slide Image Asset */}
      <img 
        src={item.image} 
        alt={item.location} 
        className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      {/* Top and Bottom Vignette Contrast Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60 pointer-events-none" />

      {/* Top Left Location Label */}
      <div className="absolute top-7 left-7 text-white font-bold text-xl md:text-2xl tracking-wide drop-shadow-sm">
        {item.location}
      </div>

      {/* Bottom Left Context Description */}
      <div className="absolute bottom-7 left-7 right-7 text-white text-[13px] md:text-sm font-normal tracking-wide opacity-90 leading-relaxed drop-shadow-sm">
        {item.description}
      </div>
    </div>
  );
}