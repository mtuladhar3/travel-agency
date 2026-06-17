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
      <p className="text-base leading-relaxed text-orange-950/75 sm:text-lg">
        With insider knowledge, seamless planning, and exclusive deals, we ensure
        a hassle-free travel experience from start to finish.
      </p>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/about"
          className="inline-flex items-center gap-2.5 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-orange-950 shadow-md shadow-orange-500/20 transition-colors hover:bg-orange-400"
        >
          Explore More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}
