import CounterBackground from "./CounterBackground";
import CounterGrid from "./CounterGrid";

export default function CounterSection() {
  return (
    <section
      className="counter-section relative w-full min-h-screen overflow-hidden bg-gradient-to-t from-blue-100 via-sky-100 to-white "
      aria-label="Travel agency statistics"
 
 
 
    >
      <CounterBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="counter-wrapper flex min-h-[420px] flex-col justify-center pt-14 ">
          <CounterGrid />
        </div>
      </div>
    </section>
  );
}
