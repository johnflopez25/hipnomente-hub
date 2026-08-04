"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Baby,
  Brain,
  ChevronLeft,
  ChevronRight,
  Cigarette,
  Dumbbell,
  HeartPulse,
  Layers,
  Library,
  Scale,
  Sparkles,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

interface Tile {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

interface Row {
  label: string;
  caption: string;
  accent: string;
  tiles: Tile[];
}

// Los carriles imitan la plataforma real (estilo Netflix): categorías con
// desplazamiento horizontal en vez de una cuadrícula plana, para que se entienda
// de un vistazo que hay biblioteca y no un par de videos.
const ROWS: Row[] = [
  {
    label: "Fundamentos",
    caption: "Por aquí empieza todo el mundo, sepa o no sepa hipnotizar",
    accent: "from-violet-600/70 to-violet-900/20",
    tiles: [
      {
        icon: Brain,
        title: "Hipnosis desde Cero",
        subtitle: "El curso base: qué es el trance, cómo se induce y cómo se cierra una sesión con seguridad.",
      },
      {
        icon: Zap,
        title: "Inducciones Rápidas",
        subtitle: "Las técnicas que llevan a una persona al trance en minutos, sin depender de guiones largos.",
      },
    ],
  },
  {
    label: "Formaciones terapéuticas",
    caption: "Elige en qué te especializas según los pacientes que quieras atender",
    accent: "from-[#0e7f78]/70 to-[#0a3b3a]/20",
    tiles: [
      {
        icon: Wind,
        title: "Hipnosis para la Ansiedad",
        subtitle: "El motivo de consulta más frecuente, abordado paso a paso.",
      },
      {
        icon: Scale,
        title: "Hipnosis para Bajar de Peso",
        subtitle: "Trabajo con hábitos, ansiedad por comer y relación con el cuerpo.",
      },
      {
        icon: Cigarette,
        title: "Hipnosis para Dejar de Fumar",
        subtitle: "Protocolo completo para cesación del tabaquismo.",
      },
      {
        icon: HeartPulse,
        title: "Hipnosis para el Manejo del Dolor",
        subtitle: "Dolor agudo y crónico, uno de los usos más documentados de la hipnosis.",
      },
      {
        icon: Sparkles,
        title: "Hipnosis para Problemas Sexuales",
        subtitle: "Un área con alta demanda y muy pocos profesionales preparados.",
      },
      {
        icon: Dumbbell,
        title: "Hipnosis Deportiva",
        subtitle: "Rendimiento, concentración y manejo de la presión en competencia.",
      },
      {
        icon: Baby,
        title: "Hipnoparto",
        subtitle: "Acompañamiento del embarazo y el parto con hipnosis.",
      },
    ],
  },
  {
    label: "Master Class y biblioteca",
    caption: "Contenido que se suma durante todo el año",
    accent: "from-amber-600/60 to-amber-900/15",
    tiles: [
      {
        icon: Sparkles,
        title: "Master Class",
        subtitle: "Sesiones monográficas sobre temas puntuales de la práctica clínica.",
      },
      {
        icon: Library,
        title: "+250 horas de grabación",
        subtitle: "Biblioteca disponible para repasar cuando quieras durante tu año de acceso.",
      },
      {
        icon: Layers,
        title: "Bitácoras anteriores",
        subtitle: "Las sesiones de preguntas y respuestas que ya se hicieron, con casos reales resueltos.",
      },
    ],
  },
];

function Carousel({ row }: { row: Row }) {
  const scroller = useRef<HTMLDivElement>(null);

  // Avanza por múltiplos exactos del ancho de una tarjeta. Con
  // `scroll-snap-type: mandatory`, un desplazamiento que cae entre dos puntos de
  // anclaje hace que Chrome devuelva el carril a la posición anterior y el botón
  // parece no responder; saltando de anclaje en anclaje eso no ocurre.
  const scrollByCards = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;
    const step =
      cards.length > 1
        ? cards[1].offsetLeft - cards[0].offsetLeft
        : cards[0].offsetWidth;
    if (step <= 0) return;
    const perView = Math.max(1, Math.floor(el.clientWidth / step));
    el.scrollBy({ left: dir * step * perView, behavior: "smooth" });
  };

  return (
    <div className="mb-14 last:mb-0">
      <div className="flex items-end justify-between gap-4 mb-5 px-1">
        <div>
          <h3 className="text-white font-bold text-lg md:text-xl">
            {row.label}
          </h3>
          <p className="text-slate-400/60 text-sm mt-1">{row.caption}</p>
        </div>
        <div className="hidden md:flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label={`Ver anteriores de ${row.label}`}
            className="w-9 h-9 rounded-full card-glass glow-border flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label={`Ver siguientes de ${row.label}`}
            className="w-9 h-9 rounded-full card-glass glow-border flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-thin"
      >
        {row.tiles.map((tile) => (
          <article
            key={tile.title}
            className="snap-start shrink-0 w-[78%] sm:w-[300px] rounded-2xl overflow-hidden glow-border bg-[#101a26] group hover:-translate-y-1 transition-transform duration-300"
          >
            <div
              className={`relative h-32 bg-gradient-to-br ${row.accent} flex items-center justify-center overflow-hidden`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]"
              />
              <tile.icon className="w-10 h-10 text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <h4 className="text-white font-bold text-base mb-2 leading-snug">
                {tile.title}
              </h4>
              <p className="text-slate-400/70 text-sm leading-relaxed">
                {tile.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function MentoriaPlataforma() {
  return (
    <SectionWrapper id="plataforma" className="relative px-4 bg-[#060810]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,63,224,0.10)_0%,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-violet-300 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Dentro de la plataforma
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Todo tu año de formación,{" "}
            <span className="gradient-trance-text">en un solo lugar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-300/75 text-base md:text-lg leading-relaxed"
          >
            Entras a la plataforma privada de Hipnomente y eliges qué ver, como
            en cualquier servicio de streaming. La diferencia es que aquí cada
            módulo es una formación completa que puedes aplicar en consulta.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          {ROWS.map((row) => (
            <Carousel key={row.label} row={row} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <Button
            variant="trance"
            size="lg"
            href="#precios"
            className="font-semibold"
          >
            Quiero acceso a todo esto durante un año
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
