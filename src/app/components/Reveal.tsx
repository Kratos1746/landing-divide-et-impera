"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;

  /**
   * Classi da applicare quando l’elemento diventa visibile.
   * Puoi passare qualsiasi classe: animate-fade-up, animate-dot-1, ecc.
   * Anche più classi: "animate-fade-right-soft motion-safe:animate-fade-up"
   */
  inViewClassName?: string;

  /**
   * (Opzionale) Classi sempre attive prima/durante (es: "translate-y-2").
   * Utile se vuoi impostare un pre-stato custom invece di usare .reveal default.
   */
  baseClassName?: string;

  /** Delay in ms */
  delay?: number;

  /** Anima una sola volta (default true). Se false, entra/esce quando scrolli. */
  once?: boolean;

  /** Threshold IntersectionObserver (default 0.15) */
  threshold?: number;

  /** Root margin (default "0px 0px -10% 0px") */
  rootMargin?: string;

  /** Elemento wrapper */
  as?: React.ElementType;

  /** className finale extra (sempre applicata) */
  className?: string;

  /**
   * Se true, NON applica opacity:0 di default (per elementi che non vuoi “nascondere”)
   * ma vuoi solo triggerare una classe inView (es. ring, underline, ecc).
   */
  noBaseReveal?: boolean;
};

export default function Reveal({
  children,
  inViewClassName = "animate-fade-up",
  baseClassName = "",
  delay = 0,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  as: Tag = "div",
  className = "",
  noBaseReveal = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const style = useMemo<React.CSSProperties>(() => {
    return delay ? { animationDelay: `${delay}ms` } : {};
  }, [delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Rispetta reduced motion: niente animazioni, render immediato
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setIsVisible(true);
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          el.classList.add("is-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
          el.classList.remove("is-visible");
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return (
    <Tag
      ref={ref as any}
      style={style}
      className={[
        noBaseReveal ? "" : "reveal",
        baseClassName,
        className,
        isVisible ? "is-visible" : "",
        isVisible ? inViewClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
