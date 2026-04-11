export type Proyecto = {
  nombre: string
  imagen: string       // ruta local: "/images/nombre-del-archivo.jpg"
  proporcion?: string  // "16/9" | "3/2" | "4/3" — opcional, default 16/9
  categoria?: string   // texto libre: "Arquitectura interior", etc.
}

export const proyectos: Proyecto[] = [
  {
    nombre: "Club de Golf Bosques",
    imagen: "/images/club-bosques-01.jpg",
    proporcion: "16/9",
    categoria: "Arquitectura e interiorismo"
  },
  {
  nombre: "Zaguán 1105",
  imagen: "/images/zaguan-1105-01.jpg",
  proporcion: "16/9",
  categoria: "Interiorismo y mobiliario"
}
]
