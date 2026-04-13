import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Términos y condiciones — Cāliza Studio",
  description: "Términos y condiciones de uso de CĀLIZA Studio.",
};

export default function TerminosPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <section className="px-8 md:px-16 pt-20 pb-40" style={{ maxWidth: "680px" }}>
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
            Legal
          </p>

          <h1
            className="font-serif font-light"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "var(--texto-principal)",
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              marginBottom: "3rem",
            }}
          >
            Términos y condiciones
          </h1>

          <div
            className="font-light leading-[1.85]"
            style={{
              fontSize: "0.9375rem",
              color: "var(--texto-secundario)",
              letterSpacing: "0.02em",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <p>
              El uso de este sitio web implica la aceptación de los presentes términos y condiciones. CĀLIZA Studio se reserva el derecho de modificar este documento en cualquier momento.
            </p>
            <p>
              Todo el contenido publicado en este sitio — incluyendo textos, imágenes, renders y diseños — es propiedad intelectual de CĀLIZA Studio y no puede ser reproducido sin autorización expresa.
            </p>
            <p>
              Este sitio es de carácter informativo. Para cualquier consulta relacionada con nuestros servicios, contacta directamente a través de los canales indicados en la sección de contacto.
            </p>
          </div>

          <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--linea)" }}>
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
