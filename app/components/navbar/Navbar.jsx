"use client";

import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import RightActions from "./RightActions";
import MobileMenu from "./MobileMenu"; // <-- Plug in the newly generated tracking layout file

export default function Navbar() {
  return (
    /* Absolute overlay frame configuration wrapper */
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24 relative">
          
          {/* 1. Left aligned core brand signature block */}
          <Logo />

          {/* 2. Middle desktop track navigation link array (hidden on mobile displays) */}
          <MenuLinks />

          {/* 3. Right side dashboard utility items row (hidden on mobile displays) */}
          <RightActions />

          {/* 4. Responsive viewport fallback control component (hidden on desktop screens) */}
          <MobileMenu />

        </div>
      </div>
    </header>
  );
}