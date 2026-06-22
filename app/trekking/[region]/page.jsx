"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
// 📁 Importing clean, modern vector design icons from react-icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCalendar, FiDollarSign } from "react-icons/fi";
import { navItems } from "../../components/navbar/navItems";
// 📁 Importing your real package array containing Everest, Annapurna, Langtang, etc.
import { trekkingSliderPackages } from "../../components/home/trekkingslider/trekkingSliderData";

export default function RegionHubPage() {
  const { region } = useParams(); 
  const router = useRouter();

  // Find this specific region's data inside your main navItems array for headers
  const currentCategory = navItems.find((item) => item.name === "Trekking");
  const regionData = currentCategory?.regions?.find(
    (r) => r.href === `/trekking/${region}`
  );

  // Pulls your real, distinct master array containing your core trekking packages
  const packages = trekkingSliderPackages || [];

  return (
    <main className="bg-neutral-50 min-h-screen">
    
      {/* Hero Header Banner */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto pb-16 sm:pb-24 flex flex-col items-start justify-end gap-4 text-white">
          
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdf5df] text-[#2b1408] text-xs font-semibold tracking-wider uppercase border border-amber-200/30 shadow-sm mb-2">
            <span className="text-[10px]">⚙</span>
            Trekking 
            <span className="text-[10px]">⚙</span>
          </div>

          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl text-left capitalize">
            {regionData?.label || region}
          </h1>
          
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/80 font-sans leading-relaxed text-left tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi sint recusandae optio magni facere aspernatur autem rerum neque consectetur rem, deleniti dolores tenetur eligendi quam enim unde impedit dolorum.
          </p>
        </div>
      </section>

      {/* Package Card Layout Grid */}
      <section className="w-full bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20 xl:px-32">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Available Expeditions
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Explore handpicked journeys across the {regionData?.label || region} range.
            </p>
          </div>

          {/* Grid setup mapping out the unified design profile card views */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {packages.map((item, idx) => (
              <div 
                key={item.id || idx}
                onClick={() => {
  // Generates a clean URL slug out of your text title automatically
  const packageSlug = item.title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
    
  router.push(`/trekking/${region}/${packageSlug}`);
}}
                className="group w-full rounded-3xl border border-orange-100 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md cursor-pointer select-none"
              >
                {/* Card Image Wrapper */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-orange-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Meta Content Area */}
                <div className="pt-5 pb-2 px-1 flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl transition-colors group-hover:text-orange-500">
                      {item.title}
                    </h3>
                  </div>

                  {/* Info Rows */}
                  <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-500 font-medium">
                    
                    {/* Location Tag */}
                    <div className="flex items-center gap-2">
                      <HiOutlineLocationMarker className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 flex-shrink-0" />
                      <span>{item.location || `${regionData?.label || region}, Nepal`}</span>
                    </div>

                    {/* Pricing & Duration Row */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                      
                      {/* Price Tag */}
                      <div className="flex items-center gap-1.5">
                        <FiDollarSign className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>
                          Start From <span className="text-neutral-800 font-semibold">{item.price}</span>
                        </span>
                      </div>

                      {/* Duration Tag */}
                      <div className="flex items-center gap-2">
                        <FiCalendar className="h-4 w-4 text-orange-500 flex-shrink-0" />
                        <span>{item.duration}</span>
                      </div>

                    </div>
                  </div>

                  {/* View Details Action Button Simulation */}
                  <div className="w-full rounded-2xl bg-orange-50 py-3.5 text-center text-sm font-semibold text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    View Package Details
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
    </main>
  );
}