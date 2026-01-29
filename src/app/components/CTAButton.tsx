"use client";

import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type CTAButtonProps = {
  href: string;
  openInNewTab?: boolean; // default true consigliato per Calendly
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

  const [showRing, setShowRing] = useState(false);
  const [ringKey, setRingKey] = useState(0);
  const [shineKey, setShineKey] = useState(0);

  const lockedRef = useRef(false);
  const tRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (tRef.current) window.clearTimeout(tRef.current);
    };
  }, []);

  const playEnterOnce = () => {
    // Se l'anello è già in corso, non ripartire (evita doppie animazioni)
    if (showRing) return;

    setShowRing(true);
    setRingKey((k) => k + 1);

    // Lo shine lo facciamo ripartire sempre quando parte l’anello
    setShineKey((k) => k + 1);

    if (tRef.current) window.clearTimeout(tRef.current);
    tRef.current = window.setTimeout(() => {
      setShowRing(false);
    }, ENTER_MS);
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
    playEnterOnce();
  };

  const onMouseLeave = () => {
    if (lockedRef.current) return;
    // ✅ ritorno semplice: nessuna animazione “di uscita”
  };

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lockedRef.current) return;
    lockedRef.current = true;

    // su mobile (tap) facciamo partire l'anello + shine prima di aprire Calendly
    playEnterOnce();

    window.setTimeout(() => {
      openCalendly();
      lockedRef.current = false;
    }, ENTER_MS);
  };

  return (
    <Reveal inViewClassName="anim-safe-up animate-fade-up" delay={100}>
      <span className="inline-block w-full transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:scale-[1.02]">
      <a
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={[
          "group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl",
          "px-6 py-4 text-base lg:text-lg font-semibold text-center select-none",
          "bg-[#1E3A5F] text-white shadow-lg shadow-black/30",
          "transition-shadow duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
          className,
        ].join(" ")}
      >
        {/* Bordo statico base (leggero) */}
        <span
          className={[
            "pointer-events-none absolute inset-0 rounded-2xl border",
            "border-white/25",
            "transition-[border-color,box-shadow] duration-400 ease-[cubic-bezier(.2,.8,.2,1)]",
            "group-hover:border-white/50",
          ].join(" ")}
        />

        {/* Shine (parte 1 volta a hover/tap) */}
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
