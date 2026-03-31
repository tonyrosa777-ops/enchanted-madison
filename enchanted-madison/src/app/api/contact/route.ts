// POST /api/contact — Contact form handler
// Source: initial-business-data.md §2 (contact info)
// Phase 5: wire email delivery via Resend (API key needed from client)
// For now: validates payload, logs server-side, returns 200 so the UI confirms receipt.

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.enum(["general", "booking", "proposal", "date-night", "press", "other"]),
  message: z.string().min(10),
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

  const { name, email, phone, subject, message } = parsed.data;

  // TODO Phase 5: replace with Resend email delivery
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'contact@enchantedmadison.com',
  //   to: 'enchantedcollective47250@gmail.com',
  //   subject: `New contact: ${subject} from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? 'not provided'}\n\n${message}`,
  // });

  // Development: log to console until email is wired
  console.log("[contact form submission]", { name, email, phone, subject, message });

  return NextResponse.json({ success: true });
}
