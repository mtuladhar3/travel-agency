"use client";

import SectionHeader from "../../common/SectionHeader";

export default function PackageSectionHeader() {
  return (
    <SectionHeader
      centered
      className="px-4"
      label="Tour Packages"
      title={["Popular Travel", "Packages"]}
      subtitle="Plan your journey to our most sought-after spots."
    />
  );
}
