"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const ringRef  = useRef<HTMLDivElement>(null);
  const dotRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot  = dotRef.current;
    if (!ring || !dot) return;

    let ringX = x, ringY = y;

    const animate = () => {
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;

      ring.style.left = `${ringX}px`;
      ring.style.top  = `${ringY}px`;
      dot.style.left  = `${x}px`;
      dot.style.top   = `${y}px`;

      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [x, y]);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const enter = () => ring.classList.add("hovering");
    const leave = () => ring.classList.remove("hovering");

    const els = document.querySelectorAll("a, button, [role='button'], .cursor-pointer");
    els.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef}  className="cursor-dot"  />
    </>
  );
}
