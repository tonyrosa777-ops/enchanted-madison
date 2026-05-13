// /proposals — Proposal Packages Landing Page
// Source: initial-business-data.md §5a; market-intelligence.md §5 Gap 3, §7 (first-to-market Midwest)
// Anti-pattern #6: all pricing visible. Anti-pattern #7: Acuity embed inline placeholder.

import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { PetalRain } from "@/components/animations/PetalRain";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { ProposalPlannerForm } from "@/components/forms/ProposalPlannerForm";
import { ExperienceFinderTrigger } from "@/components/ui/ExperienceFinderTrigger";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Proposal Packages",
  description:
    "Curated proposal packages near Madison, Indiana. Rose petal pathways, champagne under the stars, and Marry Me signs — we handle every detail. Packages from $249.",
};

const proposalFaqs = [
  {
    q: "Do I need to stay overnight?",
    a: "No. Proposal packages are standalone bookings — no overnight stay required. You reserve exclusive access to the proposal space for 1.5 hours.",
  },
  {
    q: "Can I customize the setup?",
    a: "Yes. Every package includes customization options. Tell us your vision at booking and we'll build around it.",
  },
  {
    q: "Will there be other guests nearby?",
    a: "No. Your proposal space is fully reserved and private for the duration of your booking. No interruptions.",
  },
  {
    q: "What if I want to add a photographer?",
    a: "We can coordinate with one of our preferred photographers. Time for photos after the proposal can be arranged according to your preference.",
  },
  {
    q: "When should I book?",
    a: "As early as possible — especially for weekends from September through February, which are peak proposal season. Popular dates book out weeks in advance.",
  },
];

export default function ProposalsPage() {
  const { proposals } = siteData.experiences;

  return (
    <PageShell>
      {/* Hero */}
      <section
        className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Image
          src="/images/experiences/proposal.webp"
          alt="Enchanted proposal setup with rose petals, champagne, and string lights"
          fill
          priority
          className="object-cover pointer-events-none"
          style={{ opacity: 0.28 }}
          sizes="100vw"
        />
        <Fireflies count={22} />
        <GodRays />
        <PetalRain count={12} />
        <FadeUp className="relative z-10">
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Proposal Packages · Madison, Indiana
          </p>
          <h1
            className="leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "var(--text-on-dark)",
            }}
          >
            <ShimmerText delay={1.5}>{proposals.headline}</ShimmerText>
          </h1>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "rgba(254,252,250,0.75)" }}
          >
            {proposals.subheadline}
          </p>
          <Button variant="secondary" size="lg" href="#packages">
            See Packages
          </Button>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-elevated)" background="var(--bg-dark)" />

      {/* Trust bar */}
      <div className="py-6 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            "Full privacy — reserved exclusively for you",
            "We handle every detail of the setup",
            "Secluded nature setting for photos",
            "Packages customizable on request",
          ].map((item) => (
            <p
              key={item}
              className="text-xs flex items-center gap-2"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
            >
              <span style={{ color: "var(--accent)" }}>✦</span>
              {item}
            </p>
          ))}
        </div>
      </div>

      <ExperienceFinderTrigger triggerText={siteData.experienceFinder.triggerCopy.proposals} />

      {/* Package tiers */}
      <section id="packages" className="py-20 lg:py-28 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                Choose Your Package
              </p>
              <h2
                className="text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
              >
                Three Ways to Ask
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proposals.packages.map((pkg, i) => {
              const isFeatured = pkg.badge === "Most Popular";
              return (
                <ScaleIn key={pkg.name} delay={i * 0.1}>
                  <div
                    className="rounded-2xl p-6 flex flex-col gap-4 h-full transition-shadow duration-300 hover:shadow-lg"
                    style={{
                      background: isFeatured ? "var(--primary)" : "var(--bg-card)",
                      border: isFeatured ? "none" : "1px solid var(--primary-muted)",
                    }}
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
                      <p
                        className="eyebrow text-[11px] mb-1"
                        style={{ color: isFeatured ? "rgba(184,150,90,0.9)" : "var(--text-secondary)" }}
                      >
                        {pkg.tier} · {pkg.duration}
                      </p>
                      <h3
                        className="text-2xl leading-tight"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: isFeatured ? "var(--text-on-dark)" : "var(--text-primary)" }}
                      >
                        {pkg.name}
                      </h3>
                    </div>

                    <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}>
                      From ${pkg.price}
                    </p>

                    <ul className="flex flex-col gap-2 flex-1">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                          style={{ fontFamily: "var(--font-body)", color: isFeatured ? "rgba(254,252,250,0.85)" : "var(--text-secondary)" }}
                        >
                          <span style={{ color: "var(--accent)", flexShrink: 0 }}>✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Button variant={isFeatured ? "ghost-light" : "primary"} size="sm" href="#book" className="w-full mt-2">
                      Book This Package
                    </Button>
                  </div>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proposal Planner Form */}
      <section
        id="book"
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="eyebrow text-center mb-2" style={{ color: "var(--accent)" }}>
              Plan Your Proposal
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-center mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Let&rsquo;s Build Your Moment
            </h2>
            <p
              className="text-center mb-10 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              Share a few details and we&rsquo;ll design a proposal experience around your vision. Angela &amp; Marc respond within 24 hours.
            </p>
          </FadeUp>
          <ProposalPlannerForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}>
              Questions
            </h2>
          </FadeUp>
          <div className="flex flex-col">
            {proposalFaqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.05}>
                <div className="py-5" style={{ borderBottom: "1px solid var(--primary-muted)" }}>
                  <p className="text-base font-medium mb-2" style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}>
                    {faq.q}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                    {faq.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
