// /reviews — Guest Reviews
// Source: initial-business-data.md §7 (3 genuine 5-star reviews)
// Market intelligence: market-intelligence.md §7 (innovation: on-site review integration — +15% conversion lift)
// SEO: Review/AggregateRating schema per CLAUDE.md SEO Rule

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
  title: "Guest Reviews",
  description:
    "Read what couples are saying about The Enchanted Collective — luxury glamping and private escapes near Madison, Indiana. Genuine 5-star reviews.",
};

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`${count} out of 5 stars`} style={{ color: "var(--accent)", letterSpacing: "0.05em", fontSize: "1.1rem" }}>
      {"★".repeat(count)}
    </span>
  );
}

// JSON-LD: AggregateRating + individual Review items
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteData.name,
  url: `https://${siteData.domain}`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(siteData.reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: siteData.reviews.map((r) => ({
    "@type": "Review",
    reviewBody: r.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: r.name,
    },
  })),
};

// Context about each reviewer's occasion — sourced from initial-business-data.md §7
const reviewContext = [
  "Couple's getaway",
  "29th anniversary",
  "Honeymoon",
];

export default function ReviewsPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Page hero */}
      <section
        className="pt-32 pb-16 px-4 text-center"
        style={{ background: "var(--bg-base)" }}
      >
        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Genuine Guest Reviews
          </p>
          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--text-primary)",
            }}
          >
            <ShimmerText delay={1}>Five Stars Isn&rsquo;t Enough</ShimmerText>
          </h1>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
          >
            Every review below is real — from couples who came looking for a
            getaway and left with a story worth telling.
          </p>
        </FadeUp>

        {/* Aggregate rating badge */}
        <FadeUp delay={0.15}>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}>
            <Stars count={5} />
            <span
              className="text-sm font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)", fontSize: "1.1rem" }}
            >
              5.0
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
            >
              {siteData.reviews.length} VERIFIED REVIEWS
            </span>
          </div>
        </FadeUp>
      </section>

      {/* Reviews grid */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {siteData.reviews.map((review, i) => (
            <ScaleIn key={review.name} delay={i * 0.1}>
              <article
                className="rounded-2xl p-7 flex flex-col gap-5 h-full"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid transparent",
                  transition: "border-color 300ms ease, box-shadow 300ms ease",
                }}
              >
                {/* Stars */}
                <Stars count={review.rating} />

                {/* Occasion label */}
                <p
                  className="text-[11px] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.1em" }}
                >
                  {reviewContext[i]}
                </p>

                {/* Quote */}
                <blockquote
                  className="flex-1 text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                >
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid var(--primary-muted)" }}
                >
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.05em" }}
                  >
                    {review.location}
                  </p>
                </div>
              </article>
            </ScaleIn>
          ))}
        </div>
      </section>

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-base)" flip={true} />

      {/* Dark CTA — write your own story */}
      <section
        className="relative py-20 lg:py-24 px-4"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies />
        <GodRays />
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Opening June 2026
            </p>
            <h2
              className="leading-tight mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={0.5}>Write Your Own Story</ShimmerText>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              Join the VIP list for first access to booking dates and $25 off
              your first stay.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/stays">
                Explore Our Stays
              </Button>
              <Button variant="ghost-light" size="lg" href="/vip">
                Join the VIP List
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
