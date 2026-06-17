"use client";
import { motion } from "framer-motion";

export default function BlogHeaderSticky() {
  return (
    /* - lg:sticky: Handles pinning the side column during viewport scrolls.
      - self-start: Crucial for sticky elements; prevents the column height from stretching.
    */
    <div className="lg:sticky lg:top-28 self-start flex flex-col gap-5 w-full">
      {/* Editorial Tracker Category Badge */}
      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-orange-950/60">
        <span className="h-[2px] w-6 bg-orange-500" />
        Blog and News
      </div>

      {/* Primary Section Title */}
      <motion.h2 
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-serif text-4xl sm:text-5xl lg:text-[3rem] font-normal tracking-wide text-orange-950 uppercase leading-[1.1] max-w-md"
      >
        Our Update <br />
        Blog and News
      </motion.h2>
    </div>
  );
}