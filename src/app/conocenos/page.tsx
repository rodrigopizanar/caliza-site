"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const pilares = [
  {
    n: "—",
    title: "No separamos diseño de ejecución",
    desc: "Cada proyecto pasa por una misma mano — desde el primer estudio de material hasta la última visita de obra. No hay modelo de traspaso.",
  },
  {
    n: "—",
    title: "La piedra se selecciona en cantera",
    desc: "La carpintería se prototipa antes de especificarse. La iluminación se decide junto con la arquitectura.",
  },
  {
    n: "—",
    title: "Trabajamos con un número limitado de proyectos",
    desc: "Porque es la única forma de hacer espacios que se sientan inevitables.",
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

export default function ConocenosPage() {
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
        `}</style>

        {/* ─── Hero con video ───────────────────────────────────────── */}
        <section
          style={{ position: "relative", height: "32vh", overflow: "hidden" }}
          aria-label="Conócenos — CĀLIZA"
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
            <source src="/videos/video-hero07.mp4" type="video/mp4" />
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
              Estudio
            </p>
            <h1
              className="font-serif"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, letterSpacing: "0.1em", color: "#fff", lineHeight: 1 }}
            >
              CONÓCENOS
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

        {/* ─── Contenido del estudio ───────────────────────────────── */}
        <section
          className="px-8 md:px-16"
          style={{ paddingTop: "2rem", paddingBottom: "0" }}
          aria-label="El estudio"
        >
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "5rem" }}>

            {/* Manifiesto */}
            <RevealBlock offsetY="30px" delay={0}>
              <p
                className="font-serif font-light"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  color: "var(--texto-principal)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                No elegimos materiales
                <br />
                por cómo se ven.
                <br />
                Los elegimos por cómo envejecen.
              </p>
            </RevealBlock>

            {/* Pilares */}
            {pilares.map((p, i) => (
              <RevealBlock key={i} offsetY="40px" delay={i * 80}>
                <article>
                  <div style={{ height: "1px", background: "var(--linea)", marginBottom: "1.75rem" }} />
                  <h2
                    className="font-serif font-light"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      color: "var(--texto-principal)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                      marginBottom: "1rem",
                    }}
                  >
                    {p.title}
                  </h2>
                  <p
                    className="font-light"
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--texto-secundario)",
                      letterSpacing: "0.02em",
                      lineHeight: 1.8,
                      maxWidth: "480px",
                    }}
                  >
                    {p.desc}
                  </p>
                </article>
              </RevealBlock>
            ))}

            {/* Testimonio */}
            <RevealBlock offsetY="30px" delay={0}>
              <blockquote style={{ borderLeft: "1px solid var(--acento)", paddingLeft: "1.75rem" }}>
                <p
                  className="font-serif font-light italic"
                  style={{
                    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                    color: "var(--texto-principal)",
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;El espacio no se siente diseñado. Se siente descubierto —
                  como si siempre hubiera estado esperando existir.&rdquo;
                </p>
                <footer style={{ marginTop: "1rem" }}>
                  <cite
                    className="not-italic font-light"
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--texto-tenue)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    — R. Fernández, cliente residencial
                  </cite>
                </footer>
              </blockquote>
            </RevealBlock>

          </div>
        </section>

        {/* ─── Cierre editorial — Back to top ───────────────────────── */}
        <div
          className="px-8 md:px-16"
          style={{ paddingTop: "8rem", paddingBottom: "6rem", display: "flex", justifyContent: "flex-end" }}
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
