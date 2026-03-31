// /vip — VIP Early Access Sign-Up
// Source: initial-business-data.md §11; market-intelligence.md §8 (VIP SMS opt-in + Dunlap Hollow scarcity pattern)
// Server component — exports metadata. Client logic in VipForm.tsx.
// TODO Phase 4: wire form to email/SMS provider (Klaviyo per market-intelligence.md §8)

import type { Metadata } from "next";
import { VipForm } from "./VipForm";

export const metadata: Metadata = {
  title: "VIP Early Access",
  description:
    "Join the VIP list for The Enchanted Collective — get first access to booking dates, $25 off your first stay, and a free Perfect Madison Weekend guide. Opening June 2026.",
};

export default function VipPage() {
  return <VipForm />;
}
