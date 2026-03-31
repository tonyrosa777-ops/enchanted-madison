"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, count } =
    useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY && items.length > 0) {
      alert(
        "Checkout is not yet configured. Please contact us directly to complete your order."
      );
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error ?? "Checkout failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again or contact us.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-black/40"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 h-full w-full max-w-sm z-[60] flex flex-col"
            style={{
              background: "var(--bg-card)",
              borderLeft: "1px solid var(--primary-muted)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ borderColor: "var(--primary-muted)" }}
            >
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Your Cart
                </span>
                {count > 0 && (
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-bold"
                    style={{
                      background: "var(--primary)",
                      color: "var(--text-on-dark)",
                    }}
                  >
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 transition-opacity hover:opacity-60"
                aria-label="Close cart"
                style={{ color: "var(--text-secondary)" }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4l12 12M4 16L16 4" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div
                  className="flex flex-col items-center justify-center h-full text-center gap-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ opacity: 0.3 }}
                  >
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                  </svg>
                  <p style={{ fontFamily: "var(--font-body)" }}>
                    Your cart is empty
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    href="/shop"
                    onClick={closeCart}
                  >
                    Browse the Shop
                  </Button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize ?? ""}-${item.selectedColor ?? ""}`}
                    className="flex gap-3 p-3 rounded-xl"
                    style={{ background: "var(--bg-elevated)" }}
                  >
                    {/* Image placeholder */}
                    <div
                      className="w-16 h-16 rounded-lg flex-shrink-0"
                      style={{ background: "var(--bg-base)" }}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-medium leading-tight mb-0.5"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {item.name}
                      </p>
                      {(item.selectedSize || item.selectedColor) && (
                        <p
                          className="text-xs"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {[item.selectedSize, item.selectedColor]
                            .filter(Boolean)
                            .join(" · ")}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{
                              background: "var(--bg-card)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            −
                          </button>
                          <span
                            className="text-sm w-4 text-center"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{
                              background: "var(--bg-card)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-sm font-semibold"
                            style={{
                              fontFamily: "var(--font-mono)",
                              color: "var(--primary)",
                            }}
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 transition-opacity hover:opacity-60"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M4 4l12 12M4 16L16 4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="p-4 border-t space-y-3"
                style={{ borderColor: "var(--primary-muted)" }}
              >
                <div className="flex justify-between items-center">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.06em",
                      color: "var(--text-secondary)",
                    }}
                  >
                    SUBTOTAL
                  </span>
                  <span
                    className="text-lg font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-sm font-bold transition-opacity disabled:opacity-50"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.08em",
                    background: "var(--primary)",
                    color: "var(--text-on-dark)",
                  }}
                >
                  {loading ? "PROCESSING..." : "CHECKOUT \u2192"}
                </button>
                <p
                  className="text-xs text-center"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Secure checkout · Ships to US &amp; more
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
