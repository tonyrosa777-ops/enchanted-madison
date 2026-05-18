// /glamping — Luxury Glamping SEO landing page
// Source: 2026-05-18 Angela call IA pivot. Site already ranks for
// "glamping" per Google Analytics; this page reinforces that ranking
// with a dedicated category surface + structured data, and acts as the
// SEO landing for "luxury glamping Indiana / Madison" queries.
// Two product cards (Velvet Buck + Starlit Buck) route into /stays/[slug]
// for booking. Page Quality Standard (CLAUDE.md): dark hero, Fireflies,
// GodRays, ShimmerText H1, WaveDivider, scroll anims, dark CTA footer.

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Luxury Glamping in Madison, Indiana — Private Hot Tubs, King Beds",
  description:
    "Two luxury glamping tents under the Indiana stars: private hot tubs, king beds, woodland seclusion, and string-lit decks. From $175/night, minutes from Clifty Falls. Couples-only.",
  openGraph: {
    title: "Luxury Glamping in Madison, Indiana | The Enchanted Collective",
    description:
      "Wooded luxury glamping tents with private hot tubs and king beds, just minutes from Clifty Falls State Park and downtown Madison.",
    url: "https://enchantedcollectivemadison.com/glamping",
  },
};

const differentiators = [
  {
    icon: "♨︎",
    title: "Private hot tub at every tent",
    detail:
      "Not a shared bathhouse soak — a hot tub on your own deck, fired up and waiting when you arrive.",
  },
  {
    icon: "👑",
    title: "King bed, real linens",
    detail:
      "Plush bedding, layered throws, and a real mattress. You sleep like you would at a boutique hotel.",
  },
  {
    icon: "🌲",
    title: "Wooded seclusion",
    detail:
      "Tents set apart on a private wooded property. No neighbors. No tent flaps two feet from yours.",
  },
  {
    icon: "✦",
    title: "Minutes from Clifty Falls",
    detail:
      "10 minutes to Clifty Falls State Park, 5 minutes to historic downtown Madison and the Ohio River.",
  },
];

const faqs = [
  {
    q: "What's the difference between glamping and camping?",
    a: "Glamping is camping with the comfort of a hotel. At The Enchanted Collective our luxury glamping tents come with a real king bed, plush linens, a private hot tub, electricity, climate control, and a string-lit deck. Traditional tent camping (which we also offer on the same property at $45/night) is the back-to-basics version: you bring or use a basic tent and sleeping bags. Glamping is for couples who want the romance of being in the woods without giving up their nightly comforts.",
  },
  {
    q: "Is the hot tub really private?",
    a: "Yes — each luxury glamping tent has its own private hot tub on its own deck, set apart from other accommodations by woodland. There is no shared hot tub. You can soak naked if you want to.",
  },
  {
    q: "Are pets allowed at the glamping tents?",
    a: "The luxury glamping tents (Velvet Buck and Starlit Buck) are not pet-friendly — the linens, decor, and finishes don't accommodate fur and dander well. If you're traveling with a dog, our tent sites are dog-friendly and just a short walk away on the same property.",
  },
  {
    q: "What do I need to bring?",
    a: "Just clothes and toiletries. Linens, towels, soap, hot tub robes, and basic kitchen essentials are all provided. Pack layers for the temperature swing between hot tub heat and a cool Indiana night.",
  },
  {
    q: "When do the glamping tents open?",
    a: "Both Velvet Buck and Starlit Buck open June 2026. Join the VIP list for early-access booking windows and the chance to grab opening-weekend dates first.",
  },
  {
    q: "How is glamping here different from a cabin?",
    a: "A cabin is a building; our luxury glamping tents are large canvas tents on raised decks with full luxury finishes inside. You hear the woods at night the way you would in a tent, but you sleep on a king bed. It's the literal in-between of a cabin and a tent — and it's what makes glamping romantic in a way a cabin can't quite match.",
  },
];

// JSON-LD LodgingBusiness schema with both glamping products as
// containsPlace. Mirrors homepage schema pattern (app/page.tsx:23-81).
const glampingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "The Enchanted Collective — Luxury Glamping",
  url: "https://enchantedcollectivemadison.com/glamping",
  description:
    "Luxury glamping tents near Madison, Indiana. Private hot tubs, king beds, and woodland seclusion. The Velvet Buck and The Starlit Buck — two-person glamping tents on a private wooded property minutes from Clifty Falls State Park.",
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
    longitude: -85.383,
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private hot tub", value: true },
    { "@type": "LocationFeatureSpecification", name: "King bed", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private deck", value: true },
    { "@type": "LocationFeatureSpecification", name: "String lights", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fire pit", value: true },
  ],
  containsPlace: [
    {
      "@type": "Accommodation",
      name: "The Velvet Buck",
      url: "https://enchantedcollectivemadison.com/stays/velvet-buck",
    },
    {
      "@type": "Accommodation",
      name: "The Starlit Buck",
      url: "https://enchantedcollectivemadison.com/stays/starlit-buck",
    },
  ],
};

function stayBySlug(slug: string) {
  return siteData.stays.find((s) => s.slug === slug);
}

export default function GlampingPage() {
  const velvetBuck = stayBySlug("velvet-buck");
  const starlitBuck = stayBySlug("starlit-buck");

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glampingSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Image
          src="/images/accommodations/velvet-buck.webp"
          alt="Luxury glamping tent with private hot tub at twilight"
          fill
          priority
          className="object-cover pointer-events-none"
          style={{ opacity: 0.28 }}
          sizes="100vw"
        />
        <Fireflies count={20} />
        <GodRays />
        <FadeUp className="relative z-10">
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Madison, Indiana · Velvet Buck · Starlit Buck
          </p>
          <h1
            className="leading-tight mb-5 max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(36px, 5.5vw, 64px)",
              color: "var(--text-on-dark)",
            }}
          >
            <ShimmerText delay={1}>Luxury Glamping Under Indiana Stars</ShimmerText>
          </h1>
          <p
            className="max-w-2xl mx-auto text-base lg:text-lg leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "rgba(254,252,250,0.78)" }}
          >
            Two wooded glamping tents with private hot tubs, king beds, and string-lit
            decks. Five minutes from downtown Madison, ten from Clifty Falls — and
            firmly couples-only.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" href="#glamping-tents">
              See the Tents
            </Button>
            <Button variant="ghost-light" size="lg" href={siteData.booking.littleHotelierUrl} external>
              Check Availability
            </Button>
          </div>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* SEO intro — "What is Luxury Glamping" */}
      <section className="py-16 lg:py-20 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-10">
              <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
                What Luxury Glamping Means Here
              </p>
              <h2
                className="leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 3.6vw, 42px)",
                  color: "var(--text-primary)",
                }}
              >
                The Camping Romance, Without the Camping Compromises
              </h2>
            </div>
            <div
              className="flex flex-col gap-5 text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              <p>
                Luxury glamping in Madison, Indiana means a king bed under a canvas roof,
                a private hot tub on your own deck, and the kind of woodland silence you
                only get on a property that put privacy first. The Enchanted Collective
                runs two glamping tents — <strong>The Velvet Buck</strong> and{" "}
                <strong>The Starlit Buck</strong> — designed entirely for couples. Each
                one is its own world, set apart from the next by trees and a long
                string of fairy lights.
              </p>
              <p>
                Inside, the glamping experience is closer to a boutique hotel than to a
                tent: plush linens, climate control, real lighting, a small lounge area,
                and a thoughtfully equipped corner. Outside, the deck wraps around a
                two-person hot tub already heated to 102°F. Below, a private fire pit,
                Adirondack chairs, and an outdoor dining table. You can spend the whole
                weekend without leaving your tent.
              </p>
              <p>
                If you&apos;ve only ever done traditional tent camping, the gap is
                immediate. If you&apos;d like to compare, our{" "}
                <Link href="/campsites" className="underline" style={{ color: "var(--accent)" }}>
                  tent sites
                </Link>{" "}
                run $45/night on the same property — same trees, same dark sky, no
                hot tub or king bed. Both are honest versions of being in the Indiana
                woods; glamping just removes the part where you sleep on the ground.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Product cards — DARK section for Pattern #8 alternation.
          Cards float as cream over dark, framing the under-the-stars feel. */}
      <section
        id="glamping-tents"
        className="relative py-16 lg:py-20 px-4 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies count={14} />
        <GodRays opacity={0.3} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                The Glamping Tents
              </p>
              <h2
                className="text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-on-dark)" }}
              >
                Two Distinct Tents, One Property
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[velvetBuck, starlitBuck].filter(Boolean).map((stay, i) => {
              if (!stay) return null;
              return (
                <ScaleIn key={stay.slug} delay={i * 0.1}>
                  <Link
                    href={`/stays/${stay.slug}`}
                    className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                    style={{ background: "var(--bg-card)" }}
                  >
                    <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                      <Image
                        src={stay.image}
                        alt={stay.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {stay.badge && (
                        <span
                          className="absolute top-3 left-3 eyebrow px-3 py-1 rounded-full text-[10px]"
                          style={{ background: "var(--bg-dark)", color: "var(--text-on-dark)" }}
                        >
                          {stay.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-7 flex flex-col gap-3 flex-1">
                      <p className="eyebrow text-[11px]" style={{ color: "var(--text-secondary)" }}>
                        {stay.type} · Sleeps {stay.capacity}
                        {stay.sqft && ` · ${stay.sqft} sq ft`}
                      </p>
                      <h3
                        className="text-2xl leading-tight"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                      >
                        {stay.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                      >
                        {stay.tagline}
                      </p>
                      <ul className="flex flex-col gap-1.5 mt-1 mb-2">
                        {stay.features.slice(0, 4).map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm"
                            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                          >
                            <span style={{ color: "var(--accent)", flexShrink: 0 }}>✦</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <p
                          className="text-sm font-medium tracking-wide"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                        >
                          From ${stay.priceFrom}/night
                        </p>
                      </div>
                      <span
                        className="inline-flex items-center justify-center rounded-full w-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group-hover:brightness-110"
                        style={{ background: "var(--accent)", color: "var(--text-on-dark)", fontFamily: "var(--font-body)" }}
                      >
                        See {stay.name.replace("The ", "")} →
                      </span>
                    </div>
                  </Link>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why glamp with us */}
      <section className="py-16 lg:py-20 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                Why Glamping Here
              </p>
              <h2
                className="text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
              >
                What Sets Our Tents Apart
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((d, i) => (
              <ScaleIn key={d.title} delay={i * 0.05}>
                <div
                  className="rounded-xl p-6 flex flex-col gap-2 h-full"
                  style={{ background: "var(--bg-card)" }}
                >
                  <span
                    className="text-3xl"
                    style={{ color: "var(--accent)", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {d.icon}
                  </span>
                  <h3
                    className="text-lg lg:text-xl"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                  >
                    {d.title}
                  </h3>
                  <p
                    className="text-sm lg:text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {d.detail}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                Glamping FAQ
              </p>
              <h2
                className="text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
              >
                Common Questions
              </h2>
            </div>
          </FadeUp>
          <div className="flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <FadeUp key={faq.q} delay={i * 0.04}>
                <details
                  className="rounded-xl px-6 py-5 group"
                  style={{ background: "var(--bg-card)" }}
                >
                  <summary
                    className="cursor-pointer text-base lg:text-lg list-none flex items-start justify-between gap-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="flex-shrink-0 mt-1 transition-transform duration-200 group-open:rotate-45"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-3 text-sm lg:text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {faq.a}
                  </p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA footer */}
      <section
        className="relative py-16 lg:py-20 px-4 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies count={16} />
        <GodRays opacity={0.35} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
              Reserve Your Tent
            </p>
            <h2
              className="text-3xl lg:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-on-dark)" }}
            >
              Book Your Glamping Escape
            </h2>
            <p
              className="text-sm lg:text-base leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.75)" }}
            >
              Both tents open June 2026. Weekend nights book first — join the VIP list
              for early-access reservations or pick your tent below.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/stays/velvet-buck">
                The Velvet Buck →
              </Button>
              <Button variant="ghost-light" size="lg" href="/stays/starlit-buck">
                The Starlit Buck →
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
