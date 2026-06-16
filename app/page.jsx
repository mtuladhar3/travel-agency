import Banner from "./components/hero/Banner";
import FeatureGrid from './components/FeatureGrid';
import AboutSection from "./components/about/AboutSection";
import CounterSection from "./components/counter/CounterSection";
import TrekkingRegionsGrid from "./components/trekkingdestinations/TrekkingRegionGrid";
import TrekkingSlider from "./components/trekkingslider/TrekkingSlider";
import TravelPackage from "./components/travelpackages/PackageGrid";
import VisualShowcase from "./components/visualshowcase/VisualShowcase";
import TourSearchSection from "./components/toursearch/TourSearchSection";
import CategoriesSection from "./components/travelcategories/CategoriesSection";
// import ExplorerSection from "./components/explorersection/ExplorerSection";
import DestinationsSlider from "./components/destinationslider/DestinationSlider";
import WhyUsSection from "./components/whyus/WhyUsSection";
import VideoSection from "./components/video/VideoSection"

import ActivitiesSection from "./components/activities/ActivitiesSection";
import TestimonialSlider from "./components/testimonial/TestimonialSlider";
import BlogSection from "./components/blog/BlogSection";

export default function Home() {
  return (
    <>
      {/* Your Navbar handles layout.tsx, so we just drop the hero section here */}
      <Banner />
      {/* <FeatureGrid /> */}
      {/* <TourSearchSection /> */}
      <AboutSection />
      <CounterSection />
      <TrekkingRegionsGrid />
      <TrekkingSlider />
      {/* <CategoriesSection /> */}
      {/* <DestinationsSlider /> */}
      {/* <ExplorerSection /> */}
      {/* <TravelPackage /> */}
      <VideoSection />
      <ActivitiesSection />
      <WhyUsSection />
      <TestimonialSlider />
      <VisualShowcase />
      <BlogSection />
      {/* Future sections like features, testimonials, etc., go below */}
    </>
  );
}