import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Let’s shape the stay"
      title="Start Planning Your Escape"
      description="This route replaces the current policy-dump contact experience with a dedicated intake and trust-building destination for stays, proposals, and special requests."
    >
      <section className="mx-auto grid w-full max-w-content-lg gap-5 px-5 py-12 md:grid-cols-2 lg:px-8">
        <article className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm">
          <h2 className="font-heading text-3xl font-semibold text-forest">Reach out directly</h2>
          <p className="mt-4 text-sm leading-7 text-charcoal/75">{siteContent.phone}</p>
          <p className="mt-2 text-sm leading-7 text-charcoal/75">{siteContent.email}</p>
          <p className="mt-2 text-sm leading-7 text-charcoal/75">{siteContent.location}</p>
        </article>
        <article className="rounded-[1.75rem] bg-night p-6 text-ivory shadow-warm">
          <h2 className="font-heading text-3xl font-semibold">What this page becomes next</h2>
          <p className="mt-4 text-sm leading-7 text-ivory/75">
            A branded form flow for proposal inquiries, group questions, and
            direct-booking confidence rather than a buried off-brand utility page.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
