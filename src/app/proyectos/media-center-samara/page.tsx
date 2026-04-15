import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Media Center Sámara — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function MediaCenterSamaraPage() {
  return (
    <ProyectoLayout
      titulo="Media Center Sámara"
      heroImage="/images/hero-03.png"
      heroAlt="Media Center Sámara"
      descripcion="Un espacio diseñado con intención y rigor material. Cada decisión responde al contexto, la proporción y la permanencia del lugar."
      imagenes={[
        { src: "/images/Baño.jpg", alt: "Media Center Sámara — espacio interior" },
        { src: "/images/hero-06.png", alt: "Media Center Sámara — detalle" },
      ]}
    />
  )
}
