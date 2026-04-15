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
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number is required"),
});

type FormData = z.infer<typeof schema>;

// Single source of truth lives in site.ts. First-access is an implicit 4th perk
// already communicated in the subheadline ("VIPs always get first access").
const benefits = siteData.vip.perks.map((label) => ({ icon: "✨", label }));

export function VipForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      // Still show success — don't block the guest
      setSubmitted(true);
    }
  }

  const inputStyle = (hasError: boolean) => ({
    background: "var(--bg-card)" as const,
    border: hasError ? "1px solid #C4917B" : "1px solid var(--primary-muted)",
    color: "var(--text-primary)" as const,
    fontFamily: "var(--font-body)" as const,
  });

  const labelStyle = {
    fontFamily: "var(--font-mono)" as const,
    color: "var(--text-secondary)" as const,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  };

  return (
    <PageShell>
      <section
        className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="w-full max-w-lg">
          {!submitted ? (
            <FadeUp>
              <div className="text-center mb-10">
                <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>Opening June 2026</p>
                <h1
                  className="leading-tight mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(36px, 5vw, 56px)", color: "var(--text-primary)" }}
                >
                  <ShimmerText delay={1}>{siteData.vip.headline}</ShimmerText>
                </h1>
                <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                  {siteData.vip.subheadline}
                </p>
                <p className="mt-3 text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.08em" }}>
                  {siteData.vip.ctaSubtext}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((b) => (
                  <div key={b.label} className="rounded-xl p-4 flex gap-3 items-start" style={{ background: "var(--bg-card)" }}>
                    <span className="text-xl">{b.icon}</span>
                    <div>
                      <p className="text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}>{b.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs mb-1.5" style={labelStyle}>Your Name</label>
                  <input
                    id="name" type="text" placeholder="First and last name"
                    {...register("name")}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={inputStyle(!!errors.name)}
                  />
                  {errors.name && <p className="text-xs mt-1" style={{ color: "var(--accent-rose)", fontFamily: "var(--font-body)" }}>{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs mb-1.5" style={labelStyle}>Email Address</label>
                  <input
                    id="email" type="email" placeholder="your@email.com"
                    {...register("email")}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={inputStyle(!!errors.email)}
                  />
                  {errors.email && <p className="text-xs mt-1" style={{ color: "var(--accent-rose)", fontFamily: "var(--font-body)" }}>{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs mb-1.5" style={labelStyle}>Phone</label>
                  <input
                    id="phone" type="tel" placeholder="(502) 555-0100"
                    {...register("phone")}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                    style={inputStyle(!!errors.phone)}
                  />
                  {errors.phone && <p className="text-xs mt-1" style={{ color: "var(--accent-rose)", fontFamily: "var(--font-body)" }}>{errors.phone.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full mt-2">
                  {isSubmitting ? "Joining..." : siteData.vip.cta}
                </Button>

                <p className="text-center text-xs" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </FadeUp>
          ) : (
            <FadeUp>
              <div className="text-center py-12">
                <p className="text-5xl mb-6">🌿</p>
                <h2 className="text-4xl mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--text-primary)" }}>
                  You are on the list.
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                  We will be in touch with first-access booking dates, your $25 welcome discount, and
                  the Perfect Madison Weekend guide — before we open to the public.
                </p>
                <Button variant="ghost" href="/stays">Explore Our Stays</Button>
              </div>
            </FadeUp>
          )}
        </div>
      </section>
    </PageShell>
  );
}
