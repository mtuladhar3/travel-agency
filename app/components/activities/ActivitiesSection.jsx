"use client";
import { useState } from "react";
import ActivitiesHeader from "./ActivitiesHeader";
import ActivityImageShowcase from "./ActivityImageShowcase";
import ActivityAccordionItem from "./ActivityAccordionItem";

export default function ActivitiesSection() {
  // Activity database array mapped directly to layout 
  const activitiesData = [
    {
      id: "01",
      title: "Kayaking",
      image: "https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?w=800&auto=format&fit=crop&q=80",
      description: "Glide through serene waters and discover breathtaking scenery and hidden sea caves with our signature kayaking adventures."
    },
    {
      id: "02",
      title: "Climbing",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&auto=format&fit=crop&q=80",
      description: "Challenge your boundaries on towering granite walls under the guidance of world-class mountain experts."
    },
    {
      id: "03",
      title: "Hiking",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&auto=format&fit=crop&q=80",
      description: "Traverse high alpine meadows and dramatic ridgelines across unforgettable panoramic mountain trails."
    },
    {
      id: "04",
      title: "Mountain biking",
      image: "https://images.unsplash.com/photo-1544192240-4a34feb0104a?w=800&auto=format&fit=crop&q=80",
      description: "Descend rugged backcountry singletracks and sweeping red rock canyons at exhilarating speeds."
    },
    {
      id: "05",
      title: "Tent Camping",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop&q=80",
      description: "Sleep beneath a blanket of wilderness stars nestled close to deep ancient pine forests and crystal lakes."
    }
  ];

  // Tracks the current active active item index row context
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative flex w-full items-center overflow-hidden bg-white px-6 py-16 sm:px-12 md:py-20 lg:px-20 xl:px-32">
      
      {/* Background Vector Mountain Line-Art Accent Overlay 
          Reuses your extracted asset image_4c6901.jpg as a subtle dark background watermark texture
      */}
      <div 
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: "url('image_4c6901.jpg')",
        }}
      />

      <div className="mx-auto max-w-7xl w-full relative z-10 flex flex-col">
        {/* Render Title Row Block */}
        <ActivitiesHeader />

        {/* Structural Main Grid split: Left (Image), Right (Accordion rows) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Image Area spanned over 5 layout units */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ActivityImageShowcase
              activeImage={activitiesData[activeIndex].image}
            />
          </div>

          {/* Right Column: Interactive Accordion stacked rows spanned over 7 layout units */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col w-full">
            {activitiesData.map((item, index) => (
              <ActivityAccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}