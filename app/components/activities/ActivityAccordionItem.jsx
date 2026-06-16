"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function ActivityAccordionItem({ item, isActive, onClick }) {
  return (
    <div className="border-b border-neutral-200 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left transition-colors group select-none"
      >
        <div className="flex items-center gap-6 sm:gap-10">
          {/* Static Item Number Indicator */}
          <span className="text-xs font-mono tracking-wider text-neutral-500 sm:text-sm">
            {item.id}
          </span>
          {/* Interactive Title Tag */}
          <h3 className={`text-xl font-bold tracking-wide transition-colors sm:text-2xl ${
            isActive ? "text-orange-500" : "text-neutral-500 group-hover:text-neutral-800"
          }`}>
            {item.title}
          </h3>
        </div>

        {/* Dynamic Rotation Arrow */}
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`rounded-full p-2 ${isActive ? "text-orange-500" : "text-neutral-500 group-hover:text-neutral-900"}`}
        >
          <FiArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.div>
      </button>

      {/* Accordion Smooth Height Expanding Container */}
      <motion.div
        initial={false}
        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pl-12 sm:pl-16 pb-6 pr-4">
          <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}