import Hero from "./components/hero/Hero";
import FeatureGrid from './components/FeatureGrid';
import AboutSection from "./components/about/AboutSection";

export default function Home() {
  return (
    <>
      {/* Your Navbar handles layout.tsx, so we just drop the hero section here */}
      <Hero />
      <FeatureGrid />
      <AboutSection />
      {/* Future sections like features, testimonials, etc., go below */}
    </>
  );
}