export interface Market {
  code: string;
  currency: string;
  priceBasico: string;
  priceVip: string;
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
  },
  co: {
    code: "co",
    currency: "COP",
    priceBasico: "$99.850",
    priceVip: "$197.000",
  },
  ar: {
    code: "ar",
    currency: "ARS",
    priceBasico: "$49.339",
    priceVip: "$102.697",
  },
  mx: {
    code: "mx",
    currency: "MXN",
    priceBasico: "$619.44",
    priceVip: "$1,289.92",
  },
  br: {
    code: "br",
    currency: "BRL",
    priceBasico: "R$164,00",
    priceVip: "R$339,00",
  },
} as const satisfies Record<string, Market>;

export type MarketCode = keyof typeof MARKETS;
