import type { Metadata } from "next";

import { PageShell } from "../../components/layout/PageShell";

export const metadata: Metadata = {
  title: "FAQ",
};

const questions = [
  "How private are the hot tubs?",
  "What is included with each stay?",
  "Can we book a proposal or date night without staying overnight?",
  "What is glamping like here if it rains?",
];

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="Answer the friction early"
      title="Frequently Asked Questions"
      description="This route is designed to reduce glamping uncertainty, strengthen SEO, and answer the practical questions that the current site leaves buried or invisible."
    >
      <section className="mx-auto flex w-full max-w-content-md flex-col gap-4 px-5 py-12 lg:px-8">
        {questions.map((question) => (
          <article
            key={question}
            className="rounded-[1.75rem] border border-forest/10 bg-ivory p-6 shadow-warm"
          >
            <h2 className="font-heading text-2xl font-semibold text-forest">{question}</h2>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
