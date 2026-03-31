import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createOrder } from "@/lib/printful";
import seededProducts from "@/lib/printful-seeded-products.json";
import { MANUAL_ITEM_IDS } from "@/data/shop";

interface CartItem {
  id: string | number;
  name: string;
  quantity: number;
  price: number;
  printful_variant_id?: number;
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-03-25.dahlia",
  });

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("[webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const cart: CartItem[] = JSON.parse(
      session.metadata?.cart ?? "[]"
    ) as CartItem[];

    // Stripe 21+: shipping is in collected_information.shipping_details
    const shippingDetails =
      session.collected_information?.shipping_details ?? null;

    const manualItems = cart.filter((i) => MANUAL_ITEM_IDS.has(String(i.id)));
    const podItems = cart.filter((i) => !MANUAL_ITEM_IDS.has(String(i.id)));

    // Create Printful order for POD items
    if (podItems.length > 0 && shippingDetails) {
      try {
        await createOrder(seededProducts.storeId, {
          recipient: {
            name:
              shippingDetails.name ??
              session.customer_details?.name ??
              "Customer",
            address1: shippingDetails.address?.line1 ?? "",
            city: shippingDetails.address?.city ?? "",
            state_code: shippingDetails.address?.state ?? "",
            country_code: shippingDetails.address?.country ?? "US",
            zip: shippingDetails.address?.postal_code ?? "",
            email: session.customer_details?.email ?? undefined,
          },
          items: podItems.map((i) => ({
            sync_variant_id: i.printful_variant_id,
            quantity: i.quantity,
          })),
          confirm: true,
        });
      } catch (err) {
        console.error("[webhook] Printful order failed:", err);
        // Non-fatal — continue to send owner alert
      }
    }

    // Send owner alert email
    await sendOrderAlert(session, cart, manualItems.length > 0);
  }

  return NextResponse.json({ received: true });
}

async function sendOrderAlert(
  session: Stripe.Checkout.Session,
  cart: CartItem[],
  hasManualItems: boolean
) {
  if (!process.env.RESEND_API_KEY) return;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const total = ((session.amount_total ?? 0) / 100).toFixed(2);
    const customer = session.customer_details;
    const manualFlag = hasManualItems
      ? "\n⚠️  MANUAL FULFILLMENT REQUIRED — ship/email these items yourself.\n"
      : "";
    const itemLines = cart
      .map((i) => `  • ${i.name} x${i.quantity} — $${i.price.toFixed(2)}`)
      .join("\n");

    await resend.emails.send({
      from: "orders@enchantedmadison.com",
      to: "enchantedcollective47250@gmail.com",
      subject: `New Shop Order — $${total}`,
      text: `New order!\n${manualFlag}\nCustomer: ${customer?.name} <${customer?.email}>\nTotal: $${total}\n\nItems:\n${itemLines}\n\nStripe Session: ${session.id}`,
    });
  } catch (err) {
    console.error("[webhook] Failed to send order alert:", err);
  }
}
