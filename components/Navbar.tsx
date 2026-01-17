import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-blue to-brand-aqua rounded-xl flex items-center justify-center text-white shadow-lg">
              <Droplets size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl sm:text-2xl tracking-tight text-gray-900">H2O</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-brand-blue font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#download"
              className="block w-full text-center px-6 py-3 bg-brand-blue text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Download on App Store
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;