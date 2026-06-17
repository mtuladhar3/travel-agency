"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ActivityImageShowcase({ activeImage }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md lg:max-w-none mx-auto">
      {/* Location Breadcrumb Meta string matching top left tag */}
      

      {/* Frame Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt="Selected travel adventure layout reference"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}