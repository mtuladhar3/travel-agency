"use client";

import React from 'react';

const links = ['Tour Packages', 'Destinations', 'About Us', 'Blog', 'Contact Us', "Faq's", 'Testimonials', 'Terms & Conditions'];

export default function FooterNav() {
  return (
    <div className="w-full flex flex-col items-center border-b border-white/5 pb-8">
      
      {/* Brand Identity Logo */}
      <div className="flex items-center gap-2 mb-8 cursor-pointer group">
        <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-[360deg]">
          <span className="text-white text-[10px]">▲</span>
        </div>
        <span className="text-lg sm:text-xl font-black tracking-wider text-white uppercase">
          Aven<span className="text-orange-500">tour</span>
        </span>
      </div>

      {/* Nav Link Bar */}
      <nav className="mb-8 w-full px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
          {links.map((link, idx) => (
            <li key={idx}>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Platforms Row */}
      <div className="flex items-center gap-5">
        {['instagram', 'twitter', 'youtube', 'facebook'].map((platform, i) => (
          <a key={i} href="#" className="w-4 h-4 opacity-40 hover:opacity-100 text-white transition-opacity text-xs capitalize flex items-center justify-center">
            {platform[0]}
          </a>
        ))}
      </div>

    </div>
  );
}