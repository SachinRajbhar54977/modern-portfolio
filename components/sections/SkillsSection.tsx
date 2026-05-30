"use client";

import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks";
import { SKILLS_DATA } from "@/data/portfolio";

export function SkillsSection() {
  const { ref, inView } = useInViewOnce(0.1);

  return (
    <section id="skills" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg" />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-title">Skills & Tech Stack</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem" }}>Battle-tested tools I use to build AI systems that actually work</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {SKILLS_DATA.map((cat, ci) => (
            <motion.div key={ci}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
              className="glass"
              style={{ padding: 28, borderRadius: 20, transition: "transform 0.3s, border-color 0.3s", cursor: "default" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = `rgba(${cat.rgb},0.4)`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.15)"; }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: `rgba(${cat.rgb},0.12)`, border: `1px solid rgba(${cat.rgb},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-m)", fontSize: "0.6rem", color: `rgba(${cat.rgb},1)`, letterSpacing: "0.06em" }}>
                  0{ci + 1}
                </div>
                <div style={{ fontFamily: "var(--font-b)", fontWeight: 600, fontSize: "0.9rem", color: "var(--text)" }}>{cat.category}</div>
              </div>

              {/* Skill items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cat.items.map((skill, si) => (
                  <div key={si}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <span style={{ fontSize: "0.83rem", color: "var(--text2)", display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: "0.9rem" }}>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span style={{ fontFamily: "var(--font-m)", fontSize: "0.7rem", color: `rgba(${cat.rgb},1)`, fontWeight: 500 }}>{skill.percentage}%</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 100, background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: ci * 0.08 + si * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        style={{ height: "100%", borderRadius: 100, background: `linear-gradient(90deg,rgba(${cat.rgb},0.7),rgba(${cat.rgb},1))` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginTop: 36, padding: "20px 28px", borderRadius: 16, background: "rgba(6,182,212,0.04)", border: "1px solid rgba(6,182,212,0.12)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-m)", fontSize: "0.72rem", color: "var(--text3)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>ALSO USING:</span>
          {["Git", "GitHub Actions", "Linux", "VS Code", "Jupyter", "Streamlit", "Gradio", "Celery", "RabbitMQ", "ChromaDB", "Weaviate", "LlamaIndex"].map(tool => (
            <span key={tool} className="tech-tag">{tool}</span>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){#skills > div > div:nth-child(2){grid-template-columns:repeat(2,1fr)!important}}@media(max-width:640px){#skills > div > div:nth-child(2){grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
