"use client";

import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks";

const TIMELINE = [
  { year: "2021", label: "Cybersecurity Roots",  desc: "Security Analyst — mastering threat detection, Python scripting, and log analysis." },
  { year: "2022", label: "ML Discovery",          desc: "Applied ML to network anomaly detection. Fell in love with data-driven intelligence." },
  { year: "2023", label: "GenAI Transition",       desc: "Deep-dived into LLMs, LangChain, RAG systems. Shipped first production AI product." },
  { year: "2024", label: "AI Engineer",            desc: "Full-time AI engineering — LLM apps, MLOps pipelines, and GenAI SaaS products." },
  { year: "2025", label: "Scale & Impact",         desc: "Open source contributions, AI automation tools, and scaling AI startups globally." },
];

const BADGES = [
  { icon: "🧠", label: "LLM Specialist"   },
  { icon: "⚡", label: "FastAPI Expert"   },
  { icon: "🔒", label: "Security-minded" },
  { icon: "🌐", label: "Full-stack AI"   },
];

export function AboutSection() {
  const { ref, inView } = useInViewOnce(0.15);

  return (
    <section id="about" style={{ padding: "100px 24px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg,var(--bg) 0%,var(--bg3) 100%)" }}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-title">About Me</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem", letterSpacing: "0.02em" }}>The journey from packets to prompts</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>

          {/* ── LEFT: Bio ── */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>

            {/* Avatar card */}
            <div className="glass" style={{ padding: 28, marginBottom: 28, borderRadius: 20, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -24, right: -24, width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle,rgba(6,182,212,0.15),transparent)", pointerEvents: "none" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,var(--cyan),var(--violet))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-h)", fontSize: "1.4rem", fontWeight: 900, color: "#000", flexShrink: 0, boxShadow: "0 0 24px rgba(6,182,212,0.4)" }}>SR</div>
                <div>
                  <div style={{ fontFamily: "var(--font-h)", fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Sachin Rajbhar</div>
                  <div style={{ fontFamily: "var(--font-m)", fontSize: "0.72rem", color: "var(--cyan)", letterSpacing: "0.06em" }}>AI Engineer · Hyderabad, India</div>
                  <div style={{ display: "flex", gap: 5, marginTop: 8, flexWrap: "wrap" }}>
                    {["LangChain", "MLOps", "FastAPI"].map(t => (
                      <span key={t} style={{ padding: "2px 9px", borderRadius: 100, fontSize: "0.65rem", fontFamily: "var(--font-m)", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "var(--cyan2)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p style={{ color: "var(--text2)", lineHeight: 1.9, marginBottom: 18, fontSize: "0.93rem" }}>
              I'm an <strong style={{ color: "var(--cyan)" }}>AI Engineer & GenAI Developer</strong> with a unique background spanning Cybersecurity and AI Engineering. My security roots give me a distinct edge — I build AI systems that are not just intelligent but{" "}
              <em style={{ color: "var(--violet)" }}>robust, secure, and production-hardened</em>.
            </p>
            <p style={{ color: "var(--text2)", lineHeight: 1.9, marginBottom: 28, fontSize: "0.93rem" }}>
              I specialize in <strong style={{ color: "var(--emerald)" }}>LLM applications, RAG pipelines, FastAPI backends,</strong> and end-to-end MLOps infrastructure. Whether you need a PDF chatbot or a full GenAI SaaS platform, I ship{" "}
              <em style={{ color: "var(--cyan)" }}>fast, clean, and scalable</em>.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {BADGES.map(b => (
                <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", borderRadius: 9, background: "rgba(6,182,212,0.06)", border: "1px solid rgba(6,182,212,0.15)", fontSize: "0.82rem", color: "var(--text2)" }}>
                  <span>{b.icon}</span><span>{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Timeline ── */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.25 }} style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,transparent,rgba(6,182,212,0.3) 15%,rgba(6,182,212,0.3) 85%,transparent)" }} />

            {TIMELINE.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                style={{ display: "flex", gap: 24, marginBottom: 32, position: "relative" }}>
                {/* Dot */}
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: i === TIMELINE.length - 1 ? "linear-gradient(135deg,var(--cyan),var(--violet))" : "var(--bg2)", border: "1px solid rgba(6,182,212,0.35)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1, fontFamily: "var(--font-m)", fontSize: "0.55rem", color: "var(--cyan)", letterSpacing: "0.06em", boxShadow: i === TIMELINE.length - 1 ? "0 0 16px rgba(6,182,212,0.35)" : "none" }}>{item.year}</div>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontFamily: "var(--font-b)", fontWeight: 600, color: "var(--text)", marginBottom: 5, fontSize: "0.93rem" }}>{item.label}</div>
                  <div style={{ color: "var(--text3)", fontSize: "0.82rem", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#about > div > div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
