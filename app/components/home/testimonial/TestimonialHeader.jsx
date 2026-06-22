"use client";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading";// Adjust this import path to match your file structure

export default function TestimonialHeader({ onPrev, onNext }) {
  return (
    <div className="relative mb-12 lg:mb-16">
      {/* 🚀 Using your shared global SectionHeader component */}
      <SectionHeading
        label="Testimonial"
        title={
          <>
            What clients say
            <br />
            about <span className="italic font-serif font-normal text-orange-500">our journeys</span>
          </>
        }
      />

      {/* Controller Arrow Buttons absolute aligned matching your Team design slider layout */}
      <div className="absolute bottom-1 right-0 flex gap-3 z-30">
        <button
          onClick={onPrev}
          className="w-12 h-12 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-700 hover:bg-neutral-50 transition-all active:scale-95 shadow-sm"
          aria-label="Previous testimonial"
        >
          <FiArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={onNext}
          className="w-12 h-12 rounded-full bg-[#2b1408] flex items-center justify-center text-white hover:bg-[#3d1e0d] transition-all active:scale-95 shadow-sm"
          aria-label="Next testimonial"
        >
          <FiArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}