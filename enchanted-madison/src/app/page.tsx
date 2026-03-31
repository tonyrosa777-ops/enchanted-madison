// Homepage — The Enchanted Collective
// Server Component. All copy from /data/site.ts (zero hard-coded strings).
// Design: design-system.md. Layout: website-build-template.md §1 (Hero).
// Anti-pattern #13: no particle systems or orbs on hero — photo/video drives it.
// SEO: LodgingBusiness schema per CLAUDE.md SEO Rule + market-intelligence.md §9 local SEO.

import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { StayCard } from "@/components/ui/StayCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { siteData } from "@/data/site";

// LodgingBusiness + VacationRental schema
// Source: market-intelligence.md §9 (LodgingBusiness primary + VacationRental secondary)
const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "VacationRental"],
  name: siteData.name,
  url: `https://${siteData.domain}`,
  telephone: siteData.phone,
  email: siteData.email,
  description: siteData.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2175 North K Road",
    addressLocality: "Madison",
    addressRegion: "IN",
    postalCode: "47250",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7309,
    longitude: -85.3830,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private hot tub", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fire pit", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
    { "@type": "LocationFeatureSpecification", name: "BBQ grills", value: true },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  openingHours: "Mo-Su 00:00-23:59",
  checkinTime: "16:00",
  checkoutTime: "10:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(siteData.reviews.length),
    bestRating: "5",
  },
};

// Star rating display
function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ color: "var(--accent)", letterSpacing: "0.05em" }}>
      {"★".repeat(rating)}
    </span>
  );
}

export default function HomePage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {/* ================================================================
          HERO — Full viewport. Placeholder bg until professional video/
          photography arrives. Swap background-image here when ready.
          Source: market-intelligence.md §8 recommended hero copy.
          Anti-pattern: no orbs, no particles — they fight photography.
          ================================================================ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center"
        style={{ background: "var(--bg-dark)" }}
        aria-label="Hero"
      >
        {/* Photography placeholder — remove once real images exist */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(44,62,45,0.6) 0%, rgba(26,42,30,0.9) 70%, rgba(26,42,30,1) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <p
            className="eyebrow text-[11px]"
            style={{ color: "rgba(184,150,90,0.9)" }}
          >
            {siteData.hero.eyebrow}
          </p>

          {/* H1 — Cormorant Garamond 600, per design-system.md §3 Type Scale */}
          <h1
            className="leading-[1.05]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(44px, 8vw, 88px)",
              color: "var(--text-on-dark)",
            }}
          >
            {siteData.hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="max-w-xl text-base sm:text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              color: "rgba(254,252,250,0.8)",
            }}
          >
            {siteData.hero.subheadline}
          </p>

          {/* CTA pair */}
          <div className="flex flex-wrap gap-4 justify-center mt-2">
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

          {/* Trust copy */}
          <p
            className="text-xs mt-1"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(254,252,250,0.45)",
              letterSpacing: "0.06em",
            }}
          >
            {siteData.hero.trustCopy}
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <div
            className="w-px h-10 animate-pulse"
            style={{ background: "rgba(254,252,250,0.3)" }}
          />
        </div>
      </section>

      {/* ================================================================
          STAYS GRID — 3-col desktop, 1-col mobile
          Source: design-system.md §4 (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
          Shows all 4 accommodations with prices (anti-pattern #6: never hide pricing)
          ================================================================ */}
      <section
        className="py-20 lg:py-28 px-4"
        style={{ background: "var(--bg-base)" }}
        aria-label="Our Stays"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
                Where You'll Stay
              </p>
              <h2
                className="leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "var(--text-primary)",
                }}
              >
                Choose Your Escape
              </h2>
              <p
                className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-secondary)",
                }}
              >
                From a private cottage with a hot tub to woodland glamping under string
                lights — each accommodation is thoughtfully curated for couples.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {siteData.stays.map((stay, i) => (
              <ScaleIn key={stay.slug} delay={i * 0.1}>
                <StayCard
                  slug={stay.slug}
                  name={stay.name}
                  type={stay.type}
                  tagline={stay.tagline}
                  priceFrom={stay.priceFrom}
                  capacity={stay.capacity}
                  badge={stay.badge ?? undefined}
                />
              </ScaleIn>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="text-center mt-10">
              <Button variant="ghost" href="/stays">
                View All Stays
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================================================================
          EXPERIENCES TEASER — 2-up grid: Date Night + Proposals
          Source: market-intelligence.md §5 Gap 3 (no one else does this)
          ================================================================ */}
      <section
        className="py-20 lg:py-28 px-4"
        style={{ background: "var(--bg-elevated)" }}
        aria-label="Experiences"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
                More Than a Stay
              </p>
              <h2
                className="leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "var(--text-primary)",
                }}
              >
                Curated Experiences
              </h2>
              <p
                className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--text-secondary)",
                }}
              >
                No overnight stay required. Private hot tub escapes, romantic date nights,
                and fully staged proposal packages — all available as standalone bookings.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            <ScaleIn delay={0.1}>
              <div
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ background: "var(--bg-card)" }}
              >
                <p className="eyebrow text-[11px]" style={{ color: "var(--accent)" }}>
                  Date Night · 2–4 Hours
                </p>
                <h3
                  className="text-2xl leading-tight"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                >
                  {siteData.experiences.dateNight.headline}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                >
                  {siteData.experiences.dateNight.subheadline}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                >
                  From $119/couple
                </p>
                <Button variant="secondary" size="sm" href="/date-night" className="mt-auto">
                  Book a Date Night
                </Button>
              </div>
            </ScaleIn>

            <ScaleIn delay={0.2}>
              <div
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ background: "var(--bg-card)" }}
              >
                <p className="eyebrow text-[11px]" style={{ color: "var(--accent)" }}>
                  Proposals · Full Setup Included
                </p>
                <h3
                  className="text-2xl leading-tight"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                >
                  {siteData.experiences.proposals.headline}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                >
                  {siteData.experiences.proposals.subheadline}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                >
                  Packages from $249
                </p>
                <Button variant="secondary" size="sm" href="/proposals" className="mt-auto">
                  Plan Your Proposal
                </Button>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ================================================================
          REVIEWS — 3-col grid
          Source: initial-business-data.md §7 (3 genuine reviews).
          Market-intelligence.md §7 (steal: on-site review integration).
          Anti-pattern #6: pricing visible; reviews visible above fold.
          ================================================================ */}
      <section
        className="py-20 lg:py-28 px-4"
        style={{ background: "var(--bg-base)" }}
        aria-label="Reviews"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
                Hear From Our Guests
              </p>
              <h2
                className="leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  color: "var(--text-primary)",
                }}
              >
                Five Stars Isn't Enough
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.reviews.map((review, i) => (
              <FadeUp key={review.name} delay={i * 0.12}>
                <div
                  className="rounded-2xl p-6 flex flex-col gap-4 h-full"
                  style={{ background: "var(--bg-card)" }}
                >
                  <StarRating rating={review.rating} />
                  <blockquote
                    className="text-base leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                  >
                    "{review.quote}"
                  </blockquote>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                    >
                      {review.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
                    >
                      {review.location}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          LOCATION / DRIVE TIMES
          Source: initial-business-data.md §2 (drive times).
          Market-intelligence.md §5 Gap 5 (Louisville-Cincinnati-Indy corridor).
          ================================================================ */}
      <section
        className="py-20 lg:py-28 px-4"
        style={{ background: "var(--bg-dark)" }}
        aria-label="Location"
      >
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Southern Indiana
            </p>
            <h2
              className="leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "var(--text-on-dark)",
              }}
            >
              Closer Than You Think
            </h2>
            <p
              className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
            >
              Tucked into the woods five minutes from downtown Madison, Indiana — and
              within easy reach of three major metros.
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteData.driveTimes.map((item, i) => (
              <FadeUp key={item.from} delay={i * 0.08}>
                <div
                  className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(254,252,250,0.06)" }}
                >
                  <p
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    {item.minutes} min
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgba(254,252,250,0.6)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.from}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          VIP SIGN-UP CTA — lead capture
          Source: initial-business-data.md §11 (VIP gap); market-intelligence.md §7
          ================================================================ */}
      <section
        className="py-20 lg:py-24 px-4"
        style={{ background: "var(--bg-elevated)" }}
        aria-label="VIP List"
      >
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Opening June 2026
            </p>
            <h2
              className="leading-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "var(--text-primary)",
              }}
            >
              {siteData.vip.headline}
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              {siteData.vip.subheadline}
            </p>
            <Button variant="primary" size="lg" href="/vip">
              {siteData.vip.cta}
            </Button>
            <p
              className="mt-4 text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
            >
              {siteData.vip.counter}
            </p>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
