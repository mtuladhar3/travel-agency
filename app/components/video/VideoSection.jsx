import FixedVideoBg from "./FixedVideoBg";
import HeroContent from "./HeroContent";

export default function VideoSection() {
  return (
    /* 
      The clip-path or relative positioning bounds the fixed viewport context 
      so the background video layers beautifully within this section block.
    */
    <section className="relative flex w-full min-h-[50vh] items-center bg-transparent px-6 py-16 sm:min-h-[60vh] sm:px-12 sm:py-20 md:min-h-[70vh] md:py-24 lg:px-20 xl:px-32">
      
      {/* 1. Fixed Background Layers */}
      <FixedVideoBg />

      {/* 2. Scrollable Foreground Content Layers */}
      {/* <div className="mx-auto max-w-7xl w-full relative z-10">
        <HeroContent />
      </div> */}

    </section>
  );
}