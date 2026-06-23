import React from "react";

export default function CarouselPagination({ activeIndex, totalDots, onDotClick }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8 w-full">
      {[...Array(totalDots)].map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`h-1.5 rounded-full transition-all duration-300 outline-none focus:ring-1 focus:ring-sky-700 ${
            index === activeIndex 
              ? "w-7 bg-sky-700" 
              : "w-5 bg-gray-200 hover:bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}