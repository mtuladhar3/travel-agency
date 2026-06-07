import Link from "next/link";
import SearchBar from "./SearchBar";

export default function RightActions() {
  return (
    <div className="hidden md:flex items-center space-x-4 lg:space-x-6 whitespace-nowrap">
      {/* Search pill element */}
      <SearchBar />

      {/* Log in accent action button */}
      <Link 
        href="/login" 
        className="bg-orange-500 text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-orange-600 shadow-md shadow-orange-500/10 transition-all"
      >
        Log in
      </Link>
    </div>
  );
}