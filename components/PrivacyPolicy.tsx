import React from 'react';
import { Shield, Database, Activity, Eye, Mail, Check, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-500 pt-32 pb-24 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-brand-blue/5 pointer-events-none" />
       <div className="absolute top-40 right-0 w-96 h-96 bg-brand-aqua/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue dark:text-brand-aqua mb-8 animate-float shadow-lg shadow-blue-900/5">
            <Shield size={40} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your health data is sensitive. We treat it with the highest level of privacy and security possible.
          </p>
          <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400">
            Last Updated: January 26, 2025
          </div>
        </div>

        {/* Short Version Card */}
        <div className="glass rounded-3xl p-8 mb-16 border border-brand-blue/10 dark:border-brand-blue/20 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 transform hover:scale-[1.01] transition-transform duration-500">
          <h3 className="flex items-center gap-3 text-brand-blue dark:text-brand-aqua font-bold text-xl mb-4">
            <div className="p-1.5 rounded-full bg-brand-blue text-white dark:bg-brand-aqua dark:text-brand-dark">
                <Check size={16} strokeWidth={4} />
            </div>
            The Short Version
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            We don't collect your personal data. Your hydration history stays on your device (or your personal iCloud). We don't sell your info to anyone. Period.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
            
            <Section 
                icon={FileText}
                title="1. Introduction"
            >
                <p>H2O ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by H2O. We believe that your health data belongs to you, and we have designed our app to reflect that belief.</p>
            </Section>

            <Section 
                icon={Database}
                title="2. Data Collection & Storage"
            >
                <p className="mb-4"><strong className="text-gray-900 dark:text-white">Local Storage:</strong> All hydration data, preferences, and goals you enter into the H2O app are stored locally on your iOS device.</p>
                <p><strong className="text-gray-900 dark:text-white">iCloud Backup:</strong> If you choose to enable iCloud Sync/Backup in the app settings, your data will be securely stored in your personal private iCloud container. This data is encrypted by Apple and cannot be accessed by us or anyone else.</p>
            </Section>

            <Section 
                icon={Activity}
                title="3. Apple Health (HealthKit)"
            >
                 <p className="mb-4">H2O offers optional integration with Apple Health (HealthKit) to provide a seamless experience. If you grant permission, H2O accesses HealthKit to:</p>
                 <ul className="space-y-3 pl-2 mb-4">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 flex-shrink-0"></div>
                        <span><strong>Read:</strong> Water intake data logged by other apps to keep your totals accurate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 flex-shrink-0"></div>
                        <span><strong>Write:</strong> Water intake data logged within H2O to your centralized health dashboard.</span>
                    </li>
                </ul>
                <p>This data is processed entirely on-device. We do not transmit your HealthKit data to any external servers.</p>
            </Section>

            <Section 
                icon={Eye}
                title="4. Analytics"
            >
                <p>We use Apple's opt-in crash reporting and basic anonymous usage statistics (e.g., "App Launched", "Widget Added") to help us identify bugs and improve performance. This data is aggregated and cannot be used to identify you personally.</p>
            </Section>

            <Section 
                icon={Mail}
                title="5. Contact Us"
            >
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:devkade@outlook.com" className="text-brand-blue dark:text-brand-aqua hover:underline font-medium">devkade@outlook.com</a>.</p>
            </Section>

        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ icon: any, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
    <div className="flex gap-6 group">
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-brand-blue dark:group-hover:text-brand-aqua group-hover:scale-110 transition-all duration-300">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {children}
            </div>
        </div>
    </div>
);

export default PrivacyPolicy;