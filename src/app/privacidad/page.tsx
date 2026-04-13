import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de privacidad — Cāliza Studio",
  description: "Política de privacidad de CĀLIZA Studio.",
};

export default function PrivacidadPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <section
          className="px-8 md:px-16"
          style={{ paddingTop: "5rem", paddingBottom: "8rem", maxWidth: "720px" }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-geist), sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--texto-tenue)",
              fontWeight: 300,
              marginBottom: "1.5rem",
            }}
          >
            Legal
          </p>

          {/* Título */}
          <h1
            className="font-serif font-light"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: "var(--texto-principal)",
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              marginBottom: "3rem",
            }}
          >
            Política de privacidad
          </h1>

          {/* Nota temporal */}
          <div
            style={{
              paddingTop: "2.5rem",
              paddingBottom: "2.5rem",
              borderTop: "1px solid var(--linea)",
              borderBottom: "1px solid var(--linea)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-geist), sans-serif",
                fontSize: "0.9375rem",
                color: "var(--texto-tenue)",
                letterSpacing: "0.02em",
                fontWeight: 300,
                lineHeight: 1.85,
              }}
            >
              Esta política será publicada próximamente.
            </p>
            <p
              style={{
                fontFamily: "var(--font-geist), sans-serif",
                fontSize: "0.9375rem",
                color: "var(--texto-tenue)",
                letterSpacing: "0.02em",
                fontWeight: 300,
                lineHeight: 1.85,
                marginTop: "0.75rem",
              }}
            >
              Para cualquier consulta relacionada con el tratamiento de tus datos,
              escríbenos a{" "}
              <a
                href="mailto:info@caliza.studio"
                style={{
                  color: "var(--texto-secundario)",
                  textDecoration: "none",
                }}
              >
                info@caliza.studio
              </a>
              .
            </p>
          </div>

          {/* Volver */}
          <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--linea)" }}>
            <Link
              href="/"
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
              ← Inicio
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
