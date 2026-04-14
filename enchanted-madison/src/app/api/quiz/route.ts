// POST /api/quiz — Experience Finder lead capture
// Sends owner notification + personalized auto-reply via Resend
// Gracefully degrades if RESEND_API_KEY not set

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, note, answers, recommendation } = body as {
    name: string;
    email: string;
    note?: string;
    answers: Record<string, string>;
    recommendation: string;
  };

  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid request" }, { status: 422 });
  }

  const answerSummary = Object.entries(answers)
    .map(([k, v]) => `  ${k}: ${v}`)
    .join("\n");

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    console.log("[quiz] No RESEND_API_KEY — logging lead:");
    console.log({ name, email, recommendation, answers });
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    // Owner notification
    await resend.emails.send({
      from: "quiz@enchantedcollectivemadison.com",
      to: "enchantedcollective47250@gmail.com",
      subject: `New Lead: ${name} — matched to ${recommendation}`,
      text: `New Experience Finder submission\n\nName: ${name}\nEmail: ${email}\nRecommendation: ${recommendation}\n\nAnswers:\n${answerSummary}${note ? `\n\nNote from ${name}:\n${note}` : ""}\n\nReply to this person within 24 hours.`,
    });

    // Auto-reply to guest
    const recLabel: Record<string, string> = {
      "date-night": "A Private Date Night Escape",
      "proposals": "A Proposal Package",
      "velvet-buck": "The Velvet Buck Glamping Tent",
      "enchanted-cottage": "The Enchanted Cottage",
      "cottage-extended": "The Enchanted Cottage + Romance Add-On",
      "stays-overview": "Our Full Collection of Stays",
    };

    await resend.emails.send({
      from: "angela@enchantedcollectivemadison.com",
      to: email,
      replyTo: "enchantedcollective47250@gmail.com",
      subject: `Your Enchanted Collective recommendation, ${name}`,
      text: `Hi ${name},\n\nThank you for taking the time to tell us what you're looking for.\n\nBased on your answers, we think you'd love: ${recLabel[recommendation] ?? recommendation}\n\nI'll be in touch within 24 hours with more details and availability. If you'd like to chat sooner, reply to this email or call us at 812-329-2477.\n\nWe can't wait to host you.\n\n— Angela\nThe Enchanted Collective\nMadison, Indiana`,
    });
  } catch (err) {
    console.error("[quiz] Resend error:", err);
    // Still return success — don't block the guest
  }

  return NextResponse.json({ ok: true });
}
