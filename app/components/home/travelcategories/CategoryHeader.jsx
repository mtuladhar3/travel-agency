import Link from "next/link";
import SectionHeader from "../../common/SectionHeader";

export default function CategoryHeader() {
  return (
    <div className="flex w-full flex-col justify-between gap-4 px-2 md:flex-row md:items-end">
      <SectionHeader
        className="mb-0 sm:mb-0"
        label="Tour Categories"
        title={["Choose Your", "Travel Style"]}
        subtitle="Adventure, luxury, culture — your choice, your way."
      />

      <div className="flex items-center justify-center pt-1 md:pt-0">
        <Link
          href="/categories"
          className="group flex items-center gap-2 text-xs font-bold tracking-wide hover:text-orange-400 transition-colors duration-200 sm:text-sm"
        >
          <span>View All Categories</span>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 transition-transform group-hover:translate-x-1">
            <svg className="h-2.5 w-2.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="3">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
