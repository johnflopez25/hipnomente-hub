export interface Market {
  code: string;
  currency: string;
  priceBasico: string;
  priceVip: string;
  // Plain numeric amounts (same currency as `currency`) for Meta Pixel value tracking —
  // kept separate from the display strings above since those use per-locale formatting
  // (thousands/decimal separators differ by country) and aren't safe to parse back.
  priceBasicoValue: number;
  priceVipValue: number;
}

// Same Hotmart checkout link for every market (LINK_BASICO/LINK_VIP in DesafioHero.tsx) —
// Hotmart charges in the buyer's local currency at checkout. These values are only for
// on-page price display so the copy matches what the buyer will actually be charged.
export const MARKETS = {
  general: {
    code: "general",
    currency: "USD",
    priceBasico: "$29",
    priceVip: "$59",
    priceBasicoValue: 29,
    priceVipValue: 59,
  },
  co: {
    code: "co",
    currency: "COP",
    priceBasico: "$99.850",
    priceVip: "$197.000",
    priceBasicoValue: 99850,
    priceVipValue: 197000,
  },
  ar: {
    code: "ar",
    currency: "ARS",
    priceBasico: "$49.339",
    priceVip: "$102.697",
    priceBasicoValue: 49339,
    priceVipValue: 102697,
  },
  mx: {
    code: "mx",
    currency: "MXN",
    priceBasico: "$619.44",
    priceVip: "$1,289.92",
    priceBasicoValue: 619.44,
    priceVipValue: 1289.92,
  },
  br: {
    code: "br",
    currency: "BRL",
    priceBasico: "R$164,00",
    priceVip: "R$339,00",
    priceBasicoValue: 164.0,
    priceVipValue: 339.0,
  },
} as const satisfies Record<string, Market>;

export type MarketCode = keyof typeof MARKETS;
