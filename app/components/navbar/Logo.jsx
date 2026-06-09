import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white group flex-shrink-0">
      <div className="flex flex-col items-center justify-center">
        {/* Optimized Next.js Image component replaces the SVG */}
        <Image
          src="/images/logo.png" // Change extension if it's .svg, .webp, etc.
          alt="Achieve Treks Logo"
          width={200}  // Matches your original w-8 (32px)
          height={80} // Matches your original h-8 (32px)
          className="object-contain transition-transform group-hover:-translate-y-0.5"
          priority // Ensures the logo loads immediately without layout shifts
        />
      </div>
    </Link>
  );
}