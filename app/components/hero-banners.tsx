'use client';
import React, { useState } from 'react';

interface HeroProps {
  layoutOption: 1 | 2 | 3 | 4;
}

// Sample background data for the sliding variations
const SLIDE_DATA = [
  {
    tagline: "Explore The World",
    title: "NATURE",
    description: "Embark on a new adventure and discover hidden wonders.",
    bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
  },
  {
    tagline: "Explore Vietnam",
    title: "DESERT DUNES",
    description: "Escape the hustle and bustle, enjoy the perfect vacation.",
    bgImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=80"
  },
  {
    tagline: "Discover Hidden Gems",
    title: "WILD MOUNTAINS",
    description: "Raw, unfiltered multi-day expeditions through the backcountry.",
    bgImage: "https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?auto=format&fit=crop&w=1920&q=80"
  }
];

export function MainHero({ layoutOption }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDE_DATA.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);
  };

  // --- REUSABLE SUB-COMPONENTS TO MATCH YOUR IMAGES ---
  
  // Floating Search Bar Layout
  const SearchBar = ({ darkVariant = false }: { darkVariant?: boolean }) => (
    <div className={`w-full max-w-5xl mx-auto rounded-2xl p-4 flex flex-wrap lg:flex-nowrap gap-4 items-center shadow-2xl ${darkVariant ? 'bg-black/40 backdrop-blur-md border border-white/10 text-white' : 'bg-white text-slate-800'}`}>
      <div className="flex-1 min-w-[150px] border-r border-slate-200/30 px-2">
        <label className="block text-[10px] uppercase font-black tracking-widest text-amber-500">Location</label>
        <select className="bg-transparent w-full font-bold text-sm mt-1 outline-none appearance-none cursor-pointer"><option>All Locations</option></select>
      </div>
      <div className="flex-1 min-w-[150px] border-r border-slate-200/30 px-2">
        <label className="block text-[10px] uppercase font-black tracking-widest text-amber-500">Tour Type</label>
        <select className="bg-transparent w-full font-bold text-sm mt-1 outline-none appearance-none cursor-pointer"><option>Booking Type</option></select>
      </div>
      <div className="flex-1 min-w-[150px] border-r border-slate-200/30 px-2">
        <label className="block text-[10px] uppercase font-black tracking-widest text-amber-500">Start Date</label>
        <input type="text" placeholder="Date from" className="bg-transparent w-full font-bold text-sm mt-1 outline-none" />
      </div>
      <div className="flex-1 min-w-[150px] px-2">
        <label className="block text-[10px] uppercase font-black tracking-widest text-amber-500">People</label>
        <input type="text" placeholder="Guests 0" className="bg-transparent w-full font-bold text-sm mt-1 outline-none" />
      </div>
      <div className="flex items-center gap-2">
        <button className={`p-3 rounded-xl border ${darkVariant ? 'border-white/20 hover:bg-white/10' : 'border-slate-200 hover:bg-slate-50'}`}>⚙️</button>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold p-3.5 rounded-xl transition shadow-md">🔍</button>
      </div>
    </div>
  );

  // Left Sidebar Social Panel (as seen in image_a7312b.jpg & image_a73143.jpg)
  const LeftSocials = () => (
    <div className="absolute left-8 bottom-8 hidden xl:flex items-center gap-4 z-20 text-white">
      <div className="flex gap-3 text-xs bg-black/20 backdrop-blur-xs px-4 py-2 rounded-full border border-white/10">
        <a href="#" className="hover:text-amber-400">FB</a>
        <a href="#" className="hover:text-amber-400">X</a>
        <a href="#" className="hover:text-amber-400">LN</a>
        <a href="#" className="hover:text-amber-400">IG</a>
      </div>
      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-300">| Follow Us</span>
    </div>
  );

  // Right Side Community Avatars Overlay (as seen in image_a7312b.jpg & image_a73143.jpg)
  const RightAvatars = () => (
    <div className="absolute right-8 bottom-8 hidden xl:flex items-center gap-3 bg-black/20 backdrop-blur-xs p-2 rounded-2xl border border-white/10 z-20">
      <span className="text-xs font-bold text-white pl-2">People love this place</span>
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-900 overflow-hidden"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="" /></div>
        <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-slate-900 overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="" /></div>
        <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-slate-900 text-[10px] font-bold flex items-center justify-center text-white">2k+</div>
      </div>
    </div>
  );

  // Rotating Circular Travel Tag Graphic (as seen in image_a730a9.jpg & image_a73143.jpg)
  const RotatingBadge = ({ positionClass = "absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-30" }) => (
    <div className={positionClass}>
      <div className="relative w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border border-slate-100 animate-spin-[spin_20s_linear_infinite]">
        <span className="absolute font-black text-[7px] tracking-widest text-amber-600 uppercase">Explore • New • Lands • </span>
        <div className="text-xl text-amber-500">↑</div>
      </div>
    </div>
  );


  // --- OPTION 1: ASYMMETRIC GRID MULTI-IMAGE HERO (Inspired by image_a730a9.jpg) ---
  if (layoutOption === 1) {
    return (
      <section className="relative min-h-screen bg-slate-50 pt-32 pb-20 px-6 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Experience <br />amazing <br /><span className="text-amber-500">journeys</span>
            </h1>
            <p className="text-slate-600 font-light text-sm max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar neque non pretium volutpat. Proin finibus dignissim.
            </p>
            <div className="pt-4 hidden sm:block">
              <SearchBar darkVariant={false} />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            <div className="col-span-7 rounded-2xl overflow-hidden h-64 shadow-md"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="" /></div>
            <div className="col-span-5 row-span-2 rounded-2xl overflow-hidden h-[540px] shadow-md"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="" /></div>
            <div className="col-span-7 rounded-2xl overflow-hidden h-64 shadow-md"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80" alt="" /></div>
            <RotatingBadge positionClass="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 z-20" />
          </div>

        </div>
      </section>
    );
  }

  // --- OPTION 2: THE NATURE IMPACT SLIDER (Inspired by image_a730cc.jpg) ---
  if (layoutOption === 2) {
    const current = SLIDE_DATA[currentSlide];
    return (
      <section className="relative h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center text-center px-6 transition-all duration-700">
        <div className="absolute inset-0 z-0 transition-all duration-700 scale-105"><img className="w-full h-full object-cover opacity-60" src={current.bgImage} alt="" /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 z-10" />

        <div className="relative z-20 max-w-5xl space-y-6 mt-12">
          <span className="font-serif italic text-2xl md:text-3xl text-amber-400 block tracking-wide">{current.tagline}</span>
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none select-none">{current.title}</h1>
          <div className="pt-4 max-w-4xl mx-auto"><SearchBar darkVariant={true} /></div>
        </div>

        {/* Left / Right Navigation Triggers */}
        <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/10 hover:bg-white/20 backdrop-blur-xs text-white flex items-center justify-center font-bold z-30 transition">←</button>
        <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black/10 hover:bg-white/20 backdrop-blur-xs text-white flex items-center justify-center font-bold z-30 transition">→</button>

        <LeftSocials />
        <RightAvatars />
      </section>
    );
  }

  // --- OPTION 3: CINEMATIC DUNE CENTRIC SLIDER (Inspired by image_a73143.jpg) ---
  if (layoutOption === 3) {
    const current = SLIDE_DATA[currentSlide];
    return (
      <section className="relative h-[92vh] w-full bg-slate-900 flex items-center justify-center text-center px-6 border-b-12 border-white">
        <div className="absolute inset-0 z-0"><img className="w-full h-full object-cover opacity-70" src={current.bgImage} alt="" /></div>
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 max-w-4xl space-y-4 text-white">
          <span className="font-serif italic text-2xl text-amber-300 block">{current.tagline}</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">{current.description}</h2>
          <div className="pt-6"><SearchBar darkVariant={false} /></div>
        </div>

        <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-xs text-white text-sm flex items-center justify-center z-30 transition">←</button>
        <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-xs text-white text-sm flex items-center justify-center z-30 transition">→</button>

        <LeftSocials />
        <RightAvatars />
        <RotatingBadge positionClass="absolute bottom-[-48px] left-1/2 -translate-x-1/2 z-30" />
      </section>
    );
  }

  // --- OPTION 4: CLEAN CLOUD GAP SPLIT BANNER (Inspired by image_a7312b.jpg) ---
  if (layoutOption === 4) {
    return (
      <section className="relative h-[85vh] w-full bg-slate-800 flex items-center justify-center text-center px-4">
        <div className="absolute inset-0"><img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80" alt="" /></div>
        
        <div className="relative z-20 max-w-3xl space-y-6 text-white mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Discover the world <br />with our tours</h1>
          <p className="text-slate-200 text-sm font-light max-w-md mx-auto">Escape the hustle and bustle, enjoy the perfect vacation.</p>
          <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-lg">Start Exploring</button>
        </div>

        <button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-md text-sm flex items-center justify-center z-30 font-bold">←</button>
        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-md text-sm flex items-center justify-center z-30 font-bold">→</button>

        {/* Separated Clean Search Shelf Base */}
        <div className="absolute bottom-[-32px] left-4 right-4 z-30">
          <SearchBar darkVariant={false} />
        </div>
      </section>
    );
  }

  return null;
}