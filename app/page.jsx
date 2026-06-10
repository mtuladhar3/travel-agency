import Banner from "./components/hero/Banner";
// import FeatureGrid from './components/FeatureGrid';
import AboutSection from "./components/about/AboutSection";
import TravelPackage from "./components/travelpackages/PackageGrid";
import VisualShowcase from "./components/visualshowcase/VisualShowcase";
import TourSearchSection from "./components/toursearch/TourSearchSection";
import CategoriesSection from "./components/travelcategories/CategoriesSection";
// import ExplorerSection from "./components/explorersection/ExplorerSection";
import DestinationsSlider from "./components/destinationslider/DestinationSlider";
import WhyUsSection from "./components/whyus/WhyUsSection";

export default function Home() {
  return (
    <>
      {/* Your Navbar handles layout.tsx, so we just drop the hero section here */}
      <Banner />
      <TourSearchSection />
      <AboutSection />
      <CategoriesSection />
      <DestinationsSlider />
      {/* <ExplorerSection /> */}
      {/* <FeatureGrid /> */}
      <TravelPackage />
      <WhyUsSection />
      <VisualShowcase />
      {/* Future sections like features, testimonials, etc., go below */}
    </>
  );
}