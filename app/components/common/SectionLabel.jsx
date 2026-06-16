"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ label, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex items-center gap-2.5 ${className}`}
    >
      <span className="flex flex-col gap-1" aria-hidden="true">
        <span className="h-0.5 w-5 rounded-full bg-orange-500" />
      </span>
      <span className="text-[16px] font-bold uppercase tracking-[0.22em] text-orange-950/70">
        {label}
      </span>
    </motion.div>
  );
}
