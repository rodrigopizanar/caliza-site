"use client";

import { motion } from "framer-motion";

export function EditorialLogoBlock() {
  return (
    <div className="flex flex-col items-center text-center max-w-[380px] pt-32">

      {/* Logo animado — de abajo hacia arriba + fade */}
      <motion.div
        className="mb-2 w-full flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src="/logo.png"
          alt="CĀLIZA"
          style={{ width: "100%", maxWidth: "320px", height: "auto", display: "block" }}
        />
      </motion.div>

      {/* Texto — misma animación que el logo, con delay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.18 }}
      >
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
          Nuestros proyectos ofrecen un proceso iterativo, transmitiendo una experiencia inmersiva desde el concepto hasta la entrega. Un estudio, de principio a fin.
        </p>
      </motion.div>

    </div>
  );
}
