import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";
import { ContactForm } from "../../components/forms/ContactForm";
import { contactContent } from "../../content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to The Enchanted Collective to plan your stay, proposal, date night, or special experience in Madison, Indiana.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow={contactContent.eyebrow}
      title={contactContent.headline}
      description={contactContent.description}
    >
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-[80rem] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

            {/* ── Contact form ──────────────────────────────────────────── */}
            <div>
              <ContactForm />
            </div>

            {/* ── Contact info sidebar ──────────────────────────────────── */}
            <aside className="space-y-6">
              {/* Direct contact */}
              <div className="rounded-[2rem] border border-forest/10 bg-ivory p-7 shadow-warm">
                <h2 className="font-heading text-2xl font-semibold text-forest">
                  Reach us directly
                </h2>
                <div className="mt-5 space-y-3 text-sm text-charcoal/80">
                  {contactContent.phone.map((num) => (
                    <p key={num}>
                      <a
                        href={`tel:${num.replace(/-/g, "")}`}
                        className="font-medium text-forest transition hover:text-rose"
                      >
                        {num}
                      </a>
                    </p>
                  ))}
                  <p>
                    <a
                      href={`mailto:${contactContent.email}`}
                      className="font-medium text-forest transition hover:text-rose"
                    >
                      {contactContent.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Address + directions */}
              <div className="rounded-[2rem] border border-forest/10 bg-ivory p-7 shadow-warm">
                <h2 className="font-heading text-2xl font-semibold text-forest">
                  Find us
                </h2>
                <address className="mt-4 not-italic text-sm leading-7 text-charcoal/80">
                  {contactContent.address.full}
                </address>
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone">
                    Directions
                  </p>
                  <p className="text-sm leading-6 text-charcoal/75">
                    {contactContent.directions.brief}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {contactContent.directions.landmarks.map((lm) => (
                      <li key={lm} className="flex items-start gap-2 text-xs text-charcoal/60">
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {lm}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs leading-5 text-stone">
                    {contactContent.directions.whatToLookFor}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
