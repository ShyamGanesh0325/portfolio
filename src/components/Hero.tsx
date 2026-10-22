import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Activity
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-glow/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gold-champagne animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-gold-champagne dark:text-gold-champagne light:text-amber-800">
                DUBAI, UAE · ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary dark:text-text-primary light:text-slate-900 leading-[1.12]">
              I Build <span className="gradient-text-cyan">AI Systems</span> That Solve Real-World Problems.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-text-secondary dark:text-text-secondary light:text-slate-600 max-w-2xl leading-relaxed">
              AI Engineer and MSc AI & ML student at the <strong className="text-text-primary dark:text-text-primary light:text-slate-900 font-semibold">University of Birmingham Dubai</strong>, building practical solutions across Generative AI, computer vision, intelligent automation and model deployment.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-glow to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-midnight-950 shadow-glow-cyan transition-all duration-300 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href={PERSONAL_INFO.cvPath}
                download="Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl font-mono text-xs font-bold border border-white/15 dark:border-white/15 light:border-slate-300 bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 text-text-primary dark:text-text-primary light:text-slate-800 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyan-glow" />
                <span>DOWNLOAD MY CV</span>
              </a>

              {/* Third Action */}
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-4 py-3.5 rounded-xl text-sm font-medium text-text-secondary hover:text-cyan-glow dark:text-text-secondary dark:hover:text-cyan-glow light:text-slate-600 light:hover:text-cyan-dark transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-champagne" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Recruiter Quick Credibility Markers */}
            <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted dark:text-text-muted light:text-slate-500 block mb-3">
                Verified Credentials & Experience
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PERSONAL_INFO.credibilityMarkers.map((cred, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-cyan-glow/30 transition-colors"
                  >
                    <div className="flex items-center space-x-1.5 text-cyan-glow mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                      <span className="font-bold text-xs truncate text-text-primary dark:text-text-primary light:text-slate-900">
                        {cred.organization}
                      </span>
                    </div>
                    <p className="text-[11px] text-text-secondary dark:text-text-secondary light:text-slate-500 truncate">
                      {cred.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Visual & Portrait Container (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-glow/30 via-transparent to-gold-champagne/20 blur-xl opacity-75 animate-pulse-slow pointer-events-none" />

              {/* Main Visual Frame */}
              <div className="relative rounded-3xl bg-midnight-800 dark:bg-midnight-800 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 p-2 overflow-hidden shadow-2xl">
                
                {/* Tech Header Bar on frame */}
                <div className="px-3 py-2 bg-midnight-950/80 dark:bg-midnight-950/80 light:bg-slate-200 rounded-t-2xl flex items-center justify-between font-mono text-[11px] border-b border-white/10 dark:border-white/10 light:border-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-text-secondary dark:text-text-secondary light:text-slate-600 pl-2">system://ai-engineer</span>
                  </div>
                  <div className="flex items-center space-x-1 text-cyan-glow">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>Inference: Active</span>
                  </div>
                </div>

                {/* Portrait container with overlay telemetry */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-midnight-900 group">
                  <img
                    src={PERSONAL_INFO.portraitPath}
                    alt="Shyamganesh Seetharaman - AI Engineer Dubai"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-midnight-950/20 to-transparent opacity-80" />

                  {/* Corner cyber brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-glow" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-glow" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold-champagne" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold-champagne" />

                  {/* Floating Telemetry Badges */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-midnight-900/90 border border-cyan-glow/40 backdrop-blur-md text-[10px] font-mono text-cyan-glow flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-ping" />
                    <span>Dubai, UAE</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-white/95 border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-display text-text-primary dark:text-text-primary light:text-slate-900">
                        Shyamganesh Seetharaman
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-champagne/20 text-gold-champagne dark:text-gold-champagne light:text-amber-800">
                        MSc AI & ML
                      </span>
                    </div>
                    <p className="text-[11px] text-text-secondary dark:text-text-secondary light:text-slate-600 line-clamp-1 font-mono">
                      Univ. of Birmingham Dubai · Computer Vision & GenAI
                    </p>
                  </div>
                </div>

                {/* Sub-bar specs */}
                <div className="mt-2 px-3 py-2 rounded-xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-slate-200/80 flex items-center justify-between text-[11px] font-mono text-text-muted dark:text-text-muted light:text-slate-600">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-cyan-glow" /> YOLOv8 · PyTorch
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-champagne" /> IEEE Published
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
