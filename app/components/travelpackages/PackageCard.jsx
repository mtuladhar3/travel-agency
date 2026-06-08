import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";

export default function PackageCard({ pkg }) {
  return (
    /* 1. CARD CONTAINER:
         Increased outer card roundness to rounded-[32px] and internal padding to p-5 
         to perfectly mirror the layout balance of the screenshot asset.
    */
    <div className="bg-white rounded-[32px] border border-gray-100 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col text-left">
      
      {/* 2. IMAGE CANVAS CONTAINER */}
      <div className="relative w-full h-[245px] rounded-[24px] overflow-hidden mb-5 bg-gray-50">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
        
        {/* Featured Tag Layout Overlay */}
        {pkg.isFeatured && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF7A00] text-white text-[12px] font-bold px-3.5 py-1.5 rounded-lg tracking-wide shadow-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* 3. TEXT & META INFO WRAPPER */}
      <div className="flex flex-col flex-1 px-1">
        
        {/* Geo Location Tracking Line */}
        <div className="flex items-center gap-1.5 text-[14px] text-[#4A5568] font-medium mb-3">
          <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="truncate">{pkg.location}</span>
        </div>

        {/* Title Content Element */}
        <h3 className="text-[20px] font-bold text-[#0A1128] tracking-tight leading-[1.3] mb-4 line-clamp-2 min-h-[52px]">
          {pkg.title}
        </h3>

        {/* Pricing Rows Frame */}
        <div className="flex items-center gap-2 text-[15px] font-medium text-[#4A5568] mb-6">
          <span>From</span>
          <span className="text-[#FF7A00] text-[24px] font-extrabold leading-none">
            ${pkg.price}
          </span>
        </div>

        {/* 4. BOTTOM ACTION & TIME METADATA CONTAINER */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          
          {/* Duration Layout Wrapper */}
          <div className="flex items-center gap-2 text-[14px] font-semibold text-[#4A5568]">
            <Clock className="w-4.5 h-4.5 text-gray-400" />
            <span>{pkg.duration}</span>
          </div>

          {/* Clean View Details Interaction Panel Link */}
          <Link
            href={`/packages/${pkg.id}`}
            className="bg-[#ffe9d5] hover:bg-[#FF7A00] text-[#FF7A00] hover:text-white text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}