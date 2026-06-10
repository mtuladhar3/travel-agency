import React, { useRef } from "react";
import gsap from "gsap";

export default function CountryCard({ name, image, tours, price }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, { scale: 1.12, duration: 0.4, ease: "power2.out" });
    gsap.to(cardRef.current, { y: -6, boxShadow: "0px 20px 30px rgba(0,0,0,0.08)", duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });
    gsap.to(cardRef.current, { y: 0, boxShadow: "0px 4px 10px rgba(0,0,0,0.0)", duration: 0.3 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col items-center w-full cursor-pointer transition-all duration-300"
    >
      {/* Image Panel Wrapper */}
      <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm">
        <img
          ref={imgRef}
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        {/* Soft Dark Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Floating Geo Location Tag */}
        <div className="absolute bottom-5 left-5 flex items-center gap-1.5 text-white">
          <svg
            className="w-4 h-4 opacity-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-bold text-lg md:text-xl tracking-wide">{name}</span>
        </div>
      </div>

      {/* Info Metadata Action Pill */}
      <div className="mt-4 w-[92%] bg-white border border-gray-100 rounded-full py-2 pl-4 pr-2 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-gray-200 transition-colors">
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
          <span className="text-gray-600 font-semibold">{tours} Tours</span>
          <span>-</span>
          <span className="text-[#82C134] font-bold">From {price}</span>
        </div>
        
        {/* Micro Arrow CTA Button */}
        <button className="w-8 h-8 rounded-full bg-[#E8F1F5] group-hover:bg-[#82C134] flex items-center justify-center text-[#0B3546] group-hover:text-white transition-colors duration-300">
          <svg
            className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}