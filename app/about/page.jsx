"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap"; // Added missing GSAP import
import { FaLeaf } from 'react-icons/fa'; 
import { FiHeart, FiUsers } from 'react-icons/fi'; 
import { BiMapAlt } from 'react-icons/bi'; 

const teamMembers = [
  {
    id: 1,
    name: "Kaspars",
    fullName: "Kaspars Ozolins",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", 
    bio: "I started this journey with a single goal: to blend adventure with community. Planning surf camps isn't just a business for me; it's a lifestyle we love sharing.",
  },
  {
    id: 2,
    name: "Christina",
    fullName: "Christina Lee",
    role: "SMM guru",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "I'm basically living my dream job – I get to hang out at the beach all day, meet amazing people from all over the world, and tell their stories through photos and videos.\n\nBut what I love most is capturing that exact moment when someone stands up on a wave for the first time – the pure joy on their face is unreal. I also run our Instagram and make sure our community stays connected, so don't be shy to tag us in your posts!",
  },
  {
    id: 3,
    name: "Noah",
    fullName: "Noah Silva",
    role: "Sales Manager",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    bio: "Connecting people to their ultimate surfing experiences is what drives me. If you have a question about booking or packages, I'm your guy!",
  },
   {
    id: 4,
    name: "Kaspars",
    fullName: "Kaspars Ozolins",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", 
    bio: "I started this journey with a single goal: to blend adventure with community. Planning surf camps isn't just a business for me; it's a lifestyle we love sharing.",
  },
  {
    id: 5,
    name: "Christina",
    fullName: "Christina Lee",
    role: "SMM guru",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "I'm basically living my dream job – I get to hang out at the beach all day, meet amazing people from all over the world, and tell their stories through photos and videos.\n\nBut what I love most is capturing that exact moment when someone stands up on a wave for the first time – the pure joy on their face is unreal. I also run our Instagram and make sure our community stays connected, so don't be shy to tag us in your posts!",
  },
];

export default function AboutPage() {
  const [activeCard, setActiveCard] = useState(null);
  const infoRefs = useRef({});
  const sliderRef = useRef(null); // Ref for the horizontal slider scroll container

  const aboutLinks = [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Meet the Team", href: "/about/team" },
    { label: "Why Choose Us", href: "/about/why-us" },
    { label: "Responsible Travel", href: "/about/responsible-travel" },
    { label: "Our Guides", href: "/about/guides" },
    { label: "Licenses & Certifications", href: "/about/certifications" },
    { label: "Press & Media", href: "/about/press" },
  ];

  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "100+", label: "Popular Destinations" },
    { value: "5★", label: "Reviews" },
    { value: "50+", label: "Expert Team Members" },
  ];

  const cards = [
    {
      icon: <FaLeaf className="w-8 h-8 text-[#14342b]" />, 
      title: "Honor Stewardship",
      description: "Protect wildlife and habitats while traveling light; each journey weighs its influence on water use, waste creation, and ecological balance."
    },
    {
      icon: <FiUsers className="w-8 h-8 text-[#14342b]" />,
      title: "Honor Culture",
      description: "Listen with intention and uplift artisans; we learn from skilled makers and stand beside community enterprises, offering steady, respectful support."
    },
    {
      icon: <BiMapAlt className="w-8 h-8 text-[#14342b]" />,
      title: "Go Slow",
      description: "Choose fewer stops for deeper ties; reduced distance invites slower moments where meaning grows through longer, thoughtful stays in every community."
    },
    {
      icon: <FiHeart className="w-8 h-8 text-[#14342b]" />,
      title: "Care for People",
      description: "Ensure fair pay and care for guides; teams thrive when safety, respect, and balanced work define a journey that values every person involved."
    }
  ];

  // GSAP Toggle Animation with safe delay context to allow mounting
  const handleToggle = (id) => {
    const isOpening = activeCard !== id;
    
    if (isOpening) {
      setActiveCard(id);
      // Let React complete DOM placement, then animate
      setTimeout(() => {
        const infoPanel = infoRefs.current[id];
        if (infoPanel) {
          gsap.fromTo(
            infoPanel,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
          );
        }
      }, 50);
    } else {
      const infoPanel = infoRefs.current[id];
      if (infoPanel) {
        gsap.to(infoPanel, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => setActiveCard(null),
        });
      } else {
        setActiveCard(null);
      }
    }
  };

  // Slider Navigation Logic (smooth scroll left / right)
  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth;
      const scrollAmount = direction === "next" ? cardWidth : -cardWidth;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
            About Us
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

      {/* --- MISSION STATEMENT SECTION --- */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 font-sans text-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#0f2a22] leading-tight">
              Our mission to create <br />
              <span className="italic text-sky-700 font-normal">unforgettable journeys</span>
            </h2>
          </div>
          <div className="space-y-6 text-slate-600 text-base md:text-lg max-w-xl">
            <p>
              Our mission is to create unforgettable journeys by designing meaningful 
              travel experiences that inspire, connect, and leave lasting memories.
            </p>
            <p>
              Every trip is carefully crafted with attention to detail, comfort, and 
              authenticity—so each journey feels personal, seamless, and truly memorable.
            </p>
          </div>
        </div>

        {/* --- STATS SECTION --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left border-b border-slate-100 pb-16 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-sky-700">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-500 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* --- IMAGE GALLERY --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/timed-cards-5.jpg" 
              alt="Happy travelers with coconut"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[1/1] w-full rounded-2xl overflow-hidden shadow-sm md:translate-y-12">
            <Image
              src="/images/timed-cards-3.jpg" 
              alt="Aerial view of beach shore"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm md:translate-y-4">
            <Image
              src="/images/timed-cards-4.jpg" 
              alt="Grandfather and child traveling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION & FLOATING CARDS --- */}
      <section className="relative w-full bg-[#f4f1ea]">
        
        <div className="relative h-[550px] md:h-[600px] w-full flex flex-col items-center justify-start text-center pt-16 md:pt-24 px-4 overflow-hidden">
          {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white  via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f1ea] via-[#f4f1ea]/5 to-transparent z-20 pointer-events-none" /> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.65] contrast-[0.8] z-0"
          >
            <source src="/videos/bg-video5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center space-y-3">
            {/* Centered Accent line adaptation */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white uppercase">
              <span className="w-4 h-[2px] bg-white"></span>
              Our Manifesto
              <span className="w-4 h-[2px] bg-white"></span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15]">
              Our Mission: Travel, <br className="hidden md:inline" />
              <span className="italic font-normal text-white">Thoughtfully.</span>
            </h2>
            
            <p className="text-sm md:text-base text-white/90 font-sans max-w-xl mx-auto leading-relaxed pt-2">
              We design journeys that honor place and people—small groups, expert 
              local guides, unhurried days, and deep respect for the wild.
            </p>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 md:-mt-48 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-start items-start text-left space-y-5"
              >
                <div className="p-1 rounded-lg">{card.icon}</div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-[#14342b] tracking-tight">{card.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LINKS NAVIGATION BAR --- */}
      {/* <section className="mx-auto max-w-[1200px] px-4 pb-24 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aboutLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#FF4E25] hover:text-[#FF4E25]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section> */}

      {/* --- MEET THE TEAM SLIDER SECTION --- */}
      <section className="w-full bg-[#fcfcfc] py-20 px-6 md:px-16 text-[#0f2a22] font-sans overflow-hidden">
        
        {/* --- DYNAMIC HEADER DESIGN SECTION --- */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            {/* Minimal tag line with left accent line */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#bd7a5c] uppercase">
              <span className="w-6 h-[2px] bg-[#bd7a5c]"></span>
              Meet the team
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2a22] tracking-tight leading-[1.1]">
              The ones who planned <br />
              a surf camp, <span className="italic text-sky-700 font-normal">not a photoshoot</span>
            </h2>
          </div>
          
          {/* Exact Rounded Arrow Navigation Layout Reference */}
          <div className="flex gap-3 self-end md:self-auto pb-1">
            <button 
              onClick={() => handleScroll("prev")}
              className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:bg-neutral-50 transition-all active:scale-95 shadow-sm z-30"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => handleScroll("next")}
              className="w-12 h-12 rounded-full bg-[#2b1408] flex items-center justify-center text-white hover:bg-[#3d1e0d] transition-all active:scale-95 shadow-sm z-30"
            >
              <span className="sr-only">Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- TRUE HORIZONTAL TRACK SLIDER (Works on Mobile & Desktop) --- */}
        <div className="max-w-7xl mx-auto relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {teamMembers.map((member) => {
              const isOpen = activeCard === member.id;

              return (
                <div
                  key={member.id}
                  className="relative min-w-[85vw] sm:min-w-[45vw] md:min-w-[31%] lg:min-w-[31.8%] snap-start aspect-[3/4] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-sm bg-neutral-900 flex-shrink-0"
                >
                  {/* Background Image Layer */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isOpen ? "scale-110 blur-xl opacity-30" : "scale-100 blur-0 opacity-100"
                    }`}
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Dark tint on Active States */}
                  <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} />

                  {/* Card Context Headers */}
                  <div className="absolute top-6 inset-x-6 flex justify-between items-center z-10">
                    <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium tracking-wide">
                      {member.name}
                    </span>

                    <button
                      onClick={() => handleToggle(member.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md text-white transition-all duration-300 transform border border-white/10 ${
                        isOpen ? "bg-white/30" : "bg-white/20 hover:scale-105"
                      }`}
                    >
                      {isOpen ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Description Body Wrap */}
                  <div className="absolute inset-x-6 bottom-6 z-10 text-white flex flex-col h-[calc(100%-6rem)] justify-end">
                    {!isOpen ? (
                      <div className="self-end px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium tracking-wide">
                        {member.role}
                      </div>
                    ) : (
                      <div
                        ref={(el) => (infoRefs.current[member.id] = el)}
                        className="flex flex-col h-full justify-between pt-8 text-left"
                      >
                        <div className="mt-8 overflow-y-auto pr-1 max-h-[80%] custom-scrollbar">
                          <h3 className="text-3xl font-normal mb-2">{member.fullName}</h3>
                          <p className="text-white/90 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                            {member.bio}
                          </p>
                        </div>

                        <div className="self-end px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium tracking-wide">
                          {member.role}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}