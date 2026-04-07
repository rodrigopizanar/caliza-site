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

const projects = [
  {
    name: "Casa Lomas",
    location: "Lomas de Chapultepec, Ciudad de México",
    descriptor: "Arquitectura interior · 2024",
    ratio: "16 / 9",
    indent: false,
  },
  {
    name: "Penthouse Polanco",
    location: "Polanco, Ciudad de México",
    descriptor: "Arquitectura + carpintería · 2024",
    ratio: "3 / 2",
    indent: true,
  },
  {
    name: "Residencia Pedregal",
    location: "Pedregal de San Ángel, Ciudad de México",
    descriptor: "Dirección integral de proyecto · 2023",
    ratio: "16 / 9",
    indent: false,
  },
  {
    name: "Oficinas Santa Fe",
    location: "Santa Fe, Ciudad de México",
    descriptor: "Interior comercial · 2023",
    ratio: "4 / 3",
    indent: true,
  },
  {
    name: "Casa Virreyes",
    location: "Lomas Virreyes, Ciudad de México",
    descriptor: "Carpintería a medida · 2022",
    ratio: "16 / 9",
    indent: false,
  },
];

export default function Home() {
  return (
    <>
      {/* ─── Navigation ─────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-7"
      >
        <a
          href="#"
          className="font-serif font-light"
          style={{
            color: "var(--ink)",
            fontSize: "0.9375rem",
            letterSpacing: "0.15em",
          }}
          aria-label="Cāliza Studio — inicio"
        >
          CĀLIZA
        </a>

        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Navegación principal"
        >
          {[
            { label: "Proyectos", href: "#work" },
            { label: "Estudio", href: "#estudio" },
            { label: "Proceso", href: "#proceso" },
            { label: "Contacto", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-light transition-opacity hover:opacity-50"
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted)",
                letterSpacing: "0.04em",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile: single contact link */}
        <a
          href="#contact"
          className="md:hidden font-light transition-opacity hover:opacity-60"
          style={{
            fontSize: "0.8125rem",
            color: "var(--muted)",
            letterSpacing: "0.04em",
          }}
        >
          Contacto
        </a>
      </header>

      <main>
        {/* ─── Hero ───────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-28 pt-32"
          aria-label="Introducción"
        >
          <div className="relative" style={{ maxWidth: "680px", marginLeft: "0" }}>
            <h1
              className="font-serif font-light leading-[1.0] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 8rem)",
                color: "var(--ink)",
                maxWidth: "600px",
              }}
            >
              Diseño, fabricación
              <br />
              e integración de espacios
            </h1>

            <p
              className="mt-7 leading-[1.7]"
              style={{
                fontSize: "0.9375rem",
                maxWidth: "460px",
                color: "var(--muted)",
                letterSpacing: "0.02em",
                fontWeight: 300,
                opacity: 0.8,
              }}
            >
              Cada proyecto se desarrolla de forma integral: piedra, carpintería
              e iluminación en una sola decisión de diseño.
            </p>

            <div className="mt-24 flex items-center gap-10">
              <a
                href="#work"
                className="font-light transition-opacity hover:opacity-60"
                style={{ fontSize: "0.875rem", color: "var(--ink)", letterSpacing: "0.04em" }}
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="font-light transition-opacity hover:opacity-60"
                style={{ fontSize: "0.875rem", color: "var(--muted)", letterSpacing: "0.04em" }}
              >
                Agendar consulta →
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <div
              className="w-px h-12 mx-auto"
              style={{ background: "var(--line)" }}
            />
          </div>
        </section>

        {/* ─── Work ───────────────────────────────────────────────── */}
        <section
          id="work"
          className="px-8 md:px-16 pt-24 pb-40"
          aria-label="Proyectos seleccionados"
        >
          <div style={{ maxWidth: "860px" }}>
            <p
              className="mb-20 font-light"
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              Proyectos
            </p>

            <div className="flex flex-col" style={{ gap: "7rem" }}>
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="group"
                  style={{
                    cursor: "default",
                    marginLeft: p.indent ? "clamp(2rem, 5vw, 5rem)" : "0",
                  }}
                >
                  {/* Image */}
                  <div
                    className="w-full overflow-hidden"
                    style={{ aspectRatio: p.ratio }}
                  >
                    <div
                      className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      style={{
                        background: "var(--white)",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        backgroundSize: "180px 180px",
                        backgroundBlendMode: "overlay",
                        opacity: 0.97,
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Metadata */}
                  {p.indent ? (
                    <div className="mt-5">
                      <h2
                        className="font-serif"
                        style={{
                          fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                          color: "var(--ink)",
                          letterSpacing: "-0.01em",
                          fontWeight: 400,
                        }}
                      >
                        {p.name}
                      </h2>
                      <div className="mt-1.5 flex items-center gap-4">
                        <span
                          className="font-light"
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--muted)",
                            letterSpacing: "0.02em",
                            opacity: 0.65,
                          }}
                        >
                          {p.location}
                        </span>
                        <span style={{ color: "var(--line)", fontSize: "0.6rem" }}>·</span>
                        <span
                          className="font-light"
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--muted)",
                            letterSpacing: "0.02em",
                            opacity: 0.65,
                          }}
                        >
                          {p.descriptor}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mt-5 flex items-baseline justify-between gap-6">
                        <h2
                          className="font-serif"
                          style={{
                            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                            color: "var(--ink)",
                            letterSpacing: "-0.01em",
                            fontWeight: 400,
                          }}
                        >
                          {p.name}
                        </h2>
                        <span
                          className="shrink-0 font-light text-right"
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--muted)",
                            letterSpacing: "0.02em",
                            opacity: 0.65,
                          }}
                        >
                          {p.descriptor}
                        </span>
                      </div>
                      <p
                        className="mt-1 font-light"
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--muted)",
                          letterSpacing: "0.02em",
                          opacity: 0.65,
                        }}
                      >
                        {p.location}
                      </p>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Manifiesto ─────────────────────────────────────────── */}
        <section
          className="px-8 md:px-16 py-40 md:py-56"
          aria-label="Filosofía del estudio"
        >
          <div style={{ maxWidth: "680px" }}>
            <h2
              className="font-serif font-light leading-[1.05] tracking-[-0.015em]"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                color: "var(--ink)",
              }}
            >
              No elegimos materiales
              <br />
              por cómo se ven.
              <br />
              Los elegimos por cómo envejecen.
            </h2>

            <p
              className="mt-10 font-light leading-[1.9]"
              style={{
                fontSize: "0.9375rem",
                maxWidth: "420px",
                color: "var(--muted)",
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
        <section
          id="estudio"
          className="px-8 md:px-16 py-32 md:py-40"
          aria-label="El estudio"
        >
          <div className="max-w-6xl">
            <div className="md:grid md:grid-cols-12 gap-16">
              <div className="md:col-span-3 mb-10 md:mb-0">
                <p
                  className="font-light"
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.6,
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
                    color: "var(--ink)",
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
                    color: "var(--muted)",
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

        {/* ─── Proceso ────────────────────────────────────────────── */}
        <section
          id="proceso"
          className="px-8 md:px-16 py-32 md:py-40"
          aria-label="Proceso"
        >
          <div className="max-w-6xl">
            <p
              className="mb-16 font-light"
              style={{
                fontSize: "0.8125rem",
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.6,
              }}
            >
              Proceso
            </p>
            <div className="divide-y" style={{ borderColor: "var(--line)" }}>
              {proceso.map((s) => (
                <div
                  key={s.n}
                  className="grid grid-cols-12 py-10 md:py-12 gap-4 items-baseline"
                >
                  <span
                    className="col-span-2 md:col-span-1 font-light"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                      opacity: 0.5,
                    }}
                  >
                    {s.n}
                  </span>
                  <h3
                    className="col-span-10 md:col-span-5 font-serif font-light"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: "var(--ink)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="col-span-12 md:col-span-6 font-light leading-[1.7] md:text-right"
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted)",
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

        {/* ─── Testimonio ─────────────────────────────────────────── */}
        <section
          className="px-8 md:px-16 py-32 md:py-40"
          aria-label="Testimonio"
        >
          <div style={{ maxWidth: "780px" }}>
            <blockquote>
              <p
                className="font-serif font-light leading-[1.25] italic"
                style={{
                  fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                  color: "var(--ink)",
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
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                    opacity: 0.65,
                  }}
                >
                  — R. Fernández, cliente residencial
                </cite>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ─── Contacto ───────────────────────────────────────────── */}
        <section
          id="contact"
          className="px-8 md:px-16 pt-32 pb-48"
          aria-label="Contacto"
        >
          <div style={{ maxWidth: "680px" }}>
            <h2
              className="font-serif font-light leading-[1.05] tracking-[-0.015em]"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                color: "var(--ink)",
              }}
            >
              Para iniciar
              <br />
              un proyecto.
            </h2>

            <p
              className="mt-8 font-light leading-[1.8]"
              style={{
                fontSize: "0.9375rem",
                maxWidth: "400px",
                color: "var(--muted)",
                letterSpacing: "0.02em",
              }}
            >
              Trabajamos con un número limitado de proyectos por año.
              La consulta inicial no tiene costo.
            </p>

            <div className="mt-16 flex flex-col" style={{ gap: "0.6rem" }}>
              <a
                href="mailto:estudio@calizastudio.mx"
                className="font-light transition-opacity hover:opacity-60"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--ink)",
                  letterSpacing: "0.02em",
                }}
              >
                estudio@calizastudio.mx
              </a>
              <a
                href="tel:+529990000000"
                className="font-light transition-opacity hover:opacity-60"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--ink)",
                  letterSpacing: "0.02em",
                }}
              >
                +52 999 000 0000
              </a>
              <p
                className="font-light"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--muted)",
                  letterSpacing: "0.02em",
                  opacity: 0.65,
                  marginTop: "0.4rem",
                }}
              >
                Mérida · Ciudad de México
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer
        className="px-8 md:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <span
          className="font-serif font-light"
          style={{
            color: "var(--ink)",
            fontSize: "0.9375rem",
            letterSpacing: "0.15em",
          }}
        >
          CĀLIZA
        </span>
        <a
          href="https://instagram.com/calizastudio.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-light transition-opacity hover:opacity-60"
          style={{
            fontSize: "0.8125rem",
            color: "var(--muted)",
            letterSpacing: "0.04em",
          }}
          aria-label="Cāliza en Instagram"
        >
          @calizastudio.mx
        </a>
        <span
          className="font-light"
          style={{ fontSize: "0.75rem", color: "var(--line)" }}
        >
          Built with{" "}
          <a
            href="https://tododeia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--muted)" }}
          >
            Claude Web Builder by Tododeia
          </a>
        </span>
      </footer>
    </>
  );
}
