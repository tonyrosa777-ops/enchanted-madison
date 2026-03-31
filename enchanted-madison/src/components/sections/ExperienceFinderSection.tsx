"use client";

// ExperienceFinderSection — homepage teaser pointing to /find-your-escape
// Full interactive quiz lives on its own page — this is the atmospheric invite

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/site";

const ef = siteData.experienceFinder;

const TEASERS = [
  "What's the occasion?",
  "One night or an evening escape?",
  "Totally private, or full pampering?",
];

export function ExperienceFinderSection() {
  return (
    <section id="find-your-escape" className="relative overflow-hidden">
      <div className="relative h-[480px] sm:h-[540px]">
        <Image
          src="/images/experiences/hot-tub-escape.webp"
          alt="Private hot tub escape at The Enchanted Collective"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,8,6,0.52) 0%, rgba(10,8,6,0.75) 100%)" }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <FadeUp>
            <p
              className="mb-3 text-xs font-semibold"
              style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}
            >
              {ef.section.eyebrow}
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "var(--text-on-dark)",
                lineHeight: 1.15,
              }}
            >
              {ef.section.heading}
            </h2>
            <p
              className="max-w-md mx-auto mb-8 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "rgba(254,252,250,0.65)" }}
            >
              {ef.section.subheading}
            </p>

            {/* Decorative question pills — hint at the quiz */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {TEASERS.map((q, i) => (
                <motion.span
                  key={q}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
                  className="px-4 py-2 rounded-full text-xs"
                  style={{
                    background: "rgba(254,252,250,0.08)",
                    border: "1px solid rgba(254,252,250,0.15)",
                    fontFamily: "var(--font-body)",
                    color: "rgba(254,252,250,0.6)",
                  }}
                >
                  {q}
                </motion.span>
              ))}
            </div>

            <Button variant="secondary" size="lg" href="/find-your-escape">
              {ef.section.startCta}
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
