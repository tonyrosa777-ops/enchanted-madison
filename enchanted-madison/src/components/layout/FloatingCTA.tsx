// FloatingCTA — mobile-only floating "Check Availability" pill
// Appears bottom-right after the user scrolls past the hero.
// Hidden on desktop (the SiteHeader CTA is already always-visible there).
// Source: Angela's revisions doc (2026-05-13) — sticky Check Availability button.

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { siteData } from "@/data/site";

const VISIBLE_AFTER_SCROLL_PX = 400;

// Routes where the floating CTA would compete with an in-page booking widget.
const HIDDEN_ROUTES = ["/stays/", "/proposals", "/date-night"];

export function FloatingCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const hiddenForRoute = HIDDEN_ROUTES.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (hiddenForRoute) {
      setShow(false);
      return;
    }
    const onScroll = () => setShow(window.scrollY > VISIBLE_AFTER_SCROLL_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hiddenForRoute, pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="floating-cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-40 lg:hidden"
        >
          <Link
            href={siteData.nav.cta.href}
            aria-label={`${siteData.nav.cta.label} — opens stays page`}
            className="inline-flex items-center justify-center shadow-lg"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              color: "var(--text-on-dark)",
              padding: "12px 20px",
              borderRadius: "999px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            {siteData.nav.cta.label}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
