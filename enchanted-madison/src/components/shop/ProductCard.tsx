"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/data/shop";

interface PrintfulVariant {
  id: number;
  name: string;
  size: string;
  color: string;
  colorHex?: string;
  price: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart();

  // Variant state — only for POD (numeric) IDs
  const isPod = typeof product.id === "number";
  const [variants, setVariants] = useState<PrintfulVariant[]>([]);
  const [variantsLoading, setVariantsLoading] = useState(isPod);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedVariantId, setSelectedVariantId] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (!isPod) return;
    setVariantsLoading(true);
    fetch(`/api/printful/variants/${product.id}`)
      .then((r) => r.json())
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          const vs = data as PrintfulVariant[];
          setVariants(vs);
          // Auto-select first available color
          const firstColor = vs[0]?.color ?? "";
          setSelectedColor(firstColor);
          // Auto-select first available size for that color
          const firstSize =
            vs.find((v) => v.color === firstColor && v.inStock)?.size ?? "";
          setSelectedSize(firstSize);
        }
      })
      .catch(() => {
        // Variants unavailable — degrade gracefully
      })
      .finally(() => setVariantsLoading(false));
  }, [isPod, product.id]);

  // Resolve variant ID when selection changes
  useEffect(() => {
    if (!isPod || variants.length === 0) return;
    const match = variants.find(
      (v) => v.size === selectedSize && v.color === selectedColor
    );
    setSelectedVariantId(match?.id);
  }, [isPod, variants, selectedSize, selectedColor]);

  // Unique colors and sizes from variants
  const uniqueColors = [...new Set(variants.map((v) => v.color))];
  const sizesForColor = [
    ...new Set(
      variants.filter((v) => v.color === selectedColor).map((v) => v.size)
    ),
  ];

  function handleAddToCart() {
    if (isPod && variantsLoading) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      selectedSize: isPod ? selectedSize : undefined,
      selectedColor: isPod ? selectedColor : undefined,
      printful_variant_id: isPod ? selectedVariantId : product.printful_variant_id,
    });
    openCart();
  }

  // Determine if add to cart should be disabled
  const cannotAdd =
    isPod && !variantsLoading && variants.length > 0 && !selectedVariantId;

  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col group"
      style={{
        background: "var(--bg-card)",
        boxShadow: "0 1px 3px rgba(44,62,45,0.08)",
        transition: "box-shadow 300ms ease, transform 300ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 24px rgba(44,62,45,0.14)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(44,62,45,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image area */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "1 / 1" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "var(--bg-elevated)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(11px, 2vw, 13px)",
              color: "var(--text-muted)",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            {product.name}
          </span>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-bold uppercase"
              style={{
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.07em",
                background:
                  product.badge === "Most Popular"
                    ? "var(--accent)"
                    : product.badge === "LIMITED"
                      ? "var(--accent-rose)"
                      : "var(--primary)",
                color: "var(--text-on-dark)",
              }}
            >
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category eyebrow */}
        <p
          className="uppercase"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "var(--accent)",
          }}
        >
          {product.category}
        </p>

        {/* Name */}
        <h3
          className="leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-primary)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed text-sm flex-1"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-secondary)",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>

        {/* Price */}
        <p
          className="text-lg font-semibold"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            letterSpacing: "0.04em",
          }}
        >
          ${product.price.toFixed(2)}
        </p>

        {/* Variant picker — POD items only */}
        {isPod && (
          <div className="space-y-3">
            {variantsLoading ? (
              // Skeleton
              <div className="space-y-2">
                <div
                  className="h-3 w-16 rounded animate-pulse"
                  style={{ background: "var(--bg-elevated)" }}
                />
                <div className="flex gap-2">
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      className="w-6 h-6 rounded-full animate-pulse"
                      style={{ background: "var(--bg-elevated)" }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="h-7 w-10 rounded-lg animate-pulse"
                      style={{ background: "var(--bg-elevated)" }}
                    />
                  ))}
                </div>
              </div>
            ) : variants.length > 0 ? (
              <>
                {/* Color swatches */}
                {uniqueColors.length > 0 && (
                  <div>
                    <p
                      className="text-xs uppercase mb-1.5"
                      style={{
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.08em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Color: {selectedColor}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {uniqueColors.map((color) => {
                        const hex =
                          variants.find((v) => v.color === color)?.colorHex ??
                          "#999";
                        const isSelected = selectedColor === color;
                        return (
                          <button
                            key={color}
                            onClick={() => {
                              setSelectedColor(color);
                              // Reset size to first available for this color
                              const firstSize =
                                variants.find(
                                  (v) => v.color === color && v.inStock
                                )?.size ?? "";
                              setSelectedSize(firstSize);
                            }}
                            title={color}
                            aria-label={`Color: ${color}`}
                            className="w-6 h-6 rounded-full transition-all"
                            style={{
                              background: hex,
                              border: isSelected
                                ? "2.5px solid var(--primary)"
                                : "2px solid transparent",
                              outline: isSelected
                                ? "1px solid var(--bg-base)"
                                : "none",
                              outlineOffset: "1px",
                              boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Size chips */}
                {sizesForColor.length > 0 && (
                  <div>
                    <p
                      className="text-xs uppercase mb-1.5"
                      style={{
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.08em",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Size
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {sizesForColor.map((size) => {
                        const inStock = variants.some(
                          (v) =>
                            v.size === size &&
                            v.color === selectedColor &&
                            v.inStock
                        );
                        const isSelected = selectedSize === size;
                        return (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            disabled={!inStock}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                            style={{
                              fontFamily: "var(--font-mono)",
                              letterSpacing: "0.05em",
                              background: isSelected
                                ? "var(--primary)"
                                : "var(--bg-elevated)",
                              color: isSelected
                                ? "var(--text-on-dark)"
                                : "var(--text-secondary)",
                              border: isSelected
                                ? "none"
                                : "1px solid var(--primary-muted)",
                            }}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={cannotAdd || variantsLoading}
          className="mt-auto w-full py-2.5 rounded-full text-sm font-bold transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            fontFamily: "var(--font-body)",
            letterSpacing: "0.03em",
            background: "var(--primary)",
            color: "var(--text-on-dark)",
          }}
        >
          {variantsLoading ? "Loading..." : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}
