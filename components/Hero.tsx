import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Apple, Droplet, Flame, Trophy, Coffee, Sparkles } from 'lucide-react';

const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center p-4 glass rounded-2xl transform hover:scale-105 transition-transform duration-300">
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-aqua">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">{label}</div>
    </div>
  );
};

// --- Mock Screen Component (Duplicated from Screenshots for Hero usage) ---
const ScreenToday = () => (
  <div className="w-full h-full bg-[#020617] text-white flex flex-col relative font-sans overflow-hidden select-none">
    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-bl-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
    <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-brand-aqua/10 rounded-tr-full blur-3xl -ml-10 pointer-events-none"></div>

    {/* Header */}
    <div className="pt-14 px-6 mb-2 flex justify-between items-center relative z-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Today</h2>
        <p className="text-gray-400 text-xs font-medium">Sat, Jan 26</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-800/50 border border-white/10 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-blue to-cyan-400 opacity-80 scale-75"></div>
      </div>
    </div>

    {/* Main Circular Progress */}
    <div className="flex-grow flex flex-col items-center justify-center -mt-6 relative z-10">
      <div className="relative w-52 h-52 flex items-center justify-center">
        {/* Glow */}
        <div className="absolute inset-0 bg-brand-blue/10 blur-2xl rounded-full scale-90"></div>
        
        {/* SVG Ring with viewBox for scaling */}
        <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 256 256">
          {/* Track */}
          <circle cx="128" cy="128" r="100" stroke="#0f172a" strokeWidth="24" fill="transparent" strokeLinecap="round" />
          {/* Progress */}
          <circle 
            cx="128" cy="128" r="100" 
            stroke="url(#gradient-hero)" 
            strokeWidth="24" 
            fill="transparent" 
            strokeDasharray="628" 
            strokeDashoffset="500" 
            strokeLinecap="round" 
            className="drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" 
          />
          <defs>
            <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007AFF" />
              <stop offset="100%" stopColor="#00C7BE" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center Text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-bold tracking-tighter text-white drop-shadow-lg">20<span className="text-2xl align-top text-gray-400">%</span></span>
          <span className="text-xs text-cyan-100/70 mt-1 font-medium tracking-wide">12 / 64 oz</span>
        </div>
      </div>
      
      <div className="mt-6 bg-[#0f172a] border border-white/5 px-6 py-2 rounded-full shadow-lg backdrop-blur-md">
        <p className="text-brand-aqua text-xs font-semibold tracking-wide">52 oz to go</p>
      </div>
    </div>

    {/* Bottom Sheet UI */}
    <div className="mt-auto bg-[#0f172a] rounded-t-[2.5rem] p-6 pb-10 border-t border-white/5 relative shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        {/* Handle */}
        <div className="w-12 h-1 bg-gray-700/50 rounded-full mx-auto mb-8"></div>
        
        {/* Streak Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#1e293b] p-4 rounded-2xl flex items-center gap-3 border border-white/5 shadow-inner">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 ring-1 ring-orange-500/30">
                    <Flame size={20} fill="currentColor" />
                </div>
                <div>
                    <div className="text-xl font-bold leading-none">5</div>
                    <div className="text-[10px] text-gray-400 mt-1 font-medium">Day Streak</div>
                </div>
            </div>
            <div className="bg-[#1e293b] p-4 rounded-2xl flex items-center gap-3 border border-white/5 shadow-inner">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-500 ring-1 ring-yellow-500/30">
                    <Trophy size={20} fill="currentColor" />
                </div>
                <div>
                    <div className="text-xl font-bold leading-none">12</div>
                    <div className="text-[10px] text-gray-400 mt-1 font-medium">Best Streak</div>
                </div>
            </div>
        </div>

        {/* Quick Add Row */}
        <div className="flex gap-4">
             <div className="flex flex-col items-center gap-2 group cursor-pointer flex-1">
                <div className="w-full aspect-square bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/20 hover:scale-105 transition-transform">
                    <Droplet size={28} fill="white" />
                </div>
                <span className="text-[11px] font-medium text-white">Water</span>
            </div>
             <div className="flex flex-col items-center gap-2 flex-1 opacity-60">
                <div className="w-full aspect-square bg-[#1e293b] rounded-2xl flex items-center justify-center ring-1 ring-white/5">
                    <Coffee size={24} />
                </div>
                <span className="text-[11px] font-medium text-gray-400">Coffee</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1 opacity-60">
                <div className="w-full aspect-square bg-[#1e293b] rounded-2xl flex items-center justify-center ring-1 ring-white/5">
                    <Sparkles size={24} />
                </div>
                <span className="text-[11px] font-medium text-gray-400">Sparkling</span>
            </div>
        </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    }
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-0 lg:pt-48 overflow-hidden bg-white dark:bg-brand-dark transition-colors duration-500"
    >
      {/* --- NEW ADVANCED BACKGROUND --- */}
      
      {/* 1. Grid Pattern Overlay - fades out at bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent)]" />

      {/* 2. Fluid Mesh Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Main Blue Glow - Top Right */}
        <div 
          className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-brand-blue/20 dark:bg-brand-blue/30 rounded-full blur-[80px] sm:blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen" 
        />
        
        {/* Aqua Glow - Bottom Left */}
        <div 
          className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-brand-aqua/20 dark:bg-brand-aqua/20 rounded-full blur-[80px] sm:blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" 
          style={{ animationDelay: '2s' }}
        />
        
        {/* Purple/Accent Glow - Center moving */}
        <div 
          className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-purple-300/20 dark:bg-purple-900/20 rounded-full blur-[80px] sm:blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen" 
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8" style={{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-900/30 text-brand-blue dark:text-blue-200 font-semibold text-sm border border-blue-100 dark:border-blue-800 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              v2.0 is now available
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Hydration made <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-aqua to-brand-blue bg-[length:200%_auto] animate-gradient">effortless.</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Build better habits with H2O. The smart, beautiful, and private way to track your daily water intake on iOS.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-xl shadow-blue-900/10 dark:shadow-blue-500/20 w-full sm:w-auto group liquid-button"
              >
                <Apple size={24} className="fill-current" />
                <div className="text-left">
                  <div className="text-xs font-medium opacity-80">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </a>
              
              <a href="#how-it-works" className="flex items-center justify-center gap-2 px-8 py-4 text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-aqua font-medium transition-colors w-full sm:w-auto">
                How it works <ChevronRight size={18} />
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100 dark:border-gray-800 mt-8">
              <StatCounter end={10000} label="Downloads" />
              <StatCounter end={500000} label="Glasses Tracked" />
              <StatCounter end={48} label="Rating (4.8)" />
            </div>
          </div>

          {/* Phone Mockup with 3D Tilt */}
          <div 
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px] group perspective-1000"
            style={{ 
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-aqua rounded-[3rem] blur-3xl opacity-30 dark:opacity-40 group-hover:opacity-50 transition-opacity duration-500 transform scale-95" />
            
            <div className="relative rounded-[3rem] border-[8px] border-gray-900 dark:border-gray-800 overflow-hidden shadow-2xl bg-[#020617] aspect-[9/19.5]">
              {/* Screen Content */}
              <ScreenToday />
              
              {/* Glossy Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none rounded-[2.5rem]" />
            </div>
          </div>

        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-[200%] h-[100px] animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white dark:fill-brand-dark transition-colors duration-500"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;