import type { Metadata } from "next"
import { ProyectoLayout } from "../../components/ProyectoLayout"

export const metadata: Metadata = {
  title: "Temozón Norte — Cāliza Studio",
  description: "Diseño arquitectónico e interiorismo por CĀLIZA Studio.",
}

export default function TemozonNortePage() {
  return (
    <ProyectoLayout
      titulo="Temozón Norte"
      heroImage="/images/temozon-ext.png"
      heroAlt="Temozón Norte"
      descripcion="Ubicado en Temozón Norte, una de las zonas residenciales en expansión de Mérida, el proyecto responde a una lógica de vida cotidiana donde el clima, el uso constante y la durabilidad definen cada decisión.

El proyecto se resuelve desde la proporción y el control material. La piedra establece una base continua en pisos y piezas clave, aportando inercia térmica y resistencia, mientras que la carpintería introduce orden y funcionalidad a través de planos limpios que integran almacenamiento sin fragmentar. La luz se maneja con precisión, evitando excesos y generando una atmósfera estable a lo largo del día. El resultado es un espacio claro y bien resuelto, pensado para sostener el uso diario con naturalidad y sin desgaste visual."
      imagenes={[
        { src: "/images/temozon-int.png", alt: "Temozón Norte — interior" },
        { src: "/images/temozon-ext.png", alt: "Temozón Norte — exterior" },
      ]}
    />
  )
}
