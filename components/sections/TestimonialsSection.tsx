"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInViewOnce } from "@/hooks";
import { TESTIMONIALS_DATA } from "@/data/portfolio";

export function TestimonialsSection() {
  const [idx, setIdx]     = useState(0);
  const [dir, setDir]     = useState(1);        // 1 = forward, -1 = backward
  const { ref, inView }   = useInViewOnce(0.1);

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };

  const prev = () => go((idx - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  const next = () => go((idx + 1) % TESTIMONIALS_DATA.length);

  // Auto-advance every 6 s
  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx(i => (i + 1) % TESTIMONIALS_DATA.length); }, 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS_DATA[idx];

  return (
    <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg,var(--bg) 0%,var(--bg3) 100%)" }}>
      <div className="grid-bg" style={{ opacity: 0.3 }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-title">Client Testimonials</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem" }}>What clients say about working with me</p>
        </motion.div>

        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Card */}
          <div style={{ position: "relative", overflow: "hidden", borderRadius: 22, minHeight: 340 }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass"
                style={{ padding: "44px 48px", borderRadius: 22, textAlign: "center", border: "1px solid rgba(6,182,212,0.18)" }}
              >
                {/* Quote mark */}
                <div style={{ fontSize: "4rem", color: "var(--cyan)", opacity: 0.15, fontFamily: "Georgia", lineHeight: 0.8, marginBottom: 12, textAlign: "left" }}>"</div>

                {/* Avatar */}
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,var(--cyan),var(--violet))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-h)", fontWeight: 700, fontSize: "1rem", color: "#000", margin: "0 auto 20px", boxShadow: "0 0 24px rgba(6,182,212,0.35)" }}>
                  {t.avatar}
                </div>

                {/* Text */}
                <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--text2)", marginBottom: 28, fontStyle: "italic" }}>
                  "{t.text}"
                </p>

                {/* Project tag */}
                {t.projectType && (
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ padding: "3px 12px", borderRadius: 100, fontSize: "0.68rem", fontFamily: "var(--font-m)", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "var(--cyan2)" }}>{t.projectType}</span>
                  </div>
                )}

                <div style={{ fontFamily: "var(--font-b)", fontWeight: 600, color: "var(--text)", fontSize: "0.95rem", marginBottom: 4 }}>{t.name}</div>
                <div style={{ color: "var(--text3)", fontSize: "0.82rem", marginBottom: 16 }}>{t.role}, {t.company}</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 3 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} style={{ color: "var(--amber)", fontSize: "0.95rem" }}>★</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 22 }}>
            {TESTIMONIALS_DATA.map((_, i) => (
              <button key={i} onClick={() => go(i)}
                style={{ height: 8, borderRadius: 100, border: "none", cursor: "pointer", transition: "all 0.3s", background: i === idx ? "var(--cyan)" : "rgba(255,255,255,0.1)", width: i === idx ? 28 : 8 }}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 18 }}>
            <button onClick={prev}
              style={{ padding: "9px 22px", borderRadius: 10, background: "transparent", border: "1px solid rgba(6,182,212,0.25)", color: "var(--cyan)", fontFamily: "var(--font-b)", fontWeight: 500, fontSize: "0.84rem", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.08)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >← Prev</button>
            <button onClick={next}
              style={{ padding: "9px 22px", borderRadius: 10, background: "transparent", border: "1px solid rgba(6,182,212,0.25)", color: "var(--cyan)", fontFamily: "var(--font-b)", fontWeight: 500, fontSize: "0.84rem", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.08)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >Next →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
