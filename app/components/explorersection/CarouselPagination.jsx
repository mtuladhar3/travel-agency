import React from "react";

export default function CarouselPagination({ activeIndex, totalDots, onDotClick }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 w-full">
      {[...Array(totalDots)].map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-1.5 rounded-full transition-all duration-300 outline-none focus:ring-1 focus:ring-[#82C134] ${
            index === activeIndex 
              ? "w-7 bg-[#82C134]" 
              : "w-5 bg-gray-200 hover:bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}