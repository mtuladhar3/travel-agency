"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DestinationCard({ destination, index }) {
  const router = useRouter();

  if (!destination) return null;

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
      /* 💡 The click event goes directly onto the physical box layout of the card */
      onClick={() => {
        console.log("Navigating to:", destination.href); // Safely log target URL to dev console
        router.push(destination.href || "/trekking");
      }}
      className={`group relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm cursor-pointer z-10 w-full ${destination.gridStyles || ""}`}
    >
      {/* Image container asset box profile */}
      <div className="w-full h-full min-h-[360px] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          src={destination.image}
          alt={destination.region}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Legibility Vignette Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90 z-10 pointer-events-none" />

      {/* Text Interface Details */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-1 p-6 text-white pointer-events-none">
        <h3 className="text-xl font-bold tracking-wide transition-colors group-hover:text-sky-700 sm:text-2xl">
          {destination.region}
        </h3>
        <p className="text-xs font-light tracking-wide text-neutral-300 opacity-90">
          {destination.trekCount}+ Treks Available
        </p>
      </div>
    </motion.div>
  );
}