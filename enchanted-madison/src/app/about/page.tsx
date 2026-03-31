// /about — About The Enchanted Collective
// Source: initial-business-data.md §1 (brand intro, tagline, hosts), §7 (reviews name Angela)
// Note: Full host story copy ("why we built this") is pending from Angela & Marc.
//       This page uses available brand copy as a placeholder until that content arrives.
// SEO: Organization schema

import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Enchanted Collective was built for couples who want to feel something — not just go somewhere. Meet Angela & Marc and learn about the property near Madison, Indiana.",
};

// JSON-LD: Organization
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteData.name,
  url: `https://${siteData.domain}`,
  telephone: siteData.phone,
  email: siteData.email,
  description: siteData.description,
  founders: [
    { "@type": "Person", name: "Angela" },
    { "@type": "Person", name: "Marc" },
  ],
};

// Brand intro — initial-business-data.md §1
const brandIntro = [
  "Welcome to The Enchanted Collective — a one-of-a-kind destination for glamping in Indiana, romantic cabin getaways, and luxury camping experiences designed to help you unwind, reconnect, and escape the everyday.",
  "Nestled in a peaceful natural setting in Southern Indiana, our curated collection of stays blends the beauty of the outdoors with the comfort of thoughtfully designed accommodations.",
  "Whether you're planning a couples getaway, anniversary trip, weekend retreat, or simply searching for unique places to stay in Indiana, The Enchanted Collective offers immersive accommodations that combine rustic tranquility with elevated comfort — creating stays that feel both relaxing and unforgettable.",
];

const values = [
  {
    label: "Thoughtfully Curated",
    body: "Every detail — the linen weight, the fire pit placement, the cocktail bar supplies — was chosen intentionally. Nothing was left to chance.",
  },
  {
    label: "Genuinely Private",
    body: "Your hot tub is yours. Your fire pit is yours. The sites are spaced so you hear the trees, not other guests.",
  },
  {
    label: "Couples-First, Always",
    body: "This is not a family resort or a group retreat. Everything here was designed for two people who want to be completely present with each other.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 px-4"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays />
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Madison, Indiana
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
              <ShimmerText delay={1}>Built for Moments That Matter</ShimmerText>
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              The Enchanted Collective is Angela & Marc&rsquo;s love letter to southern Indiana — and to every couple who deserves an escape as meaningful as the occasion.
            </p>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* Brand story */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <FadeUp>
            <p className="eyebrow mb-6" style={{ color: "var(--accent)" }}>
              Our Story
            </p>
          </FadeUp>
          {brandIntro.map((para, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                {para}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              What We Believe
            </p>
            <h2
              className="mb-10 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "var(--text-primary)",
              }}
            >
              How We Built This Place
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScaleIn key={v.label} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-7 flex flex-col gap-3 h-full"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
                >
                  <h3
                    className="text-lg leading-snug"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                  >
                    {v.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {v.body}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* What guests say */}
      <section
        className="py-16 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              In Their Words
            </p>
            <blockquote
              className="text-2xl leading-relaxed mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                color: "var(--text-primary)",
                fontStyle: "italic",
              }}
            >
              &ldquo;Angela and Marc have found their calling. Their piece of paradise truly lives up to its name. Five stars is not enough.&rdquo;
            </blockquote>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
            >
              — Drucilla, Indianapolis, IN
            </p>
            <div className="mt-8">
              <Button variant="ghost" href="/reviews">Read All Reviews</Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-base)" flip={true} />

      {/* CTA */}
      <section
        className="relative py-16 px-4"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays />
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <h2
              className="leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={0.5}>Come See It for Yourself</ShimmerText>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              Opening June 2026 near Madison, Indiana.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/stays">Explore Stays</Button>
              <Button variant="ghost-light" href="/contact">Get in Touch</Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
