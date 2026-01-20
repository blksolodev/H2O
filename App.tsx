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
import TermsOfService from './components/TermsOfService';
import Download from './components/Download';
import { Droplets } from 'lucide-react';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initial Load Animation
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  // Handle Browser Back/Forward
  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
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

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
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

  // Router Logic
  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Screenshots />
            <Testimonials />
            <FAQ />
          </>
        );
      case '/features':
        return (
          <div className="pt-20">
             <Features />
          </div>
        );
      case '/how-it-works':
        return (
          <div className="pt-20">
             <HowItWorks />
          </div>
        );
      case '/screenshots':
        return <Screenshots />;
      case '/faq':
        return (
           <div className="pt-20">
             <FAQ />
           </div>
        );
      case '/privacy-policy':
        return <PrivacyPolicy />;
      case '/terms-of-service':
        return <TermsOfService />;
      case '/support':
        return <Support />;
      case '/download':
        return <Download />;
      default:
        // Fallback to home if path not found, or could be a 404 page
        return (
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Screenshots />
            <Testimonials />
            <FAQ />
          </>
        );
    }
  };

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
        currentPath={currentPath} 
        onNavigate={navigate} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;