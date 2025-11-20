'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change background style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A10]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-mono text-white tracking-tighter">
          NEXUS<span className="text-blue-500">.AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Works
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button (Placeholder) */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
}