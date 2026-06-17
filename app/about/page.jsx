import Image from "next/image";
import Link from "next/link";
import { FaLeaf } from 'react-icons/fa'; // Reliable FontAwesome Leaf
import { FiHeart, FiUsers } from 'react-icons/fi'; // These definitely exist in Feather!
import { BiMapAlt } from 'react-icons/bi'; // This definitely exists in BoxIcons!

export default function AboutPage() {
  const aboutLinks = [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Meet the Team", href: "/about/team" },
    { label: "Why Choose Us", href: "/about/why-us" },
    { label: "Responsible Travel", href: "/about/responsible-travel" },
    { label: "Our Guides", href: "/about/guides" },
    { label: "Licenses & Certifications", href: "/about/certifications" },
    { label: "Press & Media", href: "/about/press" },
  ];
  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "100+", label: "Popular Destinations" },
    { value: "5★", label: "Reviews" },
    { value: "50+", label: "Expert Team Members" },
  ];

 const cards = [
  {
    icon: <FaLeaf className="w-8 h-8 text-[#14342b]" />, // Updated to FaLeaf
    title: "Honor Stewardship",
    description: "Protect wildlife and habitats while traveling light; each journey weighs its influence on water use, waste creation, and ecological balance."
  },
  {
    icon: <FiUsers className="w-8 h-8 text-[#14342b]" />,
    title: "Honor Culture",
    description: "Listen with intention and uplift artisans; we learn from skilled makers and stand beside community enterprises, offering steady, respectful support."
  },
  {
    icon: <BiMapAlt className="w-8 h-8 text-[#14342b]" />,
    title: "Go Slow",
    description: "Choose fewer stops for deeper ties; reduced distance invites slower moments where meaning grows through longer, thoughtful stays in every community."
  },
  {
    icon: <FiHeart className="w-8 h-8 text-[#14342b]" />,
    title: "Care for People",
    description: "Ensure fair pay and care for guides; teams thrive when safety, respect, and balanced work define a journey that values every person involved."
  }
];

  return (
    <main className="bg-white">
      <section className="relative isolate flex min-h-screen items-end overflow-hidden pt-24 sm:min-h-[72vh] lg:min-h-screen">
        <Image
          src="/images/about-banner.webp"
          alt="Traveler standing on snowy mountain"
          fill
          priority
          className="object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-slate-900/55" /> */}

        <div className="relative z-10 mx-auto w-full max-w-[900px] px-4 pb-14 text-center text-white sm:px-8 sm:pb-20">
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            We design intentional
            <br />
            travel experiences
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/90 sm:text-base">
            From handpicked destinations to seamless logistics, our mission is to
            make every journey personal, meaningful, and unforgettable.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 font-sans text-slate-800">
      
      {/* --- HEADER SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-[#0f2a22] leading-tight">
            Our mission to create <br />
            <span className="italic text-orange-500 font-normal">unforgettable journeys</span>
          </h2>
        </div>
        <div className="space-y-6 text-slate-600 text-base md:text-lg max-w-xl">
          <p>
            Our mission is to create unforgettable journeys by designing meaningful 
            travel experiences that inspire, connect, and leave lasting memories.
          </p>
          <p>
            Every trip is carefully crafted with attention to detail, comfort, and 
            authenticity—so each journey feels personal, seamless, and truly memorable.
          </p>
        </div>
      </div>

      {/* --- STATS SECTION --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left border-b border-slate-100 pb-16 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-orange-500">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-slate-500 font-medium tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* --- IMAGE GALLERY (Asymmetrical layout matching image_8ad6d7.jpg) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Left Image - Slightly taller, aligned higher */}
        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm md:translate-y-0">
          <Image
            src="/images/travel-happy.jpg" // Replace with your image paths
            alt="Happy travelers with coconut"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Center Image - Lower alignment, wide aspect */}
        <div className="relative aspect-[1/1] w-full rounded-2xl overflow-hidden shadow-sm md:translate-y-12">
          <Image
            src="/images/beach-aerial.jpg" // Replace with your image paths
            alt="Aerial view of beach shore"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Right Image - Taller, aligned high up */}
        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-sm md:translate-y-4">
          <Image
            src="/images/family-travel.jpg" // Replace with your image paths
            alt="Grandfather and child traveling"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

      </div>
    </section>

    <section className="relative w-full bg-[#f4f1ea]">
      
      {/* --- UPPER HERO WRAPPER --- */}
      <div className="relative h-[550px] md:h-[600px] w-full flex flex-col items-center justify-start text-center pt-16 md:pt-24 px-4 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.65] contrast-0.8] z-0"
        >
          <source src="/videos/bg-video5.mp4" type="video/mp4" />
          {/* Fallback text if the browser doesn't support videos */}
          Your browser does not support the video tag.
        </video>
        
        {/* Content Box */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          {/* <div className="flex items-center justify-center gap-3 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#cbb382] uppercase">
            <span className="w-8 h-[1px] bg-[#cbb382]/50"></span>
            Our Mission
            <span className="w-8 h-[1px] bg-[#cbb382]/50"></span>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15]">
            Our Mission: Travel,<br className="hidden md:inline" /> Thoughtfully.
          </h2>
          
          <p className="text-sm md:text-base text-white font-sans max-w-xl mx-auto leading-relaxed pt-2">
            We design journeys that honor place and people—small groups, expert 
            local guides, unhurried days, and deep respect for the wild.
          </p>
        </div>
      </div>

      {/* --- FLOATING CONTENT CARDS --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 md:-mt-48 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-start items-start text-left space-y-5"
            >
              {/* Icon Container */}
              <div className="p-1 rounded-lg">
                {card.icon}
              </div>
              
              {/* Card Copy */}
              <div className="space-y-3">
                <h3 className="text-2xl font-serif text-[#14342b] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-sans font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-24 pt-14 sm:px-8 lg:px-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aboutLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#FF4E25] hover:text-[#FF4E25]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
