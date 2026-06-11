"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BookingCard from './BookingCard';
import FloatingImages from './FloatingImages';
import FooterNav from './FooterNav';
import SubFooter from './SubFooter';

export default function FooterSection() {
  const headingRef = useRef(null);

  useGSAP(() => {
    // Initial entry animations for text
    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <footer className="w-full bg-[#01172a] relative overflow-hidden flex flex-col items-center">
      
      {/* ================= TOP SCENIC CTA AREA ================= */}
      <div className="w-full max-w-7xl mx-auto px-4 relative min-h-[520px] md:min-h-[580px] flex flex-col items-center justify-center pt-16 pb-24">
        
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0 rounded-t-[40px] overflow-hidden">
          <Image 
            src="/images/machu-picchu-bg.jpg" 
            alt="Mountain Landscape" 
            fill 
            priority
            className="object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#01172a]/70 to-[#01172a]" />
        </div>

        {/* Headline Structure */}
        <div ref={headingRef} className="relative z-10 text-center mb-2 select-none">
          <span className="block font-serif italic text-white text-xl md:text-2xl font-light tracking-wide mb-1">
            Ready to
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-[95px] font-black tracking-tight text-white uppercase leading-none flex flex-wrap justify-center items-center gap-x-4">
            <span>Book</span>
            <span className="text-transparent font-light [-webkit-text-stroke:1px_rgba(255,255,255,0.4)] font-sans">&amp;</span>
            <span>Go</span>
          </h2>
        </div>

        {/* Mid elements integration */}
        <FloatingImages side="left" />
        <BookingCard />
        <FloatingImages side="right" />

      </div>

      {/* ================= LOWER NAV & ATTRIBUTION ================= */}
      <div className="w-full bg-[#011120] pb-6 pt-12 border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <FooterNav />
          <SubFooter />
        </div>
      </div>

    </footer>
  );
}