"use client";

import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type CTAButtonProps = {
  href: string;
  openInNewTab?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function CTAButton({
  href,
  openInNewTab = true,
  className = "",
  children = "Prenota qui l’analisi di Fattibilità con Salvatore",
}: CTAButtonProps) {
  const ENTER_MS = 900;
  const REVEAL_LOCK_MS = 1100; // blocca hover durante lo shine iniziale

  const [shineKey, setShineKey] = useState(0);
  const [hoverEnabled, setHoverEnabled] = useState(false);

  const lockedRef = useRef(false);
  const tRef = useRef<number | null>(null);

  /* Sblocca hover dopo il reveal */
  useEffect(() => {
    const t = window.setTimeout(() => {
      setHoverEnabled(true);
    }, REVEAL_LOCK_MS);

    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    return () => {
      if (tRef.current) window.clearTimeout(tRef.current);
    };
  }, []);

  const playHoverShine = () => {
    if (!hoverEnabled) return;
    setShineKey((k) => k + 1);
  };

  const openCalendly = () => {
    if (openInNewTab) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  const onMouseEnter = () => {
    if (lockedRef.current) return;
    playHoverShine();
  };

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lockedRef.current) return;

    lockedRef.current = true;
    playHoverShine();

    window.setTimeout(() => {
      openCalendly();
      lockedRef.current = false;
    }, ENTER_MS);
  };

  return (
    <Reveal inViewClassName="anim-safe-up animate-fade-up" delay={100}>
      <span className="inline-block w-full">
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          onMouseEnter={onMouseEnter}
          onClick={onClick}
          className={[
            "group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl",
            "px-8 py-4 text-base lg:text-lg font-semibold text-center select-none",
            "bg-[#1E3A5F] text-white shadow-lg shadow-black/30",
            "transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
            "hover:scale-[1.02]",
            className,
          ].join(" ")}
        >
          {/* Bordo base */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/25 transition-colors duration-300 group-hover:border-white/45" />

          {/* SHINE AL REVEAL (una volta, con delay) */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <span
              className={[
                "absolute top-0 left-[-50%] h-full w-full z-10",
                "bg-linear-to-r from-transparent via-white/95 to-transparent",
                "skew-x-[-20deg]",
                "animate-cta-shine-delayed",
              ].join(" ")}
            />
          </span>

          {/* SHINE SU HOVER / TAP */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <span
              key={shineKey}
              className={[
                "absolute top-0 left-[-50%] h-full w-full z-10",
                "bg-linear-to-r from-transparent via-white/95 to-transparent",
                "skew-x-[-20deg]",
                "animate-cta-shine",
              ].join(" ")}
            />
          </span>

          <span className="relative z-10">{children}</span>
        </a>
      </span>
    </Reveal>
  );
}
