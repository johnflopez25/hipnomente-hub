"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Calendar, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountdownTimer";

export const LINK_BASICO = "https://pay.hotmart.com/F106570275V";
export const LINK_VIP = "https://pay.hotmart.com/O106570435F";

// Julio 27 de 2026 a las 7:00 PM hora Colombia (UTC-5)
const DESAFIO_DATE = new Date("2026-07-27T19:00:00-05:00");

const EASE = [0.16, 1, 0.3, 1] as const;

export default function DesafioHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080e15] via-[#080e15] to-[#080e15]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(14,78,110,0.22)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(80,30,100,0.10)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="inline-flex items-center gap-2.5 bg-slate-950/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 text-xs font-bold tracking-wider text-slate-300"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
          <span>100% ONLINE · ZOOM · 7 DÍAS</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-white">Aprende a </span>
          <span className="gradient-brand-text">Hipnotizar</span>
          <span className="text-white"> en 7 Días</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Un entrenamiento intensivo diseñado para que aprendas a hipnotizar{" "}
          <strong className="text-white">desde cero</strong>, mediante ejercicios
          prácticos diarios. En solo 7 días desarrollarás las bases sólidas de la
          hipnosis.
        </motion.p>

        {/* Event info pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: Calendar, text: "27 de Julio, 2026" },
            { icon: Clock, text: "7:00 PM hora Colombia" },
            { icon: Monitor, text: "Zoom — 100% Online" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 card-glass glow-border rounded-full px-4 py-2 text-sm text-slate-300"
            >
              <Icon className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons — two plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto mb-10"
        >
          <Button
            variant="gold"
            size="lg"
            fullWidth
            href={LINK_VIP}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold tracking-wide uppercase"
          >
            VIP con Grabación — $197
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            fullWidth
            href={LINK_BASICO}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            Solo En Vivo — $97
          </Button>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            El desafío comienza en
          </p>
          <CountdownTimer targetDate={DESAFIO_DATE} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
