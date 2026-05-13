// /stays — Stays Overview
// Source: initial-business-data.md §4; design-system.md §4 (grid), §5 (cards)
// Anti-pattern #6: pricing visible on every card — never hidden

import { PageShell } from "@/components/layout/PageShell";
import { StayCard } from "@/components/ui/StayCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { ExperienceFinderTrigger } from "@/components/ui/ExperienceFinderTrigger";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Stays",
  description:
    "Luxury glamping tents, a private cottage, and wooded tent sites near Madison, Indiana. Private hot tubs at select accommodations. Tent sites from $45/night.",
};

const highlights = [
  { label: "Private hot tub", detail: "At select accommodations" },
  { label: "5 min", detail: "From downtown Madison" },
  { label: "10 min", detail: "From Clifty Falls State Park" },
  { label: "Couples only", detail: "Every unit designed for two" },
];

export default function StaysPage() {
  return (
    <PageShell>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-16 px-4 text-center"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays />
        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Madison, Indiana
          </p>
          <h1
            className="leading-tight mb-4 max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "var(--text-on-dark)",
            }}
          >
            <ShimmerText delay={1}>{siteData.staysIntro.heading}</ShimmerText>
          </h1>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed mt-6"
            style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.78)" }}
          >
            {siteData.staysIntro.intro}
          </p>
          <ul
            className="mt-4 flex flex-col gap-2 max-w-2xl mx-auto text-left"
            style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.78)" }}
          >
            {siteData.staysIntro.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 leading-relaxed">
                <span
                  className="flex-shrink-0 mt-2"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  ◆
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed mt-6"
            style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.72)" }}
          >
            {siteData.staysIntro.footer}
          </p>
        </FadeUp>

        {/* Quick-stat bar */}
        <FadeUp delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-6 lg:gap-10">
            {highlights.map((h) => (
              <div key={h.label} className="text-center">
                <p
                  className="text-sm font-bold"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.06em" }}
                >
                  {h.label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.55)" }}
                >
                  {h.detail}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* Stays grid */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <ExperienceFinderTrigger triggerText={siteData.experienceFinder.triggerCopy.stays} />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.stays.map((stay, i) => (
            <ScaleIn key={stay.slug} delay={i * 0.08}>
              <StayCard
                slug={stay.slug}
                name={stay.name}
                type={stay.type}
                tagline={stay.tagline}
                priceFrom={stay.priceFrom}
                capacity={stay.capacity}
                badge={stay.badge ?? undefined}
                highlight={stay.features.slice(0, 3).join(" · ")}
                image={stay.image}
              />
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* Policies strip */}
      <section
        className="py-12 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p
              className="eyebrow text-center mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Good to Know
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: "Check-in", value: "4:00 PM" },
                { label: "Check-out", value: "10:00 AM" },
                { label: "Min. guest age", value: "25 years" },
                { label: "Self check-in", value: "Contactless" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-4"
                  style={{ background: "var(--bg-card)" }}
                >
                  <p
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
