import React from 'react';
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

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Everything you need to stay hydrated.</h3>
          <p className="text-xl text-gray-500">
            H2O combines powerful features with a minimalist design to help you reach your daily water intake goals effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white text-brand-blue shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;