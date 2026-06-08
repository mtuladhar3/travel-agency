import Hero from "./components/hero/Hero";
import FeatureGrid from './components/FeatureGrid';
import AboutSection from "./components/about/AboutSection";
import TravelPackage from "./components/travelpackages/PackageGrid";
import VisualShowcase from "./components/visualshowcase/VisualShowcase";

export default function Home() {
  return (
    <>
      {/* Your Navbar handles layout.tsx, so we just drop the hero section here */}
      <Hero />
      <FeatureGrid />
      <AboutSection />
      <TravelPackage />
      <VisualShowcase />
      {/* Future sections like features, testimonials, etc., go below */}
    </>
  );
}