// /date-night — Date Night & Hot Tub Escapes
// Source: initial-business-data.md §5b; market-intelligence.md §5 Gap 4 (day-use validated by ONSEN/Swimply)
// Anti-pattern #6: all pricing visible. Anti-pattern #7: Acuity embed inline placeholder.

import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { ExperienceFinderTrigger } from "@/components/ui/ExperienceFinderTrigger";
import { BookingCalendar } from "@/components/ui/BookingCalendar";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Date Night Escapes",
  description:
    "Private hot tub date nights and fireside escapes near Madison, Indiana. No overnight stay required. From $119/couple. Book a 2-4 hour private escape.",
};

const experienceFlow = [
  {
    step: "01",
    title: "Private Hot Tub Soak",
    duration: "1 hour",
    detail: "Candlelit hot tub, soft music, gas fire table, warm water under an open sky. Your space, no one else.",
  },
  {
    step: "02",
    title: "Fireside Lounge",
    duration: "1 hour",
    detail: "Plush leather seating, electric fireplace, luxury massage chair, spa water station, and a coffee bar with flavored syrups.",
  },
];

export default function DateNightPage() {
  const { dateNight } = siteData.experiences;

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden" style={{ background: "var(--bg-dark)" }}>
        <Image
          src="/images/experiences/date-night.webp"
          alt="Private date night escape at The Enchanted Collective"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.28 }}
          sizes="100vw"
        />
        <Fireflies />
        <GodRays />
        <Embers count={16} />
        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Hot Tub Escapes · Date Night · Girls Night
          </p>
          <h1
            className="leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(40px, 6vw, 72px)", color: "var(--text-on-dark)" }}
          >
            <ShimmerText delay={1}>{dateNight.headline}</ShimmerText>
          </h1>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "rgba(254,252,250,0.75)" }}
          >
            {dateNight.subheadline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" href="#packages">See Packages</Button>
            <Button variant="ghost-light" size="lg" href="#book">Book Now</Button>
          </div>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      <ExperienceFinderTrigger triggerText={siteData.experienceFinder.triggerCopy.dateNight} />

      {/* Experience flow */}
      <section className="py-20 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>How It Works</p>
              <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}>
                Your Evening, From Start to Finish
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceFlow.map((step, i) => (
              <ScaleIn key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl p-7 flex flex-col gap-3" style={{ background: "var(--bg-card)" }}>
                  <span className="text-4xl font-light" style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}>
                    {step.step}
                  </span>
                  <div>
                    <p className="eyebrow text-[11px] mb-1" style={{ color: "var(--text-secondary)" }}>{step.duration}</p>
                    <h3 className="text-xl" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                    {step.detail}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Package tiers */}
      <section id="packages" className="py-20 lg:py-28 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>Choose Your Escape</p>
              <h2 className="text-4xl" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}>
                Three Ways to Unwind
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dateNight.packages.map((pkg, i) => {
              const isFeatured = pkg.badge === "Most Popular";
              return (
                <ScaleIn key={pkg.name} delay={i * 0.1}>
                  <div
                    className="rounded-2xl p-6 flex flex-col gap-4 h-full transition-shadow duration-300 hover:shadow-lg"
                    style={{ background: isFeatured ? "var(--primary)" : "var(--bg-card)", border: isFeatured ? "none" : "1px solid var(--primary-muted)" }}
                  >
                    {pkg.badge && (
                      <span
                        className="eyebrow text-[10px] px-3 py-1 rounded-full self-start"
                        style={{ background: isFeatured ? "rgba(254,252,250,0.15)" : "var(--accent)", color: "var(--text-on-dark)" }}
                      >
                        {pkg.badge}
                      </span>
                    )}
                    <div>
                      <p className="eyebrow text-[11px] mb-1" style={{ color: isFeatured ? "rgba(184,150,90,0.9)" : "var(--text-secondary)" }}>
                        {pkg.tier} · {pkg.duration}
                      </p>
                      <h3 className="text-xl leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: isFeatured ? "var(--text-on-dark)" : "var(--text-primary)" }}>
                        {pkg.name}
                      </h3>
                    </div>
                    <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}>
                      From ${pkg.price}
                      <span className="text-sm font-normal ml-1" style={{ color: isFeatured ? "rgba(254,252,250,0.6)" : "var(--text-secondary)" }}>/couple</span>
                    </p>
                    <ul className="flex flex-col gap-2 flex-1">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm" style={{ fontFamily: "var(--font-body)", color: isFeatured ? "rgba(254,252,250,0.85)" : "var(--text-secondary)" }}>
                          <span style={{ color: "var(--accent)", flexShrink: 0 }}>✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant={isFeatured ? "ghost-light" : "primary"} size="sm" href="#book" className="w-full mt-2">
                      Book This Escape
                    </Button>
                  </div>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking calendar */}
      <section id="book" className="py-16 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="text-center mb-8">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>Book Your Escape</p>
              <h2 className="text-3xl mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}>
                Pick Your Date and Package
              </h2>
              <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                Weekend evenings book up fast. We recommend reserving at least 2 weeks out.
              </p>
            </div>
            <BookingCalendar />
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
