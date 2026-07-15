import type { Metadata } from "next";
import DesafioLanding from "@/components/sections/desafio/DesafioLanding";

// Paid-traffic variant for Meta Ads campaigns targeting Brasil — same page as
// /hipnotizar-en-7-dias, only the displayed price/currency changes (see markets.ts).
// Copy stays in Spanish for now (confirmed with the client) — only price/currency differ.
// noindex: this is an ad-landing duplicate, not meant to compete in organic search.
export const metadata: Metadata = {
  title: "Desafío: Aprende a Hipnotizar en 7 Días | Hipnomente",
  description:
    "Entrenamiento intensivo online. Aprende a hipnotizar desde cero en 7 días con sesiones diarias en vivo por Zoom. Guiado por Juan Roberto Rodríguez, psicólogo e hipnoterapeuta con más de 20 años de experiencia.",
  openGraph: {
    title: "Desafío: Aprende a Hipnotizar en 7 Días",
    description:
      "7 días de práctica guiada para aprender a hipnotizar desde cero. Online, en vivo, 27 de julio de 2026.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function DesafioHipnotizarBRPage() {
  return <DesafioLanding market="br" />;
}
