"use client";

import SectionHeader from "../../common/SectionHeader";

export default function BlogHeader() {
  return (
    <SectionHeader
      centered
      label="Blog"
      title={["Latest From", "the Blog"]}
      subtitle="Travel planning has never been easier."
    />
  );
}
