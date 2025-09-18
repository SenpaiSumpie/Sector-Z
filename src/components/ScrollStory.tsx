'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from './scroll-story/HeroSection';
import { CraftingWorldsSection } from './scroll-story/CraftingWorldsSection';
import { SharpSystemsSection } from './scroll-story/SharpSystemsSection';
import { DevlogReelSection } from './scroll-story/DevlogReelSection';
import { FinalCTASection } from './scroll-story/FinalCTASection';
import { ProgressBar } from './scroll-story/ProgressBar';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Disable GSAP animations for reduced motion
      ScrollTrigger.getAll().forEach(trigger => trigger.disable());
      return;
    }

    const ctx = gsap.context(() => {
      // Set up smooth scrolling
      ScrollTrigger.config({
        ignoreMobileResize: true,
      });

      // Progress bar animation
      gsap.to('.progress-bar__fill', {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.1,
        },
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [prefersReducedMotion]);

  // Handle cleanup on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <ProgressBar />
      <div 
        ref={containerRef}
        className="scroll-story"
        role="main"
        aria-label="Sector Z Studio Story"
      >
        {/* Story Beat 1: Hero */}
        <HeroSection prefersReducedMotion={prefersReducedMotion} />
        
        {/* Story Beat 2: Crafting Worlds */}
        <CraftingWorldsSection prefersReducedMotion={prefersReducedMotion} />
        
        {/* Story Beat 3: Sharp Systems */}
        <SharpSystemsSection prefersReducedMotion={prefersReducedMotion} />
        
        {/* Story Beat 4: Devlog Reel */}
        <DevlogReelSection prefersReducedMotion={prefersReducedMotion} />
        
        {/* Story Beat 5: Final CTA */}
        <FinalCTASection prefersReducedMotion={prefersReducedMotion} />
      </div>
    </>
  );
}