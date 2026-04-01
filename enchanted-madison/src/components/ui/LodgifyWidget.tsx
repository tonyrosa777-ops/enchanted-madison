"use client";

// LodgifyWidget — Phase 4 integration point for Lodgify booking engine
// When src is empty: shows the current placeholder (pre-launch mode)
// When src is set: renders the Lodgify iframe booking widget inline
// Source: CLAUDE.md Conversion Flow Rule (no off-domain redirect)
// Phase 4: Angela provides widget URLs from Lodgify dashboard → each property → Widget

interface LodgifyWidgetProps {
  src: string;             // Lodgify widget URL from site.ts per stay
  fallbackHref: string;    // External Lodgify URL (direct-book.com) — used as CTA fallback
}

export function LodgifyWidget({ src, fallbackHref }: LodgifyWidgetProps) {
  if (!src) {
    // Pre-Phase 4: placeholder with external CTA (current behavior preserved)
    return (
      <div
        className="rounded-xl p-4 text-center text-sm"
        style={{ background: "var(--bg-elevated)", color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
      >
        <p className="eyebrow text-[10px] mb-2" style={{ color: "var(--text-secondary)" }}>
          Booking calendar
        </p>
        <p className="text-xs leading-relaxed mb-3">
          Real-time availability launching June 2026.
        </p>
        <a
          href={fallbackHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold underline"
          style={{ color: "var(--primary)", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}
        >
          Check current availability →
        </a>
      </div>
    );
  }

  // Phase 4 active: render Lodgify widget iframe
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
