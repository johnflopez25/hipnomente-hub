"use client";

import { motion, Variants } from "framer-motion";
import { User, Briefcase, Store } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const profiles = [
  {
    icon: User,
    headline: "Cualquier Persona",
    desc: "Personas interesadas en aprender hipnosis desde cero, sin importar su nivel de experiencia.",
    gradient: "from-sky-600/15 to-blue-600/15",
    border: "border-sky-500/25",
    accent: "text-sky-400",
    bgIcon: "bg-sky-500/10",
  },
  {
    icon: Briefcase,
    headline: "Profesional",
    desc: "Si usted es un profesional puede utilizar la hipnosis en diversas aplicaciones diarias en su consultorio u oficina.",
    gradient: "from-teal-600/15 to-cyan-600/15",
    border: "border-teal-500/25",
    accent: "text-teal-400",
    bgIcon: "bg-teal-500/10",
  },
  {
    icon: Store,
    headline: "Ganar Dinero con Hipnosis",
    desc: "Emprendedores que desean convertir una habilidad única en una fuente estable de ingresos.",
    gradient: "from-amber-600/15 to-orange-600/15",
    border: "border-amber-500/25",
    accent: "text-amber-400",
    bgIcon: "bg-amber-500/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ForWho() {
  return (
    <SectionWrapper id="para-quien" className="relative px-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,78,110,0.08)_0%,transparent_70%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Este workshop esta diseñado para..
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAiPjxwYXRoIGQ9Ik0wLDVjNSwwLDUsLTMsMTAsLTNjNSwwLDUsMywxMCwzYzUsMCw1LC0zLDEwLC0zYzUsMCw1LDMsMTAsM2M1LDAsNSwtMywxMCwtM2M1LDAsNSwzLDEwLDNjNSwwLDUsLTMsMTAsLTNjNSwwLDUsMywxMCwzYzUsMCw1LC0zLDEwLC0zYzUsMCw1LDMsMTAsMyIgc3Ryb2tlPSJ3aGl0ZSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=')] bg-no-repeat bg-center mx-auto opacity-70"
          />
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {profiles.map((p) => (
            <motion.div
              key={p.headline}
              variants={item}
              className={`relative card-glass rounded-2xl p-8 border ${p.border} bg-gradient-to-br ${p.gradient} hover:scale-[1.02] transition-transform duration-200 flex flex-col items-center text-center`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${p.bgIcon} ${p.accent} mb-6 transition-transform duration-200`}
              >
                <p.icon className="w-8 h-8" />
              </div>

              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {p.headline}
              </h3>
              <p className="text-slate-200/80 text-base leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
