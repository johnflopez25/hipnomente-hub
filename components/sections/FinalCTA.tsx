"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Flame } from "lucide-react";
import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountdownTimer";
import SectionWrapper from "@/components/ui/SectionWrapper";

const CTA_LINK = "https://pay.hotmart.com/T106206891Q";

export default function FinalCTA() {
  return (
    <SectionWrapper
      id="inscripcion"
      className="relative px-4 overflow-hidden"
    >
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(14,78,110,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-2 text-amber-300 text-sm font-semibold mb-8"
        >
          <Flame className="w-4 h-4 text-amber-400" />
          Últimos cupos disponibles — No esperes más
          <Flame className="w-4 h-4 text-amber-400" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Tu momento de aprender{" "}
          <span className="gradient-brand-text">hipnosis</span> es{" "}
          <span className="shimmer-text">ahora</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-300/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          En un solo día vas a salir siendo capaz de hipnotizar. No dentro de
          meses. No &quot;con práctica&quot;. El mismo día del evento. ¿Estás listo?
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 text-sky-400 text-sm">
            <Clock className="w-4 h-4" />
            <span className="uppercase tracking-widest font-semibold text-xs">
              El evento comienza en
            </span>
          </div>
          <CountdownTimer />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <Button
            variant="gold"
            size="xl"
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold tracking-wide"
          >
            Reservar mi cupo ahora
            <ArrowRight className="w-6 h-6" />
          </Button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-slate-400/60 text-xs"
        >
          {[
            "✅ Práctica garantizada desde el día 1",
            "🔒 Proceso de inscripción seguro",
            "📍 Hotel B3 · Bogotá",
            "📅 Sáb 13 de Junio",
          ].map((text) => (
            <span key={text}>{text}</span>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
