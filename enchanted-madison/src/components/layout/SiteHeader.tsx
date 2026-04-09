// SiteHeader — design-system.md §5 (Navigation)
// Default: transparent bg, --text-on-dark (sits over hero)
// Scrolled: --bg-card/95 backdrop-blur, --text-primary, border-b
// Desktop: primary links always visible + "More" dropdown for secondary links
// Mobile: full-screen overlay shows all links

"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ShimmerText } from "@/components/animations/ShimmerText";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const [scrolled, setScrolled] = useState(!isHomepage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkStyle = {
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    fontSize: "13px",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: scrolled ? "var(--text-primary)" : "var(--text-on-dark)",
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled ? "border-b shadow-sm" : "border-b border-transparent"
        )}
        style={
          scrolled
            ? {
                background: "color-mix(in srgb, var(--bg-card) 95%, transparent)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderBottomColor: "var(--primary-muted)",
              }
            : { background: "transparent" }
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
            onClick={closeMenu}
          >
            <span
              className="text-xl tracking-wide"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                color: scrolled ? "var(--primary)" : "var(--text-on-dark)",
              }}
            >
              <ShimmerText delay={4} interval={12}>The Enchanted Collective</ShimmerText>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Primary links — always visible */}
            {siteData.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-opacity duration-200 hover:opacity-70"
                style={linkStyle}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1 transition-opacity duration-200 hover:opacity-70"
                style={linkStyle}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                {siteData.nav.dropdown.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="transition-transform duration-200"
                  style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-44 rounded-xl overflow-hidden shadow-xl"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--primary-muted)",
                      top: "100%",
                    }}
                  >
                    {siteData.nav.dropdown.items.map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 transition-colors duration-150 hover:opacity-70"
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontWeight: 500,
                          fontSize: "12px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--text-primary)",
                          borderBottom: i < siteData.nav.dropdown.items.length - 1
                            ? "1px solid var(--primary-muted)"
                            : "none",
                        }}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={scrolled ? "primary" : "ghost-light"}
              size="sm"
              href={siteData.nav.cta.href}
            >
              {siteData.nav.cta.label}
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              className="flex flex-col gap-1.5 p-2 -mr-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn("block w-6 h-0.5 transition-all duration-300 origin-center", menuOpen ? "rotate-45 translate-y-2" : "")}
                style={{ background: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
              />
              <span
                className={cn("block w-6 h-0.5 transition-all duration-300", menuOpen ? "opacity-0" : "")}
                style={{ background: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
              />
              <span
                className={cn("block w-6 h-0.5 transition-all duration-300 origin-center", menuOpen ? "-rotate-45 -translate-y-2" : "")}
                style={{ background: scrolled ? "var(--text-primary)" : "var(--text-on-dark)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — all links (primary + dropdown items) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-20 pb-10 px-8 lg:hidden"
            style={{ background: "var(--bg-base)" }}
          >
            <nav className="flex flex-col gap-5 mt-4">
              {/* Primary links */}
              {siteData.nav.links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="block transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "2rem",
                      color: "var(--text-primary)",
                    }}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="w-12 h-px"
                style={{ background: "var(--primary-muted)" }}
              />

              {/* Secondary links (dropdown items) — smaller type */}
              {siteData.nav.dropdown.items.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + 0.05 * i, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="block transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                      fontSize: "1rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                    }}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <Button
                variant="primary"
                size="lg"
                href={siteData.nav.cta.href}
                className="w-full"
                onClick={closeMenu}
              >
                {siteData.nav.cta.label}
              </Button>

              <div className="mt-6 flex flex-col gap-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                <p style={{ fontFamily: "var(--font-body)" }}>{siteData.phone}</p>
                <p style={{ fontFamily: "var(--font-body)" }}>{siteData.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
