"use client";

import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="footer-style-three relative bg-[#0a0a0a] overflow-hidden">
      
      {/* 
        1. Background Image Layer
        Removed opacity restrictions and blend modes so the image is fully visible. 
      */}
      <div 
        className="bg-layer absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url(/images/footer-bg.jpg)' }}
      ></div>
      
      {/* 
        2. Gradient Overlay Layer
        Using the exact linear-gradient you requested, mapped to your black colors.
      */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,#0a0a0a_40%,#0a0a0a1a_100%)]"></div>

      {/* Auto Container (Layout Wrapper) */}
      <div className="auto-container relative z-10 w-full">
        <FooterTop />
        <FooterBottom />
      </div>
      
    </footer>
  );
}