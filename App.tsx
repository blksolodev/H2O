import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Support from './components/Support';
import { PageView } from './types';
import { Droplets } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<PageView>('home');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initial Load Animation
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleNavigate = (newView: PageView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-brand-dark flex flex-col items-center justify-center z-[100]">
        <div className="relative">
          <Droplets size={64} className="text-brand-blue animate-bounce" />
          <div className="absolute top-0 left-0 w-full h-full bg-brand-aqua opacity-50 blur-xl animate-pulse"></div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-brand-blue animate-pulse">H2O</h2>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      
      {/* Scroll Progress Indicator - Water filling glass effect */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 h-32 w-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden z-50 hidden md:block border border-gray-300 dark:border-gray-700">
        <div 
          className="absolute bottom-0 left-0 w-full bg-brand-blue transition-all duration-100 ease-out opacity-80"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      <Navbar 
        currentView={view} 
        onNavigate={handleNavigate} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Screenshots />
            <Testimonials />
            <FAQ />
          </>
        )}
        
        {view === 'privacy' && <PrivacyPolicy />}
        
        {view === 'support' && <Support />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;