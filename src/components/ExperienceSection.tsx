import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-midnight-950/40 dark:bg-midnight-950/40 light:bg-slate-50 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-mono uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary dark:text-text-secondary light:text-slate-600">
            Real-world software and machine learning engineering inside industrial and enterprise environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 dark:border-white/10 light:border-slate-300 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-10 space-y-16">
          
          {EXPERIENCES.map((exp, idx) => {
            const isFirst = idx === 0;
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                  isFirst 
                    ? 'border-cyan-glow bg-midnight-900 dark:bg-midnight-900 light:bg-white shadow-glow-cyan-sm scale-110' 
                    : 'border-gold-champagne bg-midnight-900 dark:bg-midnight-900 light:bg-white'
                }`} />

                {/* Date marker for desktop placed to left on wide screens */}
                <div className="hidden md:block absolute -left-40 top-1 text-right w-28">
                  <span className="text-xs font-mono font-bold text-text-secondary dark:text-text-secondary light:text-slate-500 block">
                    {exp.period.split('–')[0].trim()}
                  </span>
                  <span className="text-[11px] font-mono text-text-muted dark:text-text-muted light:text-slate-400 block">
                    {exp.period.split('–')[1]?.trim() || ''}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl hover:border-cyan-glow/40 transition-all duration-300">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/20">
                          {exp.type}
                        </span>
                        <span className="text-xs text-text-muted dark:text-text-muted light:text-slate-500 font-mono md:hidden">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary dark:text-text-primary light:text-slate-900 mt-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-base font-semibold text-gold-champagne dark:text-gold-champagne light:text-amber-800">
                        {exp.organization}
                      </h4>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary dark:text-text-secondary light:text-slate-500 bg-midnight-900/60 dark:bg-midnight-900/60 light:bg-slate-100 px-3 py-1.5 rounded-lg border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-glow" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Core Focus Highlight */}
                  <div className="mb-5 p-3 rounded-xl bg-midnight-900/60 dark:bg-midnight-900/60 light:bg-slate-50 border-l-2 border-cyan-glow text-xs sm:text-sm text-text-primary dark:text-text-primary light:text-slate-800 font-mono">
                    <span className="text-cyan-glow font-bold">Focus: </span>
                    {exp.focus}
                  </div>

                  {/* Responsibility Bullets */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3 text-sm text-text-secondary dark:text-text-secondary light:text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-glow shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-100">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 text-text-secondary dark:text-text-secondary light:text-slate-600 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
