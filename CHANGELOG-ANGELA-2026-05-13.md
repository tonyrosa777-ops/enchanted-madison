# Angela's Revisions — What Shipped

**Document received:** 2026-05-13 (`angela-revisions-2026-05-13.md.docx`)
**Shipped:** 2026-05-13 (Session 15)
**Status:** Every line-item in your revisions doc was either implemented or has a documented follow-up. Vercel auto-deploys from `main` — your latest commit is live. Review URL: your production domain on Vercel.

---

## Homepage

| Your request | Status | Notes |
|---|---|---|
| New H1: *"Private Hot Tub Escapes, Luxury Glamping and Bell Tent sites in Madison, Indiana"* | ✅ Done | Live on `/` |
| New subheadline (your verbatim copy about booking a private hot tub escape, glamping tent, etc., with the Louisville/Cincinnati/Indianapolis distances) | ✅ Done | Live under the H1 |
| Sticky "Check Availability" button (dark translucent, compact) | ✅ Done | Desktop: the existing header CTA is always visible at the top right (the header is sticky). Mobile: new floating pill appears bottom-right after you scroll past the hero. Styled with a dark translucent backdrop, 13px mono caps, pill radius — translates the CSS values you sent into our design system. |
| Tagline section rewrite (luxury glamping, curated tent sites, private cottage, hot tub escapes, designed for couples looking to connect) | ✅ Done | Renders between the trust strip and the stays grid |
| "Where You'll Stay" section header → *"Romantic Getaways & Date Night Experiences in Madison, Indiana"* on both homepage and `/stays` | ✅ Done | Both pages |
| Bulleted accommodation description (Private Cottage Stay / Luxury Glamping Tents / Bell Tent Sites / Bring-Your-Own Tent Sites + the fire-pit + hot-tub disclosure) | ✅ Done | Both pages |
| Distance/feature callouts say *"private hot tub — at select accommodations"* (not "every accommodation") | ✅ Done | Updated in three places: trust strip / Why Us card / /stays quick-stat bar |
| Distance/Location info box (90 min Indianapolis, 60 min Louisville, 60 min Cincinnati) | ✅ Done | New pill strip on the homepage just below the tagline. The fuller Location section lower down is still there too. **Cincinnati corrected to 60 min everywhere** (was 75 in the old data). |
| VIP perks rewrite | ✅ Done | "An exclusive discount on your first booking" → "Exclusive private offers on bookings". "VIPs always get first access" clause removed from the subheadline. |
| Remove duplicate availability checker | ⚠️ Need screenshot | I could not find a duplicate availability checker on the homepage in code — only the header "Check Availability" button. If you're still seeing one after this deploy, please send a screenshot and I'll remove it. |
| Google Analytics (G-1VQ056C1GV) | ✅ Done | gtag.js wired via Next.js Script with `afterInteractive` strategy. Coexists with the existing Vercel Analytics. Verify in Network tab — `gtag/js` request should fire on every page. |

---

## About Page

| Your request | Status | Notes |
|---|---|---|
| "What we believe" / "How we built this place" restructure | ✅ Done | H2 is now "What we believe" with "How we built this place" as the subheading beneath. Eyebrow renamed to "Our Approach" to avoid duplicating the H2. |
| Three card rewrites (Thoughtfully Curated / Thoughtful Layout, Real Setting / Couples-First, Always) | ✅ Done | All three card bodies replaced with your verbatim copy. "Genuinely Private" renamed → "Thoughtful Layout, Real Setting" with your new copy about distinct spaces in a shared natural setting. |
| Menu label "The Enchanted Journal" → "Our Enchanted Guides" | ✅ Done | Updated in the header dropdown, footer, blog page hero eyebrow, and the blog metadata title. URL stayed `/blog` (no redirects needed). |

---

## Hot Tub Escapes (`/date-night`)

| Your request | Status | Notes |
|---|---|---|
| Replace the two photos at the top of the page with your emailed photos | ✅ Done (partial) | "Private Hot Tub Soak" card now uses your **Sunrise Hot Tub Escape.png** photo. "Fireside Lounge" card kept its current high-quality AI image — there's no fireside photo in the email batch yet. Please send one and we'll swap it in. Logged in `ANGELA-PHOTOS.md` so it doesn't fall through the cracks. |

---

## Stays (`/stays` + per-property pages)

| Your request | Status | Notes |
|---|---|---|
| Tent site pricing $35 → $45 | ✅ Done | Bell Tent + BYOT both at $45. Cottage + Velvet Buck + Starlit Buck unchanged at $175. |
| Add **The Starlit Buck** as new glamping tent | ✅ Done | Live at `/stays/starlit-buck`. Full spec from our text exchange today: 320 sq ft, sleeps 2, From $175, "Opening This Summer" badge, your 6 features (hot tub under the stars, king bed with luxury bedding, string lights + fire pit, outdoor dining space, countryside views, secluded woodland setting), your full description verbatim. Positioned directly after Velvet Buck on the stays grid. Grid is now 3+2 instead of 4+1 — looks balanced. |
| "You might also like" carousel showing actual photos | ✅ Done | Found and fixed the bug — the related-stays cards on each property page were dropping the image prop, which is why they were rendering "Photo coming soon." Also made the empty-state fallback graceful so even brand-new properties never look broken. |
| Per-property photo carousel with multiple pics | ✅ Done | New `<PropertyGallery>` component live on every stay page. Horizontal swipeable strip with prev/next buttons on tablet+, taps open a fullscreen lightbox with keyboard nav (← → Esc), counter, click-outside-to-close. Cottage gets 5 photos (hot tub / bedroom / family room / kitchen / cocktail bar). Velvet Buck gets 4 photos — I integrated three of your unwired source files (Enhanced bedroom, Glamping bathroom, Glamping kitchen) for this. Bell Tent + Campsite + Starlit Buck show single-image fallback until more photos arrive. |

---

## Proposals (`/proposals`)

| Your request | Status | Notes |
|---|---|---|
| Photographer FAQ rewrite | ✅ Done | "We can coordinate with one of our preferred photographers. Time for photos after the proposal can be arranged according to your preference." |

---

## Madison Guide

| Your request | Status | Notes |
|---|---|---|
| Remove "Chandler Hotel" mention (competitor) | ✅ Done | Replaced with a non-competitor pointer to the riverfront park at the foot of Broadway at sunset — keeps the tip useful without sending guests to a competing property. |

---

## Navigation / Menu

| Your request | Status | Notes |
|---|---|---|
| Add "Gift Certificates" to menu | ✅ Done | Header dropdown + footer Experiences group. Links to your Acuity catalog at `https://app.acuityscheduling.com/catalog.php?owner=38559471`. Opens in a new tab. If you have a specific gift certificate product URL you'd rather use (with a `&id=…` parameter), send it over and I'll swap. |

---

## SEO

| Your request | Status | Notes |
|---|---|---|
| Homepage SEO title + meta description (your verbatim copy) | ✅ Done | `<title>` and meta description on `/` now use your exact strings. Open Graph + Twitter card metadata pull through the same values. |
| Tent site SEO — show up on Google for tent site searches | ✅ Done (groundwork) | "Tent site" terminology now appears in: Bell Tent name + type + tagline, BYOT name + type + tagline, a new FAQ entry ("Do you offer tent sites in Madison, Indiana?"), the `/stays` meta description, and the footer link labels. Indexing takes Google a few weeks — submit the updated sitemap via Search Console after this deploy lands to speed it up. |

---

## Things to follow up on (no action required from me; flagging for you)

1. **"Opening This Summer" badge on Starlit Buck** — confirm phrasing. Other options: "Opens June 2026," "Coming Soon," "Reserve Yours."
2. **Gift Certificate URL** — confirm catalog page is right vs. a specific product URL.
3. **Fireside lounge photo** — send when you have it; AI placeholder is live in the meantime.
4. **More photos for Velvet Buck, Bell Tent, Campsite galleries** — currently 4 / 1 / 1 photos respectively. Carousel handles 5 cleanly; more = better.
5. **Starlit Buck hero + 5 gallery photos** — once the property is photographed.
6. **Lodgify per-property widget URLs** — booking widgets are still in placeholder mode on each stay page. When you grab the embed URL for each property from your Lodgify dashboard, send them and I'll wire each one up (takes ~5 min).
7. **"Duplicate availability checker"** — if it's still appearing somewhere, screenshot it.
8. **Photo credit display** — Madison Guide cards (Lanier Mansion, Downtown, Broadway Fountain) currently don't show photographer attribution on-page. Confirm whether you want visible "Photo by Jay Westendorf / Brent Spry / Grunt Pics" credits.

---

## Build summary

- **22 atomic commits** shipped to `main` this session, all pushed to GitHub.
- **Build:** 40 pages prerendered, zero TypeScript errors.
- **New dependencies:** `embla-carousel-react` (for the carousel; lightbox is in-house with Framer Motion so no second dep needed).
- **New files:** `<FloatingCTA />`, `<PropertyGallery />`, `ANGELA-PHOTOS.md`, `CHANGELOG-ANGELA-2026-05-13.md` (this file).
- **Build template integrity:** all copy still lives in `data/site.ts`. No hardcoded strings introduced. Atomic commits per CLAUDE.md.
