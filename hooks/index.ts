"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── useTypingEffect ──────────────────────────────────────────────────────────
/**
 * Cycles through an array of strings with a typewriter effect.
 * @param texts   - Array of strings to cycle through
 * @param speed   - Typing speed in ms per character
 * @param pause   - Pause duration at end of each string
 */
export function useTypingEffect(
  texts: string[],
  speed = 80,
  pause = 2200
): string {
  const [index, setIndex]       = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]  = useState(false);

  useEffect(() => {
    const current = texts[index];

    // Finished typing — pause then delete
    if (!deleting && displayed === current) {
      const timer = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timer);
    }

    // Finished deleting — move to next string
    if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
      return;
    }

    // Typing or deleting one character
    const timer = setTimeout(
      () => {
        setDisplayed((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timer);
  }, [displayed, deleting, index, texts, speed, pause]);

  return displayed;
}

// ─── useScrollProgress ────────────────────────────────────────────────────────
/** Returns 0-100 scroll progress percentage for the page */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

// ─── useActiveSection ─────────────────────────────────────────────────────────
/** Tracks which section is currently in view using IntersectionObserver */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

// ─── useInViewOnce ────────────────────────────────────────────────────────────
/** Returns true once the ref element enters the viewport */
export function useInViewOnce(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── useMousePosition ─────────────────────────────────────────────────────────
/** Tracks the current mouse position */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return position;
}

// ─── useContactForm ───────────────────────────────────────────────────────────
/** Manages contact form state, validation, and submission */
export function useContactForm() {
  const [values, setValues] = useState({
    name: "", email: "", subject: "", message: "", projectType: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("loading");
      setErrorMsg("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error ?? "Submission failed");

        setStatus("success");
        setValues({ name: "", email: "", subject: "", message: "", projectType: "" });
      } catch (err) {
        setStatus("error");
        setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      }
    },
    [values]
  );

  const reset = useCallback(() => {
    setStatus("idle");
    setErrorMsg("");
  }, []);

  return { values, status, errorMsg, handleChange, handleSubmit, reset };
}

// ─── useProjectFilter ─────────────────────────────────────────────────────────
/** Manages project category filter state */
export function useProjectFilter<T extends { category: string }>(
  data: T[],
  defaultFilter = "All"
) {
  const [filter, setFilter] = useState(defaultFilter);

  const filtered = filter === "All"
    ? data
    : data.filter((item) => item.category === filter);

  return { filter, setFilter, filtered };
}

// ─── useParticles ─────────────────────────────────────────────────────────────
/** Canvas particle system hook */
export function useParticles(count = 80) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number; opacity: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.1,
      color: Math.random() > 0.5 ? "6,182,212" : "167,139,250",
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6,182,212,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return canvasRef;
}
