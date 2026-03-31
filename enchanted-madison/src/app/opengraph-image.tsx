// opengraph-image.tsx — Default OG image for enchantedmadison.com
// Rendered at /opengraph-image via Next.js ImageResponse
// Used by all pages that don't override their OG image
// 1200x630 — standard OG/Twitter card dimensions
// Design: deep forest green bg, warm cream text, gold accent — matches design-system.md §2

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Enchanted Collective — Luxury Glamping near Madison, Indiana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A2A1E",
          position: "relative",
        }}
      >
        {/* Subtle radial glow — warm woodland feel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(44,62,45,0.8) 0%, rgba(26,42,30,0) 70%)",
          }}
        />

        {/* Top gold rule */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(184,150,90,0.4)",
          }}
        />

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "0 80px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: 14,
              fontFamily: "serif",
              color: "#B8965A",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Madison, Indiana · Opening June 2026
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: 72,
              fontFamily: "serif",
              fontWeight: 700,
              color: "#FEFCFA",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            The Enchanted Collective
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: 60,
              height: 1,
              background: "#B8965A",
              margin: "4px 0",
            }}
          />

          {/* Subline */}
          <div
            style={{
              fontSize: 22,
              fontFamily: "serif",
              color: "rgba(254,252,250,0.7)",
              textAlign: "center",
              letterSpacing: "0.01em",
            }}
          >
            Luxury Glamping · Private Hot Tubs · Romantic Escapes
          </div>
        </div>

        {/* Bottom gold rule */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            right: 80,
            height: 1,
            background: "rgba(184,150,90,0.4)",
          }}
        />

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 13,
            fontFamily: "serif",
            color: "rgba(184,150,90,0.6)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          enchantedmadison.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
