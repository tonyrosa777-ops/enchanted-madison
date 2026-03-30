import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../../components/layout/PageShell";
import { reviews } from "../../content/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Guest reviews for The Enchanted Collective in Madison, Indiana. See what couples, honeymooners, and anniversary guests say about their stays.",
  openGraph: {
    title: "Guest Reviews | The Enchanted Collective",
    description:
      "See what couples, honeymooners, and anniversary guests say about their stays at The Enchanted Collective.",
    url: "/reviews",
    type: "website",
  },
};

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 fill-gold"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <PageShell
      eyebrow="What guests say"
      title="Reviews from couples, honeymooners, and anniversary stays"
      description="Every review below is from a real guest. We're just getting started — these are the first voices from a property that opened in 2026."
    >
      {/* ── Review cards ──────────────────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.guest}
                className="flex flex-col rounded-[2rem] bg-night p-8 text-ivory"
              >
                <StarRating />
                <blockquote className="mt-5 flex-1 font-heading text-xl font-semibold leading-snug text-ivory lg:text-2xl">
                  &ldquo;{review.body}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-ivory/10 pt-5">
                  <p className="text-sm font-semibold text-gold">{review.guest}</p>
                  <p className="mt-0.5 text-xs text-ivory/50">{review.location}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Google review CTA ─────────────────────────────────────────────── */}
      <section className="border-t border-forest/10 bg-ivory">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-forest lg:text-3xl">
                Stayed with us? Share your experience.
              </h2>
              <p className="mt-2 text-sm leading-6 text-charcoal/75">
                Your review helps other couples find a place they&apos;ll love. Google reviews
                are the most helpful.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              {/* Google review link — URL to be added once Google Business Profile is live */}
              <span className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-forest opacity-60">
                Google Review (coming soon)
              </span>
              <Link
                href="/contact"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
              >
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
