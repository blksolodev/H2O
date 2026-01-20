import React from 'react';
import { ScrollText, Check } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-500 pt-32 pb-24 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-brand-blue/5 pointer-events-none" />
       
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-aqua mb-8 animate-float shadow-lg shadow-blue-900/5">
            <ScrollText size={40} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Standard terms, simplified. By using H2O, you agree to the following conditions.
          </p>
          <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400">
            Last Updated: January 26, 2025
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
            
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h3>
                <p className="mb-6">By accessing and using the H2O application, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use License</h3>
                <p className="mb-6">Permission is granted to download one copy of the materials (information or software) on H2O for personal, non-commercial transitory viewing only.</p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Disclaimer</h3>
                <p className="mb-6">The materials on H2O are provided "as is". H2O makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <p className="mb-6">H2O is not a medical device. The information provided by this application is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Limitations</h3>
                <p className="mb-6">In no event shall H2O or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on H2O.</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;