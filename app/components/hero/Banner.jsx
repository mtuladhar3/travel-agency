"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { SLIDER_DATA } from "../../data/sliderData";

const cardWidth = 200;
const cardHeight = 300;
const gap = 40;
const numberSize = 50;
const ease = "sine.inOut";

export default function Banner() {
  const heroRef = useRef(null);
  const animatingRef = useRef(false);
  const loopTimelineRef = useRef(null);

  const [slidesOrder, setSlidesOrder] = useState(() => SLIDER_DATA.map((_, i) => i));
  const [isDetailsEven, setIsDetailsEven] = useState(true);

  const activeIndex = slidesOrder[0];
  const incomingIndex = slidesOrder[1];

  const getCardSelector = (idx) => `#card${idx}`;
  const getCardContentSelector = (idx) => `#card-content-${idx}`;
  const getSliderItemSelector = (idx) => `#slide-item-${idx}`;

  const getLayoutCoords = () => {
    const fallback = {
      offsetTop: 0,
      offsetLeft: 24,
      viewportWidth: 1920,
      viewportHeight: 1080,
      cardW: cardWidth,
      cardH: cardHeight,
      gapSize: gap,
    };
    if (typeof window === "undefined") return fallback;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const padding = 16;
    const thumbnailCount = SLIDER_DATA.length - 1;

    let cardW = cardWidth;
    let cardH = cardHeight;
    let gapSize = gap;

    if (viewportWidth < 640) {
      cardW = 130;
      cardH = 195;
      gapSize = 14;
    } else if (viewportWidth < 1024) {
      cardW = 170;
      cardH = 255;
      gapSize = 28;
    }

    const available = viewportWidth - padding * 2;
    let totalWidth =
      thumbnailCount * cardW + Math.max(0, thumbnailCount - 1) * gapSize;

    while (totalWidth > available && cardW > 70) {
      cardW -= 6;
      cardH = Math.round(cardW * 1.5);
      totalWidth =
        thumbnailCount * cardW + Math.max(0, thumbnailCount - 1) * gapSize;
    }

    const offsetTop =
      viewportWidth < 640
        ? viewportHeight - 300
        : viewportWidth < 1024
          ? viewportHeight - 360
          : viewportHeight - 430;

    const offsetLeft = Math.max(padding, viewportWidth - totalWidth - padding);

    return {
      offsetTop,
      offsetLeft,
      viewportWidth,
      viewportHeight,
      cardW,
      cardH,
      gapSize,
    };
  };

  const handleNext = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    if (loopTimelineRef.current) loopTimelineRef.current.pause();

    const { offsetTop, offsetLeft, viewportWidth, viewportHeight, cardW, cardH, gapSize } = getLayoutCoords();
    const targetThumbnail = heroRef.current?.querySelector(getCardSelector(incomingIndex));

    if (!targetThumbnail) {
      setSlidesOrder((prev) => [...prev.slice(1), prev[0]]);
      setIsDetailsEven((prev) => !prev);
      animatingRef.current = false;
      return;
    }

    const rect = targetThumbnail.getBoundingClientRect();

    const currentDetailsSelector = isDetailsEven ? "#details-even" : "#details-odd";
    const nextDetailsSelector = isDetailsEven ? "#details-odd" : "#details-even";

    const nextSlideData = SLIDER_DATA[incomingIndex];
    const nextDetailsEl = heroRef.current?.querySelector(nextDetailsSelector);
    
    if (nextDetailsEl) {
      const gTextEl = nextDetailsEl.querySelector(".gText");
      const gTitle1El = nextDetailsEl.querySelector(".gTitle1");
      const gDescEl = nextDetailsEl.querySelector(".gDesc");

      if (gTextEl) gTextEl.textContent = nextSlideData.subtitle;
      if (gTitle1El) gTitle1El.textContent = nextSlideData.title;
      if (gDescEl) gDescEl.textContent = nextSlideData.description;
    }

    gsap.set(nextDetailsSelector, { opacity: 0, zIndex: 22, x: 0 });
    gsap.set(`${nextDetailsSelector} .gText`, { y: 100 });
    gsap.set(`${nextDetailsSelector} .gTitle1`, { y: 100 });
    gsap.set(`${nextDetailsSelector} .gDesc`, { y: 50 });
    gsap.set(`${nextDetailsSelector} .gCta`, { y: 60 });
    gsap.set(currentDetailsSelector, { zIndex: 12 });

    const overlayCanvas = document.createElement("div");
    overlayCanvas.style.position = "absolute";
    overlayCanvas.style.left = `${rect.left}px`;
    overlayCanvas.style.top = `${rect.top}px`;
    overlayCanvas.style.width = `${rect.width}px`;
    overlayCanvas.style.height = `${rect.height}px`;
    overlayCanvas.style.zIndex = "25";
    overlayCanvas.style.borderRadius = "12px";
    overlayCanvas.style.backgroundImage = `url(${nextSlideData.image})`;
    overlayCanvas.style.backgroundSize = "cover";
    overlayCanvas.style.backgroundPosition = "center";
    overlayCanvas.style.willChange = "transform, width, height, top, left, border-radius";
    overlayCanvas.style.transform = "translate3d(0,0,0)";
    
    // FIXED: Changed to after:bg-gradient-to-b so the dynamically expanding animation matches the top-down fade
    overlayCanvas.className = "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/75 after:via-black/30 after:to-transparent after:z-10 after:rounded-[inherit]";

    heroRef.current?.appendChild(overlayCanvas);

    gsap.set(targetThumbnail, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        setSlidesOrder((prev) => [...prev.slice(1), prev[0]]);
        setIsDetailsEven((prev) => !prev);
        
        setTimeout(() => {
          overlayCanvas.remove();
          animatingRef.current = false;
        }, 50);
      }
    });

    tl.to(overlayCanvas, {
      left: 0,
      top: 0,
      width: viewportWidth,
      height: viewportHeight,
      borderRadius: 0,
      duration: 0.8,
      ease: ease
    }, 0);

    tl.to(currentDetailsSelector, { opacity: 0, duration: 0.3, ease: ease }, 0);
    tl.to(getCardSelector(activeIndex), { scale: 1.1, opacity: 0, duration: 0.8, ease: ease }, 0);
    tl.to(getCardContentSelector(incomingIndex), { y: offsetTop + cardH - 10, opacity: 0, duration: 0.3, ease: ease }, 0);

    slidesOrder.slice(2).forEach((idx, index) => {
      const targetX = offsetLeft + index * (cardW + gapSize);
      tl.to(getCardSelector(idx), { x: targetX, y: offsetTop, width: cardW, height: cardH, ease: ease, duration: 0.8 }, 0);
      tl.to(getCardContentSelector(idx), { x: targetX, y: offsetTop + cardH - 100, opacity: 1, ease: ease, duration: 0.8 }, 0);
      tl.to(getSliderItemSelector(idx), { x: (index + 1) * numberSize, ease: ease, duration: 0.8 }, 0);
    });

    tl.to(nextDetailsSelector, { opacity: 1, ease: ease, duration: 0.4 }, 0.4);
    tl.to(`${nextDetailsSelector} .gText`, { y: 0, duration: 0.7, ease: ease }, 0.4);
    tl.to(`${nextDetailsSelector} .gTitle1`, { y: 0, duration: 0.7, ease: ease }, 0.45);
    tl.to(`${nextDetailsSelector} .gDesc`, { y: 0, duration: 0.4, ease: ease }, 0.6);
    tl.to(`${nextDetailsSelector} .gCta`, { y: 0, duration: 0.4, ease: ease }, 0.65);

    tl.to(".gProgF", {
      width: 500 * (1 / SLIDER_DATA.length) * (incomingIndex + 1),
      ease: ease,
      duration: 0.8
    }, 0);

    tl.to(getSliderItemSelector(incomingIndex), { x: 0, ease: ease, duration: 0.8 }, 0);
    tl.to(getSliderItemSelector(activeIndex), { x: -numberSize, ease: ease, duration: 0.8 }, 0);

  }, [slidesOrder, isDetailsEven, activeIndex, incomingIndex]);

  const applyLayout = useCallback(() => {
    const { offsetTop, offsetLeft, viewportWidth, viewportHeight, cardW, cardH, gapSize } = getLayoutCoords();
    const [active, ...rest] = slidesOrder;
    const padding = 16;
    const paginationWidth = viewportWidth < 640 ? 120 : viewportWidth < 1024 ? 280 : 340;
    const paginationLeft = Math.max(
      padding,
      Math.min(
        viewportWidth < 640 ? padding : offsetLeft,
        viewportWidth - paginationWidth - padding
      )
    );

    gsap.set("#pagination", {
      top: Math.min(offsetTop + 320, viewportHeight - 88),
      left: paginationLeft,
      y: 0,
      opacity: 1,
      zIndex: 60
    });
    gsap.set(".cover", { x: viewportWidth + 400, visibility: "hidden" });

    gsap.set(getCardSelector(active), {
      x: 0,
      y: 0,
      width: viewportWidth,
      height: viewportHeight,
      borderRadius: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10
    });
    gsap.set(getCardContentSelector(active), { x: 0, y: 0, opacity: 0 });

    const detailsActive = isDetailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = isDetailsEven ? "#details-odd" : "#details-even";

    gsap.set(detailsActive, { opacity: 1, x: 0, zIndex: 22 });
    gsap.set(`${detailsActive} .gText`, { y: 0 });
    gsap.set(`${detailsActive} .gTitle1`, { y: 0 });
    gsap.set(`${detailsActive} .gDesc`, { y: 0 });
    gsap.set(`${detailsActive} .gCta`, { y: 0 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });

    gsap.set(".gProgF", { width: 500 * (1 / SLIDER_DATA.length) * (active + 1) });

    rest.forEach((i, index) => {
      const currentX = offsetLeft + index * (cardW + gapSize);
      gsap.set(getCardSelector(i), {
        x: currentX,
        y: offsetTop,
        width: cardW,
        height: cardH,
        zIndex: 30,
        borderRadius: 12,
        opacity: 1,
        scale: 1
      });
      gsap.set(getCardContentSelector(i), {
        x: currentX,
        zIndex: 40,
        y: offsetTop + cardH - 100,
        opacity: 1
      });
      gsap.set(getSliderItemSelector(i), { x: (index + 1) * numberSize });
    });
  }, [slidesOrder, isDetailsEven]);

  useEffect(() => {
    applyLayout();

    const onResize = () => applyLayout();
    window.addEventListener("resize", onResize);

    if (loopTimelineRef.current) loopTimelineRef.current.kill();

    gsap.set(".indicator", { scaleX: 0, transformOrigin: "left center" });
    loopTimelineRef.current = gsap.timeline({ repeat: -1 });
    loopTimelineRef.current
      .to(".indicator", { scaleX: 1, duration: 4, ease: "none" })
      .call(() => {
        handleNext();
      });

    return () => {
      window.removeEventListener("resize", onResize);
      if (loopTimelineRef.current) loopTimelineRef.current.kill();
    };
  }, [slidesOrder, handleNext, applyLayout]);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-screen overflow-hidden select-none bg-black m-0 p-0"
    >
      {/* Background Cards Track */}
      <div id="demo" className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {SLIDER_DATA.map((slide, index) => (
          <div
            key={index}
            // FIXED: Modified overlay rules to 'after:bg-gradient-to-b' to draw shadows from top down
            className="card absolute bg-cover bg-center shadow-2xl overflow-hidden will-change-transform transform-gpu
                       after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/75 after:via-black/30 after:to-transparent after:z-10"
            id={`card${index}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div 
              className="card-content absolute p-5 text-white flex flex-col justify-end w-full h-full rounded-xl will-change-transform z-20" 
              id={`card-content-${index}`}
            >
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-amber-400">
                {slide.subtitle}
              </div>
              <div className="text-sm font-black tracking-wide uppercase line-clamp-2 leading-tight mt-1">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BannerContent />
      <BannerImage onNext={handleNext} numberSize={numberSize} />

      <div className="indicator absolute bottom-0 left-0 h-[4px] bg-amber-500 z-[99] w-full origin-left scale-x-0" style={{ willChange: "transform" }}></div>
      <div className="cover absolute z-[100]" id="cover"></div>
    </section>
  );
}