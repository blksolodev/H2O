import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [view, setView] = useState<PageView>('home');

  const handleNavigate = (newView: PageView) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      
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