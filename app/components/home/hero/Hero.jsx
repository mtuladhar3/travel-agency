import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    /* h-[150vh] defines the scrolling duration track for the parallax canvas. 
       Adjust it up or down to speed up or slow down the transition effect. */
    <section className="relative h-[150vh] w-full bg-[#0d1527]">
      {/* The sticky wrapper locks the window viewport space on screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Graphics Parallax Core Component */}
        <HeroImage />
        
        {/* Text Content Overlay Layer (Scrolls upwards naturally) */}
        <div className="absolute inset-0 z-30 w-full h-screen flex items-center justify-center px-4 pointer-events-none">
          {/* Your text content scales/scrolls with standard flow container properties here */}
          <div className="pointer-events-auto">
            <HeroContent />
          </div>
        </div>

      </div>
    </section>
  );
}