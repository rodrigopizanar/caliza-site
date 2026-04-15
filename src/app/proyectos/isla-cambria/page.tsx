import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Isla Cambria — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function IslaCambriaPage() {
  return (
    <ProyectoLayout
      titulo="Isla Cambria"
      heroImage="/images/hero-01.png"
      heroAlt="Isla Cambria"
      descripcion="Un espacio diseñado con intención y rigor material. Cada decisión responde al contexto, la proporción y la permanencia del lugar."
      imagenes={[
        { src: "/images/render1.jpg", alt: "Isla Cambria — espacio interior" },
        { src: "/images/hero-03.png", alt: "Isla Cambria — detalle" },
      ]}
    />
  )
}
