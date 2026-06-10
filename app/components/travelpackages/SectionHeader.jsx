// travelpackages/SectionHeader.jsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SectionHeader() {
  const headerRef = useRef(null);

  useEffect(() => {
  gsap.fromTo(
    headerRef.current.children,
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay: 0.2, 
      ease: "power3.out", 
      stagger: 0.15 
    }
  );
}, []);

  return (
    <div ref={headerRef} className="text-center mb-12 px-4">
      <div className="inline-flex items-center gap-1 text-orange-500 font-medium text-sm sm:text-base uppercase tracking-wider mb-2">
        <span className="text-base">🪂</span> Tour Package
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
        Popular Travel Packages
      </h2>
      <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
        Plan your journey to our most sought-after spots.
      </p>
    </div>
  );
}