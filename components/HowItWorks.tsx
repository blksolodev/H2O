import React from 'react';
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
  return (
    <section id="how-it-works" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple as 1, 2, 3</h2>
          <p className="mt-4 text-xl text-gray-600">Start your journey to better hydration in minutes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center relative bg-brand-bg md:bg-transparent p-4">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center mb-8 relative z-10">
                <step.icon size={36} className="text-brand-blue" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-aqua text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;