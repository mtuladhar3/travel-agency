import SectionHeader from "../common/SectionHeader";

export default function ExplorerSectionHeader() {
  return (
    <SectionHeader
      centered
      className="relative w-full"
      label="Explore"
      title={["Favorites for", "Every Explorer"]}
      subtitle="Plan your journey to our most sought-after spots."
      subtitleClassName="max-w-xl mx-auto"
    />
  );
}
