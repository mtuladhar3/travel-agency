import Image from "next/image";

export default function CounterBackground() {
  return (
    <div className="counter-banner pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <Image
        src="/images/counter-new.png"
        alt=""
        fill
        sizes="100vw"
        className="object-contain object-[center_85%] sm:object-[center_90%] lg:object-bottom"
        priority={false}
      />
    </div>
  );
}
