import Banner from "./components/home/hero/Banner";
import FeatureGrid from "./components/home/FeatureGrid";
import AboutSection from "./components/home/about/AboutSection";
import CounterSection from "./components/home/counter/CounterSection";
import TrekkingRegionsGrid from "./components/home/trekkingdestinations/TrekkingRegionGrid";
import TrekkingSlider from "./components/home/trekkingslider/TrekkingSlider";
import TravelPackage from "./components/home/travelpackages/PackageGrid";
import VisualShowcase from "./components/home/visualshowcase/VisualShowcase";
import TourSearchSection from "./components/home/toursearch/TourSearchSection";
import CategoriesSection from "./components/home/travelcategories/CategoriesSection";
// import ExplorerSection from "./components/explorersection/ExplorerSection";
import DestinationsSlider from "./components/home/destinationslider/DestinationSlider";
import WhyUsSection from "./components/home/whyus/WhyUsSection";
import VideoSection from "./components/home/video/VideoSection";

import ActivitiesSection from "./components/home/activities/ActivitiesSection";
import TestimonialSlider from "./components/home/testimonial/TestimonialSlider";
import BlogSection from "./components/home/blog/BlogSection";

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
