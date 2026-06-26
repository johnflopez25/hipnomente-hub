"use client";

import { motion, Variants } from "framer-motion";
import {
  Brain,
  Handshake,
  Ruler,
  UserCog,
  Hammer,
  Smile,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const benefits = [
  {
    icon: Brain,
    title: "BASES PARA REALIZAR HIPNOSIS EFECTIVA",
    desc: "Aprenda todos los elementos necesarios para hipnotizar personas.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    icon: Handshake,
    title: "CÓMO INICIAR UNA INDUCCIÓN HIPNÓTICA",
    desc: "Aprenda y aplique todas las técnicas de inducción rápida.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Ruler,
    title: "CÓMO SABER SI UNA PERSONA SE PUEDE HIPNOTIZAR",
    desc: "Aprenda todas las pruebas de sugestionabilidad y saber si una persona es apta para ser hipnotizada.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    icon: UserCog,
    title: "10 TÉCNICAS DE HIPNOSIS RÁPIDA",
    desc: "Aplique las técnicas más efectivas para lograr inducciones rápidas.",
    color: "text-sky-300",
    bg: "bg-sky-500/8",
    border: "border-sky-500/15",
  },
  {
    icon: Hammer,
    title: "HIPNOSIS PROFUNDA (TRANCE)",
    desc: "Entienda los modelos de reinducción hipnótica y logre llevar a la hipnosis a una experiencia profunda.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Smile,
    title: "APLICAR HIPNOSIS EN INSOMNIO Y ANSIEDAD",
    desc: "Aplique la hipnosis en usted mismo y reciba todos lo beneficios comprobados.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Benefits() {
  return (
    <SectionWrapper id="que-aprenderas" className="relative px-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,78,110,0.10)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            El Programa
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 uppercase"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Estos son los temas que voy a abordar en el taller de hipnosis
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-lg max-w-2xl mx-auto"
          >
            Un día completo de práctica intensiva donde cada hora tiene un
            propósito claro. Nada de relleno, todo aplicable desde el primer
            momento.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              className={`card-glass rounded-2xl p-6 border ${b.border} hover:scale-[1.02] transition-transform duration-200 group`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${b.bg} ${b.color} mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-slate-300/60 text-sm leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
