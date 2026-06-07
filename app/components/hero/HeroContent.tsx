import { MapPin, Flag, Calendar, Search } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center text-center lg:text-left px-4 sm:px-6 lg:px-16 py-8 lg:py-12 max-w-2xl mx-auto lg:mx-0 relative z-10">
      
      {/* Skewed Badge Announcement */}
      <div className="self-center lg:self-start mb-4">
        <span className="inline-block bg-orange-500 text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md rotate-[-3deg] shadow-sm">
          Let's Explore
        </span>
      </div>

      {/* Responsive Headings */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-4">
        Beautiful life <br />
        <span className="font-sans font-normal text-gray-800">moments</span>
      </h1>
      
      <p className="text-gray-500 font-medium text-sm sm:text-base mb-8 lg:mb-10">
        Save up to 50% on your next Travel stay
      </p>

      {/* Fully Responsive Booking Bar Pill */}
      <div className="w-full bg-white rounded-2xl sm:rounded-full shadow-xl border border-gray-100 p-3 sm:p-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        
        {/* Destination Info */}
        <div className="flex items-center gap-3 px-4 py-1.5 sm:py-2 w-full sm:w-1/3 text-left">
          <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] text-gray-400 font-bold uppercase">Where to?</label>
            <input type="text" placeholder="Destinations" className="text-xs font-semibold text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent w-full" />
          </div>
        </div>

        {/* Trip Dropdown */}
        <div className="flex items-center gap-3 px-4 pt-3 sm:pt-2 pb-1.5 sm:py-2 w-full sm:w-1/3 text-left">
          <Flag className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <div className="w-full">
            <label className="block text-[10px] text-gray-400 font-bold uppercase">Trip Type</label>
            <select className="text-xs font-semibold text-gray-700 focus:outline-none bg-transparent w-full appearance-none cursor-pointer">
              <option>Adventure</option>
              <option>Leisure Stay</option>
              <option>Multi-day Tour</option>
            </select>
          </div>
        </div>

        {/* Duration picker & Action CTA */}
        <div className="flex items-center justify-between gap-2 px-4 pt-3 sm:pt-2 w-full sm:w-1/3 text-left">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <div>
              <label className="block text-[10px] text-gray-400 font-bold uppercase">Duration</label>
              <span className="text-xs font-semibold text-gray-700 block whitespace-nowrap">1 Days - 6 Days</span>
            </div>
          </div>
          
          <button className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-md flex-shrink-0">
            <Search className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}