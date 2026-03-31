// /contact — Contact The Enchanted Collective
// Source: initial-business-data.md §2 (phone, email, address, directions)
// Server component — exports metadata. Client logic in ContactForm.tsx.
// API: POST /api/contact (email delivery wired in Phase 5 — Resend API key needed from client)

import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Angela & Marc at The Enchanted Collective. Questions about availability, proposals, or what to expect — every message is personally read.",
};

export default function ContactPage() {
  return <ContactForm />;
}
