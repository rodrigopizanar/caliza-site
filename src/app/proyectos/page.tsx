"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const proyectos = [
  {
    nombre: "Club de Golf Bosques",
    slug: "club-de-golf-bosques",
    imagenes: ["/images/hero-01.png", "/images/bosques-01.png", "/images/hero-03.png"],
  },
  {
    nombre: "Zaguán 1105",
    slug: "zaguan-1105",
    imagenes: ["/images/zaguan-1105-01.jpg"],
  },
  {
    nombre: "Avándaro",
    slug: "avandaro",
    imagenes: ["/images/avandaro-01.png", "/images/avandaro-02.png"],
  },
  {
    nombre: "Telchac Puerto",
    slug: "telchac-puerto",
    imagenes: ["/images/telchac-03.png", "/images/telchac-04.png"],
  },
  {
    nombre: "R. Darío",
    slug: "r-dario",
    imagenes: ["/images/rdario-sala.png", "/images/rdario-com.png", "/images/rdario-rec.png"],
  },
  {
    nombre: "Temozón Norte",
    slug: "temozon-norte",
    imagenes: ["/images/temozon-ext.png", "/images/temozon-int.png"],
  },
];

function ProjectSlider({ imagenes, nombre }: { imagenes: string[]; nombre: string }) {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const next = () => setCurrent((c) => (c + 1) % imagenes.length);
  const prev = () => setCurrent((c) => (c - 1 + imagenes.length) % imagenes.length);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % imagenes.length);
    }, 4000);
    return () => clearInterval(id);
  }, [imagenes.length]);

  return (
    <div
      style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", cursor: "grab" }}
      onPointerDown={(e) => {
        isDragging.current = true;
        startX.current = e.clientX;
        (e.currentTarget as HTMLElement).style.cursor = "grabbing";
      }}
      onPointerUp={(e) => {
        if (!isDragging.current) return;
        isDragging.current = false;
        (e.currentTarget as HTMLElement).style.cursor = "grab";
        const delta = startX.current - e.clientX;
        if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
      }}
      onPointerLeave={(e) => {
        isDragging.current = false;
        (e.currentTarget as HTMLElement).style.cursor = "grab";
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          willChange: "transform",
        }}
      >
        {imagenes.map((src, i) => (
          <div key={i} style={{ minWidth: "100%", height: "100%" }}>
            <img
              src={src}
              alt={`${nombre} — imagen ${i + 1}`}
              draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", userSelect: "none" }}
            />
          </div>
        ))}
      </div>

      {imagenes.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.4rem",
            alignItems: "center",
          }}
        >
          {imagenes.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); setCurrent(i); }}
              aria-label={`Imagen ${i + 1}`}
              style={{
                width: i === current ? "1.25rem" : "0.3rem",
                height: "0.3rem",
                borderRadius: "9999px",
                background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function RevealBlock({
  children,
  offsetY = "40px",
  delay = 0,
}: {
  children: React.ReactNode;
  offsetY?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${offsetY})`,
        transition: `opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ProyectosPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <style>{`
          @keyframes slideFromLeft {
            0%   { transform: translateX(-130%); opacity: 0; }
            100% { transform: translateX(0);     opacity: 1; }
          }
          .tab-regresar-anim { animation: slideFromLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both; }
          .tab-regresar { background: var(--fondo); }
          .tab-regresar:hover { background: rgba(110,115,102,0.18); border-color: rgba(110,115,102,0.7); }
          .tab-regresar:focus-visible { outline: none; box-shadow: 0 0 0 1.5px #6E7366; }

          .titulo-proyecto {
            display: inline;
            background-image: linear-gradient(currentColor, currentColor);
            background-repeat: no-repeat;
            background-size: 0% 1px;
            background-position: 0 100%;
            padding-bottom: 2px;
            transition: background-size 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          a:hover .titulo-proyecto { background-size: 100% 1px; }

          .back-top-btn {
            background: none;
            border: none;
            cursor: pointer;
            font-family: var(--font-geist), sans-serif;
            font-size: 0.8125rem;
            font-weight: 300;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--texto-tenue);
            padding: 0;
            transition: color 0.3s ease;
          }
          .back-top-btn:hover { color: var(--texto-principal); }

          @media (max-width: 768px) {
            .proyectos-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* ─── Hero con video ───────────────────────────────────────── */}
        <section
          style={{ position: "relative", height: "32vh", overflow: "hidden" }}
          aria-label="Proyectos CĀLIZA"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 65%",
              filter: "grayscale(1) contrast(1.08) brightness(0.95)",
            }}
          >
            <source src="/videos/video-hero01.mp4" type="video/mp4" />
          </video>

          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)" }} aria-hidden="true" />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 2rem 2.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-geist), sans-serif",
                fontSize: "0.6875rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.48)",
                fontWeight: 300,
                marginBottom: "0.5rem",
              }}
            >
              Portafolio
            </p>
            <h1
              className="font-serif"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, letterSpacing: "0.1em", color: "#fff", lineHeight: 1 }}
            >
              PROYECTOS
            </h1>
          </div>
        </section>

        {/* ─── Pestaña "Regresar a inicio" — estática, alineada a la derecha ── */}
        <div
          className="px-8 md:px-16"
          style={{ paddingTop: "1.25rem", paddingBottom: "1.5rem", display: "flex", justifyContent: "flex-end" }}
        >
          <div
            className="tab-regresar-anim"
            style={{ display: "inline-flex", flexDirection: "column", gap: "0.875rem", minWidth: "200px" }}
          >
            <div style={{ height: "1px", background: "#6E7366", opacity: 0.45 }} />
            <div style={{ paddingLeft: "0.25rem" }}>
              <Link
                href="/"
                className="tab-regresar inline-flex items-center justify-center rounded-full font-light transition-all duration-300 ease-out"
                style={{
                  border: "1px solid rgba(110,115,102,0.45)",
                  padding: "0.6rem 1.5rem",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--texto-principal)",
                  fontFamily: "var(--font-geist), sans-serif",
                  textDecoration: "none",
                }}
              >
                Regresar a inicio
              </Link>
            </div>
            <div style={{ height: "1px", background: "#6E7366", opacity: 0.45 }} />
          </div>
        </div>

        {/* ─── Proyectos en columna ─────────────────────────────────── */}
        <section
          className="px-8 md:px-16"
          style={{ paddingTop: "2rem", paddingBottom: "0" }}
          aria-label="Proyectos seleccionados"
        >
          <div className="proyectos-grid" style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem 3rem" }}>
            {proyectos.map((p) => (
              <article key={p.slug}>
                <Link href={`/proyectos/${p.slug}`} style={{ display: "block", textDecoration: "none" }}>

                  <RevealBlock offsetY="40px">
                    <div
                      style={{ transition: "opacity 0.4s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.87")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <ProjectSlider imagenes={p.imagenes} nombre={p.nombre} />
                    </div>
                  </RevealBlock>

                  <RevealBlock offsetY="-18px" delay={180}>
                    <h2
                      className="font-serif font-light titulo-proyecto"
                      style={{
                        display: "block",
                        marginTop: "1.25rem",
                        fontSize: "clamp(1.125rem, 1.75vw, 1.5rem)",
                        color: "var(--texto-principal)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.nombre}
                    </h2>
                  </RevealBlock>

                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ─── Cierre editorial — Back to top ───────────────────────── */}
        <div
          className="px-8 md:px-16"
          style={{
            paddingTop: "8rem",
            paddingBottom: "6rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="back-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Regresar al inicio de la página"
          >
            Back to top
          </button>
        </div>

      </main>

      <SiteFooter />
    </>
  );
}
