// /src/data/shop.ts — Shop product catalog
// Source: market-intelligence.md §5 (gift card recommendation)
// Manual items: gift cards + digital guide (owner emails delivery)
// POD items: Printful sync product IDs — REPLACE with real IDs from client's Printful store

export interface Product {
  id: string | number;
  name: string;
  price: number;
  description: string;
  category: "Gift Cards" | "Drinkware" | "Apparel" | "Digital";
  badge?: string;
  image?: string; // Use /images/shop/{slug}.jpg for local, or absolute Printful CDN URL
  printful_variant_id?: number; // Pre-set for single-variant items; otherwise resolved from variants API
  isManual?: boolean; // Manual fulfillment — do NOT send to Printful
  variants?: never; // Variants loaded dynamically from /api/printful/variants/[id]
}

export const shopCategories = ["All", "Gift Cards", "Drinkware", "Apparel", "Digital"];

// Manual fulfillment item IDs — these route to owner email, never Printful
export const MANUAL_ITEM_IDS = new Set([
  "gift-card-50",
  "gift-card-100",
  "gift-card-150",
  "gift-card-200",
  "madison-weekend-guide",
]);

export const shopProducts: Product[] = [
  // ── Gift Cards (manual fulfillment — owner emails code) ──────────────
  {
    id: "gift-card-50",
    name: "Gift Card — $50",
    price: 50,
    description:
      "A digital gift card redeemable for any stay, hot tub experience, or add-on. Delivered by email within 24 hours.",
    category: "Gift Cards",
    badge: "Digital Delivery",
    image: "/images/shop/gift-card.jpg",
    isManual: true,
  },
  {
    id: "gift-card-100",
    name: "Gift Card — $100",
    price: 100,
    description:
      "A digital gift card redeemable for any stay, hot tub experience, or add-on. Delivered by email within 24 hours.",
    category: "Gift Cards",
    badge: "Most Popular",
    image: "/images/shop/gift-card.jpg",
    isManual: true,
  },
  {
    id: "gift-card-150",
    name: "Gift Card — $150",
    price: 150,
    description:
      "A digital gift card redeemable for any stay, hot tub experience, or add-on. Delivered by email within 24 hours.",
    category: "Gift Cards",
    image: "/images/shop/gift-card.jpg",
    isManual: true,
  },
  {
    id: "gift-card-200",
    name: "Gift Card — $200",
    price: 200,
    description:
      "A digital gift card redeemable for any stay, hot tub experience, or add-on. Delivered by email within 24 hours.",
    category: "Gift Cards",
    image: "/images/shop/gift-card.jpg",
    isManual: true,
  },
  // ── Digital Products ─────────────────────────────────────────────────
  {
    id: "madison-weekend-guide",
    name: "The Perfect Madison Weekend Guide",
    price: 12,
    description:
      "A 20-page digital guide to Madison, Indiana — best hikes, restaurants, wineries, and insider tips from your hosts. PDF delivery within 24 hours.",
    category: "Digital",
    badge: "Digital PDF",
    image: "/images/shop/madison-guide.jpg",
    isManual: true,
  },
  // ── Drinkware (Printful POD) ─────────────────────────────────────────
  // NOTE: Replace numeric IDs below with real Printful sync product IDs from the client's store
  {
    id: 100001, // TODO: replace with real Printful sync product ID
    name: '"Under the Stars" Insulated Tumbler',
    price: 32,
    description:
      "20oz double-wall insulated tumbler. Keeps drinks hot for 12 hours or cold for 24. Dishwasher safe.",
    category: "Drinkware",
    badge: "NEW",
    image: "/images/shop/tumbler.jpg",
  },
  {
    id: 100002, // TODO: replace with real Printful sync product ID
    name: "The Enchanted Collective Camp Mug",
    price: 18,
    description:
      "15oz ceramic mug. The perfect morning coffee companion at the fire pit. Microwave and dishwasher safe.",
    category: "Drinkware",
    image: "/images/shop/mug.jpg",
  },
  // ── Apparel (Printful POD) ────────────────────────────────────────────
  {
    id: 100003, // TODO: replace with real Printful sync product ID
    name: '"Wild & Romantic" Canvas Tote Bag',
    price: 22,
    description:
      'Heavy-duty canvas tote. Perfect for farmers markets, beach days, and weekends away. 15" x 16".',
    category: "Apparel",
    image: "/images/shop/tote.jpg",
  },
  {
    id: 100004, // TODO: replace with real Printful sync product ID
    name: "Enchanted Madison Unisex Tee",
    price: 28,
    description:
      "100% cotton unisex t-shirt. Relaxed fit. Available in sizes S–2XL. Sustainably printed.",
    category: "Apparel",
    image: "/images/shop/tee.jpg",
  },
  {
    id: 100005, // TODO: replace with real Printful sync product ID
    name: "The Enchanted Collective Premium Hoodie",
    price: 48,
    description:
      "Midweight fleece hoodie. Soft inner lining. Unisex sizing. The cozy choice for chilly evenings at the fire pit.",
    category: "Apparel",
    badge: "LIMITED",
    image: "/images/shop/hoodie.jpg",
  },
];
