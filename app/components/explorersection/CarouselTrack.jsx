import React from "react";
import CountryCard from "./CountryCard";

const DESTINATIONS = [
  { id: 1, name: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80", tours: "15+", price: "$299" },
  { id: 2, name: "Egypt", image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80", tours: "30+", price: "$149" },
  { id: 3, name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80", tours: "10+", price: "$479" },
  { id: 4, name: "Brazil", image: "https://images.unsplash.com/photo-1516306580627-e20d626d517e?auto=format&fit=crop&w=400&q=80", tours: "05+", price: "$299" },
  { id: 5, name: "Island", image: "https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?auto=format&fit=crop&w=400&q=80", tours: "04+", price: "$599" },
  { id: 6, name: "Thailand", image: "https://images.unsplash.com/photo-1528181304800-2f1258bb9f35?auto=format&fit=crop&w=400&q=80", tours: "25+", price: "$199" },
];

export default function CarouselTrack({ trackRef, setActiveIndex, totalDots }) {
  
  // Track scroll position dynamically
  const handleScroll = (e) => {
    const track = e.currentTarget;
    const scrollLeft = track.scrollLeft;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    if (maxScrollLeft <= 0) return;

    // Calculate current slide step index
    const percentage = scrollLeft / maxScrollLeft;
    const index = Math.round(percentage * (totalDots - 1));
    setActiveIndex(index);
  };

  return (
    <div 
      ref={trackRef}
      onScroll={handleScroll}
      className="w-full overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory"
    >
      <div className="flex gap-5 md:grid md:grid-cols-3 lg:grid-cols-6 min-w-max md:min-w-0 px-2">
        {DESTINATIONS.map((dest) => (
          <div key={dest.id} className="animate-card snap-center w-[280px] md:w-auto">
            <CountryCard 
              name={dest.name} 
              image={dest.image} 
              tours={dest.tours} 
              price={dest.price} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}