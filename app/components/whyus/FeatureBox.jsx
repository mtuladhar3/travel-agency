// whyus/FeatureBox.jsx
import React from 'react';

export default function FeatureBox({ data }) {
  return (
    <div className="whyus-animate-card bg-[#f8fafc]/60 border border-slate-200/50 rounded-[20px] p-6 flex flex-col items-start transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-100">
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5 text-[#0f2c59]">
        {data.icon}
      </div>
      <h4 className="text-base font-black text-[#0f2c59] mb-2 tracking-tight">
        {data.title}
      </h4>
      <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
        {data.description}
      </p>
    </div>
  );
}