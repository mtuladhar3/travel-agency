"use client";

import React from "react";

export default function TestimonialCard({ review }) {
  if (!review) return null;
  return (
    <div className="w-full bg-[#F4F4F4] rounded-[2rem] p-6 sm:p-8 border border-neutral-200/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:bg-white">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="text-neutral-800 font-bold text-base leading-tight">{review.name}</h4>
            <p className="text-neutral-400 text-xs mt-0.5">{review.role} · {review.location || "Explorer"}</p>
          </div>
        </div>
        <div className="w-full border-t border-dashed border-neutral-300/60 mb-6" />
        <p className="text-neutral-500 text-sm leading-relaxed">"{review.quote}"</p>
      </div>
    </div>
  );
}