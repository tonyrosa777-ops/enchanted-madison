"use client";

// BlogContent — handles category filter state
// Authorized by: design-system.md §5 (buttons), §2 (color tokens), §3 (typography)

import { useState } from "react";
import { blogCategories } from "@/data/blog";
import type { BlogPost } from "@/data/blog";
import { PostCard } from "./PostCard";

interface BlogContentProps {
  posts: BlogPost[];
  initialCategory?: string;
}

export function BlogContent({ posts, initialCategory = "All" }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const showFeatured = activeCategory === "All";
  const featuredPost = showFeatured ? filteredPosts[0] : null;
  const gridPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div>
      {/* Category filter bar */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
        {blogCategories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: isActive ? "var(--primary)" : "var(--bg-elevated)",
                color: isActive ? "var(--text-on-dark)" : "var(--text-secondary)",
                border: "none",
                cursor: "pointer",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Content area — keyed to activeCategory to force re-render and opacity transition */}
      <div
        key={activeCategory}
        className="animate-blog-fade"
      >
        {/* Featured post — only when "All" is active */}
        {showFeatured && featuredPost && (
          <div className="mb-10">
            <PostCard post={featuredPost} featured />
          </div>
        )}

        {/* Grid posts */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div
            className="py-16 text-center"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-secondary)",
            }}
          >
            <p>No articles in this category yet. Check back soon.</p>
          </div>
        )}
      </div>

      <style>{`
        .animate-blog-fade {
          animation: blogFadeIn 0.35s ease-out both;
        }
        @keyframes blogFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .post-card-hover:hover {
          border-color: var(--primary-muted) !important;
          box-shadow: 0 8px 32px rgba(44, 62, 45, 0.12);
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
}
