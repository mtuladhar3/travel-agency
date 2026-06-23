"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightCardsRef = useRef([]);
  const elementsRef = useRef([]);

  const [interest, setInterest] = useState("Nature");
  const categories = ["Cities", "Nature", "Adventure", "Honeymoon", "Wildlife"];

  useEffect(() => {
    const leftElements = leftSideRef.current?.children;
    const cards = rightCardsRef.current;

    const ctx = gsap.context(() => {
      // Left Sidebar Entry Stagger
      if (leftElements) {
        gsap.fromTo(
          leftElements,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }

      // Right Contact Cards Stagger Upwards
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-24 sm:min-h-[75vh] lg:min-h-screen">
        <Image
          src="/images/about-banner.webp"
          alt="Traveler standing on snowy mountain"
          fill
          priority
          className="object-cover object-center"
        />
        <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden h-full z-[110]"
      >
        {/* Layer 1: Floating background cloud ribbon */}
        <div 
          className="absolute left-0 bottom-[0px] w-full h-[300px] opacity-100 bg-no-repeat bg-cover bg-top"
          style={{ 
            backgroundImage: "url('/images/full-cloud.png')",
          }}
        />
      </div>
        {/* Dark bottom-heavy gradient vignette overlay to guarantee clear text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />

        {/* Content Container - Placed max-w-7xl, left aligned with padding matching the sections below */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-50 sm:pb-50 flex flex-col items-start justify-end gap-4 text-white">
          
          {/* Top Left Mini floating Pill Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdf5df] text-[#2b1408] text-xs font-semibold tracking-wider uppercase border border-amber-200/30 shadow-sm mb-2">
            <span className="text-[10px]">⚙</span>
            Contact Us
            <span className="text-[10px]">⚙</span>
          </div>

          {/* Left Aligned Main Header Title Layout */}
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl text-left">
            We design intentional
            <br />
            travel <span className="italic font-serif font-normal text-white/95">experiences</span>
          </h1>
          
          {/* Left Aligned Description Paragraph Text */}
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/80 font-sans leading-relaxed text-left tracking-wide">
            From handpicked destinations to seamless logistics, our mission is to
            make every journey personal, meaningful, and unforgettable.
          </p>
        </div>
      </section>

      {/* --- CHANNELS DIRECTORY SECTION --- */}
      <section 
        ref={containerRef}
        className="w-full bg-white text-[#0f2a22] py-16 px-6 md:py-16 md:px-16 font-sans selection:bg-blue-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT SIDEBAR: EDITORIAL HEADLINE & METRICS --- */}
          <div ref={leftSideRef} className="lg:col-span-5 space-y-12">
            <div ref={(el) => (elementsRef.current[0] = el)} className="space-y-4">
              <span className="text-[14px] font-bold tracking-[0.25em] text-sky-600 uppercase block">
                // Get In Touch
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-black tracking-tight leading-[1.1]">
                We're here to <br />
                <span className="italic font-normal text-sky-700">plan your path</span>
              </h2>
              
              <p className="text-neutral-600 text-sm md:text-base max-w-sm leading-relaxed pt-2">
                Questions, quotes, or custom itineraries—reach us directly across any of our channels.
              </p>
            </div>
          </div>

          {/* --- RIGHT SIDEBAR: CLEAN ASYMMETRICAL ROWS --- */}
          <div className="lg:col-span-7 space-y-0 w-full divide-y divide-neutral-200/80 border-b border-neutral-200/80">
            
            {/* Row 1: Voice Call Row */}
            <div 
              ref={(el) => (elementsRef.current[2] = el)}
              className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline group"
            >
              <span className="sm:col-span-3 text-[14px] font-bold tracking-widest group-hover:text-sky-700 text-neutral-400 uppercase flex items-center gap-2">
                <Phone className="w-5 h-5 text-neutral-300 group-hover:text-sky-700 transition-colors" /> Call Us
              </span>
              <div className="sm:col-span-9 space-y-1">
                <a 
                  href="tel:+12345678900" 
                  className="text-xl md:text-2xl font-serif text-black hover:text-sky-700 transition-colors block font-light"
                >
                  +1 (234) 567-8900
                </a>
                <p className="text-xs text-neutral-500 font-light">Mon–Fri 9:00–18:00 · Emergency line active 24/7</p>
              </div>
            </div>

            {/* Row 2: Email Channels */}
            <div 
              ref={(el) => (elementsRef.current[3] = el)}
              className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline group"
            >
              <span className="sm:col-span-3 text-[14px] font-bold tracking-widest group-hover:text-sky-700 text-neutral-400 uppercase flex items-center gap-2">
                <Mail className="w-5 h-5 text-neutral-300 group-hover:text-sky-700 transition-colors" /> Email
              </span>
              <div className="sm:col-span-9 space-y-1">
                <a 
                  href="mailto:info@example.com" 
                  className="text-xl md:text-2xl font-serif text-black hover:text-sky-700 transition-colors block font-light"
                >
                  info@example.com
                </a>
                <p className="text-xs text-neutral-500 font-light">We read and reply to every message within 12 hours.</p>
              </div>
            </div>

            {/* Row 3: Live Instant Support Link */}
            <div 
              ref={(el) => (elementsRef.current[4] = el)}
              className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start group"
            >
              <span className="sm:col-span-3 text-[14px] font-bold group-hover:text-sky-700 tracking-widest text-neutral-400 uppercase flex items-center gap-2 pt-1">
                <MessageCircle className="w-5 h-5 text-neutral-300 group-hover:text-sky-700 transition-colors" /> Support
              </span>
              <div className="sm:col-span-9 space-y-3">
                <p className="text-sm text-neutral-600 font-light max-w-md leading-relaxed">
                  Need immediate planning help? Our team operates a live assistant channel for availability checks and quick travel questions.
                </p>
                <Link 
                  href="https://wa.me/12345678900" 
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs font-bold text-black border-b border-black pb-0.5 hover:text-sky-700 hover:border-sky-700 transition-all uppercase tracking-wider"
                >
                  Open WhatsApp Chat
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Row 4: Asymmetrical Physical Locations Layout */}
            <div 
              ref={(el) => (elementsRef.current[5] = el)}
              className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start group"
            >
              <span className="sm:col-span-3 text-[14px] font-bold group-hover:text-sky-700 tracking-widest text-neutral-400 uppercase flex items-center gap-2 pt-1">
                <MapPin className="w-5 h-5 text-neutral-300 group-hover:text-sky-700 transition-colors" /> Offices
              </span>
              
              <div className="sm:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-1 sm:pt-0">
                {/* Studio 1 */}
                <div className="space-y-2 group/branch">
                  <p className="text-xs font-bold uppercase tracking-wider text-black">London Collective</p>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    21 Baker Street, Marylebone <br /> London W1U 3BN
                  </p>
                  <Link 
                    href="https://maps.google.com" 
                    target="_blank"
                    className="inline-flex items-center gap-0.5 text-[14px] font-medium text-neutral-400 hover:text-black transition-colors"
                  >
                    View Map →
                  </Link>
                </div>

                {/* Studio 2 */}
                <div className="space-y-2 group/branch">
                  <p className="text-xs font-bold uppercase tracking-wider text-black">Singapore Hub</p>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    8 Marina Boulevard, Tower 1 <br /> Singapore 018981
                  </p>
                  <Link 
                    href="https://maps.google.com" 
                    target="_blank"
                    className="inline-flex items-center gap-0.5 text-[14px] font-medium text-neutral-400 hover:text-black transition-colors"
                  >
                    View Map →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- INTEGRATED PREMIUM FORM SECTION (From image_35cf39.jpg with Map Iframe) --- */}
      <section className="w-full bg-[#fcfcfc] pb-24 pt-4 px-6 md:px-16 font-sans">
        <div className="max-w-7xl mx-auto bg-[#141916] text-white rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[650px] shadow-xl">
          
          {/* Left Side: Dynamic Map Frame View */}
          <div className="lg:col-span-5 relative w-full h-[300px] lg:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9078191234907!2d-0.16010062337923707!3d51.514929871816045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acd11956ddf%3A0x6b63f707f1bdbe7a!2sBaker%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141916] via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Right Side: Message Submission Node */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-300 tracking-wide block">Full Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-700/60 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-300 tracking-wide block">Email Address*</label>
                  <input
                    type="email"
                    placeholder="hello@yourbrand.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-700/60 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-300 tracking-wide block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your contact number"
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-700/60 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-300 tracking-wide block">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-700/60 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-neutral-300 tracking-wide block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-4 px-5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-sky-700/60 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-neutral-300 tracking-wide block">I'm Interested In</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const isSelected = interest === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setInterest(cat)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all border ${
                          isSelected
                            ? "bg-white text-black border-white shadow-sm"
                            : "bg-white/5 text-neutral-300 border-white/10 hover:border-white/30"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          isSelected ? "bg-sky-700" : "bg-neutral-600"
                        }`} />
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="bg-white hover:bg-neutral-100 text-black font-semibold text-sm px-8 py-3.5 rounded-full shadow-md transition-all active:scale-95"
                >
                  Send Message
                </button>
                
                <p className="text-[11px] text-neutral-400 flex items-center gap-1.5 pl-1">
                  <span className="text-xs">*</span> 
                  Your information is safe and never shared.
                </p>
              </div>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}