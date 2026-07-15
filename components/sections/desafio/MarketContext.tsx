"use client";

import { createContext, useContext, ReactNode } from "react";
import { MARKETS, MarketCode, Market } from "./markets";

const MarketContext = createContext<Market>(MARKETS.general);

export function MarketProvider({
  market,
  children,
}: {
  market: MarketCode;
  children: ReactNode;
}) {
  return (
    <MarketContext.Provider value={MARKETS[market]}>
      {children}
    </MarketContext.Provider>
  );
}

export function useMarket(): Market {
  return useContext(MarketContext);
}
