"use client";

import { useScrollProgress } from "@/hooks";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 9999, background: "rgba(6,182,212,0.08)" }}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--cyan), var(--violet))",
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px rgba(6,182,212,0.5)",
        }}
      />
    </div>
  );
}
