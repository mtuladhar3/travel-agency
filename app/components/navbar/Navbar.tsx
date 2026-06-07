import Topbar from "./Topbar";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import RightActions from "./RightActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm shadow-gray-100/50">
      {/* Topbar: Responsive settings built right inside Topbar component */}
      <Topbar />
      
      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Always visible */}
          <Logo />
          
          {/* Menu links - Pushed to center, hidden on mobile, flex on desktop */}
          <MenuLinks />
          
          {/* Search Bar + Login Button - Hidden on mobile, flex on desktop */}
          <RightActions />

          {/* Mobile hamburger menu trigger - Only visible on mobile (`md:hidden`) */}
          <MobileMenu />
          
        </div>
      </div>
    </header>
  );
}