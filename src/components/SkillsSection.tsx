import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  CheckCircle2 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    const matchesCategory = activeCategory === 'All' || cat.category === activeCategory;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.context && s.context.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (searchQuery && filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 text-cyan-glow text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary dark:text-text-primary light:text-slate-900 tracking-tight">
            Technical Skills & Engineering Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-text-secondary dark:text-text-secondary light:text-slate-600">
            Categorized by engineering domains with verified hands-on deployment contexts. Structured cleanly for ATS systems and technical recruiters.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === 'All'
                  ? 'bg-cyan-glow text-midnight-950 font-bold shadow-glow-cyan-sm'
                  : 'bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-100 text-text-secondary hover:text-cyan-glow border border-white/5'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.category
                    ? 'bg-cyan-glow text-midnight-950 font-bold shadow-glow-cyan-sm'
                    : 'bg-midnight-800/60 dark:bg-midnight-800/60 light:bg-slate-100 text-text-secondary hover:text-cyan-glow border border-white/5'
                }`}
              >
                {cat.category.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. YOLO, RAG)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 focus:outline-none focus:border-cyan-glow text-text-primary dark:text-text-primary light:text-slate-900"
            />
          </div>

        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((catGroup, idx) => {
            if (!catGroup) return null;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-midnight-800/70 dark:bg-midnight-800/70 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-lg space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-text-primary dark:text-text-primary light:text-slate-900 flex items-center justify-between">
                    <span>{catGroup.category}</span>
                    <span className="text-xs font-mono text-cyan-glow bg-cyan-glow/10 px-2.5 py-0.5 rounded-full">
                      {catGroup.skills.length} competencies
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 mt-1">
                    {catGroup.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-3.5 rounded-xl border transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border-cyan-glow/30 dark:border-cyan-glow/30 light:border-cyan-200 shadow-sm'
                          : 'bg-midnight-900/50 dark:bg-midnight-900/50 light:bg-slate-50 border-white/5 dark:border-white/5 light:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-text-primary dark:text-text-primary light:text-slate-900">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] font-mono text-cyan-glow px-1.5 py-0.2 rounded bg-cyan-glow/10">
                            Hands-on
                          </span>
                        )}
                      </div>
                      {skill.context && (
                        <p className="text-[11px] text-text-muted dark:text-text-muted light:text-slate-500 font-mono line-clamp-1">
                          {skill.context}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* ATS & Ethical Assessment Note */}
        <div className="mt-10 p-5 rounded-2xl bg-midnight-950/70 dark:bg-midnight-950/70 light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-text-muted dark:text-text-muted light:text-slate-600 gap-3">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-glow shrink-0" />
            Verified without artificial percentage ratings: Evaluated through code delivery, repository commits, and IEEE publication.
          </span>
          <span className="text-gold-champagne shrink-0">
            ATS-Optimized Taxonomy
          </span>
        </div>

      </div>
    </section>
  );
};
