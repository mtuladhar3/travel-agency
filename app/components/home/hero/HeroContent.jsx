"use client";

import { useEffect, useState, useRef } from "react";

export default function HeroContent() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const parentSection = elementRef.current.closest("section");
      if (!parentSection) return;

      const rect = parentSection.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Uses the exact same scroll modifier as the mountain background to keep them in perfect sync
  const scrollUpOffset = scrollProgress * -150;

  return (
    <div 
      ref={elementRef}
      className="w-full text-center text-white will-change-transform"
      style={{ transform: `translate3d(0px, ${scrollUpOffset}px, 0px)` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold max-w-4xl drop-shadow-lg">
        Experience Nepal's<br />Enchanting Landscapes
      </h1>
      <p className="mt-4 text-sm md:text-base max-w-xl text-gray-200 drop-shadow-md mx-auto">
        Embark on a journey with our seasoned guides, discovering the allure of Nepal's landscapes with expert insights.
      </p>
      <button type="button" className="mt-6 bg-sky-700 hover:bg-sky-700 text-white font-medium px-8 py-3 rounded-md transition-colors pointer-events-auto">
        Enquire Now
      </button>
    </div>
  );
}