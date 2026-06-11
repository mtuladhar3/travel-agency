import React from 'react';
import { motion } from 'framer-motion';

export default function BlogHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="flex justify-center items-center gap-1 text-orange-500 font-semibold text-sm mb-2">
        <span>🔥</span> Blog Post
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3558] mb-3">
        Latest From the Blog
      </h2>
      <p className="text-gray-500 text-sm md:text-base font-light">
        Travel planning has never been easier.
      </p>
    </motion.div>
  );
}