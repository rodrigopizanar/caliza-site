"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/videos/video-hero08.mp4",  label: "R. DARÍO" },
  { src: "/videos/video-hero04.mp4",  label: "AVÁNDARO" },
  { src: "/videos/video-hero012.mp4", label: "TELCHAC PUERTO" },
  { src: "/videos/video-hero011.mp4", label: "TEMOZÓN" },
];

const COUNT        = slides.length;
const INTERVAL_MS  = 8000;
const CROSSFADE_MS = 900;
const LABEL_IN_MS  = 1600;
const LABEL_OUT_MS = 6400;

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

function getObjectPos(src: string) {
  if (src === "/videos/video-hero04.mp4") return "55% center";
  return "50% center";
}

export default function HeroSlider() {
  const [mounted,     setMounted]     = useState(false);
  const [current,     setCurrent]     = useState(0);
  const [covered,     setCovered]     = useState(true);   // solo carga inicial
  const [showLabel,   setShowLabel]   = useState(false);
  const [opacityA,    setOpacityA]    = useState(0);
  const [opacityB,    setOpacityB]    = useState(0);
  const [activeLayer, setActiveLayer] = useState<"A" | "B">("A");
  const [objectPosA,  setObjectPosA]  = useState(getObjectPos(slides[0].src));
  const [objectPosB,  setObjectPosB]  = useState("50% center");

  const videoARef      = useRef<HTMLVideoElement | null>(null);
  const videoBRef      = useRef<HTMLVideoElement | null>(null);
  const intervalRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentRef     = useRef(0);
  const activeLayerRef = useRef<"A" | "B">("A");
  const labelTimers    = useRef<ReturnType<typeof setTimeout>[]>([]);

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

  // ── Primer slide en Layer A ─────────────────────────────────────
  useEffect(() => {
    if (!mounted || !videoARef.current) return;
    const v = videoARef.current;
    v.src = slides[0].src;

    const reveal = () => {
      setOpacityA(1);
      setCovered(false);
      scheduleLabel();
    };
    v.addEventListener("playing", reveal, { once: true });

    // Reintento Safari cold start
    const retry = setTimeout(() => armAndPlay(v), 2000);
    v.addEventListener("playing", () => clearTimeout(retry), { once: true });

    armAndPlay(v);
    if (!v.paused && !v.ended && v.readyState > 2) {
      setOpacityA(1);
      setCovered(false);
      scheduleLabel();
    }

    return clearLabelTimers;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  // ── Avanzar slide — crossfade sin negro ────────────────────────
  const goTo = useCallback((next: number) => {
    setCurrent(next);
    currentRef.current = next;
    setShowLabel(false);
    clearLabelTimers();

    // Determinar qué layer es el "siguiente" (el que no está activo)
    const currentActive = activeLayerRef.current;
    const nextLayer     = currentActive === "A" ? "B" : "A";
    const nextRef       = nextLayer === "A" ? videoARef : videoBRef;

    const v = nextRef.current;
    if (!v) return;

    // Cargar nuevo video en el layer inactivo (aún invisible)
    v.src = slides[next].src;
    if (nextLayer === "A") setObjectPosA(getObjectPos(slides[next].src));
    else                   setObjectPosB(getObjectPos(slides[next].src));

    const startCrossfade = () => {
      // Ambas opacidades cambian en el mismo render → CSS anima simultáneamente
      if (nextLayer === "A") {
        setOpacityA(1);
        setOpacityB(0);
      } else {
        setOpacityB(1);
        setOpacityA(0);
      }
      setActiveLayer(nextLayer);
      activeLayerRef.current = nextLayer;
      scheduleLabel();
    };

    v.addEventListener("playing", startCrossfade, { once: true });

    // Reintento Safari
    const retry = setTimeout(() => armAndPlay(v), 2000);
    v.addEventListener("playing", () => clearTimeout(retry), { once: true });

    armAndPlay(v);
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

  const videoStyle = (opacity: number, objectPosition: string): React.CSSProperties => ({
    position:      "absolute",
    inset:         0,
    width:         "100%",
    height:        "100%",
    objectFit:     "cover",
    objectPosition,
    display:       "block",
    pointerEvents: "none",
    zIndex:        1,
    opacity,
    transition:    `opacity ${CROSSFADE_MS}ms ease`,
  });

  return (
    <>
      {/* Fondo negro base */}
      <div
        className="absolute inset-0"
        style={{ background: "#0c0c0c", zIndex: 0 }}
        aria-hidden="true"
      />

      {/* CSS para suprimir UI nativa WebKit */}
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

      {/* Layer A */}
      {mounted && (
        <video
          ref={videoARef}
          autoPlay muted loop playsInline preload="auto"
          controls={false} disablePictureInPicture disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          poster=""
          data-hero-video="true"
          tabIndex={-1} aria-hidden="true"
          style={videoStyle(opacityA, objectPosA)}
        />
      )}

      {/* Layer B */}
      {mounted && (
        <video
          ref={videoBRef}
          autoPlay muted loop playsInline preload="auto"
          controls={false} disablePictureInPicture disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          poster=""
          data-hero-video="true"
          tabIndex={-1} aria-hidden="true"
          style={videoStyle(opacityB, objectPosB)}
        />
      )}

      {/* Cubierta negra — SOLO durante carga inicial, no entre slides */}
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

      {/* Gradiente inferior */}
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

      {/* Label proyecto */}
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

      {/* Indicadores */}
      <div
        className="absolute left-1/2 flex items-center gap-[6px]"
        style={{ bottom: "3rem", transform: "translateX(-50%)", zIndex: 4 }}
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
