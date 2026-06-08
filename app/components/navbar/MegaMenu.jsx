import Link from "next/link";
import Image from "next/image";

export default function MegaMenu({ item, isOpen }) {
  if (!isOpen) return null;

  return (
    /* FIXED: Changed 'left-0 w-screen' to fixed positioning at the top viewport level 
       so it aligns perfectly regardless of the navbar's size. */
    <div className="fixed top-[72px] left-0 right-0 w-7xl mx-auto bg-white text-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-t border-gray-100 py-10 px-6 sm:px-12 lg:px-16 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
        {item.items?.map((subItem, index) => (
          <Link
            key={index}
            href={`/destinations/${subItem.name.toLowerCase().replace(/ /g, "-")}`}
            className="flex items-center gap-4 group py-1"
          >
            {/* Round Avatar Container */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 shadow-inner">
              <Image
                src={subItem.image}
                alt={subItem.name}
                fill
                sizes="48px"
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            {/* Label Descriptors */}
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider leading-none mb-1">
                Things to do in
              </span>
              <span className="text-base font-bold text-gray-800 group-hover:text-[#FF4E25] transition-colors leading-tight">
                {subItem.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}