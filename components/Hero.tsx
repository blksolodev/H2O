import React from 'react';
import { ChevronRight, Apple } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-aqua/10 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-brand-blue font-semibold text-sm border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              v2.0 is now available
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Hydration made <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-aqua">effortless.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Build better habits with H2O. The smart, beautiful, and private way to track your daily water intake on iOS.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all hover:scale-105 shadow-xl shadow-blue-900/10 w-full sm:w-auto group"
              >
                <Apple size={24} className="fill-current" />
                <div className="text-left">
                  <div className="text-xs font-medium opacity-80">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
              </a>
              
              <a href="#how-it-works" className="flex items-center justify-center gap-2 px-8 py-4 text-gray-600 hover:text-brand-blue font-medium transition-colors w-full sm:w-auto">
                How it works <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-aqua rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform rotate-6 scale-95" />
            <div className="relative rounded-[3rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl bg-white aspect-[9/19.5]">
              {/* Screen Content - displaying the specific 'Today' screen */}
              <div className="w-full h-full relative bg-brand-bg">
                 <img 
                   src="./image_2.png" 
                   alt="H2O App Today Screen" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;