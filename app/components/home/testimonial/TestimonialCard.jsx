"use client";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa"; // Clean vector quote icon from react-icons

export default function TestimonialCard({ review }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="flex flex-shrink-0 w-[var(--slide-width,300px)] flex-col justify-between gap-8 rounded-3xl border border-orange-100/30 bg-orange-50/50 p-6 shadow-sm select-none sm:w-[380px] sm:gap-12 sm:p-8 md:w-[420px] md:p-10"
    >
      {/* Testimonial Quote Message Text */}
      <p className="text-base sm:text-lg leading-relaxed text-orange-950/80 font-medium">
        "{review.quote}"
      </p>

      {/* User Information Profile Block & Accent Quote Icon */}
      <div className="flex items-center justify-between gap-4 border-t border-orange-950/5 pt-6">
        <div className="flex items-center gap-4">
          <img
            src={review.avatar}
            alt={`${review.name}, ${review.role}`}
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-white shadow-sm pointer-events-none"
          />
          <div className="flex flex-col">
            <h3 className="font-serif text-base sm:text-lg font-bold tracking-wide text-orange-950 uppercase">
              {review.name}
            </h3>
            <p className="text-xs font-bold tracking-wider text-orange-600 uppercase mt-0.5">
              {review.role}
            </p>
          </div>
        </div>

        {/* Giant Dynamic Layout Styled Quote Mark */}
        <FaQuoteRight className="h-8 w-8 sm:h-10 sm:w-10 text-orange-950/10 flex-shrink-0" />
      </div>
    </motion.div>
  );
}