"use client";

import { useState } from "react";

import { contactContent } from "../../content/contact";

type FormState = "idle" | "submitting" | "success" | "error";

/**
 * ContactForm — client component for the /contact page form.
 *
 * Submission is stubbed (console.log) until the email provider is confirmed.
 * Replace the handleSubmit body with the real API call at that point.
 * Candidates: Resend, Formspree, or a Next.js route handler.
 *
 * Design authorization:
 *   - design-contract.md §5 inputs: ivory bg, stone border, rose focus ring, 3.25rem min-height
 *   - design-contract.md §7 Principle 3: no "submit inquiry" language
 */
export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: replace with real email provider call
    console.log("Contact form submission:", data);
    await new Promise((r) => setTimeout(r, 600)); // simulate network
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-[2rem] border border-gold/30 bg-night px-8 py-10 text-ivory">
        <p className="font-accent text-2xl text-gold">We got it.</p>
        <h3 className="font-heading text-3xl font-semibold">
          We&apos;ll be in touch soon.
        </h3>
        <p className="text-base leading-7 text-ivory/75">
          Thank you for reaching out. We typically respond within 24 hours.
          If you&apos;re planning a proposal, give us as much lead time as you can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
      {/* Name row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-sm font-semibold text-charcoal">
            First name <span className="text-rose" aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className="min-h-[3.25rem] rounded-full border border-stone/50 bg-ivory px-5 py-3 text-sm text-charcoal placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-rose/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-sm font-semibold text-charcoal">
            Last name <span className="text-rose" aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className="min-h-[3.25rem] rounded-full border border-stone/50 bg-ivory px-5 py-3 text-sm text-charcoal placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-rose/20"
          />
        </div>
      </div>

      {/* Email + phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-charcoal">
            Email address <span className="text-rose" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="min-h-[3.25rem] rounded-full border border-stone/50 bg-ivory px-5 py-3 text-sm text-charcoal placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-rose/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-charcoal">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="min-h-[3.25rem] rounded-full border border-stone/50 bg-ivory px-5 py-3 text-sm text-charcoal placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-rose/20"
          />
        </div>
      </div>

      {/* Celebration type */}
      <div className="flex flex-col gap-2">
        <label htmlFor="celebrationType" className="text-sm font-semibold text-charcoal">
          What are you celebrating?
        </label>
        <select
          id="celebrationType"
          name="celebrationType"
          className="min-h-[3.25rem] rounded-full border border-stone/50 bg-ivory px-5 py-3 text-sm text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-rose/20"
        >
          <option value="">Select one (optional)</option>
          {contactContent.formFields
            .find((f) => f.name === "celebrationType")
            ?.options?.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-charcoal">
          How can we help? <span className="text-rose" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you have in mind — dates, what you're celebrating, any questions."
          className="rounded-2xl border border-stone/50 bg-ivory px-5 py-4 text-sm text-charcoal placeholder:text-stone/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-rose/20"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-rose px-8 py-3 text-sm font-semibold text-ivory transition hover:bg-forest disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
