"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, Target } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const learnings = [
  {
    icon: Zap,
    title: "Tu primera hipnosis rápida y profunda",
    description:
      "Ejecutarás tu primera hipnosis real antes de terminar la semana. No teoría — práctica desde el día uno.",
  },
  {
    icon: Brain,
    title: "Inducción, profundización y reinducción",
    description:
      "Dominarás el proceso completo: cómo llevar a alguien al estado hipnótico, profundizarlo y volver a inducirlo.",
  },
  {
    icon: Target,
    title: "Técnicas de hipnosis rápida",
    description:
      "Aprenderás técnicas efectivas que puedes aplicar en cualquier persona de forma directa y segura.",
  },
  {
    icon: Shield,
    title: "Protocolo terapéutico base",
    description:
      "Saldrás con un protocolo aplicable en sesiones reales, con límites éticos claros y criterios de seguridad.",
  },
];

export default function DesafioAprenderas() {
  return (
    <SectionWrapper
      id="aprenderas"
      className="relative px-4 bg-[radial-gradient(ellipse_at_center,rgba(14,78,110,0.10)_0%,transparent_70%)]"
    >
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
            <span className="gradient-brand-text">Desafío?</span>
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {learnings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-glass glow-border rounded-2xl p-7 flex gap-5"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-sky-400" />
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
