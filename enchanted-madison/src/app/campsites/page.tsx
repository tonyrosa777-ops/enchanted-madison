// /campsites — Tent Camping SEO landing page
// Source: 2026-05-18 Angela call. Site ranks for "glamping" and "hot tubs"
// but NOT "camping / tent camping near Madison Indiana." This page is the
// primary surface for those queries. Two product cards (Bell Tent + BYO)
// route into /stays/[slug] for booking. Page Quality Standard (CLAUDE.md):
// dark hero w/ Fireflies+GodRays+Embers, ShimmerText H1, WaveDivider,
// FadeUp/ScaleIn anims, dark CTA footer.

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Tent Camping in Madison, Indiana — Bell Tent + BYO Sites",
  description:
    "Wooded tent sites near Clifty Falls State Park: bring your own gear, or arrive to a pre-set 16-foot bell tent. Fire pit, Adirondacks, string lights, and clean bathhouse — $45/night. Dog-friendly. Just 5 minutes from downtown Madison.",
  openGraph: {
    title: "Tent Camping in Madison, Indiana | The Enchanted Collective",
    description:
      "Choose your wooded Indiana escape: bring your own tent or stay in a pre-set bell tent. $45/night, dog-friendly, minutes from Clifty Falls.",
    url: "https://enchantedcollectivemadison.com/campsites",
  },
};

const sharedAmenities = [
  { icon: "🔥", title: "Private fire pit", detail: "With cooking grate and Adirondack chairs" },
  { icon: "🪑", title: "Outdoor dining table", detail: "Eat under string lights as the sun sets" },
  { icon: "✨", title: "Overhead string lights", detail: "Soft ambient glow once dusk lands" },
  { icon: "🚿", title: "Shower & bathhouse access", detail: "Clean, lit, and just a short walk away" },
  { icon: "🐾", title: "Dogs welcome", detail: "Bring your good boy or girl along" },
  { icon: "🌲", title: "Wooded seclusion", detail: "Each site set apart for privacy" },
];

const faqs = [
  {
    q: "What's the difference between the Curated Bell Tent Site and Bring Your Own Tent?",
    a: "The Curated Bell Tent Site comes with a 16-foot canvas bell tent already pitched and waiting — you just bring bedding and personal gear. The Bring Your Own Tent Site is the same wooded campsite with the same amenities (fire pit, chairs, dining table, string lights, bathhouse access), but you bring and pitch your own tent. Both sites are $45/night.",
  },
  {
    q: "Are dogs really welcome at the tent sites?",
    a: "Yes — both tent sites are dog-friendly. We just ask that pups stay leashed in shared areas and that you clean up after them. Many of our guests bring their dogs along for the firepit and the trails nearby.",
  },
  {
    q: "Where do I shower? Is the bathhouse heated?",
    a: "Tent-site guests use the on-property bathhouse — clean, well-lit, and a short walk from each site. It has full hot-water showers and is heated year-round.",
  },
  {
    q: "Is tent camping near Madison, Indiana good for first-timers?",
    a: "Absolutely. Our wooded tent sites are a 5-minute drive from downtown Madison and 10 minutes from Clifty Falls State Park, so you get the camping experience without being remote. The Curated Bell Tent Site is especially first-timer-friendly — the tent is already set up, so you skip the steepest learning curve.",
  },
  {
    q: "What should I pack for tent camping here?",
    a: "Bedding (sleeping bag or comforter + pillow), a flashlight or headlamp, toiletries, layers for cool evenings, and food + drinks. The fire pit has a cooking grate if you want to grill. For the Bring Your Own Tent Site, you'll obviously also need your tent and stakes.",
  },
  {
    q: "Can I book just one night, or do I need a weekend?",
    a: "One-night bookings are welcome at the tent sites. Friday and Saturday nights book up fastest in summer — we recommend reserving at least 2 weeks out for peak weekends.",
  },
  {
    q: "What's the cancellation policy?",
    a: "Cancel 7+ days before your arrival for a full refund. Inside 7 days we'll work with you on a date change or partial refund depending on circumstances.",
  },
  {
    q: "When does the tent camping season open?",
    a: "Tent sites open June 2026. We recommend joining the VIP list for early-access booking windows and seasonal weather updates.",
  },
];

// JSON-LD Campground schema. Source data mirrored from homepage LodgingBusiness
// at app/page.tsx (lines 23-81). Two containsPlace entries cover the two
// tent products — both route to /stays/[slug] for booking.
const campgroundSchema = {
  "@context": "https://schema.org",
  "@type": "Campground",
  name: "The Enchanted Collective — Tent Camping",
  url: "https://enchantedcollectivemadison.com/campsites",
  description:
    "Wooded tent sites near Madison, Indiana. Curated Bell Tent (pre-set 16-foot canvas tent) and Bring Your Own Tent options. Fire pit, Adirondacks, string lights, bathhouse, dog-friendly. From $45/night.",
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
  priceRange: "$",
  currenciesAccepted: "USD",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Fire pit", value: true },
    { "@type": "LocationFeatureSpecification", name: "Dog-friendly", value: true },
    { "@type": "LocationFeatureSpecification", name: "Shower / bathhouse access", value: true },
    { "@type": "LocationFeatureSpecification", name: "String lights", value: true },
  ],
  containsPlace: [
    {
      "@type": "Accommodation",
      name: "Curated Bell Tent Site",
      url: "https://enchantedcollectivemadison.com/stays/bell-tent",
    },
    {
      "@type": "Accommodation",
      name: "Curated Tent Site — Bring Your Own Tent",
      url: "https://enchantedcollectivemadison.com/stays/campsite",
    },
  ],
};

function stayBySlug(slug: string) {
  return siteData.stays.find((s) => s.slug === slug);
}

export default function CampsitesPage() {
  const bellTent = stayBySlug("bell-tent");
  const campsite = stayBySlug("campsite");

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(campgroundSchema) }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 text-center overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Image
          src="/images/accommodations/bell-tent.webp"
          alt="Wooded tent site at dusk"
          fill
          priority
          className="object-cover pointer-events-none"
          style={{ opacity: 0.24 }}
          sizes="100vw"
        />
        <Fireflies count={18} />
        <GodRays />
        <Embers count={14} />
        <FadeUp className="relative z-10">
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Madison, Indiana · Bell Tent · Bring Your Own
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
            <ShimmerText delay={1}>Tent Camping in the Indiana Woods</ShimmerText>
          </h1>
          <p
            className="max-w-2xl mx-auto text-base lg:text-lg leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "rgba(254,252,250,0.78)" }}
          >
            Wooded tent sites a five-minute drive from downtown Madison and ten minutes from
            Clifty Falls State Park. Pick your style: arrive to a pre-set bell tent, or pitch
            your own. Same firelit campsite, same string lights, same dogs-welcome rule.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" href="#tent-sites">
              See Tent Sites
            </Button>
            <Button variant="ghost-light" size="lg" href={siteData.booking.littleHotelierUrl} external>
              Check Availability
            </Button>
          </div>
        </FadeUp>
      </section>

      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* SEO intro — "Choose Your Adventure" */}
      <section className="py-16 lg:py-20 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-10">
              <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
                Choose Your Adventure
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
                Two Ways to Pitch a Tent in Southern Indiana
              </h2>
            </div>
            <div
              className="flex flex-col gap-5 text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              <p>
                Tent camping near Madison, Indiana doesn&apos;t have to mean roughing it.
                At The Enchanted Collective our two tent-site options are designed for
                couples who want the campfire, the canopy of trees, and the sound of crickets
                — without losing access to a hot shower and a real bathroom. Both sites
                live on the same private wooded property as our cottage and luxury glamping
                tents, just minutes from Clifty Falls State Park and downtown Madison.
              </p>
              <p>
                The <strong>Curated Bell Tent Site</strong> arrives ready: a 16-foot
                canvas bell tent already pitched, with a fire pit, Adirondack chairs,
                an outdoor dining table, and overhead string lights waiting for you. Bring
                your bedding and your gear; we&apos;ve handled the rest. The{" "}
                <strong>Bring Your Own Tent Site</strong> is the same campsite with all
                the same amenities — you just pitch your own tent on the cleared, level
                pad. Both are $45 a night, both are dog-friendly, and both put you within
                a five-minute drive of Madison&apos;s historic downtown.
              </p>
              <p>
                If you&apos;re weighing tent camping against{" "}
                <Link href="/glamping" className="underline" style={{ color: "var(--accent)" }}>
                  luxury glamping
                </Link>
                , the trade-off is simple: glamping gets you a king bed and a private hot
                tub for $175 a night; tent camping gets you the real-deal under-the-stars
                experience for a quarter of the price.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Product cards — DARK section for Pattern #8 alternation.
          Cards float as cream over dark, which makes the photos pop. */}
      <section
        id="tent-sites"
        className="relative py-16 lg:py-20 px-4 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        <Fireflies count={12} />
        <GodRays opacity={0.3} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                The Tent Sites
              </p>
              <h2
                className="text-3xl lg:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "var(--text-on-dark)",
                }}
              >
                Pick Your Style
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[bellTent, campsite].filter(Boolean).map((stay, i) => {
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
                        See {stay.name.replace("Curated ", "").replace(" — Bring Your Own Tent", "")} →
                      </span>
                    </div>
                  </Link>
                </ScaleIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared amenities grid */}
      <section className="py-16 lg:py-20 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                What&apos;s Included at Every Tent Site
              </p>
              <h2
                className="text-3xl lg:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
              >
                Same Amenities, Either Way
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sharedAmenities.map((a, i) => (
              <ScaleIn key={a.title} delay={i * 0.05}>
                <div
                  className="rounded-xl p-6 flex flex-col gap-2 h-full"
                  style={{ background: "var(--bg-card)" }}
                >
                  <span className="text-2xl" aria-hidden="true">{a.icon}</span>
                  <h3
                    className="text-lg"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {a.detail}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — long-tail SEO */}
      <section className="py-16 lg:py-20 px-4" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
                Tent Camping FAQ
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
        <Fireflies count={14} />
        <GodRays opacity={0.35} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>
              Reserve Your Site
            </p>
            <h2
              className="text-3xl lg:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-on-dark)" }}
            >
              Pick Your Wooded Tent Site
            </h2>
            <p
              className="text-sm lg:text-base leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.75)" }}
            >
              Tent sites open June 2026. Weekend nights book up fastest — we recommend
              reserving at least 2 weeks out for Friday or Saturday.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/stays/bell-tent">
                Curated Bell Tent →
              </Button>
              <Button variant="ghost-light" size="lg" href="/stays/campsite">
                Bring Your Own →
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
