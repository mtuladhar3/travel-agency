import React from 'react';

export default function PostBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-[#F6F8F6] text-[#607260] px-3 py-1 rounded-full text-xs font-medium tracking-wide">
      {/* Dynamic placeholder icon in blue to match brand styling */}
      <span className="w-2 h-2 rounded-sm bg-sky-700" />
      {children}
    </div>
  );
}