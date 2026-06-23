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
    { id: "gear", label: "Gear List" },
    { id: "training", label: "Training" },
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

  const [isExpanded, setIsExpanded] = useState(false);

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

          <div className=" pb-6 mb-12">
            <h2 className="text-balance text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
            Everest Base Camp Trek - A Journey to the Foot of <span className="font-serif italic font-normal text-sky-700"> The World’s Highest Peak </span>
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">Everest Base Camp Trek is an experience of a lifetime, a journey for those whose aspirations soar higher than even the clouds. Miles from conveniences and daily luxuries, you’ll immerse your spirit in nature and grow your personal strength beyond what you thought possible. The Everest Base Camp Trek begins in Kathmandu, where you will acclimate and explore the city at your convenience while awaiting your ascent. Your Everest Base Camp Trek (5,364m) to the base of the world’s tallest mountain will bring you over suspension bridges crossing chasms of thin air, through remarkable Buddhist monasteries, and into the heart of the friendly, mountainous Sherpa culture. As you travel beside thrill-seekers and photographers from all over the world, you’ll view Lhotse, Cho Oyu, and Makalu – three of Earth’s ten most towering peaks! You will spend the night in cozy, traditional teahouses. Our skilled, knowledgeable guides and porters are there to ensure the safest, most delightful, most enthralling experience possible. In the Everest Base Camp Trek, you will support local economies, uncover hidden strengths within yourself, make companions, and memories that will last a lifetime.</p>
          </div>
          
          {/* 💡 Sticky Nav Navigation Bar Header bar */}
          <div className="sticky top-0 bg-neutral-50 pt-3 pb-3 border-b border-neutral-200 gap-6 overflow-x-auto no-scrollbar z-40 flex">
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
<div id="overview" className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-100  shadow-xs space-y-6 scroll-mt-24">
  <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Overview</h2>
  
  <div className="space-y-4">
    {/* Always visible 1st Paragraph */}
    <p className="text-neutral-600 text-sm leading-relaxed">
      For people who want to make their dreams come true, the base camp trek to Everest is an experience of a lifetime. In the midst of nature, far from modern comforts, you’ll discover your inner strength and confidence in ways you never imagined possible. While waiting for your ascent, you can acclimatize and explore Kathmandu before beginning your trek to Everest Base Camp.
    </p>

    {/* Always visible 2nd Paragraph with inline conditional expansion toggler */}
    <p className="text-neutral-600 text-sm leading-relaxed">
      You’ll cross suspension bridges over chasms of thin air, visit Buddhist monasteries, and enter the heart of the friendly, mountainous Sherpa culture on your journey to Everest base camp. You’ll see Lhotse, Cho Oyu, and Makalu, three of Earth’s ten tallest peaks, as you travel with thrill seekers and photographers from around the world. Teahouses are where you’ll spend your nights, and they’ll be cozy and traditional.
      
      {/* 💡 Inline Read More Trigger (only visible when collapsed) */}
      {!isExpanded && (
        <button 
          onClick={() => setIsExpanded(true)}
          className="mt-2 text-sm font-bold text-sky-700 hover:text-sky-800 cursor-pointer transition-colors focus:outline-none"
        >
          Read more...
        </button>
      )}
    </p>

    {/* 💡 Collapsible Content Block holding paragraphs 3 to 12 */}
    <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
      isExpanded ? "grid-rows-[1fr] opacity-100 space-y-4" : "grid-rows-[0fr] opacity-0"
    }`}>
      <div className="overflow-hidden space-y-4">
        <p className="text-neutral-600 text-sm leading-relaxed">
          In order to provide you with the safest, most enjoyable, and most fascinating experience possible, we provide you with professional, knowledgeable guides and porters. As you trek to the base camp of Mount Everest, you’ll help the local economy, discover strengths within yourself, meet new people, and create lifelong memories. The Everest Base Camp Trek will retrace the steps of Sir Edmund Hillary and Tenzing Norgay, who reached the summit in 1953 on their epic ascent.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Trekking to Everest’s base camp is an incredible experience that will push you to your physical and mental limits while revealing your inner strength. This 14-day journey to the foot of the world’s tallest mountain is a chance for you to fulfill your ambitions, test your limits, and learn more about the majestic mountains and your own personal potential. You’ll be walking among giants of nature, soaking up the freedom that comes with abandoning Wi-Fi and Netflix, playing card games in cozy teahouses, learning about Sherpa life, and watching the sunrise over Mount Everest.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Depending on the season, you’ll see everything from still alpine lakes and glacial plains to frothing rivers and valleys draped in pink blossoms, in addition to the enormous, rugged mountains that surround you. When you embark on an adventure like this, you’ll form lifelong bonds with your fellow trekkers and enjoy the genuine camaraderie you’ll experience in your small group.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          On the flight from Kathmandu to Lukla, the most famous airport in Nepal, you’ll get your first glimpses of the mighty Himalayan range. The airport is well-known as a starting point for treks in the Everest region. Hike with an English-speaking local guide and a team of guides and porters who will introduce you to the rich Sherpa culture along the way. We work with local mountaineering and porter welfare programs, so you can rest easy knowing that while our porters are taking care of you, there’s someone looking out for them too.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Hiking in the Himalayas is no easy task. There are 11 days of hiking that last up to six hours a day, and you’ll reach an altitude of more than 5500 meters. When it comes to the weather, it varies according to the season. Anyone who has done it will tell you that the rewards are well worth the effort, but we cannot emphasize enough that you must be in excellent health to take part.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Our Everest base camp trek includes overnight stays in the best mountain lodges along the way. These teahouses offer great food choices and are neatly maintained. After a long and exhausting trek, you’ll be glad to relax in your cozy teahouse. Each season brings with it a unique set of scenery and conditions. Due to the popularity of the Everest Base Camp trek, it is likely that you will come across many other trekkers and groups both on the trail and at teahouses throughout your journey.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          The journey begins with the classic trek to Everest base camp. Following the thrilling flight to Lukla, it is a short and easy hike up to Phakding, the first rest stop. The hike will then continue to Namche, a Sherpa village. You will have a wonderful experience en route at Namche, where we will stay for two nights for acclimatization. The vibe here is incredible, with expedition teams and hikers from all over the world. We continue on to Tengboche, home of the famous Tengboche Monastery.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Tengboche Monastery is a well-known Buddhist monastery located above Namche Bazaar, the Sherpa capital. Tengboche provides breathtaking views of Ama Dablam, which is widely regarded as the world’s most beautiful mountain. The next stop will be Dingboche, where we will stay for two nights before continuing on to Lobuche and Gorakshep. After a long trek, arriving at Everest base camp is a dream come true, but it is well worth it.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          To add to the incredible feeling, we will climb Kalapatthar for spectacular views of the sunrise over the entire mountain range. Kalapatthar is one of the major highlights of the Everest base camp trek. From here, one can get the best possible view of Mount Everest without having to engage in strenuous mountaineering activities. Before retracing our steps back to Lukla, we climb to the top of Kalapatthar for spectacular views of the world’s highest mountain.
        </p>
        <p className="text-neutral-600 text-sm leading-relaxed">
          Millions of people aspire to visit this magnificent land of iconic mountains. If you want to make your Everest dream a reality, then share your vision with us, and we will design a trek that meets your needs and exceeds your expectations.
        </p>
        
        {/* 💡 Show Less Toggle (visible inside expanded layout context) */}
        <div className="pt-2">
          <button 
            onClick={() => setIsExpanded(false)}
            className="text-sm font-bold text-sky-700 hover:text-sky-800 cursor-pointer transition-colors focus:outline-none"
          >
            Show Less
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

          {/* Section 2: Itinerary Breakdown Accordion */}
          <div id="itinerary" className="bg-white p-6 md:p-10 rounded-3xl  scroll-mt-24">
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
          <div id="included" className="space-y-6 scroll-mt-24 bg-white p-6 md:p-8 rounded-3xl">
            <div className=" p-3 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8 items-center ">
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

            <div className="p-3 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8 items-center ">
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
          {/* Section: Gear List Module (Extracted from image_1755c7.png) */}
<div id="gear" className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-100 space-y-6 scroll-mt-24 shadow-xs">
  <div>
    <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2">Gear List</h2>
    <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mt-1">Packing for Your Next Adventure: Everything You Need to Know</p>
    <p className="text-neutral-500 text-sm leading-relaxed mt-3">
      The key to having a good time in the mountains is to be organized and plan ahead. In addition to all of your training, ensuring that you have the appropriate equipment is an important aspect of preparing for your trip. Choosing the proper equipment will give you an extra comfort and safety boost, so you can be at your best while still enjoying yourself. It's essential to have the right gear with you to get the most out of your trip.
    </p>
  </div>

  <hr className="border-neutral-100" />

  <div>
    <h3 className="text-md font-bold p-2 text-white bg-sky-700 uppercase tracking-wider mb-6 flex items-center gap-2">
      Trekking Gear List
    </h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      
      {/* Category 1: Headwear & Eyewear */}
      <div className="space-y-3">
        <h4 className="bg-neutral-50 text-neutral-800 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border border-neutral-200/60">
          Headwear & Eyewear
        </h4>
        <ul className="divide-y divide-neutral-100 px-2">
          {["Sun Cap", "Balaclava", "Fleece Cap", "Head Buff", "Neck Gaiter", "Sun Glasses (UV Protection)"].map((item) => (
            <li key={item} className="text-sm text-neutral-600 py-2.5 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Category 2: Upper Body */}
      <div className="space-y-3">
        <h4 className="bg-neutral-50 text-neutral-800 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border border-neutral-200/60">
          Upper Body
        </h4>
        <ul className="divide-y divide-neutral-100 px-2">
          {["Thermal Wear", "Trekking T-Shirts", "Mid Weight Trek Top", "Fleece Jacket", "Gore-Tex Jacket", "Down Jacket"].map((item) => (
            <li key={item} className="text-sm text-neutral-600 py-2.5 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Category 3: Lower Body */}
      <div className="space-y-3">
        <h4 className="bg-neutral-50 text-neutral-800 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border border-neutral-200/60">
          Lower Body
        </h4>
        <ul className="divide-y divide-neutral-100 px-2">
          {["Thermal Wear", "Trekking Pants", "Mid Weight Trek Pants"].map((item) => (
            <li key={item} className="text-sm text-neutral-600 py-2.5 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" /> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Category 4: Personal Equipment */}
      <div className="space-y-3">
        <h4 className="bg-neutral-50 text-neutral-800 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl border border-neutral-200/60">
          Personal Equipment
        </h4>
        <ul className="divide-y divide-neutral-100 px-2">
          {["Down Sleeping Bag (-10°C to -20°C)", "Headlamp (Rechargeable Batteries)", "Trekking Pole"].map((item) => (
            <li key={item} className="text-sm text-neutral-600 py-2.5 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" /> {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</div>

{/* Section: Training Module (Extracted from image_175d41.png) */}
      <div id="training" className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-100 space-y-8 scroll-mt-24 shadow-xs">
        {/* Intro Header */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Training Plan</h2>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Our training goal is to get you physically and mentally prepared to face the climb with more confidence. The climbing goal will be to perform consistently throughout the adventure. Fitness for mountaineering requires a high overall level of physical conditioning. Both cardiovascular and motor fitness are needed to climb at varying levels of intensity and to navigate challenging terrain, often while carrying a loaded pack and at high altitudes.
          </p>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Training goals are critically important and allow you to perform better at higher altitudes and enjoy the entire adventure. We suggest that you examine the physical requirements of the climb you are approaching and work on your fitness in different levels. <a href="#" className="text-sky-700 font-bold hover:underline">Learn more about Trip Grades</a> and choose what's best for you!
          </p>
          <p className="text-neutral-600 text-sm leading-relaxed">
            Establish a timeline for your training program and focus on specific conditioning for better results. Along with your workouts try and add hikes and climbs in the outdoors whenever possible to get more comfortable with different environments. Sound physical fitness gained through a well-guided timeline program is the absolute best way to ensure a safe and highly successful expedition.
          </p>
        </div>

        <hr className="border-neutral-100" />

        {/* Phases Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight">Mountaineering Fitness and Training</h3>
            <p className="text-sm text-neutral-700 mt-0.5">It may also be helpful to break down your training timeline into a number of key phases. These are:</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Phase 1 */}
            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/50 space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-sky-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">Phase 01</span>
                <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Base Physical Fitness</h4>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed pt-1">
                The first phase of getting prepared for your climb is to focus on your base fitness. You should incorporate a fitness routine that focuses on both cardiovascular fitness and motor fitness training. For those who are not used to intense workouts this phase will help you to kickstart your training. Remember that consistency is the first most important factor in achieving any goal. Combine your basic fitness regimes along with running and stair climbing. You are now ready for outdoor adventures.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/50 space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-sky-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">Phase 02</span>
                <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Training Specific For The Climb</h4>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed pt-1">
                Once you have established your base physical fitness, you will need to train specifically for the climb. Depending on the difficulty and intensity of the climb, add advanced workout sessions combined with uphill training. Try and do the same fitness routines with some added loads. Strength training combined with cardiovascular and motor fitness will help with the overall conditioning. This will take your workouts to the next level and help gear up for the mountaineering challenge ahead.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/50 space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-sky-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">Phase 03</span>
                <h4 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">Outdoor Training</h4>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed pt-1">
                Nothing can replace training in the real outdoors. In the final phase of your training, you should be attempting climbs which are similar to the ones you are approaching. It is great to test your endurance outdoors. This gives you a great edge in preparing for conditions similar to the ones you will encounter during your expedition. It isn't always possible to find similar terrains close to where you live, but it is best to find a hike as close to the climb as possible. This is the best way to test your climbing gears as well. Training goals and timeline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Gallery Modules */}
      <div id="gallery" className="space-y-6 scroll-mt-24 bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-xs">
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
      <div id="faq" className="space-y-6 scroll-mt-24 bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-xs">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Frequently Asked Questions</h2>
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