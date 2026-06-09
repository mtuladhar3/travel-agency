import React from "react";

export default function CategoryCard({ title, image, count, price }) {
  return (
    <div className="group w-full bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60">
      
      {/* Flat Seamless Title Header */}
      <div className="w-full py-4 text-center bg-slate-50/60">
        <h4 className="text-sm md:text-base font-extrabold text-[#074675] tracking-wide group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h4>
      </div>

      {/* Image Block Wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Card Info Footer featuring Orange Trigger Button */}
      <div className="w-full p-4 flex items-center justify-between bg-white mt-auto">
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-slate-400 tracking-wide uppercase">
            {count}
          </span>
          <span className="text-xs sm:text-sm font-black text-lime-600 mt-0.5">
            {price}
          </span>
        </div>

        {/* Action Button: Styled explicitly in bright safety orange */}
        <button 
          className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white flex items-center justify-center shadow-md shadow-orange-500/30 transition-all duration-200 outline-none"
          aria-label={`Explore ${title}`}
        >
          <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    </div>
  );
}