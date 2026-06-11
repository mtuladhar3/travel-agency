// whyus/WhyUsBg.jsx
import React from 'react';

export default function WhyUsBg() {
  return (
    /* Absolute base wrapper (.bg-image) matching your template architecture */
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      
      {/* 1. Background Grid Canvas Line Accent (.bg-shape-1) */}
      <div 
        className="absolute bottom-0 right-0 w-full h-[728px] opacity-80 bg-no-repeat translate-x-1/2"
        style={{ backgroundImage: "url('/images/shape-9.png')" }}
      />

      {/* 2. Floating Bobbing Asset (.bg-shape-2 .float-bob-x) */}
      <div 
        className="absolute left-[3%] top-1/4  bg-no-repeat bg-contain hidden xl:block animate-[floatBobX_4s_ease-in-out_infinite]"
        style={{ backgroundImage: "url('/images/shape-10.png')" }}
      />

      {/* 3. Main Composition Feature Focus Asset (.bg-image-1)
          Forcing explicit layout space (w-full on mobile, exact 45% screen-width on desktop) 
          so it can never collapse or become hidden.
      */}
      <div 
        className="absolute right-0 bottom-0 w-[100%] h-[100%]  bg-no-repeat bg-cover bg-top lg:bg-right-bottom drop-shadow-[-15px_15px_30px_rgba(15,44,89,0.1)]"
        style={{ backgroundImage: "url('/images/chooseus-bg.png')" }}
      />

    </div>
  );
}