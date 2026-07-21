"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function DesafioPorQue() {
  return (
    <SectionWrapper
      id="por-que"
      className="relative px-4 bg-[#0a0a14]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(91,63,224,0.09)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative max-w-[200px] sm:max-w-xs lg:max-w-sm mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,63,224,0.25)_0%,transparent_70%)] blur-2xl scale-110" />
              <img
                src="/hipnosis-keyhole.webp"
                alt="Hipnosis en acción — vista a través de un ojo de cerradura"
                className="relative z-10 w-full h-auto drop-shadow-[0_0_40px_rgba(91,63,224,0.3)]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-4">
                Esto es para ti si ya haces terapia
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Por qué{" "}
                <span className="gradient-trance-text">HIPNOTIZAR</span>{" "}
                no es para curiosos?
              </h2>
            </div>

            <div className="space-y-5 text-slate-300/75 leading-relaxed text-sm md:text-base">
              <p>
                Todos los días llegan terapeutas diciendo:{" "}
                <strong className="text-white">"QUIERO INCORPORAR HIPNOSIS A MIS SESIONES"</strong>{" "}
                — y ahí se quedan, en la intención. Siguen atendiendo con las mismas
                herramientas de siempre, mientras otros colegas ya ofrecen resultados
                que ellos no pueden igualar.
              </p>
              <p>
                No necesitas años de formación adicional ni un don especial. Solo el{" "}
                <strong className="text-white">método correcto</strong> — el mismo que
                te vamos a enseñar paso a paso en este desafío de 7 días — para empezar
                a aplicar hipnosis en tus sesiones con seguridad.
              </p>
              <p>
                Tampoco tienes que pagar un curso genérico que no conecta la hipnosis
                con tu práctica real, ni perder tiempo con tutoriales gratuitos que no
                llevan a ningún lado.
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 pt-5">
                <p>
                  El Desafío <strong className="text-white">"Aprende a Hipnotizar en 7 Días"</strong>{" "}
                  es un entrenamiento intensivo diseñado para que incorpores la hipnosis
                  a tu práctica terapéutica desde cero, mediante ejercicios prácticos
                  diarios — sin importar cuánta experiencia tengas hipnotizando.
                </p>
                <p className="mt-4">
                  En solo 7 días vas a tener las bases sólidas para aplicar hipnosis con
                  pacientes reales y, si lo deseas, podrás seguir avanzando hacia un
                  nivel más profundo y profesional en tu práctica.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="gold"
                size="lg"
                href="#precios"
                className="font-bold uppercase tracking-wide"
              >
                Quiero hipnotizar en 7 días
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
