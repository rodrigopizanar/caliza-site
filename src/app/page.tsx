import { proyectos } from "./data/projects"

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
                { label: "Diseños", href: "#estudio" },
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
          <div className="max-w-6xl px-8 md:px-16">

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
            <div className="mt-20 grid grid-cols-1 md:grid-cols-[760px_320px] gap-10 items-center">

              {/* Columna izquierda: subgrid 2 imágenes */}
              <div className="w-full max-w-[760px] justify-self-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                  <div className="w-full">
                    <img
                      src="/images/render1.jpg"
                      alt="Espacio CĀLIZA"
                      className="block w-full aspect-[4/5] object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <img
                      src="/images/Baño.jpg"
                      alt="Baño CĀLIZA"
                      className="block w-full aspect-[4/5] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Columna derecha: texto centrado verticalmente */}
              <div className="flex items-center h-full">
                <div className="max-w-[380px]">
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

      {/* ─── Cierre editorial / Newsletter ─────────────────────── */}
      <section className="w-full" aria-label="Novedades">

        {/* Bloque superior: imagen + formulario */}
        <div
          className="relative overflow-hidden"
          style={{
            border: "1px solid var(--acento)",
            borderRadius: "6px",
          }}
        >
          {/* Imagen de fondo */}
          <img
            src="/images/fondo.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay muy sutil */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(43,31,24,0.52)" }}
            aria-hidden="true"
          />

          {/* Contenido */}
          <div
            className="relative px-10 md:px-16 py-20 md:py-28"
            style={{ zIndex: 2 }}
          >
            <p
              className="mb-3 font-light"
              style={{
                fontSize: "0.6875rem",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-jost), sans-serif",
              }}
            >
              Novedades
            </p>
            <h2
              className="font-serif font-light leading-[1.1] mb-3"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "#fff",
                maxWidth: "520px",
              }}
            >
              Suscríbete para recibir novedades, proyectos y lanzamientos de CĀLIZA.
            </h2>

            {/* Formulario */}
            <form
              className="mt-10 flex flex-col sm:flex-row gap-3"
              style={{ maxWidth: "480px" }}
              action="#"
            >
              <input
                type="email"
                placeholder="Tu correo electrónico"
                required
                className="flex-1 bg-transparent font-light outline-none"
                style={{
                  borderBottom: "1px solid var(--acento)",
                  padding: "0.625rem 0",
                  fontSize: "0.875rem",
                  color: "#fff",
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-jost), sans-serif",
                }}
              />
              <button
                type="submit"
                className="font-light transition-opacity hover:opacity-70 whitespace-nowrap"
                style={{
                  border: "1px solid var(--acento)",
                  borderRadius: "3px",
                  padding: "0.625rem 1.5rem",
                  fontSize: "0.8125rem",
                  color: "#fff",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-jost), sans-serif",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bloque inferior: cierre sobrio */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 px-10 md:px-16 py-16 md:py-20 mt-px"
          style={{
            background: "var(--texto-principal)",
            borderRadius: "0 0 6px 6px",
          }}
        >
          {/* Col 1: marca */}
          <div>
            <p
              className="font-serif font-light mb-3"
              style={{
                fontSize: "1rem",
                letterSpacing: "0.15em",
                color: "#fff",
              }}
            >
              CĀLIZA
            </p>
            <p
              className="font-light leading-[1.7]"
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.02em",
                maxWidth: "220px",
              }}
            >
              Diseño arquitectónico y fabricación con intención.
            </p>
          </div>

          {/* Col 2: contacto */}
          <div>
            <p
              className="font-light mb-4"
              style={{
                fontSize: "0.6875rem",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Contacto
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@calizastudio.com.mx"
                className="font-light transition-opacity hover:opacity-60"
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.02em",
                }}
              >
                info@calizastudio.com.mx
              </a>
              <a
                href="tel:+525576681763"
                className="font-light transition-opacity hover:opacity-60"
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.02em",
                }}
              >
                +52 5576681763
              </a>
            </div>
          </div>

          {/* Col 3: navegación */}
          <div>
            <p
              className="font-light mb-4"
              style={{
                fontSize: "0.6875rem",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Menú
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#" },
                { label: "Diseños", href: "#estudio" },
                { label: "Proyectos", href: "#work" },
                { label: "Contacto", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-light transition-opacity hover:opacity-60"
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─── WhatsApp flotante ──────────────────────────────────── */}
      <a
        href="https://wa.me/525576681763?text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20cotizar%20un%20proyecto/producto%20de%20dise%C3%B1o%20C%C4%80LIZA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] shadow-sm transition-transform duration-200 hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="currentColor"
        >
          <path
            fill="white"
            d="M20.52 3.48A11.8 11.8 0 0 0 12.02 0C5.38 0 .02 5.36.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.6A11.96 11.96 0 0 0 12.02 24c6.64 0 12-5.36 12-12 0-3.2-1.25-6.22-3.5-8.52ZM12.02 21.8c-1.84 0-3.65-.5-5.23-1.46l-.37-.22-3.65.95.98-3.56-.24-.37a9.77 9.77 0 0 1-1.5-5.14c0-5.41 4.4-9.8 9.8-9.8 2.62 0 5.09 1.02 6.94 2.87a9.74 9.74 0 0 1 2.87 6.93c0 5.41-4.4 9.8-9.8 9.8Zm5.37-7.35c-.29-.15-1.7-.84-1.97-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.14-.17.2-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.44-.85-.76-1.43-1.7-1.6-1.98-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.29-1.04 1.01-1.04 2.46s1.07 2.85 1.22 3.05c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34Z"
          />
        </svg>
      </a>

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
