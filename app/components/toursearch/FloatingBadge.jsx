import React from "react";

export default function FloatingBadge({ variant = "dark-blue", title, subtitle }) {
  return (
    <div className="w-[180px] h-[180px] rounded-2xl bg-sky-950 p-5 flex flex-col items-center justify-center text-center shadow-xl border border-sky-900/40 select-none">
      
      {/* Main Count text display */}
      <h3 className="text-3xl font-black text-white tracking-wide mb-3">
        {title}
      </h3>

      {/* Overlapping circle avatars layer as seen inside the badge of image_46af16.jpg */}
      <div className="flex items-center justify-center -space-x-2.5 mb-4">
        <div className="w-7 h-7 rounded-full border border-sky-950 overflow-hidden bg-slate-300">
          <img src="/images/travel-1.webp" alt="destination" className="w-full h-full object-cover" />
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-sky-950 overflow-hidden bg-emerald-500 flex items-center justify-center z-10 shadow-md">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div className="w-7 h-7 rounded-full border border-sky-950 overflow-hidden bg-slate-400">
          <img src="/images/thumb2.jpg" alt="destination" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Subtitle description */}
      <p className="text-[11px] font-medium leading-normal text-slate-300/90 tracking-wide max-w-[120px]">
        {subtitle}
      </p>

    </div>
  );
}