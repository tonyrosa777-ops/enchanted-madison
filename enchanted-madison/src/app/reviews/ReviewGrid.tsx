"use client";

// ReviewGrid — client component for paginated review display
// Shows 6 reviews initially, "Load More" reveals the rest

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";

const PAGE_SIZE = 6;

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`${count} out of 5 stars`} style={{ color: "var(--accent)", letterSpacing: "0.05em", fontSize: "1.1rem" }}>
      {"★".repeat(count)}
    </span>
  );
}

export function ReviewGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const reviews = siteData.reviews;
  const shown = reviews.slice(0, visible);
  const hasMore = visible < reviews.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence initial={false}>
          {shown.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i >= visible - PAGE_SIZE ? (i - (visible - PAGE_SIZE)) * 0.07 : 0 }}
              className="rounded-2xl p-7 flex flex-col gap-5 h-full"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--primary-muted)",
              }}
            >
              <Stars count={review.rating} />

              <p
                className="text-[11px] uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.1em" }}
              >
                {review.occasion}
              </p>

              <blockquote
                className="flex-1 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
              >
                &ldquo;{review.quote}&rdquo;
              </blockquote>

              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--primary-muted)" }}
              >
                <p
                  className="text-sm font-bold"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
                >
                  {review.name}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.05em" }}
                >
                  {review.location}
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, reviews.length))}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] px-8 py-3.5 text-sm font-bold transition-all duration-200 hover:opacity-80"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderColor: "var(--primary)",
              color: "var(--primary)",
              background: "transparent",
            }}
          >
            Load More Reviews
            <span style={{ color: "var(--accent)" }}>
              ({reviews.length - visible} remaining)
            </span>
          </button>
        </div>
      )}

      {!hasMore && visible > PAGE_SIZE && (
        <p
          className="text-center mt-10 text-sm"
          style={{ fontFamily: "var(--font-mono)", color: "var(--text-secondary)", letterSpacing: "0.06em" }}
        >
          All {reviews.length} reviews shown · Every one is genuine
        </p>
      )}
    </>
  );
}
