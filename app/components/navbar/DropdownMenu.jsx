import Link from "next/link";

export default function DropdownMenu({ items, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 min-w-[220px] bg-white rounded-b-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-3 z-50 flex flex-col animate-in fade-in slide-in-from-top-2 duration-150">
      {items?.map((subItem, index) => (
        <Link
          key={index}
          href={subItem.href}
          className="text-left px-6 py-2.5 text-[15px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#FF4E25] transition-colors"
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  );
}