"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Menu } from "lucide-react";
import { navItems } from "./navItems";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleAccordion = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  return (
    <div className="lg:hidden">
      {/* HAMBURGER TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-white p-2 focus:outline-none hover:text-white/80 transition-colors"
        aria-label="Toggle Menu"
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* BACKDROP BLUR OVERLAY */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SLIDE-OUT PANEL DRAWER */}
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-[#0F2220] border-l border-white/10 p-6 z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* TOP ROW HEADER */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <span className="text-white font-black uppercase tracking-wider text-base">Navigation</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* NESTED ACCORDION ROUTE TRACK LIST */}
        <nav className="flex-1 overflow-y-auto py-6 space-y-2">
          {navItems.map((item) => {
            const hasSubmenu = item.type !== "none";
            const isExpanded = expandedMenu === item.name;

            return (
              <div key={item.name} className="flex flex-col">
                {hasSubmenu ? (
                  /* ACCORDION ACCELERATOR ACTION */
                  <button
                    onClick={() => toggleAccordion(item.name)}
                    className={`flex items-center justify-between w-full py-3 text-left font-semibold text-base transition-colors ${
                      isExpanded ? "text-[#FF4E25]" : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#FF4E25]" : ""
                    }`} />
                  </button>
                ) : (
                  /* STANDARD FLAT ROUTE URL LINK */
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-semibold text-base text-white/90 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* ACCORDION EXPANDABLE TRAY COMPONENT */}
                {hasSubmenu && isExpanded && (
                  <div className="pl-4 border-l-2 border-white/10 flex flex-col mt-1 mb-2 space-y-1 animate-in slide-in-from-top-1 duration-150">
                    {item.type === "mega" &&
                      (item.regions ?? []).map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="py-2 text-[14px] font-medium text-white/60 hover:text-[#FF4E25] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}

                    {item.type === "dropdown" &&
                      (item.groups?.length
                        ? item.groups
                        : [{ label: null, items: item.items ?? [] }]
                      ).map((group) => (
                        <div key={group.label ?? "default"} className="flex flex-col">
                          {group.label && (
                            <p className="pt-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                              {group.label}
                            </p>
                          )}
                          {group.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="py-2 text-[14px] font-medium text-white/60 hover:text-[#FF4E25] transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* BOTTOM ACTION BUTTON FOLLOWER FOR SMALLER SCREENS */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <button type="button" className="flex items-center justify-center gap-1 text-white text-sm font-bold tracking-wider py-2">
            <span>ENGLISH (ENG)</span>
          </button>
          <Link 
            href="/enquire"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-[#FF4E25] text-white text-sm font-semibold py-3 rounded-md hover:bg-[#e03d1a] transition-all"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}