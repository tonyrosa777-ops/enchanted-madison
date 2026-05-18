// /stays — Stays Hub
// 4-category sectioned overview: Cottage / Luxury Glamping / Tent Camping / Hot Tub Escapes
// Source: 2026-05-18 Angela call IA pivot — each lodging category gets its
// own SEO landing (/glamping, /campsites) and /stays becomes the hub that
// previews all four and routes into the right place.
// Visual rhythm: c-D-c-D-c-D-c per Pattern #8 + Pattern #51 (auto-orbs).

import Image from "next/image";
import Link from "next/link";
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
  title: "Stays in Madison, Indiana — Cottage, Glamping, Tent Camping",
  description:
    "Choose your wooded Indiana escape: a private cottage with hot tub, luxury glamping tents under the stars, curated bell tent sites, or bring-your-own tent camping. Plus 2-hour hot tub escape experiences. From $45/night.",
};

const highlights = [
  { label: "Private hot tub", detail: "At select accommodations" },
  { label: "5 min", detail: "From downtown Madison" },
  { label: "10 min", detail: "From Clifty Falls State Park" },
  { label: "Couples only", detail: "Every unit designed for two" },
];

function stayBySlug(slug: string) {
  return siteData.stays.find((s) => s.slug === slug);
}

function CategoryHeader({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: string;
  heading: string;
  description: string;
}) {
  return (
    <FadeUp>
      <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
        <p
          className="eyebrow mb-3"
          style={{ color: "var(--accent)" }}
        >
          {eyebrow}
        </p>
        <h2
          className="leading-tight mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(28px, 3.6vw, 42px)",
            color: "var(--text-primary)",
          }}
        >
          {heading}
        </h2>
        <p
          className="text-base lg:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </FadeUp>
  );
}

function CategoryExploreLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <FadeUp delay={0.15}>
      <div className="mt-10 text-center">
        <Link
          href={href}
          className="inline-flex items-center gap-2 group transition-opacity duration-200 hover:opacity-70"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {label}
          <span
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </FadeUp>
  );
}

export default function StaysPage() {
  const cottage = stayBySlug("enchanted-cottage");
  const velvetBuck = stayBySlug("velvet-buck");
  const starlitBuck = stayBySlug("starlit-buck");
  const bellTent = stayBySlug("bell-tent");
  const campsite = stayBySlug("campsite");

  return (
    <PageShell>
      {/* Dark hero — existing pattern, kept */}
      <section
        className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 text-center"
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

      {/* Experience Finder trigger — kept above category sections */}
      <section className="pt-12 px-4" style={{ background: "var(--bg-base)" }}>
        <ExperienceFinderTrigger triggerText={siteData.experienceFinder.triggerCopy.stays} />
      </section>

      {/* 1. The Enchanted Cottage — featured wide card on cream */}
      {cottage && (
        <section
          className="py-16 lg:py-20 px-4"
          style={{ background: "var(--bg-base)" }}
        >
          <div className="max-w-6xl mx-auto">
            <CategoryHeader
              eyebrow="The Cottage"
              heading="A Private Home Retreat"
              description="A fully equipped one-bedroom cottage with a private hot tub on a covered deck, fire pit, and curated cocktail bar. Best for couples who want the comforts of home with the seclusion of a getaway."
            />
            <div className="w-full max-w-3xl mx-auto">
              <ScaleIn>
                <StayCard
                  slug={cottage.slug}
                  name={cottage.name}
                  type={cottage.type}
                  tagline={cottage.tagline}
                  priceFrom={cottage.priceFrom}
                  capacity={cottage.capacity}
                  badge={cottage.badge ?? undefined}
                  highlight={cottage.features.slice(0, 3).join(" · ")}
                  image={cottage.image}
                />
              </ScaleIn>
            </div>
          </div>
        </section>
      )}

      {/* 2. Luxury Glamping — Velvet Buck + Starlit Buck on elevated bg */}
      {velvetBuck && starlitBuck && (
        <section
          className="py-16 lg:py-20 px-4"
          style={{ background: "var(--bg-elevated)" }}
        >
          <div className="max-w-6xl mx-auto">
            <CategoryHeader
              eyebrow="Luxury Glamping"
              heading="Sleep Among the Trees"
              description="Two-person luxury glamping tents with private hot tubs, king beds, and woodland seclusion. Designed for couples who want the romance of camping without giving up comfort."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[velvetBuck, starlitBuck].map((stay, i) => (
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
            <CategoryExploreLink label="Explore Luxury Glamping" href="/glamping" />
          </div>
        </section>
      )}

      {/* 3. Tent Camping — Bell Tent + BYO on cream */}
      {bellTent && campsite && (
        <section
          className="py-16 lg:py-20 px-4"
          style={{ background: "var(--bg-base)" }}
        >
          <div className="max-w-6xl mx-auto">
            <CategoryHeader
              eyebrow="Tent Camping"
              heading="Wooded Tent Sites for Every Style"
              description="Bring your own gear and back-to-basics it, or arrive to a pre-set 16-foot bell tent. Both options come with a private fire pit, Adirondacks, string lights, and access to a clean bathhouse — for $45/night."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[bellTent, campsite].map((stay, i) => (
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
            <CategoryExploreLink label="Explore Tent Camping" href="/campsites" />
          </div>
        </section>
      )}

      {/* 4. Hot Tub Escapes — day experiences (not overnight). Horizontal feature card. */}
      <section
        className="py-16 lg:py-20 px-4"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-6xl mx-auto">
          <CategoryHeader
            eyebrow="Day Experiences"
            heading="Hot Tub Escapes for Date Night"
            description="Two hours of warm water, candlelight, and the fireside lounge — for just the two of you. Three tiered packages: Tranquility, Luxury, and Ultimate. No overnight required."
          />
          <ScaleIn>
            <Link
              href="/date-night"
              className="block group rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto"
              style={{ background: "var(--bg-card)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src="/images/experiences/date-night.webp"
                    alt="Couple enjoying a private hot tub escape at dusk"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center gap-3">
                  <p
                    className="eyebrow text-[11px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Day Experience · 1.5 – 3 hrs
                  </p>
                  <h3
                    className="text-2xl lg:text-3xl leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    Date Night, Reinvented
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                  >
                    Forget dinner and a movie. Choose restoration instead — a candlelit hot tub soak plus the fireside lounge, available as an add-on to any overnight stay or as a standalone evening.
                  </p>
                  <p
                    className="text-sm font-medium tracking-wide mt-2"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                  >
                    From $119
                  </p>
                  <span
                    className="inline-flex items-center justify-center rounded-full mt-2 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group-hover:brightness-110"
                    style={{
                      background: "var(--accent)",
                      color: "var(--text-on-dark)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Explore Hot Tub Escapes →
                  </span>
                </div>
              </div>
            </Link>
          </ScaleIn>
        </div>
      </section>

      {/* Policies strip (kept) */}
      <section
        className="py-12 px-4"
        style={{ background: "var(--bg-base)" }}
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
