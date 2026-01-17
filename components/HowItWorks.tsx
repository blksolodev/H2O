import React, { useEffect, useRef, useState } from 'react';
import { Download, Target, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Download & Setup',
    description: 'Get H2O from the App Store. No account creation required—just open and go.',
    icon: Download
  },
  {
    id: 2,
    title: 'Set Your Goal',
    description: 'H2O calculates a personalized goal based on your lifestyle, or you can set your own.',
    icon: Target
  },
  {
    id: 3,
    title: 'Track & Improve',
    description: 'Log drinks with a tap. View insights and watch your health improve day by day.',
    icon: TrendingUp
  }
];

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-brand-bg dark:bg-brand-darkCard transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Simple as 1, 2, 3</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Start your journey to better hydration in minutes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-10" />

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center text-center relative bg-brand-bg dark:bg-brand-darkCard md:bg-transparent p-4 transition-all duration-700 delay-${index * 200}`}
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="w-24 h-24 rounded-full bg-white dark:bg-brand-dark border-4 border-white dark:border-gray-700 shadow-lg flex items-center justify-center mb-8 relative z-10 transform transition-transform hover:scale-110 duration-300">
                <step.icon size={36} className="text-brand-blue dark:text-brand-aqua" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-aqua text-white flex items-center justify-center font-bold text-sm border-2 border-white dark:border-gray-800">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;