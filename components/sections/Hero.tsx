"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountdownTimer";

const CTA_LINK = "https://pay.hotmart.com/T106206891Q";

const EASE = [0.16, 1, 0.3, 1] as const;

const formBenefits = [
  "Aprenderás desde cero el mismo día",
  "8 horas de práctica real, no teoría",
  "Grupos pequeños — atención personalizada",
  "Certificado de participación incluido",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 opacity-[0.28] mix-blend-luminosity">
          <img
            src="/bogota.webp"
            alt="Bogotá Background"
            className="w-full h-full object-cover filter blur-[0.5px]"
          />
        </div>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080e15]/75 to-[#080e15]" />

        {/* Gradiente sutil centrado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(14,78,110,0.18)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center justify-center">
        {/* Badge descuento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="inline-flex items-center gap-2.5 bg-slate-950/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8 text-xs font-bold tracking-wider text-slate-300"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>PRIMER GRUPO:</span>
          <span className="gradient-gold-text font-black uppercase">50% DESCUENTO</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-white">¿Estás en Bogotá y quieres aprender{" "}</span>
          <span className="gradient-brand-text">hipnosis</span>
          <span className="text-white">{" "}para aplicarla en tu carrera?</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="text-lg md:text-xl text-slate-300/80 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Este es un <strong className="text-white">taller intensivo de 8 horas práctico</strong>.{" "}
          Apto solo para personas que quieren aprender la hipnosis y aplicarla en su profesión.
        </motion.p>

        {/* Event info pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: Calendar, text: "Sábado 13 de Junio, 2026" },
            { icon: MapPin, text: "Hotel B3 · Bogotá" },
            { icon: Users, text: "Grupos reducidos" },
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
          className="w-full max-w-sm mx-auto mb-10"
        >
          <Button
            variant="gold"
            size="lg"
            fullWidth
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold tracking-wide uppercase"
          >
            Reservar mi cupo ahora
            <ArrowRight className="w-5 h-5 ml-1" />
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
            El evento comienza en
          </p>
          <CountdownTimer />
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
