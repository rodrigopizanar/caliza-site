"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/videos/video-hero08.mp4",  label: "R. DARÍO" },
  { src: "/videos/video-hero04.mp4",  label: "AVÁNDARO" },
  { src: "/videos/video-hero010.mp4", label: "TEMOZÓN" },
  { src: "/videos/video-hero011.mp4", label: "TELCHAC PUERTO" },
];

const COUNT         = slides.length;
const INTERVAL_MS   = 8000;
const LABEL_IN_MS   = 1600;
const LABEL_OUT_MS  = 6400;

function armAndPlay(video: HTMLVideoElement) {
  video.muted            = true;
  video.defaultMuted     = true;
  video.playsInline      = true;
  video.autoplay         = true;
  video.loop             = true;
  video.controls         = false;
  video.removeAttribute("controls");
  video.setAttribute("muted",                 "");
  video.setAttribute("playsinline",           "");
  video.setAttribute("autoplay",              "");
  video.setAttribute("webkit-playsinline",    "true");
  video.setAttribute("x-webkit-airplay",      "deny");
  video.setAttribute("disableremoteplayback", "");
  video.setAttribute("data-hero-video",       "true");
  const p = video.play();
  if (p !== undefined) p.catch(() => {});
}

export default function HeroSlider() {
  const [mounted,   setMounted]   = useState(false);
  const [current,   setCurrent]   = useState(0);
  const [covered,   setCovered]   = useState(true);
  const [showLabel, setShowLabel] = useState(false);

  const videoRef    = useRef<HTMLVideoElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef  = useRef(0);
  const labelTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearLabelTimers = () => {
    labelTimers.current.forEach(clearTimeout);
    labelTimers.current = [];
  };

  const scheduleLabel = () => {
    clearLabelTimers();
    setShowLabel(false);
    const t1 = setTimeout(() => setShowLabel(true),  LABEL_IN_MS);
    const t2 = setTimeout(() => setShowLabel(false), LABEL_OUT_MS);
    labelTimers.current = [t1, t2];
  };

  // ── Solo en cliente ─────────────────────────────────────────────
  useEffect(() => { setMounted(true); }, []);

  // ── Primer slide ────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted || !videoRef.current) return;
    const v = videoRef.current;

    const reveal = () => { setCovered(false); scheduleLabel(); };
    v.addEventListener("playing", reveal, { once: true });

    // Reintento para Safari/iPhone (cold start)
    const retry = setTimeout(() => armAndPlay(v), 2000);
    v.addEventListener("playing", () => clearTimeout(retry), { once: true });

    armAndPlay(v);
    if (!v.paused && !v.ended && v.readyState > 2) { setCovered(false); scheduleLabel(); }

    return clearLabelTimers;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // ── Avanzar slide ───────────────────────────────────────────────
  const goTo = useCallback((next: number) => {
    setCurrent(next);
    currentRef.current = next;
    setCovered(true);
    setShowLabel(false);
    clearLabelTimers();

    setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      v.pause();
      v.src = slides[next].src;

      const reveal = () => { setCovered(false); scheduleLabel(); };
      v.addEventListener("playing", reveal, { once: true });

      const retry = setTimeout(() => armAndPlay(v), 2000);
      v.addEventListener("playing", () => clearTimeout(retry), { once: true });

      armAndPlay(v);
    }, 160);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Auto-avance ─────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted) return;
    intervalRef.current = setInterval(
      () => goTo((currentRef.current + 1) % COUNT),
      INTERVAL_MS
    );
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [mounted, goTo]);

  return (
    <>
      {/* Fondo negro base */}
      <div
        className="absolute inset-0"
        style={{ background: "#0c0c0c", zIndex: 0 }}
        aria-hidden="true"
      />

      {/* CSS específico para suprimir UI nativa WebKit en este video */}
      <style>{`
        video[data-hero-video="true"] {
          background: #0c0c0c;
        }
        video[data-hero-video="true"]::-webkit-media-controls,
        video[data-hero-video="true"]::-webkit-media-controls-enclosure,
        video[data-hero-video="true"]::-webkit-media-controls-panel,
        video[data-hero-video="true"]::-webkit-media-controls-start-playback-button,
        video[data-hero-video="true"]::-webkit-media-controls-play-button {
          display: none !important;
          -webkit-appearance: none !important;
          appearance: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* Video único — solo cliente */}
      {mounted && (
        <video
          ref={videoRef}
          src={slides[0].src}
          autoPlay muted loop playsInline preload="auto"
          controls={false} disablePictureInPicture disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          poster=""
          data-hero-video="true"
          tabIndex={-1} aria-hidden="true"
          style={{
            position:      "absolute",
            inset:         0,
            width:         "100%",
            height:        "100%",
            objectFit:     "cover",
            display:       "block",
            pointerEvents: "none",
            zIndex:        1,
            opacity:       covered ? 0 : 1,
            visibility:    covered ? "hidden" : "visible",
          }}
        />
      )}

      {/* Cubierta negra: tapa el video hasta que "playing" confirme reproducción real.
          Evita que Safari muestre el ícono nativo de play durante la carga. */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "#0c0c0c",
          zIndex:        2,
          pointerEvents: "none",
          opacity:       covered ? 1 : 0,
          transition:    covered ? "none" : "opacity 1100ms ease",
        }}
      />

      {/* Gradiente inferior — legibilidad de caption, Foster-style */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "linear-gradient(to top, rgba(0,0,0,0.48) 0%, transparent 36%)",
          zIndex:        3,
          pointerEvents: "none",
        }}
      />

      {/* Label proyecto — misma estética que etiquetas editoriales inferiores */}
      <div
        className="absolute left-8 md:left-16"
        style={{ bottom: "3.25rem", zIndex: 4 }}
      >
        <span
          className="inline-block rounded-full backdrop-blur-sm font-light"
          style={{
            background:    "rgba(110,115,102,0.38)",
            border:        "1px solid rgba(255,255,255,0.20)",
            padding:       "0.7rem 1.8rem",
            fontSize:      "0.9rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color:         "#fff",
            fontFamily:    "var(--font-geist), sans-serif",
            fontWeight:    300,
            opacity:       showLabel ? 1 : 0,
            transform:     showLabel ? "translateY(0)" : "translateY(5px)",
            transition:    "opacity 600ms ease-out, transform 600ms ease-out",
            pointerEvents: "none",
          }}
        >
          {slides[current]?.label ?? ""}
        </span>
      </div>

      {/* Contador — bottom-right, Foster signature */}
      <div
        className="absolute right-8 md:right-16"
        style={{ bottom: "3.25rem", zIndex: 4 }}
      >
        <span
          style={{
            display:       "block",
            fontFamily:    "var(--font-geist), sans-serif",
            fontSize:      "0.625rem",
            letterSpacing: "0.2em",
            color:         "rgba(255,255,255,0.28)",
            fontWeight:    300,
            opacity:       covered ? 0 : 1,
            transition:    "opacity 800ms ease-out",
            pointerEvents: "none",
          }}
        >
          {String(current + 1).padStart(2, "0")} — {String(COUNT).padStart(2, "0")}
        </span>
      </div>

      {/* Indicadores — líneas horizontales, bottom-center */}
      <div
        className="absolute left-1/2 flex items-center gap-[6px]"
        style={{
          bottom:    "3rem",
          transform: "translateX(-50%)",
          zIndex:    4,
        }}
        aria-hidden="true"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (intervalRef.current) clearInterval(intervalRef.current);
              goTo(i);
              intervalRef.current = setInterval(
                () => goTo((currentRef.current + 1) % COUNT),
                INTERVAL_MS
              );
            }}
            aria-label={`Slide ${i + 1}`}
            style={{
              display:    "block",
              height:     "1px",
              width:      i === current ? "24px" : "6px",
              background: i === current ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.22)",
              border:     "none",
              padding:    0,
              cursor:     "pointer",
              transition: "width 700ms cubic-bezier(0.77,0,0.18,1), background 400ms ease",
            }}
          />
        ))}
      </div>
    </>
  );
}
