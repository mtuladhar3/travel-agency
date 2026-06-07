import Image from "next/image";

const col1Images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80",
  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&q=80",
];

const col2Images = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&q=80",
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&q=80",
  "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&q=80",
];

const col3Images = [
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
];

export default function HeroImages() {
  return (
    // Responsive Heights: h-[450px] on mobile to h-[650px] on desktop
    <div className="h-[450px] sm:h-[550px] lg:h-[650px] overflow-hidden grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 relative w-full max-w-3xl mx-auto px-4 lg:px-0">
      
      {/* Blending Edge Overlays */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Column 1: Upward */}
      <div className="flex flex-col gap-3 sm:gap-4 animate-slide-up">
        {[...col1Images, ...col1Images].map((src, idx) => (
          <div key={idx} className="relative w-full aspect-[3/4] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm">
            <Image src={src} alt="Travel moment" fill sizes="(max-w-768px) 50vw, 25vw" className="object-cover" />
          </div>
        ))}
      </div>

      {/* Column 2: Downward */}
      <div className="flex flex-col gap-3 sm:gap-4 animate-slide-down">
        {[...col2Images, ...col2Images].map((src, idx) => (
          <div key={idx} className="relative w-full aspect-[3/4] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm">
            <Image src={src} alt="Travel moment" fill sizes="(max-w-768px) 50vw, 25vw" className="object-cover" />
          </div>
        ))}
      </div>

      {/* Column 3: Upward - Hidden on mobile screen size, visible on standard viewports */}
      <div className="hidden sm:flex flex-col gap-3 sm:gap-4 animate-slide-up">
        {[...col3Images, ...col3Images].map((src, idx) => (
          <div key={idx} className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-sm">
            <Image src={src} alt="Travel moment" fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </div>

    </div>
  );
}