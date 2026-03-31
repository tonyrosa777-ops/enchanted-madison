// PostCard — Blog post card component
// Server component — no client state, no Framer Motion (CSS hover only)
// Authorized by: design-system.md §5 (card styles), §3 (typography), §2 (color tokens)

import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function PostCard({ post, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <article
        className="rounded-2xl overflow-hidden flex flex-col lg:flex-row"
        style={{ background: "var(--bg-dark)" }}
      >
        {/* Image — left 60% on desktop, top on mobile */}
        <div
          className="w-full lg:w-[60%] flex-shrink-0"
          style={{ aspectRatio: "16/9", background: "var(--bg-elevated)", position: "relative" }}
          aria-label={`Featured image for ${post.title}`}
        >
          <div
            className="absolute inset-0 flex items-end p-4"
            style={{
              background: "linear-gradient(to top, rgba(26,42,30,0.7) 0%, transparent 60%)",
            }}
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                letterSpacing: "0.12em",
              }}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Content — right 40% */}
        <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
          <div className="flex flex-col gap-3">
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(26px, 3vw, 38px)",
                color: "var(--text-on-dark)",
              }}
            >
              {post.title}
            </h2>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "rgba(254, 252, 250, 0.75)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.excerpt}
            </p>
          </div>

          <div
            className="flex items-center gap-3 text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(254, 252, 250, 0.5)",
              letterSpacing: "0.06em",
            }}
          >
            <span>{formatDate(post.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime} min read</span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--accent)",
            }}
          >
            Read Article
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    );
  }

  // Standard grid card
  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col post-card-hover"
      style={{
        background: "var(--bg-card)",
        border: "1px solid transparent",
        transition: "all 300ms ease",
      }}
    >
      {/* Image placeholder */}
      <div
        className="w-full flex-shrink-0"
        style={{ aspectRatio: "16/9", background: "var(--bg-elevated)", position: "relative" }}
        aria-label={`Image for ${post.title}`}
      >
        <div
          className="absolute top-3 left-3"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-mono)",
              background: "var(--bg-card)",
              color: "var(--accent)",
              letterSpacing: "0.1em",
            }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3
          className="leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(18px, 2vw, 22px)",
            color: "var(--text-primary)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.title}
        </h3>

        <p
          className="leading-relaxed flex-1"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--text-secondary)",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--primary-muted)" }}>
          <span
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-secondary)",
              letterSpacing: "0.04em",
            }}
          >
            {formatDate(post.publishedAt)} · {post.readTime} min
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold transition-colors hover:opacity-70"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--primary)",
            }}
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}
