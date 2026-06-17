"use client";

import SectionHeader from "../../common/SectionHeader";

export default function TrekkingSectionHeader() {
  return (
    <SectionHeader
      centered
      label="Trekking Regions"
      title={["Explore Popular", "Destinations"]}
      subtitle={
        <>
          Over <span className="font-semibold text-orange-600">30,500+</span> most
          popular trekking experiences you&apos;ll remember
        </>
      }
    />
  );
}
