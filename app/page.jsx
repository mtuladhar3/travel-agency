import Banner from "./components/hero/Banner";
import FeatureGrid from './components/FeatureGrid';
import AboutSection from "./components/about/AboutSection";
import TravelPackage from "./components/travelpackages/PackageGrid";
import VisualShowcase from "./components/visualshowcase/VisualShowcase";
import TourSearchSection from "./components/toursearch/TourSearchSection";
import CategoriesSection from "./components/travelcategories/CategoriesSection";

export default function Home() {
  return (
    <>
      {/* Your Navbar handles layout.tsx, so we just drop the hero section here */}
      <Banner />
      <TourSearchSection />
      <CategoriesSection />
      <FeatureGrid />
      <AboutSection />
      <TravelPackage />
      <VisualShowcase />
      {/* Future sections like features, testimonials, etc., go below */}
    </>
  );
}