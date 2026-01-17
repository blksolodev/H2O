import React from 'react';
import { Mail, MessageCircle, FileText, LifeBuoy } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 dark:bg-brand-dark min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-blue dark:text-brand-aqua font-semibold tracking-wider uppercase text-sm mb-2 block">Help Center</span>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">How can we help you?</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you have a question about features, a bug report, or feature request, we're here to listen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Card */}
          <div className="bg-white dark:bg-brand-darkCard p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-blue-200 rounded-2xl flex items-center justify-center mb-6">
              <Mail size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Email Support</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              For direct assistance with your account or technical issues. Our team typically responds within 24 hours.
            </p>
            <a 
              href="mailto:devkade@outlook.com" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-brand-blue hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Contact Support
            </a>
          </div>

          {/* Resources Card */}
          <div className="bg-white dark:bg-brand-darkCard p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
             <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 text-brand-aqua dark:text-teal-200 rounded-2xl flex items-center justify-center mb-6">
              <LifeBuoy size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Feature Request</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Have an idea that would make H2O even better? We love hearing from our community.
            </p>
            <a 
              href="mailto:devkade@outlook.com?subject=Feature Request"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-100 dark:border-gray-700 text-base font-bold rounded-2xl text-gray-900 dark:text-white bg-white dark:bg-transparent hover:border-brand-aqua hover:text-brand-aqua dark:hover:text-brand-aqua transition-all"
            >
              Submit Idea
            </a>
          </div>
        </div>

        {/* Quick Links / Mini FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">Common Topics</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-brand-darkCard p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">How do I restore my purchase?</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Go to Settings &gt; Premium and tap "Restore Purchases" at the bottom of the screen.</p>
            </div>
            <div className="bg-white dark:bg-brand-darkCard p-6 rounded-xl border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Widget not updating?</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">This is usually an iOS restriction. Try opening the app once to force a refresh, or restart your device.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;