import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";
import { experienceCollections } from "../../content/experiences";

export const metadata: Metadata = {
  title: "Proposals",
};

export default function ProposalsPage() {
  return (
    <PageShell
      eyebrow="Say yes"
      title="Proposal Packages Built Around the Moment"
      description="This route will become the conversion surface for one of Enchanted Madison’s biggest market gaps: romantic, outdoor proposal planning in southern Indiana."
    >
      <section className="mx-auto grid w-full max-w-content-lg gap-5 px-5 py-12 md:grid-cols-2 lg:px-8">
        {experienceCollections.proposals.packages.map((pkg) => (
          <article
            key={pkg.name}
            className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
          >
            <h2 className="font-heading text-3xl font-semibold text-forest">{pkg.name}</h2>
            <p className="mt-3 text-base font-semibold text-rose">{pkg.priceRange}</p>
            <p className="mt-4 text-sm leading-7 text-charcoal/75">{pkg.summary}</p>
          </article>
        ))}
        <div className="rounded-[1.75rem] bg-night p-6 text-ivory shadow-warm md:col-span-2">
          <h2 className="font-heading text-3xl font-semibold">Plan Your Proposal</h2>
          <p className="mt-4 max-w-content-md text-sm leading-7 text-ivory/75">
            Final build will add proof, gallery, FAQ, and a direct inquiry/booking
            decision path without the current Canva-era readability issues.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
