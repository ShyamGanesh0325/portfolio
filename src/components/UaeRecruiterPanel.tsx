import React from 'react';
import { 
  Building2, 
  Workflow, 
  Eye, 
  Bot, 
  Server, 
  Microscope, 
  ArrowUpRight, 
  Briefcase, 
  Mail, 
  MapPin
} from 'lucide-react';
import { UAE_RECRUITER_PANEL, PERSONAL_INFO } from '../data/portfolioData';

export const UaeRecruiterPanel: React.FC = () => {
  const capabilityIcons = [
    Workflow,
    Eye,
    Bot,
    Server,
    Microscope
  ];

  const emailSubject = encodeURIComponent("AI Engineering Opportunity — Shyamganesh Seetharaman");
  const emailBody = encodeURIComponent(`Hi Shyamganesh,\n\nI reviewed your portfolio and would like to discuss an AI Engineering / Machine Learning opportunity in the UAE.\n\nOrganization:\nRole:\nDetails:\n\nBest regards,`);
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="uae-focus" className="py-20 relative overflow-hidden bg-midnight-950/60 dark:bg-midnight-950/60 light:bg-slate-50 border-y border-white/5 dark:border-white/5 light:border-slate-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-glow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-champagne/10 border border-gold-champagne/25 text-gold-champagne dark:text-gold-champagne light:text-amber-800 text-xs font-mono uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>UAE AI & TECH ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight">
            {UAE_RECRUITER_PANEL.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary dark:text-text-secondary light:text-slate-600">
            {UAE_RECRUITER_PANEL.intro}
          </p>
        </div>

        {/* 5 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {UAE_RECRUITER_PANEL.capabilities.map((cap, idx) => {
            const Icon = capabilityIcons[idx] || Workflow;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-midnight-800/70 dark:bg-midnight-800/70 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-cyan-glow/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-cyan-glow mb-4 group-hover:scale-110 group-hover:border-cyan-glow/50 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-primary dark:text-text-primary light:text-slate-900 group-hover:text-cyan-glow transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Hiring Call to Action Panel */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-midnight-800 via-midnight-850 to-midnight-900 dark:from-midnight-800 dark:to-midnight-900 light:from-slate-100 light:to-white border border-cyan-glow/30 dark:border-cyan-glow/30 light:border-cyan-dark/30 shadow-glow-cyan-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-cyan-glow/15 text-cyan-glow dark:text-cyan-glow light:text-cyan-dark text-xs font-mono font-semibold mb-3">
                <MapPin className="w-3 h-3" />
                <span>Dubai · Immediate UAE Outreach</span>
              </div>
              <h3 className="text-xl font-bold text-text-primary dark:text-text-primary light:text-slate-900">
                Hiring AI Talent in the UAE?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-text-secondary dark:text-text-secondary light:text-slate-600">
                Open to discussions for internship and junior engineering positions with forward-thinking AI teams, enterprises, and tech startups.
              </p>
            </div>
            
            <a
              href={mailtoLink}
              className="mt-6 inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl font-bold text-xs font-mono tracking-wider bg-cyan-glow hover:bg-cyan-300 text-midnight-950 transition-colors shadow-glow-cyan-sm"
            >
              <Mail className="w-4 h-4" />
              <span>CONNECT REGARDING UAE ROLES</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Target Roles & Location Preferences Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-gold-champagne dark:text-gold-champagne light:text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" /> Target Opportunity Scope
              </span>
              <h4 className="text-base font-bold text-text-primary dark:text-text-primary light:text-slate-900">
                Roles of High Value & Immediate Alignment
              </h4>
              <p className="text-xs text-text-muted dark:text-text-muted light:text-slate-500">
                {UAE_RECRUITER_PANEL.locationNotice}
              </p>
            </div>

            {/* Target Role Chips */}
            <div className="flex flex-wrap gap-2 max-w-2xl">
              {UAE_RECRUITER_PANEL.targetRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-midnight-800 dark:bg-midnight-800 light:bg-slate-100 text-text-secondary dark:text-text-secondary light:text-slate-700 border border-white/5 dark:border-white/5 light:border-slate-200 hover:border-cyan-glow/40 hover:text-cyan-glow transition-colors cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
