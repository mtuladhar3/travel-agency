"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SectionHeader from "./SectionHeader";
import CarouselTrack from "./CarouselTrack";
import CarouselPagination from "./CarouselPagination";

export default function ExplorerSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Total visible "steps" on mobile. On desktop, they fit all at once.
  const totalDots = 6; 

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-header", {
        opacity: 0,
        y: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".animate-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle dot clicks to smoothly scroll the track
  const handleDotClick = (index) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    
    // Calculate position based on scrollable width divided by items
    const maxScroll = track.scrollWidth - track.clientWidth;
    const scrollToX = (maxScroll / (totalDots - 1)) * index;

    track.scrollTo({
      left: scrollToX,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-16 px-4 md:px-8 lg:px-16 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeader />
        <CarouselTrack 
          trackRef={trackRef} 
          setActiveIndex={setActiveIndex} 
          totalDots={totalDots} 
        />
        <CarouselPagination 
          activeIndex={activeIndex} 
          totalDots={totalDots} 
          onDotClick={handleDotClick}
        />
      </div>
    </section>
  );
}