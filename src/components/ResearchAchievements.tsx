import React from 'react';
import { 
  BookOpen, 
  Award, 
  Medal, 
  ShieldCheck, 
  FileText, 
  Trophy,
  Users
} from 'lucide-react';
import { 
  RESEARCH_PUBLICATIONS, 
  CERTIFICATIONS, 
  LEADERSHIP_ACHIEVEMENTS 
} from '../data/portfolioData';

export const ResearchAchievements: React.FC = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden bg-midnight-950/60 dark:bg-midnight-950/60 light:bg-slate-50 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-champagne/10 border border-gold-champagne/20 text-gold-champagne dark:text-gold-champagne light:text-amber-800 text-xs font-mono uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>SCHOLARLY WORK & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight">
            Research, Certifications & Leadership
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-secondary dark:text-text-secondary light:text-slate-600">
            Evidence of academic rigor, industry-standard continuous learning, and national-level athletic discipline.
          </p>
        </div>

        {/* 1. Primary Spotlight: IEEE Research Publication */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-glow mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4" /> Peer-Reviewed Research Paper
          </h3>

          {RESEARCH_PUBLICATIONS.map((pub, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-midnight-800/90 dark:bg-midnight-800/90 light:bg-white border border-cyan-glow/30 dark:border-cyan-glow/30 light:border-slate-200 shadow-glow-cyan-sm relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-glow text-midnight-950">
                      {pub.conference.split('(')[0].trim()}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 text-gold-champagne border border-white/5">
                      {pub.year}
                    </span>
                    <span className="text-xs font-mono text-text-muted dark:text-text-muted light:text-slate-500">
                      Role: {pub.role}
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight pt-2">
                    {pub.title}
                  </h4>
                  <p className="text-sm font-medium text-gold-champagne dark:text-gold-champagne light:text-amber-800">
                    {pub.conference}
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="p-4 rounded-2xl bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 text-center font-mono">
                    <span className="text-xs text-text-muted dark:text-text-muted light:text-slate-500 block">Status</span>
                    <span className="text-sm font-bold text-cyan-glow">Accepted & Presented</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-text-secondary dark:text-text-secondary light:text-slate-700 leading-relaxed max-w-4xl mb-6">
                {pub.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                {pub.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 text-text-secondary dark:text-text-secondary light:text-slate-600 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Two-Column Grid: Certifications & Athletic/Leadership Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gold-champagne dark:text-gold-champagne light:text-amber-800 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Verified Certifications
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-midnight-800/70 dark:bg-midnight-800/70 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-gold-champagne/40 transition-colors flex items-start space-x-3.5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 border border-white/5 flex items-center justify-center text-gold-champagne shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary dark:text-text-primary light:text-slate-900 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500 mt-1 font-mono">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-midnight-900/60 dark:bg-midnight-900/60 light:bg-slate-100 border border-white/5 text-xs text-text-muted dark:text-text-muted light:text-slate-500 font-mono">
              💡 Continuous upskilling across deep learning architectures, applied generative AI, and enterprise data workflows.
            </div>
          </div>

          {/* Athletic & Leadership Excellence (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-glow mb-4 flex items-center gap-2">
              <Trophy className="w-4 h-4" /> Discipline, Leadership & National Athletics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {LEADERSHIP_ACHIEVEMENTS.map((ach, idx) => {
                const isGold = ach.title.includes('Gold');
                const isSilver = ach.title.includes('Silver');
                const isBronze = ach.title.includes('Bronze');

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isGold
                        ? 'bg-gradient-to-br from-midnight-800 to-midnight-850 dark:from-midnight-800 dark:to-midnight-850 light:bg-amber-50/50 border-gold-champagne/40 shadow-glow-gold'
                        : 'bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-white border-white/10 dark:border-white/10 light:border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-bold ${
                          isGold 
                            ? 'bg-gold-champagne text-midnight-950' 
                            : isSilver 
                            ? 'bg-slate-300 text-slate-900' 
                            : isBronze 
                            ? 'bg-amber-800 text-amber-100' 
                            : 'bg-cyan-glow/20 text-cyan-glow'
                        }`}>
                          {ach.type}
                        </span>
                        {ach.type === 'sports' ? (
                          <Medal className={`w-4 h-4 ${isGold ? 'text-gold-champagne' : 'text-slate-400'}`} />
                        ) : (
                          <Users className="w-4 h-4 text-cyan-glow" />
                        )}
                      </div>

                      <h4 className="text-sm font-bold text-text-primary dark:text-text-primary light:text-slate-900 mb-1 leading-snug">
                        {ach.title}
                      </h4>
                      <p className="text-xs font-medium text-gold-champagne dark:text-gold-champagne light:text-amber-800 font-mono mb-2">
                        {ach.organization}
                      </p>
                    </div>

                    <p className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-600 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
