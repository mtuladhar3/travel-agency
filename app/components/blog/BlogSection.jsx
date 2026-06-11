"use client";

import React from 'react';
import BlogHeader from './BlogHeader';
import FeaturedPost from './FeaturedPost';
import SecondaryPost from './SecondaryPost';
import SidebarList from './SidebarList';

export default function BlogSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 selection:bg-orange-100">
      <div className="max-w-7xl mx-auto font-sans">

      {/* Section Title */}
      <BlogHeader />

      {/* Main Structural Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[70%_30%] gap-6 md:gap-8 lg:gap-10 items-start mt-10">
        
        {/* Left Side: Dynamic Two-Post Vertical Stack */}
        <div className="flex flex-col gap-8">
          <FeaturedPost />
          <SecondaryPost />
        </div>

        {/* Right Side: Sidebar Aggregator */}
        <div className="h-full">
          <SidebarList />
        </div>
      </div>

      {/* Center-Aligned Footer Link */}
      <div className="text-center mt-20 flex flex-col items-center gap-4">
        <p className="text-xs tracking-wider uppercase font-bold text-gray-500">
          Continue your adventure through our blog.
        </p>
        <a 
          href="#" 
          className="inline-flex items-center gap-1.5 text-base font-extrabold text-[#0B3558] hover:text-orange-500 transition-colors group border-b-2 border-transparent group-hover:border-orange-500 pb-1"
        >
          All Blog Post ➔
        </a>
      </div>
      </div>
    </section>
  );
}