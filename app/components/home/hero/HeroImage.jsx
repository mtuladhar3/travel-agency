"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroImage() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    const parentSection = containerRef.current?.closest("section");
    if (!parentSection || !bgRef.current || !foregroundRef.current) return;

    let ctx = gsap.context(() => {
      
      // Starts right underneath the fold line
      gsap.set(foregroundRef.current, {
        y: "50vh"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentSection,
          start: "top top",     
          end: "bottom bottom", 
          scrub: 0.3,           
          invalidateOnRefresh: true,
        }
      });

      tl.to(bgRef.current, {
        y: -100,                
        ease: "none"
      }, 0)
      .to(foregroundRef.current, {
        /* FIXED: Instead of stopping perfectly at 0vh (which exposes the tilted corner), 
           we pull it down slightly to bury the transparent gap under the monitor frame. */
        y: 40,               
        ease: "power1.out"      
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      {/* LAYER 1: Mountain Background */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden scale-150"
      >
        <figure className="w-full h-full relative">
          <Image
            alt="Hero Background"
            src="/images/background.webp"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </figure>
      </div>

      {/* Ambient background overlay */}
      <div className="absolute inset-0 h-screen bg-black/10 z-10 pointer-events-none" />

      {/* LAYER 2: Foreground Cutout Trekkers 
          FIXED: Added 'scale-110' to stretch the image slightly past the edge bounds, 
          hiding the transparent wedge caused by the crooked hill image layer asset. */}
      <div 
        ref={foregroundRef}
        className="absolute bottom-0 left-0 z-20 w-full pointer-events-none origin-bottom will-change-transform scale-140"
      >
        <figure className="w-full relative h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh]">
          <Image
            alt="Hero Foreground"
            src="/images/foreground.webp"
            fill
            priority
            className="object-contain object-bottom"
            sizes="100vw"
          />
        </figure>
      </div>
    </div>
  );
}