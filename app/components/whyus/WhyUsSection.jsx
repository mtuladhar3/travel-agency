// whyus/WhyUsSection.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WhyUsHeader from './WhyUsHeader';
import FeatureBox from './FeatureBox';
import StatBox from './StatBox';
import WhyUsMedia from './WhyUsMedia';
import { featuresData, statsData } from '../../data/whyUsData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyUsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Reveal Section Header
      gsap.fromTo('.whyus-header > *',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.whyus-header',
            start: 'top 85%',
          }
        }
      );

      // 2. Cascade Card Element Grid Animations
      gsap.fromTo('.whyus-animate-card',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.whyus-trigger-grid',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-16 sm:py-24 overflow-hidden bg-[#fafafa] w-full min-h-[650px] flex items-center select-none"
    >
      {/* Floating animation keyframe setup for template behavior */}
      <style jsx global>{`
        @keyframes floatBobX {
          0% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
          100% { transform: translateX(0px); }
        }
      `}</style>
<WhyUsMedia />

      {/* --- FOREGROUND CONTENT SYSTEM CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 relative z-10 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Columns - Content Text Blocks & Dynamic Metrics Grid */}
          <div className="lg:col-span-7 flex flex-col whyus-trigger-grid w-full">
            <WhyUsHeader />

            {/* Top Row: Service Block Features (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 w-full">
              {featuresData.map((item) => (
                <FeatureBox key={item.id} data={item} />
              ))}
            </div>

            {/* Bottom Row: Numerical Analytics Counters (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {statsData.map((item) => (
                <StatBox key={item.id} data={item} />
              ))}
            </div>
          </div>

          {/* Right Columns Spacer Layout Block - Keeps foreground text separated from backgrounds */}
          <div className="lg:col-span-5 h-full hidden lg:block pointer-events-none" />

        </div>
      </div>
    </section>
  );
}