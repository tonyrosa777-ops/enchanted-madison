"use client";

// HeroSection — scroll-driven video hero
// Approach: video.currentTime driven by scroll position (no frame extraction, no canvas)
// Desktop: sticky 100vh frame inside 300vh container. Scroll = video progress.
// Mobile / prefers-reduced-motion: autoplay loop fallback, 100vh height.
// Text: left-aligned, gradient dark-left → transparent-right preserves video on right.
// All copy from siteData — zero hard-coded strings.

import { useRef, useEffect, useLayoutEffect } from "react";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/site";

// How many viewport heights of scroll space the video gets.
// 300vh = user scrolls ~2700px (at 900px viewport) to play full video.
const SCROLL_MULTIPLIER = 3;

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set container height synchronously before first paint to avoid layout shift.
  // Server renders 100vh (safe default). Client corrects to 300vh on desktop.
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isMobile && !reducedMotion) {
      container.style.height = `${SCROLL_MULTIPLIER * 100}vh`;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isMobile || reducedMotion) {
      // Fallback: standard autoplay loop
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    // Desktop scroll-driven: pause video, drive currentTime from scroll.
    video.pause();
    video.loop = false;

    let rafId = 0;
    let pending = false;

    function update() {
      const rect = container!.getBoundingClientRect();
      // scrolled = how far we've scrolled past the top of the container
      const scrolled = -rect.top;
      // total = total scrollable distance within the pinned section
      const total = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      if (video!.readyState >= 2 && video!.duration) {
        video!.currentTime = progress * video!.duration;
      }
      pending = false;
    }

    function onScroll() {
      if (!pending) {
        pending = true;
        rafId = requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    // Run once on mount to sync if page loaded mid-scroll (e.g. back navigation)
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // Outer container: tall on desktop to give scroll room; 100vh on mobile.
    // Height is patched synchronously by useLayoutEffect on client.
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "100vh" }}
    >
      {/* ── Sticky viewport frame ─────────────────────────────────────── */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100vh", background: "var(--bg-dark)" }}
      >
        {/* Video — fills frame, no controls */}
        <video
          ref={videoRef}
          src="/hero-forest.mp4"
          muted
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

        {/* ── Text overlay — left-center ───────────────────────────────── */}
        <div className="absolute inset-0 flex items-center">
          <div
            style={{
              paddingLeft: "clamp(24px, 7vw, 96px)",
              maxWidth: "min(580px, 90vw)",
            }}
          >
            {/* Eyebrow */}
            <p
              className="eyebrow text-[11px] mb-5"
              style={{ color: "rgba(184,150,90,0.9)" }}
            >
              {siteData.hero.eyebrow}
            </p>

            {/* H1 */}
            <h1
              className="leading-[1.05] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(40px, 5.5vw, 76px)",
                color: "var(--text-on-dark)",
              }}
            >
              {siteData.hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "rgba(254,252,250,0.82)",
                maxWidth: "400px",
              }}
            >
              {siteData.hero.subheadline}
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
              className="text-xs"
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

        {/* Scroll hint — desktop only, bottom-right so it doesn't obscure text */}
        <div
          className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span
            className="text-[9px] uppercase tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(254,252,250,0.30)",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
          <div
            className="w-px"
            style={{
              height: "40px",
              background:
                "linear-gradient(to bottom, rgba(254,252,250,0.30), transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
