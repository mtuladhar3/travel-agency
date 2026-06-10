// travelpackages/CardBadge.jsx
export default function CardBadge({ value, icon }) {
  return (
    <div className="flex items-center gap-1 bg-[#8cc63f] text-white text-sm font-bold px-3 py-1 rounded-full tracking-wide">
      {icon && <span className="text-xs">{icon}</span>}
      <span>{value}</span>
    </div>
  );
}