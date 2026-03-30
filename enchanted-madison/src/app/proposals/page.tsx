import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../../components/layout/PageShell";
import { experienceCollections } from "../../content/experiences";

export const metadata: Metadata = {
  title: "Proposals",
  description:
    "Private proposal experiences in Madison, Indiana — from $249. We handle every detail so you can focus on the question. Three tiers, fully set up, completely unforgettable.",
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
  premium: "All-Inclusive",
};

export default function ProposalsPage() {
  const { proposals } = experienceCollections;

  return (
    <>
      {/* ── Dark cinematic hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-night">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 80%, #8B1A2C 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 30%, #1C3A2E 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[80rem] px-5 py-20 lg:px-8 lg:py-28">
          <p className="font-accent text-2xl text-gold lg:text-3xl">
            {proposals.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-ivory lg:text-6xl lg:leading-[1.05]">
            She deserves a moment<br className="hidden lg:block" /> she&apos;ll never forget.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ivory/70">
            {proposals.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              Start Planning
            </Link>
            <a
              href="#packages"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold/50 px-8 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold"
            >
              See Packages
            </a>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section className="border-b border-forest/10 bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-14 lg:px-8">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-stone">
            How it works
          </p>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                heading: "Tell us your vision",
                body: "Message us with the date, the setting you have in mind, and which package feels right. We'll confirm availability within 24 hours.",
              },
              {
                step: "02",
                heading: "We set everything up",
                body: "We arrive before you do. Rose petal paths, candles, champagne on ice — everything placed exactly as planned. You walk in ready.",
              },
              {
                step: "03",
                heading: "You get the moment",
                body: "All you have to do is ask the question. Stay and celebrate in the hot tub or Fireside Lounge after — it's already included.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="font-accent text-3xl text-gold">{item.step}</span>
                <h3 className="font-heading text-xl font-semibold text-forest">{item.heading}</h3>
                <p className="text-sm leading-7 text-charcoal/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Package cards ────────────────────────────────────────────────── */}
      <section id="packages" className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="mb-10">
            <p className="font-accent text-2xl text-gold">Choose your package</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-forest lg:text-4xl">
              Three tiers. Every detail handled.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {proposals.packages.map((pkg) => {
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
                      className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-rose px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
                    >
                      Book This Package
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to expect ───────────────────────────────────────────────── */}
      <section className="border-t border-forest/10 bg-ivory">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="font-accent text-2xl text-gold">The setting</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-forest lg:text-4xl">
                Private. Prepared. Unforgettable.
              </h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/75">
                Proposals take place on our private property — surrounded by woods, firelight, and
                quiet. No crowded restaurants, no strangers watching, no distractions.
              </p>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">
                The Enchanted Collective is located in Madison, Indiana — 45 minutes from Louisville,
                90 minutes from Indianapolis. Far enough to feel like an escape. Close enough to
                make it happen.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Private outdoor setting",
                  "45 min from Louisville",
                  "90 min from Indianapolis",
                  "Hot tub access available",
                  "We set up everything",
                  "Photos after the moment",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-forest/10 bg-cream px-3 py-1.5 text-xs font-medium text-charcoal/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Social proof / trust block */}
            <div className="rounded-[2rem] bg-night px-8 py-10 text-ivory">
              <p className="font-accent text-xl text-gold">From a recent guest</p>
              <blockquote className="mt-4 font-heading text-2xl font-semibold leading-snug">
                &ldquo;He proposed with rose petals and candles everywhere. I had no idea
                any of it was being set up — I just thought we were going for a walk.&rdquo;
              </blockquote>
              <footer className="mt-5 border-t border-ivory/10 pt-4">
                <p className="text-sm font-semibold text-gold">Drucilla M.</p>
                <p className="mt-0.5 text-xs text-ivory/50">Indianapolis, Indiana</p>
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="border-t border-forest/10 bg-night">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-14 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-accent text-2xl text-gold">Ready when you are</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-ivory lg:text-4xl">
                Give us as much lead time as you can.
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-ivory/70">
                Popular weekends book quickly. Send us a message with your ideal date and
                we&apos;ll let you know what&apos;s available and walk you through the next steps.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
              >
                Start Planning
              </Link>
              <Link
                href="/faq"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
