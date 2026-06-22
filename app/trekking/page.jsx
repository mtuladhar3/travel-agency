"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { navItems } from "../components/navbar/navItems";
import { gsap } from "gsap";
// 💡 Step 1: Import the Next.js useRouter hook
import { useRouter } from "next/navigation";
import DestinationCard from "../components/home/trekkingdestinations/DestinationCard";

const GRID_STYLES = [
  "lg:col-span-4 lg:row-span-1 h-[360px]",
  "lg:col-span-3 lg:row-span-1 h-[360px]",
  "lg:col-span-5 lg:row-span-1 h-[360px]",
  "lg:col-span-3 lg:row-span-1 h-[380px]",
  "lg:col-span-6 lg:row-span-1 h-[380px]",
  "lg:col-span-3 lg:row-span-1 h-[380px]",
];

const trekkingRegions =
  navItems.find((item) => item.name === "Trekking")?.regions ?? [];

function getDisplayRegions(regions) {
  const displayRegions = regions.slice(0, 6);
  const annapurnaIndex = displayRegions.findIndex(
    (region) => region.href === "/trekking/annapurna"
  );
  const mustangIndex = displayRegions.findIndex(
    (region) => region.href === "/trekking/mustang"
  );

  if (annapurnaIndex !== -1 && mustangIndex !== -1) {
    [displayRegions[annapurnaIndex], displayRegions[mustangIndex]] = [
      displayRegions[mustangIndex],
      displayRegions[annapurnaIndex],
    ];
  }

  return displayRegions;
}

export default function TrekkingMainPage() {
  const router = useRouter(); // 💡 Step 2: Initialize the page router

  const destinations = getDisplayRegions(trekkingRegions).map((region, index) => ({
    id: index + 1,
    region: region.label,
    trekCount: region.trekCount,
    image: region.popularPackage.image,
    href: region.href,
    gridStyles: GRID_STYLES[index],
  }));

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="">

      <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-24 sm:min-h-[75vh] lg:min-h-screen">
        <Image
          src="/images/about-banner.webp"
          alt="Traveler standing on snowy mountain"
          fill
          priority
          className="object-cover object-center"
        />
        <div 
    className="snow-effect-layer absolute inset-0 z-20 pointer-events-none" 
    style={{ mixBlendMode: 'screen' }} 
  />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 sm:pb-24 flex flex-col items-start justify-end gap-4 text-white">
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdf5df] text-[#2b1408] text-xs font-semibold tracking-wider uppercase border border-amber-200/30 shadow-sm mb-2">
            <span className="text-[10px]">⚙</span>
            Trekking
            <span className="text-[10px]">⚙</span>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl text-left">
            We curate raw
            <br />
            Himalayan <span className="italic font-serif font-normal text-white/95">expeditions</span>
          </h1>
          
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/80 font-sans leading-relaxed text-left tracking-wide">
            From handpicked destinations to seamless logistics, our mission is to
            make every journey personal, meaningful, and unforgettable.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32">
        <div className="mx-auto max-w-7xl">

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6"
          >
            {destinations.map((dest, index) => (
              /* 💡 Step 3: Wrap the card in a div with a click handler to force navigation */
              <div 
                key={dest.id}
                onClick={() => router.push(dest.href)}
                className="cursor-pointer contents" 
              >
                <DestinationCard 
                  destination={dest} 
                  index={index} 
                />
              </div>
            ))}
          </motion.div>

        </div>
      </section>
      
    </main>
  );
}