"use client";

import Link from "next/link";
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS, SERVICES_DATA } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--bg3)", borderTop: "1px solid var(--border)", padding: "48px 24px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 40 }}>

          {/* Brand column */}
          <div>
            <div style={{ fontFamily: "var(--font-h)", fontWeight: 700, fontSize: "1.2rem", color: "var(--cyan)", letterSpacing: "0.1em", marginBottom: 14 }}>
              {PERSONAL_INFO.initials}<span style={{ color: "var(--text2)" }}>.</span>
            </div>
            <p style={{ color: "var(--text3)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 280, marginBottom: 20 }}>
              AI Engineer & GenAI Developer building intelligent systems that scale. From LLMs to MLOps — always shipping.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: SOCIAL_LINKS.github,   icon: "🐙", label: "GitHub"   },
                { href: SOCIAL_LINKS.linkedin,  icon: "💼", label: "LinkedIn" },
                { href: SOCIAL_LINKS.twitter,   icon: "🐦", label: "Twitter"  },
                { href: SOCIAL_LINKS.email,     icon: "📧", label: "Email"    },
              ].map(({ href, icon, label }) => (
                <Link key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                  aria-label={label}
                  style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "1rem", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: "var(--font-b)", fontWeight: 600, fontSize: "0.78rem", color: "var(--text)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Navigation</div>
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={l.href}
                style={{ display: "block", color: "var(--text3)", fontSize: "0.85rem", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--cyan)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text3)"; }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "var(--font-b)", fontWeight: 600, fontSize: "0.78rem", color: "var(--text)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Services</div>
            {SERVICES_DATA.slice(0, 5).map((s) => (
              <a key={s.title} href="#services"
                style={{ display: "block", color: "var(--text3)", fontSize: "0.85rem", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--cyan)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text3)"; }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(6,182,212,0.2),transparent)", marginBottom: 22 }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontSize: "0.78rem", color: "var(--text3)" }}>
            © {year} {PERSONAL_INFO.name}. All rights reserved. Built with ⚡ & AI.
          </span>
          <span style={{ fontFamily: "var(--font-m)", fontSize: "0.68rem", color: "var(--text3)" }}>
            v2.5.0 · Hyderabad, India
          </span>
        </div>
      </div>

      <style>{`@media(max-width:768px){ footer > div > div:first-child { grid-template-columns: 1fr !important } }`}</style>
    </footer>
  );
}
