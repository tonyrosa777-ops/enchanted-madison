import { NextResponse } from "next/server";
import seededProducts from "@/lib/printful-seeded-products.json";

export async function GET() {
  // Try live Printful API first, fall back to seeded data
  if (!process.env.PRINTFUL_API_KEY) {
    return NextResponse.json(seededProducts.products);
  }
  try {
    const res = await fetch("https://api.printful.com/store/products", {
      headers: {
        Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
        "X-PF-Store-Id": String(seededProducts.storeId),
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Printful API failed");
    const data = await res.json() as { result?: unknown[] };
    return NextResponse.json(data.result ?? seededProducts.products);
  } catch {
    return NextResponse.json(seededProducts.products);
  }
}
