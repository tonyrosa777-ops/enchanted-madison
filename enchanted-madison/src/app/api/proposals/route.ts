import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const proposalSchema = z.object({
  yourName: z.string().min(2, "Name required"),
  partnerName: z.string().min(1, "Partner name required"),
  phone: z.string().min(7, "Phone required"),
  email: z.string().email("Valid email required"),
  preferredDate: z.string().min(1, "Preferred date required"),
  backupDate: z.string().optional(),
  preferredTime: z.enum(["morning", "afternoon", "evening", "flexible"]),
  venueLocation: z.enum(["hot-tub-area", "fire-pit", "woodland-path", "open-to-suggestions"]),
  whoPresent: z.enum(["just-us", "small-group", "photographer-too"]),
  packageInterest: z.enum(["enchanted", "signature", "ultimate", "not-sure"]),
  enhancements: z.array(z.string()).default([]),
  bestTimeToContact: z.enum(["morning", "afternoon", "evening"]),
  additionalNotes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = proposalSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Validation failed", issues: result.error.flatten() }, { status: 422 });
  }

  const d = result.data;

  const emailBody = `New Proposal Inquiry

From: ${d.yourName} & ${d.partnerName}
Email: ${d.email}
Phone: ${d.phone}

Preferred Date: ${d.preferredDate}
Backup Date: ${d.backupDate || "Not provided"}
Preferred Time: ${d.preferredTime}
Venue: ${d.venueLocation}
Who Will Be Present: ${d.whoPresent}

Package Interest: ${d.packageInterest}
Enhancements: ${d.enhancements.length > 0 ? d.enhancements.join(", ") : "None selected"}
Best Time to Contact: ${d.bestTimeToContact}

Additional Notes:
${d.additionalNotes || "None"}`;

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Owner notification
      await resend.emails.send({
        from: "proposals@enchantedcollectivemadison.com",
        to: "enchantedcollective47250@gmail.com",
        replyTo: d.email,
        subject: `New Proposal Inquiry — ${d.yourName} & ${d.partnerName} · ${d.preferredDate}`,
        text: emailBody,
      });

      // Auto-reply to submitter
      await resend.emails.send({
        from: "proposals@enchantedcollectivemadison.com",
        to: d.email,
        replyTo: "enchantedcollective47250@gmail.com",
        subject: "We received your proposal request — The Enchanted Collective",
        text: `Hi ${d.yourName},\n\nThank you for reaching out about your proposal! Angela and Marc will be in touch within 24 hours to confirm your date and walk through every detail.\n\nWe can't wait to help make this moment unforgettable.\n\nWarm regards,\nAngela & Marc\nThe Enchanted Collective\n812-329-2477`,
      });
    } else {
      console.log("[api/proposals] RESEND_API_KEY not set. Would have sent:\n", emailBody);
    }
  } catch (err) {
    console.error("[api/proposals] Email send failed:", err);
    // Non-fatal — still return success to user
  }

  return NextResponse.json({ success: true });
}
