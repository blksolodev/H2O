import React, { useRef, useState, useEffect } from 'react';
import { Bell, Shield, Smartphone, Activity, Moon, Droplet } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Smart Reminders",
    description: "Intelligent notifications that adapt to your schedule, reminding you only when you need it.",
    icon: Bell
  },
  {
    title: "Privacy First",
    description: "Your health data stays on your device. No accounts, no tracking, no cloud sync required.",
    icon: Shield
  },
  {
    title: "Home Screen Widgets",
    description: "Track your progress at a glance with beautiful, customizable widgets for your home screen.",
    icon: Smartphone
  },
  {
    title: "Streak Tracking",
    description: "Build lasting habits by keeping your hydration streak alive. Gamify your health journey.",
    icon: Activity
  },
  {
    title: "Dark Mode",
    description: "A stunning dark theme that's easy on the eyes, automatically syncing with system settings.",
    icon: Moon
  },
  {
    title: "Quick Logging",
    description: "Log your drinks in seconds with one-tap shortcuts for your favorite beverages.",
    icon: Droplet
  }
];

const TiltCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass rounded-3xl p-8 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: isVisible 
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)` 
          : 'translateY(50px)',
      }}
    >
      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-brand-dark/50 text-brand-blue dark:text-brand-aqua shadow-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white border border-gray-100 dark:border-gray-700">
        <feature.icon size={28} />
      </div>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
      
      {/* Hover Ripple Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-brand-blue/5 to-transparent dark:from-brand-blue/10" />
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-500 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      {/* Subtle Mesh Blobs */}
      <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-brand-aqua/5 dark:bg-brand-aqua/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue dark:text-brand-aqua font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">Everything you need to stay hydrated.</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            H2O combines powerful features with a minimalist design to help you reach your daily water intake goals effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group h-full">
              <TiltCard feature={feature} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;