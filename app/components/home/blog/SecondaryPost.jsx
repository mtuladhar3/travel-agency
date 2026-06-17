"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PostBadge from './PostBadge';

export default function SecondaryPost() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-stretch p-4 md:p-6 lg:p-8 bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
    >
      {/* Content Side */}
      <div className="md:col-span-6 order-1 flex flex-col justify-center">
        <div className="mb-4">
          <PostBadge>Private Travel</PostBadge>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0B3558] leading-snug hover:text-orange-500 transition-colors cursor-pointer mb-4">
          How to Travel in Style Without Breaking the Bank
        </h3>

        <div className="inline-flex flex-wrap gap-x-4 gap-y-1 items-center bg-[#F0F4F8] text-gray-500 text-xs px-3 py-1.5 rounded-full w-max mb-5">
          <span>📅 Jul 14, 2025</span>
          <span>✍️ Admin</span>
          <span>💬 13 Cmts</span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Discover affordable ways to enjoy luxury travel – from stylish stays to finding the best deals...
        </p>

        <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0B3558] hover:text-orange-500 transition-colors group">
          Read More 
          <span className="transform transition-transform group-hover:translate-x-1">➔</span>
        </a>
      </div>

      {/* Optimized Image Side */}
      <div className="md:col-span-6 order-2 relative aspect-[4/3] w-full rounded-3xl overflow-hidden group">
        <Image 
          src="/images/timed-cards-3.jpg" 
          alt="Coastal rock formation"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
    </motion.div>
  );
}