import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Contacto — Cāliza Studio",
  description: "Inicia un proyecto con CĀLIZA. Trabajamos con un número limitado de proyectos por año. La consulta inicial no tiene costo.",
};

export default function ContactoPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <section className="px-8 md:px-16 pt-32 pb-48" aria-label="Contacto">
          <div style={{ maxWidth: "680px" }}>
            <h1
              className="font-serif font-light leading-[1.05] tracking-[-0.015em]"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                color: "var(--texto-principal)",
              }}
            >
              Para iniciar
              <br />
              un proyecto.
            </h1>

            <p
              className="mt-8 font-light leading-[1.8]"
              style={{
                fontSize: "0.9375rem",
                maxWidth: "400px",
                color: "var(--texto-secundario)",
                letterSpacing: "0.02em",
              }}
            >
              Trabajamos con un número limitado de proyectos por año.
              La consulta inicial no tiene costo.
            </p>

            <div className="mt-16 flex flex-col" style={{ gap: "0.6rem" }}>
              <a
                href="mailto:info@calizastudio.com.mx"
                className="font-light transition-opacity hover:opacity-60"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--texto-principal)",
                  letterSpacing: "0.02em",
                }}
              >
                info@calizastudio.com.mx
              </a>
              <a
                href="tel:+525576681763"
                className="font-light transition-opacity hover:opacity-60"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--texto-principal)",
                  letterSpacing: "0.02em",
                }}
              >
                +52 5576681763
              </a>
              <p
                className="font-light"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--texto-tenue)",
                  letterSpacing: "0.02em",
                  marginTop: "0.4rem",
                }}
              >
                Mérida · Ciudad de México
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
