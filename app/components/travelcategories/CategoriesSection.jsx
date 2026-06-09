"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CategoryHeader from "./CategoryHeader";
import CategoryCard from "./CategoryCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Sample mock data matching image_4632b7.jpg
const CATEGORIES_DATA = [
  { id: 1, title: "Adventure Lite", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop", count: "25+ Destinations", price: "From $299" },
  { id: 2, title: "Island Vibes", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop", count: "10+ Destinations", price: "From $149" },
  { id: 3, title: "City Breaks", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600&auto=format&fit=crop", count: "32+ Destinations", price: "From $179" },
  { id: 4, title: "Wildlife Trails", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=600&auto=format&fit=crop", count: "18+ Destinations", price: "From $249" },
];

export default function CategoriesSection() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".category-stagger-item",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={mainRef}
      className="relative w-full bg-white pt-16 pb-28 px-4 sm:px-6 md:px-8 overflow-hidden select-none"
    >
      {/* 
        The background container references your local public folder image.
        We use 'backgroundBlendMode: multiply' to blend the dark blue gradient 
        and your mountain silhouette image together cleanly!
      */}
      <div 
        className="absolute top-0 left-0 w-full h-[520px] sm:h-[480px] md:h-[440px] lg:h-[400px] z-0 bg-bottom bg-cover bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(to bottom, #093c60, #0c5385), url('/images/bg-orange.png')",
          backgroundBlendMode: "multiply",
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 55% 96%, 0 88%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10 w-full flex flex-col gap-8 md:gap-12">
        {/* Dynamic header component */}
        <CategoryHeader />

        {/* 1-2-4 Column Responsive Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CATEGORIES_DATA.map((item) => (
            <div key={item.id} className="category-stagger-item opacity-0">
              <CategoryCard 
                title={item.title} 
                image={item.image} 
                count={item.count} 
                price={item.price} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}