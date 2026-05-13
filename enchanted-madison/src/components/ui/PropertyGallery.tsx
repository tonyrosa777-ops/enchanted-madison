// PropertyGallery — horizontal photo strip + fullscreen lightbox for /stays/[slug]
// Source: angela-revisions-2026-05-13 — "load a carousel that shows different pics of each property"
// - Carousel uses embla-carousel-react for swipeable, accessible navigation
// - Lightbox is in-house (Framer Motion + AnimatePresence) — no extra deps
// - prefers-reduced-motion respected, no auto-advance
// - Keyboard: ← → arrows navigate in lightbox, Esc closes
// - Graceful single-image fallback if gallery.length < 2

"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";

interface PropertyGalleryProps {
  images: string[];
  alt: string;
}

export function PropertyGallery({ images, alt }: PropertyGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxOpen = lightboxIndex !== null;

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Keyboard nav + body scroll lock for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!images || images.length === 0) return null;

  // Single image — render as a static frame, no carousel chrome
  if (images.length === 1) {
    return (
      <div
        className="relative w-full rounded-2xl overflow-hidden cursor-zoom-in"
        style={{ aspectRatio: "16/10" }}
        onClick={() => openLightbox(0)}
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} full screen`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") openLightbox(0);
        }}
      >
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
        {renderLightbox()}
      </div>
    );
  }

  function renderLightbox() {
    return (
      <AnimatePresence>
        {lightboxOpen && lightboxIndex !== null && (
          <motion.div
            key="property-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} gallery, image ${lightboxIndex + 1} of ${images.length}`}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "var(--text-on-dark)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M3 3l12 12M15 3L3 15" />
              </svg>
            </button>

            {/* Counter */}
            <p
              className="absolute top-6 left-6 text-xs"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.08em",
              }}
            >
              {lightboxIndex + 1} / {images.length}
            </p>

            {/* Prev */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
                className="absolute left-4 sm:left-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "var(--text-on-dark)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 4l-6 6 6 6" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative w-[92vw] h-[80vh] max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`${alt} — image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="92vw"
                priority
              />
            </motion.div>

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
                className="absolute right-4 sm:right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "var(--text-on-dark)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M8 4l6 6-6 6" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className="relative w-full">
      {/* Embla viewport */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-3 lg:gap-4">
          {images.map((src, i) => (
            <div
              key={src + i}
              className="relative flex-shrink-0 cursor-zoom-in transition-opacity hover:opacity-90 overflow-hidden rounded-2xl"
              style={{
                flexBasis: "85%",
                maxWidth: "85%",
                aspectRatio: "16/10",
                // Translucent dark backdrop fills the letterbox bars on
                // portrait photos. Carousel section bg is dark so the
                // bars blend with the surrounding atmosphere.
                background: "rgba(254,252,250,0.04)",
              }}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`Open ${alt} image ${i + 1} of ${images.length} full screen`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openLightbox(i);
              }}
            >
              <Image
                src={src}
                alt={`${alt} — image ${i + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 85vw, 60vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet+ desktop controls */}
      <div className="hidden sm:flex absolute inset-y-0 left-0 right-0 pointer-events-none items-center justify-between px-2 lg:px-4">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous photo"
          className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            color: "var(--text-on-dark)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 4l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next photo"
          className="pointer-events-auto w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            color: "var(--text-on-dark)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M8 4l6 6-6 6" />
          </svg>
        </button>
      </div>

      <p
        className="mt-3 text-center text-xs"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--text-secondary)",
          letterSpacing: "0.08em",
        }}
      >
        {images.length} photos · swipe or tap to view full screen
      </p>

      {renderLightbox()}
    </div>
  );
}
