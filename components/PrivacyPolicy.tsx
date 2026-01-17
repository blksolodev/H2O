import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-500">Last updated: January 26, 2025</p>
      </div>
      
      <div className="prose prose-lg prose-blue text-gray-600 max-w-none">
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-10">
          <h3 className="text-brand-blue font-bold text-xl mt-0 mb-2">The Short Version</h3>
          <p className="mb-0 text-brand-blue/80">
            We don't collect your data. Your hydration history stays on your device (or your personal iCloud). We don't sell your info to anyone. Period.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Introduction</h3>
        <p className="mb-6">
          H2O ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by H2O. We believe that your health data belongs to you, and we have designed our app to reflect that belief.
        </p>
        
        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Data Collection & Storage</h3>
        <p className="mb-4">
          <strong>Local Storage:</strong> All hydration data, preferences, and goals you enter into the H2O app are stored locally on your iOS device. 
        </p>
        <p className="mb-6">
          <strong>iCloud Backup:</strong> If you choose to enable iCloud Sync/Backup in the app settings, your data will be securely stored in your personal private iCloud container. This data is encrypted by Apple and cannot be accessed by us or anyone else.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Apple Health (HealthKit) Integration</h3>
        <p className="mb-4">
          H2O offers optional integration with Apple Health (HealthKit) to provide a seamless experience. If you grant permission, H2O accesses HealthKit to:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Read:</strong> Water intake data logged by other apps to keep your totals accurate.</li>
          <li><strong>Write:</strong> Water intake data logged within H2O to your centralized health dashboard.</li>
        </ul>
        <p className="mb-6">
          This data is processed entirely on-device. We do not transmit your HealthKit data to any external servers for analytics, advertising, or data mining purposes.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Analytics</h3>
        <p className="mb-6">
          We use Apple's opt-in crash reporting and basic anonymous usage statistics (e.g., "App Launched", "Widget Added") to help us identify bugs and improve performance. This data is aggregated and cannot be used to identify you personally.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Contact Us</h3>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:devkade@outlook.com" className="text-brand-blue hover:underline">devkade@outlook.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;