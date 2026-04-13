import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Media Center Sámara — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
};

export default function MediaCenterSamaraPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>

        {/* ─── Hero ─────────────────────────────────────────────────── */}
        <section style={{ position: "relative", height: "62vh", overflow: "hidden" }}>
          <img
            src="/images/hero-03.png"
            alt="Media Center Sámara"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.22)" }}
            aria-hidden="true"
          />
        </section>

        {/* ─── Encabezado ───────────────────────────────────────────── */}
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
            Media Center Sámara
          </h1>

          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--linea)",
              maxWidth: "520px",
            }}
          >
            <p
              className="font-light leading-[1.85]"
              style={{
                fontSize: "0.9375rem",
                color: "var(--texto-secundario)",
                letterSpacing: "0.02em",
              }}
            >
              Un espacio diseñado con intención y rigor material. Cada decisión responde al contexto, la proporción y la permanencia del lugar.
            </p>
          </div>
        </section>

        {/* ─── Galería ──────────────────────────────────────────────── */}
        <section className="px-8 md:px-16 pb-16" aria-label="Galería del proyecto">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "900px" }}>
            <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
              <img
                src="/images/Baño.jpg"
                alt="Media Center Sámara — espacio interior"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
              <img
                src="/images/hero-06.png"
                alt="Media Center Sámara — detalle"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* ─── Secciones futuras (estructura preparada) ─────────────── */}
        <section
          className="px-8 md:px-16 py-16"
          style={{ borderTop: "1px solid var(--linea)" }}
          aria-label="Próximamente"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              maxWidth: "720px",
            }}
          >
            {["Descripción", "Materiales", "Proceso"].map((label) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "var(--font-geist), sans-serif",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--texto-tenue)",
                    fontWeight: 300,
                    marginBottom: "0.75rem",
                  }}
                >
                  {label}
                </p>
                <div style={{ height: "1px", background: "var(--linea)", width: "100%" }} />
              </div>
            ))}
          </div>
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
            }}
          >
            ← Proyectos
          </Link>
        </div>

      </main>

      <SiteFooter />
    </>
  );
}
