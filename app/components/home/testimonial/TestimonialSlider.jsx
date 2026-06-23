"use client";

import React from "react";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSlider() {
  const reviewsData = [
    {
      id: 1,
      name: "David Fincher",
      role: "Founder & CEO",
      location: "New York",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      quote: "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations.",
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Founder & CEO",
      location: "Paris",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      quote: "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations.",
    },
    {
      id: 3,
      name: "David Luic",
      role: "Founder & CEO",
      location: "London",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      quote: "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations.",
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Operations Director",
      location: "Berlin",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      quote: "The personalized trekking routes and local safety guide support exceeded all expectations. Our expedition felt incredibly professional from start to finish.",
    },
    {
      id: 5,
      name: "Liam O'Connor",
      role: "Road Trip Explorer",
      location: "Dublin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
      quote: "Our road trip across New Zealand was seamless. Every stop was well planned, and the natural beauty we experienced was absolutely incredible.",
    },
    {
      id: 6,
      name: "Emily Dubois",
      role: "Honeymoon Traveller",
      location: "Paris",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&auto=format&fit=crop&q=80",
      quote: "We celebrated our anniversary in Santorini, and it was beyond perfect. The sunset views and private dinner arrangements were simply breathtaking.",
    }
  ];

  // Distribute variations cleanly across the columns
  const col1Data = [reviewsData[0], reviewsData[3], reviewsData[4]];
  const col2Data = [reviewsData[1], reviewsData[5], reviewsData[2]];
  const col3Data = [reviewsData[2], reviewsData[1], reviewsData[0]];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        {/* Unmasked Header Layer (Stays fully visible, responsive, and unaffected by the background cloud fade) */}
        <div className="relative z-30 mb-8">
          <TestimonialHeader />
        </div>
<div className="relative w-full h-[650px] overflow-hidden rounded-b-[2rem]">
          
          {/* ─── BLENDING GRADIENTS TARGETING ONLY CARDS ─── */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/95 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/95 to-transparent z-20 pointer-events-none" />
        {/* 3-Column Sliding Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden flex-grow h-full mt-4">
          
          {/* COLUMN 1: Sliding Upwards */}
          <div className="relative flex flex-col gap-6 overflow-hidden h-full">
            <div className="flex flex-col gap-6 animate-slide-up hover:[animation-play-state:paused]">
              {[...col1Data, ...col1Data, ...col1Data].map((review, idx) => (
                <TestimonialCard key={`c1-${review.id}-${idx}`} review={review} />
              ))}
            </div>
          </div>

          {/* COLUMN 2: Sliding Downwards */}
          <div className="relative flex flex-col gap-6 overflow-hidden h-full hidden md:flex">
            <div className="flex flex-col gap-6 animate-slide-down hover:[animation-play-state:paused]">
              {[...col2Data, ...col2Data, ...col2Data].map((review, idx) => (
                <TestimonialCard key={`c2-${review.id}-${idx}`} review={review} />
              ))}
            </div>
          </div>

          {/* COLUMN 3: Sliding Upwards (Slower) */}
          <div className="relative flex flex-col gap-6 overflow-hidden h-full hidden lg:flex">
            <div className="flex flex-col gap-6 animate-slide-up hover:[animation-play-state:paused]">
              {[...col3Data, ...col3Data, ...col3Data].map((review, idx) => (
                <TestimonialCard key={`c3-${review.id}-${idx}`} review={review} />
              ))}
            </div>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}