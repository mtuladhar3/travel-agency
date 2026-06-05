import React from 'react';

// Define the configuration options for our header
interface HeaderProps {
  layoutOption: 1 | 2 | 3 | 4 | 5;
}

export function MainHeader({ layoutOption }: HeaderProps) {
  // Option 1 Styles: Transparent Minimalist (Inspired by image_a902de.png)
  if (layoutOption === 1) {
    return (
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold shadow-xs">✈</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-950">GlobeTrek</span>
              <span className="text-[10px] text-slate-600 font-medium tracking-wide">Explore new lands</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-800">
            <a href="#" className="text-amber-500">Home ▲</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Tour List</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Destination</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Pages</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Blog</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a>
          </nav>
          <div className="text-sm font-semibold text-slate-800 cursor-pointer hover:text-amber-500 transition-colors">
            👤 Login/Register
          </div>
        </div>
      </header>
    );
  }

  // Option 2 Styles: The Pill Capsule (Inspired by image_a902c8.png & image_a902c5.png)
  if (layoutOption === 2) {
    return (
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white text-lg">✈</div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight">GlobeTrek</span>
              <span className="text-[10px] text-slate-300 font-light tracking-wider">Explore new lands</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-6 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-white shadow-md">
            <a href="#" className="text-amber-400">Home ▲</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Tour List</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Destination</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Pages</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Blog</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a>
          </nav>
          <div className="text-sm font-semibold text-white cursor-pointer hover:text-amber-400 transition-colors">
            👤 Login/Register
          </div>
        </div>
      </header>
    );
  }

  // Option 3 Styles: Wide Soft-Glow Frost Overlay (Inspired by image_a902e4.png & image_a902e1.png)
  if (layoutOption === 3) {
    return (
      <header className="absolute top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md border-b border-white/20 px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-xl">✈</div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-slate-900 tracking-tight">GlobeTrek</span>
              <span className="text-[10px] text-slate-700 font-semibold tracking-wide">Explore new lands</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-900">
            <a href="#" className="text-amber-600">Home ▲</a>
            <a href="#" className="hover:text-amber-600">Tour List</a>
            <a href="#" className="hover:text-amber-600">Destination</a>
            <a href="#" className="hover:text-amber-600">Pages</a>
            <a href="#" className="hover:text-amber-600">Blog</a>
            <a href="#" className="hover:text-amber-600">Contact Us</a>
          </nav>
          <div className="text-sm font-bold text-slate-900 cursor-pointer hover:text-amber-600">
            👤 Login/Register
          </div>
        </div>
      </header>
    );
  }

  // Option 4 Styles: Clean Split (Framed Inner Box)
  if (layoutOption === 4) {
    return (
      <header className="absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-white rounded-2xl shadow-xl px-6 py-4 border border-slate-100">
  <div className="w-full flex justify-between items-center">
    
    <div className="flex items-center gap-2">
      <span className="text-2xl text-amber-500">✈</span>
      <span className="text-lg font-black uppercase tracking-wider text-slate-900">GlobeTrek</span>
    </div>
    
    <nav className="hidden md:flex gap-8 text-xs font-black uppercase tracking-widest text-slate-600">
      <a href="#" className="text-amber-500">Home</a>
      <a href="#" className="hover:text-amber-500">Destinations</a>
      <a href="#" className="hover:text-amber-500">Tours</a>
      <a href="#" className="hover:text-amber-500">About Us</a>
    </nav>
    
    <button className="px-5 py-2.5 bg-slate-950 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-500 transition-colors">
      Book Now
    </button>

  </div>
</header>
    );
  }

  // Option 5 Styles: Dark Gradient Shield (For bright background media blocks)
  if (layoutOption === 5) {
    return (
      <header className="absolute top-0 w-full z-50 bg-linear-to-b from-black/80 via-black/30 to-transparent px-6 pt-6 pb-16 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white text-lg">✈</div>
            <span className="text-xl font-bold tracking-tight">GlobeTrek</span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a href="#" className="text-amber-400 font-bold">Home</a>
            <a href="#" className="hover:text-white transition-colors">Find Tours</a>
            <a href="#" className="hover:text-white transition-colors">Packages</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <button className="px-5 py-2 border border-white/40 hover:border-white rounded-lg text-xs tracking-wider uppercase font-bold transition-colors">
            Member Area
          </button>
        </div>
      </header>
    );
  }

  return null;
}