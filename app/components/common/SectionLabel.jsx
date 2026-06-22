"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ label, className = "", centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#bd7a5c] uppercase ${className}`}
    >
      {/* Left accent bar */}
      <span className="h-[2px] w-6 shrink-0 bg-[#bd7a5c]" aria-hidden="true" />
      
      <span>{label}</span>
      
      {/* Right accent bar (only visible if header is centered) */}
      {centered && (
        <span className="h-[2px] w-6 shrink-0 bg-[#bd7a5c]" aria-hidden="true" />
      )}
    </motion.div>
  );
}