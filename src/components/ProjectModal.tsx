import React from 'react';
import { 
  X, 
  Layers, 
  ShieldAlert, 
  Cpu, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-midnight-950/80 dark:bg-midnight-950/80 light:bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-midnight-900 dark:bg-midnight-900 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-white/10 dark:border-white/10 light:border-slate-200 flex items-start justify-between bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-50">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-glow/15 text-cyan-glow border border-cyan-glow/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-gold-champagne/15 text-gold-champagne dark:text-gold-champagne light:text-amber-800 border border-gold-champagne/20">
                {project.statusBadge}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900">
              {project.title}
            </h2>
            <p className="text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-midnight-800 dark:bg-midnight-800 light:bg-slate-200 text-text-secondary hover:text-text-primary dark:hover:text-text-primary light:text-slate-600 light:hover:text-slate-900 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-glow mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Project Overview & Objective
            </h3>
            <p className="text-sm sm:text-base text-text-secondary dark:text-text-secondary light:text-slate-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Interactive Pipeline / Architecture Diagram */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-gold-champagne dark:text-gold-champagne light:text-amber-800 mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> End-to-End System Architecture Flow
            </h3>
            
            <div className="p-5 rounded-2xl bg-midnight-950/80 dark:bg-midnight-950/80 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-300">
              {/* Sequential Flow steps */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {project.architecture.map((node) => (
                  <div 
                    key={node.step}
                    className="p-3 rounded-xl bg-midnight-800/90 dark:bg-midnight-800/90 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 text-center relative group hover:border-cyan-glow/50 transition-colors"
                  >
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-glow/10 text-cyan-glow block w-max mx-auto mb-1.5">
                      STEP {node.step}
                    </span>
                    <h4 className="text-xs font-bold text-text-primary dark:text-text-primary light:text-slate-900 leading-tight">
                      {node.label}
                    </h4>
                    <p className="text-[10px] text-text-secondary dark:text-text-secondary light:text-slate-500 mt-1">
                      {node.sublabel}
                    </p>
                  </div>
                ))}
              </div>

              {/* Full flow string */}
              <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-200 text-xs font-mono text-cyan-glow flex items-center gap-2 overflow-x-auto pb-1">
                <span className="text-text-muted shrink-0">Pipeline:</span>
                <span className="whitespace-nowrap">{project.architectureFlow}</span>
              </div>
            </div>
          </div>

          {/* Verified Engineering Implementation Details */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-glow mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Technical Implementations
            </h3>
            <div className="space-y-2.5">
              {project.verifiedDetails.map((detail, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-midnight-800/50 dark:bg-midnight-800/50 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start space-x-3 text-sm text-text-secondary dark:text-text-secondary light:text-slate-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow mt-2 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer / Responsible AI Notice */}
          {project.disclaimer && (
            <div className="p-4 rounded-xl bg-midnight-950 dark:bg-midnight-950 light:bg-amber-50/70 border border-gold-champagne/30 dark:border-gold-champagne/30 light:border-amber-300 text-xs text-text-secondary dark:text-text-secondary light:text-amber-900 flex items-start space-x-3">
              <ShieldAlert className="w-5 h-5 text-gold-champagne dark:text-gold-champagne light:text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {project.disclaimer}
              </p>
            </div>
          )}

          {/* Technologies Stack Chips */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted dark:text-text-muted light:text-slate-500 mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-midnight-800 dark:bg-midnight-800 light:bg-slate-100 text-cyan-glow dark:text-cyan-glow light:text-cyan-dark border border-white/5 dark:border-white/5 light:border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Codebase / Local Path Note */}
          {project.localPath && (
            <div className="p-3 rounded-lg bg-midnight-950/60 dark:bg-midnight-950/60 light:bg-slate-100 text-[11px] font-mono text-text-muted dark:text-text-muted light:text-slate-600 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-glow" /> Project Repository: <code className="text-text-primary dark:text-text-primary light:text-slate-900">{project.localPath}</code>
              </span>
              <span className="text-gold-champagne">Verified Active Workspace</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-slate-50 flex items-center justify-between">
          <span className="text-xs font-mono text-text-muted dark:text-text-muted light:text-slate-500">
            Shyamganesh Seetharaman · Portfolio Project Dossier
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold font-mono bg-midnight-800 hover:bg-midnight-700 dark:bg-midnight-800 dark:hover:bg-midnight-700 light:bg-slate-200 light:hover:bg-slate-300 text-text-primary dark:text-text-primary light:text-slate-800 transition-colors"
          >
            CLOSE DOSSIER
          </button>
        </div>

      </div>
    </div>
  );
};
