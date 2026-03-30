import type { Metadata } from "next";
import Link from "next/link";

import { experienceCollections, firesideLounge } from "../../content/experiences";

export const metadata: Metadata = {
  title: "Date Night",
  description:
    "Private hot tub escapes in Madison, Indiana — from $119/couple. No overnight stay required. Candlelight, spa robes, Fireside Lounge, and two hours that feel nothing like ordinary date night.",
  openGraph: {
    title: "Date Night Escapes | The Enchanted Collective",
    description:
      "Private hot tub escapes in Madison, Indiana — from $119/couple. No overnight stay required.",
    url: "/date-night",
    type: "website",
  },
};

const tierStyles: Record<string, { badge: string; card: string; price: string }> = {
  entry: {
    badge: "bg-stone/10 text-stone",
    card: "border-forest/10 bg-ivory",
    price: "text-charcoal",
  },
  popular: {
    badge: "bg-gold/15 text-gold",
    card: "border-gold/40 bg-ivory ring-1 ring-gold/20",
    price: "text-gold",
  },
  premium: {
    badge: "bg-rose/10 text-rose",
    card: "border-rose/30 bg-ivory",
    price: "text-rose",
  },
};

const tierLabels: Record<string, string> = {
  entry: "Classic",
  popular: "Most Popular",
  premium: "Premium",
};

export default function DateNightPage() {
  const { dateNight } = experienceCollections;

  return (
    <>
      {/* ── Dark cinematic hero ───────────────────────────────────────────── */}
      {/* min-h-screen fills full viewport; justify-end pins content to lower third */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-night">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 20% 85%, rgba(184,150,90,0.32) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 75% 65%, rgba(196,145,123,0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 30% at 50% 0%, rgba(10,18,12,0.75) 0%, transparent 45%), linear-gradient(175deg, #0D1810 0%, #1A2A1E 30%, #2C3E2D 65%, #1A2A1E 100%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-night/80 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[80rem] px-5 pb-20 lg:px-8 lg:pb-32">
          <p className="font-accent text-2xl text-gold lg:text-3xl">
            {dateNight.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-ivory lg:text-[4.5rem] lg:leading-[0.95]">
            Forget dinner<br className="hidden lg:block" /> and a movie.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ivory/70">
            Choose restoration instead. Private hot tub, candlelit ambiance, spa robes — and a Fireside Lounge waiting inside when you&apos;re ready. No overnight stay required.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#packages"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              See Packages
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold/50 px-8 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <main className="bg-cream">
        {/* ── Package cards ──────────────────────────────────────────────── */}
        <section id="packages" className="bg-cream">
          <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
            <div className="mb-10">
              <p className="font-accent text-2xl text-gold">Choose your escape</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-forest lg:text-4xl">
                Three tiers. Same private setting.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/70">
                {dateNight.intro}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {dateNight.packages.map((pkg) => {
                const styles = tierStyles[pkg.tier];
                return (
                  <article
                    key={pkg.slug}
                    className={[
                      "flex flex-col rounded-[2rem] border p-7 shadow-warm",
                      styles.card,
                    ].join(" ")}
                  >
                    {/* Tier badge + duration */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={[
                          "rounded-full px-3 py-1 text-xs font-semibold",
                          styles.badge,
                        ].join(" ")}
                      >
                        {tierLabels[pkg.tier]}
                      </span>
                      <span className="text-xs text-stone">{pkg.duration}</span>
                    </div>

                    {/* Name + price */}
                    <h2 className="mt-4 font-heading text-2xl font-semibold text-forest">
                      {pkg.name}
                    </h2>
                    <p className={["mt-1 text-2xl font-semibold", styles.price].join(" ")}>
                      {pkg.price}
                      <span className="ml-1 text-sm font-normal text-stone">/ couple</span>
                    </p>

                    {/* Summary */}
                    <p className="mt-3 text-sm leading-7 text-charcoal/75">{pkg.summary}</p>

                    {/* Includes */}
                    <div className="mt-5 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-stone">
                        What&apos;s included
                      </p>
                      <ul className="mt-3 space-y-2">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-6">
                      <Link
                        href="/contact"
                        className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-gold px-5 py-3 text-sm font-semibold text-forest transition hover:bg-gold hover:text-night"
                      >
                        Plan This Escape
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Fireside Lounge feature ─────────────────────────────────────── */}
        <section className="border-t border-forest/10 bg-night">
          <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="font-accent text-2xl text-gold">Included in Luxury &amp; Ultimate</p>
                <h2 className="mt-2 font-heading text-3xl font-semibold text-ivory lg:text-4xl">
                  {firesideLounge.heading}
                </h2>
                <p className="mt-4 text-sm leading-7 text-ivory/70">
                  {firesideLounge.description}
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {firesideLounge.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-ivory/10 bg-ivory/5 px-4 py-3"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-ivory/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Girls Night callout ─────────────────────────────────────────── */}
        <section className="border-t border-forest/10 bg-ivory">
          <div className="mx-auto w-full max-w-[80rem] px-5 py-12 lg:px-8">
            <div className="flex flex-col gap-6 rounded-[2rem] border border-forest/10 bg-cream px-8 py-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <p className="font-accent text-2xl text-gold">Not just for couples</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-forest lg:text-3xl">
                  Girls Night is a thing here.
                </h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/75">
                  Bring your group. Spa robes, hot tub, Fireside Lounge, massage chair — the same
                  packages work beautifully for birthdays, bachelorettes, and long-overdue girls
                  nights. Message us and we&apos;ll talk through the details.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
                >
                  Plan Girls Night
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Day use callout ─────────────────────────────────────────────── */}
        <section className="border-t border-forest/10 bg-cream">
          <div className="mx-auto w-full max-w-[80rem] px-5 py-14 lg:px-8">
            <div className="mb-8">
              <p className="font-accent text-2xl text-gold">No overnight stay required</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-forest lg:text-4xl">
                From $119 — by the hour.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-charcoal/70">
                All three packages above are available as day-use experiences. Come for the soak,
                leave two to four hours later. Perfect for mid-week resets or same-week planning.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Tranquility Escape — $119", "The Luxury Escape — $149", "Ultimate Escape — $199"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-full border border-forest/10 bg-ivory px-4 py-2 text-sm font-medium text-charcoal/75"
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <section className="border-t border-forest/10 bg-night">
          <div className="mx-auto w-full max-w-[80rem] px-5 py-14 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-accent text-2xl text-gold">Ready to book?</p>
                <h2 className="mt-2 font-heading text-3xl font-semibold text-ivory lg:text-4xl">
                  Popular evenings fill fast.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-ivory/70">
                  Weekend slots — especially Fridays and Saturdays — go quickly. Message us with
                  your date and package preference and we&apos;ll get you confirmed.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
                >
                  Book Your Night
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
                >
                  See Add-Ons
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
