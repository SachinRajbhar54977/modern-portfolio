"use client";

import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks";
import { SERVICES_DATA } from "@/data/portfolio";
import { COLOR_RGB, scrollToSection } from "@/lib/utils";

export function ServicesSection() {
  const { ref, inView } = useInViewOnce(0.08);

  return (
    <section id="services" style={{ padding: "100px 24px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg,var(--bg) 0%,var(--bg3) 100%)" }}>
      <div className="grid-bg" style={{ opacity: 0.3 }} />
      <div style={{ position: "absolute", bottom: "10%", left: "10%", width: 350, height: 350, background: "radial-gradient(circle,rgba(6,182,212,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-title">Services</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem", marginBottom: 0 }}>Premium AI engineering services for your next project</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {SERVICES_DATA.map((s, i) => {
            const rgb = COLOR_RGB[s.color];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass"
                style={{ padding: 32, borderRadius: 20, transition: "all 0.3s", cursor: "pointer", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-5px)";
                  el.style.borderColor = `rgba(${rgb},0.4)`;
                  el.style.background = `rgba(${rgb},0.04)`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "";
                  el.style.borderColor = "rgba(6,182,212,0.15)";
                  el.style.background = "rgba(13,21,38,0.85)";
                }}
              >
                {/* Glow orb */}
                <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: `radial-gradient(circle,rgba(${rgb},0.15),transparent)`, pointerEvents: "none" }} />

                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "var(--font-b)", fontWeight: 700, color: "var(--text)", marginBottom: 10, fontSize: "1rem", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ color: "var(--text3)", fontSize: "0.84rem", lineHeight: 1.7, marginBottom: 18 }}>{s.description}</p>

                {/* Feature list */}
                {s.features && (
                  <ul style={{ listStyle: "none", marginBottom: 20, display: "flex", flexDirection: "column", gap: 5 }}>
                    {s.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: "0.78rem", color: "var(--text3)" }}>
                        <span style={{ color: `rgba(${rgb},1)`, fontSize: "0.55rem" }}>◆</span>{f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Price + CTA */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontFamily: "var(--font-m)", fontSize: "0.82rem", color: `rgba(${rgb},1)`, fontWeight: 600 }}>{s.price}</span>
                  <button
                    onClick={() => scrollToSection("contact")}
                    style={{ padding: "7px 16px", borderRadius: 9, background: `rgba(${rgb},0.12)`, border: `1px solid rgba(${rgb},0.25)`, color: `rgba(${rgb},1)`, fontSize: "0.78rem", cursor: "pointer", fontFamily: "var(--font-b)", fontWeight: 500, transition: "all 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `rgba(${rgb},0.22)`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = `rgba(${rgb},0.12)`}
                  >
                    Get Quote →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55 }}
          style={{ marginTop: 48, padding: "32px 40px", borderRadius: 20, background: "linear-gradient(135deg,rgba(6,182,212,0.08) 0%,rgba(167,139,250,0.06) 100%)", border: "1px solid rgba(6,182,212,0.2)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ fontFamily: "var(--font-b)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: 6 }}>Need a custom AI solution?</div>
            <p style={{ color: "var(--text2)", fontSize: "0.88rem", margin: 0 }}>Let's discuss your project. I offer tailored solutions and flexible engagement models.</p>
          </div>
          <button onClick={() => scrollToSection("contact")}
            style={{ padding: "13px 30px", borderRadius: 12, background: "linear-gradient(135deg,var(--cyan),#0891b2)", color: "#000", fontFamily: "var(--font-b)", fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
            ⚡ Start a Project
          </button>
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){#services > div > div:nth-child(2){grid-template-columns:repeat(2,1fr)!important}}@media(max-width:640px){#services > div > div:nth-child(2){grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
