"use client";

// LittleHotelierWidget — Phase 4 integration point for Little Hotelier booking engine
// When src is empty: shows the current placeholder (pre-launch mode)
// When src is set: renders the Little Hotelier iframe booking widget inline
// Source: CLAUDE.md Conversion Flow Rule (no off-domain redirect)
// Phase 4: Angela provides widget URLs from Little Hotelier dashboard → each property → Widget

interface LittleHotelierWidgetProps {
  src: string;             // Little Hotelier widget URL from site.ts per stay
  fallbackHref: string;    // External Little Hotelier URL (direct-book.com) — used as CTA fallback
}

export function LittleHotelierWidget({ src }: LittleHotelierWidgetProps) {
  // Pre-Phase 4: render nothing — the green "Check Availability" button on
  // /stays/[slug] handles the single CTA. The previous placeholder card
  // duplicated that button and Angela flagged it on the 2026-05-18 call.
  if (!src) return null;

  // Phase 4 active: render Little Hotelier widget iframe
  return (
    <div className="rounded-xl overflow-hidden" style={{ minHeight: 380 }}>
      <iframe
        src={src}
        width="100%"
        height="420"
        frameBorder="0"
        title="Check availability and book"
        style={{ display: "block", border: "none" }}
        loading="lazy"
      />
    </div>
  );
}
