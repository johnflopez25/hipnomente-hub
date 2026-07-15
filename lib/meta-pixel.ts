// Meta Pixel event tracking utilities
// Provides type-safe wrappers around fbq() calls

// Extend Window to include fbq
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Track a standard Meta Pixel event.
 * Safe to call even if the pixel hasn't loaded yet — silently no-ops.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("track", eventName);
    }
  }
}

/**
 * Track a custom (non-standard) Meta Pixel event.
 */
export function trackCustomEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.fbq) {
    if (params) {
      window.fbq("trackCustom", eventName, params);
    } else {
      window.fbq("trackCustom", eventName);
    }
  }
}

// ── Pre-built helpers for common events ──

/** User clicked a CTA button that leads to checkout */
export function trackInitiateCheckout(value?: number, currency: string = "COP") {
  trackEvent("InitiateCheckout", {
    content_name: "Hipnomente - Producto",
    content_category: "Digital",
    currency,
    ...(value !== undefined ? { value } : {}),
  });
}

/** User clicked the WhatsApp contact button */
export function trackContact() {
  trackEvent("Contact", {
    content_name: "WhatsApp Hipnomente",
  });
}

/** User scrolled to a key section */
export function trackViewContent(sectionName: string) {
  trackEvent("ViewContent", {
    content_name: sectionName,
  });
}

/** User scrolled to the pricing section */
export function trackLead(value?: number, currency: string = "COP") {
  trackEvent("Lead", {
    content_name: "Vio sección de precios",
    content_category: "Digital",
    currency,
    ...(value !== undefined ? { value } : {}),
  });
}
