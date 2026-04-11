import { proyectos } from "../../../../../data/projects"

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




export default function Home() {
  return (
    <>
      {/* ─── Navigation ─────────────────────────────────────────── */}
      <main>
        {/* ─── Brand ─────────────────────────────────────────────── */}
        <section
          className="relative flex flex-col items-center justify-center min-h-[95vh]"
          style={{ paddingBottom: "8vh" }}
          aria-label="Marca"
        >
          {/* ─── Navigation dentro del hero ─────────────────────── */}
          <header
            className="absolute top-0 left-0 right-0 z-50 flex items-center justify-end px-8 md:px-16 py-7"
          >
            <div className="absolute inset-y-0 left-8 md:left-16 flex items-center gap-4">
              <a
                href="https://instagram.com/calizastudio.mx"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition-transform duration-300 ease-out hover:-translate-y-0.5"
                style={{ color: "#fff" }}
                aria-label="Instagram de CALIZA"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.75" />
                </svg>
              </a>

              <a
                href="mailto:info@calizastudio.com.mx"
                className="flex items-center transition-transform duration-300 ease-out hover:-translate-y-0.5"
                style={{ color: "#fff" }}
                aria-label="Enviar correo a CALIZA"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </a>
            </div>

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
                  className="font-light"
                  style={{
                    fontSize: "0.875rem",
                    color: "#fff",
                    letterSpacing: "0.04em",
                    fontFamily: "var(--font-geist), sans-serif",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile: single contact link */}
            <a
              href="#contact"
              className="md:hidden font-light"
              style={{
                fontSize: "0.875rem",
                color: "#fff",
                letterSpacing: "0.04em",
                fontFamily: "var(--font-geist), sans-serif",
              }}
            >
              Contacto
            </a>
          </header>
          {/* Imagen de fondo */}
          <img
            src="/images/hero.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          {/* Overlay negro sutil */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.30)", zIndex: 1 }}
            aria-hidden="true"
          />
          {/* Contenido */}
          <div
            className="relative flex flex-col items-center -translate-y-[34vh]"
            style={{ zIndex: 2 }}
          >
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: 1,
                color: "#fff",
              }}
            >
              CĀLIZA
            </p>
          </div>
        </section>

        {/* ─── Introducción ───────────────────────────────────────── */}
        <section className="pt-10 pb-28" aria-label="Introducción">
          <div className="max-w-5xl mx-auto px-6">

            {/* Bloque superior: título + párrafo */}
            <div className="max-w-3xl">
              <h2
                className="font-serif font-light leading-[1.05] tracking-[-0.015em] mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "var(--texto-principal)",
                }}
              >
                Construimos con intención.
              </h2>
              <p
                className="font-light leading-[1.8]"
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--texto-secundario)",
                  letterSpacing: "0.02em",
                }}
              >
                Somos CĀLIZA, un estudio mexicano especializado en crear espacios y productos con visión y diseño. Fusionamos piedra natural, carpintería y elementos que perduran a lo largo del tiempo. Cada detalle es pensado, fabricado e instalado para brindar calidad, proporción y permanencia, creando espacios y productos con significado.
              </p>
            </div>

            {/* Bloque inferior: imágenes lado a lado + texto */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-[720px_1fr] gap-16 items-start">

              {/* Columna izquierda: subgrid 2 imágenes */}
              <div className="w-full max-w-[720px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="w-full">
                    <img
                      src="/images/render1.jpg"
                      alt="Espacio CĀLIZA"
                      className="block w-full aspect-[4/5] object-cover"
                    />
                  </div>
                  <div className="w-full md:pt-10">
                    <img
                      src="/images/baño.jpg"
                      alt="Baño CĀLIZA"
                      className="block w-full aspect-[4/5] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Columna derecha: texto centrado verticalmente */}
              <div className="flex items-center h-full">
                <div className="max-w-sm">
                  <h3
                    className="font-serif font-light leading-[1.1] tracking-[-0.01em] mb-4"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      color: "var(--texto-principal)",
                    }}
                  >
                    De principio a fin.
                  </h3>
                  <p
                    className="font-light leading-[1.8]"
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--texto-secundario)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Nuestros proyectos ofrecen un proceso iterativo, transmitiendo una experiencia inmersiva desde el concepto a la entrega. Un estudio, de principio a fin.
                  </p>
                </div>
              </div>

            </div>
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
                color: "var(--texto-principal)",
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
                  PROYECTOS CONCEBIDOS CON VISIÓN Y DISEÑO.
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
                  <h3
                    className="col-span-10 md:col-span-5 font-serif font-light"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      color: "var(--texto-principal)",
                    }}
                  >
                    {s.title}
                  </h3>
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
                color: "var(--texto-principal)",
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
                color: "var(--texto-secundario)",
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
                  color: "var(--texto-principal)",
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
                  color: "var(--texto-principal)",
                  letterSpacing: "0.02em",
                }}
              >
                +52 557 668 1763
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

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer
        className="px-8 md:px-16 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        style={{ borderTop: "1px solid var(--linea)" }}
      >
        <span
          className="font-serif font-light"
          style={{
            color: "var(--texto-principal)",
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
            color: "var(--texto-tenue)",
            letterSpacing: "0.04em",
          }}
          aria-label="Cāliza en Instagram"
        >
          @calizastudio.mx
        </a>
        <span
          className="font-light"
          style={{ fontSize: "0.75rem", color: "var(--texto-tenue)" }}
        >
          Built with{" "}
          <a
            href="https://tododeia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--texto-tenue)" }}
          >
            Claude Web Builder by Tododeia
          </a>
        </span>
      </footer>
    </>
  );
}
