import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Download, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    roleType: 'AI Engineer / Machine Learning Opportunity',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    // Compose formatted mailto URL so recruiter's message is delivered reliably
    const subject = encodeURIComponent(`${formData.roleType} — from ${formData.name} (${formData.organization || 'Inquirer'})`);
    const body = encodeURIComponent(
      `Hello Shyamganesh,\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nTopic: ${formData.roleType}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
    );

    // Open mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

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

        {/* Contact Grid: Direct Channels vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-text-primary dark:text-text-primary light:text-slate-900">
                Direct Channels
              </h3>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-cyan-glow flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> Primary Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-text-muted hover:text-cyan-glow transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=AI%20Engineering%20Opportunity%20—%20Shyamganesh%20Seetharaman`}
                  className="text-sm sm:text-base font-semibold text-text-primary dark:text-text-primary light:text-slate-900 hover:text-cyan-glow transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200">
                <span className="text-xs font-mono text-gold-champagne flex items-center gap-1.5 mb-1">
                  <Phone className="w-3.5 h-3.5" /> UAE Contact Number
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-sm sm:text-base font-semibold text-text-primary dark:text-text-primary light:text-slate-900 hover:text-cyan-glow transition-colors"
                >
                  {PERSONAL_INFO.phoneFormatted}
                </a>
              </div>

              {/* LinkedIn & Location */}
              <div className="space-y-3 pt-2">
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-midnight-900/80 dark:bg-midnight-900/80 light:bg-slate-50 border border-white/5 hover:border-cyan-glow/40 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <LinkedInIcon className="w-5 h-5 text-cyan-glow" />
                    <div>
                      <span className="text-sm font-bold text-text-primary dark:text-text-primary light:text-slate-900 block group-hover:text-cyan-glow transition-colors">
                        LinkedIn Profile
                      </span>
                      <span className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-500 font-mono">
                        linkedin.com/in/shyamganeshs
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-cyan-glow transition-colors" />
                </a>

                <div className="p-4 rounded-2xl bg-midnight-900/50 dark:bg-midnight-900/50 light:bg-slate-50 border border-white/5 flex items-center space-x-3 text-xs text-text-secondary dark:text-text-secondary light:text-slate-600 font-mono">
                  <MapPin className="w-4 h-4 text-gold-champagne shrink-0" />
                  <span>Based in Dubai, UAE · Available for in-person interviews & on-site collaboration</span>
                </div>
              </div>

              {/* Download CV Card */}
              <a
                href={PERSONAL_INFO.cvPath}
                download="Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl font-mono text-xs font-bold bg-midnight-900 hover:bg-midnight-700 dark:bg-midnight-900 dark:hover:bg-midnight-700 light:bg-slate-200 light:hover:bg-slate-300 text-cyan-glow border border-cyan-glow/30 transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD OFFICIAL RESUME (PDF)</span>
              </a>

            </div>

          </div>

          {/* Functional Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-midnight-800/80 dark:bg-midnight-800/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary dark:text-text-primary light:text-slate-900">
                  Send a Structured Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary dark:text-text-secondary light:text-slate-600 mt-1">
                  Submissions open directly in your mail client formatted for instant review.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border border-cyan-glow/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-glow/15 text-cyan-glow mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary dark:text-text-primary light:text-slate-900">
                    Inquiry Form Prepared
                  </h4>
                  <p className="text-xs text-text-secondary dark:text-text-secondary light:text-slate-600 max-w-md mx-auto">
                    Your message was prepared in your default mail application. You can also write directly to <strong className="text-cyan-glow">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-mono text-cyan-glow underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary dark:text-text-secondary light:text-slate-600 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Alex Vance"
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-text-primary dark:text-text-primary light:text-slate-900 focus:outline-none focus:border-cyan-glow transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary dark:text-text-secondary light:text-slate-600 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.ae"
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-text-primary dark:text-text-primary light:text-slate-900 focus:outline-none focus:border-cyan-glow transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary dark:text-text-secondary light:text-slate-600 mb-1.5">
                        Organization / Firm
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company / Institution"
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-text-primary dark:text-text-primary light:text-slate-900 focus:outline-none focus:border-cyan-glow transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary dark:text-text-secondary light:text-slate-600 mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-text-primary dark:text-text-primary light:text-slate-900 focus:outline-none focus:border-cyan-glow transition-colors"
                      >
                        <option value="AI Engineer / Machine Learning Opportunity">AI / ML Engineering Opportunity</option>
                        <option value="Generative AI & LLM Integration">Generative AI & LLM Project</option>
                        <option value="Computer Vision QA Automation">Computer Vision QA Automation</option>
                        <option value="Research & Technical Collaboration">Research & Technical Collaboration</option>
                        <option value="General Technical Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary dark:text-text-secondary light:text-slate-600 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your team, technical scope, or opportunity details..."
                      className="w-full px-4 py-3 rounded-xl text-sm bg-midnight-900/90 dark:bg-midnight-900/90 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-text-primary dark:text-text-primary light:text-slate-900 focus:outline-none focus:border-cyan-glow transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold font-mono text-xs tracking-wider bg-gradient-to-r from-cyan-glow to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-midnight-950 shadow-glow-cyan transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INQUIRY TO SHYAMGANESH</span>
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-text-muted dark:text-text-muted light:text-slate-500 pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-glow" />
                    <span>Direct submission · Zero third-party data tracking</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
