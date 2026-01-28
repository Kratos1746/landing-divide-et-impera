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

  const [isHovered, setIsHovered] = useState(false);
  const [showRing, setShowRing] = useState(false);
  const [ringKey, setRingKey] = useState(0);

  const lockedRef = useRef(false);
  const tRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (tRef.current) window.clearTimeout(tRef.current);
    };
  }, []);

  const playEnterRingOnce = () => {
    // se l’anello è già in corso, non ripartire (evita doppie animazioni)
    if (showRing) return;

    setShowRing(true);
    setRingKey((k) => k + 1);

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
    setIsHovered(true);
    playEnterRingOnce();
  };

  const onMouseLeave = () => {
    if (lockedRef.current) return;
    // ✅ ritorno “semplice”: niente ring
    setIsHovered(false);
  };

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lockedRef.current) return;
    lockedRef.current = true;

    // su mobile (tap) portiamo allo stato hovered e facciamo l’anello
    setIsHovered(true);
    playEnterRingOnce();

    window.setTimeout(() => {
      openCalendly();
      lockedRef.current = false;
    }, ENTER_MS);
  };

  return (
    <Reveal inViewClassName="animate-fade-up" delay={100}>
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={[
        "relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl",
        "px-6 py-4 text-base lg:text-lg font-semibold text-center select-none",
        "shadow-lg shadow-black/30",
        // ✅ transizioni premium fluide (ritorno incluso)
        "transition-[transform,background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
        "hover:scale-[1.02]",
        isHovered ? "bg-white text-[#1E3A5F]" : "bg-[#1E3A5F] text-white",
        className,
      ].join(" ")}
    >
      {/* Bordo statico: blu in hover, grigio/chiaro in base */}
      <span
        className={[
          "pointer-events-none absolute inset-0 rounded-2xl border",
          "transition-[border-color,box-shadow] duration-400 ease-[cubic-bezier(.2,.8,.2,1)]",
          isHovered ? "border-[#1E3A5F]" : "border-white/40",
          isHovered ? "shadow-[0_0_0_2px_rgba(30,58,95,0.10)]" : "",
        ].join(" ")}
      />

      {/* Ring SOLO in entrata (1 giro) */}
      {showRing && (
        <span key={ringKey} className="pointer-events-none absolute inset-0 rounded-2xl">
          <span
            className="absolute -inset-0.5 rounded-[18px] animate-[spin_900ms_linear_1]"
            style={{
              background:
                "conic-gradient(from 180deg, rgba(30,58,95,0.10), rgba(30,58,95,1), rgba(30,58,95,0.10))",
            }}
          />
          {/* Maschera: lascia visibile solo il bordo */}
          <span className="absolute inset-[2.5px] rounded-2xl bg-white" />
        </span>
      )}

      <span className="relative z-10">{children}</span>
    </a>
    </Reveal>
  );
}
