"use client";

import { motion } from "framer-motion";
import { useInViewOnce, useContactForm } from "@/hooks";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/data/portfolio";
import toast from "react-hot-toast";
import { useEffect } from "react";

const PROJECT_TYPES = [
  "AI Chatbot Development",
  "RAG Pipeline",
  "FastAPI Backend",
  "MLOps Pipeline",
  "LLM Integration",
  "AI Automation",
  "Other / General Inquiry",
];

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(6,182,212,0.15)",
  borderRadius: 10,
  padding: "11px 15px",
  color: "var(--text)",
  fontFamily: "var(--font-b)",
  fontSize: "0.88rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

export function ContactSection() {
  const { ref, inView } = useInViewOnce(0.08);
  const { values, status, errorMsg, handleChange, handleSubmit, reset } = useContactForm();

  // Toast feedback
  useEffect(() => {
    if (status === "success") toast.success("Message sent! I'll reply within 4 hours.");
    if (status === "error")   toast.error(errorMsg ?? "Something went wrong. Please try again.");
  }, [status, errorMsg]);

  return (
    <section id="contact" style={{ padding: "100px 24px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg,var(--bg) 0%,var(--bg3) 100%)" }}>
      <div className="grid-bg" style={{ opacity: 0.3 }} />
      <div style={{ position: "absolute", top: "20%", left: "5%",  width: 300, height: 300, background: "radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)",  pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", right: "5%", width: 280, height: 280, background: "radial-gradient(circle,rgba(167,139,250,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-title">Get In Touch</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem" }}>Let's build something extraordinary together</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>

          {/* ── LEFT ── */}
          <motion.div initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.15 }}>
            <h3 style={{ fontFamily: "var(--font-b)", fontWeight: 700, fontSize: "1.2rem", color: "var(--text)", marginBottom: 12 }}>Ready to ship your AI product?</h3>
            <p style={{ color: "var(--text2)", lineHeight: 1.85, marginBottom: 32, fontSize: "0.9rem" }}>
              Whether you need a RAG chatbot, MLOps pipeline, FastAPI backend, or full GenAI SaaS — I help you move from idea to production, fast.
            </p>

            {/* Contact info items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
              {[
                { icon: "📧", label: "Email",         value: PERSONAL_INFO.email,              color: "var(--cyan)" },
                { icon: "📍", label: "Location",      value: `${PERSONAL_INFO.location} · Remote Worldwide`, color: "var(--violet)" },
                { icon: "⏰", label: "Response Time", value: "Usually within 4 hours",         color: "var(--emerald)" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: `rgba(6,182,212,0.06)`, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: "0.86rem", color: "var(--text2)" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { icon: "🐙", label: "GitHub",   href: SOCIAL_LINKS.github,   color: "var(--cyan)"    },
                { icon: "💼", label: "LinkedIn",  href: SOCIAL_LINKS.linkedin,  color: "var(--violet)"  },
                { icon: "🐦", label: "Twitter/X", href: SOCIAL_LINKS.twitter,   color: "var(--emerald)" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", color: "var(--text2)", textDecoration: "none", fontSize: "0.82rem", fontFamily: "var(--font-b)", transition: "all 0.25s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = s.color; (e.currentTarget as HTMLElement).style.color = s.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}
                >
                  <span>{s.icon}</span>{s.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.25 }}>
            <div className="glass" style={{ padding: 36, borderRadius: 22 }}>

              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "var(--font-b)", fontWeight: 700, color: "var(--text)", marginBottom: 10, fontSize: "1.1rem" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text2)", fontSize: "0.9rem", lineHeight: 1.7 }}>Thanks for reaching out, {values.name.split(" ")[0]}. I'll get back to you within 4 hours.</p>
                  <button onClick={reset} className="btn-outline" style={{ marginTop: 24 }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.1)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                  >← Send Another Message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Name + Email */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    {[
                      { name: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
                      { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.07em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>{f.label}</label>
                        <input name={f.name} type={f.type} value={(values as Record<string, string>)[f.name]} onChange={handleChange} required placeholder={f.placeholder}
                          style={inputStyle}
                          onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--cyan)"}
                          onBlur={e  => (e.target as HTMLElement).style.borderColor = "rgba(6,182,212,0.15)"}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Project type */}
                  <div>
                    <label style={{ fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.07em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Project Type</label>
                    <select name="projectType" value={values.projectType} onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--cyan)"}
                      onBlur={e  => (e.target as HTMLElement).style.borderColor = "rgba(6,182,212,0.15)"}
                    >
                      <option value="">Select a service…</option>
                      {PROJECT_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.07em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Subject</label>
                    <input name="subject" value={values.subject} onChange={handleChange} placeholder="Brief description of your project"
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--cyan)"}
                      onBlur={e  => (e.target as HTMLElement).style.borderColor = "rgba(6,182,212,0.15)"}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontSize: "0.68rem", color: "var(--text3)", letterSpacing: "0.07em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Message</label>
                    <textarea name="message" value={values.message} onChange={handleChange} required rows={5}
                      placeholder="Tell me about your project, tech stack, timeline, and budget…"
                      style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--cyan)"}
                      onBlur={e  => (e.target as HTMLElement).style.borderColor = "rgba(6,182,212,0.15)"}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button type="submit" disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                    style={{ width: "100%", padding: "14px", borderRadius: 12, background: status === "loading" ? "rgba(6,182,212,0.5)" : "linear-gradient(135deg,var(--cyan),#0891b2)", color: "#000", fontFamily: "var(--font-b)", fontWeight: 700, fontSize: "0.95rem", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", letterSpacing: "0.04em", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 4px 20px rgba(6,182,212,0.25)" }}>
                    {status === "loading" ? (
                      <><span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⚙</span> Sending…</>
                    ) : (
                      <>⚡ Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){#contact > div > div:last-child{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
