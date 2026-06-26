"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { trackViewContent, trackLead } from "@/lib/meta-pixel";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Sections to automatically track when they become visible.
 * Maps section element ID → Meta Pixel event payload.
 */
const TRACKED_SECTIONS = [
  { id: "que-aprenderas", name: "Programa - Qué Aprenderás" },
  { id: "para-quien", name: "¿Para Quién?" },
  { id: "testimonios", name: "Testimonios" },
  { id: "instructor", name: "Instructor" },
  { id: "faq", name: "Preguntas Frecuentes" },
];

/** The pricing section triggers a higher-value Lead event */
const PRICING_SECTION_ID = "detalles-evento";

function ScrollTracker() {
  const trackedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!PIXEL_ID) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (trackedRef.current.has(id)) return;
          trackedRef.current.add(id);

          if (id === PRICING_SECTION_ID) {
            trackLead();
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

    // Observe all tracked sections + pricing
    const allIds = [...TRACKED_SECTIONS.map((s) => s.id), PRICING_SECTION_ID];
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export default function MetaPixel() {
  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <ScrollTracker />
    </>
  );
}
