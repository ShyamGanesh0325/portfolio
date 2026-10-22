export interface CredentialMarker {
  organization: string;
  role: string;
  period?: string;
  type: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  tags: string[];
  focus: string;
}

export interface ArchitectureNode {
  step: number;
  label: string;
  sublabel: string;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  statusBadge: string;
  summary: string;
  architecture: ArchitectureNode[];
  architectureFlow: string;
  verifiedDetails: string[];
  disclaimer?: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  localPath?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; highlight?: boolean; context?: string }[];
}

export interface PublicationItem {
  title: string;
  conference: string;
  year: string;
  role: string;
  description: string;
  doi?: string;
  url?: string;
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  badgeType: 'verified' | 'professional';
}

export interface AchievementItem {
  title: string;
  organization: string;
  type: 'sports' | 'leadership' | 'academic';
  description: string;
}

export const PERSONAL_INFO = {
  name: "Shyamganesh Seetharaman",
  initials: "SS",
  professionalTitle: "AI Engineer | Generative AI, Computer Vision & MLOps",
  location: "Dubai, UAE",
  email: "shyamganesh0303@gmail.com",
  phone: "+971 56 205 2477",
  phoneFormatted: "+971 56 205 2477",
  linkedIn: "https://www.linkedin.com/in/shyamganeshs",
  github: "https://github.com/shyamganeshs",
  cvPath: "/assets/Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf",
  portraitPath: "/assets/shyamganesh_portrait.jpg",
  availabilityText: "Open to AI Opportunities in the UAE",
  currentObjective: "Seeking an AI / Generative AI / Agentic AI / MLOps internship.",
  professionalSummary: "AI Engineer and MSc AI & ML student (University of Birmingham Dubai) who builds Generative AI, LLM and Computer Vision systems end to end: data preparation, model training, fine-tuning, MLOps deployment and client integration. Built real-time YOLO inspection systems and a 14-class chest X-ray platform with automated LLM report generation. IEEE co-author. Seeking an AI / Generative AI / Agentic AI / MLOps internship.",
  education: [
    {
      degree: "MSc Artificial Intelligence & Machine Learning",
      institution: "University of Birmingham Dubai",
      period: "2026 – Present",
      status: "Active / Enrolled",
      location: "Dubai, UAE"
    },
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "Kongu Engineering College",
      period: "2025",
      status: "Graduated",
      location: "India"
    }
  ],
  credibilityMarkers: [
    {
      organization: "Seewise.ai",
      role: "ML / Data Science Intern",
      period: "Mar 2026 – Jul 2026",
      type: "Computer Vision & YOLO Deployment"
    },
    {
      organization: "HCL Technologies Ltd.",
      role: "Python Development Intern",
      period: "Oct 2024 – Apr 2025",
      type: "Automation Scripts & OOP"
    },
    {
      organization: "IEEE IATMSI 2025",
      role: "Co-authored Research Paper",
      period: "2025",
      type: "Parkinson's Disease Diagnosis, Deep Learning"
    },
    {
      organization: "Univ. of Birmingham Dubai",
      role: "MSc Artificial Intelligence & ML",
      period: "2026 – Present",
      type: "Advanced AI Systems"
    }
  ]
};

export const UAE_RECRUITER_PANEL = {
  title: "Built for Real-World AI Opportunities in the UAE",
  intro: "AI Engineer and MSc AI & ML student (University of Birmingham Dubai) who builds Generative AI, LLM and Computer Vision systems end to end: data preparation, model training, fine-tuning, MLOps deployment and client integration.",
  capabilities: [
    {
      title: "Generative AI & LLMs",
      desc: "LLMs, Generative AI, LangChain, RAG, Vector Databases, Prompt Engineering, NLP, LLM Orchestration, Multi-Provider LLM Failover, Agentic AI."
    },
    {
      title: "Computer Vision & Deep Learning",
      desc: "Computer Vision, YOLO (Object Detection & Tracking), OpenCV, CLAHE, CNN, Transfer Learning, TensorFlow, Deep Learning."
    },
    {
      title: "Machine Learning Core",
      desc: "Scikit-learn, Model Training & Evaluation, Hyperparameter Tuning, Feature Engineering, Data Preprocessing."
    },
    {
      title: "MLOps & Deployment",
      desc: "Docker, Kubernetes (Basic), CI/CD, FastAPI, Flask, REST APIs, Model Deployment & Monitoring, AWS."
    },
    {
      title: "Programming & Tools",
      desc: "Python, SQL, OOP, Data Structures & Algorithms, Git, GitHub."
    }
  ],
  targetRoles: [
    "AI Engineer Intern",
    "Generative AI Intern",
    "Agentic AI Intern",
    "MLOps Intern",
    "Computer Vision Engineer",
    "Applied Machine Learning Engineer"
  ],
  locationNotice: "Location: Dubai, UAE · Open to AI / Generative AI / Agentic AI / MLOps opportunities across the UAE."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "seewise",
    role: "ML / Data Science Intern",
    organization: "Seewise.ai",
    location: "Remote / On-site",
    period: "Mar 2026 – Jul 2026",
    type: "Internship",
    focus: "Real-time Computer Vision & Industrial YOLO Pipelines",
    bullets: [
      "Built real-time computer vision pipelines for industrial inspection using YOLO detection and tracking, optimized for real-time performance.",
      "Prepared and preprocessed image datasets; improved model accuracy through systematic hyperparameter tuning.",
      "Fine-tuned detection models and supported end-to-end deployment and client integration."
    ],
    tags: ["YOLO", "Computer Vision", "Object Detection & Tracking", "OpenCV", "Hyperparameter Tuning", "Client Integration"]
  },
  {
    id: "hcl",
    role: "Python Development Intern",
    organization: "HCL Technologies Ltd.",
    location: "On-site",
    period: "Oct 2024 – Apr 2025",
    type: "Internship",
    focus: "Python Automation Scripts & Collaborative Engineering",
    bullets: [
      "Developed Python automation scripts (OOP, file handling) for internal training modules.",
      "Followed Git workflows and industry coding standards in a collaborative software development environment."
    ],
    tags: ["Python", "OOP", "File Handling", "Automation Scripts", "Git Workflows", "Coding Standards"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "medlens-ai",
    title: "MedLens AI: Chest X-Ray Analysis Platform",
    subtitle: "YOLO, OpenCV (CLAHE), LLM APIs, FastAPI",
    category: "Generative AI + Computer Vision",
    featured: true,
    statusBadge: "Verified Project",
    summary: "A multi-disease chest X-ray analysis platform combining scaled 14-class YOLO detection, OpenCV CLAHE contrast enhancement, and an uninterrupted multi-provider LLM failover architecture designed for CPU-only deployment.",
    architecture: [
      { step: 1, label: "Chest X-Ray Input", sublabel: "DICOM / JPEG" },
      { step: 2, label: "CLAHE Preprocessing", sublabel: "OpenCV Contrast Fix" },
      { step: 3, label: "YOLO 14-Class", sublabel: "Multi-Disease Detector" },
      { step: 4, label: "Structured Findings", sublabel: "Clinical Interpretability" },
      { step: 5, label: "Multi-Provider LLM", sublabel: "Cost-Optimized Failover" },
      { step: 6, label: "Automated Report", sublabel: "FastAPI Generation" }
    ],
    architectureFlow: "Chest X-Ray → CLAHE Preprocessing → 14-Class YOLO Detection → Structured Findings → Multi-Provider LLM Failover → Automated Report",
    verifiedDetails: [
      "Scaled a single-class YOLO detector into a 14-class multi-disease detection platform.",
      "Designed a cost-optimized multi-provider LLM failover system for automated report generation on CPU-only deployment, keeping report generation uninterrupted if a provider fails.",
      "Built CLAHE preprocessing and a structured diagnostic output pipeline for clinical interpretability."
    ],
    disclaimer: "RESEARCH & ENGINEERING NOTICE: MedLens AI is a research and engineering platform demonstrating multimodal AI architectures and does not provide certified medical diagnoses.",
    technologies: ["YOLO", "OpenCV (CLAHE)", "LLM APIs", "FastAPI", "Multi-Provider Failover", "PyTorch", "Docker"],
    image: "/assets/projects/medlens-xray.jpg",
    localPath: "Ai medical imaging"
  },
  {
    id: "bottle-inspection",
    title: "AI-Based Water Bottle Inspection System",
    subtitle: "YOLO, OpenCV, Object Tracking",
    category: "Computer Vision & Edge QA",
    featured: true,
    statusBadge: "Verified Project",
    summary: "Real-time defect detection and object tracking quality assurance system built with YOLO and OpenCV, engineered for production-grade throughput.",
    architecture: [
      { step: 1, label: "Camera / Feed", sublabel: "Conveyor Inspection" },
      { step: 2, label: "Frame Processing", sublabel: "OpenCV Optimization" },
      { step: 3, label: "YOLO Detection", sublabel: "Defect Classification" },
      { step: 4, label: "Object Tracking", sublabel: "Unique ID Assignment" },
      { step: 5, label: "Inference Engine", sublabel: "Real-Time Throughput" },
      { step: 6, label: "Defect Output", sublabel: "Production Telemetry" }
    ],
    architectureFlow: "Camera / Input → OpenCV Processing → YOLO Detection → Object Tracking (Unique IDs) → High-Throughput Defect Output",
    verifiedDetails: [
      "Built a real-time defect detection system with object tracking and unique ID assignment.",
      "Optimized the inference pipeline for production-grade real-time throughput."
    ],
    disclaimer: "ENGINEERING NOTICE: Industrial quality assurance pipeline benchmarked for high-throughput edge inspection.",
    technologies: ["YOLO", "OpenCV", "Object Tracking", "FastAPI", "Python", "Real-Time Inference"],
    localPath: "Bottle project"
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction Systems (Potato & Parkinson's)",
    subtitle: "TensorFlow, CNN, Scikit-learn",
    category: "Deep Learning & Applied ML",
    featured: true,
    statusBadge: "IEEE IATMSI 2025 Co-Authored",
    summary: "Deep learning convolutional models for agricultural potato disease detection and clinical machine learning models for Parkinson's disease diagnosis prediction.",
    architecture: [
      { step: 1, label: "Input Datasets", sublabel: "Leaf Images & Clinical Data" },
      { step: 2, label: "Data Augmentation", sublabel: "Image Transformations" },
      { step: 3, label: "CNN Classifiers", sublabel: "Transfer Learning" },
      { step: 4, label: "Feature Engineering", sublabel: "Clinical Biomarkers" },
      { step: 5, label: "ML Classification", sublabel: "Scikit-Learn Modeling" },
      { step: 6, label: "IEEE Publication", sublabel: "IATMSI 2025 Paper" }
    ],
    architectureFlow: "Leaf / Medical Data → Preprocessing & Augmentation → CNN / ML Modeling → Feature Engineering → Validated Publication",
    verifiedDetails: [
      "Trained CNN classifiers with transfer learning and augmentation for potato disease detection.",
      "Built ML models on structured medical data with feature engineering; co-authored IEEE IATMSI 2025 paper, “Enhancing Parkinson's Disease Diagnosis: A Deep Learning Framework.”"
    ],
    disclaimer: "ACADEMIC RESEARCH: Co-authored research paper presented at IEEE IATMSI 2025. Academic diagnostic frameworks require clinical validation before hospital deployment.",
    technologies: ["TensorFlow", "CNN", "Scikit-learn", "Transfer Learning", "Feature Engineering", "Data Augmentation", "IEEE Publication"]
  },
  {
    id: "google-adk-voice-agent",
    title: "ADK Multimodal Voice Agent (Healthcare Assistant)",
    subtitle: "Google ADK, Gemini Live, MCP, FastAPI",
    category: "Multimodal Voice AI & Agentic Systems",
    featured: true,
    statusBadge: "Active Open Source Project",
    summary: "A real-time, bidirectional multimodal voice agent powered by Google ADK (Agent Development Kit), Gemini Live WebSockets, and Anthropic's Model Context Protocol (MCP) for low-latency voice and clinical appointment/patient record tool execution over SQLite.",
    architecture: [
      { step: 1, label: "PCM Audio Input", sublabel: "16-bit Mic Capture" },
      { step: 2, label: "FastAPI WebSockets", sublabel: "Bidirectional Stream" },
      { step: 3, label: "Google ADK Hub", sublabel: "Agent Session Runner" },
      { step: 4, label: "Gemini Live API", sublabel: "Multimodal Voice Engine" },
      { step: 5, label: "MCP Server Tools", sublabel: "Model Context Protocol" },
      { step: 6, label: "Clinical SQLite DB", sublabel: "Records & Voice Stream" }
    ],
    architectureFlow: "Client Audio (PCM 16-bit) → FastAPI WebSockets → Google ADK Orchestrator → Gemini Live Engine → MCP Tool Dispatcher → Clinical SQLite Database",
    verifiedDetails: [
      "Integrated Google ADK (Agent Development Kit v2.2.0+) with Gemini Live Preview for bidirectional, low-latency audio interaction.",
      "Engineered a Model Context Protocol (MCP) server architecture exposing clinical database operations (appointments, patient records, medical history) as modular AI tools.",
      "Built full-duplex WebSocket communication pipeline supporting real-time PCM 16-bit audio recording, playback, and visual sound waves."
    ],
    disclaimer: "DEMONSTRATION NOTICE: Open-source demonstration of Google ADK and MCP architectures for multimodal agentic systems.",
    technologies: ["Google ADK", "Gemini Live", "Model Context Protocol (MCP)", "FastAPI", "WebSockets", "Python 3.12", "SQLite", "Multimodal Audio"],
    githubUrl: "https://github.com/ShyamGanesh0325/google-adk-voice-agent",
    localPath: "google-adk-voice-agent"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Generative AI & LLMs",
    description: "Architecting large language models, agentic workflows, and contextual retrieval pipelines.",
    skills: [
      { name: "Large Language Models (LLMs)", highlight: true, context: "OpenAI API, local vLLM, Gemini Live" },
      { name: "Generative AI", highlight: true, context: "Multimodal generation and conversational systems" },
      { name: "LangChain", highlight: false, context: "Chain composition and orchestration" },
      { name: "Retrieval-Augmented Generation (RAG)", highlight: true, context: "Context-aware response grounding" },
      { name: "Vector Databases", highlight: false, context: "Embeddings, semantic similarity retrieval" },
      { name: "Prompt Engineering", highlight: true, context: "Structured system prompts & safety controls" },
      { name: "NLP", highlight: false, context: "Natural language processing pipelines" },
      { name: "LLM Orchestration", highlight: false, context: "Multi-agent workflows & task automation" },
      { name: "Multi-Provider LLM Failover", highlight: true, context: "Cost-optimized fallbacks for CPU deployment" },
      { name: "Agentic AI", highlight: true, context: "Google ADK & MCP tool dispatch" }
    ]
  },
  {
    category: "Computer Vision & Deep Learning",
    description: "Real-time visual processing, object detection & tracking, and neural networks.",
    skills: [
      { name: "Computer Vision", highlight: true, context: "Image processing and defect detection" },
      { name: "YOLO (Object Detection & Tracking)", highlight: true, context: "Industrial defect inspection & 14-class detection" },
      { name: "OpenCV", highlight: true, context: "Real-time video capture and frame manipulation" },
      { name: "CLAHE", highlight: true, context: "Contrast Limited Adaptive Histogram Equalization" },
      { name: "CNN", highlight: true, context: "Convolutional neural network architectures" },
      { name: "Transfer Learning", highlight: true, context: "Pre-trained vision models fine-tuning" },
      { name: "TensorFlow", highlight: true, context: "Model training and deep learning workflows" },
      { name: "Deep Learning", highlight: true, context: "Multi-layer neural network training" }
    ]
  },
  {
    category: "Machine Learning",
    description: "Statistical learning algorithms, feature engineering, and hyperparameter tuning.",
    skills: [
      { name: "Scikit-learn", highlight: true, context: "Supervised and unsupervised learning models" },
      { name: "Model Training & Evaluation", highlight: true, context: "Cross-validation, loss curves, precision-recall" },
      { name: "Hyperparameter Tuning", highlight: true, context: "Systematic model accuracy optimization" },
      { name: "Feature Engineering", highlight: true, context: "Biomarker extraction and scaling" },
      { name: "Data Preprocessing", highlight: true, context: "Cleaning, normalization, augmentation" }
    ]
  },
  {
    category: "MLOps & Deployment",
    description: "Containerization, API endpoints, CI/CD, and model deployment.",
    skills: [
      { name: "Docker", highlight: true, context: "Containerization & Docker Compose" },
      { name: "Kubernetes (Basic)", highlight: false, context: "Container orchestration fundamentals" },
      { name: "CI/CD", highlight: false, context: "Automated testing and continuous delivery" },
      { name: "FastAPI", highlight: true, context: "High-performance async APIs & WebSockets" },
      { name: "Flask", highlight: false, context: "Microservices and lightweight REST endpoints" },
      { name: "REST APIs", highlight: true, context: "Client integration and inference endpoints" },
      { name: "Model Deployment & Monitoring", highlight: true, context: "Production-grade throughput and telemetry" },
      { name: "AWS", highlight: false, context: "Cloud infrastructure fundamentals" }
    ]
  },
  {
    category: "Programming & Tools",
    description: "Core programming languages, software engineering standards, and version control.",
    skills: [
      { name: "Python", highlight: true, context: "Primary language for AI/ML and automation" },
      { name: "SQL", highlight: true, context: "Relational database querying and management" },
      { name: "OOP", highlight: true, context: "Object-oriented programming architecture" },
      { name: "Data Structures & Algorithms", highlight: false, context: "Optimal algorithmic problem solving" },
      { name: "Git", highlight: true, context: "Version control workflows" },
      { name: "GitHub", highlight: true, context: "Collaborative code repositories and PRs" }
    ]
  }
];

export const RESEARCH_PUBLICATIONS: PublicationItem[] = [
  {
    title: "Enhancing Parkinson's Disease Diagnosis: A Deep Learning Framework",
    conference: "IEEE IATMSI 2025 (Parkinson's Disease Diagnosis, Deep Learning)",
    year: "2025",
    role: "Co-Author",
    description: "Co-authored peer-reviewed research paper presented at IEEE IATMSI 2025 investigating deep learning convolutional feature extraction on structured medical data for early Parkinson's disease diagnosis.",
    tags: ["IEEE IATMSI 2025", "Deep Learning", "Parkinson's Disease Diagnosis", "Co-Author"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "IBM Data Science Certification",
    issuer: "Coursera",
    badgeType: "professional"
  },
  {
    title: "IBM Data Science with AI Certification",
    issuer: "SLA Institute",
    badgeType: "professional"
  }
];

export const LEADERSHIP_ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "National Gold Medalist — Roller Skating",
    organization: "Roller Skating Federation of India (RSFI)",
    type: "sports",
    description: "Secured National Gold Medal at RSFI Roller Skating championship."
  },
  {
    title: "National Silver & Bronze Medalist",
    organization: "School Games Federation of India (SGFI)",
    type: "sports",
    description: "Won National Silver and Bronze Medals at SGFI championships."
  },
  {
    title: "Treasurer — CSI",
    organization: "Computer Society of India (CSI)",
    type: "leadership",
    description: "Elected student treasurer managing budget allocation and financial oversight for regional tech symposiums and workshops."
  },
  {
    title: "Executive Member — App Dev Club",
    organization: "Application Development Club",
    type: "leadership",
    description: "Organized technical peer bootcamps, code reviews, and developer hackathons."
  },
  {
    title: "House Captain",
    organization: "Academic Student Council",
    type: "leadership",
    description: "Led student body in inter-house competitions, fostering sportsmanship and team leadership."
  }
];

export const HOW_I_WORK_STEPS = [
  {
    number: "01",
    title: "Research the Problem",
    summary: "Deconstruct business requirements and domain constraints before writing code. Review current academic benchmarks and empirical patterns."
  },
  {
    number: "02",
    title: "Build & Evaluate",
    summary: "Design prototypes with rigorous evaluation suites (precision, recall, latency, cost). Benchmark baselines against fine-tuned alternatives."
  },
  {
    number: "03",
    title: "Optimize for Practical Constraints",
    summary: "Adapt models for real-world constraints: CPU/GPU availability, multi-provider LLM failover, CLAHE contrast fixes, and memory limits."
  },
  {
    number: "04",
    title: "Integrate & Deploy",
    summary: "Wrap models in high-performance async APIs (FastAPI), containerize with Docker, and integrate directly with client frontend interfaces."
  }
];
