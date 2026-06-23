import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="relative max-w-xs w-full hidden lg:block">
      <input
        type="text"
        placeholder="Search For"
        className="w-full bg-gray-50 border border-gray-100 text-sm text-gray-700 pl-4 pr-10 py-2 rounded-full focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
      />
      <button 
        type="submit" 
        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-700 transition-colors"
        aria-label="Submit search"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
}