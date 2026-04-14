// POST /api/newsletter — VIP list signup handler
// Sends owner notification + welcome email via Resend
// Gracefully degrades if RESEND_API_KEY not set

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7, "Phone number is required"),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, phone } = parsed.data;

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    console.log("[vip] No RESEND_API_KEY — logging signup:");
    console.log({ name, email, phone });
    return NextResponse.json({ success: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    // Owner notification
    await resend.emails.send({
      from: "vip@enchantedcollectivemadison.com",
      to: "enchantedcollective47250@gmail.com",
      replyTo: email,
      subject: `New VIP Signup: ${name}`,
      text: `New VIP list signup\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n—\nReply directly to this email to reach ${name}.`,
    });

    // Welcome email to the new VIP
    await resend.emails.send({
      from: "angela@enchantedcollectivemadison.com",
      to: email,
      replyTo: "enchantedcollective47250@gmail.com",
      subject: `Welcome to the VIP list, ${name} — The Enchanted Collective`,
      text: `Hi ${name},\n\nYou're officially on the list.\n\nAs a VIP, here's what's coming your way before we open to the public:\n\n- An exclusive discount on your first booking\n- A complimentary luxury sugar scrub to elevate your soak\n- A curated snack & drink pairing waiting for you on arrival\n- First access to new dates before anyone else\n\nWe're opening June 2026 and you'll be the first to know when bookings go live.\n\nIf you have any questions in the meantime, just reply to this email or call us at 812-329-2477.\n\nWe can't wait to host you.\n\n— Angela & Marc\nThe Enchanted Collective\nMadison, Indiana`,
    });
  } catch (err) {
    console.error("[vip] Resend error:", err);
  }

  return NextResponse.json({ success: true });
}
