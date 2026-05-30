"use client";

import { motion } from "framer-motion";
import { useTypingEffect, useParticles } from "@/hooks";
import { scrollToSection } from "@/lib/utils";
import { PERSONAL_INFO } from "@/data/portfolio";

export function HeroSection() {
  const role       = useTypingEffect(PERSONAL_INFO.roles, 80, 2200);
  const canvasRef  = useParticles(80);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 68 }}
    >
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, width: "100%", height: "100%" }}
      />

      {/* Radial glows */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: "radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", right: "8%",  width: 400, height: 400, background: "radial-gradient(circle,rgba(167,139,250,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ maxWidth: 780 }}>

          {/* Available badge */}
          <motion.div {...fadeUp(0)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 16px", borderRadius: 100, background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.22)", marginBottom: 28 }}>
            <div className="status-dot" />
            <span style={{ fontFamily: "var(--font-m)", fontSize: "0.7rem", color: "var(--emerald)", letterSpacing: "0.1em" }}>AVAILABLE FOR FREELANCE PROJECTS</span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: "var(--font-h)", fontSize: "clamp(2.4rem,6vw,4.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "0.03em", marginBottom: 16 }}>
            <span style={{ color: "var(--text)", display: "block" }}>SACHIN</span>
            <span className="gradient-text" style={{ display: "block" }}>RAJBHAR</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div {...fadeUp(0.2)} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-m)", fontSize: "clamp(1rem,2.5vw,1.3rem)", color: "var(--cyan)", letterSpacing: "0.04em", minHeight: "1.5em" }}>
              {role}
            </span>
            <span style={{ width: 2, height: "1.2em", background: "var(--cyan)", animation: "blink 1s step-end infinite", borderRadius: 2 }} />
          </motion.div>

          {/* Tagline */}
          <motion.p {...fadeUp(0.3)} style={{ fontSize: "clamp(0.9rem,2vw,1.1rem)", color: "var(--text2)", maxWidth: 580, lineHeight: 1.85, marginBottom: 44 }}>
            Building the future of AI — one pipeline at a time. Ex-Cybersecurity analyst turned{" "}
            <strong style={{ color: "var(--cyan)" }}>AI Engineer</strong>, specializing in{" "}
            <em style={{ color: "var(--violet)" }}>LLMs, RAG systems,</em> and{" "}
            <em style={{ color: "var(--emerald)" }}>MLOps pipelines</em> that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 64 }}>
            <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection("contact")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 30px", borderRadius: 12, background: "linear-gradient(135deg,var(--cyan),#0891b2)", color: "#000", fontFamily: "var(--font-b)", fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", letterSpacing: "0.04em", boxShadow: "0 4px 20px rgba(6,182,212,0.3)" }}>
              <span>⚡</span> Hire Me
            </motion.button>

            <motion.button whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection("projects")}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 12, background: "transparent", color: "var(--cyan)", fontFamily: "var(--font-b)", fontWeight: 600, fontSize: "0.92rem", border: "1px solid var(--border2)", cursor: "pointer", letterSpacing: "0.04em" }}>
              <span>🚀</span> View Projects
            </motion.button>

            <motion.a whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
              href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 12, background: "rgba(167,139,250,0.1)", color: "var(--violet)", fontFamily: "var(--font-b)", fontWeight: 600, fontSize: "0.92rem", border: "1px solid rgba(167,139,250,0.3)", cursor: "pointer", letterSpacing: "0.04em", textDecoration: "none" }}>
              <span>📄</span> Download CV
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.5)} style={{ display: "flex", flexWrap: "wrap", gap: 44 }}>
            {[
              { num: "15+", label: "Projects Built",   color: "var(--cyan)" },
              { num: "5+",  label: "AI SaaS Products", color: "var(--violet)" },
              { num: "3+",  label: "Yrs Experience",   color: "var(--emerald)" },
              { num: "10+", label: "Happy Clients",    color: "var(--amber)" },
            ].map(({ num, label, color }) => (
              <div key={label}>
                <div style={{ fontFamily: "var(--font-h)", fontSize: "1.9rem", fontWeight: 700, color, lineHeight: 1.1 }}>{num}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text3)", letterSpacing: "0.07em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom,transparent,var(--cyan))", animation: "pulse 2s infinite" }} />
        <span style={{ fontFamily: "var(--font-m)", fontSize: "0.6rem", color: "var(--text3)", letterSpacing: "0.18em" }}>SCROLL</span>
      </motion.div>
    </section>
  );
}
