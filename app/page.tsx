import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      {/* Your Navbar handles layout.tsx, so we just drop the hero section here */}
      <Hero />
      
      {/* Future sections like features, testimonials, etc., go below */}
    </>
  );
}