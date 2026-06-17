import CounterBackground from "./CounterBackground";
import CounterGrid from "./CounterGrid";

export default function CounterSection() {
  return (
    <section
      className="counter-section relative w-full min-h-[420px] overflow-hidden bg-gradient-to-b from-orange-100 via-white to-white sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px]"
      aria-label="Travel agency statistics"
 
 
 
    >
      <CounterBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="counter-wrapper flex min-h-[420px] flex-col justify-start pt-14 pb-[220px] sm:min-h-[460px] sm:pt-16 sm:pb-[340px] md:min-h-[500px] md:pb-[360px] lg:min-h-[540px] lg:pt-[4.5rem] lg:pb-[425px]">
          <CounterGrid />
        </div>
      </div>
    </section>
  );
}
