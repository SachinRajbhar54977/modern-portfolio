import type {
  Project,
  SkillCategory,
  Experience,
  Service,
  Testimonial,
  BlogPost,
  GitHubRepo,
  GitHubStats,
  NavLink,
} from "@/types";

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "About",      href: "#about",      id: "about"      },
  { label: "Skills",     href: "#skills",     id: "skills"     },
  { label: "Projects",   href: "#projects",   id: "projects"   },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Services",   href: "#services",   id: "services"   },
  { label: "Blog",       href: "#blog",       id: "blog"       },
  { label: "Contact",    href: "#contact",    id: "contact"    },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming",
    color: "cyan",
    rgb: "6,182,212",
    items: [
      { name: "Python",      percentage: 95, icon: "🐍" },
      { name: "JavaScript",  percentage: 80, icon: "⚡" },
      { name: "TypeScript",  percentage: 72, icon: "🔷" },
      { name: "SQL",         percentage: 85, icon: "🗄️" },
    ],
  },
  {
    category: "AI / ML",
    color: "violet",
    rgb: "167,139,250",
    items: [
      { name: "Machine Learning", percentage: 90, icon: "🤖" },
      { name: "Deep Learning",    percentage: 85, icon: "🧠" },
      { name: "NLP",              percentage: 88, icon: "💬" },
      { name: "LLMs",             percentage: 92, icon: "🔮" },
    ],
  },
  {
    category: "GenAI Stack",
    color: "emerald",
    rgb: "52,211,153",
    items: [
      { name: "LangChain",    percentage: 93, icon: "🔗" },
      { name: "LangGraph",    percentage: 85, icon: "📊" },
      { name: "OpenAI APIs",  percentage: 95, icon: "✨" },
      { name: "HuggingFace",  percentage: 88, icon: "🤗" },
    ],
  },
  {
    category: "MLOps",
    color: "amber",
    rgb: "251,191,36",
    items: [
      { name: "MLflow",      percentage: 82, icon: "📈" },
      { name: "Docker",      percentage: 88, icon: "🐳" },
      { name: "Kubernetes",  percentage: 72, icon: "☸️"  },
      { name: "CI/CD",       percentage: 80, icon: "🔄" },
    ],
  },
  {
    category: "Backend",
    color: "cyan",
    rgb: "6,182,212",
    items: [
      { name: "FastAPI",      percentage: 92, icon: "⚡" },
      { name: "Flask",        percentage: 85, icon: "🌶️" },
      { name: "Node.js",      percentage: 78, icon: "🟢" },
      { name: "REST/GraphQL", percentage: 80, icon: "🌐" },
    ],
  },
  {
    category: "Cloud & Infra",
    color: "violet",
    rgb: "167,139,250",
    items: [
      { name: "AWS",        percentage: 82, icon: "☁️"  },
      { name: "Azure",      percentage: 74, icon: "🔵" },
      { name: "PostgreSQL", percentage: 88, icon: "🐘" },
      { name: "MongoDB",    percentage: 84, icon: "🍃" },
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "GenAI SaaS Platform",
    slug: "genai-saas-platform",
    category: "GenAI",
    color: "cyan",
    icon: "🚀",
    status: "live",
    description:
      "Full-stack multi-tenant SaaS platform with GPT-4o, RAG pipelines, usage analytics, and Stripe billing. Serves 500+ users monthly.",
    longDescription:
      "A production-grade GenAI SaaS platform built from the ground up. Features multi-tenant architecture with Clerk auth, vector search via Pinecone, GPT-4o integration for document chat, usage metering, Stripe billing, and a real-time analytics dashboard.",
    tech: ["LangChain", "OpenAI GPT-4o", "FastAPI", "React", "PostgreSQL", "Redis", "Pinecone", "Stripe"],
    features: ["Multi-tenant auth", "Vector search", "Usage analytics", "Stripe billing", "Rate limiting", "Admin dashboard"],
    metrics: ["500+ monthly users", "~200ms avg latency", "99.9% uptime", "2.8s avg response"],
    githubUrl: "https://github.com/SachinRajbhar54977/ecommerce-ai-saas",
    demoUrl: "https://ecommerce-ai-saas-tma6mgyy5xzcowafmkwlem.streamlit.app/",
  },
  {
    id: 2,
    title: "RAG PDF Chatbot",
    slug: "rag-pdf-chatbot",
    category: "GenAI",
    color: "violet",
    icon: "📄",
    status: "live",
    description:
      "Intelligent document Q&A system using LangChain, Pinecone, and GPT-4. Process PDFs and chat with multi-doc context at scale.",
    tech: ["LangChain", "Pinecone", "GPT-4", "FastAPI", "Next.js", "TypeScript"],
    features: ["Multi-doc Q&A", "Semantic chunking", "Chat memory", "Source citations", "PDF upload"],
    metrics: ["< 1s retrieval", "95% accuracy", "10MB max PDF", "GPT-4 powered"],
    githubUrl: "https://github.com/khan-aarav/rag-pdf-chatbot",
    demoUrl: "https://rag-demo.khan-aarav.dev",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    slug: "ai-resume-analyzer",
    category: "NLP",
    color: "emerald",
    icon: "📋",
    status: "live",
    description:
      "ATS-powered resume screener that scores resumes against job descriptions, extracts skills, and provides improvement suggestions.",
    tech: ["spaCy", "GPT-4", "FastAPI", "React", "PostgreSQL", "Redis"],
    features: ["ATS scoring", "Skill extraction", "Gap analysis", "Suggestions", "JD matching"],
    metrics: ["92% ATS accuracy", "< 3s analysis", "50+ templates", "Batch support"],
    githubUrl: "https://github.com/khan-aarav/ai-resume-analyzer",
    demoUrl: "https://resume.khan-aarav.dev",
  },
  {
    id: 4,
    title: "MLOps Training Pipeline",
    slug: "mlops-training-pipeline",
    category: "MLOps",
    color: "amber",
    icon: "⚙️",
    status: "open-source",
    description:
      "End-to-end ML pipeline with automated training, experiment tracking, model versioning, and one-click deployment to production.",
    tech: ["MLflow", "DVC", "Apache Airflow", "Docker", "Kubernetes", "AWS SageMaker"],
    features: ["Auto-retraining", "Experiment tracking", "Model registry", "A/B testing", "Drift detection"],
    metrics: ["8x faster deployment", "100% reproducible", "Zero-downtime updates", "Open source"],
    githubUrl: "https://github.com/khan-aarav/mlops-pipeline-kit",
    demoUrl: undefined,
  },
  {
    id: 5,
    title: "LLM Research Assistant",
    slug: "llm-research-assistant",
    category: "GenAI",
    color: "cyan",
    icon: "🔬",
    status: "live",
    description:
      "Multi-agent research system using LangGraph that searches the web, summarizes papers, compares findings, and generates reports.",
    tech: ["LangGraph", "Claude API", "Tavily Search", "FastAPI", "Redis", "Next.js"],
    features: ["Multi-agent orchestration", "Web search", "Paper summarization", "Auto-reports", "Citation tracking"],
    metrics: ["10x faster research", "50+ sources/query", "PDF export", "4 agent types"],
    githubUrl: "https://github.com/khan-aarav/llm-research-assistant",
    demoUrl: "https://research.khan-aarav.dev",
  },
  {
    id: 6,
    title: "AI Interview Prep Bot",
    slug: "ai-interview-prep-bot",
    category: "NLP",
    color: "violet",
    icon: "🎯",
    status: "live",
    description:
      "Personalized interview coach that generates questions based on job descriptions, evaluates answers, and provides structured feedback.",
    tech: ["OpenAI", "LangChain", "FastAPI", "React", "MongoDB", "Socket.io"],
    features: ["Job-specific questions", "Real-time evaluation", "Feedback loops", "Progress tracking", "Mock interviews"],
    metrics: ["200+ JD templates", "Real-time feedback", "Streak tracking", "2x interview success"],
    githubUrl: "https://github.com/khan-aarav/ai-interview-bot",
    demoUrl: "https://interview.khan-aarav.dev",
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export const EXPERIENCE_DATA: Experience[] = [
  {
    year: "2024–Present",
    role: "AI Engineer (Freelance)",
    company: "Self-Employed",
    type: "work",
    description:
      "Building RAG pipelines, LLM-powered SaaS products, and GenAI automation tools for clients across healthcare, legal, and e-commerce sectors.",
    tags: ["LangChain", "FastAPI", "OpenAI", "AWS"],
  },
  {
    year: "2023–2024",
    role: "GenAI Developer Intern",
    company: "TechStartup (Remote)",
    type: "work",
    description:
      "Developed a document intelligence system serving 2000+ daily users. Built RAG chatbots and fine-tuned domain-specific LLMs.",
    tags: ["LangChain", "GPT-4", "Pinecone", "React"],
  },
  {
    year: "2023",
    role: "AWS Certified ML Specialist",
    company: "Amazon Web Services",
    type: "cert",
    description:
      "Certified in ML on AWS — SageMaker, model deployment, MLOps, and cloud-native AI services.",
    tags: ["AWS", "SageMaker", "MLOps"],
    link: "https://aws.amazon.com/certification/",
  },
  {
    year: "2022–2023",
    role: "Cybersecurity Analyst",
    company: "SecureEdge (Hyderabad)",
    type: "work",
    description:
      "Managed SOC operations, threat hunting, and SIEM analysis. Transitioned into AI by applying ML to anomaly detection in network logs.",
    tags: ["Security", "Python", "ML", "SIEM"],
  },
  {
    year: "2022",
    role: "DeepLearning.AI Specialization",
    company: "Coursera + Andrew Ng",
    type: "cert",
    description:
      "Completed 5-course deep learning specialization covering CNNs, RNNs, hyperparameter tuning, and ML strategy.",
    tags: ["Deep Learning", "TensorFlow", "Python"],
  },
  {
    year: "2021",
    role: "B.Tech — Computer Science",
    company: "JNTU Hyderabad",
    type: "edu",
    description:
      "Graduated with distinction. Final project: Network Intrusion Detection using ML — the spark that ignited the AI journey.",
    tags: ["CSE", "ML", "Python", "Algorithms"],
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────────────────

export const SERVICES_DATA: Service[] = [
  {
    icon: "🤖",
    title: "AI Chatbot Development",
    color: "cyan",
    description:
      "Custom LLM-powered chatbots with persistent memory, RAG knowledge bases, and tool-use capabilities. Deploy to web, Slack, WhatsApp, or your own UI.",
    price: "From ₹25,000",
    features: ["Multi-turn conversation", "RAG integration", "Custom persona", "Multi-channel deploy"],
  },
  {
    icon: "📚",
    title: "RAG Pipeline Development",
    color: "violet",
    description:
      "Build intelligent document Q&A systems from PDFs, databases, or APIs. Semantic search, chunking strategies, and re-ranking included.",
    price: "From ₹35,000",
    features: ["Multi-format ingestion", "Hybrid search", "Source citations", "Auto-chunking"],
  },
  {
    icon: "⚡",
    title: "FastAPI Backend Development",
    color: "emerald",
    description:
      "Production-grade REST/WebSocket APIs with async support, Pydantic validation, JWT auth, Redis caching, and full test coverage.",
    price: "From ₹20,000",
    features: ["Async endpoints", "JWT/OAuth auth", "Redis caching", "OpenAPI docs"],
  },
  {
    icon: "🔄",
    title: "MLOps Pipeline Setup",
    color: "amber",
    description:
      "CI/CD for ML models — automated training triggers, experiment tracking with MLflow, model versioning with DVC, and blue/green deployment.",
    price: "From ₹40,000",
    features: ["Auto-retraining", "Experiment tracking", "Model registry", "Drift detection"],
  },
  {
    icon: "🔮",
    title: "LLM Integration",
    color: "cyan",
    description:
      "Seamlessly integrate GPT-4, Claude, Gemini, or open-source local LLMs into your existing product. Prompt engineering and guardrails included.",
    price: "From ₹15,000",
    features: ["Multi-model support", "Prompt engineering", "Guardrails/safety", "Cost optimization"],
  },
  {
    icon: "🤖",
    title: "AI Automation Solutions",
    color: "violet",
    description:
      "End-to-end AI automation using LangGraph multi-agent systems — autonomous research, data extraction, content generation, and reporting pipelines.",
    price: "From ₹30,000",
    features: ["Multi-agent orchestration", "Web search integration", "Scheduled runs", "Custom reports"],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CTO",
    company: "FinTech Startup",
    avatar: "RK",
    text: "Delivered a production RAG system in 3 weeks that completely transformed our document workflow. The code quality, documentation, and communication were all exceptional.",
    rating: 5,
    projectType: "RAG Pipeline",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder",
    company: "LegalTech Co.",
    avatar: "PS",
    text: "Our AI contract analyzer went from concept to live product in under a month. Incredible attention to detail and deep expertise in LangChain. Would hire again without hesitation.",
    rating: 5,
    projectType: "GenAI SaaS",
  },
  {
    id: 3,
    name: "Alex Thompson",
    role: "ML Lead",
    company: "E-commerce Platform",
    avatar: "AT",
    text: "Helped us migrate from a monolithic ML setup to a full MLOps pipeline. The DVC + MLflow setup saved our team hours every week and our deployment confidence skyrocketed.",
    rating: 5,
    projectType: "MLOps Pipeline",
  },
  {
    id: 4,
    name: "Meera Nair",
    role: "Product Manager",
    company: "EdTech Company",
    avatar: "MN",
    text: "The AI interview preparation tool exceeded all our expectations. Users absolutely love it — engagement doubled in the first month and retention went through the roof.",
    rating: 5,
    projectType: "AI Chatbot",
  },
];

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 1,
    title: "Building Production RAG Systems in 2025",
    slug: "building-production-rag-2025",
    tag: "GenAI",
    readTime: "8 min",
    date: "May 2025",
    color: "cyan",
    excerpt:
      "Beyond the basics — chunking strategies, re-ranking, hybrid search, and the production pitfalls no tutorial warns you about.",
  },
  {
    id: 2,
    title: "LangGraph vs AutoGen: A Deep Dive",
    slug: "langgraph-vs-autogen",
    tag: "Agents",
    readTime: "12 min",
    date: "Apr 2025",
    color: "violet",
    excerpt:
      "A hands-on comparison of the two leading multi-agent frameworks. When to use each, performance benchmarks, and real-world tradeoffs.",
  },
  {
    id: 3,
    title: "Fine-Tuning LLMs on a Budget with QLoRA",
    slug: "fine-tuning-qlora-budget",
    tag: "MLOps",
    readTime: "15 min",
    date: "Mar 2025",
    color: "emerald",
    excerpt:
      "How to fine-tune a 7B parameter model on a single A100 for under $20. Full walkthrough with code.",
  },
  {
    id: 4,
    title: "From Cybersecurity to AI: My Journey",
    slug: "cybersecurity-to-ai-journey",
    tag: "Career",
    readTime: "6 min",
    date: "Feb 2025",
    color: "amber",
    excerpt:
      "How a SOC analyst ended up building LLM systems. The skills that transferred, the gaps I had to fill, and the turning point.",
  },
  {
    id: 5,
    title: "FastAPI + LangChain: The Perfect Backend Stack",
    slug: "fastapi-langchain-backend",
    tag: "Backend",
    readTime: "10 min",
    date: "Jan 2025",
    color: "cyan",
    excerpt:
      "A production-tested pattern for building async AI backends with streaming, structured outputs, and WebSocket support.",
  },
  {
    id: 6,
    title: "Vector Databases Compared: Pinecone vs Chroma vs Weaviate",
    slug: "vector-databases-compared",
    tag: "DB",
    readTime: "9 min",
    date: "Dec 2024",
    color: "violet",
    excerpt:
      "Latency, cost, ease of use, and filtering capabilities benchmarked across the top vector databases for production RAG.",
  },
];

// ─── GITHUB DATA (fallback / mock for SSR) ───────────────────────────────────

export const GITHUB_REPOS_MOCK: GitHubRepo[] = [
  { name: "genai-saas-platform",    description: "Multi-tenant GenAI SaaS with RAG + Stripe", stars: 142, forks: 28, language: "Python",    languageColor: "#06b6d4", url: "#", updatedAt: "2025-05-10", topics: ["langchain","fastapi","openai"] },
  { name: "rag-pdf-chatbot",         description: "LangChain + Pinecone PDF Q&A system",        stars: 89,  forks: 17, language: "Python",    languageColor: "#06b6d4", url: "#", updatedAt: "2025-04-28", topics: ["rag","pinecone","gpt-4"] },
  { name: "fastapi-llm-template",    description: "Production FastAPI template for LLM apps",   stars: 67,  forks: 14, language: "Python",    languageColor: "#06b6d4", url: "#", updatedAt: "2025-04-15", topics: ["fastapi","llm","template"] },
  { name: "mlops-pipeline-kit",      description: "End-to-end MLOps with MLflow + DVC",         stars: 53,  forks: 11, language: "Python",    languageColor: "#a78bfa", url: "#", updatedAt: "2025-03-20", topics: ["mlops","mlflow","dvc"] },
  { name: "langchain-agents-demos",  description: "LangGraph multi-agent system examples",      stars: 44,  forks: 9,  language: "Jupyter",   languageColor: "#fbbf24", url: "#", updatedAt: "2025-03-08", topics: ["langgraph","agents"] },
  { name: "ai-interview-bot",        description: "AI-powered interview preparation coach",     stars: 38,  forks: 7,  language: "TypeScript",languageColor: "#34d399", url: "#", updatedAt: "2025-02-14", topics: ["openai","nextjs","chatbot"] },
];

export const GITHUB_STATS_MOCK: GitHubStats = {
  totalStars: 433,
  totalForks: 86,
  totalRepos: 32,
  contributions: 1247,
  pullRequests: 18,
  streak: 87,
};

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  github:   "https://github.com/SachinRajbhar54977",
  linkedin: "www.linkedin.com/in/sachin-rajbhar73",
  twitter:  "https://twitter.com/sachin_rajbhar",
  email:    "mailto:sachinbhardwaj54977@gmail.com",
};

// ─── PERSONAL INFO ────────────────────────────────────────────────────────────

export const PERSONAL_INFO = {
  name:       "Sachin Rajbhar",      // ← change here
  initials:   "SR",                  // ← change here
  title:      "AI Engineer & GenAI Developer",
  tagline:    "Building the future of AI — one pipeline at a time",
  location:   "Bangluru, India",
  available:  true,
  email:      "sachinbhardwaj54977@wipro.com",  // ← your real email
  resumeUrl:  "https://drive.google.com/file/d/1YR8pUAcShO58clgvc9qNSbxLe9ktO3WU/view?usp=sharing",    // ← rename your CV file too
  roles:      ["AI Engineer", "GenAI Developer", "MLOps Enthusiast", "LLM Architect", "FastAPI Expert"],
};
