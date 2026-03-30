import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../../components/layout/PageShell";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Enchanted Collective — a private glamping and romantic escape property nestled in the woods of Madison, Indiana. Opening June 2026.",
  openGraph: {
    title: "About | The Enchanted Collective",
    description:
      "A private glamping and romantic escape property nestled in the woods of Madison, Indiana. Opening June 2026.",
    url: "/about",
    type: "website",
  },
};

const propertyHighlights = [
  "Private wooded acreage — no shared common areas with strangers",
  "Minutes from Clifty Falls State Park and historic downtown",
  "45 minutes from Louisville · 90 minutes from Indianapolis",
  "Luxury glamping tents, a private cottage, and curated campsites",
  "Private hot tubs, fire pits, and spa robes included",
  "Proposal and date night experiences available year-round",
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Our story"
      title="A private escape built for the moments that matter."
      description="The Enchanted Collective is a romantic retreat tucked into the woods of Madison, Indiana — designed for couples who want something more intentional than a hotel."
    >
      {/* ── Property overview ────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <p className="font-accent text-2xl text-gold">The property</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-forest lg:text-4xl">
                Surrounded by woods. Minutes from everything.
              </h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/75">
                We built The Enchanted Collective because we couldn&apos;t find what we were
                looking for — a place that felt genuinely private, genuinely luxurious, and
                genuinely intentional. Not a hotel. Not a crowded resort. Something in between.
              </p>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">
                The property sits on private wooded acreage in Madison, Indiana — one of the
                most underrated river towns in the Midwest. Clifty Falls State Park is minutes
                away. The Ohio River and historic downtown are just around the corner. And once
                you arrive, the outside world feels very far away.
              </p>
              <p className="mt-3 text-sm leading-7 text-charcoal/75">
                We open in June 2026. Until then, VIP members can lock in early access and
                priority booking windows.
              </p>
            </div>

            {/* Highlights list */}
            <ul className="grid gap-3">
              {propertyHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-forest/10 bg-ivory px-5 py-4"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-6 text-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Host story placeholder ────────────────────────────────────────── */}
      <section className="border-t border-forest/10 bg-ivory">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] border border-forest/10 bg-cream px-8 py-10">
            <p className="font-accent text-2xl text-gold">Meet your hosts</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-forest lg:text-4xl">
              This section is coming soon.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-charcoal/70">
              Host photos, bios, and the story behind why we built this place are on the way.
              In the meantime, feel free to reach out — we&apos;re real people who answer our messages.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
              >
                Say Hello
              </Link>
              <Link
                href="/vip"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-forest transition hover:bg-gold hover:text-night"
              >
                Join VIP List
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
