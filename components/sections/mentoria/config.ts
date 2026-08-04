// Única fuente de verdad de la landing de la Mentoría: link de pago, precios y
// fecha límite de la oferta. Ningún componente de components/sections/mentoria
// vuelve a escribir estos valores a mano — se cambia aquí y se propaga a toda
// la página (hero, sección de precios, FAQ, CTA final y Meta Pixel).

export const WHATSAPP_NUMBER = "573108574778";

export const WA_MESSAGE =
  "Hola, quiero información sobre la Mentoría Hipnomente";

export const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

// Link de pago de la Mentoría. Si se pone en null, los botones de compra caen a
// WhatsApp en lugar de quedar rotos o apuntando a una URL inexistente.
export const LINK_MENTORIA: string | null =
  "https://pay.hotmart.com/X97798683V?off=1koqhlf2";

/** Destino real de todos los CTA de compra de la página. */
export const CHECKOUT_LINK: string = LINK_MENTORIA ?? WA_LINK;

// Fecha y hora en que termina el precio de lanzamiento: 4 de agosto de 2026 a las
// 9:00 p.m. hora Colombia (UTC-5). Cambia solo esta línea para mover el contador
// de toda la página. Si la fecha ya pasó, los bloques de urgencia se ocultan solos.
export const OFFER_DEADLINE = new Date("2026-08-04T21:00:00-05:00");

export const PRICE = {
  currency: "USD",
  /** Precio regular, se muestra tachado. */
  regular: "USD 1.900",
  launch: "USD 1.200",
  savings: "USD 700",
  /** Equivalente mensual (1.200 / 12) para anclar el valor. */
  monthly: "USD 100",
  /** Monto numérico para el value de Meta Pixel. */
  value: 1200,
} as const;

export type CountryCode = "co" | "mx" | "ar" | "pe";

export interface LocalPrice {
  code: CountryCode;
  country: string;
  amount: string;
  currency: string;
}

// Equivalentes locales de los USD 1.200 al momento del lanzamiento. Son solo
// para mostrar en pantalla: el cobro final lo hace la pasarela en la moneda del
// comprador, por eso van como texto ya formateado con los separadores de cada país.
export const LOCAL_PRICES: LocalPrice[] = [
  { code: "co", country: "Colombia", amount: "$3.700.000", currency: "COP" },
  { code: "mx", country: "México", amount: "$24.190", currency: "MXN" },
  { code: "ar", country: "Argentina", amount: "$1.974.400", currency: "ARS" },
  { code: "pe", country: "Perú", amount: "S/ 4.087", currency: "PEN" },
];
