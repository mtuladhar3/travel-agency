import Image from "next/image";

export default function ShowcaseRow({ images, direction = "left" }) {
  // Uses our native custom global CSS classes directly
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap">
      {/* Moving inner deck container */}
      <div className={`flex gap-4 sm:gap-6 shrink-0 ${animationClass}`}>
        {[...images, ...images].map((img, idx) => (
          <div 
            key={`${img.id}-${idx}`}
            className="relative w-[260px] sm:w-[340px] lg:w-[420px] h-[160px] sm:h-[210px] lg:h-[260px] rounded-[24px] sm:rounded-[32px] overflow-hidden shrink-0 cursor-pointer group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 420px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Visual ambient overlay layer */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}