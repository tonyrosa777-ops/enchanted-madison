import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface CartItemPayload {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  printful_variant_id?: number;
  selectedSize?: string;
  selectedColor?: string;
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const { items }: { items: CartItemPayload[] } = await req.json() as {
    items: CartItemPayload[];
  };

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-03-25.dahlia",
  });

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://enchantedmadison.com";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_creation: "always",
    line_items: items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          ...(item.image?.startsWith("http") ? { images: [item.image] } : {}),
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "AU", "NZ"],
    },
    success_url: `${siteUrl}/shop?success=true`,
    cancel_url: `${siteUrl}/shop`,
    metadata: {
      cart: JSON.stringify(
        items.map((i) => ({
          id: i.id,
          name: i.name,
          quantity: i.quantity,
          price: i.price,
          printful_variant_id: i.printful_variant_id,
        }))
      ),
    },
  });

  return NextResponse.json({ url: session.url });
}
