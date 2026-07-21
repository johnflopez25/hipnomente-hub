import type { Metadata } from "next";
import DesafioLanding from "@/components/sections/desafio/DesafioLanding";

// Paid-traffic variant for Meta Ads campaigns targeting Argentina — same page as
// /hipnotizar-en-7-dias, only the displayed price/currency changes (see markets.ts).
// noindex: this is an ad-landing duplicate, not meant to compete in organic search.
export const metadata: Metadata = {
  title: "Desafío: Hipnosis para Terapeutas en 7 Días | Hipnomente",
  description:
    "Entrenamiento en vivo de 7 días para terapeutas que quieren incorporar hipnosis a sus sesiones. Con Juan Roberto Rodríguez, psicólogo e hipnoterapeuta.",
  alternates: {
    canonical: "https://hipnomente.com/hipnotizar-en-7-dias/ar",
  },
  openGraph: {
    title: "Desafío: Hipnosis para Terapeutas en 7 Días",
    description:
      "Incorpora la hipnosis a tu práctica terapéutica en 7 días de entrenamiento en vivo por Zoom. Método exclusivo, resultados reales con tus pacientes.",
    url: "https://hipnomente.com/hipnotizar-en-7-dias/ar",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function DesafioHipnotizarARPage() {
  return <DesafioLanding market="ar" />;
}
