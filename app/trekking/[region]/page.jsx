"use client";
import { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

// Mock database matching the region keys
const TREKS_DATA = {
  annapurna: [
    { id: "annapurna-circuit", title: "Annapurna Circuit Trek", days: 14, alt: "5,416m", difficulty: "strenuous", price: 1250 },
    { id: "abc-expedition", title: "Annapurna Base Camp", days: 9, alt: "4,130m", difficulty: "moderate", price: 890 },
  ],
  everest: [
    { id: "everest-base-camp", title: "Everest Base Camp Trek", days: 12, alt: "5,364m", difficulty: "strenuous", price: 1450 },
  ]
};

export default function RegionHubPage() {
  const { region } = useParams(); // Automatically grabs 'annapurna' or 'everest' from URL
  const router = useRouter();
  const [filter, setFilter] = useState("all");

  const regionalTreks = TREKS_DATA[region] || [];
  const filteredTreks = filter === "all" ? regionalTreks : regionalTreks.filter(t => t.difficulty === filter);

  return (
    <main className="">
    
          <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-24 sm:min-h-[75vh] lg:min-h-screen">
            <Image
              src="/images/about-banner.webp"
              alt="Traveler standing on snowy mountain"
              fill
              priority
              className="object-cover object-center"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />
    
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 sm:pb-24 flex flex-col items-start justify-end gap-4 text-white">
              
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdf5df] text-[#2b1408] text-xs font-semibold tracking-wider uppercase border border-amber-200/30 shadow-sm mb-2">
                <span className="text-[10px]">⚙</span>
                Trekking
                <span className="text-[10px]">⚙</span>
              </div>
    
              <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl text-left">
                We curate raw
                <br />
                Himalayan <span className="italic font-serif font-normal text-white/95">expeditions</span>
              </h1>
              
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/80 font-sans leading-relaxed text-left tracking-wide">
                From handpicked destinations to seamless logistics, our mission is to
                make every journey personal, meaningful, and unforgettable.
              </p>
            </div>
          </section>
          </main>
  );
}