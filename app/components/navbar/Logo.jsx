import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white group flex-shrink-0">
      <div className="flex flex-col items-center justify-center text-white">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          className="w-8 h-8 transition-transform group-hover:-translate-y-0.5"
        >
          <path d="M3 20L12 4L21 20" />
          <path d="M7 20L12 11L17 20" />
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xl font-black uppercase leading-none tracking-widest">
          Achieve
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/80 mt-0.5">
          Treks & Expedition
        </span>
      </div>
    </Link>
  );
}