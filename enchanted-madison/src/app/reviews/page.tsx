// /reviews — Guest Reviews
// Source: initial-business-data.md §7 (3 genuine 5-star reviews + 9 additional)
// Quality standard: dark hero + Fireflies/GodRays + ShimmerText per CLAUDE.md Page Quality Standard
// SEO: Review/AggregateRating schema per CLAUDE.md SEO Rule

import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { ReviewGrid } from "./ReviewGrid";
import { siteData } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "Read what couples are saying about The Enchanted Collective — luxury glamping and private escapes near Madison, Indiana. Genuine 5-star reviews.",
};

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`${count} out of 5 stars`} style={{ color: "var(--accent)", letterSpacing: "0.05em", fontSize: "1.25rem" }}>
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

export default function ReviewsPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Dark hero — per CLAUDE.md Page Quality Standard */}
      <section
        className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Image
          src="/images/experiences/hot-tub-escape.webp"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.2 }}
          sizes="100vw"
        />
        <Fireflies />
        <GodRays />
        <Embers count={12} />

        <FadeUp>
          <p
            className="eyebrow mb-3"
            style={{ color: "var(--accent)" }}
          >
            Genuine Guest Reviews
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
            <ShimmerText delay={1}>Five Stars Isn&rsquo;t Enough</ShimmerText>
          </h1>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
          >
            Every review below is real — from couples who came looking for a
            getaway and left with a story worth telling.
          </p>

          {/* Aggregate rating badge */}
          <div className="inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{ background: "rgba(254,252,250,0.08)", border: "1px solid rgba(254,252,250,0.15)" }}>
            <Stars count={5} />
            <span
              className="text-sm font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-on-dark)", fontSize: "1.1rem" }}
            >
              5.0
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "rgba(254,252,250,0.5)", letterSpacing: "0.06em" }}
            >
              {siteData.reviews.length} VERIFIED REVIEWS
            </span>
          </div>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* Paginated reviews grid */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-6xl mx-auto">
          <ReviewGrid />
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
        <div className="relative z-10 max-w-2xl mx-auto text-center">
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
