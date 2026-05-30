"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio";
import { useActiveSection } from "@/hooks";
import { scrollToSection } from "@/lib/utils";

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 68, display: "flex", alignItems: "center",
        transition: "all 0.3s ease",
        background:    scrolled ? "rgba(3,7,18,0.95)"  : "transparent",
        backdropFilter:scrolled ? "blur(20px)" : "none",
        borderBottom:  scrolled ? "1px solid rgba(6,182,212,0.1)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* ── LOGO ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 8 }}
        >
          <span style={{ fontFamily: "var(--font-h)", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.1em" }}>
            <span style={{ color: "var(--text)" }}>{PERSONAL_INFO.initials}</span>
            <span style={{ color: "var(--cyan)" }}>.</span>
          </span>
          <span style={{ fontFamily: "var(--font-m)", fontSize: "0.6rem", color: "var(--text3)", letterSpacing: "0.16em" }}>AI_ENG</span>
        </button>

        {/* ── DESKTOP LINKS ── */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "7px 12px", borderRadius: 8,
                fontFamily: "var(--font-b)", fontSize: "0.82rem", fontWeight: 500,
                letterSpacing: "0.03em", transition: "color 0.2s",
                color: activeSection === link.id ? "var(--cyan)" : "var(--text2)",
                position: "relative",
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{ position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "var(--cyan)" }}
                />
              )}
            </button>
          ))}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNavClick("contact")}
            style={{ marginLeft: 12, padding: "8px 20px", borderRadius: 10, background: "linear-gradient(135deg, var(--cyan), #0891b2)", color: "#000", fontFamily: "var(--font-b)", fontWeight: 600, fontSize: "0.82rem", border: "none", cursor: "pointer", letterSpacing: "0.04em" }}
          >
            Hire Me ⚡
          </motion.button>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: 4 }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ position: "absolute", top: 68, left: 0, right: 0, background: "rgba(3,7,18,0.98)", padding: "16px 24px", borderTop: "1px solid rgba(6,182,212,0.1)" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "12px 0", color: activeSection === link.id ? "var(--cyan)" : "var(--text2)", fontFamily: "var(--font-b)", fontSize: "1rem", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media(max-width:768px){ nav > div > div:nth-child(2){ display:none!important } .mobile-menu-btn{ display:block!important } }`}</style>
    </motion.nav>
  );
}
