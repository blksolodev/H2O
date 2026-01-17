import React from 'react';
import { Droplets, Twitter, Instagram, Mail } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view: PageView) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo(0, 0);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-aqua rounded-lg flex items-center justify-center">
                <Droplets size={16} fill="white" className="text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">H2O</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              The simple, privacy-focused way to track your water intake and build lasting healthy habits on iOS.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:devkade@outlook.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#features" onClick={(e) => handleSectionClick(e, '#features')} className="text-gray-400 hover:text-brand-aqua transition-colors">Features</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleSectionClick(e, '#how-it-works')} className="text-gray-400 hover:text-brand-aqua transition-colors">How it Works</a></li>
              <li><a href="#faq" onClick={(e) => handleSectionClick(e, '#faq')} className="text-gray-400 hover:text-brand-aqua transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-aqua transition-colors">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Legal & Support</h3>
            <ul className="space-y-4">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'privacy')} className="text-gray-400 hover:text-brand-aqua transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'support')} className="text-gray-400 hover:text-brand-aqua transition-colors">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-aqua transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2025 H2O App. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with 💧 in San Francisco.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;