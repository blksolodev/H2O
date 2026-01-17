import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Is H2O completely free?",
    answer: "H2O offers a generous free tier that includes basic tracking, standard reminders, and basic stats. We offer a Premium subscription for unlimited drink types, advanced widgets, and long-term history analysis."
  },
  {
    question: "Do I need an internet connection?",
    answer: "No! H2O works completely offline. Your data is stored locally on your device for maximum privacy and speed."
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. We believe your health data belongs to you. We do not collect, sell, or sync your personal hydration data to any cloud servers unless you explicitly enable iCloud Backup."
  },
  {
    question: "Does it support Apple Health?",
    answer: "Yes, H2O fully integrates with Apple Health (HealthKit) to read and write water consumption data, syncing perfectly with your other health apps."
  },
  {
    question: "What devices are supported?",
    answer: "H2O is available on iPhone (iOS 15+) and Apple Watch (watchOS 8+). An iPad version is coming soon!"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-brand-blue/30 dark:hover:border-brand-aqua/30 transition-colors">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white dark:bg-brand-darkCard hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-blue dark:text-brand-aqua flex-shrink-0 ml-4" size={20} />
                ) : (
                  <Plus className="text-gray-400 dark:text-gray-500 flex-shrink-0 ml-4" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 dark:bg-gray-900/50 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;