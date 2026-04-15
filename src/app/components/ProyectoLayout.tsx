"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "./SiteHeader"
import { SiteFooter } from "./SiteFooter"

type Imagen = { src: string; alt: string }

type Props = {
  titulo: string
  heroImage: string
  heroAlt: string
  descripcion: string
  imagenes: Imagen[]
}

export function ProyectoLayout({ titulo, heroImage, heroAlt, descripcion, imagenes }: Props) {
  const [indice, setIndice] = useState(0)
  const [visible, setVisible] = useState(true)

  function irA(i: number) {
    setVisible(false)
    setTimeout(() => {
      setIndice(i)
      setVisible(true)
    }, 200)
  }

  return (
    <>
      <SiteHeader mode="page" />

      <main>

        {/* ─── Hero ─────────────────────────────────────────────────── */}
        <section style={{ height: "70vh", overflow: "hidden" }}>
          <img
            src={heroImage}
            alt={heroAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </section>

        {/* ─── Project Name ─────────────────────────────────────────── */}
        <section className="px-8 md:px-16 pt-16 pb-12">
          <p
            style={{
              fontFamily: "var(--font-geist), sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--texto-tenue)",
              fontWeight: 300,
              marginBottom: "1rem",
            }}
          >
            Portafolio
          </p>
          <h1
            className="font-serif font-light"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--texto-principal)",
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              maxWidth: "600px",
            }}
          >
            {titulo}
          </h1>
        </section>

        {/* ─── Description ──────────────────────────────────────────── */}
        <section
          className="px-8 md:px-16"
          style={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
            borderTop: "1px solid var(--linea)",
          }}
        >
          <p
            className="font-light leading-[1.85]"
            style={{
              fontSize: "0.9375rem",
              color: "var(--texto-secundario)",
              letterSpacing: "0.02em",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {descripcion}
          </p>
        </section>

        {/* ─── Galería ──────────────────────────────────────────────── */}
        <section
          style={{ borderTop: "1px solid var(--linea)", paddingBottom: "4rem" }}
          aria-label="Galería del proyecto"
        >
          <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
            <img
              src={imagenes[indice].src}
              alt={imagenes[indice].alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
            />
          </div>

          {imagenes.length > 1 && (
            <div
              className="px-8 md:px-16"
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "1.5rem",
              }}
            >
              <button
                onClick={() => irA((indice - 1 + imagenes.length) % imagenes.length)}
                aria-label="Imagen anterior"
                style={{
                  fontFamily: "var(--font-geist), sans-serif",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--texto-tenue)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontWeight: 300,
                }}
              >
                ← Anterior
              </button>
              <button
                onClick={() => irA((indice + 1) % imagenes.length)}
                aria-label="Imagen siguiente"
                style={{
                  fontFamily: "var(--font-geist), sans-serif",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--texto-tenue)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  fontWeight: 300,
                }}
              >
                Siguiente →
              </button>
            </div>
          )}
        </section>

        {/* ─── Navegación de regreso ────────────────────────────────── */}
        <div
          className="px-8 md:px-16 pb-28"
          style={{ paddingTop: "2rem", borderTop: "1px solid var(--linea)" }}
        >
          <Link
            href="/proyectos"
            style={{
              fontFamily: "var(--font-geist), sans-serif",
              fontSize: "0.8125rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--texto-tenue)",
              textDecoration: "none",
              fontWeight: 300,
              transition: "color 0.3s ease",
            }}
          >
            ← Proyectos
          </Link>
        </div>

      </main>

      <SiteFooter />
    </>
  )
}
