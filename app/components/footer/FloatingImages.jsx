"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function FloatingImages({ side }) {
  const imgRef = useRef(null);

  useGSAP(() => {
    // Subtle auto floating loop
    gsap.to(imgRef.current, {
      y: side === 'left' ? -12 : 12,
      duration: side === 'left' ? 3 : 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  if (side === 'left') {
    return (
      <div 
        ref={imgRef}
        className="hidden md:block absolute left-[8%] lg:left-[15%] top-[45%] w-36 h-36 border-4 border-white rounded-2xl overflow-hidden shadow-2xl bg-gray-700 transform -rotate-12 z-10"
      >
        <Image src="/images/snap-left.jpg" alt="Left preview" fill className="object-cover" />
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className="hidden md:block absolute right-[8%] lg:right-[15%] top-[45%] w-36 h-36 border-4 border-white rounded-2xl overflow-hidden shadow-2xl bg-gray-700 transform rotate-12 z-10"
    >
      <Image src="/images/snap-right.jpg" alt="Right preview" fill className="object-cover" />
    </div>
  );
}