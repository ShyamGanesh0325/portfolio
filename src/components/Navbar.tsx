import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  Moon, 
  Sun, 
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'UAE Focus', href: '#uae-focus' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-200 shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Custom Monogram Logo */}
          <a 
            href="#" 
            className="group flex items-center space-x-3 text-left focus:outline-none focus:ring-2 focus:ring-cyan-glow rounded-lg p-1"
            aria-label="Shyamganesh Seetharaman Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-midnight-800 dark:bg-midnight-800 light:bg-slate-100 border border-white/10 dark:border-white/15 light:border-slate-300 flex items-center justify-center font-display font-bold text-lg text-cyan-glow group-hover:border-cyan-glow/50 group-hover:shadow-glow-cyan-sm transition-all duration-300">
              <span className="gradient-text-cyan font-extrabold tracking-tighter">SS</span>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-glow to-gold-champagne opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-sm tracking-wide block text-text-primary dark:text-text-primary light:text-slate-900 group-hover:text-cyan-glow transition-colors">
                Shyamganesh S.
              </span>
              <span className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gold-champagne inline" /> Dubai · AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-cyan-glow dark:text-text-secondary dark:hover:text-cyan-glow light:text-slate-600 light:hover:text-cyan-dark transition-colors duration-200 rounded-lg hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center space-x-3">
            
            {/* Availability Indicator Badge */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-glow"></span>
              </span>
              <span className="tracking-tight">{PERSONAL_INFO.availabilityText}</span>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-midnight-800 dark:bg-midnight-800 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-text-secondary hover:text-text-primary dark:hover:text-text-primary light:text-slate-600 light:hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-glow transition-all"
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-gold-champagne" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Download CV Button */}
            <a
              href={PERSONAL_INFO.cvPath}
              download="Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wide bg-gradient-to-r from-cyan-glow/20 to-cyan-glow/10 hover:from-cyan-glow hover:to-cyan-400 text-cyan-glow hover:text-midnight-950 border border-cyan-glow/40 hover:border-transparent transition-all duration-300 shadow-glow-cyan-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-midnight-800 dark:bg-midnight-800 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-text-primary dark:text-text-primary light:text-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-midnight-900/98 dark:bg-midnight-900/98 light:bg-white/98 border-b border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            
            <div className="py-2 px-3 mb-2 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-mono flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-glow"></span>
              </span>
              <span>{PERSONAL_INFO.availabilityText}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-cyan-glow dark:text-text-secondary dark:hover:text-cyan-glow light:text-slate-700 light:hover:text-cyan-dark hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download="Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg text-xs font-bold font-mono tracking-wider bg-cyan-glow text-midnight-950 hover:bg-cyan-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV (PDF)</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
