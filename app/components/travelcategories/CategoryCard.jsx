import React from "react";
import Link from "next/link";

export default function CategoryCard({ title, image, count, price }) {
  return (
    /* Outer column block layout matching col-lg-3 col-md-6 col-sm-12 categories-block */
    <div className="w-full categories-block">
      
      {/* Main card box (.categories-block-one)
          Changes background from transparent overlay look to solid white when active/hovered
      */}
      <div 
        className="group w-full rounded-[24px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/20 border bg-[#063a62]/40 hover:bg-white border-[#EDF2F5] hover:border-transparent"
      >

        <figure className="relative w-full aspect-[270/298] overflow-hidden rounded-[20px] bg-slate-100">
          <img 
            src={image || "/assets/images/resource/categories-1.png"} 
            alt="Category Graphic Asset" 
            width={270}
            height={298}
            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </figure>

        <div 
        style={{
            "--shape-url": "url('/images/card-shape.svg')"
          }}
        className={`relative block z-[2] mt-[-37px] pt-[18px] pr-[15px] pb-[19px] pl-[25px] rounded-r-[20px] rounded-bl-[20px] rounded-tl-none flex flex-col items-start justify-center transition-colors duration-300 bg-[#edf2f5]
            
            
            /* BEFORE: Safely renders the inverted masking curve on the left seam link */
            before:content-[''] before:absolute before:top-[-38px] before:left-[-1px] before:w-[130px] before:h-[120px] before:bg-[image:var(--shape-url)] before:bg-no-repeat before:transition-opacity before:duration-300 before:opacity-100 
            
          `}>
          
          <p className="text-[13px] font-medium text-slate-500 group-hover:text-orange-500 transition-colors tracking-normal mb-0.5">
            {count}
          </p>

          {/* Pricing Target (.special-text .price) */}
          <span className="text-[15px] font-black text-slate-600 group-hover:text-orange-500 transition-colors tracking-wide">
            {price}
          </span>

          {/* 4. Action Button Link Wrap Block (.link)
              Anchored down exactly onto the bottom right-hand border boundaries using a flat rectangular edge shape.
          */}
          <div className="absolute right-0 bottom-0">
            <Link 
              href="/"
              className="w-12 h-12 rounded-tl-[14px] rounded-br-[20px] rounded-tr-none rounded-bl-none bg-slate-200 text-slate-600 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-all duration-300 outline-none active:scale-95 shadow-sm"
              aria-label={`Explore ${title}`}
            >
              {/* Fallback svg representing flaticon-arrow vector */}
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