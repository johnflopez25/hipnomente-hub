"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

export default function DesafioFinalCTA() {
  return (
    <SectionWrapper
      id="inscribete"
      className="relative px-4 bg-[radial-gradient(ellipse_at_center,rgba(14,78,110,0.15)_0%,transparent_70%)]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Últimos cupos disponibles
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          El momento de aprender a{" "}
          <span className="gradient-brand-text">hipnotizar</span> es ahora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-300/70 text-lg mb-10 leading-relaxed"
        >
          Los curiosos seguirán buscando tutoriales gratuitos que no llevan a
          ningún lado. Los que actúan hoy estarán hipnotizando personas reales en
          7 días. ¿En qué grupo quieres estar?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button
            variant="gold"
            size="xl"
            href="#precios"
            className="font-bold uppercase tracking-wide"
          >
            VIP con Grabación — $197
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="xl"
            href="#precios"
            className="font-semibold"
          >
            Solo En Vivo — $97
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-slate-400/60 text-sm"
        >
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>Garantía de 7 días · Pago 100% seguro · Dos planes disponibles</span>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
