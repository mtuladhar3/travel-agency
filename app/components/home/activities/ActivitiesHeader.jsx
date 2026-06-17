"use client";

import SectionHeader from "../../common/SectionHeader";

export default function ActivitiesHeader() {
  return (
    <SectionHeader
      centered
      label="Activities"
      title={["Unleash Your Adventure", "with Exciting Activities"]}
      subtitle="Turn your journey into an unforgettable adventure with our wide range of travel activities from thrilling outdoor excursions and cultural immersions."
      className="mx-auto mb-16 max-w-5xl"
      subtitleClassName="text-neutral-600"
    />
  );
}