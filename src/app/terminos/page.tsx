import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Términos y condiciones — Cāliza Studio",
  description: "Términos y condiciones de uso de CĀLIZA Studio.",
};

const LABEL: React.CSSProperties = {
  fontFamily: "var(--font-geist), sans-serif",
  fontSize: "0.6875rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--texto-tenue)",
  fontWeight: 300,
};

const SECTION_TITLE: React.CSSProperties = {
  fontFamily: "var(--font-geist), sans-serif",
  fontSize: "0.6875rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--texto-tenue)",
  fontWeight: 400,
  marginBottom: "1rem",
  paddingTop: "2.5rem",
  borderTop: "1px solid var(--linea)",
};

const BODY: React.CSSProperties = {
  fontFamily: "var(--font-geist), sans-serif",
  fontSize: "0.9375rem",
  color: "var(--texto-secundario)",
  letterSpacing: "0.02em",
  fontWeight: 300,
  lineHeight: 1.85,
};

const LIST: React.CSSProperties = {
  paddingLeft: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
  margin: "0.75rem 0 0",
};

export default function TerminosPage() {
  return (
    <>
      <SiteHeader mode="page" />

      <main>
        <section
          className="px-8 md:px-16"
          style={{ paddingTop: "5rem", paddingBottom: "8rem", maxWidth: "720px" }}
        >
          {/* Eyebrow */}
          <p style={{ ...LABEL, marginBottom: "1.5rem" }}>Legal</p>

          {/* Título */}
          <h1
            className="font-serif font-light"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
              color: "var(--texto-principal)",
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              marginBottom: "0.75rem",
            }}
          >
            Términos y condiciones de uso
          </h1>

          {/* Fecha */}
          <p style={{ ...BODY, fontSize: "0.8125rem", color: "var(--texto-tenue)", marginBottom: "3rem" }}>
            Última actualización: 12 de abril de 2026
          </p>

          {/* Intro */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
            <p style={BODY}>
              Este sitio web es operado por CALIZA STUDIO (en adelante, "CALIZA", "nosotros" o "nuestro").
              Al acceder, navegar o utilizar este sitio web, el usuario (en adelante, "el usuario") acepta
              los presentes Términos y Condiciones (los "Términos").
            </p>
            <p style={BODY}>
              Si el usuario no está de acuerdo con estos Términos, deberá abstenerse de utilizar el sitio.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            <div>
              <h2 style={SECTION_TITLE}>Sección 1 — Aceptación de los términos</h2>
              <p style={BODY}>
                Al acceder o utilizar cualquier parte del sitio, el usuario acepta quedar obligado por estos
                Términos, así como por cualquier política adicional publicada en el sitio.
              </p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>
                Estos Términos aplican a todos los usuarios, incluyendo, sin limitación:
              </p>
              <ul style={LIST}>
                <li style={BODY}>Navegadores</li>
                <li style={BODY}>Clientes potenciales</li>
                <li style={BODY}>Colaboradores de contenido</li>
              </ul>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 2 — Naturaleza del sitio</h2>
              <p style={BODY}>El sitio tiene fines informativos, de presentación, posicionamiento y contacto.</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>CALIZA es un estudio dedicado al:</p>
              <ul style={LIST}>
                <li style={BODY}>Diseño de espacios</li>
                <li style={BODY}>Diseño de mobiliario</li>
                <li style={BODY}>Desarrollo, fabricación e implementación de soluciones en materiales naturales</li>
              </ul>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>La información contenida en el sitio:</p>
              <ul style={LIST}>
                <li style={BODY}>No constituye una oferta vinculante</li>
                <li style={BODY}>No sustituye una propuesta formal</li>
                <li style={BODY}>Está sujeta a cambios sin previo aviso</li>
              </ul>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 3 — Condiciones generales de uso</h2>
              <p style={BODY}>Nos reservamos el derecho de:</p>
              <ul style={LIST}>
                <li style={BODY}>Restringir o negar el acceso al sitio a cualquier usuario</li>
                <li style={BODY}>Modificar o suspender el sitio sin previo aviso</li>
              </ul>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>El usuario acepta que:</p>
              <ul style={LIST}>
                <li style={BODY}>El uso del sitio es bajo su responsabilidad</li>
                <li style={BODY}>No utilizará el sitio para fines ilícitos</li>
                <li style={BODY}>No violará ninguna legislación aplicable</li>
              </ul>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>Queda prohibido:</p>
              <ul style={LIST}>
                <li style={BODY}>Transmitir virus o código malicioso</li>
                <li style={BODY}>Intentar vulnerar la seguridad del sitio</li>
                <li style={BODY}>Interferir con su funcionamiento</li>
              </ul>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 4 — Propiedad intelectual</h2>
              <p style={BODY}>
                Todo el contenido del sitio es propiedad de CALIZA o cuenta con derechos de uso autorizados, incluyendo:
              </p>
              <ul style={LIST}>
                <li style={BODY}>Diseño del sitio</li>
                <li style={BODY}>Identidad visual</li>
                <li style={BODY}>Imágenes y renders</li>
                <li style={BODY}>Textos y conceptos</li>
                <li style={BODY}>Documentación gráfica</li>
              </ul>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>El usuario se obliga a no reproducir, distribuir, comercializar ni modificar ningún contenido sin autorización previa por escrito.</p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 5 — Exactitud y alcance de la información</h2>
              <p style={BODY}>El contenido del sitio se proporciona con fines informativos.</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>CALIZA no garantiza que la información sea completa, exacta en todo momento ni que se encuentre actualizada.</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>
                El usuario reconoce que cualquier decisión basada en el contenido del sitio es bajo su propio criterio,
                y que la información puede ser modificada en cualquier momento sin obligación de actualización inmediata.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 6 — Representación de proyectos, diseño y materiales</h2>
              <p style={BODY}>El contenido visual y descriptivo del sitio:</p>
              <ul style={LIST}>
                <li style={BODY}>Refleja el lenguaje, criterio y estándares de diseño de CALIZA</li>
                <li style={BODY}>Puede incluir representaciones conceptuales, visualizaciones o documentación de proyectos</li>
              </ul>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>
                Los materiales naturales utilizados, incluyendo piedra y madera, presentan características inherentes como
                variaciones de tono, diferencias en vetas y texturas únicas. Estas características forman parte intrínseca
                del material y del resultado final.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 7 — Disponibilidad del sitio y modificaciones</h2>
              <p style={BODY}>
                CALIZA se reserva el derecho de modificar o eliminar cualquier contenido, actualizar información o
                suspender temporal o permanentemente el sitio sin previo aviso.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 8 — Suministro y disponibilidad de materiales</h2>
              <p style={BODY}>
                La ejecución de soluciones presentadas por CALIZA puede involucrar materiales cuya disponibilidad
                depende de condiciones externas.
              </p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>El usuario reconoce que:</p>
              <ul style={LIST}>
                <li style={BODY}>La disponibilidad de ciertos materiales puede variar</li>
                <li style={BODY}>Los tiempos asociados pueden verse afectados por factores ajenos al control directo de CALIZA</li>
              </ul>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 9 — Enlaces y servicios de terceros</h2>
              <p style={BODY}>El sitio puede contener enlaces a sitios externos.</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>
                CALIZA no controla dichos sitios, no garantiza su contenido ni asume responsabilidad por su funcionamiento.
                El acceso a dichos sitios es bajo responsabilidad del usuario.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 10 — Comentarios y envío de información</h2>
              <p style={BODY}>Si el usuario envía a CALIZA comentarios, ideas, propuestas o materiales, autoriza a CALIZA a utilizar dicha información sin restricción, sin obligación de confidencialidad ni compensación, salvo acuerdo expreso por escrito.</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>El usuario declara que:</p>
              <ul style={LIST}>
                <li style={BODY}>Cuenta con los derechos para compartir dicha información</li>
                <li style={BODY}>La misma no infringe derechos de terceros</li>
              </ul>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 11 — Datos personales</h2>
              <p style={BODY}>
                El tratamiento de datos personales se rige por la Política de Privacidad de CALIZA.
                El uso del sitio implica la aceptación de dicha política.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 12 — Errores, omisiones e inexactitudes</h2>
              <p style={BODY}>El sitio puede contener errores tipográficos, omisiones o inexactitudes.</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>
                CALIZA se reserva el derecho de corregirlos en cualquier momento y modificar el contenido sin previo aviso.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 13 — Usos prohibidos</h2>
              <p style={BODY}>Se prohíbe el uso del sitio para:</p>
              <ul style={LIST}>
                <li style={BODY}>Actividades ilegales</li>
                <li style={BODY}>Violación de derechos de propiedad intelectual</li>
                <li style={BODY}>Distribución de contenido malicioso</li>
                <li style={BODY}>Recolección indebida de datos</li>
                <li style={BODY}>Cualquier uso que afecte la integridad del sitio</li>
              </ul>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>
                CALIZA podrá suspender el acceso a usuarios que incumplan esta sección.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 14 — Limitación de responsabilidad</h2>
              <p style={BODY}>El sitio se proporciona "tal cual" y "según disponibilidad".</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>CALIZA no garantiza disponibilidad continua, funcionamiento libre de errores ni ausencia de interrupciones.</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>En ningún caso CALIZA será responsable por:</p>
              <ul style={LIST}>
                <li style={BODY}>Daños directos o indirectos</li>
                <li style={BODY}>Pérdida de ingresos o beneficios</li>
                <li style={BODY}>Daños derivados del uso del sitio</li>
                <li style={BODY}>Consecuencias relacionadas con decisiones basadas en el contenido</li>
              </ul>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 15 — Indemnización</h2>
              <p style={BODY}>
                El usuario acepta indemnizar y mantener a salvo a CALIZA de cualquier reclamación, daño, pérdida
                o gasto (incluyendo honorarios legales) derivado del uso indebido del sitio, la violación de estos
                Términos o la infracción de derechos de terceros.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 16 — Divisibilidad</h2>
              <p style={BODY}>
                Si alguna disposición de estos Términos es considerada inválida o inaplicable, las demás
                disposiciones permanecerán en pleno vigor.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 17 — Terminación</h2>
              <p style={BODY}>
                CALIZA podrá suspender o terminar el acceso al sitio sin previo aviso en caso de incumplimiento de estos Términos.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 18 — Acuerdo completo</h2>
              <p style={BODY}>
                Estos Términos constituyen el acuerdo completo entre el usuario y CALIZA en relación con el uso del sitio.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 19 — Legislación aplicable</h2>
              <p style={BODY}>
                Estos Términos se rigen por las leyes de México. Cualquier controversia será sometida a los
                tribunales competentes de Mérida, Yucatán.
              </p>
            </div>

            <div>
              <h2 style={SECTION_TITLE}>Sección 20 — Contacto</h2>
              <p style={BODY}>Para cualquier duda:</p>
              <p style={{ ...BODY, marginTop: "0.75rem" }}>
                correo:{" "}
                <a
                  href="mailto:info@caliza.studio"
                  style={{ color: "var(--texto-principal)", textDecoration: "none" }}
                >
                  info@caliza.studio
                </a>
              </p>
            </div>

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
