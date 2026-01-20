import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets, Sun, Moon } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Screenshots', href: '/screenshots' },
  { label: 'FAQ', href: '/faq' },
];

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || currentPath !== '/' ? 'glass shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('/')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-blue to-brand-aqua rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Droplets size={20} fill="currentColor" className="animate-bounce" style={{ animationDuration: '3s' }} />
            </div>
            <span className="font-bold text-xl sm:text-2xl tracking-tight text-gray-900 dark:text-white transition-colors">H2O</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  currentPath === item.href 
                    ? 'text-brand-blue dark:text-brand-aqua after:scale-x-100 after:origin-bottom-left' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-aqua'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => onNavigate('/support')}
              className={`text-sm font-medium transition-colors ${
                currentPath === '/support' 
                  ? 'text-brand-blue dark:text-brand-aqua' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-aqua'
              }`}
            >
              Support
            </button>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="/download"
              onClick={(e) => handleNavClick(e, '/download')}
              className="px-6 py-2.5 bg-gray-900 dark:bg-brand-blue text-white font-medium rounded-full hover:bg-gray-800 dark:hover:bg-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-0.5 liquid-button"
            >
              Get App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-yellow-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full glass shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-2 dark:bg-brand-dark/90 bg-white/90">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 ${
                 currentPath === item.href 
                 ? 'text-brand-blue dark:text-brand-aqua bg-gray-50 dark:bg-gray-800'
                 : 'text-gray-700 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-aqua'
              }`}
            >
              {item.label}
            </a>
          ))}
           <button
            onClick={() => {
              onNavigate('/support');
              setIsOpen(false);
            }}
            className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-blue dark:hover:text-brand-aqua hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Support
          </button>
          <div className="pt-4">
            <a
              href="/download"
              className="block w-full text-center px-6 py-3 bg-brand-blue text-white font-medium rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
              onClick={(e) => handleNavClick(e, '/download')}
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