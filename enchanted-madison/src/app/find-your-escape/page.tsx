// /find-your-escape — Dedicated experience-finder quiz page
// Full dark hero, 4 questions, lead capture, personalized result + discovery call CTA

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { siteData } from "@/data/site";
import { FindYourEscapeWizard } from "./FindYourEscapeWizard";

export const metadata: Metadata = {
  title: "Find Your Escape",
  description:
    "Not sure which experience is right for you? Answer five quick questions and we'll match you to your perfect night at The Enchanted Collective.",
};

const fye = siteData.findYourEscape;

export default function FindYourEscapePage() {
  return (
    <main
      className="relative min-h-screen flex flex-col"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Full-page atmosphere */}
      <Fireflies count={28} />
      <GodRays />
      <Embers count={18} />

      {/* Background image — hot tub at twilight */}
      <Image
        src="/images/experiences/hot-tub-escape.webp"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ opacity: 0.18 }}
        sizes="100vw"
      />

      {/* Minimal header — just logo + back link */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 max-w-5xl mx-auto w-full">
        <Link
          href="/"
          className="transition-opacity hover:opacity-70"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", color: "var(--text-on-dark)" }}
        >
          The Enchanted Collective
        </Link>
        <Link
          href="/stays"
          className="text-xs transition-opacity hover:opacity-60 flex items-center gap-1.5"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(254,252,250,0.45)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M8 2L3 6l5 4" />
          </svg>
          Browse All Stays
        </Link>
      </header>

      {/* Heading */}
      <div className="relative z-10 text-center pt-6 pb-12 px-4">
        <p
          className="mb-3 text-xs font-semibold"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {fye.hero.eyebrow}
        </p>
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
            color: "var(--text-on-dark)",
            lineHeight: 1.15,
          }}
        >
          {fye.hero.heading}
        </h1>
        <p
          className="max-w-lg mx-auto text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(254,252,250,0.6)",
          }}
        >
          {fye.hero.subheading}
        </p>
      </div>

      {/* Wizard */}
      <div className="relative z-10 flex-1 pb-20">
        <FindYourEscapeWizard />
      </div>

      {/* Footer note */}
      <div className="relative z-10 text-center py-6 px-4">
        <p className="text-[10px]" style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "rgba(254,252,250,0.2)" }}>
          {siteData.name} · {siteData.location} · {siteData.phone}
        </p>
      </div>
    </main>
  );
}
