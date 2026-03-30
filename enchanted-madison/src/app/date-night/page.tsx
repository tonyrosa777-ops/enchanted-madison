import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";
import { experienceCollections } from "../../content/experiences";

export const metadata: Metadata = {
  title: "Date Night",
};

export default function DateNightPage() {
  return (
    <PageShell
      eyebrow="Leave the city noise behind"
      title="Date Night Escapes and Day-Use Romance"
      description="This page will own the region’s whitespace around bookable hot tub escapes, girls’ nights, and no-overnight-needed celebration experiences."
    >
      <section className="mx-auto grid w-full max-w-content-lg gap-5 px-5 py-12 md:grid-cols-2 lg:px-8">
        {[
          ...experienceCollections.dateNight.packages,
          ...experienceCollections.dayUse.packages,
        ].map((pkg) => (
          <article
            key={pkg.name}
            className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
          >
            <h2 className="font-heading text-3xl font-semibold text-forest">{pkg.name}</h2>
            <p className="mt-3 text-base font-semibold text-rose">{pkg.priceRange}</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/75">{pkg.summary}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
