import type { Metadata, Viewport } from "next";
import { Orbitron, Sora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";

// ─── FONTS ────────────────────────────────────────────────────────────────────
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Sachin Rajbhar | AI Engineer & GenAI Developer",  // ← here
    template: "%s | Sachin Rajbhar",                             // ← here
  },
  description: "AI Engineer & GenAI Developer ...",
  authors: [{ name: "Sachin Rajbhar", url: "https://sachin-rajbhar.dev" }],
  creator: "Sachin Rajbhar",
 
  keywords: [
    "AI Engineer",
    "GenAI Developer",
    "LLM Developer",
    "LangChain",
    "RAG Pipeline",
    "MLOps",
    "FastAPI",
    "Machine Learning",
    "Python Developer",
    "Hyderabad",
    "Freelance AI Engineer",
    "OpenAI API",
    "LangGraph",
  ],
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sachin-rajbhar.dev",
    siteName: "Sachin Rajbhar — AI Engineer",
    title: "Sachin Rajbhar | AI Engineer & GenAI Developer",
    description:
      "Building the future of AI — one pipeline at a time. LLMs, RAG, MLOps, FastAPI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sachin Rajbhar — AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Rajbhar | AI Engineer & GenAI Developer",
    description: "Building intelligent AI systems that scale.",
    images: ["/og-image.png"],
    creator: "@sachin_rajbhar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

// ─── ROOT LAYOUT ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <html
        lang="en"
        suppressHydrationWarning
        className={`${orbitron.variable} ${sora.variable} ${jetbrainsMono.variable}`}
      >
        <body className="bg-background text-slate-200 font-body antialiased overflow-x-hidden">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "#0d1526",
                  color: "#e2e8f0",
                  border: "1px solid rgba(6,182,212,0.2)",
                  fontFamily: "Sora, sans-serif",
                  fontSize: "0.875rem",
                },
                success: { iconTheme: { primary: "#34d399", secondary: "#000" } },
                error: { iconTheme: { primary: "#f87171", secondary: "#000" } },
              }}
            />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    
  );
}
