"use client";

import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";

export default function SliderHeader({ onPrev, onNext }) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeader
        layout="editorial"
        className="mb-0 flex-1"
        label="Popular Treks"
        title={<>Popular <span className="italic font-serif font-normal text-orange-500">Destination </span></>}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex shrink-0 items-center gap-3 self-end lg:self-auto"
      >
        <button
          onClick={onPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-950/10 bg-white text-orange-950 shadow-sm transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white active:scale-95"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-950 text-white shadow-sm transition-all hover:bg-orange-500 active:scale-95"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
}
