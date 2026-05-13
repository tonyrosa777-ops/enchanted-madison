"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ScaleIn } from "@/components/animations/ScaleIn";
import { Fireflies } from "@/components/animations/Fireflies";
import { GodRays } from "@/components/animations/GodRays";
import { Embers } from "@/components/animations/Embers";
import { ShimmerText } from "@/components/animations/ShimmerText";
import { siteData } from "@/data/site";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number is required"),
});

type FormData = z.infer<typeof schema>;

const benefits = siteData.vip.perks;

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
      setSubmitted(true);
    }
  }

  // Form input — dark-luxe treatment for the VIP page
  const inputClass =
    "w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200 focus:border-[var(--accent)] focus:bg-[rgba(254,252,250,0.10)]";
  const inputStyle = (hasError: boolean) => ({
    background: "rgba(254,252,250,0.06)" as const,
    border: hasError
      ? "1px solid var(--accent-rose)"
      : "1px solid rgba(254,252,250,0.18)",
    color: "var(--text-on-dark)" as const,
    fontFamily: "var(--font-body)" as const,
    backdropFilter: "blur(4px)" as const,
    WebkitBackdropFilter: "blur(4px)" as const,
  });

  const labelStyle = {
    fontFamily: "var(--font-mono)" as const,
    color: "rgba(254,252,250,0.65)" as const,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
  };

  return (
    <PageShell>
      <section
        className="relative min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-20 px-4 overflow-hidden"
        style={{ background: "var(--bg-dark)" }}
      >
        {/* Atmospheric backdrop image */}
        <Image
          src="/images/experiences/hot-tub-escape.webp"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover pointer-events-none"
          style={{ opacity: 0.22 }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,150,90,0.10) 0%, transparent 60%), linear-gradient(to bottom, rgba(26,42,30,0.55) 0%, rgba(26,42,30,0.85) 100%)",
          }}
          aria-hidden="true"
        />
        <Fireflies count={28} />
        <GodRays opacity={0.5} />
        <Embers count={18} />

        <div className="relative z-10 w-full max-w-2xl mx-auto">
          {!submitted ? (
            <>
              {/* Hero copy */}
              <FadeUp>
                <div className="text-center mb-10 lg:mb-12">
                  {/* Accent bracket */}
                  <div
                    className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full"
                    style={{
                      background: "rgba(184,150,90,0.12)",
                      border: "1px solid rgba(184,150,90,0.32)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
                    />
                    <p
                      className="text-[11px]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent)",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      Opening June 2026 · VIP Access
                    </p>
                  </div>

                  <h1
                    className="leading-[1.05] mb-5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "clamp(40px, 6vw, 72px)",
                      color: "var(--text-on-dark)",
                    }}
                  >
                    <ShimmerText delay={1}>{siteData.vip.headline}</ShimmerText>
                  </h1>

                  {/* Gold underline divider */}
                  <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
                    <span
                      className="block h-px"
                      style={{ width: 48, background: "linear-gradient(to right, transparent, var(--accent))" }}
                    />
                    <span className="text-lg" style={{ color: "var(--accent)" }}>✦</span>
                    <span
                      className="block h-px"
                      style={{ width: 48, background: "linear-gradient(to left, transparent, var(--accent))" }}
                    />
                  </div>

                  <p
                    className="text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-4"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      color: "rgba(254,252,250,0.78)",
                    }}
                  >
                    {siteData.vip.subheadline}
                  </p>

                  <p
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {siteData.vip.counter}
                  </p>
                </div>
              </FadeUp>

              {/* Perks — luxe vertical stack, dark cards on darker bg */}
              <ScaleIn delay={0.2}>
                <ul className="flex flex-col gap-3 mb-10">
                  {benefits.map((perk, i) => (
                    <li
                      key={perk}
                      className="rounded-xl px-5 py-4 flex gap-4 items-center transition-all duration-300 hover:translate-x-1"
                      style={{
                        background: "rgba(254,252,250,0.05)",
                        border: "1px solid rgba(184,150,90,0.18)",
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                      }}
                    >
                      <span
                        className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 text-base"
                        style={{
                          background: "rgba(184,150,90,0.18)",
                          color: "var(--accent)",
                          border: "1px solid rgba(184,150,90,0.4)",
                          boxShadow: "0 0 12px rgba(184,150,90,0.25)",
                        }}
                      >
                        ✦
                      </span>
                      <p
                        className="text-sm lg:text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", color: "var(--text-on-dark)" }}
                      >
                        {perk}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScaleIn>

              {/* Form — glass card on dark */}
              <ScaleIn delay={0.3}>
                <div
                  className="rounded-2xl p-6 lg:p-8"
                  style={{
                    background: "rgba(254,252,250,0.04)",
                    border: "1px solid rgba(184,150,90,0.22)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                  }}
                >
                  <p
                    className="text-center text-xs mb-6"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {siteData.vip.ctaSubtext}
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-[11px] mb-1.5" style={labelStyle}>
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="First and last name"
                        {...register("name")}
                        className={inputClass}
                        style={inputStyle(!!errors.name)}
                      />
                      {errors.name && (
                        <p
                          className="text-xs mt-1"
                          style={{ color: "var(--accent-rose)", fontFamily: "var(--font-body)" }}
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] mb-1.5" style={labelStyle}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                        className={inputClass}
                        style={inputStyle(!!errors.email)}
                      />
                      {errors.email && (
                        <p
                          className="text-xs mt-1"
                          style={{ color: "var(--accent-rose)", fontFamily: "var(--font-body)" }}
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[11px] mb-1.5" style={labelStyle}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(502) 555-0100"
                        {...register("phone")}
                        className={inputClass}
                        style={inputStyle(!!errors.phone)}
                      />
                      {errors.phone && (
                        <p
                          className="text-xs mt-1"
                          style={{ color: "var(--accent-rose)", fontFamily: "var(--font-body)" }}
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full mt-3"
                    >
                      {isSubmitting ? "Joining..." : siteData.vip.cta}
                    </Button>

                    <p
                      className="text-center text-[11px] mt-2"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "rgba(254,252,250,0.4)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              </ScaleIn>
            </>
          ) : (
            <FadeUp>
              <div className="text-center py-12">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                  style={{
                    background: "rgba(184,150,90,0.15)",
                    border: "1.5px solid var(--accent)",
                    boxShadow: "0 0 24px rgba(184,150,90,0.4)",
                  }}
                >
                  <span className="text-3xl" style={{ color: "var(--accent)" }}>✦</span>
                </div>
                <h2
                  className="text-4xl lg:text-5xl mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    color: "var(--text-on-dark)",
                  }}
                >
                  <ShimmerText delay={0.3}>You&apos;re on the list.</ShimmerText>
                </h2>
                <p
                  className="text-base lg:text-lg leading-relaxed mb-8 max-w-md mx-auto"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.78)" }}
                >
                  Watch your inbox for first-access booking dates, your private offers, and
                  insider details before we open to the public.
                </p>
                <Button variant="secondary" size="lg" href="/stays">
                  Explore Our Stays
                </Button>
              </div>
            </FadeUp>
          )}
        </div>
      </section>
    </PageShell>
  );
}
