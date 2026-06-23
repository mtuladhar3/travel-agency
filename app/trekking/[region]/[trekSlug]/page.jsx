"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { HiOutlineLocationMarker, HiOutlineShieldCheck } from "react-icons/hi";
import { 
  FiClock, FiUsers, FiCompass, FiChevronDown, FiChevronUp, 
  FiPlus, FiMinus, FiChevronLeft, FiChevronRight, FiX 
} from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi"; 
import { trekkingSliderPackages } from "../../../components/home/trekkingslider/trekkingSliderData";

export default function PackageDetailPage() {
  const { region, packageSlug } = useParams();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview"); 
  const [expandedDay, setExpandedDay] = useState(0); 
  const [expandedFaq, setExpandedFaq] = useState(0); 
  const [lightboxIndex, setLightboxIndex] = useState(null); 

  const packageData = trekkingSliderPackages.find(p => 
    p.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "") === packageSlug
  ) || {
    title: "Himalayan Base Camp Expedition",
    location: "Solukhumbu, Nepal",
    price: "$1,299 - $1,599",
    duration: "12 Days",
    image: "/images/about-banner.webp",
  };

  const galleryImages = packageData.gallery || [
    packageData.image || "/images/about-banner.webp",
    "/images/about-banner.webp",
    "/images/about-banner.webp",
    "/images/about-banner.webp",
    "/images/about-banner.webp",
    "/images/about-banner.webp",
  ];

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
    { id: "included", label: "What's Included" },
    { id: "gallery", label: "Gallery" },
    { id: "faq", label: "FAQ" }
  ];

  const itineraryIntroText = "Lorem ipsum dolor sit amet consectetur. Lectus tortor et sit orci consequat. Blandit sit risus penatibus elit consequat faucibus. In tincidunt ipsum mauris egestas nisi commodo pharetra. Ultricies tellus eget dictum ultrices in tortor. Lorem viverra egestas nec purus non odio. Tristique nibh elit facilisis aenean diam odio turpis. Congue sed vel eu sit ut nec vel habitant.";

  const itineraryDays = [
    { day: "Day 01", title: "Arrival & exploration", desc: "Lorem ipsum dolor sit amet consectetur. Lectus tortor et sit orci consequat. Blandit sit risus penatibus elit consequat faucibus. In tincidunt ipsum mauris egestas nisi commodo pharetra." },
    { day: "Day 02", title: "Adventure & outdoor activities", desc: "Lorem ipsum dolor sit amet consectetur. Lectus tortor et sit orci consequat. Blandit sit risus penatibus elit consequat faucibus. In tincidunt ipsum mauris egestas nisi commodo pharetra." },
    { day: "Day 03", title: "Shopping & relaxation", desc: "Lorem ipsum dolor sit amet consectetur. Lectus tortor et sit orci consequat. Blandit sit risus penatibus elit consequat faucibus. In tincidunt ipsum mauris egestas nisi commodo pharetra." },
    { day: "Day 04", title: "Departure", desc: "Lorem ipsum dolor sit amet consectetur. Lectus tortor et sit orci consequat. Blandit sit risus penatibus elit consequat faucibus. In tincidunt ipsum mauris egestas nisi commodo pharetra." }
  ];

  const faqs = [
    { q: "How do I book a tour?", a: "You can book directly through our website by selecting your preferred tour and dates, then following the secure checkout process." },
    { q: "Can I customize my itinerary?", a: "Yes! All of our regional packages can be tailored to match your specific duration preferences, group sizes, and lodging requirements." },
    { q: "Are flights included?", a: "As outlined in our Tour Excludes summary card, international airfare is not included. However, regional domestic transfer flights are covered where specified." },
    { q: "How many people are in a group tour?", a: "Our typical group sizes range from 4 up to a maximum threshold of 32 travelers to maintain optimal balance and high safety coordination standards." }
  ];

  // 💡 1. Smooth Scroll to Section Handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Keeps padding at the top so sticky nav headers don't block titles
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // 💡 2. Dynamic Scrollspy Highlights active nav item based on viewport tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDayAccordion = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-neutral-50 pb-24">
      
      {/* 🏔️ Hero Display Section */}
      <section className="relative h-[95vh] min-h-[780px] w-full overflow-hidden bg-neutral-900">
        <Image
          src={packageData.image || "/images/about-banner.webp"}
          alt={packageData.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div 
          className="snow-effect-layer absolute inset-0 z-20 pointer-events-none" 
          style={{ mixBlendMode: 'screen' }} 
        />
        <div className="absolute inset-x-0 bottom-16 z-30 w-full max-w-7xl mx-auto px-6 md:px-10 pb-4 text-white">
          <button 
            onClick={() => router.push(`/trekking/${region}`)}
            className="mb-4 text-xs font-semibold tracking-wider uppercase text-white hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← Back to {region} region
          </button>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-sky-700 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
              Featured Trek
            </span>
            <div className="flex items-center text-md text-neutral-50 gap-1">
              <HiOutlineLocationMarker className="text-neutral-50" />
              {packageData.location}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-4xl capitalize">
            {packageData.title}
          </h1>
        </div>
      </section>

      {/* 📊 Floating Stats Bar */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 -mt-10">
        <div className="w-full bg-white rounded-2xl md:rounded-full border border-neutral-200/60 p-6 md:py-6 md:px-12 shadow-xl shadow-neutral-200/40 grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-6 md:gap-x-2">
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            <FiClock className="text-[24px] md:text-[28px] text-neutral-700 stroke-[1.5] shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-neutral-800 leading-tight">Duration</p>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">{packageData.duration || "9 Nights - 10 Days"}</p>
            </div>
          </div>
          <div className="hidden md:block h-10 w-[1px] bg-neutral-200/80" />
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            <BiTrendingUp className="text-[28px] md:text-[32px] text-neutral-700 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-neutral-800 leading-tight">Min age</p>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">12</p>
            </div>
          </div>
          <div className="hidden md:block h-10 w-[1px] bg-neutral-200/80" />
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            <FiCompass className="text-[24px] md:text-[28px] text-neutral-700 stroke-[1.5] shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-neutral-800 leading-tight">Tour type</p>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">Family trip</p>
            </div>
          </div>
          <div className="hidden md:block h-10 w-[1px] bg-neutral-200/80" />
          <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
            <FiUsers className="text-[24px] md:text-[28px] text-neutral-700 stroke-[1.5] shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-neutral-800 leading-tight">Max people</p>
              <p className="text-[11px] sm:text-xs text-neutral-500 font-medium mt-0.5">32</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 Core Workspace Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
        
        {/* Left Side Scrolling Content Column */}
        <div className="space-y-12">
          
          {/* 💡 Sticky Nav Navigation Bar Header bar */}
          <div className="sticky top-0 bg-neutral-50 pt-4 pb-3 border-b border-neutral-200 gap-6 overflow-x-auto no-scrollbar z-40 flex">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`pb-2 text-sm font-bold tracking-wide border-b-2 transition-all cursor-pointer whitespace-nowrap focus:outline-none ${
                  activeSection === item.id 
                    ? "border-sky-700 text-sky-700" 
                    : "border-transparent text-neutral-400 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Section 1: Overview Module */}
          <div id="overview" className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-100 space-y-6 scroll-mt-24">
            <h2 className="text-xl font-bold text-neutral-900">Expedition Overview</h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Experience the raw grandeur of the {region} range. This meticulously crafted itinerary blends immersive cultural discoveries inside ancient native villages with exhilarating high-altitude mountain pass crossings. Perfect for enthusiastic hikers looking for a breathtaking challenge.
            </p>
          </div>

          {/* Section 2: Itinerary Breakdown Accordion */}
          <div id="itinerary" className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-xs scroll-mt-24">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Tour plan</h2>
            <p className="text-neutral-500 text-sm leading-relaxed mt-4 mb-10 max-w-4xl">
              {itineraryIntroText}
            </p>

            <div className="relative border-l border-neutral-300 ml-20 pl-8 space-y-2">
              {itineraryDays.map((item, idx) => {
                const isOpen = expandedDay === idx;
                return (
                  <div key={idx} className="relative pb-6 last:pb-0">
                    <div className="absolute -left-[40px] top-[15px] h-3.5 w-3.5 rounded-full bg-sky-700 ring-4 ring-white z-10" />
                    <div className="absolute -left-[115px] top-[10px] w-16 text-right select-none">
                      <span className="text-sm font-bold text-sky-700 tracking-wide">{item.day}</span>
                    </div>

                    <div className="border-b border-neutral-100 last:border-0 pb-4">
                      <button
                        onClick={() => toggleDayAccordion(idx)}
                        className="w-full flex items-center justify-between text-left py-2 group cursor-pointer focus:outline-none"
                      >
                        <h3 className="text-base sm:text-lg font-bold text-neutral-800 transition-colors group-hover:text-sky-700">
                          {item.title}
                        </h3>
                        <div className="text-neutral-400 transition-colors group-hover:text-neutral-700 pr-2">
                          {isOpen ? <FiChevronUp className="text-xl" /> : <FiChevronDown className="text-xl" />}
                        </div>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-neutral-500 leading-relaxed max-w-3xl pr-4 pb-2">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: What's Included Modules */}
          <div id="included" className="space-y-6 scroll-mt-24">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200/80 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8 items-center shadow-xs">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Includes</h2>
                <p className="text-xs text-neutral-500 font-medium">Items covered in the package.</p>
              </div>
              <div className="border-l-0 md:border-l border-neutral-300/80 md:pl-8">
                <ul className="space-y-4 text-sm text-neutral-600 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white text-[10px] font-bold">✓</span>
                    6 night accommodation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white text-[10px] font-bold">✓</span>
                    Daily meals
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white text-[10px] font-bold">✓</span>
                    Airport pickup and drop-off
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white text-[10px] font-bold">✓</span>
                    All ground transportation
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200/80 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8 items-center shadow-xs">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Excludes</h2>
                <p className="text-xs text-neutral-500 font-medium">Items not covered in the package.</p>
              </div>
              <div className="border-l-0 md:border-l border-neutral-300/80 md:pl-8">
                <ul className="space-y-4 text-sm text-neutral-600 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold">✕</span>
                    International airfare
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold">✕</span>
                    Visa fees
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold">✕</span>
                    Travel insurance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold">✕</span>
                    Personal expenses
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Gallery Modules */}
          <div id="gallery" className="space-y-6 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Expedition Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  onClick={() => setLightboxIndex(index)}
                  className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden cursor-pointer group border border-neutral-200"
                >
                  <Image
                    src={src}
                    alt={`Gallery view ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center" />
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: FAQs Panel Accordion */}
          <div id="faq" className="space-y-6 scroll-mt-24">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl">
              {faqs.map((faq, i) => {
                const isFaqOpen = expandedFaq === i;
                return (
                  <div 
                    key={i} 
                    className={`overflow-hidden transition-all duration-300 rounded-3xl border ${
                      isFaqOpen ? "border-sky-700 bg-white shadow-sm" : "border-neutral-200 bg-white"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedFaq(isFaqOpen ? null : i)}
                      className={`w-full flex items-center gap-4 px-6 py-5 text-left font-bold text-base sm:text-lg transition-all focus:outline-none cursor-pointer ${
                        isFaqOpen ? "bg-sky-700 text-white" : "text-black hover:bg-neutral-50/40"
                      }`}
                    >
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-transform duration-200 ${
                        isFaqOpen ? "border-white text-white" : "border-neutral-300 text-neutral-400"
                      }`}>
                        {isFaqOpen ? <FiMinus className="text-xs stroke-[3]" /> : <FiPlus className="text-xs stroke-[3]" />}
                      </div>
                      <span className="tracking-tight leading-tight">{faq.q}</span>
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isFaqOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}>
                      <div className="overflow-hidden">
                        <p className="px-6 py-5 text-sm text-neutral-500 leading-relaxed font-sans max-w-3xl">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Sticky Sidebar Form Column */}
        <div className="space-y-6 lg:sticky lg:top-24 h-fit">
          <div className="rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-xs">
            <h3 className="text-lg font-bold text-neutral-900">Book This Expedition</h3>
            <p className="text-xs text-neutral-400 mt-0.5">Secure your departure slot or request custom updates.</p>
            
            <div className="mt-4 p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-baseline justify-between">
              <span className="text-xs text-neutral-500 font-medium">Estimated Pricing:</span>
              <span className="text-base font-bold text-neutral-900">{packageData.price || "$1,299"}</span>
            </div>

            <form className="mt-4 space-y-3.5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full text-sm p-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full text-sm p-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">Preferred Date</label>
                <input type="date" className="w-full text-sm p-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-500 focus:outline-none focus:border-blue-400 transition-colors" />
              </div>
              <button className="w-full mt-2 rounded-xl bg-sky-700 py-3.5 text-center text-sm font-bold text-white shadow-xs hover:bg-sky-700 transition-colors cursor-pointer">
                Submit Inquiry Request
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-neutral-900 p-5 text-white flex items-start gap-3">
            <HiOutlineShieldCheck className="text-2xl text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider">Secure Booking Guarantee</h4>
              <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                All itineraries provide flexible cancellation protection and free modifications up to 30 days before departure.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 🌌 Lightbox Modal Component */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-xs z-50 flex flex-col items-center justify-center p-4 md:p-10 select-none animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-blue-400 text-3xl focus:outline-none cursor-pointer p-2 z-50 transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <FiX />
          </button>
          <button 
            className="absolute left-4 md:left-8 bg-neutral-800/40 hover:bg-neutral-800/80 text-white rounded-full p-3 md:p-4 text-2xl focus:outline-none cursor-pointer z-50 transition-colors border border-neutral-700/30"
            onClick={handlePrevImage}
          >
            <FiChevronLeft />
          </button>
          <div 
            className="relative w-full max-w-5xl h-[60vh] md:h-[75vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              src={galleryImages[lightboxIndex]}
              alt={`Expanded view ${lightboxIndex + 1}`}
              fill
              priority
              className="object-contain"
            />
          </div>
          <button 
            className="absolute right-4 md:right-8 bg-neutral-800/40 hover:bg-neutral-800/80 text-white rounded-full p-3 md:p-4 text-2xl focus:outline-none cursor-pointer z-50 transition-colors border border-neutral-700/30"
            onClick={handleNextImage}
          >
            <FiChevronRight />
          </button>
          <div className="mt-4 text-neutral-400 text-xs font-medium tracking-wider">
            Image {lightboxIndex + 1} of {galleryImages.length}
          </div>
        </div>
      )}

    </main>
  );
}