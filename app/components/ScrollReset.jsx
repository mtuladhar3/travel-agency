"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

export default function ScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Force the browser to stop automatic scroll restoration mechanics
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // 2. TEMPORARILY disable any smooth scroll behavior on the document element
      const htmlElement = document.documentElement;
      const originalScrollBehavior = htmlElement.style.scrollBehavior;
      htmlElement.style.setProperty("scroll-behavior", "auto", "important");

      // 3. Perform an absolute, instantaneous jump to the top
      window.scrollTo(0, 0);
      document.body.scrollTop = 0; // Backup for Safari support

      // 4. Safely restore original smooth styles right after the page paints
      const timeout = setTimeout(() => {
        htmlElement.style.scrollBehavior = originalScrollBehavior;
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return null;
}