import React from 'react';

export default function LuxuryAgencyHome() {
  return (
    <div className="min-h-screen bg-neutral-50 text-stone-900 antialiased">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-2xl font-light tracking-[0.3em] uppercase">AURA</span>
          <nav className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-stone-500">
            <a href="#" className="hover:text-stone-900">The Collection</a>
            <a href="#" className="hover:text-stone-900">Bespoke Inquiries</a>
          </nav>
          <button className="text-xs tracking-[0.2em] uppercase border-b border-stone-950 pb-1">
            Join The Club
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs tracking-[.25em] uppercase text-stone-400 block mb-4">Curated Solitude</span>
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-stone-950 leading-tight">
            Travel, redefined by <span className="italic font-normal text-stone-700">stillness.</span>
          </h1>
          <p className="mt-6 text-stone-500 text-sm leading-relaxed max-w-sm">
            We unlock private estates, uncharted island superyachts, and fully staffed villa enclaves.
          </p>
        </div>
        <div className="h-80 bg-stone-200 rounded shadow-sm">
          {/* Visual placeholder */}
          <div className="w-full h-full bg-stone-300 animate-pulse animate-duration-1000" />
        </div>
      </section>
    </div>
  );
}