// travelpackages/PackageGrid.jsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHeader from './SectionHeader';
import PackageCard from './PackageCard';
import { travelPackages } from './packageData';

export default function PackageGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.package-card-wrapper');
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.4
      }
    );
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20 px-4 flex flex-col">
      <div className="max-w-7xl mx-auto w-full">
        {/* Render Header */}
        <SectionHeader />

        {/* Responsive Flex/Grid Layout */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-6 lg:px-8 mt-4"
        >
          {travelPackages.map((pkg) => (
            <div key={pkg.id} className="package-card-wrapper">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}