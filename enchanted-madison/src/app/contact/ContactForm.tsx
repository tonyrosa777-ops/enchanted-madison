"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { siteData } from "@/data/site";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  { value: "general", label: "General Inquiry" },
  { value: "booking", label: "Booking Question" },
  { value: "proposal", label: "Proposal Package" },
  { value: "date-night", label: "Date Night / Hot Tub Escape" },
  { value: "press", label: "Press & Media" },
  { value: "other", label: "Something Else" },
];

const contactDetails = [
  {
    label: "Phone",
    value: siteData.phone,
    href: `tel:${siteData.phone.replace(/[^0-9]/g, "")}`,
  },
  {
    label: "Email",
    value: siteData.email,
    href: `mailto:${siteData.email}`,
  },
  {
    label: "Address",
    value: siteData.address,
    href: "https://maps.google.com/?q=2175+North+K+Road+Madison+Indiana+47250",
  },
];

const directions = "From 421, take old SR 62, then right on K Road. Watch for The Enchanted Collective sign near the driveway.";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setServerError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setServerError(true);
    }
  }

  return (
    <PageShell>
      {/* Page hero */}
      <section
        className="pt-32 pb-16 px-4 text-center"
        style={{ background: "var(--bg-base)" }}
      >
        <FadeUp>
          <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
            Madison, Indiana
          </p>
          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "var(--text-primary)",
            }}
          >
            <ShimmerText delay={1}>Get in Touch</ShimmerText>
          </h1>
          <p
            className="max-w-md mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
          >
            Questions about availability, proposals, or what to expect?
            Angela & Marc personally read every message.
          </p>
        </FadeUp>
      </section>

      {/* Two-column: info + form */}
      <section
        className="py-12 lg:py-16 px-4"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">

          {/* Left: contact details */}
          <FadeUp>
            <div className="flex flex-col gap-8">
              <div>
                <h2
                  className="leading-tight mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "clamp(24px, 3vw, 32px)",
                    color: "var(--text-primary)",
                  }}
                >
                  Contact Information
                </h2>

                <div className="flex flex-col gap-5">
                  {contactDetails.map((item) => (
                    <div key={item.label}>
                      <p
                        className="text-[11px] uppercase mb-1"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.1em" }}
                      >
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="text-sm leading-relaxed transition-opacity hover:opacity-70"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                        target={item.label === "Address" ? "_blank" : undefined}
                        rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions */}
              <div
                className="rounded-xl p-5"
                style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
              >
                <p
                  className="text-[11px] uppercase mb-2"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.1em" }}
                >
                  Directions
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                >
                  {directions}
                </p>
              </div>

              {/* Drive times teaser */}
              <div className="flex flex-col gap-2">
                {siteData.driveTimes.slice(0, 3).map((item) => (
                  <div key={item.from} className="flex items-center justify-between">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                    >
                      {item.from}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                    >
                      {item.minutes} min
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Right: form */}
          <FadeUp delay={0.1}>
            {submitted ? (
              <div
                className="rounded-2xl p-8 text-center flex flex-col items-center gap-5"
                style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "var(--primary)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.5rem", color: "var(--text-primary)" }}
                  >
                    Message Sent
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    Angela & Marc will be in touch soon. In the meantime, explore stays or join the VIP list.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center mt-2">
                  <Button variant="primary" size="sm" href="/stays">Explore Stays</Button>
                  <Button variant="ghost" size="sm" href="/vip">Join VIP List</Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-[11px] uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.1em" }}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="First and last name"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "var(--bg-card)",
                      border: errors.name ? "1px solid #c0392b" : "1px solid var(--primary-muted)",
                      fontFamily: "var(--font-body)",
                      color: "var(--text-primary)",
                    }}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs" style={{ color: "#c0392b", fontFamily: "var(--font-mono)" }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email + Phone — 2-col on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-[11px] uppercase"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.1em" }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                      style={{
                        background: "var(--bg-card)",
                        border: errors.email ? "1px solid #c0392b" : "1px solid var(--primary-muted)",
                        fontFamily: "var(--font-body)",
                        color: "var(--text-primary)",
                      }}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs" style={{ color: "#c0392b", fontFamily: "var(--font-mono)" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-[11px] uppercase"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.1em" }}
                    >
                      Phone <span style={{ color: "var(--text-muted)" }}>(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(000) 000-0000"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--primary-muted)",
                        fontFamily: "var(--font-body)",
                        color: "var(--text-primary)",
                      }}
                      {...register("phone")}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-[11px] uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.1em" }}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none appearance-none"
                    style={{
                      background: "var(--bg-card)",
                      border: errors.subject ? "1px solid #c0392b" : "1px solid var(--primary-muted)",
                      fontFamily: "var(--font-body)",
                      color: "var(--text-primary)",
                    }}
                    defaultValue=""
                    {...register("subject")}
                  >
                    <option value="" disabled>Select a topic…</option>
                    {subjects.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-xs" style={{ color: "#c0392b", fontFamily: "var(--font-mono)" }}>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[11px] uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.1em" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what you have in mind…"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      background: "var(--bg-card)",
                      border: errors.message ? "1px solid #c0392b" : "1px solid var(--primary-muted)",
                      fontFamily: "var(--font-body)",
                      color: "var(--text-primary)",
                    }}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs" style={{ color: "#c0392b", fontFamily: "var(--font-mono)" }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p
                    className="text-sm rounded-xl px-4 py-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#c0392b",
                      background: "rgba(192,57,43,0.08)",
                      border: "1px solid rgba(192,57,43,0.2)",
                    }}
                  >
                    Something went wrong. Please try again or email us directly at{" "}
                    <a href={`mailto:${siteData.email}`} style={{ textDecoration: "underline" }}>
                      {siteData.email}
                    </a>
                    .
                  </p>
                )}

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
