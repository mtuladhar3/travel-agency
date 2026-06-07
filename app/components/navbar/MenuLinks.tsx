import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navItems } from "./navItems";

export default function MenuLinks() {
  return (
    <nav className="hidden md:flex space-x-1 lg:space-x-2 whitespace-nowrap">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="flex items-center gap-1 text-gray-800 hover:text-orange-500 px-2.5 py-2 text-[15px] font-semibold transition-colors"
        >
          <span>{item.name}</span>
          {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
        </Link>
      ))}
    </nav>
  );
}