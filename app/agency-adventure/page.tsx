import React from 'react';
import { MainHeader } from "../components/headers";
import { MainHero } from "../components/hero-banners";

export default function AdventureAgencyHome() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] antialiased">
      {/* Header */}
      <MainHeader layoutOption={3} />

      {/* Hero */}
      <MainHero layoutOption={3} />
    </div>
  );
}