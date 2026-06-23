"use client";

import { useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import RightActions from "./RightActions";
import MobileMenu from "./MobileMenu";
import { NavbarScrollContext } from "./NavbarScrollContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Sync initial position in case page loads already scrolled down
    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 24);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Determine if header details should change styles (scrolled past threshold)
      setIsScrolled(currentScrollY > 24);

      // 2. Hide when scrolling down, Show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN and passed initial threshold -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP or close to top -> Show
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarScrollContext.Provider value={isScrolled}>
      <header
        className={`left-0 w-full transition-all duration-300 ${
          isScrolled
            ? "fixed border-b border-neutral-200/80 bg-white/95 shadow-sm backdrop-blur-md"
            : "absolute border-0 bg-transparent"
        } ${
          isVisible ? "top-0 z-50 opacity-100" : "-top-28 z-0 opacity-0 pointer-events-none"
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