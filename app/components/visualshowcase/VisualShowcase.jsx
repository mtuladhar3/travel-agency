"use client";

import { topRowImages, bottomRowImages } from "./showcaseData";
import ShowcaseRow from "./ShowcaseRow";

export default function VisualShowcase() {
  return (
    /* The before: and after: classes create transparent-to-solid overlay curtains.
      This lets the images fade out dynamically right before hitting the viewport limits.
    */
    <section className="relative w-full bg-[#FAFAFA] py-10 sm:py-16 overflow-hidden flex flex-col gap-4 sm:gap-6
      before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-[#FAFAFA] before:to-transparent before:pointer-events-none
      after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-[#FAFAFA] after:to-transparent after:pointer-events-none"
    >
      
      {/* ROW 1: Moves Left to Right */}
      <ShowcaseRow images={topRowImages} direction="right" />

      {/* ROW 2: Moves Right to Left */}
      <ShowcaseRow images={bottomRowImages} direction="left" />

    </section>
  );
}