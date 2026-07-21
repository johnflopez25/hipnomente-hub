"use client";

import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  Briefcase,
  Globe,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const skills = [
  {
    icon: Target,
    title: "Los problemas que resuelve la hipnosis",
    description:
      "Conoce los problemas que soluciona la hipnosis y cómo la puedes incorporar a tus sesiones de terapia.",
  },
  {
    icon: ShieldCheck,
    title: "Pierde el miedo, gana confianza",
    description:
      "Cómo perder el miedo y tener más confianza al aplicar hipnosis con tu paciente.",
  },
  {
    icon: Zap,
    title: "Resultados más rápidos y efectivos",
    description:
      "Aprende cómo generar resultados más rápidos y efectivos utilizando la hipnosis.",
  },
  {
    icon: Award,
    title: "Únete a los pocos que la dominan",
    description:
      "Cómo convertirte en uno de los pocos terapeutas que aplican hipnosis rápida para realizar terapias efectivas.",
  },
];

const method = {
  icon: Sparkles,
  title: "Un método exclusivo, desarrollado por mí",
  description:
    "Conoce el método exclusivo que he desarrollado y ha permitido a mis estudiantes tener excelentes resultados con sus pacientes.",
};

const business = [
  {
    icon: Briefcase,
    title: "Llena tu agenda con pacientes de alto valor",
    description:
      "Cómo llenar tu agenda con pacientes de alto valor y construir un modelo de negocio con la hipnosis.",
  },
  {
    icon: Globe,
    title: "Atiende pacientes en cualquier parte del mundo",
    description:
      "Cómo diferenciarte del mercado atendiendo pacientes en cualquier parte del mundo.",
  },
];

export default function DesafioAprenderas() {
  return (
    <SectionWrapper
      id="aprenderas"
      className="relative px-4 bg-[#08101a] bg-[radial-gradient(ellipse_at_center,rgba(91,63,224,0.10)_0%,transparent_70%)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-violet-300 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Lo que vas a lograr
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ¿Qué aprenderás en el{" "}
            <span className="gradient-trance-text">Desafío?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/70 text-lg max-w-2xl mx-auto"
          >
            En 7 días de práctica guiada, desarrollarás habilidades reales —
            no conocimientos teóricos que nunca usas.
          </motion.p>
        </div>

        {/* Core skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {skills.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-glass glow-border rounded-2xl p-7 flex gap-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Signature method — featured card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="card-glass glow-border border-amber-500/25 rounded-2xl p-7 sm:p-8 mb-10 flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"
          />
          <div className="shrink-0 w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center relative z-10">
            <method.icon className="w-7 h-7 text-amber-400" />
          </div>
          <div className="relative z-10">
            <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">
              Método Hipnomente
            </p>
            <h3 className="text-white font-bold text-xl mb-2 leading-snug">
              {method.title}
            </h3>
            <p className="text-slate-300/80 text-sm leading-relaxed max-w-2xl">
              {method.description}
            </p>
          </div>
        </motion.div>

        {/* Business outcomes */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[#8fe6da] font-semibold text-sm uppercase tracking-widest mb-5 text-center"
        >
          Y a nivel profesional, también vas a poder
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {business.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              viewport={{ once: true }}
              className="card-glass glow-border rounded-2xl p-7 flex gap-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#22C4B0]/10 border border-[#22C4B0]/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[#22C4B0]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-400/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            variant="gold"
            size="lg"
            href="#precios"
            target={undefined}
            rel={undefined}
            className="font-bold uppercase tracking-wide"
          >
            Quiero participar en el desafío
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
