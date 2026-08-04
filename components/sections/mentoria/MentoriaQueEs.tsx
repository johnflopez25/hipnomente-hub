"use client";

import { motion } from "framer-motion";
import { Compass, MonitorPlay, Radio, Users } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

// Los tres "motores" del programa. Se presentan juntos porque la confusión más
// común es creer que la mentoría es solo una plataforma de videos.
const PILLARS = [
  {
    icon: MonitorPlay,
    label: "Estudias a tu ritmo",
    title: "La plataforma",
    text: "Todos los cursos y formaciones organizados por ruta, disponibles 24/7 durante un año completo. Entras, eliges y avanzas cuando puedas.",
  },
  {
    icon: Radio,
    label: "Cada semana",
    title: "Las clases en vivo",
    text: "Lunes de clase temática y miércoles de bitácora: preguntas y respuestas en directo con el Dr. Juan Roberto sobre casos reales, incluido el tuyo.",
  },
  {
    icon: Users,
    label: "Todos los días",
    title: "La comunidad",
    text: "Un grupo privado de mentorados de más de 12 países donde preguntas a cualquier hora y varios colegas responden con lo que a ellos les funcionó.",
  },
];

// Ruta sugerida, no un calendario cerrado: el contenido está disponible desde el
// día uno, así que se presenta como orden recomendado y no como fechas fijas.
const ROADMAP = [
  {
    tag: "Primeras semanas",
    title: "Bases que sí se sostienen",
    text: "Hipnosis desde cero: qué es realmente el trance, cómo se induce y cómo se sale. Aunque ya sepas hipnotizar, aquí es donde se ordenan los vacíos.",
  },
  {
    tag: "Siguiente paso",
    title: "Tu primera sesión completa",
    text: "Inducciones rápidas y estructura de sesión. Dejas de improvisar y pasas a tener un protocolo que puedes repetir con seguridad.",
  },
  {
    tag: "El grueso del año",
    title: "Te especializas donde quieras",
    text: "Ansiedad, peso, tabaquismo, dolor, sexualidad, deporte, hipnoparto. Eliges las formaciones según los pacientes que quieras atender.",
  },
  {
    tag: "Los 12 meses",
    title: "Nunca practicas solo",
    text: "Clases en vivo, bitácoras y comunidad funcionando en paralelo todo el año. Es la parte que no puedes comprar en un curso suelto.",
  },
];

export default function MentoriaQueEs() {
  return (
    <SectionWrapper id="que-es" className="relative px-4 bg-[#080e15]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,196,176,0.07)_0%,transparent_65%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            La respuesta
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Qué es exactamente la{" "}
            <span className="gradient-trance-text">Mentoría Hipnomente</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/75 text-base md:text-lg leading-relaxed"
          >
            Un programa de un año que combina tres cosas que normalmente se
            venden por separado: formación completa, acompañamiento en vivo y una
            red de colegas. Ninguna de las tres funciona bien sin las otras dos.
          </motion.p>
        </div>

        {/* Los tres motores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-glass glow-border rounded-2xl p-7 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-violet-300" />
              </div>
              <p className="text-[#8fe6da]/80 text-xs font-bold uppercase tracking-widest mb-2">
                {p.label}
              </p>
              <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-slate-400/75 text-sm leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Ruta del año */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="w-12 h-12 rounded-xl bg-[#22C4B0]/10 border border-[#22C4B0]/25 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6 text-[#22C4B0]" />
            </div>
            <h3
              className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Así se ve tu año dentro de la mentoría
            </h3>
            <p className="text-slate-400/75 text-sm md:text-base leading-relaxed">
              Todo el contenido está disponible desde el primer día, así que esta
              es una ruta recomendada y no un calendario cerrado. Tú decides el
              ritmo; lo único fijo son las clases en vivo de cada semana.
            </p>
          </motion.div>

          <div className="relative">
            {/* Línea de la ruta */}
            <div
              aria-hidden="true"
              className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/25 to-[#22C4B0]/50"
            />
            <div className="flex flex-col gap-8">
              {ROADMAP.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#0d1420] border border-violet-500/40 flex items-center justify-center text-violet-300 text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-[#8fe6da]/70 text-xs font-bold uppercase tracking-widest mb-1.5">
                    {step.tag}
                  </p>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-slate-400/75 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
