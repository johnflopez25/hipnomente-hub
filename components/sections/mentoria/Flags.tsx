import type { CountryCode } from "./config";

// Banderas circulares dibujadas en SVG en vez de emoji: los emoji de bandera no
// se renderizan en Windows (se ven como dos letras) y aquí aparecen sobre fondo
// oscuro, donde ese fallback se nota mucho.
function FlagFrame({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block w-7 h-7 rounded-full overflow-hidden ring-1 ring-white/20 shrink-0">
      <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

const FLAGS: Record<CountryCode, React.ReactNode> = {
  co: (
    <>
      <rect width="24" height="12" fill="#FCD116" />
      <rect y="12" width="24" height="6" fill="#003893" />
      <rect y="18" width="24" height="6" fill="#CE1126" />
    </>
  ),
  mx: (
    <>
      <rect width="8" height="24" fill="#006847" />
      <rect x="8" width="8" height="24" fill="#ffffff" />
      <rect x="16" width="8" height="24" fill="#CE1126" />
    </>
  ),
  ar: (
    <>
      <rect width="24" height="8" fill="#74ACDF" />
      <rect y="8" width="24" height="8" fill="#ffffff" />
      <rect y="16" width="24" height="8" fill="#74ACDF" />
      <circle cx="12" cy="12" r="2.4" fill="#F6B40E" />
    </>
  ),
  pe: (
    <>
      <rect width="8" height="24" fill="#D91023" />
      <rect x="8" width="8" height="24" fill="#ffffff" />
      <rect x="16" width="8" height="24" fill="#D91023" />
    </>
  ),
};

export default function Flag({ code }: { code: CountryCode }) {
  return <FlagFrame>{FLAGS[code]}</FlagFrame>;
}
