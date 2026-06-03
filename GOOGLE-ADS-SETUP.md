# Google Ads Conversion Tracking — Setup & Owner Guide

**For:** Angela (The Enchanted Collective)
**Status:** Contact conversion **installed & live** on next deploy. Three more funnels are
pre-built and ready to switch on whenever you create them in Google Ads.
**Google Ads account:** `enchantedcollective47250@gmail.com` · **Conversion ID:** `AW-17977052951`

---

## Plain-English summary

When someone clicks one of your Google Ads and then fills out a form on the site, Google needs
to be told "that click turned into a lead." That signal is a **conversion**. It does two things:
it shows you which ads/keywords actually produce leads, and it lets Google's automated bidding
spend your budget chasing **more of the leads that matter** instead of random clicks.

Your site doesn't use "thank-you pages" (the form just turns into a success message in place),
so we wired the conversion to fire **the moment a form is submitted successfully** — the modern,
Google-supported way to do this. We also reused the Google tag that's already on the site for
Google Analytics, so nothing is loaded twice and the site stays fast.

---

## ✅ What's done (no action needed)

- **Contact form** → fires the **"Contact"** conversion you shared. Live on the next deploy.
- Tag installed site-wide, reusing your existing Google Analytics tag (no duplicate, no slowdown).
- Double-submit / refresh protection so a single lead is never counted twice.

### How to confirm it's working (after deploy)
1. In Google Ads: **Goals → Conversions** → open **Contact**. Within ~24 hours of the first real
   submission it should move from *"No recent conversions"* to recording.
2. Or use Google's **Tag Assistant** (tagassistant.google.com), enter the site URL, submit the
   contact form, and watch the **Contact** conversion log.

---

## 🚦 Before turning on the other forms — set the VALUE first (important)

The site has three more lead funnels we've **already pre-wired** but left **off** until you
create their conversion actions:

| Funnel | What it captures | Relative intent |
|--------|------------------|-----------------|
| **Proposals inquiry** | Someone planning a proposal (a booking worth $1k–5k+) | 🔥 **Highest** |
| **Experience-Finder quiz** | A warm lead who told us what they want + gave their email | Medium-high |
| **VIP signup** | An email for the list ($25-off incentive) | Low–medium |
| **Contact** *(live)* | A general inquiry — could be anything | **Lowest** (catch-all) |

**Why this matters — please read:** A conversion's **value** is not cosmetic. It is a direct
instruction to Google about *how hard to bid* to win that kind of lead. If a $5,000 proposal
inquiry and a newsletter signup are both valued the same, Google will spend your budget chasing
whichever is **cheapest** (signups) and **starve the proposal funnel** — the opposite of what you
want. So:

> **Hard rule: set a realistic value on each conversion action before you activate it.**
> Use the relative order above — **Proposal highest, Contact lowest.** The exact dollar figures
> are yours to set (and easy to change later in Google Ads — no developer needed). A reasonable
> starting point if you're unsure: Contact $5, VIP $10, Quiz $25, Proposal $150. Tune as you learn
> what a lead is actually worth.

We deliberately did **not** hardcode these values in the website — they live in **your Google Ads
dashboard** so you stay in control of your own ad spend and can change them anytime.

### How to create each new conversion action
1. Google Ads → **Goals → Conversions → + New conversion action → Website**.
2. When it asks how to set up the tag, choose **"Use the Google tag already on your site"** /
   **skip the snippet** — the tag is already installed, you do **not** need to paste anything.
3. Set the **value** (see the rule above) and name it clearly (e.g. "Proposal Inquiry").
4. Copy the **conversion label** it gives you (looks like `AbCdEf12_GhIjK34`).
5. Send us the label → we set one setting and that funnel goes live. **No code changes, no redeploy
   of logic** — just flipping it on.

---

## 💡 Recommended next step: Enhanced Conversions (better ROI)

Enhanced Conversions privately and securely sends a hashed (scrambled) version of the email a
lead already typed into the form, which helps Google match more conversions back to ad clicks —
often **recovering 5–15% of conversions** that cookie limits would otherwise lose. More accurate
data = smarter bidding = better return on your ad spend.

**It's recommended, but it's your call** because it involves customer data:
- You enable it in Google Ads (**Conversions → Settings → Enhanced Conversions**) and accept
  Google's **Customer Data Terms**.
- We add a short line to the site's privacy policy describing it.
- **We will not send any customer data to Google until you opt in.**

---

## ⚠️ Cookies & consent (due-diligence note — not a blocker today)

The conversion tag sets advertising cookies — the **same** as the Google Analytics tag already
on the site. For U.S. / Indiana traffic this is standard practice and **needs no cookie banner**.

If you ever start running ads that target **EU/UK** visitors (or you want to be conservative for
California), you may need a cookie-consent banner / Google **Consent Mode**. Flagging it now so
it's never a surprise — nothing to do unless your audience changes.

---

## Quick reference (for the developer)

- Helper: `enchanted-madison/src/lib/gtag.ts` — `reportConversion("contact" | "proposal" | "quiz" | "vip")`.
- Tag config: `enchanted-madison/src/app/layout.tsx` (`gtag('config', 'AW-17977052951')`).
- To switch a funnel on, set the env var (Vercel → Project → Settings → Environment Variables):
  - `NEXT_PUBLIC_GADS_LABEL_PROPOSAL`, `NEXT_PUBLIC_GADS_LABEL_QUIZ`, `NEXT_PUBLIC_GADS_LABEL_VIP`
  - (Contact defaults to the live label `HbWyCOjO4LccEJeekPxC`; override via `NEXT_PUBLIC_GADS_LABEL_CONTACT` if it ever changes.)
- Values stay in the Google Ads UI by default. Optional code override only if ever needed:
  `NEXT_PUBLIC_GADS_VALUE_<FUNNEL>`.
