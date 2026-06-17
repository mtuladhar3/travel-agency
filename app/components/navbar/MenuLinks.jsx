"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navItems } from "./navItems";
import { useNavbarScrolled } from "./NavbarScrollContext";

import MegaMenu from "./MegaMenu";
import DropdownMenu from "./DropdownMenu";

export default function MenuLinks() {
  const [activeMenu, setActiveMenu] = useState(null);
  const isScrolled = useNavbarScrolled();

  return (
    <nav 
      className="hidden lg:flex items-center gap-8 xl:gap-10 h-full static"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {navItems.map((item) => {
        const isCurrentActive = activeMenu === item.name;
        const hasSubmenu = item.type !== "none";

        return (
          <div
            key={item.name}
            className="h-full flex items-center relative py-8"
            onMouseEnter={() => hasSubmenu && setActiveMenu(item.name)}
          >
            {/* Primary Main Route Path Option */}
            <Link
              href={item.href}
              className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors ${
                isCurrentActive
                  ? "text-[#FF4E25]"
                  : isScrolled
                    ? "text-neutral-900 hover:text-[#FF4E25]"
                    : "text-white hover:text-white/80"
              }`}
            >
              <span>{item.name}</span>
              {hasSubmenu && (
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isCurrentActive
                      ? "rotate-180 text-[#FF4E25]"
                      : isScrolled
                        ? "text-neutral-500"
                        : "text-white/60"
                  }`}
                />
              )}
            </Link>

            {/* A. Mega Menu Grid Variant */}
            {item.type === "mega" && (
              <MegaMenu item={item} isOpen={isCurrentActive} />
            )}

            {/* B. Falling Dropdown Variant */}
            {item.type === "dropdown" && (
              <DropdownMenu item={item} isOpen={isCurrentActive} />
            )}
          </div>
        );
      })}
    </nav>
  );
}