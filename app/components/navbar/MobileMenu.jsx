"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "./navItems";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="p-2 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="absolute top-28 left-0 w-full bg-white border-b border-gray-200 shadow-xl z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-gray-800 hover:text-orange-500 py-2.5 text-base font-semibold border-b border-gray-50 transition-colors"
              >
                <span>{item.name}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <Link 
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-orange-500 text-white font-bold py-3 rounded-full text-sm hover:bg-orange-600 transition-all"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}