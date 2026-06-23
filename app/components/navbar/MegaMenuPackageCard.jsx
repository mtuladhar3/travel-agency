import Link from "next/link";
import Image from "next/image";

export default function MegaMenuPackageCard({ pkg }) {
  if (!pkg) return null;

  return (
    <div className="flex h-full min-h-[320px] w-full flex-col rounded-2xl bg-[#E9E5DD] p-5 sm:p-6">
      <div>
        <h3 className="text-lg font-semibold leading-snug text-[#1C2B2A] sm:text-xl">
          {pkg.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4A5C57]">
          {pkg.description}
        </p>
      </div>

      <div className="relative my-5 flex min-h-[160px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#DDD8CE]">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt ?? pkg.title}
          fill
          sizes="(max-width: 1024px) 100vw, 360px"
          className="object-cover"
        />
      </div>

      <div className="border-t border-[#D5CFC3] pt-4">
        <Link
          href={pkg.ctaHref}
          className="text-sm font-semibold text-[#1C2B2A] transition-colors hover:text-sky-700"
        >
          {pkg.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
