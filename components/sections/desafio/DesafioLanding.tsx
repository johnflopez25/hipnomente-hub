"use client";

import Instructor from "@/components/sections/Instructor";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import DesafioHero from "./DesafioHero";
import DesafioPorQue from "./DesafioPorQue";
import DesafioAprenderas from "./DesafioAprenderas";
import DesafioRevolucion from "./DesafioRevolucion";
import DesafioObstaculos from "./DesafioObstaculos";
import DesafioTestimonios from "./DesafioTestimonios";
import DesafioPricing from "./DesafioPricing";
import DesafioFAQ from "./DesafioFAQ";
import DesafioFinalCTA from "./DesafioFinalCTA";
import { MarketProvider } from "./MarketContext";
import DesafioPixelTracker from "./DesafioPixelTracker";
import type { MarketCode } from "./markets";

// Shared body for every country variant of the "Hipnotizar en 7 Días" landing.
// Copy/design is identical across markets — only the price shown (via MarketProvider)
// changes. Add a new country by adding it to markets.ts and a thin page.tsx that
// renders <DesafioLanding market="xx" />.
export default function DesafioLanding({ market }: { market: MarketCode }) {
  return (
    <MarketProvider market={market}>
      <DesafioPixelTracker />
      <main className="min-h-screen overflow-x-hidden">
        <DesafioHero />
        <DesafioPorQue />
        <Instructor />
        <DesafioAprenderas />
        <DesafioRevolucion />
        <DesafioObstaculos />
        <DesafioTestimonios />
        <DesafioPricing />
        <DesafioFAQ />
        <DesafioFinalCTA />
        <Footer
          isOnline={true}
          eventDateText="Del 27 de julio al 2 de agosto · 7:00 p.m."
          eventLocationText="Transmisión en Vivo por Zoom"
          waText="Hola, me gustaría recibir más información sobre el desafío de 7 días"
          customNavLinks={[
            { href: "#por-que", label: "¿Por qué?" },
            { href: "#aprenderas", label: "Qué aprenderás" },
            { href: "#testimonios", label: "Testimonios" },
            { href: "#precios", label: "Precios" },
            { href: "#faq", label: "FAQ" },
          ]}
        />
        <WhatsAppButton message="Hola, me gustaría recibir más información sobre el desafío de 7 días" />
      </main>
    </MarketProvider>
  );
}
