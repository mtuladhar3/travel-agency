"use client";
import SectionHeader from "./SectionHeader"; // Adjust the import path based on your folder structure

export default function BlogHeaderSticky() {
  return (
    /* 
      - lg:sticky: Handles pinning the side column during viewport scrolls.
      - self-start: Crucial for sticky elements; prevents the column height from stretching.
    */
    <div className="lg:sticky lg:top-28 self-start w-full">
      {/* 🚀 Using your shared global SectionHeader component with editorial layout */}
      <SectionHeader
        layout="editorial"
        label="Blog and News"
        title={
          <>
            Our Update 
            <br />
            blog & <span className="italic font-serif font-normal text-orange-500">news</span>
          </>
        }
      />
    </div>
  );
}