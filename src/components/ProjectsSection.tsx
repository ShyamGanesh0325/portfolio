import React, { useState } from 'react';
import { 
  FolderGit2, 
  CheckCircle2, 
  ChevronRight,
  Activity
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Generative AI + Computer Vision', 'Computer Vision & Edge QA', 'Deep Learning & Applied ML', 'Agentic AI & Clean Architecture'];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-glow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gold-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-mono uppercase tracking-widest mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>CORE ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight">
              Featured <span className="gradient-text-cyan">AI Projects</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-text-secondary dark:text-text-secondary light:text-slate-600">
              Rigorous, working AI systems engineered with verified architectures, cost-optimized failovers, and low-latency deployments.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="mt-4 md:mt-0 font-mono text-xs text-text-muted dark:text-text-muted light:text-slate-500 bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-slate-100 px-4 py-2 rounded-xl border border-white/5">
            <span className="text-cyan-glow font-bold">{PROJECTS.length} Verified Systems</span> · 0 Fabricated Metrics
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-glow text-midnight-950 font-bold shadow-glow-cyan-sm'
                  : 'bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-100 text-text-secondary dark:text-text-secondary light:text-slate-600 hover:text-cyan-glow hover:bg-midnight-800 border border-white/5 dark:border-white/5 light:border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Engineering Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-midnight-800/70 dark:bg-midnight-800/70 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 overflow-hidden shadow-xl hover:border-cyan-glow/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Visual Top Bar / Image preview */}
                <div className="relative h-48 bg-midnight-950 dark:bg-midnight-950 light:bg-slate-100 border-b border-white/10 dark:border-white/10 light:border-slate-200 overflow-hidden">
                  {project.image ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/60 to-transparent" />
                    </div>
                  ) : (
                    /* Abstract Technical Diagram Graphic */
                    <div className="w-full h-full flex items-center justify-center relative p-6 bg-grid-pattern">
                      <div className="w-full max-w-sm p-3 rounded-xl bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 font-mono text-[11px] text-cyan-glow space-y-1">
                        <div className="flex items-center justify-between text-text-muted dark:text-text-muted light:text-slate-400">
                          <span>$ pipeline.deploy()</span>
                          <span className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
                        </div>
                        <div className="text-text-primary dark:text-text-primary light:text-slate-800 font-sans font-bold truncate">
                          {project.title}
                        </div>
                        <div className="text-gold-champagne dark:text-gold-champagne light:text-amber-800 text-[10px] truncate">
                          {project.architectureFlow}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status & Category Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-midnight-900/90 text-cyan-glow border border-cyan-glow/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-midnight-900/90 text-gold-champagne border border-gold-champagne/30 backdrop-blur-md">
                      {project.statusBadge}
                    </span>
                  </div>

                  {/* Active Indicator */}
                  <div className="absolute bottom-3 right-4 font-mono text-[11px] text-text-muted dark:text-text-muted light:text-slate-500 bg-midnight-950/80 px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-glow" /> Verified Implementation
                  </div>
                </div>

                {/* Card Main Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary light:text-slate-900 group-hover:text-cyan-glow transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-gold-champagne dark:text-gold-champagne light:text-amber-800 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Architecture Sequence Preview */}
                  <div className="p-3 rounded-xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted dark:text-text-muted light:text-slate-500 block mb-1">
                      Architecture Pipeline
                    </span>
                    <p className="text-xs font-mono text-cyan-glow dark:text-cyan-glow light:text-cyan-dark line-clamp-1">
                      {project.architectureFlow}
                    </p>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5">
                    {project.verifiedDetails.slice(0, 2).map((det, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-xs text-text-secondary dark:text-text-secondary light:text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{det}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Bottom Actions & Tech Tags */}
              <div className="p-6 sm:px-8 sm:pb-8 pt-0 space-y-4">
                
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-100">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 text-text-muted dark:text-text-muted light:text-slate-600 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-text-muted">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-3 px-4 rounded-xl font-mono text-xs font-bold tracking-wider bg-midnight-900 dark:bg-midnight-900 light:bg-slate-100 hover:bg-cyan-glow hover:text-midnight-950 text-cyan-glow dark:text-cyan-glow light:text-cyan-dark border border-cyan-glow/30 hover:border-transparent transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm group/btn"
                >
                  <span>VIEW ARCHITECTURE & DOSSIER</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
