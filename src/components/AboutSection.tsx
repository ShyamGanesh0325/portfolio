import React from 'react';
import { 
  GraduationCap, 
  Compass
} from 'lucide-react';
import { PERSONAL_INFO, HOW_I_WORK_STEPS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-mono uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight leading-tight">
            Bridging Machine Learning Research with <span className="gradient-text-cyan">Production Software</span>.
          </h2>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Story (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary dark:text-text-secondary light:text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="p-6 rounded-2xl bg-midnight-800/40 dark:bg-midnight-800/40 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
              {PERSONAL_INFO.professionalSummary}
            </p>

            <p>
              Through my <strong className="text-text-primary dark:text-text-primary light:text-slate-900 font-semibold">MSc in Artificial Intelligence & Machine Learning</strong> at the <span className="text-cyan-glow font-medium">University of Birmingham Dubai</span>, I’m continuing to strengthen my technical foundations while building systems that address real-world challenges—from high-throughput industrial edge inspection to resilient LLM failovers for CPU-only environments.
            </p>

            <p>
              Rather than building speculative demos, I focus on what makes AI reliable: dataset hygiene, systematic hyperparameter sweeps, latency constraints, clean API design, and verifiable evaluation metrics.
            </p>

            {/* Quick stats / metrics based only on facts */}
            <div className="grid grid-cols-3 gap-4 pt-4 font-mono">
              <div className="p-4 rounded-xl bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 text-center">
                <span className="block text-2xl font-bold text-cyan-glow">2+</span>
                <span className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500">Industry Internships</span>
              </div>
              <div className="p-4 rounded-xl bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 text-center">
                <span className="block text-2xl font-bold text-gold-champagne">1</span>
                <span className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500">IEEE Publication</span>
              </div>
              <div className="p-4 rounded-xl bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 text-center">
                <span className="block text-2xl font-bold text-cyan-glow">MSc</span>
                <span className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500">Univ. of Birmingham</span>
              </div>
            </div>
          </div>

          {/* Education Breakdown (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-text-muted dark:text-text-muted light:text-slate-500 flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-glow" /> Academic Trajectory
            </h3>

            {PERSONAL_INFO.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-midnight-800/70 dark:bg-midnight-800/70 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-md relative group hover:border-cyan-glow/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 text-gold-champagne dark:text-gold-champagne light:text-amber-800 border border-white/5">
                    {edu.period}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-glow">
                    {edu.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-text-primary dark:text-text-primary light:text-slate-900 group-hover:text-cyan-glow transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-text-muted dark:text-text-muted light:text-slate-500 mt-2 font-mono">
                  📍 {edu.location}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* How I Work Section */}
        <div className="pt-12 border-t border-white/10 dark:border-white/10 light:border-slate-200">
          <div className="text-left mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-champagne dark:text-gold-champagne light:text-amber-800 block mb-1">
              Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900">
              How I Work
            </h3>
            <p className="text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 mt-2">
              A disciplined, engineering-first framework applied from initial framing to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_I_WORK_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-midnight-800/50 dark:bg-midnight-800/50 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-cyan-glow/40 transition-all duration-300 relative group"
              >
                <div className="text-3xl font-mono font-extrabold text-white/10 dark:text-white/10 light:text-slate-300 group-hover:text-cyan-glow/30 transition-colors mb-3">
                  {step.number}
                </div>
                <h4 className="text-base font-bold text-text-primary dark:text-text-primary light:text-slate-900 mb-2 group-hover:text-cyan-glow transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 leading-relaxed">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
