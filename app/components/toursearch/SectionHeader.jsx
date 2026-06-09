import React from "react";

export default function SectionHeader() {
  return (
    <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
      {/* Small green tag line */}
      <div className="animate-header flex items-center gap-1.5 text-orange-500 font-semibold text-sm tracking-wider mb-2">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
        </svg>
        <span>Let's Go!</span>
      </div>
      
      {/* Bold main title header */}
      <h2 className="animate-header text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
        Find the Right Tour for You
      </h2>
    </div>
  );
}