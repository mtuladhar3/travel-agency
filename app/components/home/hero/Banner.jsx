"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { SLIDER_DATA } from "../../../data/sliderData";

let cardWidth = 160;
let cardHeight = 92;
let cardGap = 28;
const THUMB_ASPECT = 9 / 16; // landscape 16:9 (height / width)
const getThumbContentY = (top) => top + cardHeight - Math.min(52, Math.round(cardHeight * 0.72));
const numberSize = 50;
const ease = "sine.inOut";
const BG_Z = 10;
const THUMB_Z = 45;
const CONTENT_Z = 25;
const VISIBLE_THUMBS = 3;

const getThumbX = (offsetLeft, slotIndex) => offsetLeft + slotIndex * (cardWidth + cardGap);
const getHiddenThumbX = (offsetLeft) => getThumbX(offsetLeft, VISIBLE_THUMBS);

const getPaginationChromeWidth = (viewportWidth, barWidth) => {
  const btnSize = viewportWidth >= 1024 ? 48 : viewportWidth >= 640 ? 40 : 36;
  const gap = viewportWidth >= 1280 ? 20 : viewportWidth >= 640 ? 16 : 8;
  return btnSize * 2 + gap * 3 + barWidth + numberSize + 8;
};

const fitPaginationLayout = (width, sideMargin, anchorLeft, barWidth) => {
  const chromeWithoutBar = getPaginationChromeWidth(width, 0);
  const maxBar = width - anchorLeft - sideMargin - chromeWithoutBar;
  const fittedBar = Math.max(80, Math.min(barWidth, maxBar));
  const totalWidth = getPaginationChromeWidth(width, fittedBar);
  const fittedLeft = Math.max(sideMargin, Math.min(anchorLeft, width - sideMargin - totalWidth));

  return { progressBarWidth: fittedBar, paginationLeft: fittedLeft };
};

export default function Banner() {
  const heroRef = useRef(null);
  const bgLayerRef = useRef(null);
  const animatingRef = useRef(false);
  const loopTimelineRef = useRef(null);
  const handleNextRef = useRef(null);
  const slidesOrderRef = useRef(null);
  const isDetailsEvenRef = useRef(true);

  const [slidesOrder, setSlidesOrder] = useState(() => SLIDER_DATA.map((_, i) => i));
  const [isDetailsEven, setIsDetailsEven] = useState(true);

  slidesOrderRef.current = slidesOrder;
  isDetailsEvenRef.current = isDetailsEven;

  const activeIndex = slidesOrder[0];
  const incomingIndex = slidesOrder[1];

  const getCardSelector = (idx) => `#card${idx}`;
  const getCardContentSelector = (idx) => `#card-content-${idx}`;
  const getSliderItemSelector = (idx) => `#slide-item-${idx}`;

  const getHeroMetrics = () => {
    const hero = heroRef.current;
    if (!hero || typeof window === "undefined") {
      return {
        width: typeof window !== "undefined" ? window.innerWidth : 1920,
        height: typeof window !== "undefined" ? window.innerHeight : 1080,
        left: 0,
        top: 0,
      };
    }

    const rect = hero.getBoundingClientRect();
    return { width: rect.width, height: rect.height, left: rect.left, top: rect.top };
  };

  const getLayoutCoords = () => {
    if (typeof window === "undefined") {
      return {
        offsetTop: 0,
        offsetLeft: 0,
        viewportWidth: 1920,
        viewportHeight: 1080,
        progressBarWidth: 500,
        paginationTop: 0,
        paginationLeft: 0,
        hideThumbLabels: false,
        contentMaxWidth: 500
      };
    }

    const { width, height } = getHeroMetrics();
    const textInset =
      width < 640 ? 16 : width < 1024 ? Math.round(width * 0.06) : width < 1440 ? Math.round(width * 0.08) : Math.round(width * 0.10);
    const isLaptop = width >= 1024 && width < 1440;
    const sideMargin = width < 640 ? 16 : width < 1024 ? 24 : isLaptop ? 20 : 40;

    const sizeThumbsToSpace = (gap, minContentWidth, contentGap, maxCardWidth, maxHeightRatio) => {
      cardGap = gap;
      const minThumbLeft = textInset + minContentWidth + contentGap;
      const availableStackWidth = width - minThumbLeft - sideMargin;
      cardWidth = Math.min(
        maxCardWidth,
        Math.max(120, Math.floor((availableStackWidth - (VISIBLE_THUMBS - 1) * cardGap) / VISIBLE_THUMBS))
      );
      cardHeight = Math.min(Math.round(cardWidth * THUMB_ASPECT), Math.round(height * maxHeightRatio));
    };

    if (width < 640) {
      cardGap = 16;
      cardWidth = Math.min(108, Math.floor((width - 32 - (VISIBLE_THUMBS - 1) * cardGap) / VISIBLE_THUMBS));
      cardHeight = Math.min(Math.round(cardWidth * THUMB_ASPECT), Math.round(height * 0.16));
    } else if (width < 1024) {
      sizeThumbsToSpace(20, 300, 40, 148, 0.2);
    } else if (isLaptop) {
      sizeThumbsToSpace(18, 320, 56, 164, 0.22);
    } else {
      sizeThumbsToSpace(22, 380, 80, 196, 0.24);
    }

    const stackWidth = VISIBLE_THUMBS * cardWidth + (VISIBLE_THUMBS - 1) * cardGap;
    const paginationRowHeight = 48;
    const bottomSafe = Math.max(16, height * 0.02);
    let progressBarWidth =
      width < 640
        ? Math.min(140, width - 196)
        : width < 1024
          ? 280
          : isLaptop
            ? 240
            : 500;

    let offsetTop;
    let offsetLeft;
    let paginationTop;
    let paginationLeft;

    if (width < 640) {
      const thumbNavGap = 14;
      offsetTop = height - cardHeight - bottomSafe;
      offsetLeft = sideMargin;
      paginationTop = Math.max(96, offsetTop - paginationRowHeight - thumbNavGap);
      if (paginationTop + paginationRowHeight + thumbNavGap > offsetTop) {
        offsetTop = paginationTop + paginationRowHeight + thumbNavGap;
      }
      const mobilePaginationWidth = Math.min(
        width - sideMargin * 2,
        36 + 36 + 12 + progressBarWidth + 12 + numberSize + 16
      );
      paginationLeft = Math.max(sideMargin, Math.round((width - mobilePaginationWidth) / 2));
    } else if (width < 1024) {
      offsetTop = height - cardHeight - paginationRowHeight - bottomSafe - 20;
      offsetLeft = Math.max(sideMargin, width - stackWidth - sideMargin);
      paginationTop = offsetTop + cardHeight + 14;
      paginationLeft = offsetLeft;
    } else if (isLaptop) {
      offsetTop = height - cardHeight - 24;
      offsetLeft = width - stackWidth - sideMargin;
      paginationTop = height - paginationRowHeight - bottomSafe;
      paginationLeft = Math.round(width * 0.08);
    } else {
      const bottomPadding = Math.max(48, Math.min(100, height * 0.08));
      offsetTop = height - cardHeight - bottomPadding;
      offsetLeft = width - stackWidth - sideMargin;
      paginationTop = offsetTop + cardHeight + 24;
      paginationLeft = offsetLeft;
    }

    if (width >= 1024) {
      const anchorLeft = isLaptop ? paginationLeft : offsetLeft;
      const fitted = fitPaginationLayout(width, sideMargin, anchorLeft, progressBarWidth);
      progressBarWidth = fitted.progressBarWidth;
      paginationLeft = fitted.paginationLeft;
    }

    const contentGap = width < 1024 ? 32 : width < 1440 ? 56 : 80;
    const contentMaxWidth =
      width < 640
        ? width - 32
        : Math.max(280, Math.min(width < 1024 ? 360 : 480, offsetLeft - textInset - contentGap));

    return {
      offsetTop,
      offsetLeft,
      viewportWidth: width,
      viewportHeight: height,
      progressBarWidth,
      paginationTop,
      paginationLeft,
      hideThumbLabels: isLaptop,
      contentMaxWidth
    };
  };

  const positionCards = useCallback((order, detailsEven) => {
    const {
      offsetTop,
      offsetLeft,
      viewportWidth,
      viewportHeight,
      progressBarWidth,
      paginationTop,
      paginationLeft,
      hideThumbLabels,
      contentMaxWidth
    } = getLayoutCoords();
    const [active, ...rest] = order;

    heroRef.current?.style.setProperty("--banner-content-max", `${contentMaxWidth}px`);
    heroRef.current?.style.setProperty("--banner-progress-width", `${progressBarWidth}px`);

    gsap.set("#pagination", { top: paginationTop, left: paginationLeft, y: 0, opacity: 1, zIndex: 60 });
    gsap.set(".cover", { x: viewportWidth + 400 });

    gsap.set(getCardSelector(active), {
      x: 0,
      y: 0,
      width: viewportWidth,
      height: viewportHeight,
      borderRadius: 0,
      opacity: 1,
      scale: 1,
      zIndex: BG_Z
    });
    gsap.set(getCardContentSelector(active), { x: 0, y: 0, opacity: 0 });

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    gsap.set(detailsActive, { opacity: 1, x: 0, zIndex: CONTENT_Z });
    gsap.set(`${detailsActive} .gText`, { y: 0 });
    gsap.set(`${detailsActive} .gTitle1`, { y: 0 });
    gsap.set(`${detailsActive} .gDesc`, { y: 0 });
    gsap.set(`${detailsActive} .gCta`, { y: 0 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: CONTENT_Z - 1 });

    gsap.set(".gProgF", { width: progressBarWidth * (1 / SLIDER_DATA.length) * (active + 1) });

    SLIDER_DATA.forEach((_, i) => {
      gsap.set(getSliderItemSelector(i), {
        x: i === active ? 0 : numberSize * 2,
      });
    });

    rest.forEach((i, index) => {
      const isVisible = index < VISIBLE_THUMBS;
      const currentX = isVisible ? getThumbX(offsetLeft, index) : getHiddenThumbX(offsetLeft);
      gsap.set(getCardSelector(i), {
        x: currentX,
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        zIndex: THUMB_Z,
        borderRadius: 12,
        opacity: isVisible ? 1 : 0,
        scale: 1,
        visibility: isVisible ? "visible" : "hidden"
      });
      gsap.set(getCardContentSelector(i), {
        x: currentX,
        zIndex: THUMB_Z,
        y: getThumbContentY(offsetTop),
        opacity: isVisible && !hideThumbLabels ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden"
      });
    });
  }, []);

  const startLoop = useCallback(() => {
    if (loopTimelineRef.current) loopTimelineRef.current.kill();

    gsap.set(".indicator", { scaleX: 0, transformOrigin: "left center" });
    loopTimelineRef.current = gsap.timeline({ repeat: -1 });
    loopTimelineRef.current
      .to(".indicator", { scaleX: 1, duration: 4, ease: "none" })
      .call(() => {
        handleNextRef.current?.();
      });
  }, []);

  const handleNext = useCallback(() => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    if (loopTimelineRef.current) loopTimelineRef.current.pause();

    const { offsetTop, offsetLeft, viewportWidth, viewportHeight, progressBarWidth, hideThumbLabels } = getLayoutCoords();
    const heroMetrics = getHeroMetrics();
    const bgLayer = bgLayerRef.current;
    const targetThumbnail = heroRef.current?.querySelector(getCardSelector(incomingIndex));

    if (!targetThumbnail || !bgLayer) {
      const newOrder = [...slidesOrder.slice(1), slidesOrder[0]];
      positionCards(newOrder, !isDetailsEven);
      setSlidesOrder(newOrder);
      setIsDetailsEven((prev) => !prev);
      animatingRef.current = false;
      startLoop();
      return;
    }

    const rect = targetThumbnail.getBoundingClientRect();
    const overlayLeft = rect.left - heroMetrics.left;
    const overlayTop = rect.top - heroMetrics.top;
    const hiddenThumbX = getHiddenThumbX(offsetLeft);

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

    gsap.set(nextDetailsSelector, { opacity: 0, zIndex: CONTENT_Z, x: 0 });
    gsap.set(`${nextDetailsSelector} .gText`, { y: 100 });
    gsap.set(`${nextDetailsSelector} .gTitle1`, { y: 100 });
    gsap.set(`${nextDetailsSelector} .gDesc`, { y: 50 });
    gsap.set(`${nextDetailsSelector} .gCta`, { y: 60 });
    gsap.set(currentDetailsSelector, { zIndex: CONTENT_Z - 1 });

    const overlayCanvas = document.createElement("div");
    overlayCanvas.style.position = "absolute";
    overlayCanvas.style.left = `${overlayLeft}px`;
    overlayCanvas.style.top = `${overlayTop}px`;
    overlayCanvas.style.width = `${rect.width}px`;
    overlayCanvas.style.height = `${rect.height}px`;
    overlayCanvas.style.zIndex = "2";
    overlayCanvas.style.borderRadius = "12px";
    overlayCanvas.style.backgroundImage = `url(${nextSlideData.image})`;
    overlayCanvas.style.backgroundSize = "cover";
    overlayCanvas.style.backgroundPosition = "center";
    overlayCanvas.style.willChange = "transform, width, height, top, left, border-radius";
    overlayCanvas.style.transform = "translate3d(0,0,0)";
    overlayCanvas.style.pointerEvents = "none";
    overlayCanvas.className = "after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/75 after:via-black/30 after:to-transparent after:z-10 after:rounded-[inherit]";

    bgLayer.appendChild(overlayCanvas);

    gsap.set(getCardSelector(incomingIndex), { opacity: 0, visibility: "hidden" });
    gsap.set(getCardContentSelector(incomingIndex), { opacity: 0, visibility: "hidden" });

    slidesOrder.slice(2).forEach((idx) => {
      gsap.set(getCardSelector(idx), { zIndex: THUMB_Z, opacity: 1, visibility: "visible" });
    });

    const newOrder = [...slidesOrder.slice(1), slidesOrder[0]];
    const newDetailsEven = !isDetailsEven;

    const tl = gsap.timeline({
      onComplete: () => {
        overlayCanvas.remove();

        gsap.set(getCardSelector(incomingIndex), {
          x: 0,
          y: 0,
          width: viewportWidth,
          height: viewportHeight,
          borderRadius: 0,
          opacity: 1,
          scale: 1,
          zIndex: BG_Z,
          visibility: "visible"
        });
        gsap.set(getCardContentSelector(incomingIndex), { x: 0, y: 0, opacity: 0, visibility: "hidden" });

        newOrder.slice(1).forEach((idx, index) => {
          const isVisible = index < VISIBLE_THUMBS;
          const thumbX = isVisible ? getThumbX(offsetLeft, index) : hiddenThumbX;
          gsap.set(getCardSelector(idx), {
            x: thumbX,
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            zIndex: THUMB_Z,
            borderRadius: 12,
            opacity: isVisible ? 1 : 0,
            scale: 1,
            visibility: isVisible ? "visible" : "hidden"
          });
          gsap.set(getCardContentSelector(idx), {
            x: thumbX,
            y: getThumbContentY(offsetTop),
            zIndex: THUMB_Z,
            opacity: isVisible && !hideThumbLabels ? 1 : 0,
            visibility: isVisible ? "visible" : "hidden"
          });
          gsap.set(getSliderItemSelector(idx), {
            x: isVisible ? (index + 1) * numberSize : (VISIBLE_THUMBS + 1) * numberSize
          });
        });

        setSlidesOrder(newOrder);
        setIsDetailsEven(newDetailsEven);
        animatingRef.current = false;
        startLoop();
      }
    });

    tl.to(overlayCanvas, {
      left: 0,
      top: 0,
      width: heroMetrics.width,
      height: heroMetrics.height,
      borderRadius: 0,
      duration: 0.8,
      ease: ease
    }, 0);

    tl.to(currentDetailsSelector, { opacity: 0, duration: 0.3, ease: ease }, 0);

    tl.to(getCardSelector(activeIndex), {
      x: hiddenThumbX,
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      scale: 1,
      opacity: 0,
      borderRadius: 12,
      zIndex: BG_Z,
      visibility: "hidden",
      duration: 0.8,
      ease: ease
    }, 0);
    tl.to(getCardContentSelector(activeIndex), {
      x: hiddenThumbX,
      y: getThumbContentY(offsetTop),
      opacity: 0,
      visibility: "hidden",
      duration: 0.8,
      ease: ease
    }, 0);

    slidesOrder.slice(2).forEach((idx, index) => {
      const targetX = getThumbX(offsetLeft, index);
      tl.to(getCardSelector(idx), {
        x: targetX,
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        zIndex: THUMB_Z,
        visibility: "visible",
        ease: ease,
        duration: 0.8
      }, 0);
      tl.to(getCardContentSelector(idx), {
        x: targetX,
        y: getThumbContentY(offsetTop),
        opacity: hideThumbLabels ? 0 : 1,
        visibility: "visible",
        ease: ease,
        duration: 0.8
      }, 0);
      tl.to(getSliderItemSelector(idx), { x: (index + 1) * numberSize, ease: ease, duration: 0.8 }, 0);
    });

    tl.to(nextDetailsSelector, { opacity: 1, ease: ease, duration: 0.4 }, 0.4);
    tl.to(`${nextDetailsSelector} .gText`, { y: 0, duration: 0.7, ease: ease }, 0.4);
    tl.to(`${nextDetailsSelector} .gTitle1`, { y: 0, duration: 0.7, ease: ease }, 0.45);
    tl.to(`${nextDetailsSelector} .gDesc`, { y: 0, duration: 0.4, ease: ease }, 0.6);
    tl.to(`${nextDetailsSelector} .gCta`, { y: 0, duration: 0.4, ease: ease }, 0.65);

    tl.to(".gProgF", {
      width: progressBarWidth * (1 / SLIDER_DATA.length) * (incomingIndex + 1),
      ease: ease,
      duration: 0.8
    }, 0);

    tl.to(getSliderItemSelector(incomingIndex), { x: 0, ease: ease, duration: 0.8 }, 0);
    tl.to(getSliderItemSelector(activeIndex), { x: -numberSize, ease: ease, duration: 0.8 }, 0);

  }, [slidesOrder, isDetailsEven, activeIndex, incomingIndex, positionCards, startLoop]);

  handleNextRef.current = handleNext;

  useEffect(() => {
    positionCards(slidesOrderRef.current, isDetailsEvenRef.current);
    startLoop();

    const onResize = () => {
      if (!animatingRef.current) {
        positionCards(slidesOrderRef.current, isDetailsEvenRef.current);
      }
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (loopTimelineRef.current) loopTimelineRef.current.kill();
    };
  }, [positionCards, startLoop]);

  return (
    <main
      ref={heroRef}
      className="relative isolate w-full h-[100dvh] min-h-[100svh] overflow-hidden select-none bg-black m-0 p-0"
      style={{ "--banner-content-max": "340px", "--banner-progress-width": "240px" }}
    >
      <div
        ref={bgLayerRef}
        className="absolute inset-0 overflow-hidden z-[1] pointer-events-none"
        aria-hidden="true"
      />
      <div id="demo" className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {SLIDER_DATA.map((slide, index) => (
          <div
            key={index}
            className="card absolute bg-cover bg-center shadow-lg overflow-hidden will-change-transform transform-gpu
                       after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/75 after:via-black/30 after:to-transparent after:z-10"
            id={`card${index}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className="card-content absolute p-2.5 sm:p-3 text-white flex flex-col justify-end w-full h-full rounded-lg will-change-transform z-20 pointer-events-none"
              id={`card-content-${index}`}
            >
              <div className="text-[8px] sm:text-[9px] font-bold tracking-[1.5px] uppercase text-amber-400 line-clamp-1">
                {slide.subtitle}
              </div>
              <div className="text-[10px] sm:text-xs font-black tracking-wide uppercase line-clamp-1 leading-tight mt-0.5">
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
    </main>
  );
}
