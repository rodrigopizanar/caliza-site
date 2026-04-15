import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Club de Golf Bosques — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function ClubDeGolfBosquesPage() {
  return (
    <ProyectoLayout
      titulo="Club de Golf Bosques"
      heroImage="/images/hero-01.png"
      heroAlt="Club de Golf Bosques"
      descripcion={`Ubicado dentro de uno de los conjuntos residenciales más consolidados de la ciudad, el proyecto parte de una lectura precisa del espacio existente, donde la intervención se concentra en ordenar, depurar y dar continuidad a través de planos y proporciones. La planta se libera para articular sala, comedor y áreas complementarias en una secuencia abierta, definida por plafones curvos e iluminación indirecta que guían el recorrido sin recurrir a elementos invasivos.

La piedra actúa como elemento estructurador, construyendo superficies continuas y piezas monolíticas que se integran con una carpintería cálida y contenida. Muros retroiluminados, mobiliario fijo y elementos tallados resuelven el espacio desde la materia, logrando una atmósfera donde la precisión del detalle y la continuidad material sustituyen cualquier gesto ornamental.`}
      imagenes={[
        { src: "/images/bosques-01.png", alt: "Club de Golf Bosques — detalle" },
        { src: "/images/hero-03.png", alt: "Club de Golf Bosques — espacio" },
        { src: "/images/hero-01.png", alt: "Club de Golf Bosques — vista" },
      ]}
    />
  )
}
