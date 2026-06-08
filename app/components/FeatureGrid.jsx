import React from 'react';
import FeatureCard from './FeatureCard';
import { Ship, Bike, Tent, ShieldCheck } from 'lucide-react';

export default function FeaturesGrid() {
  const featuresData = [
    {
      icon: Ship,
      title: "Boat Tours & Fishing",
      description: "Enjoy world-class travel experiences without breaking your budget."
    },
    {
      icon: Bike,
      title: "Bike Adventures",
      description: "Join unforgettable festivals concerts local celebrations."
    },
    {
      icon: Tent,
      title: "Outdoor Camping",
      description: "Join unforgettable festivals concerts local celebrations."
    },
    {
      icon: ShieldCheck,
      title: "Complete Safety",
      description: "Join unforgettable festivals concerts local celebrations."
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-full sm:mx-auto lg:mx-50 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, idx) => (
            <FeatureCard 
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}