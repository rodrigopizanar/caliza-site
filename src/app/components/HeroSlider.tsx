"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ── Slides con imagen y nombre de proyecto ───────────────────────────
const SLIDES_DATA = [
  { image: "/images/hero.jpg",    label: "Isla Cambria" },
  { image: "/images/hero-01.png", label: "Club de Golf Bosques" },
  { image: "/images/hero-07.png", label: "Mesa Otoño" },
  { image: "/images/hero-03.png", label: "Media Center Sámara" },
  { image: "/images/hero-06.png", label: "Mesa Sabana" },
];

const IMAGES  = SLIDES_DATA.map((s) => s.image);
const SLIDES  = [...IMAGES, IMAGES[0]]; // clon del primero al final
const SLIDE_W = 100 / SLIDES.length;   // 16.666...%

const INTERVAL_MS   = 4000;
const TRANSITION_MS = 1100;
const EASING        = "cubic-bezier(0.77, 0, 0.18, 1)";

// Timing del label dentro de cada ciclo de 4000ms:
// t=0    → slide cambia, label se oculta
// t=900  → label aparece
// t=2600 → label desaparece
// t=4000 → siguiente slide
const LABEL_SHOW_MS = 900;
const LABEL_HIDE_MS = 2600;

export function HeroSlider() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const indexRef  = useRef(0);
  const [dot, setDot]           = useState(0);       // índice real activo
  const [showLabel, setShowLabel] = useState(false);  // visibilidad del label

  // Autoplay y loop
  useEffect(() => {
    function moveTo(index: number, animate: boolean) {
      const t = trackRef.current;
      if (!t) return;
      t.style.transition = animate
        ? `transform ${TRANSITION_MS}ms ${EASING}`
        : "none";
      t.style.transform = `translateX(-${index * SLIDE_W}%)`;
      indexRef.current  = index;
      setDot(index % IMAGES.length);
    }

    function advance() {
      const next = indexRef.current + 1;
      moveTo(next, true);

      if (next === SLIDES.length - 1) {
        setTimeout(() => {
          const t = trackRef.current;
          if (!t) return;
          t.style.transition = "none";
          t.style.transform  = "translateX(0%)";
          void t.getBoundingClientRect();
          indexRef.current = 0;
          setDot(0);
        }, TRANSITION_MS + 20);
      }
    }

    const timer = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  // Ciclo del label: ocultar → aparecer a 900ms → ocultar a 2600ms
  useEffect(() => {
    setShowLabel(false);

    const showTimeout = setTimeout(() => setShowLabel(true),  LABEL_SHOW_MS);
    const hideTimeout = setTimeout(() => setShowLabel(false), LABEL_HIDE_MS);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [dot]);

  const currentLabel = SLIDES_DATA[dot]?.label ?? "";

  return (
    <>
      {/* ── Track ── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        <div
          ref={trackRef}
          className="flex h-full"
          style={{ width: `${SLIDES.length * 100}%`, willChange: "transform" }}
        >
          {SLIDES.map((src, i) => (
            <div
              key={i}
              className="relative h-full flex-shrink-0"
              style={{ width: `${SLIDE_W}%` }}
            >
              <Image
                src={src}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Pestaña de proyecto ── */}
      <div
        className="absolute bottom-14 left-8 md:left-16"
        style={{ zIndex: 3 }}
      >
        <span
          className="inline-block rounded-full backdrop-blur-sm font-light"
          style={{
            background: "rgba(110, 115, 102, 0.38)",
            border: "1px solid rgba(255,255,255,0.20)",
            padding: "0.6rem 1.5rem",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#fff",
            fontFamily: "var(--font-geist), sans-serif",
            opacity: showLabel ? 1 : 0,
            transform: showLabel ? "translateY(0)" : "translateY(12px)",
            pointerEvents: showLabel ? "auto" : "none",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          {currentLabel}
        </span>
      </div>

      {/* ── Indicadores — líneas finas ── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const track = trackRef.current;
              if (!track) return;
              track.style.transition = `transform ${TRANSITION_MS}ms ${EASING}`;
              track.style.transform  = `translateX(-${i * SLIDE_W}%)`;
              indexRef.current = i;
              setDot(i);
            }}
            aria-label={`Imagen ${i + 1}`}
            style={{
              display: "block",
              height: "1px",
              width: i === dot ? "28px" : "8px",
              background:
                i === dot ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: `width ${TRANSITION_MS}ms ${EASING}, background 400ms ease`,
            }}
          />
        ))}
      </div>
    </>
  );
}
