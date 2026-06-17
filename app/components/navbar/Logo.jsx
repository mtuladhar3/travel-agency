"use client";

import Link from "next/link";
import Image from "next/image";
import { useNavbarScrolled } from "./NavbarScrollContext";

export default function Logo() {
  const isScrolled = useNavbarScrolled();

  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center gap-3 transition-colors ${
        isScrolled ? "text-neutral-900" : "text-white"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Optimized Next.js Image component replaces the SVG */}
        <Image
          src={isScrolled ? "/images/logo-black.png" : "/images/logo.png"}
          alt="Achieve Treks Logo"
          width={200}
          height={80}
          className="object-contain transition-all duration-300 group-hover:-translate-y-0.5"
          priority
        />
      </div>
    </Link>
  );
}