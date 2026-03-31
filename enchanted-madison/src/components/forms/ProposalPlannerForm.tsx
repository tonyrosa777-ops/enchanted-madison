"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { FormField } from "./FormField";
import { FormStepIndicator } from "./FormStepIndicator";
import { BrandRadioGroup } from "./BrandRadioGroup";
import { BrandCheckboxGroup } from "./BrandCheckboxGroup";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/site";

// ── Zod schema — covers all 3 steps ──────────────────────────────────────────
const schema = z.object({
  yourName: z.string().min(2, "Your name is required"),
  partnerName: z.string().min(1, "Partner\u2019s name is required"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email("Please enter a valid email"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  backupDate: z.string().optional(),
  preferredTime: z.enum(["morning", "afternoon", "evening", "flexible"], {
    error: "Please select a preferred time",
  }),
  venueLocation: z.enum(["hot-tub-area", "fire-pit", "woodland-path", "open-to-suggestions"], {
    error: "Please choose a venue",
  }),
  whoPresent: z.enum(["just-us", "small-group", "photographer-too"], {
    error: "Please let us know who will be present",
  }),
  packageInterest: z.enum(["enchanted", "signature", "ultimate", "not-sure"], {
    error: "Please select a package",
  }),
  enhancements: z.array(z.string()).default([]),
  bestTimeToContact: z.enum(["morning", "afternoon", "evening"], {
    error: "Please select a contact time",
  }),
  additionalNotes: z.string().optional(),
});

// Use input type so react-hook-form handles optional fields before defaults are applied
type FormData = z.input<typeof schema>;

// Field names per step — used by trigger() for per-step validation
const STEP_FIELDS: Record<number, (keyof FormData)[]> = {
  1: ["yourName", "partnerName", "phone", "email"],
  2: ["preferredDate", "preferredTime", "venueLocation", "whoPresent"],
  3: ["packageInterest", "bestTimeToContact"],
};

const p = siteData.proposalPlanner;

// Shared input style
const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid var(--primary-muted)",
  background: "var(--bg-elevated)",
  fontFamily: "var(--font-body)",
  fontSize: "14px",
  color: "var(--text-primary)",
  outline: "none",
} as React.CSSProperties;

const inputErrorStyle = { ...inputStyle, border: "1px solid #c0392b" };

export function ProposalPlannerForm() {
  const [step, setStep] = useState<1 | 2 | 3 | "success">(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    watch,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(schema) as Resolver<FormData>,
    defaultValues: { enhancements: [] },
  });

  async function goNext() {
    if (typeof step !== "number") return;
    const valid = await trigger(STEP_FIELDS[step]);
    if (!valid) return;
    setCompletedSteps((prev) => new Set([...prev, step]));
    setDirection("forward");
    setStep((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : prev) as 1 | 2 | 3);
  }

  function goBack() {
    setDirection("backward");
    setStep((prev) => (prev === 2 ? 1 : prev === 3 ? 2 : prev) as 1 | 2 | 3);
  }

  async function onSubmit(data: FormData) {
    setServerError(null);
    try {
      const res = await fetch("/api/proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Submission failed");
      }
      setStep("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const slideVariants = {
    enter: (dir: "forward" | "backward") => ({ x: dir === "forward" ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "forward" | "backward") => ({ x: dir === "forward" ? -40 : 40, opacity: 0 }),
  };

  if (step === "success") {
    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-2xl mx-auto rounded-2xl p-8 sm:p-10 text-center"
        style={{ background: "var(--bg-card)", boxShadow: "0 20px 60px rgba(26,42,30,0.12)" }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl"
          style={{ background: "var(--primary)", color: "var(--text-on-dark)" }}
        >
          ✦
        </div>
        <p className="eyebrow mb-2" style={{ color: "var(--accent)" }}>{p.success.eyebrow}</p>
        <h2
          className="text-2xl sm:text-3xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {p.success.heading}
        </h2>
        <p className="mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
          {p.success.body}
        </p>
        <Button variant="primary" href={p.success.cta.href}>{p.success.cta.label}</Button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <FormStepIndicator steps={p.stepLabels} currentStep={step} completedSteps={completedSteps} />

      {/* Form card */}
      <div
        className="rounded-2xl p-6 sm:p-8"
        style={{ background: "var(--bg-card)", boxShadow: "0 20px 60px rgba(26,42,30,0.10)" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {/* ── Step 1 ──────────────────────────────── */}
            {step === 1 && (
              <div className="flex flex-col gap-5">
                <div>
                  <p className="eyebrow mb-1" style={{ color: "var(--accent)" }}>{p.step1.eyebrow}</p>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{p.step1.heading}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Your Name" required error={errors.yourName?.message}>
                    <input
                      {...register("yourName")}
                      placeholder="First and last name"
                      style={errors.yourName ? inputErrorStyle : inputStyle}
                    />
                  </FormField>
                  <FormField label="Partner's Name" required error={errors.partnerName?.message}>
                    <input
                      {...register("partnerName")}
                      placeholder="Their first name is fine"
                      style={errors.partnerName ? inputErrorStyle : inputStyle}
                    />
                  </FormField>
                </div>
                <FormField label="Phone" required error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="(812) 555-0100"
                    style={errors.phone ? inputErrorStyle : inputStyle}
                  />
                </FormField>
                <FormField label="Email Address" required error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    style={errors.email ? inputErrorStyle : inputStyle}
                  />
                </FormField>
              </div>
            )}

            {/* ── Step 2 ──────────────────────────────── */}
            {step === 2 && (
              <div className="flex flex-col gap-5">
                <div>
                  <p className="eyebrow mb-1" style={{ color: "var(--accent)" }}>{p.step2.eyebrow}</p>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{p.step2.heading}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Preferred Date" required error={errors.preferredDate?.message}>
                    <input
                      {...register("preferredDate")}
                      type="date"
                      style={errors.preferredDate ? inputErrorStyle : inputStyle}
                    />
                  </FormField>
                  <FormField label="Backup Date" hint="In case your first choice isn't available" error={errors.backupDate?.message}>
                    <input
                      {...register("backupDate")}
                      type="date"
                      style={inputStyle}
                    />
                  </FormField>
                </div>
                <FormField label="Preferred Time" required error={errors.preferredTime?.message}>
                  <BrandRadioGroup
                    name="preferredTime"
                    options={p.preferredTimeOptions}
                    register={register}
                    watch={watch}
                    error={errors.preferredTime?.message}
                  />
                </FormField>
                <FormField label="Venue Preference" required error={errors.venueLocation?.message}>
                  <BrandRadioGroup
                    name="venueLocation"
                    options={p.venueLocationOptions}
                    register={register}
                    watch={watch}
                    error={errors.venueLocation?.message}
                  />
                </FormField>
                <FormField label="Who Will Be Present" required error={errors.whoPresent?.message}>
                  <BrandRadioGroup
                    name="whoPresent"
                    options={p.whoPresentOptions}
                    register={register}
                    watch={watch}
                    cols={1}
                    error={errors.whoPresent?.message}
                  />
                </FormField>
              </div>
            )}

            {/* ── Step 3 ──────────────────────────────── */}
            {step === 3 && (
              <div className="flex flex-col gap-5">
                <div>
                  <p className="eyebrow mb-1" style={{ color: "var(--accent)" }}>{p.step3.eyebrow}</p>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>{p.step3.heading}</h3>
                </div>
                <FormField label="Which Package Interests You?" required error={errors.packageInterest?.message}>
                  <BrandRadioGroup
                    name="packageInterest"
                    options={p.packageOptions}
                    register={register}
                    watch={watch}
                    cols={1}
                    error={errors.packageInterest?.message}
                  />
                </FormField>
                <FormField label="Enhancements (select all that apply)">
                  <BrandCheckboxGroup
                    name="enhancements"
                    options={p.enhancementOptions}
                    register={register}
                    watch={watch}
                  />
                </FormField>
                <FormField label="Best Time to Reach You" required error={errors.bestTimeToContact?.message}>
                  <BrandRadioGroup
                    name="bestTimeToContact"
                    options={p.bestTimeOptions}
                    register={register}
                    watch={watch}
                    error={errors.bestTimeToContact?.message}
                  />
                </FormField>
                <FormField label="Anything else we should know?">
                  <textarea
                    {...register("additionalNotes")}
                    rows={4}
                    placeholder="Vision, special requests, questions..."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </FormField>
                {serverError && (
                  <p className="text-sm font-medium" style={{ color: "#c0392b" }}>{serverError}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className={`flex gap-3 mt-6 ${step === 1 ? "justify-end" : "justify-between"}`}>
          {step !== 1 && (
            <Button variant="ghost" onClick={goBack} type="button">
              {p.backLabel}
            </Button>
          )}
          {step < 3 ? (
            <Button variant="primary" onClick={goNext} type="button">
              Continue &rarr;
            </Button>
          ) : (
            <Button
              variant="primary"
              type="button"
              onClick={() => void handleSubmit(onSubmit)()}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending\u2026" : p.submitLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
