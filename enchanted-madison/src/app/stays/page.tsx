import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../../components/layout/PageShell";
import { PropertyCard } from "../../components/ui/PropertyCard";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { stays } from "../../content/stays";

export const metadata: Metadata = {
  title: "Stays",
  description:
    "Luxury glamping tents, a private cottage, and curated campsites in Madison, Indiana. Private hot tubs, fire pits, and transparent pricing from $35/night.",
  openGraph: {
    title: "Stays | The Enchanted Collective",
    description:
      "Luxury glamping tents, a private cottage, and curated campsites in Madison, Indiana. Private hot tubs, fire pits, and transparent pricing from $35/night.",
    url: "/stays",
    type: "website",
  },
};

const sharedAmenities = [
  { icon: "♨", label: "Hot tub access" },
  { icon: "🔥", label: "Private fire pit" },
  { icon: "🌲", label: "Wooded setting" },
  { icon: "🍽", label: "Outdoor dining" },
  { icon: "🚿", label: "Bathhouse on site" },
  { icon: "📍", label: "5 min from downtown Madison" },
] as const;

export default function StaysPage() {
  return (
    <PageShell
      eyebrow="Stay the night"
      title="Four ways to escape into the woods of Madison"
      description="A private cottage, a luxury glamping tent, and curated campsites — each with transparent starting prices and a booking path that never leaves enchantedmadison.com."
    >
      {/* ── Stay cards ────────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {stays.map((stay) => (
              <PropertyCard key={stay.slug} stay={stay} />
            ))}
          </div>
        </div>
      </section>

      {/* ── What every stay includes ──────────────────────────────────────── */}
      <section className="border-y border-forest/10 bg-ivory">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-12 lg:px-8">
          <SectionHeading
            eyebrow="Every stay"
            title="What you can count on at every accommodation"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sharedAmenities.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-cream px-5 py-4"
              >
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="text-sm font-medium text-charcoal">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opening note ──────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-12 lg:px-8">
          <div className="rounded-[2rem] border border-gold/30 bg-night px-8 py-10 text-ivory">
            <p className="font-accent text-2xl text-gold">Opening June 2026</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold lg:text-4xl">
              Ready to be first in the door?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-ivory/75">
              Join the VIP list for early access to dates, a priority booking window, and
              $25 off your first stay. We&apos;ll reach out before anyone else when
              reservations open.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/vip"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
              >
                Unlock VIP Access
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-night"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
