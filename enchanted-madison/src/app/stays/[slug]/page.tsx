import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { stayPackages } from "../../../content/packages";
import { stays } from "../../../content/stays";

type Params = { slug: string };

export function generateStaticParams() {
  return stays.map((stay) => ({ slug: stay.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);
  if (!stay) return {};
  return {
    title: stay.name,
    description: stay.summary,
  };
}

export default async function StayDetailPage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const stay = stays.find((s) => s.slug === slug);
  if (!stay) notFound();

  return (
    <main className="bg-cream">
      {/* ── Hero header ───────────────────────────────────────────────────── */}
      <section className="border-b border-forest/10 bg-[radial-gradient(circle_at_top,_rgba(184,150,90,0.15),_transparent_40%),linear-gradient(180deg,#F5F0EB_0%,#FEFCFA_100%)]">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-24">
          <p className="font-accent text-2xl text-gold">{stay.category}</p>
          <h1 className="mt-2 font-heading text-5xl font-semibold leading-none text-forest lg:text-7xl">
            {stay.name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-rose">{stay.startingRate}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/80">{stay.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {stay.capacity && (
              <span className="rounded-full border border-forest/20 bg-ivory px-4 py-2 text-sm font-medium text-forest">
                {stay.capacity}
              </span>
            )}
            {stay.size && (
              <span className="rounded-full border border-forest/20 bg-ivory px-4 py-2 text-sm font-medium text-forest">
                {stay.size}
              </span>
            )}
            {stay.dogs && (
              <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-forest">
                Dogs welcome
              </span>
            )}
            {stay.openingNote && (
              <span className="rounded-full border border-rose/30 bg-rose/10 px-4 py-2 text-sm font-medium text-rose">
                {stay.openingNote}
              </span>
            )}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              Reserve This Stay
            </Link>
          </div>
        </div>
      </section>

      {/* ── Description ───────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Description paragraphs */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-semibold text-forest lg:text-4xl">
                About this stay
              </h2>
              {stay.description.map((para, i) => (
                <p key={i} className="text-base leading-8 text-charcoal/80 lg:text-lg">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights sidebar */}
            <aside className="h-fit rounded-[2rem] border border-forest/10 bg-ivory p-6 shadow-warm">
              <h3 className="font-heading text-xl font-semibold text-forest">Highlights</h3>
              <ul className="mt-4 space-y-3">
                {stay.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Amenities ─────────────────────────────────────────────────────── */}
      <section className="border-y border-forest/10 bg-ivory">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-forest lg:text-4xl">
            What&apos;s included
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {stay.amenities.map((amenity) => (
              <span
                key={amenity}
                className="rounded-full border border-forest/10 bg-cream px-4 py-2 text-sm font-medium text-charcoal"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-on packages upsell ────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8">
          <p className="font-accent text-2xl text-gold">Make it unforgettable</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-forest lg:text-4xl">
            Add to your stay
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-charcoal/75">
            Every package is priced on the page. Add what sounds right and we&apos;ll have it
            ready when you arrive.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stayPackages.map((pkg) => (
              <article
                key={pkg.slug}
                className="flex flex-col rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold text-forest">{pkg.name}</h3>
                  <span className="shrink-0 text-base font-semibold text-rose">{pkg.price}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-charcoal/75">{pkg.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {pkg.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-charcoal/60">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                  {pkg.includes.length > 4 && (
                    <li className="text-xs text-stone">+ {pkg.includes.length - 4} more included</li>
                  )}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone">
            Add packages when you contact us to reserve, or ask about them at any point before arrival.
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="bg-night">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-accent text-2xl text-gold">Ready to book?</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-ivory lg:text-4xl">
                {stay.name}
              </h2>
              <p className="mt-2 text-xl font-semibold text-rose">{stay.startingRate}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
              >
                Reserve This Stay
              </Link>
              <Link
                href="/stays"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
              >
                View All Stays
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
