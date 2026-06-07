import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
      {/* Visual representation of the Turie logo style */}
      <div className="relative flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-sm">
        <span className="text-white font-bold text-xs">🧳</span>
      </div>
      <span className="text-2xl font-black text-gray-900 tracking-tight">
        Turie<span className="text-orange-500 text-sm align-super">✈</span>
      </span>
    </Link>
  );
}