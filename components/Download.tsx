import React from 'react';
import { Apple, Smartphone } from 'lucide-react';

const Download: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg dark:bg-brand-dark transition-colors duration-500 pt-32 pb-24 relative overflow-hidden flex flex-col items-center justify-center">
       
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
       </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-aqua rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-float">
                <Smartphone size={48} className="text-white" />
            </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
          Get H2O Today
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Start building better habits. Download H2O for iPhone and Apple Watch on the App Store.
        </p>

        <a 
          href="#"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-xl shadow-blue-900/10 dark:shadow-blue-500/20 group liquid-button"
        >
          <Apple size={32} className="fill-current" />
          <div className="text-left">
            <div className="text-sm font-medium opacity-80">Download on the</div>
            <div className="text-2xl font-bold leading-none">App Store</div>
          </div>
        </a>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            Requires iOS 15.0 or later. Compatible with iPhone.
        </div>
      </div>
    </div>
  );
};

export default Download;