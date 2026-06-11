import { Phone, Mail, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full bg-white border-b border-gray-100 text-xs text-gray-500 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Contact Info (Centered on mobile, left-aligned on desktop) */}
        <div className="flex items-center space-x-4 mx-auto md:mx-0">
          <a href="tel:+0012345688" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            <span>+00(123)45688</span>
          </a>
          <span className="text-gray-200">|</span>
          <a href="mailto:turie@gmail.com" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <span>turie@gmail.com</span>
          </a>
        </div>

        {/* Promo Deal Offer (Hidden on mobile) */}
        <div className="hidden md:block font-medium">
          <span className="text-orange-500 font-bold">Save 50%</span> on Multi - day tours
        </div>

        {/* Language Selector (Hidden on mobile) */}
        <button className="hidden md:flex items-center gap-1 hover:text-orange-500 transition-colors">
          <span>English</span>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>

      </div>
    </div>
  );
}