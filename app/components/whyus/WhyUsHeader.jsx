import SectionHeader from "../common/SectionHeader";

export default function WhyUsHeader() {
  return (
    <SectionHeader
      className="whyus-header mb-8 sm:mb-8"
      label="Why Aventour"
      title={["Your Trusted", "Travel Partner"]}
      subtitle="Guiding you to unforgettable experiences across the world's wonders."
      subtitleClassName="max-w-lg"
    />
  );
}
