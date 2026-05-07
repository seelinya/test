"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

export default function ScrollReveal({
  children,
  className = "",
  delay,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const baseClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : direction === "none"
          ? "reveal-fade"
          : "reveal";

  const style: React.CSSProperties = delay != null ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={`${baseClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
