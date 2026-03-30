import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../../components/layout/PageShell";
import { faqs } from "../../content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, check-in, hot tub policies, cancellations, and planning your stay at The Enchanted Collective in Madison, Indiana.",
  openGraph: {
    title: "FAQ | The Enchanted Collective",
    description:
      "Answers to common questions about booking, check-in, hot tub policies, cancellations, and planning your stay.",
    url: "/faq",
    type: "website",
  },
};

const categoryLabels: Record<string, string> = {
  booking: "Booking & Payment",
  checkin: "Check-In & Check-Out",
  amenities: "Amenities",
  policies: "Property Policies",
  experiences: "Experiences & Proposals",
};

const categoryOrder = ["booking", "checkin", "amenities", "policies", "experiences"] as const;

export default function FaqPage() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: faqs.filter((f) => f.category === cat),
  }));

  return (
    <PageShell
      eyebrow="Questions"
      title="Everything you need to know before you book"
      description="If something isn't covered here, reach out and we'll answer within 24 hours."
    >
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[56rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="space-y-14">
            {grouped.map(({ category, label, items }) =>
              items.length === 0 ? null : (
                <div key={category}>
                  <h2 className="mb-6 font-heading text-2xl font-semibold text-forest lg:text-3xl">
                    {label}
                  </h2>
                  <div className="space-y-3">
                    {items.map((faq) => (
                      <details
                        key={faq.slug}
                        className="group rounded-2xl border border-forest/10 bg-ivory open:border-gold/40"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-sm font-semibold text-charcoal marker:hidden hover:text-forest">
                          <span>{faq.question}</span>
                          <span
                            className="mt-0.5 shrink-0 text-xl leading-none text-gold transition group-open:rotate-45"
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </summary>
                        <div className="border-t border-forest/10 px-6 pb-6 pt-4">
                          <p className="text-sm leading-7 text-charcoal/75">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-16 rounded-[2rem] border border-gold/30 bg-night px-8 py-10 text-ivory">
            <p className="font-accent text-2xl text-gold">Still have questions?</p>
            <h3 className="mt-2 font-heading text-2xl font-semibold">We&apos;re easy to reach.</h3>
            <p className="mt-3 text-sm leading-7 text-ivory/75">
              Send us a message and we&apos;ll respond within 24 hours. Planning a proposal?
              Give us as much lead time as you can.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-forest"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
