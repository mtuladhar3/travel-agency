"use client";
import { motion } from "framer-motion";
// Importing clean, modern icons from react-icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCalendar, FiDollarSign } from "react-icons/fi";

export default function PackageCard({ item }) {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 w-[290px] sm:w-[350px] md:w-[380px] rounded-3xl border border-orange-100 bg-white p-4 shadow-sm select-none"
    >
      {/* Card Image Wrapper */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-orange-50">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover pointer-events-none"
        />
      </div>

      {/* Meta Content Area */}
      <div className="pt-5 pb-2 px-1 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
            {item.title}
          </h3>
        </div>

        {/* Info Rows */}
        <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-500 font-medium">
          
          {/* Location Vector Tag */}
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
            <span>{item.location}</span>
          </div>

          {/* Pricing & Duration Side-by-Side Row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            
            {/* Price Vector Tag */}
            <div className="flex items-center gap-1.5">
              <FiDollarSign className="h-4 w-4 text-orange-500 flex-shrink-0" />
              <span>
                Start From <span className="text-neutral-800 font-semibold">{item.price}</span>
              </span>
            </div>

            {/* Duration Vector Tag */}
            <div className="flex items-center gap-2">
              <FiCalendar className="h-4 w-4 text-orange-500 flex-shrink-0" />
              <span>{item.duration}</span>
            </div>

          </div>
        </div>

        {/* View Details Action Button */}
        <motion.button 
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-2xl bg-orange-50 py-3.5 text-center text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white"
        >
          View Package Details
        </motion.button>
      </div>
    </motion.div>
  );
}