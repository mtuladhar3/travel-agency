// travelpackages/PackageCard.jsx
import React from "react";
import Link from "next/link";
import CardBadge from "./CardBadge";

export default function PackageCard({ pkg, isActive = false }) {
  return (
    /* Outer column block layout matching col-lg-3 col-md-6 col-sm-12 categories-block */
    <div className="w-full categories-block">
      
      {/* Main card box (.categories-block-one) */}
      <div 
        className={`group w-full rounded-[24px] flex flex-col transition-all duration-300  hover:shadow-2xl hover:shadow-slate-900/20 border
          ${isActive 
            ? "bg-bg-slate-50/50 border-transparent shadow-xl" 
            : "bg-bg-slate-50/50 hover:bg-bg-slate-50/50 border-[#EDF2F5] hover:border-transparent"
          }`}
      >
        
        {/* Top Header - Location & Title exactly like your template layout */}
        <div className="w-full p-4">
          <div className="flex items-center  gap-1 text-xs font-semibold text-orange-400 group-hover:text-emerald-600 transition-colors duration-300 mb-0.5">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className={`font-medium transition-colors ${isActive ? "text-slate-500" : "text-slate-500 group-hover:text-slate-500"}`}>
              {pkg.location}
            </span>
          </div>
          <h3>
            <Link 
              href="/" 
              className={`text-lg font-black tracking-wide transition-colors duration-300 block line-clamp-1
                ${isActive ? "text-[#074675]" : "text-[#074675] group-hover:text-[#074675]"}`}
            >
              {pkg.title}
            </Link>
          </h3>
        </div>

        {/* Card Main Image Asset with your native Aspect Ratio config */}
        <figure className="relative w-full aspect-[270/298] overflow-hidden rounded-[20px] bg-slate-100">
          <img 
            src={pkg.image} 
            alt={pkg.title}
            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </figure>

        {/* Card Meta Pocket Info using your custom SVG mask overlay configuration */}
        <div 
          style={{
            "--shape-url": "url('/images/card-shape.svg')"
          }}
          className="relative block z-[2] mt-[-37px] pt-[18px] pr-[15px] pb-[19px] pl-[25px] rounded-r-[20px] rounded-bl-[20px] rounded-tl-none flex flex-col items-start justify-center transition-colors duration-300 bg-[#edf2f5]
            
            /* BEFORE element: Renders your custom inverted masking curve layout accurately */
            before:content-[''] before:absolute before:top-[-38px] before:left-[-1px] before:w-[130px] before:h-[120px] before:bg-[image:var(--shape-url)] before:bg-no-repeat before:transition-opacity before:duration-300 before:opacity-100"
        >
          
          {/* Price Tag & Custom Rating Pill alignment inside the card template */}
          <div className="w-full flex justify-between items-center pr-12 mb-2">
            <span className="text-[15px] font-black text-[#8dc63f] tracking-wide">
              {pkg.price} <span className="text-[10px] text-slate-400 font-normal">/ Traveler</span>
            </span>
            <CardBadge value={pkg.rating} icon="★" />
          </div>

          {/* Duration Footer Field layout matching count configuration */}
          <p className="text-[13px] font-bold text-[#074675] tracking-normal mb-0.5">
            {pkg.duration}
          </p>

          {/* Action Link Arrow Block matching template boundaries precisely */}
          <div className="absolute right-0 bottom-0">
            <Link 
              href="/"
              className="w-12 h-12 rounded-tl-[14px] rounded-br-[20px] rounded-tr-none rounded-bl-none bg-[#dbecf6] text-[#074675] group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-all duration-300 outline-none active:scale-95 shadow-sm"
              aria-label={`Explore ${pkg.title}`}
            >
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}