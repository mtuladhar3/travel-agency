"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Flag, Calendar, Search } from "lucide-react";

// Mock Data matching your layout examples
const suggestedDestinations = [
  { name: "Australia", desc: "Coastal cities and...", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=60&q=80" },
  { name: "Canada", desc: "Nature, lakes, and...", img: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=60&q=80" },
  { name: "Greece", desc: "Ancient history meets...", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=60&q=80" },
  { name: "Indonesia", desc: "Tropical paradise with...", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=60&q=80" },
  { name: "Los Angeles", desc: "Entertainment capital of...", img: "https://images.unsplash.com/photo-1542736667-069246bddd6e?w=60&q=80" },
  { name: "Maldives", desc: "Luxury overwater beach...", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=60&q=80" },
];

const tripTypes = ["City Tour", "Desert Safari", "Festival Tour", "Honeymoon Tour", "Wildlife Safari"];

export default function HeroContent() {
  // Toggle states for dropdown panels
  const [activeDropdown, setActiveDropdown] = useState(null); // 'where', 'type', 'duration', or null

  // Input value selections
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedTripType, setSelectedTripType] = useState("Trip Type");
  const [daysRange, setDaysRange] = useState(6); // Default slider value matching image

  const searchBarRef = useRef(null);

  // Close dropdowns if the user clicks outside the search bar box
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full text-left pl-4 sm:pl-8 lg:pl-55 pr-4 py-4 select-none relative z-30">
      
      {/* Badge */}
      <div className="mb-2 pl-1">
        <span className="inline-block bg-[#FF4E25] text-white text-[11px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-md rotate-[0deg] shadow-sm">
          Last's Explore
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[48px] sm:text-[64px] lg:text-[100px] font-serif text-[#0F2220] font-normal leading-[0.9] tracking-tight mb-3">
        Beautiful life <br />
        <span className="font-serif">moments</span>
      </h1>
      
      {/* Subtext */}
      <p className="text-gray-500 font-normal lg:text-[18px] text-xs sm:text-sm tracking-wide mb-6 pl-1">
        Save up to 50% on your next Travel stay
      </p>

      {/* Main Search Bar Wrapper */}
      <div 
        ref={searchBarRef}
        className="w-full max-w-xl bg-white rounded-full border border-gray-100 shadow-[0_12px_35px_rgba(0,0,0,0.04)] p-1.5 flex items-center justify-between relative"
      >
        
        {/* 1. WHERE TO FIELD (image_698d20.png) */}
        <div 
          onClick={() => setActiveDropdown("where")}
          className={`flex items-center gap-2 pl-3 pr-2 py-2 w-[36%] border-r border-gray-100 cursor-pointer rounded-full transition-colors ${
            activeDropdown === "where" ? "bg-slate-50" : ""
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <input 
            type="text" 
            readOnly
            value={selectedDestination}
            placeholder="Where to ?" 
            className="text-xs font-medium text-gray-600 placeholder-gray-400 focus:outline-none bg-transparent w-full cursor-pointer"
          />

          {/* Destination Dropdown Panel */}
          {activeDropdown === "where" && (
            <div className="absolute top-[115%] left-0 w-[380px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-5 z-50 max-h-[400px] overflow-y-auto flex flex-col text-left">
              <span className="text-xs font-medium text-gray-400 mb-3 block">Suggested destinations</span>
              <div className="space-y-3">
                {suggestedDestinations.map((dest) => (
                  <div 
                    key={dest.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDestination(dest.name);
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 p-1.5 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <img src={dest.img} alt={dest.name} className="w-11 h-11 rounded-xl object-cover" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-800 leading-tight">{dest.name}</span>
                      <span className="text-xs text-gray-400">{dest.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 2. TRIP TYPE FIELD (image_698d07.png) */}
        <div 
          onClick={() => setActiveDropdown("type")}
          className={`flex items-center gap-2 px-3 py-2 w-[28%] border-r border-gray-100 cursor-pointer rounded-full transition-colors relative ${
            activeDropdown === "type" ? "bg-slate-50" : ""
          }`}
        >
          <Flag className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span className={`text-xs font-medium whitespace-nowrap truncate ${
            selectedTripType === "Trip Type" ? "text-gray-400" : "text-gray-700"
          }`}>
            {selectedTripType}
          </span>

          {/* Trip Type Dropdown Panel */}
          {activeDropdown === "type" && (
            <div className="absolute top-[115%] left-0 w-52 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-3 z-50 flex flex-col text-left gap-1">
              <span className="text-xs font-bold text-[#FF4E25] px-3 py-1.5">Trip Type</span>
              {tripTypes.map((type) => (
                <button
                  key={type}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTripType(type);
                    setActiveDropdown(null);
                  }}
                  className="text-left px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-[#FF4E25] rounded-md transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3. DURATION RANGE FIELD (image_698d05.png) */}
        <div 
          onClick={() => setActiveDropdown("duration")}
          className={`flex items-center justify-between gap-1 pl-3 pr-0.5 py-1 w-[36%] cursor-pointer rounded-full transition-colors relative ${
            activeDropdown === "duration" ? "bg-slate-50" : ""
          }`}
        >
          <div className="flex items-center gap-1.5 overflow-hidden">
            <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <span className="text-xs font-medium text-gray-600 whitespace-nowrap">
              1 Days - {daysRange} Days
            </span>
          </div>
          
          {/* Action Search Circle Trigger */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveDropdown(null);
              alert(`Searching for: ${selectedDestination || "Anywhere"}, Type: ${selectedTripType}, Duration: 1-${daysRange} Days`);
            }}
            className="w-9 h-9 bg-[#FF4E25] rounded-full flex items-center justify-center text-white hover:bg-[#e23b14] transition-all duration-150 flex-shrink-0 shadow-sm shadow-orange-500/20"
          >
            <Search className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Duration Range Slider Dropdown Panel */}
          {activeDropdown === "duration" && (
            <div 
              onClick={(e) => e.stopPropagation()} // Stop click closed behaviors inside panel
              className="absolute top-[115%] right-0 w-64 bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-4 z-50 flex flex-col"
            >
              {/* Range Track Controller Container */}
              <div className="relative pt-2 pb-1">
                <input 
                  type="range" 
                  min="2" 
                  max="14" 
                  value={daysRange} 
                  onChange={(e) => setDaysRange(Number(e.target.value))}
                  className="w-full accent-[#FF4E25] cursor-pointer h-1.5 bg-gray-200 rounded-lg appearance-none"
                />
              </div>

              {/* Slider Info Label Elements */}
              <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mt-2">
                <span>1 Days</span>
                <span>{daysRange} Days</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}