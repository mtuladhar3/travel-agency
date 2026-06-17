"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import RightActions from "./RightActions";
import MobileMenu from "./MobileMenu";
import { NavbarScrollContext } from "./NavbarScrollContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarScrollContext.Provider value={isScrolled}>
      <header
        className={`left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 border-b border-neutral-200/80 bg-white/95 shadow-sm backdrop-blur-md"
            : "absolute top-0 border-0 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
          <div className="relative flex h-20 items-center justify-between lg:h-24">
            <Logo />
            <MenuLinks />
            <RightActions />
            <MobileMenu />
          </div>
        </div>
      </header>
    </NavbarScrollContext.Provider>
  );
}
