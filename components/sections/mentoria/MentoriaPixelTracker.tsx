"use client";

import { useEffect, useRef } from "react";
import { trackViewContent, trackLead } from "@/lib/meta-pixel";
import { PRICE } from "./config";

// El <MetaPixel /> global solo conoce los ids de sección de la home, así que sin
// esto ningún evento de scroll se dispararía en esta landing. Mismo enfoque que
// DesafioPixelTracker, con los ids propios de la mentoría.
const TRACKED_SECTIONS = [
  { id: "dudas", name: "Mentoría — Punto de partida" },
  { id: "que-es", name: "Mentoría — Qué es" },
  { id: "instructor", name: "Mentoría — Instructor" },
  { id: "plataforma", name: "Mentoría — Plataforma" },
  { id: "en-vivo", name: "Mentoría — Clases en vivo" },
  { id: "comunidad", name: "Mentoría — Comunidad" },
  { id: "para-quien", name: "Mentoría — Para quién es" },
  { id: "faq", name: "Mentoría — Preguntas frecuentes" },
];

const PRICING_SECTION_ID = "precios";

export default function MentoriaPixelTracker() {
  const trackedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (trackedRef.current.has(id)) return;
          trackedRef.current.add(id);

          if (id === PRICING_SECTION_ID) {
            trackLead(PRICE.value, PRICE.currency);
          } else {
            const section = TRACKED_SECTIONS.find((s) => s.id === id);
            if (section) trackViewContent(section.name);
          }
        });
      },
      { threshold: 0.3 }
    );

    [...TRACKED_SECTIONS.map((s) => s.id), PRICING_SECTION_ID].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
