import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function RightActions() {
  return (
    <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
      {/* Language Trigger Toggle Selection */}
      <button className="flex items-center gap-1 text-white text-sm font-bold tracking-wider hover:text-white/80 transition-colors">
        <span>ENG</span>
        <ChevronDown className="w-4 h-4 opacity-70" />
      </button>

      {/* Frame Outlined Button Action Block */}
      <Link 
        href="/enquire" 
        className="border border-white hover:bg-white hover:text-[#0F2220] text-white text-sm font-semibold px-6 py-2.5 rounded-md transition-all duration-200 tracking-wide"
      >
        Enquire Now
      </Link>
    </div>
  );
}