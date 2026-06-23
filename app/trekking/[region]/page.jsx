import React from "react";
// 💡 Safely adjust your imports according to your folder paths
import { navItems } from "../../components/navbar/navItems"; 
import Image from "next/image";
import PackageCard from "../../components/home/trekkingslider/PackageCard"; 
import { trekkingSliderPackages } from "../../components/home/trekkingslider/trekkingSliderData"; 

// Helper function to turn "Everest Region, Nepal" into "everest"
const getRegionSlug = (locationString) => {
  if (!locationString) return "";
  const primaryPart = locationString.split(",")[0];
  return primaryPart
    .replace(/region/i, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
};

export default async function RegionHubPage({ params }) {
  // 1. Await dynamic parameters from the URL slug route matching /[region]/
  const { region } = await params;

  // 2. Safely extract nav configuration data for our fallback headers
  const trekkingData = navItems?.find((item) => item.name === "Trekking");
  const fallbackRegionData = trekkingData?.regions?.find(
    (r) => r.href === `/trekking/${region}` || r.label.toLowerCase().includes(region)
  );

  // 3. Define the dynamic fallback name to prevent a ReferenceError crash
  const regionName = fallbackRegionData?.label || 
    region.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  // 4. Filter down packages targeting exclusively this directory structure
  const filteredPackages = trekkingSliderPackages?.filter((pkg) => {
    return getRegionSlug(pkg.location) === region.toLowerCase();
  }) ?? [];

  return (
    <main className="">
      <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-24 sm:min-h-[75vh] lg:min-h-screen">
        <Image
          src="/images/about-banner.webp"
          alt="Traveler standing on snowy mountain"
          fill
          priority
          className="object-cover object-center"
        />
        <div 
          className="snow-effect-layer absolute inset-0 z-20 pointer-events-none" 
          style={{ mixBlendMode: 'screen' }} 
        />
        <div 
          className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden h-full z-[110]"
        >
          {/* Layer 1: Floating background cloud ribbon */}
          <div 
            className="absolute left-0 bottom-[0px] w-full h-[300px] opacity-100 bg-no-repeat bg-cover bg-top"
            style={{ 
              backgroundImage: "url('/images/full-cloud.png')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-50 sm:pb-50 flex flex-col items-start justify-end gap-4 text-white">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdf5df] text-[#2b1408] text-xs font-semibold tracking-wider uppercase border border-amber-200/30 shadow-sm mb-2">
            <span className="text-[10px]">⚙</span>
            Trekking
            <span className="text-[10px]">⚙</span>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl text-left">
            We curate raw
            <br />
            Himalayan <span className="italic font-serif font-normal text-white/95">expeditions</span>
          </h1>
          
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/80 font-sans leading-relaxed text-left tracking-wide">
            From handpicked destinations to seamless logistics, our mission is to
            make every journey personal, meaningful, and unforgettable.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 sm:px-12 md:py-10 lg:px-20 xl:px-32">
        <div className="mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="border-b border-neutral-100 pb-6 mb-12">
            <h2 className="text-balance text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              {regionName} <span className="font-serif italic font-normal text-sky-700">Expeditions</span>
            </h2>
          </div>

          {/* Package Route Listings Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((packageItem) => {
                // Safely slice out the trailing route identifier phrase string segment
                const trekSlug = packageItem.href.split("/").pop();
                // 💡 Combines to point directly onto: trekking/[region]/[trekSlug]
                const preciseTrekUrl = `/trekking/${region}/${trekSlug}`;

                return (
                  <PackageCard
                    key={packageItem.id}
                    tour={packageItem}
                    regionHref={preciseTrekUrl} // Make sure PackageCard uses this prop for routing links
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-neutral-200 rounded-3xl bg-neutral-50">
              <p className="text-neutral-400 font-medium">
                No trekking itineraries found under the "{regionName}".
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}