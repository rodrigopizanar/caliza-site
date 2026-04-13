"use client";

import { useEffect, useRef, useState } from "react";

// ── Slides ────────────────────────────────────────────────────────
const slides = [
  { src: "/videos/video-hero08.mp4",  label: "R. DARÍO"       },
  { src: "/videos/video-hero04.mp4",  label: "AVÁNDARO"       },
  { src: "/videos/video-hero012.mp4", label: "TELCHAC PUERTO" },
  { src: "/videos/video-hero011.mp4", label: "TEMOZÓN"        },
];

const N       = slides.length;
const FADE_MS = 700;

function getObjectPos(src: string) {
  return src === "/videos/video-hero04.mp4" ? "55% center" : "50% center";
}

// ── Prepara un <video> para autoplay seguro en WebKit/Safari ──────
function arm(v: HTMLVideoElement) {
  v.muted            = true;
  v.defaultMuted     = true;
  v.playsInline      = true;
  v.loop             = false;   // sin loop — usamos `ended`
  v.controls         = false;
  v.autoplay         = true;
  v.removeAttribute("controls");
  v.setAttribute("muted",                 "");
  v.setAttribute("playsinline",           "");
  v.setAttribute("autoplay",              "");
  v.setAttribute("webkit-playsinline",    "true");
  v.setAttribute("x-webkit-airplay",      "deny");
  v.setAttribute("disableremoteplayback", "");
  v.setAttribute("data-hero-video",       "true");
}

// ── Carga y reproduce un video; llama `onPlaying` cuando arranca ──
function startVideo(
  v: HTMLVideoElement,
  src: string,
  onPlaying: () => void,
) {
  arm(v);
  v.src = src;

  // `playing` = primer frame renderizado → crossfade seguro
  const onP = () => { v.removeEventListener("playing", onP); onPlaying(); };
  v.addEventListener("playing", onP);

  // Retry Safari: si playing no disparó en 2 s, intentar de nuevo
  const retry = setTimeout(() => v.play().catch(() => {}), 2000);
  v.addEventListener("playing", () => clearTimeout(retry), { once: true });

  v.load();
  v.play().catch(() => {});
}

// ─────────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [mounted,   setMounted]   = useState(false);
  const [current,   setCurrent]   = useState(0);
  const [opA,       setOpA]       = useState(0);
  const [opB,       setOpB]       = useState(0);
  const [objPosA,   setObjPosA]   = useState(getObjectPos(slides[0].src));
  const [objPosB,   setObjPosB]   = useState("50% center");
  const [covered,   setCovered]   = useState(true);
  const [showLabel, setShowLabel] = useState(false);

  const vA       = useRef<HTMLVideoElement | null>(null);
  const vB       = useRef<HTMLVideoElement | null>(null);
  const idxRef   = useRef(0);          // slide actualmente activo
  const layerRef = useRef<"A" | "B">("A");
  const busyRef  = useRef(false);      // protección contra doble-avance
  const lblTmrs  = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearLbls = () => {
    lblTmrs.current.forEach(clearTimeout);
    lblTmrs.current = [];
  };

  const fireLabel = () => {
    clearLbls();
    setShowLabel(false);
    lblTmrs.current = [
      setTimeout(() => setShowLabel(true),  1600),
      setTimeout(() => setShowLabel(false), 6400),
    ];
  };

  useEffect(() => { setMounted(true); }, []);

  // ── Avanzar al siguiente slide ──────────────────────────────────
  // Se llama desde el evento `ended` del video activo.
  // Usa `busyRef` para que nunca se dispare dos veces en paralelo.
  const advanceRef = useRef<() => void>(() => {});

  useEffect(() => {
    advanceRef.current = () => {
      if (busyRef.current) return;
      busyRef.current = true;

      const nextIdx   = (idxRef.current + 1) % N;
      const curLayer  = layerRef.current;
      const nextLayer = curLayer === "A" ? "B" : "A";
      const nextV     = (nextLayer === "A" ? vA : vB).current;
      const curV      = (curLayer  === "A" ? vA : vB).current;

      if (!nextV) { busyRef.current = false; return; }

      // objectPosition correcta antes de que el layer sea visible
      if (nextLayer === "A") setObjPosA(getObjectPos(slides[nextIdx].src));
      else                   setObjPosB(getObjectPos(slides[nextIdx].src));

      setCurrent(nextIdx);
      setShowLabel(false);
      clearLbls();

      startVideo(nextV, slides[nextIdx].src, () => {
        // El siguiente video está reproduciendo → crossfade simultáneo
        if (nextLayer === "A") { setOpA(1); setOpB(0); }
        else                   { setOpB(1); setOpA(0); }
        layerRef.current = nextLayer;
        idxRef.current   = nextIdx;
        fireLabel();
        busyRef.current  = false;

        // Precargar el slide posterior en el layer ahora saliente
        // (usa toda la duración del clip actual para buffear el siguiente)
        if (curV) {
          const preIdx = (nextIdx + 1) % N;
          arm(curV);
          curV.autoplay = false;          // preload only — no autoplay
          curV.removeAttribute("autoplay");
          curV.src     = slides[preIdx].src;
          curV.preload = "auto";
          curV.load();
        }

        // Escuchar `ended` en el nuevo video activo
        // + `timeupdate` como fallback (algunos WebKit no disparan `ended` sin audio)
        let done = false;
        const go = () => {
          if (done) return;
          done = true;
          nextV.removeEventListener("timeupdate", onTU);
          advanceRef.current();
        };
        const onTU = () => {
          if (nextV.duration && nextV.currentTime >= nextV.duration - 0.15) go();
        };
        nextV.addEventListener("ended",      go,   { once: true });
        nextV.addEventListener("timeupdate", onTU);
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);   // se define una sola vez; accede a todo por refs

  // ── Carga inicial: slide 0 en layer A ───────────────────────────
  useEffect(() => {
    if (!mounted || !vA.current || !vB.current) return;
    const v  = vA.current;
    const vb = vB.current;

    setObjPosA(getObjectPos(slides[0].src));

    startVideo(v, slides[0].src, () => {
      idxRef.current   = 0;
      layerRef.current = "A";
      setOpA(1);
      setCovered(false);
      fireLabel();

      // Precargar slide 1 en layer B
      arm(vb);
      vb.autoplay = false;
      vb.removeAttribute("autoplay");
      vb.src     = slides[1].src;
      vb.preload = "auto";
      vb.load();

      // Arrancar la cadena cuando slide 0 termine
      let done = false;
      const go = () => {
        if (done) return;
        done = true;
        v.removeEventListener("timeupdate", onTU);
        advanceRef.current();
      };
      const onTU = () => {
        if (v.duration && v.currentTime >= v.duration - 0.15) go();
      };
      v.addEventListener("ended",      go,   { once: true });
      v.addEventListener("timeupdate", onTU);
    });

    return () => clearLbls();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const vStyle = (op: number, pos: string): React.CSSProperties => ({
    position:       "absolute",
    inset:          0,
    width:          "100%",
    height:         "100%",
    objectFit:      "cover",
    objectPosition: pos,
    display:        "block",
    pointerEvents:  "none",
    zIndex:         1,
    opacity:        op,
    transition:     `opacity ${FADE_MS}ms ease`,
  });

  return (
    <>
      {/* Suprimir UI WebKit */}
      <style>{`
        video[data-hero-video="true"] { background: #0c0c0c; }
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

      {/* Fondo base negro */}
      <div className="absolute inset-0" style={{ background: "#0c0c0c", zIndex: 0 }} aria-hidden="true" />

      {/* Layer A */}
      {mounted && (
        <video
          ref={vA}
          muted playsInline preload="auto"
          controls={false} disablePictureInPicture disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          poster="" data-hero-video="true" tabIndex={-1} aria-hidden="true"
          style={vStyle(opA, objPosA)}
        />
      )}

      {/* Layer B */}
      {mounted && (
        <video
          ref={vB}
          muted playsInline preload="auto"
          controls={false} disablePictureInPicture disableRemotePlayback
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          poster="" data-hero-video="true" tabIndex={-1} aria-hidden="true"
          style={vStyle(opB, objPosB)}
        />
      )}

      {/* Cubierta negra — solo carga inicial */}
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
      <div className="absolute left-8 md:left-16" style={{ bottom: "3.25rem", zIndex: 4 }}>
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
            pointerEvents: "none",
            opacity:       showLabel ? 1 : 0,
            transform:     showLabel ? "translateY(0)" : "translateY(5px)",
            transition:    "opacity 600ms ease-out, transform 600ms ease-out",
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
