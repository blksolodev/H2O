import React from 'react';
import { Droplet, Flame, Trophy, Coffee, Sparkles, ChevronRight, CheckCircle2, Plus } from 'lucide-react';

// --- Reusable Phone Frame ---
const PhoneFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`flex-shrink-0 w-[280px] sm:w-[300px] h-[600px] snap-center rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl relative transform transition-transform hover:-translate-y-4 duration-500 ${className}`}>
    {/* Status Bar Mock */}
    <div className="absolute top-0 w-full h-8 z-20 flex justify-between px-6 items-end pb-1 text-[10px] font-bold text-white mix-blend-difference">
        <span>9:41</span>
        <div className="flex gap-1">
            <div className="w-4 h-2.5 bg-white rounded-[2px] opacity-90"></div>
        </div>
    </div>
    {/* Notch/Island area */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-3xl z-20 pointer-events-none"></div>
    
    {/* Screen Content */}
    <div className="w-full h-full overflow-hidden relative bg-black">
      {children}
    </div>
  </div>
);

// --- Mock Screen 1: Splash/Home ---
const ScreenSplash = () => (
  <div className="w-full h-full bg-gradient-to-br from-brand-blue to-cyan-400 flex flex-col items-center justify-center text-white relative">
    {/* Ambient Background */}
    <div className="absolute inset-0 bg-grid opacity-20"></div>
    <div className="absolute top-20 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float"></div>
    <div className="absolute bottom-40 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
    
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner border border-white/40 ring-4 ring-white/10">
        <Droplet size={64} fill="white" className="text-white drop-shadow-lg" />
      </div>
      <h1 className="text-5xl font-bold tracking-tighter mb-2">H2O</h1>
      <p className="text-blue-50 text-lg font-medium tracking-wide opacity-90">Track your hydration</p>
    </div>

    <div className="absolute bottom-12 left-0 w-full flex flex-col items-center opacity-80 animate-pulse">
        <div className="text-xs font-semibold tracking-widest uppercase mb-2">Loading</div>
        <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-full bg-white origin-left animate-[grow_1.5s_ease-in-out_infinite]"></div>
        </div>
    </div>
  </div>
);

// --- Mock Screen 2: Today Dashboard ---
const ScreenToday = () => (
  <div className="w-full h-full bg-[#020617] text-white flex flex-col relative font-sans overflow-hidden">
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
            stroke="url(#gradient-today)" 
            strokeWidth="24" 
            fill="transparent" 
            strokeDasharray="628" 
            strokeDashoffset="500" 
            strokeLinecap="round" 
            className="drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" 
          />
          <defs>
            <linearGradient id="gradient-today" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#007AFF" />
              <stop offset="100%" stopColor="#00C7BE" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center Text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-bold tracking-tighter text-white drop-shadow-lg">20<span className="text-xl align-top text-gray-400">%</span></span>
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

// --- Mock Screen 3: History ---
const ScreenHistory = () => (
  <div className="w-full h-full bg-[#061d29] text-white flex flex-col font-sans">
    <div className="pt-14 px-6 mb-6 flex justify-between items-end">
      <h2 className="text-3xl font-bold tracking-tight">History</h2>
      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
          <ChevronRight size={18} className="rotate-90" />
      </div>
    </div>

    {/* Toggle */}
    <div className="mx-6 bg-[#0c2634] p-1 rounded-xl mb-6 flex relative">
      <div className="w-1/2 bg-[#007AFF] py-1.5 rounded-[0.6rem] text-center text-xs font-bold shadow-md z-10">Week</div>
      <div className="w-1/2 py-1.5 text-center text-xs text-gray-400 font-medium">Month</div>
    </div>

    {/* Main Content Area */}
    <div className="flex-1 overflow-hidden px-4 pb-4 flex flex-col gap-4">
        {/* Chart Card */}
        <div className="bg-[#0c2634] p-5 rounded-[1.5rem] border border-white/5 relative">
          <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="font-bold text-sm">Weekly Overview</h3>
                <div className="text-[10px] text-gray-400 mt-1">Jan 11 - Jan 17</div>
            </div>
            <div className="text-brand-aqua text-xs font-bold bg-brand-aqua/10 px-2 py-1 rounded-lg">+12%</div>
          </div>
          
          <div className="h-28 flex items-end justify-between px-1 relative gap-2">
            {/* Bars */}
            {[40, 65, 35, 85, 55, 25, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end group">
                     <div 
                        className={`w-full rounded-t-sm transition-all duration-1000 ${i === 6 ? 'bg-gradient-to-t from-brand-blue to-cyan-400 opacity-100' : 'bg-[#1a3f52] opacity-60'}`} 
                        style={{ height: `${h}%` }}
                     ></div>
                </div>
            ))}
            {/* Goal Line */}
             <div className="absolute top-6 w-full border-t border-dashed border-white/10 z-0"></div>
          </div>
          <div className="flex justify-between text-[9px] text-gray-500 mt-3 font-medium uppercase tracking-wider">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3">
             <div className="bg-[#0c2634] p-4 rounded-[1.5rem] border border-white/5">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-3">
                    <CheckCircle2 size={16} />
                </div>
                <div className="text-2xl font-bold">4</div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Days Met</div>
            </div>
            <div className="bg-[#0c2634] p-4 rounded-[1.5rem] border border-white/5">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-3">
                    <Droplet size={16} />
                </div>
                <div className="text-2xl font-bold">64<span className="text-sm text-gray-500">oz</span></div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Average</div>
            </div>
        </div>
    </div>
  </div>
);


const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-32 bg-white dark:bg-brand-dark transition-colors duration-500 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Clean, Intuitive Interface</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Designed to look beautiful and feel natural on your iPhone.</p>
      </div>

      <div className="relative">
        {/* Scroll Container */}
        <div className="flex overflow-x-auto pb-16 pt-8 gap-8 px-8 sm:px-12 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0 justify-start lg:justify-center items-center">
            <PhoneFrame className="scale-95 hover:scale-100 hover:rotate-0 -rotate-2 origin-bottom-right opacity-80 hover:opacity-100">
                <ScreenSplash />
            </PhoneFrame>
            <PhoneFrame className="scale-105 z-10 shadow-brand-blue/20">
                <ScreenToday />
            </PhoneFrame>
             <PhoneFrame className="scale-95 hover:scale-100 hover:rotate-0 rotate-2 origin-bottom-left opacity-80 hover:opacity-100">
                <ScreenHistory />
            </PhoneFrame>
        </div>
        
        {/* Gradient Fade for scroll on mobile */}
        <div className="lg:hidden absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white dark:from-brand-dark to-transparent pointer-events-none"></div>
        <div className="lg:hidden absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white dark:from-brand-dark to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Screenshots;