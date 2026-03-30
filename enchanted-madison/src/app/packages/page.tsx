import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../../components/layout/PageShell";
import { stayPackages } from "../../content/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Romance add-ons, outdoor movie nights, picnic rides, and s'mores skillets. Every package is priced on the page — add to your stay at The Enchanted Collective.",
};

export default function PackagesPage() {
  return (
    <PageShell
      eyebrow="Enhance your stay"
      title="Add to your escape without guessing what it costs"
      description="Every package is priced clearly. Add candlelight, champagne, an outdoor movie, or a sunrise picnic — we'll have it ready when you arrive."
    >
      {/* ── Package cards ─────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stayPackages.map((pkg) => (
              <article
                key={pkg.slug}
                className="flex flex-col rounded-[2rem] border border-forest/10 bg-ivory p-7 shadow-warm"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-heading text-2xl font-semibold text-forest">
                    {pkg.name}
                  </h2>
                  <span className="shrink-0 rounded-full bg-rose/10 px-3 py-1 text-sm font-semibold text-rose">
                    {pkg.price}
                  </span>
                </div>

                {/* Summary */}
                <p className="mt-4 text-sm leading-7 text-charcoal/75">{pkg.summary}</p>

                {/* Includes list */}
                <div className="mt-5">
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

                {pkg.note && (
                  <p className="mt-4 text-xs leading-5 text-stone">{pkg.note}</p>
                )}

                {/* CTA pushed to bottom */}
                <div className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-gold px-5 py-3 text-sm font-semibold text-forest transition hover:bg-gold hover:text-night"
                  >
                    Add to My Stay
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to add ────────────────────────────────────────────────────── */}
      <section className="border-t border-forest/10 bg-ivory">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                heading: "Choose your stay",
                body: "Book your cottage, glamping tent, or campsite through our availability calendar.",
              },
              {
                step: "02",
                heading: "Pick your add-ons",
                body: "Browse the packages above and mention which ones you'd like when you contact us.",
              },
              {
                step: "03",
                heading: "Arrive and enjoy",
                body: "Everything will be set up and ready before you arrive. No extra coordination needed.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="font-accent text-2xl text-gold">{item.step}</span>
                <h3 className="font-heading text-xl font-semibold text-forest">{item.heading}</h3>
                <p className="text-sm leading-6 text-charcoal/75">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/stays"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              Browse Stays
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-forest transition hover:bg-gold hover:text-night"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
