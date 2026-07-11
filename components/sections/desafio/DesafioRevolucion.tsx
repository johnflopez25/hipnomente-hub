"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Sparkles } from "lucide-react";

export default function DesafioRevolucion() {
  return (
    <SectionWrapper
      id="revolucion"
      className="relative px-4 py-16 md:py-24 bg-[#070a12] bg-[radial-gradient(ellipse_at_center,rgba(91,63,224,0.12)_0%,transparent_70%)]"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Small badge icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center p-3 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 text-violet-400"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Se está produciendo una revolución entre los{" "}
          <span className="gradient-trance-text">HIPNOTISTAS</span> e{" "}
          <span className="gradient-trance-text">HIPNOTERAPEUTAS</span> que aplican
          la hipnosis de forma correcta y están logrando resultados reales.
        </motion.h2>

        {/* Subtitle / Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-glass glow-border max-w-2xl mx-auto p-6 md:p-8 rounded-2xl relative overflow-hidden"
        >
          {/* Inner ambient light */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#22C4B0]/10 blur-2xl rounded-full" />

          <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
            <strong className="gradient-trance-text font-extrabold">La hipnosis es un verdadero superpoder:</strong>{" "}
            El poder de ayudar a personas y pacientes a acceder a niveles profundos de su mente que no se alcanzan con otras técnicas.
          </p>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
