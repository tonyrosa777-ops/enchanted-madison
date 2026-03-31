import { NextRequest, NextResponse } from "next/server";
import { getVariants } from "@/lib/printful";

const COLOR_MAP: Record<string, string> = {
  Black: "#1a1a1a",
  White: "#ffffff",
  Navy: "#1a2744",
  "Navy Blue": "#1a2744",
  "Forest Green": "#2d4a2d",
  "Military Green": "#4a5c3a",
  "Sport Grey": "#9a9a9a",
  "Dark Heather": "#5a5a5a",
  Heather: "#b0b0b0",
  Maroon: "#6b1a1a",
  Red: "#cc2200",
  "Royal Blue": "#1a4799",
  Royal: "#1a4799",
  Purple: "#5a2d82",
  Gold: "#c8a96e",
  Ash: "#d4d4d4",
  Sand: "#d4c4a0",
  Charcoal: "#3a3a3a",
  Storm: "#6a7a8a",
  "Light Blue": "#87b8d4",
  "Vintage White": "#f5f0e8",
  Olive: "#6b6b3a",
  Brown: "#7a4a2a",
  Chocolate: "#5a3020",
  Burgundy: "#6b1a2a",
  Mint: "#7ab8a0",
  Coral: "#c87a6a",
  Teal: "#2a7a8a",
  Slate: "#6a7a8a",
};

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  if (!process.env.PRINTFUL_API_KEY) {
    // Return mock variants for placeholder IDs
    return NextResponse.json([
      {
        id: numericId * 100 + 1,
        name: "S / Black",
        size: "S",
        color: "Black",
        colorHex: "#1a1a1a",
        price: "0",
        inStock: true,
      },
      {
        id: numericId * 100 + 2,
        name: "M / Black",
        size: "M",
        color: "Black",
        colorHex: "#1a1a1a",
        price: "0",
        inStock: true,
      },
      {
        id: numericId * 100 + 3,
        name: "L / Black",
        size: "L",
        color: "Black",
        colorHex: "#1a1a1a",
        price: "0",
        inStock: true,
      },
      {
        id: numericId * 100 + 4,
        name: "XL / Black",
        size: "XL",
        color: "Black",
        colorHex: "#1a1a1a",
        price: "0",
        inStock: true,
      },
      {
        id: numericId * 100 + 5,
        name: "S / Forest Green",
        size: "S",
        color: "Forest Green",
        colorHex: "#2d4a2d",
        price: "0",
        inStock: true,
      },
      {
        id: numericId * 100 + 6,
        name: "M / Forest Green",
        size: "M",
        color: "Forest Green",
        colorHex: "#2d4a2d",
        price: "0",
        inStock: true,
      },
      {
        id: numericId * 100 + 7,
        name: "L / Forest Green",
        size: "L",
        color: "Forest Green",
        colorHex: "#2d4a2d",
        price: "0",
        inStock: true,
      },
    ]);
  }

  try {
    const variants = await getVariants(numericId);
    const withHex = variants.map((v) => ({
      ...v,
      colorHex:
        COLOR_MAP[v.color] ??
        COLOR_MAP[
          v.color
            .toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase())
        ] ??
        "#999999",
    }));
    return NextResponse.json(withHex);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch variants" },
      { status: 500 }
    );
  }
}
