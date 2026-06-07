import HeroContent from "./HeroContent";
import HeroImages from "./HeroImage";

export default function Hero() {
  return (
    <section className="w-full bg-white py-6 sm:py-10 lg:py-4 px-4 sm:px-6 lg:px-8">
      
      {/* 
        This is the main container with the soft greyish background, 
        large border radius, and hidden overflow matching image_697987.jpg 
      */}
      <div className="max-w-full mx-auto bg-[#F8F9FA] rounded-[32px] overflow-visible lg:py-0 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-6 relative">
        
        {/* Background Decorative Watermarks (Airplane/Tent trails can be rendered inside here) */}
        <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
          {/* If you have background illustrations, they sit behind content here */}
        </div>

        {/* Content Side Layout */}
        <HeroContent />
        
        {/* Image Grid Side */}
        <HeroImages />
        
      </div>
    </section>
  );
}