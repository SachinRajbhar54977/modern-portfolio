"use client";

import { motion } from "framer-motion";
import { useInViewOnce } from "@/hooks";
import { BLOG_POSTS_DATA } from "@/data/portfolio";
import { COLOR_RGB } from "@/lib/utils";

export function BlogSection() {
  const { ref, inView } = useInViewOnce(0.08);

  return (
    <section id="blog" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg" style={{ opacity: 0.3 }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-title">AI Insights</div>
          <p style={{ color: "var(--text3)", fontSize: "0.9rem" }}>Thoughts on LLMs, MLOps, and the future of AI engineering</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {BLOG_POSTS_DATA.map((post, i) => {
            const rgb = COLOR_RGB[post.color];
            return (
              <motion.a key={post.id} href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass"
                style={{ padding: 24, borderRadius: 18, cursor: "pointer", display: "block", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-5px)"; el.style.borderColor = `rgba(${rgb},0.35)`; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = ""; el.style.borderColor = "rgba(6,182,212,0.15)"; }}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ padding: "3px 10px", borderRadius: 100, fontSize: "0.67rem", fontFamily: "var(--font-m)", background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.2)`, color: `rgba(${rgb},1)` }}>{post.tag}</span>
                  <span style={{ fontFamily: "var(--font-m)", fontSize: "0.67rem", color: "var(--text3)" }}>{post.date}</span>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "var(--font-b)", fontWeight: 600, color: "var(--text)", fontSize: "0.93rem", lineHeight: 1.5, marginBottom: post.excerpt ? 10 : 16 }}>{post.title}</h3>

                {/* Excerpt */}
                {post.excerpt && (
                  <p style={{ color: "var(--text3)", fontSize: "0.78rem", lineHeight: 1.65, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as "vertical", overflow: "hidden" }}>{post.excerpt}</p>
                )}

                {/* Footer */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <span style={{ fontFamily: "var(--font-m)", fontSize: "0.7rem", color: "var(--text3)" }}>📖 {post.readTime} read</span>
                  <span style={{ fontFamily: "var(--font-b)", fontSize: "0.78rem", color: `rgba(${rgb},1)`, fontWeight: 500 }}>Read →</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} style={{ textAlign: "center", marginTop: 40 }}>
          <a href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 28px", borderRadius: 12, background: "transparent", border: "1px solid rgba(6,182,212,0.25)", color: "var(--text2)", fontSize: "0.88rem", fontFamily: "var(--font-b)", fontWeight: 500, textDecoration: "none", transition: "all 0.25s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)"; (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(6,182,212,0.25)"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}
          >
            ✍️ View All Articles →
          </a>
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){#blog > div > div:nth-child(2){grid-template-columns:repeat(2,1fr)!important}}@media(max-width:640px){#blog > div > div:nth-child(2){grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
