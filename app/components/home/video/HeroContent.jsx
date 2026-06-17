"use client";
import { motion } from "framer-motion";
import { FiPlayCircle, FiArrowUpRight } from "react-icons/fi";

export default function HeroContent() {
  return (
    <div className="relative w-full max-w-5xl mx-auto text-white z-10 flex flex-col items-start gap-6 sm:gap-8">
      
      {/* Brand Subheader */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-orange-400"
      >
        <span className="h-[2px] w-8 bg-orange-500" />
        Live The Adventure
      </motion.div>

      {/* Massive Editorial Header Layout */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-wide uppercase leading-[1.05]"
      >
        Uncover Extreme <br />
        Trekking Peaks
      </motion.h1>

      {/* Description & Action Button Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4"
      >
        <p className="max-w-md text-sm sm:text-base leading-relaxed text-neutral-200/90 font-medium">
          Experience breathtaking heights, custom route guiding maps, and professional safety management over the world's most pristine alpine formations.
        </p>

        {/* Call to Actions Layout */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Main Button */}
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-orange-600/20 transition-colors hover:bg-orange-600"
          >
            Book Expedition
            <FiArrowUpRight className="h-4 w-4" />
          </motion.button>

          {/* Secondary Video Trigger Icon Button */}
          <motion.button 
            whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(255,255,255,0.5)" }}
            className="inline-flex items-center gap-2.5 px-4 py-3 text-sm font-medium tracking-wide text-white/90 hover:text-white"
          >
            <FiPlayCircle className="h-6 w-6 text-orange-400" />
            Watch Trailer
          </motion.button>
        </div>
      </motion.div>

    </div>
  );
}