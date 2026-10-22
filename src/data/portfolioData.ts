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
  professionalTitle: "AI Engineer | Generative AI | Applied AI | Agentic AI | MLOps",
  location: "Dubai, United Arab Emirates",
  email: "shyamganesh0303@gmail.com",
  phone: "+971 56 205 2477",
  phoneFormatted: "+971 56 205 2477",
  linkedIn: "https://www.linkedin.com/in/shyamganeshs",
  github: "https://github.com/shyamganeshs",
  cvPath: "/assets/Shyamganesh_Seetharaman_AI_Engineer_Resume.pdf",
  portraitPath: "/assets/shyamganesh_portrait.jpg",
  availabilityText: "Open to AI Opportunities in the UAE",
  currentObjective: "Seeking AI Engineer, Generative AI Engineer, Machine Learning Engineer, Applied AI Engineer, AI Automation Engineer, or MLOps/LLMOps internship and junior-level opportunities in Dubai and across the UAE.",
  education: [
    {
      degree: "MSc Artificial Intelligence & Machine Learning",
      institution: "University of Birmingham Dubai",
      period: "2026 – Present",
      status: "Enrolled / Active",
      location: "Dubai Academic City, UAE"
    },
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "Kongu Engineering College",
      period: "2021 – 2025",
      status: "Graduated",
      location: "India"
    }
  ],
  credibilityMarkers: [
    {
      organization: "Seewise.ai",
      role: "ML / Data Science Internship",
      period: "2026",
      type: "Computer Vision & YOLO Deployment"
    },
    {
      organization: "HCL Technologies Ltd.",
      role: "Python Development Internship",
      period: "2024–2025",
      type: "Automation Scripts & OOP"
    },
    {
      organization: "IEEE IATMSI 2025",
      role: "Co-authored Research Paper",
      period: "2025",
      type: "Deep Learning Medical Diagnosis"
    },
    {
      organization: "Univ. of Birmingham Dubai",
      role: "MSc Artificial Intelligence & ML",
      period: "2026–Present",
      type: "Advanced Applied AI"
    }
  ]
};

export const UAE_RECRUITER_PANEL = {
  title: "Built for Real-World AI Opportunities in the UAE",
  intro: "Positioned at the heart of Dubai's AI and innovation ecosystem, combining solid engineering foundations with practical model deployment and generative AI workflows.",
  capabilities: [
    {
      title: "AI & Workflow Automation",
      desc: "Building production automation tools, agentic workflows, and API-driven pipelines to streamline enterprise operations."
    },
    {
      title: "Computer Vision & Industrial Inspection",
      desc: "Deploying high-throughput YOLO models, object tracking (ByteTrack), and OpenCV CLAHE pipelines for real-time quality control."
    },
    {
      title: "Generative AI & LLM Applications",
      desc: "Architecting multi-provider LLM failover systems, RAG retrieval workflows with vector embeddings, and domain-specific copilots."
    },
    {
      title: "Model Deployment & API Integration",
      desc: "Containerizing inference with Docker, serving low-latency REST endpoints via FastAPI/Flask, and deploying cost-optimized architectures."
    },
    {
      title: "Research-Driven Machine Learning",
      desc: "Applying rigorous scientific methodology, systematic hyperparameter tuning, and data curation—validated by peer-reviewed IEEE publication."
    }
  ],
  targetRoles: [
    "AI / Machine Learning Intern",
    "Generative AI Intern",
    "Applied AI Engineer",
    "Junior Machine Learning Engineer",
    "AI Automation Engineer",
    "MLOps / LLMOps Intern"
  ],
  locationNotice: "Primary focus: Dubai, UAE · Wider focus: Abu Dhabi & United Arab Emirates."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "seewise",
    role: "ML / Data Science Intern",
    organization: "Seewise.ai",
    location: "Remote / On-site",
    period: "March 2026 – July 2026",
    type: "Internship",
    focus: "Industrial Computer Vision & Real-Time YOLO Inference",
    bullets: [
      "Engineered real-time computer vision pipelines for industrial inspection using YOLO-based detection and tracking.",
      "Designed dataset preparation and preprocessing workflows to support high-accuracy detection on real-world factory feeds.",
      "Improved model accuracy through systematic hyperparameter tuning and rigorous model evaluation across defect categories.",
      "Fine-tuned detection models and supported model deployment and client integration via clean RESTful APIs."
    ],
    tags: ["YOLOv8", "Computer Vision", "OpenCV", "Object Tracking", "FastAPI", "Hyperparameter Tuning", "Industrial QA"]
  },
  {
    id: "hcl",
    role: "Python Development Intern",
    organization: "HCL Technologies Ltd.",
    location: "On-site",
    period: "October 2024 – April 2025",
    type: "Internship",
    focus: "Enterprise Python Automation & Collaborative Engineering",
    bullets: [
      "Built Python automation scripts using object-oriented programming (OOP), file handling, and robust scripting patterns.",
      "Applied Git version control and industry coding standards in an enterprise collaborative software development environment.",
      "Streamlined automated data processing workflows and file parsing routines to enhance developer productivity."
    ],
    tags: ["Python 3", "OOP", "Automation Scripting", "Git", "Enterprise Standards", "Data Parsing"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "medlens-ai",
    title: "MedLens AI",
    subtitle: "Chest X-Ray Analysis Platform | Generative AI + Computer Vision",
    category: "Generative AI + Computer Vision",
    featured: true,
    statusBadge: "Research & Prototype",
    summary: "An enterprise-grade chest radiograph diagnostic assistance system combining an expanded 14-class YOLOv8 opacity detector, OpenCV CLAHE preprocessing, and a resilient multi-provider LLM failover architecture engineered for CPU-constrained environments.",
    architecture: [
      { step: 1, label: "Input Radiograph", sublabel: "DICOM / JPEG" },
      { step: 2, label: "CLAHE Preprocessing", sublabel: "Contrast Normalization" },
      { step: 3, label: "YOLOv8 Detection", sublabel: "14-Class Abnormality" },
      { step: 4, label: "Diagnostic Findings", sublabel: "Structured JSON Output" },
      { step: 5, label: "Multi-Provider LLM", sublabel: "Cost-Optimized Failover" },
      { step: 6, label: "Interpretability Report", sublabel: "Clinical Draft & Heatmaps" }
    ],
    architectureFlow: "Chest X-Ray → Image Preprocessing (OpenCV CLAHE) → YOLO Detection (14 Classes) → Structured Findings → LLM Report Generation",
    verifiedDetails: [
      "Expanded a single-class YOLO detector into a 14-class multi-disease detection platform for chest radiographs.",
      "Designed a cost-optimized, multi-provider LLM failover system for automated report generation on CPU-only deployment.",
      "Implemented OpenCV CLAHE preprocessing to normalize contrast variances across diverse radiology sensors.",
      "Built a structured diagnostic output pipeline focused on clinical interpretability with bounding boxes and attention heatmaps."
    ],
    disclaimer: "RESEARCH & ENGINEERING NOTICE: MedLens AI is a research and engineering prototype developed to demonstrate multimodal AI architectures. It does not provide medical advice or clinically certified diagnoses.",
    technologies: ["YOLOv8", "PyTorch", "FastAPI", "OpenCV CLAHE", "Multi-Provider LLMs", "Next.js", "Docker", "Grad-CAM"],
    image: "/assets/projects/medlens-xray.jpg",
    localPath: "Ai medical imaging"
  },
  {
    id: "bottle-inspection",
    title: "VisionCore Industrial Water Bottle Inspection System",
    subtitle: "Real-Time Industrial Computer Vision & QA Automation",
    category: "Computer Vision & Edge QA",
    featured: true,
    statusBadge: "Production-Grade Pipeline",
    summary: "A high-throughput quality assurance defect detection and tracking pipeline built with YOLOv8 and ByteTrack object tracking. Fully optimized for high FPS inference and integrated with FastAPI WebSocket streams and SQLite telemetry.",
    architecture: [
      { step: 1, label: "Camera / Video Feed", sublabel: "Conveyor Belt Input" },
      { step: 2, label: "Frame Processing", sublabel: "OpenCV Optimization" },
      { step: 3, label: "YOLOv8 Detection", sublabel: "Defect & Cap Classification" },
      { step: 4, label: "ByteTrack Engine", sublabel: "Unique Bottle ID Tracking" },
      { step: 5, label: "WebSocket Stream", sublabel: "Low-Latency Telemetry" },
      { step: 6, label: "Defect Output & DB", sublabel: "SQLite Logging & PDF Report" }
    ],
    architectureFlow: "Camera / Input → Frame Processing → YOLO Detection → Object Tracking (ByteTrack) → Defect Output & Live Telemetry",
    verifiedDetails: [
      "Built a real-time defect detection system utilizing Ultralytics YOLOv8 for industrial packaging quality assurance.",
      "Implemented object tracking with persistent unique ID assignment using ByteTrack to track bottles across frame sequences.",
      "Optimized the inference pipeline for real-time throughput with Apple Silicon MPS hardware acceleration and CPU fallback.",
      "Engineered unified FastAPI WebSocket streaming to power an interactive inspection dashboard with automated PDF audit reports."
    ],
    disclaimer: "ENGINEERING DEMONSTRATION: Developed with real packaging datasets to benchmark high-throughput industrial edge inference. Specific commercial metrics or factory client contracts are not claimed.",
    technologies: ["YOLOv8", "ByteTrack", "OpenCV", "FastAPI WebSockets", "React + Tailwind", "SQLite", "ReportLab", "PyTorch MPS"],
    localPath: "Bottle project"
  },
  {
    id: "disease-prediction",
    title: "Disease Prediction Systems & IEEE Published Research",
    subtitle: "Plant Pathology CNN & Parkinson's Disease Clinical Prediction",
    category: "Deep Learning & Applied ML",
    featured: true,
    statusBadge: "IEEE IATMSI 2025 Published",
    summary: "Two specialized machine learning systems tackling distinct biological challenges: agricultural potato blight classification using deep convolutional neural networks (CNNs), and clinical Parkinson's disease diagnosis prediction using structured medical data.",
    architecture: [
      { step: 1, label: "Dual Data Feeds", sublabel: "Leaf Imagery & Medical Tabular" },
      { step: 2, label: "Data Augmentation", sublabel: "Rotation, Scaling, Normalization" },
      { step: 3, label: "Deep CNN Classifier", sublabel: "Transfer Learning (Plant Village)" },
      { step: 4, label: "Feature Engineering", sublabel: "Clinical Biomarker Extraction" },
      { step: 5, label: "Ensemble Models", sublabel: "Parkinson's Prediction" },
      { step: 6, label: "Evaluation", sublabel: "IEEE IATMSI 2025 Paper" }
    ],
    architectureFlow: "Raw Clinical / Leaf Data → Preprocessing & Augmentation → CNN / ML Modeling → Feature Evaluation → Validated Publication",
    verifiedDetails: [
      "Trained deep CNN classifiers with transfer learning and extensive data augmentation for automated early potato leaf disease detection.",
      "Built machine learning models on structured medical datasets with rigorous feature engineering and cross-validation.",
      "Co-authored peer-reviewed research paper titled 'Enhancing Parkinson's Disease Diagnosis: A Deep Learning Framework' presented at IEEE IATMSI 2025."
    ],
    disclaimer: "ACADEMIC RESEARCH: Co-authored research paper presented at IEEE IATMSI 2025. Academic diagnostic frameworks require rigorous hospital clinical trials prior to clinical deployment.",
    technologies: ["TensorFlow", "CNN Architectures", "Scikit-learn", "Transfer Learning", "Feature Engineering", "Pandas", "IEEE Publication"]
  },
  {
    id: "google-adk-voice-agent",
    title: "ADK Multimodal Voice Agent (Healthcare Assistant)",
    subtitle: "Real-Time Multimodal Voice AI | Google ADK + Gemini Live + MCP",
    category: "Multimodal Voice AI & Agentic Systems",
    featured: true,
    statusBadge: "Active Open Source Project",
    summary: "A real-time, bidirectional voice agent powered by Google ADK (Agent Development Kit), Gemini Live WebSockets, and Anthropic's Model Context Protocol (MCP). Features low-latency bidirectional PCM audio streaming, live visual waveforms, and clinical appointment & patient history tool execution over SQLite.",
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
      "Built full-duplex WebSocket communication pipeline supporting real-time PCM 16-bit audio recording, playback, and visual sound waves.",
      "Constructed healthcare agent instructions with clinical domain boundaries, patient privacy protocols, and automated appointment scheduling."
    ],
    disclaimer: "DEMONSTRATION & ARCHITECTURE NOTICE: Developed as an open-source demonstration of Google ADK and MCP architectures. This demo is not HIPAA-certified and is designed for prototype and technical demonstration purposes.",
    technologies: ["Google ADK", "Gemini Live", "Model Context Protocol (MCP)", "FastAPI", "WebSockets", "Python 3.12", "SQLite", "Multimodal Audio"],
    githubUrl: "https://github.com/ShyamGanesh0325/google-adk-voice-agent",
    localPath: "google-adk-voice-agent"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Artificial Intelligence & Generative AI",
    description: "Architecting intelligent systems, LLM orchestration, and contextual retrieval pipelines.",
    skills: [
      { name: "LLMs & Prompt Engineering", highlight: true, context: "OpenAI API, local vLLM, structured system prompts" },
      { name: "Generative AI & Copilots", highlight: true, context: "Conversational AI and task-oriented copilots" },
      { name: "Multi-Provider LLM Failover", highlight: true, context: "Cost-optimized fallbacks for resilient deployment" },
      { name: "RAG & Vector Retrieval", highlight: true, context: "Context-aware response grounding with vector stores" },
      { name: "LangChain & Orchestration", highlight: false, context: "Chain composition and tool execution" },
      { name: "NLP Pipelines", highlight: false, context: "Tokenization, text preprocessing, entity extraction" },
      { name: "Embeddings", highlight: false, context: "Semantic similarity and dense document retrieval" }
    ]
  },
  {
    category: "Machine Learning & Deep Learning",
    description: "Developing, evaluating, and tuning mathematical learning models on vision and structured data.",
    skills: [
      { name: "PyTorch & TensorFlow", highlight: true, context: "Deep learning model development and inference" },
      { name: "CNN Architectures", highlight: true, context: "Transfer learning, feature extractors, classification" },
      { name: "Scikit-Learn", highlight: true, context: "Supervised and unsupervised tabular learning" },
      { name: "Model Training & Evaluation", highlight: false, context: "Loss functions, precision-recall, cross-validation" },
      { name: "Hyperparameter Tuning", highlight: false, context: "Systematic grid/random search for optimal metrics" },
      { name: "Feature Engineering", highlight: false, context: "Domain-specific feature extraction & scaling" },
      { name: "Data Preprocessing", highlight: false, context: "Augmentation, cleaning, outlier handling" }
    ]
  },
  {
    category: "Computer Vision",
    description: "Real-time visual processing, object detection, and edge inspection pipelines.",
    skills: [
      { name: "YOLO (v8) Detection", highlight: true, context: "Trained on industrial and medical radiograph datasets" },
      { name: "Object Tracking (ByteTrack)", highlight: true, context: "Centroid tracking with persistent unique ID assignment" },
      { name: "OpenCV", highlight: true, context: "Real-time video capture, image transformation, filters" },
      { name: "CLAHE Preprocessing", highlight: true, context: "Contrast Limited Adaptive Histogram Equalization" },
      { name: "Grad-CAM Heatmaps", highlight: false, context: "Visual interpretability and attention maps" },
      { name: "Real-Time Inference", highlight: false, context: "Throughput optimization and frame streaming" }
    ]
  },
  {
    category: "Backend & Deployment",
    description: "Building production-grade APIs, containerizing services, and deploying ML models.",
    skills: [
      { name: "Python 3", highlight: true, context: "Primary language for ML, scripting, and backend" },
      { name: "FastAPI", highlight: true, context: "High-performance async REST APIs and WebSockets" },
      { name: "Flask", highlight: false, context: "Microservices and lightweight endpoints" },
      { name: "Docker & Containerization", highlight: true, context: "Multi-stage builds and Docker Compose stacks" },
      { name: "REST APIs & WebSockets", highlight: false, context: "Full-duplex real-time inference streaming" },
      { name: "AWS Cloud Fundamentals", highlight: false, context: "EC2, S3, cloud deployment concepts" },
      { name: "CI/CD & Git/GitHub", highlight: false, context: "Version control and automated testing workflows" }
    ]
  },
  {
    category: "Programming & Engineering",
    description: "Core computer science fundamentals, clean code, and database management.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", highlight: true, context: "Clean Architecture, Hexagonal patterns" },
      { name: "SQL & Relational Databases", highlight: true, context: "SQLite, PostgreSQL, SQLAlchemy ORM" },
      { name: "Data Structures & Algorithms", highlight: false, context: "Optimal time/space complexity execution" },
      { name: "Pandas & NumPy", highlight: true, context: "Vectorized data manipulation and matrix algebra" },
      { name: "Git Version Control", highlight: false, context: "Collaborative branches, PRs, standards" }
    ]
  }
];

export const RESEARCH_PUBLICATIONS: PublicationItem[] = [
  {
    title: "Enhancing Parkinson's Disease Diagnosis: A Deep Learning Framework",
    conference: "IEEE IATMSI 2025 (International Conference on Advances in Technology, Management & Social Sciences)",
    year: "2025",
    role: "Co-Author",
    description: "Co-authored peer-reviewed research exploring deep learning convolutional feature extraction on medical data for automated early diagnosis of Parkinson's disease. Focused on feature representation, diagnostic sensitivity, and algorithmic reliability.",
    tags: ["IEEE IATMSI 2025", "Deep Learning", "Medical AI", "Parkinson's Disease", "Peer-Reviewed"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "IBM Data Science Professional Certification",
    issuer: "Coursera / IBM",
    badgeType: "professional"
  },
  {
    title: "IBM Data Science with AI Certification",
    issuer: "SLA Institute",
    badgeType: "professional"
  },
  {
    title: "Machine Learning & AI Foundations",
    issuer: "Self-Paced Training & Applied Labs",
    badgeType: "verified"
  }
];

export const LEADERSHIP_ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "National Gold Medalist — Roller Skating",
    organization: "Roller Skating Federation of India (RSFI)",
    type: "sports",
    description: "Secured 1st Place National Gold Medal at RSFI Championship (Visakhapatnam / Vizag). Represents years of elite athletic discipline, focus, and peak competitive execution."
  },
  {
    title: "National Silver Medalist — Roller Skating",
    organization: "School Games Federation of India (SGFI)",
    type: "sports",
    description: "Won National Silver Medal at SGFI Championship (Delhi), competing against top tier national athletes."
  },
  {
    title: "National Bronze Medalist — Roller Skating",
    organization: "School Games Federation of India (SGFI)",
    type: "sports",
    description: "Won National Bronze Medal at SGFI Championship (Mumbai)."
  },
  {
    title: "Treasurer — Computer Society of India (CSI)",
    organization: "CSI Student Chapter",
    type: "leadership",
    description: "Elected student treasurer managing budget allocation, sponsorships, and financial oversight for regional tech symposiums and workshops."
  },
  {
    title: "Executive Member — App Dev Club",
    organization: "Application Development Club",
    type: "leadership",
    description: "Organized technical peer bootcamps, code reviews, and developer hackathons across engineering cohorts."
  },
  {
    title: "House Captain",
    organization: "Academic Student Council",
    type: "leadership",
    description: "Led student body in inter-house competitions, fostering sportsmanship, team spirit, and strategic leadership."
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
