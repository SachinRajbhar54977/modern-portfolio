"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks";
import { GITHUB_REPOS_MOCK, GITHUB_STATS_MOCK, PERSONAL_INFO } from "@/data/portfolio";
import type { GitHubRepo, GitHubStats } from "@/types";
import { LANG_COLOR } from "@/lib/utils";

// Contribution graph cell levels → colour
const LEVELS = [
  "rgba(255,255,255,0.03)",
  "rgba(6,182,212,0.20)",
  "rgba(6,182,212,0.45)",
  "rgba(6,182,212,0.72)",
  "rgba(6,182,212,0.96)",
];

function ContributionGraph() {
  // Generate a pseudo-random but stable-looking grid: 52 weeks × 7 days
  const grid = Array.from({ length: 52 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const seed = (w * 7 + d) * 1317 + 42;
      const v    = (seed ^ (seed >> 5)) % 100;
      return v < 35 ? 0 : v < 55 ? 1 : v < 74 ? 2 : v < 89 ? 3 : 4;
    })
  );

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ display: "flex", gap: 3, minWidth: 640, marginBottom: 10 }}>
        {grid.map((week, wi) => (
          <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {week.map((level, di) => (
              <div key={di}
                style={{ width: 11, height: 11, borderRadius: 2, background: LEVELS[level], transition: "transform 0.1s", cursor: "default" }}
                title={`Week ${wi + 1}, Day ${di + 1}`}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.6)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = ""}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.68rem", color: "var(--text3)" }}>
        <span>Less</span>
        {LEVELS.map((l, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: l }} />)}
        <span>More</span>
      </div>
    </div>
  );
}

export function GitHubSection() {
  const { ref, inView } = useInViewOnce(0.08);
  const [repos,  setRepos]  = useState<GitHubRepo[]>(GITHUB_REPOS_MOCK);
  const [stats,  setStats]  = useState<GitHubStats>(GITHUB_STATS_MOCK);

  // Try to fetch live data
  useEffect(() => {
    fetch("/api/github")
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          setRepos(d.data.repos);
          setStats(d.data.stats);
        }
      })
      .catch(() => { /* keep mock data */ });
  }, []);

  const STAT_CARDS = [
    { label: "Contributions", value: stats.contributions.toLocaleString(), color: "var(--cyan)" },
    { label: "Repositories",  value: stats.totalRepos,                     color: "var(--violet)" },
    { label: "Stars Earned",  value: stats.totalStars,                     color: "var(--emerald)" },
    { label: "Current Streak",value: `${stats.streak}d`,                   color: "var(--amber)" },
  ];

  return (
    <section style={{ padding: "100px 24px", position: "relative", overflow: "hidden", background: "linear-gradient(180deg,var(--bg3) 0%,var(--bg) 100%)" }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="section-title">GitHub Activity</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem" }}>Open source contributions and recent repositories</p>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
          {STAT_CARDS.map(s => (
            <div key={s.label} className="glass" style={{ padding: "20px 24px", borderRadius: 14, textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-h)", fontSize: "1.5rem", fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: "0.7rem", color: "var(--text3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Contribution graph */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}
          className="glass" style={{ padding: "24px 28px", borderRadius: 20, marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
            <div style={{ fontFamily: "var(--font-b)", fontWeight: 600, color: "var(--text)", fontSize: "0.92rem" }}>
              Contribution Activity — 2025
            </div>
            <a href={`https://github.com/${PERSONAL_INFO.name.toLowerCase().replace(" ", "-")}`} target="_blank" rel="noreferrer"
              style={{ fontFamily: "var(--font-m)", fontSize: "0.72rem", color: "var(--cyan)", textDecoration: "none", letterSpacing: "0.04em" }}>
              View on GitHub →
            </a>
          </div>
          <ContributionGraph />
        </motion.div>

        {/* Repos grid */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.35 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {repos.slice(0, 6).map((repo, i) => (
            <motion.a key={repo.name} href={repo.url} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 + i * 0.06 }}
              className="glass"
              style={{ padding: 18, borderRadius: 14, cursor: "pointer", textDecoration: "none", display: "block", transition: "all 0.25s" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(6,182,212,0.35)"; el.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(6,182,212,0.15)"; el.style.transform = ""; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ fontFamily: "var(--font-m)", fontSize: "0.78rem", color: "var(--cyan)", lineHeight: 1.4, flex: 1 }}>{repo.name}</div>
                <div style={{ display: "flex", gap: 10, flexShrink: 0, marginLeft: 8 }}>
                  <span style={{ fontSize: "0.7rem", color: "var(--text3)" }}>⭐ {repo.stars}</span>
                  <span style={{ fontSize: "0.7rem", color: "var(--text3)" }}>🍴 {repo.forks}</span>
                </div>
              </div>
              {repo.description && (
                <p style={{ fontSize: "0.74rem", color: "var(--text3)", lineHeight: 1.5, marginBottom: 10 }}>{repo.description}</p>
              )}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: LANG_COLOR[repo.language] ?? "var(--text3)" }} />
                  <span style={{ fontSize: "0.68rem", color: "var(--text3)" }}>{repo.language}</span>
                </div>
                {repo.topics.slice(0, 2).map(t => (
                  <span key={t} className="tech-tag" style={{ fontSize: "0.6rem" }}>{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){section > div > div:nth-child(2) { grid-template-columns:repeat(2,1fr)!important } section > div > div:last-child { grid-template-columns:repeat(2,1fr)!important }}@media(max-width:640px){section > div > div:nth-child(2) { grid-template-columns:repeat(2,1fr)!important } section > div > div:last-child { grid-template-columns:1fr!important }}`}</style>
    </section>
  );
}
