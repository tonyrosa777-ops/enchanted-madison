// Printful API client
// Requires env var: PRINTFUL_API_KEY
// CRITICAL: confirm must be a query param, NOT a body field (Printful ignores it in body)

export interface PrintfulVariant {
  id: number;
  name: string;
  size: string;
  color: string;
  colorHex?: string;
  price: string;
  inStock: boolean;
}

export interface OrderData {
  recipient: {
    name: string;
    address1: string;
    city: string;
    state_code: string;
    country_code: string;
    zip: string;
    email?: string;
  };
  items: Array<{
    sync_variant_id: number | undefined;
    quantity: number;
  }>;
  confirm?: boolean;
}

export interface Order {
  id: number;
  status: string;
}

async function pfetch<T>(
  path: string,
  options: RequestInit & { storeId?: number } = {}
): Promise<T> {
  const { storeId, ...fetchOpts } = options;
  const headers: Record<string, string> = {
    Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    "Content-Type": "application/json",
  };
  if (storeId) headers["X-PF-Store-Id"] = String(storeId);

  const res = await fetch(`https://api.printful.com${path}`, {
    ...fetchOpts,
    headers: {
      ...headers,
      ...((fetchOpts.headers as Record<string, string>) ?? {}),
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Printful API error ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}

interface PrintfulSyncVariant {
  id: number;
  name: string;
  retail_price: string;
  product?: { in_stock: boolean };
}

interface PrintfulProductResponse {
  result: {
    sync_variants: PrintfulSyncVariant[];
  };
}

export async function getVariants(syncProductId: number): Promise<PrintfulVariant[]> {
  const data = await pfetch<PrintfulProductResponse>(
    `/store/products/${syncProductId}`
  );
  return data.result.sync_variants.map((v) => {
    const parsed = parseVariantName(v.name);
    return {
      id: v.id,
      name: v.name,
      size: parsed.size,
      color: parsed.color,
      price: v.retail_price,
      inStock: v.product?.in_stock ?? true,
    };
  });
}

export async function createOrder(
  storeId: number,
  orderData: OrderData
): Promise<Order> {
  const { confirm, ...body } = orderData;
  const path = confirm ? "/orders?confirm=true" : "/orders";
  return pfetch<Order>(path, {
    method: "POST",
    storeId,
    body: JSON.stringify(body),
  });
}

// KNOWN_COLORS — used to detect if a name segment is a color vs a size
const KNOWN_COLORS = new Set([
  "Black",
  "White",
  "Navy",
  "Navy Blue",
  "Red",
  "Forest Green",
  "Military Green",
  "Bottle Green",
  "Storm",
  "Sport Grey",
  "Dark Heather",
  "Heather",
  "Maroon",
  "Ash",
  "Sand",
  "Royal",
  "Royal Blue",
  "Purple",
  "Orange",
  "Gold",
  "Yellow",
  "Pink",
  "Light Pink",
  "Charcoal",
  "Light Blue",
  "Vintage White",
  "Carolina Blue",
  "Heather Blue",
  "Olive",
  "Brown",
  "Chocolate",
  "Burgundy",
  "Mustard",
  "Cream",
  "Cranberry",
  "Dark Navy",
  "Slate",
  "Mint",
  "Coral",
  "Teal",
  "Indigo",
  "Green",
  "Blue",
  "Grey",
  "Gray",
]);

function parseVariantName(name: string): { size: string; color: string } {
  const parts = name.split(" / ").map((p) => p.trim());
  if (parts.length === 1) return { size: parts[0], color: "" };
  if (parts.length === 2) {
    const [a, b] = parts;
    if (KNOWN_COLORS.has(b)) return { size: !KNOWN_COLORS.has(a) ? a : "", color: b };
    return { size: b, color: a };
  }
  const candidate1 = parts[parts.length - 2];
  const candidate2 = parts[parts.length - 1];
  if (KNOWN_COLORS.has(candidate2)) return { size: candidate1, color: candidate2 };
  if (KNOWN_COLORS.has(candidate1) && !KNOWN_COLORS.has(candidate2))
    return { size: candidate2, color: candidate1 };
  return { size: candidate1, color: candidate2 };
}
