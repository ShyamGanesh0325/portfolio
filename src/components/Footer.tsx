import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-midnight-950 dark:bg-midnight-950 light:bg-slate-100 border-t border-white/10 dark:border-white/10 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 dark:border-white/5 light:border-slate-200">
          
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-midnight-800 dark:bg-midnight-800 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center font-display font-bold text-lg">
              <span className="gradient-text-cyan">SS</span>
            </div>
            <div>
              <span className="font-display font-bold text-sm text-text-primary dark:text-text-primary light:text-slate-900 block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-text-muted dark:text-text-muted light:text-slate-500 font-mono">
                AI Engineer · University of Birmingham Dubai
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-text-secondary dark:text-text-secondary light:text-slate-600">
            <a href="#about" className="hover:text-cyan-glow transition-colors">About</a>
            <a href="#uae-focus" className="hover:text-cyan-glow transition-colors">UAE Focus</a>
            <a href="#experience" className="hover:text-cyan-glow transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-glow transition-colors">Projects</a>
            <a href="#research" className="hover:text-cyan-glow transition-colors">Research</a>
            <a href="#skills" className="hover:text-cyan-glow transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-glow transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-midnight-800 dark:bg-midnight-800 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-text-secondary hover:text-cyan-glow transition-all"
            aria-label="Back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright and verified claim notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted dark:text-text-muted light:text-slate-500 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Shyamganesh Seetharaman. All technical specifications sourced from verified academic & industry credentials.
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-champagne inline" />
            <span>Dubai, United Arab Emirates</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
