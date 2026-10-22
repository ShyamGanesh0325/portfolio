# Shyamganesh Seetharaman — Premium AI Engineer Portfolio

A bespoke, high-performance portfolio website engineered for **Shyamganesh Seetharaman**, AI Engineer & MSc AI & ML student at the **University of Birmingham Dubai**.

Positioned specifically for high-impact AI, Generative AI, Computer Vision, and MLOps engineering opportunities in **Dubai and across the United Arab Emirates**.

---

## 🌟 Key Highlights & Design System

- **Dubai Midnight Aesthetics**: Curated midnight dark mode (`#080D18`, `#101827`, `#141F32`) accented with electric cyan (`#42E8F5`) and champagne gold (`#D9B574`), complete with an instant light-mode toggle and persistent preferences.
- **Recruiter 10-Second Experience**: Clear credibility markers, instant CV download, genuine executive portrait, and live availability telemetry ("*Open to AI Opportunities in the UAE*").
- **UAE Recruiter Quick-Access Panel**: Direct alignment with Dubai's AI agenda—highlighting Computer Vision & QA, Generative AI & Failover LLMs, and Edge Model Deployment.
- **Interactive Project Architecture Dossiers**: Deep-dive modals illustrating end-to-end pipelines (Input → Preprocessing → Model Inference → Structured JSON → Deployment).
- **100% Fact-Checked & Resume-Accurate**: Features actual codebases, verified internships (*Seewise.ai*, *HCL Technologies*), peer-reviewed research (*IEEE IATMSI 2025*), and national athletic achievements. Zero fabricated metrics or clients.
- **ATS & SEO Optimized**: Complete with Schema.org `Person` JSON-LD, OpenGraph tags, semantic HTML hierarchy, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Dubai Midnight tokens and glassmorphism utilities
- **Icons**: Lucide Icons + Custom SVG Monograms
- **Build Tool**: Vite (Lightning-fast HMR and optimized production bundles)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment Instructions

### Vercel (Recommended)
1. Push this repository to GitHub: `git remote add origin <your-repo> && git push -u origin main`
2. Connect your repository on [Vercel](https://vercel.com).
3. The build settings are auto-detected (`npm run build`, output directory `dist`).
4. Click **Deploy**.

### Netlify
1. Connect the repository on [Netlify](https://www.netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Deploy!

### GitHub Pages
1. In `vite.config.ts`, ensure `base: '/'` or your repo name if using a project page.
2. Build with `npm run build` and deploy the `dist/` folder via GitHub Actions or the `gh-pages` package.

---

## 📁 Repository Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf  # Verified UAE resume
│   │   ├── shyamganesh_portrait.jpg                        # Executive portrait
│   │   └── projects/                                       # Project assets
│   ├── robots.txt                                          # Crawler index instructions
│   └── sitemap.xml                                         # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                                      # Navigation & availability
│   │   ├── Hero.tsx                                        # Refined hero & credibility markers
│   │   ├── UaeRecruiterPanel.tsx                           # UAE recruiter quick-access
│   │   ├── AboutSection.tsx                                # Bio, education, "How I Work"
│   │   ├── ExperienceSection.tsx                           # Seewise & HCL timelines
│   │   ├── ProjectsSection.tsx                             # Interactive project cards
│   │   ├── ProjectModal.tsx                                # Deep architecture dossiers
│   │   ├── ResearchAchievements.tsx                        # IEEE publication & national medals
│   │   ├── SkillsSection.tsx                               # ATS-friendly searchable skills
│   │   ├── ContactSection.tsx                              # High-conversion outreach & form
│   │   ├── Footer.tsx                                      # Monogram, links, copyright
│   │   └── Icons.tsx                                       # Custom LinkedIn & GitHub SVGs
│   ├── data/
│   │   └── portfolioData.ts                                # Strictly-typed verified source of truth
│   ├── App.tsx                                             # Root app & theme state
│   ├── index.css                                           # Design tokens & glass utilities
│   └── main.tsx                                            # Entry point
├── index.html                                              # SEO & Schema.org JSON-LD
├── tailwind.config.js                                      # Color tokens & glow shadows
└── package.json
```

---

## 📬 Contact & Inquiries

- **Email**: [shyamganesh0303@gmail.com](mailto:shyamganesh0303@gmail.com)
- **Phone**: +971 56 205 2477
- **LinkedIn**: [https://www.linkedin.com/in/shyamganeshs](https://www.linkedin.com/in/shyamganeshs)
- **Location**: Dubai, United Arab Emirates
