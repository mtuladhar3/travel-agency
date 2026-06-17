'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import SectionHeader from './SectionHeader';
import SliderCard from './SliderCard';
import SliderControls from './SliderControls';
import { slidesData } from '../../../data/destinationSliderData';


export default function DestinationsSlider() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Triple the data array to create a seamless infinite trailing/leading buffer track
  const duplicatedSlides = [...slidesData, ...slidesData, ...slidesData];
  const originalLength = slidesData.length;
  
  const stateRef = useRef({
    currentIndex: originalLength, // Start in the middle set of cards
    cardWidth: 0,
    gap: 20, // matching tailwind mx-2.5 (10px on each side = 20px gap)
    isAnimating: false,
    autoplayTimer: null
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(Draggable);
    }

    const track = trackRef.current;
    if (!track) return;

    // Calculate dynamic layout widths based on responsive CSS
    const calculateDimensions = () => {
      const firstCard = track.children[0];
      if (firstCard) {
        stateRef.current.cardWidth = firstCard.offsetWidth;
        // Force-align position to the middle block without visual jumps
        const initialOffset = -(stateRef.current.currentIndex * (stateRef.current.cardWidth + stateRef.current.gap));
        gsap.set(track, { x: initialOffset });
      }
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);

    // Core Animation Function to jump smoothly between indexes
    const slideTo = (index, animated = true) => {
      const state = stateRef.current;
      if (state.isAnimating && animated) return;
      
      state.isAnimating = true;
      const targetX = -(index * (state.cardWidth + state.gap));

      gsap.to(track, {
        x: targetX,
        duration: animated ? 0.8 : 0,
        ease: 'power2.out',
        onComplete: () => {
          state.isAnimating = false;
          
          // --- THE SEAMLESS LOOP WRAP ENGINE ---
          // If the user travels into the first/left replication set, snap back silently to the middle set
          if (index < originalLength) {
            state.currentIndex = index + originalLength;
            gsap.set(track, { x: -(state.currentIndex * (state.cardWidth + state.gap)) });
          } 
          // If the user travels into the third/right replication set, snap back silently to the middle set
          else if (index >= originalLength * 2) {
            state.currentIndex = index - originalLength;
            gsap.set(track, { x: -(state.currentIndex * (state.cardWidth + state.gap)) });
          } else {
            state.currentIndex = index;
          }
          
          // Update the active UI dot indicator based on base index
          setActiveIndex(state.currentIndex % originalLength);
        }
      });
    };

    // Autoplay Loop Cycle Controls
    const startAutoplay = () => {
      stopAutoplay();
      stateRef.current.autoplayTimer = setInterval(() => {
        slideTo(stateRef.current.currentIndex + 1);
      }, 3500); // Transitions automatically every 3.5 seconds
    };

    const stopAutoplay = () => {
      if (stateRef.current.autoplayTimer) {
        clearInterval(stateRef.current.autoplayTimer);
      }
    };

    // Initialize GSAP Drag interactions
    const dragInstance = Draggable.create(track, {
      type: 'x',
      cursor: 'grab',
      activeCursor: 'grabbing',
      onDragStart: () => {
        stopAutoplay();
      },
      onDragEnd: function() {
        const state = stateRef.current;
        const totalSize = state.cardWidth + state.gap;
        
        // Determine how many steps the user physically dragged across the threshold
        const draggedSlides = Math.round(this.x / totalSize);
        // Translate the current baseline positioning index inversely
        const targetIndex = -draggedSlides;
        
        // Execute smooth fluid alignment snap sequence
        state.isAnimating = false; 
        slideTo(targetIndex);
        startAutoplay();
      }
    })[0];

    // Trigger Initial Autoplay state
    startAutoplay();

    // Cleanup logic safely
    return () => {
      window.removeEventListener('resize', calculateDimensions);
      dragInstance.kill();
      stopAutoplay();
    };
  }, [originalLength]);

  return (
    <section className="py-20 bg-[#F8F9FA] overflow-hidden w-full select-none">
      <SectionHeader />

      {/* Visual Slit Viewport Container */}
      <div 
        ref={containerRef} 
        className="w-full overflow-hidden px-4 sm:px-6"
      >
        {/* Hardware Accelerated Infinite Track Layout */}
        <div 
          ref={trackRef} 
          className="flex will-change-transform"
          style={{ width: 'max-content' }}
        >
          {duplicatedSlides.map((item, index) => (
            <SliderCard key={`${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Synchronized Pagination Indicators & Back-to-top feature */}
      <SliderControls total={originalLength} activeIndex={activeIndex} />
    </section>
  );
}