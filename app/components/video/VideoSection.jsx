import FixedVideoBg from "./FixedVideoBg";
import HeroContent from "./HeroContent";

export default function VideoSection() {
  return (
    /* 
      The clip-path or relative positioning bounds the fixed viewport context 
      so the background video layers beautifully within this section block.
    */
    <section className="relative w-full h-180 bg-transparent px-6 py-20 sm:px-12 md:py-32 lg:px-20 xl:px-32 flex items-center">
      
      {/* 1. Fixed Background Layers */}
      <FixedVideoBg />

      {/* 2. Scrollable Foreground Content Layers */}
      {/* <div className="mx-auto max-w-7xl w-full relative z-10">
        <HeroContent />
      </div> */}

    </section>
  );
}