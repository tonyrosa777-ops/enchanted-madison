// /blog/[slug] — Individual blog post page
// Server component. params is Promise<{ slug: string }> — MUST await.
// Source: design-system.md §2–§3 (tokens, type), §4 (spacing/layout)

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/animations/FadeUp";
import { WaveDivider } from "@/components/animations/WaveDivider";
import { Button } from "@/components/ui/Button";
import { PostCard } from "@/components/blog/PostCard";
import { blogPosts } from "@/data/blog";
import type { ContentBlock } from "@/data/blog";
import { siteData } from "@/data/site";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="text-base leading-relaxed mb-5"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
        >
          {block.text}
        </p>
      );

    case "heading2":
      return (
        <h2
          key={index}
          className="text-2xl font-semibold mt-10 mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}
        >
          {block.text}
        </h2>
      );

    case "heading3":
      return (
        <h3
          key={index}
          className="text-xl font-medium mt-6 mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          {block.text}
        </h3>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 pl-6 my-8"
          style={{ borderColor: "var(--accent)" }}
        >
          <p
            className="text-lg italic leading-relaxed mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite
              className="text-xs not-italic uppercase tracking-widest block"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-secondary)",
                letterSpacing: "0.08em",
              }}
            >
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "list":
      return (
        <ul key={index} className="mb-5 flex flex-col gap-2 pl-2">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-primary)" }}
            >
              <span
                className="mt-1 flex-shrink-0 text-sm"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              >
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      );

    case "image":
      // Skip placeholder images; render a grey aspect-ratio div
      if (block.src.startsWith("/images/blog/")) {
        return (
          <figure key={index} className="my-8">
            <div
              className="w-full rounded-xl"
              style={{ aspectRatio: "16/9", background: "var(--bg-elevated)" }}
              aria-label={block.alt}
            />
            {block.caption && (
              <figcaption
                className="text-center text-xs mt-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.04em",
                }}
              >
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      }
      return null;

    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Sidebar: up to 3 posts from same category (excluding current), padded with others
  const sameCat = blogPosts.filter((p) => p.slug !== slug && p.category === post.category);
  const others = blogPosts.filter((p) => p.slug !== slug && p.category !== post.category);
  const sidebarPosts = [...sameCat, ...others].slice(0, 3);

  // Related strip: 3 same-category posts, supplement with others
  const relatedPosts = [...sameCat, ...others].slice(0, 3);

  return (
    <PageShell>
      {/* ── Post Hero ──────────────────────────────────────────── */}
      <section
        className="pt-32 sm:pt-36 lg:pt-40 pb-12 px-4 text-center"
        style={{ background: "var(--bg-dark)" }}
      >
        <div className="max-w-3xl mx-auto relative">
          {/* Back link */}
          <div className="mb-8 text-left">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(254, 252, 250, 0.6)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "11px",
              }}
            >
              <span aria-hidden="true">←</span> All Articles
            </Link>
          </div>

          <FadeUp>
            <p
              className="uppercase tracking-widest text-xs mb-5"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                letterSpacing: "0.12em",
              }}
            >
              {post.category}
            </p>
            <h1
              className="leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(32px, 5vw, 58px)",
                color: "var(--text-on-dark)",
              }}
            >
              {post.title}
            </h1>
            <p
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "rgba(254, 252, 250, 0.5)",
                letterSpacing: "0.08em",
              }}
            >
              By {post.author.name} · {formatDate(post.publishedAt)} · {post.readTime} min read
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Wave Divider ───────────────────────────────────────── */}
      <WaveDivider fill="var(--bg-base)" background="var(--bg-dark)" />

      {/* ── Article + Sidebar ──────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

            {/* ── Main article column ──────────────────────────── */}
            <article>
              {post.body.map((block, i) => renderBlock(block, i))}
            </article>

            {/* ── Sidebar ──────────────────────────────────────── */}
            <aside className="flex flex-col gap-6">
              <div className="lg:sticky lg:top-24 flex flex-col gap-6">

                {/* More Articles */}
                {sidebarPosts.length > 0 && (
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
                  >
                    <p
                      className="uppercase tracking-widest text-xs mb-4"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-secondary)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      More Articles
                    </p>
                    <div className="flex flex-col gap-4">
                      {sidebarPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="group flex flex-col gap-1 pb-4 border-b last:border-b-0 last:pb-0 transition-opacity hover:opacity-70"
                          style={{ borderColor: "var(--primary-muted)" }}
                        >
                          <span
                            className="text-[10px] uppercase tracking-widest"
                            style={{
                              fontFamily: "var(--font-mono)",
                              color: "var(--accent)",
                              letterSpacing: "0.1em",
                            }}
                          >
                            {related.category}
                          </span>
                          <span
                            className="text-sm leading-snug font-medium"
                            style={{
                              fontFamily: "var(--font-display)",
                              color: "var(--text-primary)",
                              fontWeight: 600,
                            }}
                          >
                            {related.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* VIP Box */}
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--primary-muted)" }}
                >
                  <h3
                    className="text-lg mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {siteData.vip.headline}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    New guides, local tips, and exclusive early access — straight to your inbox.
                  </p>
                  <Button variant="primary" href="/vip" className="w-full">
                    Get VIP Access
                  </Button>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Booking CTA Strip ──────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "var(--bg-dark)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <p className="eyebrow mb-3" style={{ color: "var(--accent)" }}>
              Ready to Escape?
            </p>
            <h2
              className="mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(26px, 3.6vw, 40px)",
                color: "var(--text-on-dark)",
              }}
            >
              Turn this story into your next weekend.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="secondary" size="lg" href="/stays">
                Overnight Stays
              </Button>
              <Button variant="ghost-light" size="lg" href="/date-night">
                Hot Tub Escapes
              </Button>
              <Button variant="ghost-light" size="lg" href="/proposals">
                Proposals
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Related Articles Strip ─────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4" style={{ background: "var(--bg-elevated)" }}>
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <h2
                className="text-2xl mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                Keep Reading
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <PostCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
