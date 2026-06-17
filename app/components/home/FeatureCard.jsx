import React from 'react';

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 group max-w-sm mx-auto">
      {/* Circular Icon Container */}
      <div className="w-20 h-20 bg-[#F4F4F4] rounded-full flex items-center justify-center text-black mb-5 transition-transform duration-300 group-hover:scale-105">
        <Icon size={32} strokeWidth={1.5} className="text-gray-800" />
      </div>
      
      {/* Title */}
      <h3 className="text-black font-bold text-lg mb-2 tracking-tight">
        {title}
      </h3>
      
      {/* Description Line */}
      <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
        {description}
      </p>
    </div>
  );
}