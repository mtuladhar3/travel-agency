"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import MegaMenuPackageCard from "./MegaMenuPackageCard";
import {
  getRegionPackages,
  trekkingRegionPackages,
} from "./trekkingMegaMenuPackages";

const GAP_PX = 16;

export default function MegaMenuPackageSlider({
  regions,
  featuredEyebrow,
  activeRegionHref,
  packagesByRegion = trekkingRegionPackages,
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const x = useMotionValue(0);

  const activeRegion = useMemo(
    () =>
      regions.find((region) => region.href === activeRegionHref) ?? regions[0],
    [regions, activeRegionHref]
  );

  const slides = useMemo(() => {
    if (!activeRegion) return [];

    const packages = getRegionPackages(activeRegion, packagesByRegion);

    return packages.map((pkg, index) => ({
      id: `${activeRegion.href}-${index}`,
      pkg,
      regionLabel: activeRegion.label,
    }));
  }, [activeRegion, packagesByRegion]);

  const getStep = useCallback(() => {
    if (slideWidth > 0) return slideWidth + GAP_PX;
    const firstCard = trackRef.current?.firstElementChild;
    if (!firstCard) return 360;
    return firstCard.getBoundingClientRect().width + GAP_PX;
  }, [slideWidth]);

  const updateBounds = useCallback(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const viewportWidth = viewport.offsetWidth;
    setSlideWidth(viewportWidth);

    const max = Math.min(0, viewportWidth - track.scrollWidth);
    setMaxScroll(max);

    const current = x.get();
    if (current < max) x.set(max);
    if (current > 0) x.set(0);
  }, [x]);

  const slideToIndex = useCallback(
    (index) => {
      const step = getStep();
      if (!step) return;

      const maxIndex = Math.max(0, Math.round(-maxScroll / step));
      const nextIndex = Math.max(0, Math.min(index, maxIndex));

      setActiveSlideIndex(nextIndex);

      animate(x, -nextIndex * step, {
        type: "spring",
        stiffness: 260,
        damping: 30,
      });
    },
    [getStep, maxScroll, x]
  );

  const slide = useCallback(
    (direction) => {
      const step = getStep();
      if (!step) return;

      const currentIndex = Math.round(-x.get() / step);
      const maxIndex = Math.max(0, Math.round(-maxScroll / step));
      const nextIndex =
        direction === "next"
          ? Math.min(currentIndex + 1, maxIndex)
          : Math.max(currentIndex - 1, 0);

      slideToIndex(nextIndex);
    },
    [getStep, maxScroll, slideToIndex, x]
  );

  useEffect(() => {
    setActiveSlideIndex(0);
    x.set(0);
  }, [activeRegionHref, x]);

  useEffect(() => {
    updateBounds();

    const viewport = viewportRef.current;
    const track = trackRef.current;
    const resizeObserver = new ResizeObserver(() => updateBounds());

    if (viewport) resizeObserver.observe(viewport);
    if (track) resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [slides.length, updateBounds]);

  if (!slides.length || !activeRegion) return null;

  const regionLabel = activeRegion.label.replace(" Region", "");

  return (
    <div className="flex min-h-[320px] flex-col">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="text-lg font-semibold uppercase tracking-[0.1em] text-sky-700">
          {featuredEyebrow ?? "Most popular trek in"} {regionLabel}
        </p>

        {slides.length > 1 && (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => slide("prev")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5CFC3] bg-white text-[#1C2B2A] transition-colors hover:border-sky-700 hover:bg-sky-700 hover:text-white"
              aria-label="Previous package"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => slide("next")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C2B2A] text-white transition-colors hover:bg-sky-700"
              aria-label="Next package"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div ref={viewportRef} className="flex-1 overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          drag={slides.length > 1 ? "x" : false}
          dragConstraints={{ left: maxScroll, right: 0 }}
          dragElastic={0.06}
          onDragEnd={() => {
            const step = getStep();
            if (!step) return;
            const index = Math.round(-x.get() / step);
            setActiveSlideIndex(index);
          }}
          className={`flex w-max gap-4 ${slides.length > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{ width: slideWidth > 0 ? slideWidth : undefined }}
              className="w-full shrink-0"
            >
              <MegaMenuPackageCard pkg={slide.pkg} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
