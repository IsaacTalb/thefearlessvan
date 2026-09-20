"use client";
import { useEffect, useRef } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--x", `${event.clientX}px`);
      ref.current.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
