export default function SectionHeader() {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 px-4 flex flex-col items-center">
      {/* Upper Category Track Badge */}
      <span className="bg-[#ffe9d5] text-[#FF7A00] text-[12px] font-bold px-4 py-1.5 rounded-md mb-3 tracking-wide">
        Explore The World
      </span>
      
      {/* Main Bold Header */}
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0D1222] tracking-tight leading-tight max-w-lg">
        Our Amazing Featured Tour Package The World
      </h2>
    </div>
  );
}