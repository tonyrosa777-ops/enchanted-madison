"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { shopCategories } from "@/data/shop";
import type { Product } from "@/data/shop";
import { ProductCard } from "./ProductCard";
import { CartDrawer } from "./CartDrawer";

interface ShopContentProps {
  products: Product[];
}

// Inner component that uses useSearchParams — must be wrapped in Suspense
function SuccessBanner() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");

  if (success !== "true") return null;

  return (
    <div
      className="mb-8 rounded-2xl px-6 py-4 flex items-start gap-3"
      style={{
        background: "var(--primary)",
        color: "var(--text-on-dark)",
      }}
    >
      <svg
        className="flex-shrink-0 mt-0.5"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 12l2 2 4-4" />
        <circle cx="10" cy="10" r="8" />
      </svg>
      <div>
        <p
          className="font-semibold mb-0.5"
          style={{ fontFamily: "var(--font-display)", fontSize: "1rem" }}
        >
          Order confirmed — thank you!
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(254,252,250,0.85)",
          }}
        >
          Gift cards and digital products will be delivered by email within 24
          hours. Physical items ship via Printful once your order is processed.
        </p>
      </div>
    </div>
  );
}

export function ShopContent({ products }: ShopContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Cart Drawer — position:fixed, doesn't affect layout */}
      <CartDrawer />

      {/* Success banner */}
      <Suspense fallback={null}>
        <SuccessBanner />
      </Suspense>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {shopCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.07em",
                background: isActive ? "var(--primary)" : "var(--bg-card)",
                color: isActive
                  ? "var(--text-on-dark)"
                  : "var(--text-secondary)",
                border: isActive
                  ? "none"
                  : "1px solid var(--primary-muted)",
              }}
            >
              {cat.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={String(product.id)} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          className="text-center py-16"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
          No products found in this category.
        </div>
      )}
    </>
  );
}
