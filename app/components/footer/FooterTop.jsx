"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Link from "next/link";
import { useGSAP } from '@gsap/react';

export default function FooterTop() {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    // Floating animation for the tilted images
    gsap.to(image1Ref.current, { y: -15, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(image2Ref.current, { y: 15, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    
    // Entrance animation for the center booking card
    gsap.fromTo(cardRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center pt-24 pb-12 z-10 px-4">
      
      {/* 1. Giant Background Text (FIXED: z-30 changed to z-0 so it stays behind the card) */}
      <div className="text-center w-full relative z-30">
        <span className="block italic text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2">
          Ready to
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-[100px] lg:text-[130px] font-black uppercase tracking-tighter leading-none flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
          <span className="text-white">Book</span>
          <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.7)]">
            &amp; Go
          </span>
        </h1>
      </div>

      {/* 2. The Content Box (Overlaps the text via negative margin) */}
      <div className="content-box relative w-full max-w-4xl mx-auto flex justify-center mt-[-20px] md:mt-[-30px] lg:mt-[-30px] z-20">
        
        {/* Left Floating Image (image-1) */}
        <figure 
          ref={image1Ref}
          className="hidden md:block absolute left-[5%] top-1/2 -translate-y-1/2 -rotate-[15deg] w-48 h-52 border-[5px] border-white rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-800 z-10"
        >
          <Image src="/images/footer-11.webp" alt="Adventure snap" fill className="object-cover" />
        </figure>

        {/* Center Booking Card (text-box) */}
        <div 
          ref={cardRef}
          className="text-box relative z-30 bg-[#171717] backdrop-blur-md border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] text-center w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-6">
            Lock in your next adventure.
          </p>
          
          <a href="/index-3" className="flex items-center justify-between bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 sm:py-3 pl-4 sm:pl-6 pr-2 rounded-full w-full transition-all duration-300 group shadow-lg shadow-orange-500/20 mb-6">
            <span className="text-xs sm:text-sm md:text-base">Book Your Tour</span>
            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#171717] transform transition-transform group-hover:translate-x-1">
              ➔
            </span>
          </a>

          <div className="phone flex items-center justify-center gap-2 text-white font-semibold text-xs sm:text-sm md:text-base flex-wrap justify-center">
            <span className="text-orange-500 text-lg">📞</span>
            <span className="italic font-light text-gray-400">Talk to Us</span> 
            <a href="tel:+80045678901" className="hover:text-orange-500 transition-colors">
              +800 45 6789 01
            </a>
          </div>
        </div>

        {/* Right Floating Image (image-2) */}
        <figure 
          ref={image2Ref}
          className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2 rotate-[15deg] w-48 h-52 border-[5px] border-white rounded-[2rem] overflow-hidden shadow-2xl bg-neutral-800 z-10"
        >
          <Image src="/images/footer-10.webp" alt="Destination snap" fill className="object-cover" />
        </figure>

      </div>

      {/* 3. Footer Logo */}
      <figure className="footer-logo mt-16 z-20">
        <Link href="/" className="flex items-center gap-3 text-white group flex-shrink-0">
          <div className="flex flex-col items-center justify-center">
            {/* Optimized Next.js Image component replaces the SVG */}
            <Image
              src="/images/logo.png"
              alt="Achieve Treks Logo"
              width={150}
              height={75}
              className="object-contain transition-transform group-hover:-translate-y-0.5 w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
              priority
            />
          </div>
        </Link>
      </figure>

    </div>
  );
}