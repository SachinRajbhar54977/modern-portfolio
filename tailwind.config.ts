import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Sora", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        background: {
          DEFAULT: "#030712",
          secondary: "#0d1526",
          tertiary: "#0a1020",
        },
        brand: {
          cyan: "#06b6d4",
          "cyan-light": "#22d3ee",
          violet: "#a78bfa",
          emerald: "#34d399",
          amber: "#fbbf24",
        },
        surface: "rgba(13,21,38,0.85)",
        "border-subtle": "rgba(6,182,212,0.15)",
        "border-strong": "rgba(6,182,212,0.30)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":
          "linear-gradient(135deg, #06b6d4 0%, #a78bfa 60%, #34d399 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(167,139,250,0.05) 100%)",
        "grid-pattern":
          "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "fade-in": "fadeIn 0.5s ease both",
        float: "float 4s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        blink: "blink 1s step-end infinite",
        "spin-slow": "spin 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "progress-fill": "progressFill 1.2s ease forwards",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 49%, 100%": { opacity: "1" },
          "50%, 99%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        progressFill: {
          from: { width: "0%" },
          to: { width: "var(--progress-width, 80%)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6,182,212,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(6,182,212,0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
