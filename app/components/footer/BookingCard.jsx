"use client";

import React from 'react';

export default function BookingCard() {
  return (
    <div className="w-full max-w-sm bg-[#063356]/90 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl text-center flex flex-col items-center justify-center relative z-20">
      <p className="text-gray-300 text-sm font-medium mb-5 tracking-wide">
        Lock in your next adventure.
      </p>

      {/* Button */}
      <button type="button" className="flex items-center justify-between bg-sky-700 hover:bg-sky-700 text-white font-bold py-2.5 pl-6 pr-2 rounded-full w-full max-w-[240px] transition-all duration-300 group shadow-lg shadow-sky-700/20">
        <span className="text-sm tracking-wide">Book Your Tour</span>
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#022644] font-bold transform transition-transform duration-300 group-hover:translate-x-1">
          ➔
        </span>
      </button>

      {/* Contact Link */}
      <a 
        href="tel:+80045678901" 
        className="flex items-center gap-2 text-white hover:text-sky-700 font-semibold text-xs md:text-sm mt-6 transition-colors duration-200"
      >
        <span className="text-sky-700">📞</span>
        <span className="italic font-light text-gray-300">Talk to Us</span> +800 45 6789 01
      </a>
    </div>
  );
}