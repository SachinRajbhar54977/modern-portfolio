import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AccentColor } from "@/types";

// ─── CLASSNAME MERGER ─────────────────────────────────────────────────────────

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── COLOR MAPS ───────────────────────────────────────────────────────────────

export const COLOR_RGB: Record<AccentColor, string> = {
  cyan:    "6,182,212",
  violet:  "167,139,250",
  emerald: "52,211,153",
  amber:   "251,191,36",
};

export const COLOR_VAR: Record<AccentColor, string> = {
  cyan:    "var(--cyan)",
  violet:  "var(--violet)",
  emerald: "var(--emerald)",
  amber:   "var(--amber)",
};

export const TAG_CLASS: Record<AccentColor, string> = {
  cyan:    "tag-cyan",
  violet:  "tag-violet",
  emerald: "tag-emerald",
  amber:   "tag-amber",
};

// ─── ACCENT STYLES ────────────────────────────────────────────────────────────

/** Returns inline style object for a card hover border highlight */
export function accentBorder(color: AccentColor, opacity = 0.35) {
  return { borderColor: `rgba(${COLOR_RGB[color]}, ${opacity})` };
}

/** Returns inline style object for a subtle accent background */
export function accentBg(color: AccentColor, opacity = 0.08) {
  return { background: `rgba(${COLOR_RGB[color]}, ${opacity})` };
}

/** Returns a linear-gradient string for text */
export function accentGradient(color: AccentColor) {
  const next: Record<AccentColor, AccentColor> = {
    cyan:    "violet",
    violet:  "cyan",
    emerald: "cyan",
    amber:   "emerald",
  };
  return `linear-gradient(135deg, ${COLOR_VAR[color]}, ${COLOR_VAR[next[color]]})`;
}

// ─── DATE HELPERS ─────────────────────────────────────────────────────────────

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", {
    year:  "numeric",
    month: "short",
    day:   "numeric",
  });
}

// ─── VALIDATION ───────────────────────────────────────────────────────────────

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── SLEEP ────────────────────────────────────────────────────────────────────

export const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

// ─── DEBOUNCE ─────────────────────────────────────────────────────────────────

export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ─── SCROLL HELPERS ───────────────────────────────────────────────────────────

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function getScrollProgress(): number {
  const el = document.documentElement;
  return (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
}

// ─── GITHUB COLOR MAP ─────────────────────────────────────────────────────────

export const LANG_COLOR: Record<string, string> = {
  Python:     "#06b6d4",
  TypeScript: "#34d399",
  JavaScript: "#fbbf24",
  Jupyter:    "#a78bfa",
  Rust:       "#f97316",
  Go:         "#06b6d4",
  Shell:      "#94a3b8",
};
