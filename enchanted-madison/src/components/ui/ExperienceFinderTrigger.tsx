// ExperienceFinderTrigger — lightweight strip linking to /find-your-escape quiz page
// Server component — no interactivity needed

import Link from "next/link";
import { siteData } from "@/data/site";

interface ExperienceFinderTriggerProps {
  triggerText?: string;
  className?: string;
}

export function ExperienceFinderTrigger({ triggerText, className = "" }: ExperienceFinderTriggerProps) {
  const text = triggerText ?? siteData.experienceFinder.triggerCopy.default;
  const cta = siteData.experienceFinder.triggerCta;

  return (
    <div
      className={`py-4 px-4 ${className}`}
      style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--primary-muted)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
        >
          {text}
        </p>
        <Link
          href="/find-your-escape"
          className="text-sm font-bold transition-opacity hover:opacity-70 flex-shrink-0"
          style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--primary)" }}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
