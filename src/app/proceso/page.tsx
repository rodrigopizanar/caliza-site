"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const bloques = [
  {
    heading: "PROYECTAR",
    desc: "Definimos dirección, proporción y material.",
    imagen: "/images/proyectar-01.png",
  },
  {
    heading: "COMPONER",
    desc: "Seleccionamos materiales, uniones y acabados en armonía con el espacio.",
    imagen: "/images/componer-01.png",
  },
  {
    heading: "EJECUTAR",
    desc: "Llevamos la propuesta a fabricación e implementación de cada elemento con control de detalle.",
    imagen: "/images/proceso-02.png",
  },
];

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

export default function ProcesoPage() {
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

          .proceso-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          @media (min-width: 768px) {
            .proceso-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 0;
            }
          }
        `}</style>

        {/* ─── Hero con video ───────────────────────────────────────── */}
        <section
          style={{ position: "relative", height: "32vh", overflow: "hidden" }}
          aria-label="Proceso CĀLIZA"
        >
          <video
            autoPlay muted loop playsInline
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
            <source src="/videos/video-hero016.mp4" type="video/mp4" />
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
              Metodología
            </p>
            <h1
              className="font-serif"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, letterSpacing: "0.1em", color: "#fff", lineHeight: 1 }}
            >
              PROCESO
            </h1>
          </div>
        </section>

        {/* ─── Pestaña "Regresar a inicio" ─────────────────────────── */}
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

        {/* ─── Contenido principal ─────────────────────────────────── */}
        <section
          className="px-8 md:px-16"
          style={{ paddingTop: "1.5rem", paddingBottom: "0" }}
          aria-label="Proceso de trabajo"
        >

          {/* Título + subtítulo + intro */}
          <RevealBlock offsetY="30px" delay={0}>
            <div style={{ maxWidth: "720px", marginBottom: "5rem" }}>
              <h2
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  letterSpacing: "0.1em",
                  color: "var(--texto-principal)",
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                }}
              >
                DEL ESTUDIO A TU HOGAR
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist), sans-serif",
                  fontSize: "0.9375rem",
                  letterSpacing: "0.06em",
                  color: "var(--texto-tenue)",
                  fontWeight: 300,
                  marginBottom: "2rem",
                }}
              >
                Del criterio a la ejecución.
              </p>
              <p
                className="font-light"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--texto-secundario)",
                  letterSpacing: "0.02em",
                  lineHeight: 1.8,
                  maxWidth: "520px",
                }}
              >
                Cada proyecto se desarrolla a partir de una lectura precisa del espacio,
                la materia y su forma de habitarse. Diseñamos, definimos y ejecutamos con continuidad.
              </p>
            </div>
          </RevealBlock>

          {/* Divisor */}
          <RevealBlock offsetY="20px" delay={100}>
            <div style={{ height: "1px", background: "var(--linea)", marginBottom: "0" }} />
          </RevealBlock>

          {/* Tres bloques */}
          <RevealBlock offsetY="30px" delay={180}>
            <div className="proceso-grid">
              {bloques.map((b, i) => (
                <div
                  key={b.heading}
                  style={{
                    padding: "3rem 0",
                    paddingRight: i < 2 ? "3rem" : "0",
                    borderRight: i < 2 ? "1px solid var(--linea)" : "none",
                    paddingLeft: i > 0 ? "3rem" : "0",
                  }}
                >
                  {/* Contenedor de imagen — altura fija uniforme */}
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      overflow: "hidden",
                      marginBottom: "1.75rem",
                      background: "var(--superficie)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={b.imagen}
                      alt={b.heading}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-geist), sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--texto-principal)",
                      fontWeight: 300,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {b.heading}
                  </p>
                  <p
                    className="font-light"
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--texto-secundario)",
                      letterSpacing: "0.02em",
                      lineHeight: 1.75,
                    }}
                  >
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </RevealBlock>

          {/* Divisor */}
          <div style={{ height: "1px", background: "var(--linea)" }} />

          {/* Cierre */}
          <RevealBlock offsetY="20px" delay={0}>
            <div
              style={{
                paddingTop: "5rem",
                paddingBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <p
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  letterSpacing: "0.12em",
                  color: "var(--texto-principal)",
                  lineHeight: 1,
                }}
              >
                CĀLIZA
              </p>
              <p
                style={{
                  fontFamily: "var(--font-geist), sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--texto-tenue)",
                  letterSpacing: "0.04em",
                  fontWeight: 300,
                }}
              >
                Un estudio, de principio a fin.
              </p>
            </div>
          </RevealBlock>

        </section>

        {/* ─── Cierre editorial — Back to top ───────────────────────── */}
        <div
          className="px-8 md:px-16"
          style={{ paddingTop: "6rem", paddingBottom: "6rem", display: "flex", justifyContent: "flex-end" }}
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
