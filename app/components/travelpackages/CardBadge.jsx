export default function CardBadge({ text, variant = "category" }) {
  if (variant === "featured") {
    return (
      <span className="bg-[#FF7A00] text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wider shadow-sm animate-pulse">
        Featured
      </span>
    );
  }

  return (
    <span className="bg-[#FFE500] text-gray-900 text-[11px] font-black px-3 py-1 rounded-md tracking-wide shadow-sm uppercase">
      {text}
    </span>
  );
}