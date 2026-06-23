import React from "react";

export default function SearchCard() {
  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/80 border border-slate-100/60">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
        
        {/* Field 1: Where do you want to go */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-900 tracking-wide">
            Where do you want to go?
          </label>
          <div className="relative">
            <select className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 appearance-none outline-none focus:border-sky-700 transition-colors cursor-pointer">
              <option value="">Destination</option>
              <option value="nepal">Nepal Trekking</option>
              <option value="europe">Europe Tour</option>
              <option value="bali">Bali Tropical</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        {/* Row 2: Date & Duration Split Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Field 2a: Date Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 tracking-wide">
              Date
            </label>
            <div className="relative">
              <input 
                type="date" 
                placeholder="dd/mm/yyyy"
                className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 outline-none focus:border-sky-700 transition-colors"
              />
            </div>
          </div>

          {/* Field 2b: Duration Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-900 tracking-wide">
              Duration
            </label>
            <div className="relative">
              <select className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 appearance-none outline-none focus:border-sky-700 transition-colors cursor-pointer">
                <option value="1-3">1 days - 3 days</option>
                <option value="4-7">4 days - 7 days</option>
                <option value="8+">8 days +</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Field 3: Number of Travelers */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-900 tracking-wide">
            Number of Travelers
          </label>
          <div className="relative">
            <select className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 appearance-none outline-none focus:border-sky-700 transition-colors cursor-pointer">
              <option value="1">1 People</option>
              <option value="2">2 People</option>
              <option value="3-5">3 - 5 People</option>
              <option value="6+">6+ People</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        {/* Submit Action Button Block */}
        <div className="pt-2">
          <button 
            type="submit" 
            className="group flex items-center justify-between pl-6 pr-2 h-12 bg-sky-700 hover:bg-sky-700 text-white font-bold text-sm rounded-full w-48 shadow-md shadow-sky-700/20 transition-all duration-300"
          >
            <span>Search Tours</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sky-700 transition-transform group-hover:translate-x-0.5">
              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </button>
        </div>

      </form>
    </div>
  );
}