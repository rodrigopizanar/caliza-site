import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Estudio — Cāliza Studio",
  description: "CĀLIZA no separa diseño de ejecución. Un estudio de principio a fin.",
};

export default function EstudioPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        {/* ─── Manifiesto ─────────────────────────────────────────── */}
        <section className="px-8 md:px-16 py-40 md:py-56" aria-label="Filosofía del estudio">
          <div style={{ maxWidth: "680px" }}>
            <h1
              className="font-serif font-light leading-[1.05] tracking-[-0.015em]"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                color: "var(--texto-principal)",
              }}
            >
              No elegimos materiales
              <br />
              por cómo se ven.
              <br />
              Los elegimos por cómo envejecen.
            </h1>

            <p
              className="mt-10 font-light leading-[1.9]"
              style={{
                fontSize: "0.9375rem",
                maxWidth: "420px",
                color: "var(--texto-secundario)",
                letterSpacing: "0.02em",
              }}
            >
              cantera. prototipo. iluminación integrada.
              <br />
              no hay abstracción. todo es verificable.
            </p>
          </div>
        </section>

        {/* ─── Estudio ────────────────────────────────────────────── */}
        <section className="px-8 md:px-16 py-32 md:py-40" aria-label="El estudio">
          <div className="max-w-6xl">
            <div className="md:grid md:grid-cols-12 gap-16">
              <div className="md:col-span-3 mb-10 md:mb-0">
                <p
                  className="font-light"
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--texto-tenue)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Estudio
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-5">
                <p
                  className="font-serif font-light leading-[1.25]"
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    color: "var(--texto-principal)",
                  }}
                >
                  No separamos diseño de ejecución. Cada proyecto pasa por una
                  misma mano — desde el primer estudio de material hasta la
                  última visita de obra. No hay modelo de traspaso.
                </p>
                <p
                  className="mt-8 font-light leading-[1.8]"
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--texto-secundario)",
                    letterSpacing: "0.02em",
                  }}
                >
                  La piedra se selecciona en cantera. La carpintería se prototipa
                  antes de especificarse. La iluminación se decide junto con la
                  arquitectura. Trabajamos así porque es la única forma de hacer
                  espacios que se sientan inevitables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonio ─────────────────────────────────────────── */}
        <section className="px-8 md:px-16 py-32 md:py-40" aria-label="Testimonio">
          <div style={{ maxWidth: "780px" }}>
            <blockquote>
              <p
                className="font-serif font-light leading-[1.25] italic"
                style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                  color: "var(--texto-principal)",
                }}
              >
                &ldquo;El espacio no se siente diseñado. Se siente descubierto —
                como si siempre hubiera estado esperando existir.&rdquo;
              </p>
              <footer className="mt-8">
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
