"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialCard from "./TestimonialCard";

const GAP_PX = 24;

export default function TestimonialSlider() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const x = useMotionValue(0);

  const reviewsData = [
    {
      id: 1,
      name: "David Fincher",
      role: "Founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      quote:
        "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations.",
    },
    {
      id: 2,
      name: "Dianne Russell",
      role: "Founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      quote:
        "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations.",
    },
    {
      id: 3,
      name: "David Luic",
      role: "Founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      quote:
        "Get Expert Guidance For Seamless Stress-Free Travel Experience. Let Our Professionals Plan Your Perfect Trip With Insider Tips And Personalized Recommendations.",
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Operations Director",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      quote:
        "The personalized trekking routes and local safety guide support exceeded all expectations. Our expedition felt incredibly professional from start to finish.",
    },
  ];

  const getStep = useCallback(() => {
    if (slideWidth > 0) return slideWidth + GAP_PX;
    const firstCard = trackRef.current?.firstElementChild;
    if (!firstCard) return 420;
    return firstCard.getBoundingClientRect().width + GAP_PX;
  }, [slideWidth]);

  const updateBounds = useCallback(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const viewportWidth = viewport.offsetWidth;
    setSlideWidth(viewportWidth);

    const trackWidth = track.scrollWidth;
    const max = Math.min(0, viewportWidth - trackWidth);

    setMaxScroll(max);

    const current = x.get();
    if (current < max) x.set(max);
    if (current > 0) x.set(0);
  }, [x]);

  const handleSlide = useCallback(
    (direction) => {
      const step = getStep();
      if (!step) return;

      const currentX = x.get();
      const currentIndex = Math.round(-currentX / step);
      const maxIndex = Math.max(0, Math.round(-maxScroll / step));
      let nextIndex =
        direction === "next" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex > maxIndex) nextIndex = maxIndex;
      if (nextIndex < 0) nextIndex = 0;

      animate(x, -nextIndex * step, {
        type: "spring",
        stiffness: 220,
        damping: 28,
      });
    },
    [getStep, maxScroll, x]
  );

  useEffect(() => {
    updateBounds();

    const viewport = viewportRef.current;
    const track = trackRef.current;

    const resizeObserver = new ResizeObserver(() => updateBounds());
    if (viewport) resizeObserver.observe(viewport);
    if (track) resizeObserver.observe(track);

    window.addEventListener("resize", updateBounds);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateBounds);
    };
  }, [updateBounds, reviewsData.length]);

  return (
    <section className="w-full overflow-hidden bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <TestimonialHeader
          onPrev={() => handleSlide("prev")}
          onNext={() => handleSlide("next")}
        />

        <div
          ref={viewportRef}
          style={{ "--slide-width": `${slideWidth}px` }}
          className="w-full overflow-hidden"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: maxScroll, right: 0 }}
            dragElastic={0.08}
            className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
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
