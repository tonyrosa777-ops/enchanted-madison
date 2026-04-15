// /faq — Frequently Asked Questions
// Source: initial-business-data.md §3, §4, §8 (policies); market-intelligence.md §7 (Firelight Camps FAQ model)
// Design: native <details>/<summary> — no client state needed, accessible by default
// SEO: FAQPage schema markup per CLAUDE.md SEO Rule

import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about staying at The Enchanted Collective — hot tubs, bathrooms, pet policy, cancellations, check-in, and more.",
};

// JSON-LD: FAQPage schema — boosts FAQ rich snippets in Google search
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteData.faq.flatMap((section) =>
    section.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark hero — per CLAUDE.md Page Quality Standard */}
      <section
        className="relative pt-32 pb-16 px-4 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Image
          src="/images/experiences/hot-tub-escape.webp"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.15 }}
          sizes="100vw"
        />
        <Fireflies count={22} />
        <GodRays />
        <Embers count={10} />

        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Got Questions?
          </p>
          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--text-on-dark)",
            }}
          >
            <ShimmerText delay={1}>We Have Answers</ShimmerText>
          </h1>
          <p
            className="max-w-md mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
          >
            First time glamping? Planning a proposal? Bringing your dog? Start here.
          </p>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* FAQ sections */}
      <section
        className="py-12 lg:py-16 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {siteData.faq.map((section, si) => (
            <FadeUp key={section.category} delay={si * 0.05}>
              <div>
                {/* Category header */}
                <p
                  className="eyebrow mb-5"
                  style={{ color: "var(--accent)" }}
                >
                  {section.category}
                </p>

                {/* Questions */}
                <div className="flex flex-col" style={{ borderTop: "1px solid var(--primary-muted)" }}>
                  {section.questions.map((item) => (
                    <details
                      key={item.q}
                      className="group"
                      style={{ borderBottom: "1px solid var(--primary-muted)" }}
                    >
                      <summary
                        className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none select-none"
                        style={{ outline: "none" }}
                      >
                        <span
                          className="text-base font-medium leading-snug"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                          }}
                        >
                          {item.q}
                        </span>
                        {/* Plus/minus indicator */}
                        <span
                          className="shrink-0 text-lg leading-none"
                          style={{ color: "var(--accent)", fontFamily: "var(--font-body)", fontWeight: 300 }}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </summary>
                      <div className="pb-5">
                        <p
                          className="text-base leading-relaxed"
                          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Still have questions CTA — dark footer per Page Quality Standard */}
      <section
        className="relative py-20 lg:py-24 px-4 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies count={18} />
        <div className="max-w-2xl mx-auto text-center relative">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Ready When You Are
            </p>
            <h2
              className="leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "var(--text-on-dark)",
              }}
            >
              Still Have Questions?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              Angela & Marc personally respond to every message. Or skip ahead and
              pick your escape — availability updates in real time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" href="/stays">
                Check Availability
              </Button>
              <Button variant="ghost-light" href="/date-night">
                Hot Tub Escapes
              </Button>
              <Button variant="ghost-light" href="/contact">
                Send a Message
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
