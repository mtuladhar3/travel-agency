"use client";

import { motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SectionHeading({ title, className = "", align = "left" }) {
  // Normalize title into an array of lines to keep animations working smoothly
  const lines = Array.isArray(title) ? title : [title];

  return (
    <h2
      className={`section-heading w-full text-balance text-4xl sm:text-5xl md:text-6xl text-[#0f2a22] font-semibold tracking-tight leading-[1.1] ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={lineVariants}
          className="block w-full"
        >
          {line}
        </motion.span>
      ))}
    </h2>
  );
}