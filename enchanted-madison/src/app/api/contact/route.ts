// POST /api/contact — Contact form handler
// Sends owner notification + warm auto-reply via Resend
// Gracefully degrades if RESEND_API_KEY not set

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum(["general", "booking", "proposal", "date-night", "press", "other"]),
  message: z.string().min(10),
  smsConsent: z.boolean().optional(),
});

const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  booking: "Booking Question",
  proposal: "Proposal Inquiry",
  "date-night": "Hot Tub Escape Inquiry",
  press: "Press / Media",
  other: "Other",
};

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

  const { name, email, phone, subject, message, smsConsent } = parsed.data;
  const subjectLabel = subjectLabels[subject] ?? subject;

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    console.log("[contact] No RESEND_API_KEY — logging submission:");
    console.log({ name, email, phone, subject, message });
    return NextResponse.json({ success: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    // 1. Owner notification — Angela gets all the details
    await resend.emails.send({
      from: "contact@enchantedmadison.com",
      to: "enchantedcollective47250@gmail.com",
      replyTo: email,
      subject: `New Contact Form: ${subjectLabel} — ${name}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nSMS Consent: ${smsConsent ? "Yes" : "No"}\nSubject: ${subjectLabel}\n\nMessage:\n${message}\n\n—\nReply directly to this email to respond to ${name}.`,
    });

    // 2. Auto-reply to the inquirer — warm, on-brand
    await resend.emails.send({
      from: "angela@enchantedmadison.com",
      to: email,
      replyTo: "enchantedcollective47250@gmail.com",
      subject: `We got your message, ${name} — The Enchanted Collective`,
      text: `Hi ${name},\n\nThank you so much for reaching out. We received your message and I'll personally get back to you within 24 hours.\n\nIf you need anything sooner, don't hesitate to call or text us at 812-329-2477 — we're always happy to chat.\n\nWe look forward to connecting with you.\n\nWarmly,\nAngela & Marc\nThe Enchanted Collective\nMadison, Indiana\n812-329-2477`,
    });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    // Non-fatal — still return success so the guest sees confirmation
  }

  return NextResponse.json({ success: true });
}
