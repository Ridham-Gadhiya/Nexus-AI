'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const cardLeftRef = useRef<HTMLDivElement>(null);
  const cardRightRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing (1s delay)
          pin: true, // Pin the content while scrolling
        }
      });

      // 0. Initial State (Before scroll)
      // Text is huge, Orb is small/low, Cards are off-screen

      // 1. Sequence: The Scroll
      tl.to(textRef.current, {
        scale: 1.5, // Text grows massive
        opacity: 0.1, // Fades out slightly
        y: -100,
      }, 0)
      
      .to(orbRef.current, {
        y: 0, // Rises from bottom
        scale: 1, // Grows to full size
        opacity: 1,
        rotate: 360, // Slow rotation
      }, 0)

      .to(cardLeftRef.current, {
        x: 0, // Slides in from left
        y: 0,
        opacity: 1,
        rotate: -6, // Tilted final position
      }, 0.2) // Slight delay relative to start

      .to(cardRightRef.current, {
        x: 0, // Slides in from right
        y: 0,
        opacity: 1,
        rotate: 6, // Tilted final position
      }, 0.2)
      
      .to(buttonRef.current, {
        y: 0,
        opacity: 1,
      }, 0.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // 300vh height means the user has to scroll 3 screens worth of distance to finish the animation
    <main ref={containerRef} className="relative h-[300vh] w-full bg-[#0A0A10] overflow-hidden">
      
      {/* Sticky Container: This stays fixed while the user "scrolls" through the timeline */}
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* BACKGROUND TEXT (Parallax Layer 1) */}
        <h1 
          ref={textRef}
          className="absolute z-0 font-heading font-bold text-[25vw] text-white/5 whitespace-nowrap select-none will-change-transform"
          style={{ transform: 'translateY(0px) scale(1)' }}
        >
          NEXUS
        </h1>

        {/* CENTRAL ORB (Parallax Layer 2) */}
        <div 
          ref={orbRef}
          className="relative z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-0 translate-y-[200px] scale-50 will-change-transform"
        >
          {/* Glowing Core */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 blur-2xl opacity-50 animate-pulse-slow absolute inset-0" />
          {/* Solid Core */}
          <div className="relative w-full h-full rounded-full bg-black border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="text-center p-6">
               <span className="block text-blue-400 font-mono text-sm tracking-[0.4em] mb-2">SYSTEM</span>
               <span className="block text-white font-heading text-5xl md:text-7xl font-bold">ONLINE</span>
            </div>
          </div>
        </div>

        {/* LEFT CARD (Parallax Layer 3) */}
        <div 
          ref={cardLeftRef}
          className="absolute left-[10%] top-[40%] z-20 opacity-0 -translate-x-[200px] translate-y-[100px] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl w-64 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">🚀</div>
            <div className="text-sm font-bold text-gray-300">PERFORMANCE</div>
          </div>
          <div className="text-3xl font-bold text-white">60 FPS</div>
          <div className="text-xs text-gray-500 mt-1">Interaction Ready</div>
        </div>

        {/* RIGHT CARD (Parallax Layer 3) */}
        <div 
          ref={cardRightRef}
          className="absolute right-[10%] top-[50%] z-20 opacity-0 translate-x-[200px] translate-y-[100px] p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl w-64 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">🧠</div>
            <div className="text-sm font-bold text-gray-300">INTELLIGENCE</div>
          </div>
          <div className="text-3xl font-bold text-white">Gen-AI</div>
          <div className="text-xs text-gray-500 mt-1">Neural Networks</div>
        </div>

        {/* BOTTOM BUTTON (Parallax Layer 4) */}
        <div ref={buttonRef} className="absolute bottom-20 z-30 opacity-0 translate-y-20">
           <Link 
             href="/works" 
             className="group relative px-10 py-5 bg-white text-black font-heading font-bold text-xl rounded-full overflow-hidden transition-transform hover:scale-110"
           >
             <span className="relative z-10 group-hover:text-white transition-colors">ENTER EXPERIENCE</span>
             <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
           </Link>
        </div>

      </div>
    </main>
  );
}