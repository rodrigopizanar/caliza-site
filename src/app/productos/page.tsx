"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

const productos: {
  nombre: string;
  slug: string;
  imagen: string;
}[] = [
  { nombre: "Credenza Otoño",      slug: "credenza-otono",      imagen: "/images/Otoño-01.png"  },
  { nombre: "Mesa Albura",         slug: "mesa-albura",         imagen: "/images/Albura.png"    },
  { nombre: "Mesa Thalassa",       slug: "mesa-thalassa",       imagen: "/images/thalassa.png"  },
  { nombre: "Portavasos Véspero",  slug: "portavasos-vespero",  imagen: "/images/véspero.png"   },
  { nombre: "Mesa Sabana",         slug: "mesa-sabana",         imagen: "/images/Sabana-01..png"},
  { nombre: "Isla Cambria",        slug: "isla-cambria",        imagen: "/images/hero.jpg"      },
  { nombre: "Mesa Duna",           slug: "mesa-duna",           imagen: "/images/Duna.png"      },
  { nombre: "Credenza Bosque",     slug: "credenza-bosque",     imagen: "/images/Bosque.png"    },
  { nombre: "Mesa Agave",          slug: "mesa-agave",          imagen: "/images/Agave.png"     },
  { nombre: "Charola Nido",        slug: "charola-nido",        imagen: "/images/Nido.png"      },
  { nombre: "Mesa Hanami",         slug: "mesa-hanami",         imagen: "/images/Hanami.png"    },
  { nombre: "Mesa Remanso",        slug: "mesa-remanso",        imagen: "/images/Remanso.png"   },
  { nombre: "Mesa Ámbar",          slug: "mesa-ambar",          imagen: "/images/Ambar.png"     },
  { nombre: "Mesa Duramen",        slug: "mesa-duramen",        imagen: "/images/Duramen.png"   },
  { nombre: "Mesa Cauce",          slug: "mesa-cauce",          imagen: "/images/Cauce.png"     },
  { nombre: "Apartado Corteza",    slug: "apartado-corteza",    imagen: "/images/Corteza.png"   },
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

export default function ProductosPage() {
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

          .titulo-producto {
            display: block;
            text-decoration: none;
            background: none;
          }

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
            .productos-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* ─── Hero con video ───────────────────────────────────────── */}
        <section
          style={{ position: "relative", height: "32vh", overflow: "hidden" }}
          aria-label="Productos CĀLIZA"
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
            }}
          >
            <source src="/videos/video-hero014.mp4" type="video/mp4" />
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
              Colección
            </p>
            <h1
              className="font-serif"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, letterSpacing: "0.1em", color: "#fff", lineHeight: 1 }}
            >
              PRODUCTOS
            </h1>
          </div>
        </section>

        {/* ─── Pestaña "Regresar a inicio" ────────────────────────────── */}
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

        {/* ─── Productos en grid ────────────────────────────────────── */}
        <section
          className="px-8 md:px-16"
          style={{ paddingTop: "2rem", paddingBottom: "0" }}
          aria-label="Productos seleccionados"
        >
          <div
            className="productos-grid"
            style={{ maxWidth: "1200px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem 3rem" }}
          >
            {productos.map((p) => (
              <article key={p.slug} style={{ cursor: "default" }}>

                  <RevealBlock offsetY="40px">
                    <div style={{ aspectRatio: "3/2", overflow: "hidden" }}>
                      <img
                        src={p.imagen}
                        alt={p.nombre}
                        draggable={false}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", userSelect: "none" }}
                      />
                    </div>
                  </RevealBlock>

                  <RevealBlock offsetY="-18px" delay={180}>
                    <h2
                      className="font-serif font-light"
                      style={{
                        marginTop: "1.25rem",
                        fontSize: "clamp(1.125rem, 1.75vw, 1.5rem)",
                        color: "var(--texto-principal)",
                        letterSpacing: "-0.01em",
                        textDecoration: "none",
                      }}
                    >
                      {p.nombre}
                    </h2>
                  </RevealBlock>

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
