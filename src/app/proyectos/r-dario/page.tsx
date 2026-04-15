import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "R. Darío — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function RDarioPage() {
  return (
    <ProyectoLayout
      titulo="R. Darío"
      heroImage="/images/rdario-sala.png"
      heroAlt="R. Darío"
      descripcion="Ubicado sobre Rubén Darío, una de las direcciones más emblemáticas de la Ciudad de México, donde la relación con el Bosque de Chapultepec y la escala de la avenida definen un estándar distinto de habitar, la propuesta parte de una lectura precisa del contexto: amplitud, vistas largas y una exigencia alta en cada decisión material.

El proyecto se resuelve desde la contención y la precisión. La piedra establece una base sólida y continua que ancla el espacio, mientras que la carpintería define planos limpios que ordenan sin interrumpir. Cada elemento se reduce a lo esencial, permitiendo que la luz, las proporciones y la profundidad visual hacia la ciudad construyan la experiencia. El resultado es un interior sereno pero contundente, donde el nivel no se expresa en exceso, sino en la claridad y el control absoluto de cada superficie."
      imagenes={[
        { src: "/images/rdario-com.png", alt: "R. Darío — comedor" },
        { src: "/images/rdario-rec.png", alt: "R. Darío — recámara" },
        { src: "/images/rdario-sala.png", alt: "R. Darío — sala" },
      ]}
    />
  )
}
