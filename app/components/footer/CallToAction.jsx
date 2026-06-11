"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CallToAction() {
  const containerRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const centerCardRef = useRef(null);

  useGSAP(() => {
    // Reveal animation when component mounts
    gsap.fromTo(centerCardRef.current, 
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(leftImgRef.current,
      { opacity: 0, x: -50, rotation: -25 },
      { opacity: 1, x: 0, rotation: -12, duration: 1.2, delay: 0.2, ease: 'back.out(1.5)' }
    );

    gsap.fromTo(rightImgRef.current,
      { opacity: 0, x: 50, rotation: 25 },
      { opacity: 1, x: 0, rotation: 12, duration: 1.2, delay: 0.3, ease: 'back.out(1.5)' }
    );

    // Subtle floating mouse-move effect over the section
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.015;
      const moveY = (clientY - window.innerHeight / 2) * 0.015;

      gsap.to(leftImgRef.current, { x: moveX * 1.5, y: moveY * 1.5, duration: 0.6, ease: 'power2.out' });
      gsap.to(rightImgRef.current, { x: -moveX * 1.5, y: -moveY * 1.5, duration: 0.6, ease: 'power2.out' });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[500px] md:min-h-[600px] bg-[#022644] rounded-t-[40px] overflow-hidden flex flex-col items-center justify-center px-4 pt-20 pb-32"
    >
      {/* Background Scenic Landscape Image with Deep Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/machu-picchu-bg.jpg" // Replace with your landscape asset
          alt="Mountain landscape"
          fill
          priority
          className="object-cover opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#022644]/80 to-[#022644]" />
      </div>

      {/* Main Dynamic Text Layout */}
      <div className="relative z-10 text-center max-w-4xl w-full select-none mb-4">
        <span className="block italic text-white text-2xl md:text-3xl font-light tracking-wide mb-1 opacity-90">
          Ready to
        </span>
        <h2 className="text-6xl sm:text-8xl md:text-[110px] font-black tracking-tight text-white uppercase leading-none flex flex-wrap justify-center items-center gap-x-6">
          <span>Book</span>
          <span className="text-transparent font-light [-webkit-text-stroke:1px_rgba(255,255,255,0.6)]">&amp;</span>
          <span>Go</span>
        </h2>
      </div>

      {/* Interactive Layout Content Grid */}
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 z-10 mt-[-20px]">
        
        {/* Left Floating Tilted Snapshot Image */}
        <div 
          ref={leftImgRef}
          className="hidden md:block relative w-36 h-36 border-4 border-white/90 rounded-2xl overflow-hidden shadow-2xl bg-gray-700 shrink-0 transform -rotate-12"
        >
          <Image src="/images/snap-left.jpg" alt="Adventure snap" fill className="object-cover" />
        </div>

        {/* Central Dark Booking Card Pod */}
        <div 
          ref={centerCardRef}
          className="w-full max-w-sm bg-[#053359]/90 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center flex flex-col items-center justify-center"
        >
          <p className="text-gray-300/90 text-sm font-medium mb-5 tracking-wide">
            Lock in your next adventure.
          </p>

          <button type="button" className="flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 pl-6 pr-2 rounded-full w-full max-w-[240px] shadow-lg shadow-orange-500/20 transition-all duration-300 group">
            <span className="text-sm tracking-wide">Book Your Tour</span>
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#022644] transform transition-transform duration-300 group-hover:translate-x-1">
              ➔
            </span>
          </button>

          <a 
            href="tel:+80045678901" 
            className="flex items-center gap-2 text-white/90 hover:text-orange-500 font-semibold text-sm mt-6 transition-colors duration-200"
          >
            <span className="text-xs text-orange-500">📞</span>
            <span className="italic font-light text-gray-300">Talk to Us</span> +800 45 6789 01
          </a>
        </div>

        {/* Right Floating Tilted Snapshot Image */}
        <div 
          ref={rightImgRef}
          className="hidden md:block relative w-36 h-36 border-4 border-white/90 rounded-2xl overflow-hidden shadow-2xl bg-gray-700 shrink-0 transform rotate-12"
        >
          <Image src="/images/snap-right.jpg" alt="Destination snap" fill className="object-cover" />
        </div>

      </div>
    </div>
  );
}