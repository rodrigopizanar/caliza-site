import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Proceso — Cāliza Studio",
  description: "Cómo trabaja CĀLIZA: espacios arquitectónicos, carpintería a medida, dirección material y ejecución de proyecto.",
};

const proceso = [
  {
    n: "01",
    title: "Espacios arquitectónicos",
    desc: "Arquitectura interior fundamentada en proporción, luz y lógica material.",
  },
  {
    n: "02",
    title: "Carpintería a medida",
    desc: "Piezas diseñadas para espacios específicos. Construidas para durar.",
  },
  {
    n: "03",
    title: "Dirección material",
    desc: "Piedra, madera, metal — seleccionados por cómo envejecen, no solo por cómo se ven.",
  },
  {
    n: "04",
    title: "Ejecución de proyecto",
    desc: "Del concepto a la entrega. Un estudio, de principio a fin.",
  },
];

export default function ProcesoPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <section className="px-8 md:px-16 py-32 md:py-40" aria-label="Proceso">
          <div className="max-w-6xl">
            <p
              className="mb-16 font-light"
              style={{
                fontSize: "0.6875rem",
                color: "var(--texto-tenue)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Proceso
            </p>
            <div className="divide-y" style={{ borderColor: "var(--linea)" }}>
              {proceso.map((s) => (
                <div
                  key={s.n}
                  className="grid grid-cols-12 py-10 md:py-12 gap-4 items-baseline"
                >
                  <span
                    className="col-span-2 md:col-span-1 font-light"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--texto-tenue)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {s.n}
                  </span>
                  <h2
                    className="col-span-10 md:col-span-5 font-serif font-light"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: "var(--texto-principal)",
                    }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="col-span-12 md:col-span-6 font-light leading-[1.7] md:text-right"
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--texto-secundario)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
