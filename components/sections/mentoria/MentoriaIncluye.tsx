"use client";

import { motion } from "framer-motion";
import {
  Award,
  CalendarDays,
  Clock,
  Radio,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Item {
  icon: LucideIcon;
  highlight: string;
  rest: string;
  detail?: string;
}

// Réplica en código de la pieza gráfica "¿Qué incluye la mentoría?" — mismos
// cinco bloques y el mismo reparto 3 + 2 centrado, para que la landing y las
// creatividades de campaña digan exactamente lo mismo.
const ITEMS: Item[] = [
  {
    icon: CalendarDays,
    highlight: "1 año",
    rest: "de acceso",
    detail: "a todos los contenidos",
  },
  {
    icon: Clock,
    highlight: "+250",
    rest: "horas",
    detail: "de grabación",
  },
  {
    icon: Radio,
    highlight: "Clases",
    rest: "en vivo online",
    detail: "Lunes y Miércoles",
  },
  {
    icon: Award,
    highlight: "Certificación",
    rest: "",
    detail: "al completar la formación",
  },
  {
    icon: Users,
    highlight: "Comunidad",
    rest: "Hipnomente",
    detail: "Acceso privado",
  },
];

function IncludeCard({ item, delay }: { item: Item; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      viewport={{ once: true }}
      className="card-glass glow-border rounded-2xl p-7 text-center flex flex-col items-center relative overflow-hidden"
    >
      <div className="w-14 h-14 rounded-full border border-violet-400/30 bg-violet-500/5 flex items-center justify-center mb-5">
        <item.icon className="w-6 h-6 text-[#22C4B0]" />
      </div>
      <p className="text-xl md:text-2xl font-extrabold leading-tight">
        <span className="gradient-trance-text">{item.highlight}</span>
        {item.rest ? <span className="text-white"> {item.rest}</span> : null}
      </p>
      {item.detail && (
        <p className="text-slate-400/75 text-sm mt-2">{item.detail}</p>
      )}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#22C4B0]/50 to-transparent"
      />
    </motion.div>
  );
}

export default function MentoriaIncluye() {
  return (
    <SectionWrapper id="incluye" className="relative px-4 bg-[#080e15]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,63,224,0.10)_0%,transparent_65%)] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-white text-center mb-4 uppercase tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ¿Qué incluye la mentoría?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="h-px w-40 mx-auto mb-14 bg-gradient-to-r from-transparent via-[#7ecde3] to-transparent"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {ITEMS.slice(0, 3).map((item, i) => (
            <IncludeCard key={item.highlight} item={item} delay={i * 0.1} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-3xl lg:mx-auto">
          {ITEMS.slice(3).map((item, i) => (
            <IncludeCard
              key={item.highlight}
              item={item}
              delay={0.3 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
