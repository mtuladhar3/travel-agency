"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const x = useMotionValue(0);

  // Layout Review Content Database
  const reviewsData = [
    {
      id: 1,
      name: "David Fincher",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      quote: "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations."
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      quote: "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations."
    },
    {
      id: 3,
      name: "David Luic",
      role: "Founder & CEO",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      quote: "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations."
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Operations Director",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      quote: "The personalized trekking routes and local safety guide support exceeded all expectations. Our expedition felt incredibly professional from start to finish."
    }
  ];

  // Dynamic window resizing boundary calculation hook
  useEffect(() => {
    if (sliderRef.current) {
      const handleResize = () => {
        const totalWidth = sliderRef.current.scrollWidth;
        const viewportWidth = sliderRef.current.offsetWidth;
        setMaxScroll(Math.min(0, viewportWidth - totalWidth));
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Programmatic Button Scroll Control
  const handleSlide = (direction) => {
    const currentX = x.get();
    const cardStepWidth = 420; // Maps precisely to card spatial bounds
    let destinationX = direction === "next" ? currentX - cardStepWidth : currentX + cardStepWidth;

    // Fluid clamping checks
    if (destinationX < maxScroll) destinationX = maxScroll;
    if (destinationX > 0) destinationX = 0;

    animate(x, destinationX, { type: "spring", stiffness: 220, damping: 28 });
  };

  return (
    <section className="w-full bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Pass arrow event controls up directly to Header trigger targets */}
        <TestimonialHeader 
          onPrev={() => handleSlide("prev")}
          onNext={() => handleSlide("next")}
        />

        {/* Viewport Frame Slider Window */}
        <div className="overflow-visible cursor-grab active:cursor-grabbing">
          <motion.div
            ref={sliderRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: maxScroll, right: 0 }}
            dragElastic={0.12}
            className="flex gap-6 w-max"
          >
            {reviewsData.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}