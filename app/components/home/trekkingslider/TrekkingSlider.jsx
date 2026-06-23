"use client";

import { useRef, useEffect } from "react";
// 💡 Step 1: Import useParams from next/navigation to safely detect the current active region route context
import { useParams } from "next/navigation"; 
import SectionHeader from "./SliderHeader";
import PackageCard from "./PackageCard";
import { trekkingSliderPackages } from "./trekkingSliderData";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely for Next.js environments
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

export default function TrekkingRegionGrid() {
  const gridRef = useRef(null);
  
  // 💡 Step 2: Grab the region parameter from the active routing slug context (e.g., "everest")
  const { region } = useParams();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Direct stagger fade/slide configuration tracking card elements within viewport
      gsap.fromTo(
        ".tour-card-item",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%", // Commences animation routine as container crosses 75% depth mark
            toggleActions: "play none none none",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={gridRef}
      className="w-full overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {trekkingSliderPackages.slice(0, 3).map((packageItem) => {
            // 💡 Step 3: Extract the trailing route identifier phrase string segment
            const trekSlug = packageItem.href.split("/").pop();
            
            // 💡 Step 4: Combine into your targeted folder structure pattern: trekking/[region]/[trekSlug]
            const preciseTrekUrl = `/trekking/${region}/${trekSlug}`;

            return (
              /* Added the required target selector class so GSAP's stagger routine fires beautifully */
              <div key={packageItem.id} className="tour-card-item">
                <PackageCard 
                  tour={packageItem} 
                  regionHref={preciseTrekUrl} // 💡 Forwarding your precise sub-route parameter link path
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}