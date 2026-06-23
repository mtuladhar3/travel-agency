"use client";

import React from 'react';
import gsap from 'gsap';

export default function FooterBottom() {
  const scrollToTop = (e) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: 0, duration: 0.8, ease: 'power3.inOut' });
  };

  const navLinks = [
    { label: 'Tour Packages', href: '/tour' },
    { label: 'Destinations', href: '/destination-1' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: "Faq's", href: '/faq' },
    { label: 'Testimonials', href: '/index-3' },
    { label: 'Terms & Conditions', href: '/index-3' },
  ];

  return (
    <div className="w-full relative z-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Footer Menu */}
      <ul className="footer-menu flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 mb-10 border-b border-white/10 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8\">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="text-gray-400 hover:text-sky-700 text-sm font-medium transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Bottom Inner (3-column responsive layout) */}
      <div className="bottom-inner flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        
        {/* Left: Language Box */}
        <div className="language-box flex items-center gap-2 bg-[#171717] border border-white/5 rounded-full px-4 py-2 cursor-pointer w-max order-2 md:order-1 hover:border-white/20 transition-colors">
          <span className="text-sm text-gray-400">🇺🇸</span>
          <span className="text-xs text-gray-400 font-medium">Lang: <span className="text-white ml-1">En</span></span>
          <span className="text-[10px] text-sky-700 ml-1">▼</span>
        </div>

        {/* Center: Copyright & Socials */}
        <div className="copyright flex flex-col items-center gap-4 order-3 md:order-2">
          <p className="text-xs text-gray-500 font-medium">
            Copyrights © <a href="/index-3" className="text-sky-700 hover:underline">Travel-Agency</a> 2026, All rights reserved.
          </p>
          <ul className="social-box flex items-center gap-6">
            {['In', 'Tw', 'Yt', 'Fb'].map((icon, idx) => (
              <li key={idx}>
                <a href="/index-3" className="text-gray-500 hover:text-sky-700 text-sm transition-colors font-bold">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Scroll to Target */}
        <a 
          href="#top" 
          onClick={scrollToTop}
          className="scroll-to-target flex items-center gap-2 bg-[#171717] hover:bg-sky-700 text-white border border-white/5 rounded-full px-4 py-2 transition-all duration-300 group order-1 md:order-3 w-max"
        >
          <span className="text-xs font-medium">Back to Top</span>
          <span className="w-4 h-4 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-sky-700 flex items-center justify-center text-[10px] transform -rotate-90 transition-all">
            ➔
          </span>
        </a>

      </div>
    </div>
  );
}