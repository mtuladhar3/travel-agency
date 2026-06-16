"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import SliderHeader from "./SliderHeader";
import PackageCard from "./PackageCard";
import { trekkingSliderPackages } from "./trekkingSliderData";

const AUTO_SLIDE_MS = 4500;
const GAP_PX = 24;

export default function TrekkingSlider() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const isPausedRef = useRef(false);
  const [maxScroll, setMaxScroll] = useState(0);
  const x = useMotionValue(0);

  const getStep = useCallback(() => {
    const firstCard = trackRef.current?.firstElementChild;
    if (!firstCard) return 380;
    return firstCard.getBoundingClientRect().width + GAP_PX;
  }, []);

  const getVisibleWidth = useCallback(() => {
    const viewport = viewportRef.current;
    const section = sectionRef.current;
    if (!viewport) return 0;

    const viewportRect = viewport.getBoundingClientRect();
    const sectionRect = section?.getBoundingClientRect();
    const rightEdge = sectionRect?.right ?? window.innerWidth;

    return Math.max(viewport.offsetWidth, rightEdge - viewportRect.left);
  }, []);

  const updateBounds = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackWidth = track.scrollWidth;
    const visibleWidth = getVisibleWidth();
    const max = Math.min(0, visibleWidth - trackWidth);

    setMaxScroll(max);

    const current = x.get();
    if (current < max) x.set(max);
    if (current > 0) x.set(0);
  }, [getVisibleWidth, x]);

  const slide = useCallback(
    (direction, { loop = false } = {}) => {
      const step = getStep();
      const currentX = x.get();
      let targetX = direction === "next" ? currentX - step : currentX + step;

      if (targetX < maxScroll) {
        targetX = loop ? 0 : maxScroll;
      }
      if (targetX > 0) {
        targetX = loop ? maxScroll : 0;
      }

      animate(x, targetX, { type: "spring", stiffness: 220, damping: 28 });
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
  }, [updateBounds, trekkingSliderPackages.length]);

  useEffect(() => {
    if (maxScroll === 0) return;

    const timer = setInterval(() => {
      if (isPausedRef.current) return;
      slide("next", { loop: true });
    }, AUTO_SLIDE_MS);

    return () => clearInterval(timer);
  }, [maxScroll, slide]);

  const pause = () => {
    isPausedRef.current = true;
  };

  const resume = () => {
    isPausedRef.current = false;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-gradient-to-b from-orange-100 via-white to-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        <SliderHeader
          onPrev={() => slide("prev")}
          onNext={() => slide("next")}
        />

        <div
          ref={viewportRef}
          className="cursor-grab overflow-visible active:cursor-grabbing"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: maxScroll, right: 0 }}
            dragElastic={0.15}
            onDragStart={pause}
            onDragEnd={resume}
            className="flex w-max gap-6"
          >
            {trekkingSliderPackages.map((item) => (
              <PackageCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
