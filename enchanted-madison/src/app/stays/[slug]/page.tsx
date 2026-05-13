// /stays/[slug] — Individual Stay Page
// Source: initial-business-data.md §4 (accommodation details), §8 (policies), §9 (booking)
// Anti-pattern #6: show pricing. Anti-pattern #7: Little Hotelier embedded inline (placeholder until embed code arrives).
// generateStaticParams: pre-renders all 4 slugs at build time.

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { StayCard } from "@/components/ui/StayCard";
import { LittleHotelierWidget } from "@/components/ui/LittleHotelierWidget";
import { PropertyGallery } from "@/components/ui/PropertyGallery";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { siteData } from "@/data/site";

export async function generateStaticParams() {
  return siteData.stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stay = siteData.stays.find((s) => s.slug === slug);
  if (!stay) return {};
  const title = stay.name;
  const description = `${stay.tagline} From $${stay.priceFrom}/night near Madison, Indiana. Private hot tub, fire pit, string lights.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://enchantedcollectivemadison.com/stays/${stay.slug}`,
    },
  };
}

export default async function StayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stay = siteData.stays.find((s) => s.slug === slug);
  if (!stay) notFound();

  const otherStays = siteData.stays.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      {/* Hero — pt scales with header height (h-20 / h-24 / h-28) plus a
          consistent ~48px breathing room so the eyebrow never touches the nav. */}
      <section
        className="pt-32 sm:pt-36 lg:pt-40 pb-12 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                {stay.badge && (
                  <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                    {stay.badge}
                  </p>
                )}
                <p
                  className="eyebrow mb-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stay.type} · Sleeps {stay.capacity}
                  {stay.sqft ? ` · ${stay.sqft} sq ft` : ""}
                </p>
                <h1
                  className="leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "clamp(40px, 6vw, 64px)",
                    color: "var(--text-primary)",
                  }}
                >
                  {stay.name}
                </h1>
              </div>
              <div className="text-right">
                <p
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
                >
                  From ${stay.priceFrom}
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
                >
                  per night
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-base)" flip={true} />

      {/* Photo carousel — dark stage so the photos pop. Provides the c→D
          flip in the c-D-c-D-c page rhythm. */}
      <section
        className="relative py-14 lg:py-20 px-4 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
        aria-label={`${stay.name} photo gallery`}
      >
        <Fireflies count={12} />
        <GodRays opacity={0.3} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeUp>
            {stay.gallery && stay.gallery.length > 0 ? (
              <PropertyGallery images={stay.gallery} alt={stay.name} />
            ) : (
              <div
                className="relative w-full rounded-2xl flex items-center justify-center"
                style={{
                  aspectRatio: "16/9",
                  background: "rgba(254,252,250,0.06)",
                  border: "1px solid rgba(254,252,250,0.14)",
                }}
              >
                <p
                  className="eyebrow"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.12em",
                    color: "rgba(254,252,250,0.7)",
                  }}
                >
                  {stay.type}
                </p>
              </div>
            )}
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* Main content */}
      <section
        className="py-16 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

          {/* Left: description + features */}
          <div className="flex flex-col gap-10">
            <FadeUp>
              <p
                className="text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
              >
                {stay.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <h2
                  className="text-2xl mb-5"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                >
                  What&rsquo;s Included
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stay.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                    >
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Policies */}
            <FadeUp delay={0.15}>
              <div
                className="rounded-2xl p-6"
                style={{ background: "var(--bg-elevated)" }}
              >
                <h3
                  className="text-lg mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                >
                  Stay Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Check-in", value: "4:00 PM" },
                    { label: "Check-out", value: "10:00 AM" },
                    { label: "Guests", value: `Max ${stay.capacity}` },
                    { label: "Min. age", value: "25 years" },
                    { label: "Cancellation", value: "Free up to 30 days" },
                    { label: "Check-in type", value: "Self check-in" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p
                        className="text-xs"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm mt-0.5"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: booking widget / CTA */}
          <div>
            <div
              className="sticky top-24 rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
            >
              <div>
                <p
                  className="text-3xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  From ${stay.priceFrom}<span className="text-base font-normal" style={{ color: "var(--text-secondary)" }}>/night</span>
                </p>
                {stay.badge && (
                  <p
                    className="eyebrow text-[11px] mt-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {stay.badge}
                  </p>
                )}
              </div>

              {/* Phase 4: Little Hotelier booking widget */}
              {/* When littleHotelierWidgets[slug] is set, renders the iframe. Until then shows placeholder + CTA. */}
              <LittleHotelierWidget
                src={siteData.booking.littleHotelierWidgets[stay.slug as keyof typeof siteData.booking.littleHotelierWidgets] ?? ""}
                fallbackHref={siteData.booking.littleHotelierUrl}
              />

              {!siteData.booking.littleHotelierWidgets[stay.slug as keyof typeof siteData.booking.littleHotelierWidgets] && (
                <Button variant="primary" size="lg" href={siteData.booking.littleHotelierUrl} external className="w-full">
                  Check Availability
                </Button>
              )}

              <p
                className="text-center text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.04em" }}
              >
                Best rate guaranteed · Book direct
              </p>

              <div
                className="pt-4 border-t flex flex-col gap-2"
                style={{ borderColor: "var(--primary-muted)" }}
              >
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                >
                  Have questions? We&rsquo;re here to help.
                </p>
                <a
                  href={`tel:${siteData.phone}`}
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-body)", color: "var(--primary)" }}
                >
                  {siteData.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="var(--bg-dark)" background="var(--bg-base)" flip={true} />

      {/* Enhance your stay — add-ons teaser (dark stage, second flip in
          the c-D-c-D-c rhythm) */}
      <section
        className="relative py-16 lg:py-20 px-4 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies count={10} />
        <GodRays opacity={0.3} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="eyebrow mb-1" style={{ color: "var(--accent)" }}>
                  Make It Unforgettable
                </p>
                <h2
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-on-dark)" }}
                >
                  Add-On Packages
                </h2>
                <p
                  className="text-sm mt-1"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.7)" }}
                >
                  Romance packages, movie nights, picnic rides, and more — bookable at checkout.
                </p>
              </div>
              <Button variant="secondary" href="/packages">
                View Add-Ons
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* Other stays */}
      {otherStays.length > 0 && (
        <section
          className="py-16 px-4"
          style={{ background: "var(--bg-base)" }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2
                className="text-2xl mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
              >
                You Might Also Like
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherStays.map((s, i) => (
                <ScaleIn key={s.slug} delay={i * 0.08}>
                  <StayCard
                    slug={s.slug}
                    name={s.name}
                    type={s.type}
                    tagline={s.tagline}
                    priceFrom={s.priceFrom}
                    capacity={s.capacity}
                    badge={s.badge ?? undefined}
                    image={s.image}
                  />
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
