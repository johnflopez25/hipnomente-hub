"use client";

import { useEffect, useRef } from "react";
import { trackViewContent, trackLead } from "@/lib/meta-pixel";
import { useMarket } from "./MarketContext";

// The site-wide <MetaPixel /> (app/layout.tsx) tracks PageView + Contact + InitiateCheckout
// everywhere, but its scroll-section tracker only knows the main homepage's section ids
// ("que-aprenderas", "para-quien", etc.) — none of those exist on this landing, so those
// events silently never fired here. This tracker uses this page's real section ids instead,
// and reports Lead with the actual price/currency of the active market.
const TRACKED_SECTIONS = [
  { id: "por-que", name: "Por qué no es para curiosos" },
  { id: "aprenderas", name: "Qué aprenderás" },
  { id: "testimonios", name: "Testimonios" },
  { id: "instructor", name: "Instructor" },
  { id: "faq", name: "Preguntas Frecuentes" },
];

const PRICING_SECTION_ID = "precios";

export default function DesafioPixelTracker() {
  const market = useMarket();
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
            trackLead(market.priceBasicoValue, market.currency);
          } else {
            const section = TRACKED_SECTIONS.find((s) => s.id === id);
            if (section) {
              trackViewContent(section.name);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const allIds = [...TRACKED_SECTIONS.map((s) => s.id), PRICING_SECTION_ID];
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [market]);

  return null;
}
