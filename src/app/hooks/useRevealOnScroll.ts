"use client";

import { useEffect, useRef } from "react";

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element); // anima una sola volta
        }
      },
      {
        threshold: 0.15, // 15% visibile = perfetto per landing
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
