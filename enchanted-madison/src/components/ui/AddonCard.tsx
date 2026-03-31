"use client";

// AddonCard — client wrapper for hover lift effect on packages page
import { useState } from "react";

export function AddonCard({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="group rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--primary-muted)",
        boxShadow: hovered ? "0 16px 48px rgba(74,58,46,0.16)" : "0 4px 24px rgba(74,58,46,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </article>
  );
}
