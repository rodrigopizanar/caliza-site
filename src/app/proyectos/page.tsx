import type { Metadata } from "next";
import { proyectos } from "../data/projects";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Proyectos — Cāliza Studio",
  description: "Proyectos seleccionados de CĀLIZA: arquitectura interior, interiorismo y mobiliario a medida.",
};

export default function ProyectosPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <section className="px-8 md:px-16 pt-24 pb-40" aria-label="Proyectos seleccionados">
          <div style={{ maxWidth: "860px" }}>
            <p
              className="mb-20 font-light"
              style={{
                fontSize: "0.6875rem",
                color: "var(--texto-tenue)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Proyectos
            </p>

            <div className="flex flex-col" style={{ gap: "7rem" }}>
              {proyectos.map((p) => (
                <article key={p.nombre} className="group" style={{ cursor: "default" }}>
                  <div className="w-full overflow-hidden" style={{ aspectRatio: p.proporcion || "16/9" }}>
                    <img src={p.imagen} alt={p.nombre} className="w-full h-full object-cover" />
                  </div>

                  <h2
                    className="mt-4 font-serif"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      color: "var(--texto-principal)",
                      letterSpacing: "-0.01em",
                      fontWeight: 400,
                    }}
                  >
                    {p.nombre}
                  </h2>

                  {p.categoria && (
                    <p
                      className="mt-1 font-light"
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--texto-tenue)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {p.categoria}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
