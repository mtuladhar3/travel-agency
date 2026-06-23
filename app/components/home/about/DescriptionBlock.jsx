"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DescriptionBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      className="flex max-w-md flex-col items-start gap-6 lg:gap-8"
    >
      <p className="text-base leading-relaxed text-blue-950/75 sm:text-lg">
        With insider knowledge, seamless planning, and exclusive deals, we ensure
        a hassle-free travel experience from start to finish.
      </p>

       <button className="group flex items-center gap-3 bg-black hover:bg-neutral-800 transition-all duration-300 text-white rounded-full pl-6 pr-2 py-2 text-sm font-semibold shadow-md">
          Read More
          <div className="flex items-center justify-center bg-white text-black w-8 h-8 rounded-full transition-transform duration-300 group-hover:rotate-45">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </button>
    </motion.div>
  );
}
