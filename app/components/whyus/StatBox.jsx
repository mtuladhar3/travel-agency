// whyus/StatBox.jsx
import React from 'react';

export default function StatBox({ data }) {
  return (
    <div className="whyus-animate-card bg-[#f8fafc]/60 border border-slate-200/50 rounded-[20px] p-5 flex items-start gap-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100">
      <div className="w-12 h-12 rounded-xl bg-orange-50/60 border border-orange-100/40 flex items-center justify-center flex-shrink-0">
        {data.icon}
      </div>
      <div>
        <div className="text-2xl font-black text-[#0f2c59] tracking-tight leading-none mb-1">
          {data.value}
        </div>
        <div className="text-[14px] font-black text-[#0f2c59] mb-1">
          {data.title}
        </div>
        <p className="text-[12px] text-slate-400 font-medium leading-normal">
          {data.description}
        </p>
      </div>
    </div>
  );
}