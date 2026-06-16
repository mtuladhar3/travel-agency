"use client";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function TestimonialHeader({ onPrev, onNext }) {
  return (
    <div className="flex flex-col gap-6 mb-12 lg:mb-16">
      {/* Tracker Section Badge */}
      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-orange-950/60">
        <span className="h-[2px] w-6 bg-orange-500" />
        Testimonial
      </div>

      {/* Headline & Slider Controls Wrapper */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-orange-950 uppercase leading-[1.1]"
        >
          What Client Say <br /> About Us
        </motion.h2>

        {/* Controller Arrow Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-950/10 bg-white text-orange-950 shadow-sm transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500 active:scale-95"
            aria-label="Previous testimonial"
          >
            <FiArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={onNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-950 text-white shadow-sm transition-all hover:bg-orange-500 active:scale-95"
            aria-label="Next testimonial"
          >
            <FiArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}