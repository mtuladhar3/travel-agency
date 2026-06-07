"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { navItems } from "./navItems";

export default function MenuLinks() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="hidden md:flex items-center space-x-6 h-full relative">
      {navItems.map((item) => {
        const isCurrentActive = activeMenu === item.name;
        const hasSubmenu = item.type !== "none";

        return (
          <div
            key={item.name}
            className="relative h-full flex items-center"
            onMouseEnter={() => hasSubmenu && setActiveMenu(item.name)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {/* Main Primary Link Trigger */}
            <Link
              href={item.href}
              className={`flex items-center gap-1 font-semibold text-[15px] py-8 transition-colors ${
                isCurrentActive ? "text-[#FF4E25]" : "text-gray-800 hover:text-[#FF4E25]"
              }`}
            >
              <span>{item.name}</span>
              {hasSubmenu && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCurrentActive ? "rotate-180 text-[#FF4E25]" : "text-gray-400"
                  }`}
                />
              )}
            </Link>

            {/* A. Dynamic Mega Menu Mount (From image_6997c6.png) */}
            {hasSubmenu && item.type === "mega" && isCurrentActive && (
              <div className="absolute top-[100%] left-1/2 -translate-x-[35%] w-[820px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-8 z-50 grid grid-cols-3 gap-y-6 gap-x-8 animate-in fade-in slide-in-from-top-2 duration-150">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={`/destinations/${subItem.name.toLowerCase().replace(/ /g, "-")}`}
                    className="flex items-center gap-3 group"
                  >
                    {/* Circle Image Wrapper */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-50 shadow-sm">
                      <Image
                        src={subItem.image}
                        alt={subItem.name}
                        fill
                        sizes="48px"
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    {/* Text Label Combo */}
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider leading-none mb-1">
                        Things to do in
                      </span>
                      <span className="text-[15px] font-bold text-gray-800 group-hover:text-[#FF4E25] transition-colors leading-none">
                        {subItem.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* B. Classic Dropdown Menu Mount (From image_6997e7.png) */}
            {hasSubmenu && item.type === "dropdown" && isCurrentActive && (
              <div className="absolute top-[100%] left-0 w-56 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 py-3 z-50 flex flex-col animate-in fade-in slide-in-from-top-2 duration-150">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="text-left px-5 py-2.5 text-[15px] font-medium text-gray-700 hover:bg-gray-50 hover:text-[#FF4E25] transition-colors"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}