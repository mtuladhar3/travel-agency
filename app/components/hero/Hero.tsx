import HeroContent from "./HeroContent";
import HeroImages from "./HeroImage";

export default function Hero() {
  return (
    // py-6 on mobile, py-12 on desktop monitors
    <section className="w-full bg-gray-50/60 overflow-hidden py-6 sm:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4">
        
        {/* Top on Mobile, Left on Desktop */}
        <HeroContent />
        
        {/* Bottom on Mobile, Right on Desktop */}
        <HeroImages />
        
      </div>
    </section>
  );
}