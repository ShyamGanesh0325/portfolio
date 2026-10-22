import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Download, 
  Copy, 
  Check, 
  MapPin, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const emailSubject = encodeURIComponent("AI Engineering Opportunity — Shyamganesh Seetharaman");
  const emailBody = encodeURIComponent(`Hi Shyamganesh,\n\nI reviewed your portfolio and would like to connect regarding an AI / Machine Learning opportunity in the UAE.\n\nOrganization:\nRole:\nDetails:\n\nBest regards,`);
  const directMailto = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-midnight-950/80 dark:bg-midnight-950/80 light:bg-slate-50 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-glow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-mono uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>INTERVIEW & TALENT OUTREACH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight">
            Have an AI Problem Worth Solving?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary dark:text-text-secondary light:text-slate-600">
            I’m interested in opportunities to build useful AI products, contribute to engineering teams and grow through real-world projects.
          </p>
        </div>

        {/* Direct Channels Cards Grid */}
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            {/* 1. Email Card */}
            <div className="p-6 rounded-3xl bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl flex flex-col justify-between hover:border-cyan-glow/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-cyan-glow group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-text-secondary hover:text-cyan-glow transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <span className="text-xs font-mono text-cyan-glow uppercase tracking-wider block mb-1">
                  Primary Email
                </span>
                <a
                  href={directMailto}
                  className="text-base font-bold text-text-primary dark:text-text-primary light:text-slate-900 hover:text-cyan-glow transition-colors break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500 mt-2">
                  Direct recruiter and interview contact.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={directMailto}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-cyan-glow/15 hover:bg-cyan-glow text-cyan-glow hover:text-midnight-950 border border-cyan-glow/30 hover:border-transparent transition-all flex items-center justify-center space-x-2"
                >
                  <span>WRITE EMAIL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 2. Phone / Call Card */}
            <div className="p-6 rounded-3xl bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl flex flex-col justify-between hover:border-gold-champagne/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-gold-champagne group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-gold-champagne/20 text-gold-champagne dark:text-gold-champagne light:text-amber-800">
                    UAE Direct
                  </span>
                </div>

                <span className="text-xs font-mono text-gold-champagne uppercase tracking-wider block mb-1">
                  Phone / WhatsApp
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-text-primary dark:text-text-primary light:text-slate-900 hover:text-gold-champagne transition-colors block"
                >
                  {PERSONAL_INFO.phoneFormatted}
                </a>
                <p className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500 mt-2">
                  Available for phone screening & calls.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-gold-champagne/15 hover:bg-gold-champagne text-gold-champagne hover:text-midnight-950 border border-gold-champagne/30 hover:border-transparent transition-all flex items-center justify-center space-x-2"
                >
                  <span>CALL DIRECTLY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 3. LinkedIn Card */}
            <div className="p-6 rounded-3xl bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl flex flex-col justify-between hover:border-cyan-glow/40 transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-cyan-glow group-hover:scale-110 transition-transform">
                    <LinkedInIcon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-glow/20 text-cyan-glow">
                    Network
                  </span>
                </div>

                <span className="text-xs font-mono text-cyan-glow uppercase tracking-wider block mb-1">
                  Professional Network
                </span>
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-text-primary dark:text-text-primary light:text-slate-900 hover:text-cyan-glow transition-colors block"
                >
                  linkedin.com/in/shyamganeshs
                </a>
                <p className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500 mt-2">
                  Connect on LinkedIn for professional updates.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-cyan-glow/15 hover:bg-cyan-glow text-cyan-glow hover:text-midnight-950 border border-cyan-glow/30 hover:border-transparent transition-all flex items-center justify-center space-x-2"
                >
                  <span>VIEW LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Location & Quick Actions Banner */}
          <div className="p-8 rounded-3xl bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center space-x-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-midnight-800 dark:bg-midnight-800 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-gold-champagne shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-text-primary dark:text-text-primary light:text-slate-900">
                  Based in Dubai, United Arab Emirates
                </h4>
                <p className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-600 mt-0.5">
                  Available for in-person interviews, on-site discussions, and hybrid engineering opportunities across the UAE.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={PERSONAL_INFO.cvPath}
                download="Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-mono text-xs font-bold bg-cyan-glow hover:bg-cyan-300 text-midnight-950 shadow-glow-cyan-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV (PDF)</span>
              </a>

              <a
                href={directMailto}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-mono text-xs font-bold border border-white/15 dark:border-white/15 light:border-slate-300 bg-midnight-800 dark:bg-midnight-800 light:bg-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 text-text-primary dark:text-text-primary light:text-slate-900 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-glow" />
                <span>EMAIL ME DIRECTLY</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
