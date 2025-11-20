'use client';

import React from 'react';
import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* --- Background Atmosphere --- */}
      {/* A grid that fades out */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />

      {/* --- Main Content --- */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-10">
        
        {/* Futuristic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-blue-300 tracking-widest uppercase">System Online v2.0</span>
        </div>

        {/* Massive Headline with Gradient */}
        <h1 className="font-heading text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
          <span className="block text-white drop-shadow-2xl">NEXUS</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">
            AI LABS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Architecting the impossible. We fuse <span className="text-white">generative AI</span> with <span className="text-white">immersive design</span> to build the next generation of the web.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="#works" 
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 group-hover:text-white transition-colors">Explore Works</span>
            <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </Link>
          
          <Link 
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
          >
            Start Project
          </Link>
        </div>
      </div>

    </section>
  );
}