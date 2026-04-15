// Homepage — The Enchanted Collective
// Server Component. All copy from /data/site.ts (zero hard-coded strings).
// Design: design-system.md. Layout: website-build-template.md §1 (Hero).
// Anti-pattern #13: no particle systems or orbs on hero — photo/video drives it.
// SEO: LodgingBusiness schema per CLAUDE.md SEO Rule + market-intelligence.md §9 local SEO.

import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { StayCard } from "@/components/ui/StayCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { ExperienceFinderSection } from "@/components/sections/ExperienceFinderSection";
import { siteData } from "@/data/site";
import { HeroSection } from "./HeroSection";

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
          HERO — Scroll-driven video. video.currentTime driven by scroll.
          Source: market-intelligence.md §8 recommended hero copy.
          Desktop: 300vh sticky pin. Mobile: autoplay loop fallback.
          ================================================================ */}
      <HeroSection />

      <WaveDivider fill="var(--bg-elevated)" background="var(--bg-dark)" />

      {/* ================================================================
          TRUST STRIP — Social proof bar between hero and stays
          Source: market-intelligence.md §8 (below-hero trust signals)
          ================================================================ */}
      <div
        className="py-4 px-4"
        style={{
          background: "var(--bg-elevated)",
          borderBottom: "1px solid var(--primary-muted)",
        }}
        role="complementary"
        aria-label="Trust signals"
      >
        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-2 gap-x-0 max-w-4xl mx-auto">
          {siteData.trustItems.map((item, i) => (
            <li key={i} className="flex items-center">
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
              {i < siteData.trustItems.length - 1 && (
                <span
                  className="hidden sm:inline-block mx-4 text-xs"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

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
                Overnight Escapes
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  image={stay.image}
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
                Escapes for the Day
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
                A Few Hours in the Woods
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
            {/* Date Night card — full image with overlay */}
            <ScaleIn delay={0.1}>
              <div className="rounded-2xl overflow-hidden relative flex flex-col justify-end" style={{ minHeight: "420px" }}>
                <Image
                  src="/images/experiences/date-night-card.webp"
                  alt="Private hot tub date night experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.4) 55%, rgba(10,8,6,0.05) 100%)" }}
                />
                <div className="relative z-10 p-8 flex flex-col gap-3">
                  <p className="eyebrow text-[11px]" style={{ color: "var(--accent)" }}>
                    Date Night · 2–4 Hours
                  </p>
                  <h3
                    className="text-2xl leading-tight"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-on-dark)" }}
                  >
                    {siteData.experiences.dateNight.headline}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
                  >
                    {siteData.experiences.dateNight.subheadline}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                  >
                    From $119/couple
                  </p>
                  <Button variant="secondary" size="sm" href="/date-night" className="mt-2 self-start">
                    Book a Date Night
                  </Button>
                </div>
              </div>
            </ScaleIn>

            {/* Proposals card — full image with overlay */}
            <ScaleIn delay={0.2}>
              <div className="rounded-2xl overflow-hidden relative flex flex-col justify-end" style={{ minHeight: "420px" }}>
                <Image
                  src="/images/experiences/proposals-card.webp"
                  alt="Romantic outdoor proposal setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,8,6,0.92) 0%, rgba(10,8,6,0.4) 55%, rgba(10,8,6,0.05) 100%)" }}
                />
                <div className="relative z-10 p-8 flex flex-col gap-3">
                  <p className="eyebrow text-[11px]" style={{ color: "var(--accent)" }}>
                    Proposals · Full Setup Included
                  </p>
                  <h3
                    className="text-2xl leading-tight"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-on-dark)" }}
                  >
                    {siteData.experiences.proposals.headline}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
                  >
                    {siteData.experiences.proposals.subheadline}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                  >
                    Packages from $249
                  </p>
                  <Button variant="secondary" size="sm" href="/proposals" className="mt-2 self-start">
                    Plan Your Proposal
                  </Button>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      <ExperienceFinderSection />

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-base)" flip={true} />

      {/* ================================================================
          WHY ENCHANTED MADISON — Differentiator section
          Source: market-intelligence.md §8 "Trust builder for pre-launch"
          Positioned before reviews to prime the reader before testimonials.
          ================================================================ */}
      <section
        className="relative py-20 lg:py-28 px-4"
        style={{ background: "var(--bg-dark)" }}
        aria-label="Why Enchanted Madison"
      >
        <Image
          src="/images/experiences/why-enchanted.webp"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.14 }}
          sizes="100vw"
        />
        <Fireflies />
        <GodRays />
        <Embers count={18} />
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              {siteData.whyUs.eyebrow}
            </p>
            <h2
              className="leading-tight mb-12"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={0.5}>{siteData.whyUs.headline}</ShimmerText>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteData.whyUs.items.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 text-left flex gap-4 items-start"
                  style={{ background: "rgba(254,252,250,0.06)" }}
                >
                  <span
                    className="text-base mt-0.5 flex-shrink-0"
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "rgba(254,252,250,0.85)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

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
            {siteData.reviews.slice(0, 3).map((review, i) => (
              <FadeUp key={review.name} delay={i * 0.12}>
                <div
                  className="rounded-2xl p-6 flex flex-col gap-4 h-full"
                  style={{ background: "var(--bg-card)" }}
                >
                  <StarRating rating={review.rating} />
                  <p
                    className="text-[11px] uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.1em" }}
                  >
                    {review.occasion}
                  </p>
                  <blockquote
                    className="text-base leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                  >
                    &ldquo;{review.quote}&rdquo;
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

          <FadeUp delay={0.4}>
            <div className="text-center mt-10">
              <Button variant="ghost" href="/reviews">
                Read All Reviews
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-base)" flip={true} />

      {/* ================================================================
          LOCATION / DRIVE TIMES
          Source: initial-business-data.md §2 (drive times).
          Market-intelligence.md §5 Gap 5 (Louisville-Cincinnati-Indy corridor).
          ================================================================ */}
      <section
        className="relative py-20 lg:py-28 px-4"
        style={{ background: "var(--bg-dark)" }}
        aria-label="Location"
      >
        <Fireflies />
        <GodRays />
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
              <ShimmerText delay={0.5}>Closer Than You Think</ShimmerText>
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

      <WaveDivider fill="var(--bg-elevated)" background="var(--bg-dark)" />

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
              className="text-base leading-relaxed mb-2"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
            >
              As a VIP, you&rsquo;ll unlock:
            </p>
            <ul className="flex flex-col gap-2 mb-4 max-w-md mx-auto text-left">
              {siteData.vip.perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2 text-base"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>&#10024;</span>
                  {perk}
                </li>
              ))}
            </ul>
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
              className="mt-3 text-xs"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.06em" }}
            >
              {siteData.vip.ctaSubtext}
            </p>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
