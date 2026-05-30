// ─── PROJECT TYPES ────────────────────────────────────────────────────────────

export type ProjectCategory = "GenAI" | "NLP" | "MLOps" | "Backend" | "All";
export type ProjectStatus = "live" | "open-source" | "in-progress";
export type AccentColor = "cyan" | "violet" | "emerald" | "amber";

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: ProjectCategory;
  color: AccentColor;
  description: string;
  longDescription?: string;
  tech: string[];
  features: string[];
  icon: string;
  status: ProjectStatus;
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  metrics?: string[];
}

// ─── SKILL TYPES ──────────────────────────────────────────────────────────────

export interface SkillItem {
  name: string;
  percentage: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  color: AccentColor;
  rgb: string;
  items: SkillItem[];
}

// ─── EXPERIENCE TYPES ─────────────────────────────────────────────────────────

export type ExperienceType = "work" | "cert" | "edu";

export interface Experience {
  year: string;
  role: string;
  company: string;
  type: ExperienceType;
  description: string;
  tags: string[];
  icon?: string;
  link?: string;
}

// ─── SERVICE TYPES ────────────────────────────────────────────────────────────

export interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
  color: AccentColor;
  features?: string[];
}

// ─── TESTIMONIAL TYPES ────────────────────────────────────────────────────────

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  projectType?: string;
}

// ─── BLOG TYPES ───────────────────────────────────────────────────────────────

export type BlogTag = "GenAI" | "Agents" | "MLOps" | "Career" | "Backend" | "DB";

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  tag: BlogTag;
  readTime: string;
  date: string;
  color: AccentColor;
  excerpt?: string;
  coverImage?: string;
}

// ─── CONTACT TYPES ────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
  budget?: string;
}

export interface ContactFormState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}

// ─── API RESPONSE TYPES ───────────────────────────────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// ─── GITHUB TYPES ─────────────────────────────────────────────────────────────

export interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  url: string;
  updatedAt: string;
  topics: string[];
}

export interface GitHubStats {
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  contributions: number;
  pullRequests: number;
  streak: number;
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

// ─── DATABASE MODELS (Prisma-aligned) ────────────────────────────────────────

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
  status: "unread" | "read" | "replied";
  createdAt: Date;
  updatedAt: Date;
}

export interface PageView {
  id: string;
  path: string;
  referrer?: string;
  userAgent?: string;
  createdAt: Date;
}
