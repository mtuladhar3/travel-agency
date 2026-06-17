"use client";
import { motion } from "framer-motion";
import { navItems } from "../../navbar/navItems";
import SectionHeader from "./SectionHeader";
import DestinationCard from "./DestinationCard";

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

export default function TrekkingRegionsGrid() {
  const destinations = getDisplayRegions(trekkingRegions).map((region, index) => ({
    id: index + 1,
    region: region.label,
    trekCount: region.trekCount,
    image: region.popularPackage.image,
    href: region.href,
    gridStyles: GRID_STYLES[index],
  }));

  // Grid wrapper animation logic for sequential children entrances
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Render Title & Counter Subtext */}
        <SectionHeader />

        {/* 
          A clean grid structure matching layout reference image_4a201c.jpg perfectly.
          Utilizes standard 12-column breakpoints to balance different sized items organically. 
        */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {destinations.map((dest, index) => (
            <DestinationCard 
              key={dest.id} 
              destination={dest} 
              index={index} 
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}