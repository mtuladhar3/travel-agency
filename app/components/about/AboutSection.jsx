"use client";

import Link from "next/link";
import Image from "next/image";
import { Bike, Compass, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full max-w-full bg-white py-12 sm:py-20 relative overflow-hidden">
      
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[#F8F9FA] rounded-r-[48px] pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1.4fr] items-center gap-12 lg:gap-24">
          
          <div className="bg-[#F8F9FA] lg:bg-transparent rounded-4xl lg:rounded-none p-8 sm:p-12 lg:p-0 flex flex-col justify-center text-left lg:max-w-md">
            
            <span className="text-[#FF4E25] text-[10px] font-extrabold uppercase tracking-widest mb-4 block">
              Last's Go Together
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-[#0F2220] font-bold leading-[1.15] mb-5 tracking-tight">
              Travel smarter <br />
              and safer with us
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Since our journey began, we've inspired countless travelers explore breath taking destinations.
            </p>

            <div className="space-y-6 mb-10">
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center bg-white text-gray-400 shadow-sm shrink-0">
                  <Bike className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-gray-800 mb-0.5">
                    Bike Adventures
                  </h4>
                  <p className="text-xs text-gray-400 max-w-xs leading-normal">
                    Join unforgettable festivals concerts local celebrations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center bg-white text-gray-400 shadow-sm shrink-0">
                  <Compass className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-bold text-gray-800 mb-0.5">
                    Outdoor Camping
                  </h4>
                  <p className="text-xs text-gray-400 max-w-xs leading-normal">
                    Join unforgettable festivals concerts local celebrations.
                  </p>
                </div>
              </div>

            </div>

            <div>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-[#FF4E25] hover:bg-[#e23b14] text-white text-xs font-bold px-6 py-3.5 rounded-full shadow-md shadow-orange-500/10 transition-colors"
              >
                <span>More About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            
            <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-[40px] overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?w=800&q=80"
                alt="Tram city journey route"
                fill
                sizes="(max-width: 1024px) 50vw, 45vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-[40px] overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="Relaxing holiday hammock beach views"
                fill
                sizes="(max-width: 1024px) 50vw, 45vw"
                className="object-cover"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}