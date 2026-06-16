"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target, isActive, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let frameId = 0;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, target, duration]);

  return count;
}

export default function CounterItem({ value, suffix, label, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, isInView);

  const characters = useMemo(
    () => `${count}${suffix}`.split(""),
    [count, suffix]
  );

  return (
    <div ref={ref} className="counter-item-block flex flex-col items-center text-center">
      <div className="counter-items flex items-end justify-center">
        {characters.map((char, charIndex) => (
          <motion.h2
            key={`${char}-${charIndex}`}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: index * 0.1 + charIndex * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="counter-title m-0 font-sans text-[2.75rem] font-bold leading-none text-orange-950 sm:text-6xl md:text-7xl lg:text-[5rem]"
          >
            {char}
          </motion.h2>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.1 + 0.35, ease: "easeOut" }}
        className="counter-para m-0 mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-orange-950/85 sm:mt-4 sm:text-[11px]"
      >
        {label}
      </motion.p>
    </div>
  );
}
