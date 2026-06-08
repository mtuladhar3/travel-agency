import { packageData } from "./packageData";
import SectionHeader from "./SectionHeader";
import PackageCard from "./PackageCard";

export default function PackageGrid() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <SectionHeader />

        {/* Packages Display Layout Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {packageData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* CENTERED SEE MORE FOOTER BUTTON */}
        <div className="flex justify-center mt-4">
          <button className="bg-[#ffe9d5] hover:bg-[#FF7A00] text-[#FF7A00] hover:text-white text-[13px] font-extrabold uppercase tracking-wider px-8 py-4 rounded-md transition-all duration-200 active:scale-98 shadow-sm">
            See More Tours
          </button>
        </div>

      </div>
    </section>
  );
}