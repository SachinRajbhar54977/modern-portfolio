"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInViewOnce } from "@/hooks";
import { PROJECTS_DATA } from "@/data/portfolio";
import { COLOR_RGB } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

const CATEGORIES: ProjectCategory[] = ["All", "GenAI", "NLP", "MLOps"];

const STATUS_LABEL: Record<string, string> = {
  live: "🟢 Live",
  "open-source": "⭐ Open Source",
  "in-progress": "🔧 In Progress",
};

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const { ref, inView } = useInViewOnce(0.08);

  const filtered = filter === "All" ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: "100px 24px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg,var(--bg) 0%,var(--bg3) 50%,var(--bg) 100%)" }}>
      <div className="grid-bg" style={{ opacity: 0.4 }} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-title">Projects Showcase</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem", marginBottom: 24 }}>Real-world AI systems built for production</p>

          {/* Filter buttons */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                style={{ padding: "8px 22px", borderRadius: 100, fontFamily: "var(--font-b)", fontSize: "0.82rem", fontWeight: 500, cursor: "pointer", transition: "all 0.25s", border: "1px solid", borderColor: filter === cat ? "var(--cyan)" : "rgba(6,182,212,0.15)", background: filter === cat ? "rgba(6,182,212,0.12)" : "transparent", color: filter === cat ? "var(--cyan)" : "var(--text3)" }}>
                {cat}
                {filter === cat && <span style={{ marginLeft: 6, fontFamily: "var(--font-m)", fontSize: "0.65rem" }}>({filtered.length})</span>}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const rgb = COLOR_RGB[project.color];
              return (
                <motion.div key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="glass"
                  style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.borderColor = `rgba(${rgb},0.4)`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.15)"; }}
                >
                  {/* Banner */}
                  <div style={{ height: 150, background: `linear-gradient(135deg,rgba(${rgb},0.16) 0%,rgba(167,139,250,0.08) 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
                    <span style={{ fontSize: "3rem", filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))", zIndex: 1 }}>{project.icon}</span>
                    <div style={{ position: "absolute", top: 12, right: 12 }}>
                      <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: "0.65rem", fontFamily: "var(--font-m)", background: `rgba(${rgb},0.15)`, border: `1px solid rgba(${rgb},0.25)`, color: `rgba(${rgb},1)` }}>
                        {STATUS_LABEL[project.status]}
                      </span>
                    </div>
                    <div style={{ position: "absolute", top: 12, left: 12 }}>
                      <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: "0.63rem", fontFamily: "var(--font-m)", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text3)" }}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontFamily: "var(--font-b)", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 10, lineHeight: 1.3 }}>{project.title}</h3>
                    <p style={{ color: "var(--text3)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: 14 }}>{project.description}</p>

                    {/* Features */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, marginBottom: 14 }}>
                      {project.features.slice(0, 4).map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.73rem", color: "var(--text3)" }}>
                          <span style={{ color: `rgba(${rgb},1)`, fontSize: "0.55rem" }}>◆</span>{f}
                        </div>
                      ))}
                    </div>

                    {/* Tech badges */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
                      {project.tech.slice(0, 5).map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                        {project.metrics.slice(0, 2).map(m => (
                          <span key={m} style={{ padding: "3px 10px", borderRadius: 6, fontSize: "0.68rem", fontFamily: "var(--font-m)", background: `rgba(${rgb},0.07)`, border: `1px solid rgba(${rgb},0.15)`, color: `rgba(${rgb},1)` }}>{m}</span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    <div style={{ display: "flex", gap: 8 }}>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer"
                        style={{ flex: 1, padding: "8px 0", textAlign: "center", borderRadius: 9, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--text2)", fontSize: "0.78rem", textDecoration: "none", transition: "all 0.2s", fontFamily: "var(--font-b)", fontWeight: 500 }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"}
                      >🐙 GitHub</a>
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer"
                          style={{ flex: 1, padding: "8px 0", textAlign: "center", borderRadius: 9, background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.22)`, color: `rgba(${rgb},1)`, fontSize: "0.78rem", textDecoration: "none", transition: "all 0.2s", fontFamily: "var(--font-b)", fontWeight: 500 }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `rgba(${rgb},0.2)`}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = `rgba(${rgb},0.1)`}
                        >🚀 Live Demo</a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://github.com/khan-aarav" target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 28px", borderRadius: 12, background: "transparent", border: "1px solid rgba(6,182,212,0.25)", color: "var(--text2)", fontSize: "0.88rem", fontFamily: "var(--font-b)", fontWeight: 500, textDecoration: "none", transition: "all 0.25s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)"; (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.25)"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}
          >
            🐙 View All Projects on GitHub →
          </a>
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){#projects > div > div:nth-child(2){grid-template-columns:repeat(2,1fr)!important}}@media(max-width:640px){#projects > div > div:nth-child(2){grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
