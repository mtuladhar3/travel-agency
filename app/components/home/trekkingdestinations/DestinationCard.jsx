"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DestinationCard({ destination, index }) {
  // Animation variants for cascading card entry
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm ${destination.gridStyles}`}
    >
      <Link
        href={destination.href ?? "#"}
        className="absolute inset-0 z-20"
        aria-label={`${destination.region}, ${destination.trekCount}+ treks available`}
      />
      {/* Background Image Container */}
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          src={destination.image}
          alt={destination.region}
          className="w-full h-full object-cover transform transition-transform"
        />
      </div>

      {/* Dark Text Legibility Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />

      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-1 p-6 text-white">
        <h3 className="text-xl font-bold tracking-wide transition-colors group-hover:text-orange-400 sm:text-2xl">
          {destination.region}
        </h3>
        <p className="text-xs font-light tracking-wide text-neutral-300 opacity-90">
          {destination.trekCount}+ Treks Available
        </p>
      </div>
    </motion.div>
  );
}