"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Users2, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const stats = [
  { icon: Users2, value: "1000+", label: "Pacientes atendidos" },
  { icon: BookOpen, value: "20+", label: "Años de experiencia" },
  { icon: Users2, value: "500+", label: "Profesionales formados" },
  { icon: Award, value: "100%", label: "Enfoque práctico" },
];

export default function Instructor() {
  return (
    <SectionWrapper id="instructor" className="relative px-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,78,110,0.10)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-[0_8px_40px_rgba(0,0,0,0.5)] bg-slate-900">
              {/* Testimonial Image */}
              <img
                src="/juanroberto.webp"
                alt="Juan Roberto Rodríguez"
                className="w-full h-full object-cover object-center relative z-10 opacity-90 hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20 pointer-events-none" />
            </div>

            {/* Floating card — static, no animation */}
            <div className="absolute -bottom-4 -right-4 card-glass glow-border rounded-2xl p-4 shadow-xl z-30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white text-sm font-semibold">Cupos disponibles</p>
              </div>
              <p className="text-slate-400/70 text-xs mt-1">
                ¡Reserva antes que se agoten!
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3">
                SU PROFESOR
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Juan Roberto{" "}
                <span className="gradient-brand-text">Rodríguez</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium tracking-wide mb-6">
                Psicólogo - Hipnoterapeuta
              </p>

              <div className="space-y-4 text-slate-300/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Durante más de 20 años ha utilizado la hipnosis con miles de pacientes en procesos terapéuticos reales, desarrollando un método propio aplicado a la regulación emocional y el manejo de diferentes problemáticas psicológicas.
                </p>
                <p>
                  Su enfoque combina experiencia clínica con herramientas prácticas, permitiendo llevar la hipnosis más allá del consultorio hacia la vida cotidiana.
                </p>
                <p>
                  Es formador de hipnotistas e hipnoterapeutas dentro de la comunidad Hipnomente, donde ha acompañado a cientos de profesionales en la integración de la hipnosis en sus procesos.
                </p>
                <p>
                  Hoy su objetivo es claro: democratizar el acceso a la hipnosis, para que más personas puedan beneficiarse de su aplicación de forma práctica, guiada y segura.
                </p>
              </div>
            </div>

            <div className="mt-2">
              <Button
                variant="outline"
                size="md"
                href="https://www.doctoralia.co/juan-roberto-rodriguez-gonzalez/psicologo/bogota#profile-reviews"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver comentarios en Doctoralia
                <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="card-glass glow-border rounded-xl p-3 text-center"
                >
                  <stat.icon className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                  <p className="text-2xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-slate-400/70 text-xs leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
