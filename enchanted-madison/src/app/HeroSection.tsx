"use client";

// HeroSection — autoplay loop video hero
// Video: muted, autoplay, loop. prefers-reduced-motion: paused.
// Text: left-aligned, gradient dark-left → transparent-right.
// All copy from siteData — zero hard-coded strings.

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/site";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { TypewriterText } from "@/components/animations/TypewriterText";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <div
      className="relative"
      style={{ height: "100vh" }}
    >
      <div
        className="overflow-hidden"
        style={{ height: "100vh", background: "var(--bg-dark)" }}
      >
        <Fireflies count={25} />
        <GodRays />
        {/* Video — autoplay loop, no controls */}
        <video
          ref={videoRef}
          src="/hero-forest.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay: dark-left → transparent-right.
            Keeps text legible while preserving video visibility on the right. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,42,30,0.92) 0%, rgba(26,42,30,0.75) 28%, rgba(26,42,30,0.35) 55%, rgba(26,42,30,0.05) 80%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom fade: softens cut between hero and next section */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "140px",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(26,42,30,0.6) 60%, var(--bg-dark) 100%)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        {/* ── Text overlay — left-aligned, top-anchored below the nav ───────
            Uses items-start + explicit top padding (header-safe zone) so the
            content block can never overlap the fixed header, even when the
            H1 wraps to 3–4 lines on short laptop viewports. */}
        <div className="absolute inset-0 flex flex-col justify-start pt-32 sm:pt-36 lg:pt-40 pb-12">
          <div
            style={{
              paddingLeft: "clamp(24px, 7vw, 96px)",
              maxWidth: "min(1080px, 94vw)",
            }}
          >
            {/* Eyebrow */}
            <p
              className="eyebrow text-[15px] mb-7"
              style={{ color: "rgba(184,150,90,0.9)" }}
            >
              {siteData.hero.eyebrow}
            </p>

            {/* H1 */}
            <h1
              className="leading-[1.02] mb-7"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(56px, min(8.5vw, 13vh), 140px)",
                color: "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={2}>{siteData.hero.headline}</ShimmerText>
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl sm:text-2xl leading-relaxed mb-6"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(254,252,250,0.85)",
                maxWidth: "640px",
              }}
            >
              {siteData.hero.subheadline}
            </p>

            {/* Typewriter tag line */}
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "15px", letterSpacing: "0.12em", color: "rgba(184,150,90,0.75)", textTransform: "uppercase", marginBottom: "40px" }}>
              <TypewriterText phrases={["Romantic Stays", "Date Night Escapes", "Proposal Experiences", "Hot Tub Under the Stars"]} speed={55} deleteSpeed={28} />
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                variant="secondary"
                size="lg"
                href={siteData.hero.ctaPrimary.href}
              >
                {siteData.hero.ctaPrimary.label}
              </Button>
              <Button
                variant="ghost-light"
                size="lg"
                href={siteData.hero.ctaSecondary.href}
              >
                {siteData.hero.ctaSecondary.label}
              </Button>
            </div>

            {/* Trust micro-copy */}
            <p
              className="text-base"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(254,252,250,0.40)",
                letterSpacing: "0.06em",
              }}
            >
              {siteData.hero.trustCopy}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div
            className="w-px h-10 animate-pulse"
            style={{ background: "rgba(254,252,250,0.3)" }}
          />
        </div>
      </div>
    </div>
  );
}
