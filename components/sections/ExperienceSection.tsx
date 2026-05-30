"use client";

import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks";
import { EXPERIENCE_DATA } from "@/data/portfolio";

const TYPE_ICON  = { work: "💼", cert: "🏆", edu: "🎓" };
const TYPE_COLOR = { work: "6,182,212", cert: "251,191,36", edu: "52,211,153" };
const TYPE_LABEL = { work: "Work", cert: "Certification", edu: "Education" };

export function ExperienceSection() {
  const { ref, inView } = useInViewOnce(0.08);

  return (
    <section id="experience" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg" style={{ opacity: 0.4 }} />

      <div style={{ position: "absolute", top: "20%", right: "5%", width: 280, height: 280, background: "radial-gradient(circle,rgba(167,139,250,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-title">Experience & Certs</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem" }}>From packets to prompts — the full journey</p>
        </motion.div>

        {/* Legend */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
          {(Object.keys(TYPE_LABEL) as (keyof typeof TYPE_LABEL)[]).map(type => (
            <div key={type} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "var(--text3)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: `rgba(${TYPE_COLOR[type]},0.9)` }} />
              {TYPE_LABEL[type]}
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div style={{ maxWidth: 780, margin: "0 auto", position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,transparent,rgba(6,182,212,0.3) 8%,rgba(6,182,212,0.3) 92%,transparent)" }} />

          {EXPERIENCE_DATA.map((ex, i) => {
            const rgb = TYPE_COLOR[ex.type];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                style={{ display: "flex", gap: 28, marginBottom: 36, position: "relative" }}
              >
                {/* Dot */}
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: i === 0 ? "linear-gradient(135deg,var(--cyan),var(--violet))" : "var(--bg2)", border: `1px solid rgba(${rgb},0.45)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, fontSize: "1rem", boxShadow: i === 0 ? `0 0 16px rgba(${rgb},0.4)` : "none" }}>
                  {TYPE_ICON[ex.type]}
                </div>

                {/* Card */}
                <div className="glass" style={{ flex: 1, padding: 24, borderRadius: 16, transition: "border-color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `rgba(${rgb},0.35)`}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.15)"}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-b)", fontWeight: 700, color: "var(--text)", fontSize: "1rem", marginBottom: 3 }}>{ex.role}</div>
                      <div style={{ fontFamily: "var(--font-m)", fontSize: "0.74rem", color: `rgba(${rgb},1)`, letterSpacing: "0.03em" }}>{ex.company}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                      <span style={{ fontFamily: "var(--font-m)", fontSize: "0.68rem", color: "var(--text3)", padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", whiteSpace: "nowrap" }}>{ex.year}</span>
                      <span style={{ padding: "2px 9px", borderRadius: 100, fontSize: "0.62rem", fontFamily: "var(--font-m)", background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.2)`, color: `rgba(${rgb},1)` }}>{TYPE_LABEL[ex.type]}</span>
                    </div>
                  </div>
                  <p style={{ color: "var(--text3)", fontSize: "0.84rem", lineHeight: 1.7, marginBottom: 14 }}>{ex.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {ex.tags.map(t => (
                      <span key={t} style={{ padding: "2px 9px", borderRadius: 100, fontSize: "0.67rem", fontFamily: "var(--font-m)", background: `rgba(${rgb},0.08)`, border: `1px solid rgba(${rgb},0.18)`, color: `rgba(${rgb},1)` }}>{t}</span>
                    ))}
                  </div>
                  {ex.link && (
                    <a href={ex.link} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 12, fontSize: "0.75rem", color: `rgba(${rgb},1)`, textDecoration: "none" }}>View credential →</a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
