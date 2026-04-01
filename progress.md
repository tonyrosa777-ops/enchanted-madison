# progress.md — The Enchanted Collective Website Build

**Project:** enchantedmadison.com — new website build
**Client:** The Enchanted Collective | Madison, Indiana
**Business Type:** Luxury glamping and romantic experience property
**Launch Target:** June 2026
**Last Updated:** 2026-04-01 (Session 10)
**Current Phase:** Session 10 complete — Phase 4 integration architecture wired (Lodgify + Acuity), contract drafted

---

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Environment Setup & Strategy | ✅ Complete (pending client: Vercel dashboard, DNS, embed codes) |
| 1 | Design System & Brand Identity | ✅ Complete |
| 2 | Site Architecture & Content Planning | ✅ Complete |
| 3 | Core Pages Build | ✅ Complete (pending /about — awaiting client copy) |
| 4 | Conversion Flow Integration | ⬜ Not Started |
| 5 | Secondary Pages & Content | ✅ Complete (blog added post-phase) |
| 6 | SEO, Schema & Analytics | ✅ Complete |
| 7 | Performance, QA & Launch Prep | ⬜ Not Started |

---

## Site Architecture

| Route | Page | Status |
|-------|------|--------|
| `/` | Homepage | ⬜ |
| `/stays` | Stays Overview | ✅ Built |
| `/stays/enchanted-cottage` | The Enchanted Cottage | ✅ Built |
| `/stays/velvet-buck` | The Velvet Buck | ✅ Built |
| `/stays/bell-tent` | Curated Campsite — Bell Tent | ✅ Built |
| `/stays/campsite` | Curated Campsite — BYOT | ✅ Built |
| `/date-night` | Date Night & Hot Tub Escapes | ✅ Built |
| `/proposals` | Proposal Packages | ✅ Built |
| `/packages` | Add-Ons & Enhancement Packages | ⬜ |
| `/madison-guide` | Madison, Indiana Local Guide | ⬜ |
| `/about` | About The Enchanted Collective | ⬜ |
| `/faq` | FAQ | ⬜ |
| `/reviews` | Reviews | ⬜ |
| `/contact` | Contact | ⬜ |
| `/find-your-escape` | Experience Finder Quiz — lead capture wizard | ✅ Built |
| `/vip` | VIP Early Access Sign-Up | ✅ Built |
| `/blog` | The Enchanted Journal — blog index | ✅ Built |
| `/blog/[slug]` | Individual blog post pages (10 posts) | ✅ Built |
| `/shop` | The Enchanted Collective Shop | ✅ Built |

---

## Phase 0 — Environment Setup & Strategy

### Checklist
- [x] CLAUDE.md confirmed — 10 variables filled
- [x] progress.md created (this file)
- [x] design-system.md created
- [x] Tech stack scaffolded per website-build-template.md
- [ ] Vercel project connected — Framework Preset → Next.js, Root Directory → enchanted-madison (MUST set in dashboard before first deploy — see build-log.md error #1)
- [ ] Primary conversion tool confirmed with client (Lodgify + Acuity Scheduling)
- [ ] Domain DNS confirmed (enchantedmadison.com)
- [x] All source files confirmed readable
- [x] Sections to remove identified
- [x] Phase 1 task list written and approved

### Custom Builds (Features Not in Base Template)
These are required by this client but not in website-build-template.md. Each needs to be built on top of the template foundation using the same stack and conventions.

| Custom Feature | Source | Complexity |
|----------------|--------|------------|
| Stays pages — individual accommodation pages with Lodgify embed | initial-business-data.md §4, §9 | Medium |
| Experiences pages — Date Night / Proposal / Hot Tub Escape with Acuity Scheduling embed | initial-business-data.md §5, §9 | Medium |
| Proposal packages landing page with tiered pricing | initial-business-data.md §5a; market-intelligence.md §5 | Medium |
| Day-use hot tub escape booking flow (non-overnight) | market-intelligence.md §5 Gap 4 | Medium |
| VIP/early access email/SMS capture with incentive | initial-business-data.md §11; market-intelligence.md §8 | Low |
| Madison local guide content hub | initial-business-data.md §10; market-intelligence.md §7 | Low |
| Add-ons/enhancement packages upsell page | initial-business-data.md §6 | Low |
| Interactive property overview (conceptual — Phase 3+) | market-intelligence.md §7 | High |

### Template Sections: Include / Remove

| Section | Decision | Rationale |
|---------|----------|-----------|
| Shop (Stripe + Printful) | **BUILT** (Session 5 — client request overrides prior decision) | Gift cards + POD merch + digital guide. Printful POD IDs are placeholder — client must replace with real IDs from their Printful store. |
| Blog (Sanity CMS) | **DEFER to Phase 5+** | Madison Guide and content pillars needed for SEO, but not MVP. Build as static pages first. |
| Quiz / Lead capture | **KEEP — repurpose** | Use for VIP sign-up flow. Replace quiz mechanics with email/SMS opt-in. |
| Instagram feed | **REMOVE for launch** | Pre-launch — no feed to display. Add in Phase 7 if active by launch. |
| ROI Calculator | **REMOVE** | Not applicable to this business type. |

### Decisions Log
- 2026-03-30 — Booking engine confirmed: Lodgify (overnight stays) + Acuity Scheduling (experiences). Source: initial-business-data.md §9. Rationale: these are what Angela & Marc are currently using; redesign embeds them on-domain rather than redirecting off.
- 2026-03-30 — Schema type: LodgingBusiness (primary) + VacationRental (secondary). Property has multiple accommodation types. Source: market-intelligence.md §8 local SEO section.
- 2026-03-30 — Theme direction: Warm cream light theme (NOT dark theme). Source: market-intelligence.md §8 color palette. Justification: romance/nature-luxury category skews warm, earthy, and editorial. Dunlap Hollow (gold standard) uses light backgrounds.
- 2026-03-30 — Blog deferred: Madison Guide content will be built as static pages first (no CMS), then migrated to Sanity CMS in Phase 5 if needed. This avoids CMS complexity during MVP build.
- 2026-03-30 — Vercel deploy protocol: Per build-log.md error #1, MUST set Framework Preset → Next.js AND Root Directory → enchanted-madison in Vercel Dashboard BEFORE first deploy. Do NOT use Redeploy button after changing settings — push fresh commit from GitHub instead.

### Open Questions
- 2026-03-30 — Lodgify widget embed code: needs to be obtained from Angela & Marc's Lodgify account. Required for Phase 4 conversion flow. Owner: client.
- 2026-03-30 — Acuity Scheduling embed code: same — needs embed snippet from Angela's Acuity account. Owner: client.
- 2026-03-30 — Professional photography: current cottage listing uses AI-generated placeholders (initial-business-data.md §4a). Real photos critical for launch. Timeline?
- 2026-03-30 — Host story: no "why we built this" narrative exists on the current site (initial-business-data.md §7). About page content needs to come from Angela & Marc.
- 2026-03-30 — Opening date discrepancy: Velvet Buck listing says "April 2025" (outdated). Confirmed correct: May/June 2026 per initial-business-data.md §4b.

---

## Phase 1 — Design System & Brand Identity

### Task List
1. ✅ Install and configure Google Fonts in layout.tsx (Cormorant Garamond + Lato + Josefin Sans)
2. ✅ Build globals.css with all CSS custom properties from design-system.md
3. ✅ Configure Tailwind CSS 4 to reference CSS custom properties (no hardcoded values)
4. ✅ Build Button component (primary, secondary, ghost, ghost-light variants) — `/components/ui/Button.tsx`
5. ✅ Build Card components (StayCard + ExperienceCard) — `/components/ui/StayCard.tsx`, `/components/ui/ExperienceCard.tsx`
6. ✅ Build SiteHeader with transparent → solid scroll behavior + mobile slide-out menu — `/components/layout/SiteHeader.tsx`
7. ✅ Build SiteFooter with 4-col layout, links, contact, dark bg — `/components/layout/SiteFooter.tsx`
8. ✅ PageShell integration verified (SiteHeader + SiteFooter compose correctly)
9. ✅ Homepage replaced: hero placeholder, stays grid, experiences teaser, reviews, drive times, VIP CTA
10. ✅ Build passes: zero TypeScript errors. metadataBase added to layout.tsx.
11. ✅ Committed: `feat(design-system): implement brand tokens, typography, and core components` (f5a2ac5)

---

## Phase 6 — SEO, Schema & Analytics

### Status: ✅ Complete

### Task List
1. ✅ Installed `@vercel/analytics` — `<Analytics />` added to layout.tsx
2. ✅ Layout OG template fixed — `openGraph.title` now uses template so all pages inherit their page title in OG
3. ✅ Twitter card metadata added to layout
4. ✅ `sitemap.ts` — 14 routes with priority/changeFrequency, auto-generates from siteData.stays
5. ✅ `robots.ts` — allows all, disallows /api/, points to sitemap.xml
6. ✅ `opengraph-image.tsx` — branded dynamic OG image (deep green bg, gold accent, serif type)
7. ✅ Homepage — LodgingBusiness + VacationRental JSON-LD schema with address, geo, amenities, aggregateRating
8. ✅ `/stays/[slug]` — generateMetadata now includes `openGraph` with stay-specific title/description/url
9. ✅ `/about` — built with available copy (brand intro §1, values, review quote); host story pending client
10. ✅ Build verified: 22 pages, zero TS errors. `/sitemap.xml` and `/robots.txt` in build output.

---

## Phase 5 — Secondary Pages & Content

### Status: ✅ Complete

### Task List
1. ✅ `site.ts` — added `faq` array (4 categories, 14 Q&A) and `madisonGuide` object (5 attractions with tips)
2. ✅ `/packages` page — 5 add-on cards (icon, tag, description, price), 3-step checkout explainer, CTA
3. ✅ `/faq` page — native `<details>`/`<summary>` accordion, 4 grouped sections, FAQPage JSON-LD schema
4. ✅ `/madison-guide` page — dark hero with drive times, 5 attraction cards with tips, "more coming" section, TouristAttraction JSON-LD schema
5. ✅ Build verified: 20 pages, zero TypeScript errors

---

## Phase 2 — Site Architecture & Content Planning

### Status: ✅ Complete
Site map defined in Session 1 (15 routes). All routes listed in Site Architecture table above. No additional tasks — this phase was folded into Phase 0 planning work.

---

## Phase 3 — Core Pages Build

### Task List
1. ✅ `/stays` overview page — property grid, quick-stat bar, policies strip
2. ✅ `/stays/[slug]` dynamic stay pages (4 slugs pre-rendered via generateStaticParams)
   - enchanted-cottage, velvet-buck, bell-tent, campsite
   - All copy from initial-business-data.md §4
   - Lodgify embed placeholder (awaiting client embed code)
3. ✅ `/proposals` page — hero (dark), 3 packages with pricing, FAQ, Acuity embed placeholder
4. ✅ `/date-night` page — experience flow, 3 packages with pricing, Acuity embed placeholder
5. ✅ `/vip` page — react-hook-form + zod, $25 off incentive, 4 benefits, success state
   - Form submit currently mocked (800ms delay) — wire to email/SMS provider Phase 4
6. ⬜ Homepage — review current placeholder hero; upgrade to full production homepage
7. ✅ `/reviews` page — hero, 3 review cards (occasion labels, full quotes), aggregate rating badge, dark CTA, JSON-LD LodgingBusiness + Review schema
8. ✅ `/contact` page — two-column layout (contact info + form), react-hook-form + zod, success state, API route validates + logs (email via Resend deferred to Phase 5)
9. ⬜ `/about` page — waiting on host story copy from Angela & Marc (known blocker)
10. ✅ Build verified: 20 static/SSG/dynamic pages, zero TypeScript errors

**Discovered this phase:**
- Zod v4 renamed `errorMap` to `error` in schema params. Logged: build-log.md error #2, errors/zod-v4-errormap-rename.md

---

## Blog — Phase 5 Addition

### Status: ✅ Complete

### Task List
1. ✅ `/src/data/blog.ts` — BlogPost interface, ContentBlock union type (paragraph/heading2/heading3/quote/list/image), blogCategories array, 10 full editorial posts with brand-authentic copy
2. ✅ `/src/components/blog/PostCard.tsx` — server component; featured (dark horizontal card, 60/40 split) + standard (grid card, CSS hover lift) layouts
3. ✅ `/src/components/blog/BlogContent.tsx` — client component; category filter pill buttons, featured post when "All", CSS opacity/translate animation on filter change
4. ✅ `/src/app/blog/page.tsx` — dark hero (Fireflies + GodRays), WaveDivider, BlogContent, VIP CTA section; metadata set
5. ✅ `/src/app/blog/[slug]/page.tsx` — awaits params Promise (Next.js 16 breaking change), ContentBlock renderer for all 6 block types, sticky sidebar (related articles + VIP box), related articles strip at bottom
6. ✅ `site.ts` — Journal link added to nav.links and footer.links at position after Proposals
7. ✅ Build verified: 33 pages (was 22), zero TypeScript errors
8. ✅ Committed: feat(blog): build blog architecture with 10 editorial articles (18af818)

**Custom additions (not in Phase 5 original scope):**
- Full blog architecture with editorial CMS-quality content
- BlogContent client component with category filtering
- All 10 posts target SEO keyphrases from market-intelligence.md §8 content pillars (romantic getaway Indiana, Clifty Falls State Park, anniversary getaway Indianapolis, things to do Madison Indiana, southern Indiana travel)

---

## Session Log

### Session 8 — 2026-03-31
**Completed:**
- **Nav redesign** — SiteHeader rebuilt with primary links (Stays/Experiences/Proposals) always visible + "More ▾" AnimatePresence dropdown (Journal/Shop/Madison Guide/About/Pricing); mobile overlay keeps full hierarchy with display-type primary links + smaller mono secondary links; site.ts nav split into `links[]` + `dropdown.{label, items[]}`
- **Interactive booking calendar** — `BookingCalendar.tsx` replaces "coming soon" placeholder on `/date-night#book`; full month grid with seeded availability dots (available/limited/booked), step flow: date → time slots → package picker → success state; AnimatePresence directional slide between steps; split layout on desktop
- **Optimus pricing page** (`/optimus-pricing`) — internal sales tool (robots noindex, delete before launch); 3-tier cards ($1,500/$3,000/$5,500), feature comparison table, interactive ROI calculator, "you're looking at the Pro package" proof section
- **ROI calculator fully animated** — `useCountUp` hook (quartic ease-out rAF), `AnimatePresence popLayout` per-card, giant ROI % with scale-pop on change, animated progress bar, 12-dot payback timeline with staggered fill, revenue lift card
- **Pricing added to More dropdown** — "Pricing ⚑" as last item in nav dropdown for easy demo access
- **Packages page complete rebuild** — dark hero (Fireflies + GodRays + Embers + WaveDivider), 5 AI-generated images via fal.ai/flux/dev, featured horizontal card (Ultimate Romance), 4-card grid with 16:9 images/hover zoom/lift effect, How It Works step cards, dark CTA footer
- **5 addon images generated** — `public/images/addons/`: classic-romance, ultimate-romance, outdoor-movie, smores-skillet, picnic-and-ride (all fal-ai/flux/dev, landscape_16_9)
- `scripts/generate-addon-images.ts` — targeted image generation script for addons
- `AddonCard.tsx` — thin client component wrapper to isolate hover state from server page component
- Build: 39 pages, zero TypeScript errors throughout
- All commits pushed to origin/main

**Decisions Made:**
- **Page quality standard established:** Every page must match the proposals/date-night level — dark hero with particle animations (Fireflies/GodRays/Embers), WaveDivider transitions, AI-generated images in cards, hover lift effects, dark CTA footer. See CLAUDE.md Page Quality Standard rule.
- `/packages` page was identified as the worst page on the site; rebuilt as the reference implementation of the new standard
- BookingCalendar uses seeded deterministic availability (no backend) — Phase 4 will swap success handler for Acuity embed
- Optimus pricing page is a demo/sales tool only — must be deleted before client launch

**Known Remaining Page Gaps (need quality upgrade):**
- `/reviews` — no hero image, flat card layout; needs dark hero + animation treatment
- `/faq` — light, bare; needs visual hierarchy upgrade
- `/contact` — functional but plain; needs image + atmosphere
- `/madison-guide` — good bones but attraction cards need images (generate via fal.ai)
- `/about` — blocked on client copy, but layout needs full brand treatment when copy arrives
- `/vip` — hero is plain; needs dark animated hero treatment

**Next Session Starts At:**
Upgrade remaining pages to quality standard (reviews, faq, contact, madison-guide)
OR Phase 4 — Conversion Flow Integration (pending Lodgify + Acuity embed codes from client)
OR Phase 7 — Performance, QA & Launch Prep

---

### Session 10 — 2026-04-01
**Completed:**
- **Phase 4 integration architecture** — full wiring for Lodgify + Acuity, gracefully degrades when embed codes not yet provided
- **`LodgifyWidget.tsx`** — "use client" iframe wrapper for stays pages. When `lodgifyWidgets[slug]` is empty: shows placeholder + "Check current availability →" link. When populated: renders Lodgify iframe inline (no off-domain redirect).
- **`AcuityModal.tsx`** — "use client" Framer Motion slide-up modal. When `acuityUrl` is empty: shows confirmation summary + contact info (preserves demo experience). When `acuityUrl` set: loads Acuity iframe pre-filled with selected date via `?date=YYYY-MM-DD` URL param.
- **`BookingCalendar.tsx` updated** — "Request This Escape" now opens `AcuityModal` instead of inline success step. `success` step removed; modal handles both demo and production mode.
- **`stays/[slug]/page.tsx` updated** — placeholder div replaced with `<LodgifyWidget>`. Fallback CTA button hidden once widget is active.
- **`site.ts` updated** — `booking` object expanded: `lodgifyWidgets` map (per-slug keys, empty until client provides), `acuityUrl` comment updated with exact format + where Angela finds it.
- **`CLIENT-CONTRACT.md` created** — full Pro Package web design agreement saved to project root. Includes: scope of work (pages, conversion features, tech build, integrations, exclusions), payment terms, revisions, timeline, client content responsibilities, ownership, hosting, data/privacy, cancellation, liability, signature blocks.
- Build: 41 pages, zero TypeScript errors. Committed + pushed.

**Phase 4 Integration Instructions (for when Angela provides embed codes):**

*Lodgify (stays):*
1. Angela goes to Lodgify dashboard → each property → Widget/Embed → copy the URL
2. In `src/data/site.ts`, fill in `booking.lodgifyWidgets` — one URL per slug
3. Push. LodgifyWidget auto-activates; fallback CTA hides.

*Acuity (experiences):*
1. Angela goes to Acuity dashboard → Scheduling Page → Share → copy the scheduler URL
2. In `src/data/site.ts`, set `booking.acuityUrl` to that URL (format: `https://app.acuityscheduling.com/schedule.php?owner=XXXX&appointmentType=XXXX`)
3. Push. AcuityModal auto-activates; Acuity iframe opens pre-filled with user's selected date.

**Decisions Made:**
- Lodgify = overnight stays. Acuity = hourly experiences. Two separate systems, Angela already uses both.
- "Embed codes" (not "API keys") is the correct terminology — just URLs from each dashboard, no dev credentials needed
- Demo calendar UX preserved: the branded step-flow remains intact; only the final confirmation step changes to open the real Acuity scheduler in a modal
- Per-stay widget URLs (not a single Lodgify URL) because each property has its own widget config in Lodgify

**Contract notes:**
- `CLIENT-CONTRACT.md` saved at project root (`c:/Projects/Enchanted Madison/CLIENT-CONTRACT.md`)
- Scope accurately reflects what's built: liability waivers ✓, all-inclusive bundles listed as out-of-scope addition ✓, Lodgify/Acuity correctly described ✓
- "Embed codes" language used throughout (clearer than "API codes" for a non-technical client)

---

### Session 9 — 2026-03-31
**Completed:**
- **`/find-your-escape` dedicated quiz page** — full dark page with hot-tub-escape.webp at 18% opacity, Fireflies + GodRays + Embers, minimal header (logo + Browse All Stays link), hero heading/subheading from site.ts
- **`FindYourEscapeWizard.tsx`** — 4 quiz questions (occasion/experience/priority/timeline) + contact step (name/email/optional note) + success result card; directional AnimatePresence slide transitions; OptionCard with checkmark radio style; `getResult(answers)` maps answer combinations to 6 recommendation keys; progress bar animates 0→100%
- **`POST /api/quiz`** — validates name + email, sends owner notification + personalized auto-reply via Resend, gracefully degrades if no RESEND_API_KEY
- **ExperienceFinderSection rewrite** — converted from inline interactive quiz to atmospheric teaser section (hot-tub-escape.webp background, 3 decorative question pills, single CTA → /find-your-escape)
- **ExperienceFinderTrigger href fix** — updated from `/#find-your-escape` to `/find-your-escape` (direct page link)
- **Nav updated** — "Find My Escape" added as first item in More dropdown; homepage hero secondary CTA href fixed from `/#find-your-escape` to `/find-your-escape`
- Build: 41 pages, zero TypeScript errors. Committed + pushed (296c08d).

**Decisions Made:**
- Quiz as dedicated page (not inline) creates better focus, enables full atmospheric treatment, and makes the URL shareable + linkable from nav
- Contact capture (name + email + note) on quiz enables personalized lead nurturing via Resend auto-reply from angela@enchantedmadison.com
- Result routes to one of 6 keys: date-night, proposals, velvet-buck, enchanted-cottage, cottage-extended, stays-overview

**Next Session Starts At:**
Upgrade remaining pages to quality standard (reviews, faq, contact, madison-guide)
OR Phase 4 — Conversion Flow Integration (pending Lodgify + Acuity embed codes from client)

**Blockers (unchanged):**
- Lodgify embed code — pending client
- Acuity embed code — pending client
- Printful store ID + real sync product IDs — pending client
- RESEND_API_KEY + verified Resend domain — pending setup
- Professional photography (replace AI placeholders before launch)

---

### Session 5 — 2026-03-31
**Completed:**
- Built complete shop architecture: 18 files, 1,937 insertions
- `/src/data/shop.ts` — 10 products (4 gift cards, 1 digital guide, 3 drinkware/apparel Printful POD)
- `/src/lib/cart.tsx` — CartContext with localStorage hydration, addItem/removeItem/updateQuantity
- `/src/lib/printful.ts` — Printful API client with smart variant name parser (size/color detection)
- `/src/lib/printful-seeded-products.json` — fallback data; no API key required for build
- `/api/printful/products` — live API with seeded fallback
- `/api/printful/variants/[id]` — mock variants when no API key; color hex map
- `/api/stripe/checkout` — Stripe Checkout Session creation (Stripe 21 / 2026-03-25.dahlia API)
- `/api/stripe/webhook` — checkout.session.completed handler → Printful order + Resend owner alert
- `CartDrawer.tsx` — slide-in drawer, AnimatePresence, quantity controls, Stripe redirect
- `ProductCard.tsx` — variant picker (color swatches + size chips), skeleton loading, add to cart
- `ShopContent.tsx` — category filter pills, product grid, success banner (useSearchParams + Suspense)
- `/shop/page.tsx` — dark hero (Fireflies + GodRays), WaveDivider, ShopContent, gift card CTA
- `Providers.tsx` — CartProvider wrapper for layout.tsx
- `layout.tsx` — wrapped children with `<Providers>`
- `SiteHeader.tsx` — cart icon with count badge (desktop + mobile); CartDrawer rendered here
- `site.ts` — Shop added to nav.links (after Journal) and footer.links
- Build: 37 pages, zero TypeScript errors
- Committed: feat(shop): build shop architecture with cart, Stripe checkout, and Printful POD (a5c8f49)

**Discovered:**
- Stripe 21.0.1 requires API version `2026-03-25.dahlia` (not `2025-04-30.basil`)
- Stripe 21 moved shipping address to `session.collected_information.shipping_details` (previously `session.shipping_details`)
- Both are auto-fixed deviations (Rule 1 — version mismatch discovered at type-check time)

**Decisions Made:**
- Prior "REMOVE Shop" decision (Session 1) overridden by explicit client request in Session 5
- Printful product IDs (100001–100005) are placeholder TODO stubs — client must replace with real IDs from their Printful store before shop goes live
- Shop gracefully degrades: no Stripe key → alert-to-contact flow; no Printful key → mock variants served
- CartDrawer rendered inside SiteHeader (not layout) — cart is always available sitewide without layout refactor

**Known Stubs (must resolve before shop launch):**
- Printful sync product IDs (100001–100005) in shop.ts and printful-seeded-products.json — replace with client's real Printful store IDs
- Product images `/images/shop/*.jpg` — placeholder paths; real product photography/mockups needed
- `storeId: 0` in printful-seeded-products.json — replace with client's Printful store ID
- Resend: `from: "orders@enchantedmadison.com"` requires verified domain in Resend dashboard
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `PRINTFUL_API_KEY`, `RESEND_API_KEY` env vars needed in Vercel

**Next Session Starts At:**
Phase 4 — Conversion Flow Integration (Lodgify + Acuity embed codes from client)
OR Phase 7 — Performance, QA & Launch Prep

**Blockers (unchanged):**
- Lodgify embed code (Phase 4) — pending client
- Acuity embed code (Phase 4) — pending client
- Professional photography — pending client
- Printful store ID + real sync product IDs — pending client

---

### Session 7 — 2026-03-31
**Completed:**
- Generated 12 AI images via fal.ai Flux (4 accommodations, 3 experiences, 5 blog thumbnails) — scripts/generate-images.ts
- Wired images sitewide: StayCard (homepage + /stays), stays/[slug] hero (next/image, priority), date-night hero (background at 0.28 opacity), proposals hero (same), PostCard (both featured + standard variants)
- blog.ts: 5 featuredImage paths updated to generated .webp files
- next.config.ts: AVIF/WebP formats, deviceSizes aligned to design system, 7-day TTL, compress: true
- Discovered: BookingCalendar component existed from prior session (not documented in Session 6 progress)
- Build: 39 pages, zero TypeScript errors
- Committed: feat(images): wire AI-generated images across all pages + Phase 7 prep (afdfb9a)

**Discovered:**
- BookingCalendar exists at src/components/ui/BookingCalendar.tsx — interactive date/time/package picker with seeded availability; already wired into date-night page at #book anchor. Not documented in Session 6 log.

**Next Session Starts At:**
Phase 7 — Performance, QA & Launch Prep (remaining tasks):
- Lighthouse audit + Core Web Vitals optimization
- Mobile viewport QA across all pages
- Push to Vercel + verify deploy
- SEO audit: verify sitemap.xml, robots.txt, schema markup in prod
- Remaining client blockers: Lodgify embed, Acuity embed, Printful store IDs, RESEND_API_KEY

**Blockers (unchanged):**
- Lodgify embed code — pending client
- Acuity embed code — pending client
- Printful store ID + real sync product IDs — pending client
- RESEND_API_KEY + verified Resend domain — pending setup
- Professional photography (replace AI placeholders before launch)

---

### Session 6 — 2026-03-31
**Completed:**
- Built 3-step Proposal Planner form + Experience Finder quiz/funnel: 8 new files, 5 modified
- `/src/components/forms/ProposalPlannerForm.tsx` — 3-step wizard, AnimatePresence directional slide transitions, per-step validation via RHF `trigger()`, success celebration state
- `/src/components/forms/FormStepIndicator.tsx` — numbered circles (01/02/03) + Framer Motion animated connector lines, labels collapse on mobile
- `/src/components/forms/FormField.tsx` — label + input/textarea + error wrapper
- `/src/components/forms/BrandRadioGroup.tsx` — card-style radio options, checked state via `watch()`, brand-colored selection
- `/src/components/forms/BrandCheckboxGroup.tsx` — card-style checkboxes, checked state via array includes check
- `/src/components/sections/ExperienceFinderSection.tsx` — 3-question funnel, auto-advance 180ms delay, 6 routing outcomes, skip logic for Q1 terminal answers and Q2 few-hours-tonight
- `/src/components/ui/ExperienceFinderTrigger.tsx` — lightweight server component strip linking to `/#find-your-escape`
- `/src/app/api/proposals/route.ts` — Zod validation → 422; Resend owner notification + auto-reply; graceful degradation if no API key
- `site.ts` — added `proposalPlanner` key (3 steps, all option arrays, success copy) and `experienceFinder` key (3 questions, 6 result objects, trigger copy per page)
- `proposals/page.tsx` — replaced #book placeholder + Google Form with `<ProposalPlannerForm />`, added ExperienceFinderTrigger after trust bar
- `page.tsx` (homepage) — ExperienceFinderSection inserted after Experiences Teaser, before Why WaveDivider; section `id="find-your-escape"`
- `stays/page.tsx` — ExperienceFinderTrigger added before stays grid
- `date-night/page.tsx` — ExperienceFinderTrigger added after hero WaveDivider
- Build: 38 pages, zero TypeScript errors
- Committed: feat(interactive): add 3-step proposal planner form and experience finder quiz (12656dd)
- Pushed to origin/main

**Discovered:**
- Zod v4 + @hookform/resolvers v5.2.2: `z.array(z.string()).default([])` creates input/output type split; fix is `z.input<typeof schema>` for the form type + `zodResolver(schema) as Resolver<FormData>` cast
- Logged to build-log.md error #3

**Decisions Made:**
- Experience Finder result routing: romantic-evening/planning-to-propose/just-exploring skip to result immediately (no Q2/Q3); few-hours-tonight skips Q3 → routes to date-night
- ExperienceFinderTrigger links to `/#find-your-escape` (homepage anchor) — acceptable UX since experience finder lives on homepage; no inter-page duplication
- Proposal API email: graceful degradation if `RESEND_API_KEY` not set (console log, return 200) — form still submits cleanly in dev without env var

**Known Stubs (must resolve before proposals go live):**
- `RESEND_API_KEY` env var needed in Vercel for proposal emails to actually send
- `proposals@enchantedmadison.com` — requires verified domain in Resend dashboard; fallback `onboarding@resend.dev` used for dev

**Next Session Starts At:**
Phase 7 — Performance, QA & Launch Prep
OR Phase 4 — Conversion Flow Integration (Lodgify + Acuity embed codes from client)

**Blockers (unchanged):**
- Lodgify embed code (Phase 4) — pending client
- Acuity embed code (Phase 4) — pending client
- Professional photography — pending client
- Printful store ID + real sync product IDs — pending client
- `RESEND_API_KEY` + verified Resend domain — pending setup

---

### Session 4 — 2026-03-31
**Completed:**
- Built full blog architecture: data layer, components, pages (6 files, 1,713 insertions)
- `/src/data/blog.ts` — 10 editorial posts, full body content, typed ContentBlock union
- `/src/components/blog/PostCard.tsx` — featured card (dark, horizontal) + standard grid card
- `/src/components/blog/BlogContent.tsx` — client category filter with CSS animation
- `/src/app/blog/page.tsx` — dark hero with Fireflies/GodRays, BlogContent, VIP CTA
- `/src/app/blog/[slug]/page.tsx` — params awaited correctly per Next.js 16 breaking change
- `site.ts` — Journal added to nav and footer link arrays
- Build: 33 pages, zero TypeScript errors
- Committed: feat(blog): build blog architecture with 10 editorial articles (18af818)

**Discovered:**
- next/image not needed for blog hero images (all are placeholder paths) — used aspect-ratio divs per anti-pattern #4 (no stock/AI imagery before real photos)

**Decisions Made:**
- Blog nav label is "Journal" (matches "The Enchanted Journal" editorial brand voice, not generic "Blog")
- PostCard image areas are warm cream placeholder divs — ready to swap for next/image when real photography arrives
- BlogContent animation uses CSS keyframe (not Framer Motion) — appropriate for a filter state change, not a scroll-trigger

**Next Session Starts At:**
Phase 4 — Conversion Flow Integration (pending Lodgify + Acuity embed codes from client)
OR Phase 7 — Performance, QA & Launch Prep

**Blockers:**
- Lodgify embed code (Phase 4) — pending client
- Acuity embed code (Phase 4) — pending client
- Professional photography — pending client (affects all placeholder image divs across the site)

---

### Session 1 — 2026-03-30
**Completed:**
- /new-client workflow executed: Phases 0–4 verified (all source files present and filled)
- Phase 5 (/prime) executed: CLAUDE.md filled, progress.md created, design-system.md created, Next.js project scaffolded
- vercel.json created at repo root with rootDirectory: "enchanted-madison"

**Discovered:**
- Previous enchanted-madison/ build was deleted (git shows 30+ deleted files). This is a fresh scaffold.
- build-log.md contains Vercel subdirectory 404 fix (error #1) — critical to follow before first deploy
- All content (accommodations, experiences, reviews, pricing) is fully documented in initial-business-data.md
- Market Intelligence identifies zero local glamping competition — category creation opportunity

**Decisions Made:**
- Light theme (warm cream) — not dark theme
- Blog deferred to Phase 5+ (static Madison Guide pages first)
- Shop, Instagram feed, ROI Calculator removed from build
- Booking engines: Lodgify (stays) + Acuity Scheduling (experiences) — embed on-domain, no redirects

**Next Session Starts At:**
Phase 1 — Design System Implementation. Run /prime to reload context, then execute Phase 1 task list above.

**Blockers:**
- Lodgify embed code needed from client (Phase 4)
- Acuity Scheduling embed code needed from client (Phase 4)
- Professional photography needed before launch (Phase 7)
- Host story copy needed from Angela & Marc (Phase 3 — About page)

### Session 3 — 2026-03-30
**Completed:**
- Built `/stays` overview page (full content from initial-business-data.md §4)
- Built `/stays/[slug]` dynamic pages — all 4 slugs pre-rendered (enchanted-cottage, velvet-buck, bell-tent, campsite)
- Built `/proposals` page — 3 tiered packages ($249/$399/$599), FAQ, Acuity embed placeholder
- Built `/date-night` page — 3 tiered packages ($119/$149/$199), experience flow, Acuity embed placeholder
- Built `/vip` page — react-hook-form + zod form, $25 incentive, 4 benefits, success state
- Committed: feat(pages): build stays, proposals, date-night, and vip pages (21de6c9)

**Discovered:**
- Next.js version is 16.2.1 / React 19.2.4 — AGENTS.md warns of breaking changes from prior versions
  - `params` in generateMetadata and page components is now `Promise<{ slug: string }>` — must `await params` before accessing
  - Already implemented correctly in stays/[slug]/page.tsx
- About, FAQ, Reviews, Contact, Packages, Madison Guide are scaffolded as TODO stubs (Phase 5)

**Decisions Made:**
- VIP form submit uses mock delay (no real API). Wire to Klaviyo in Phase 4.
- Lodgify and Acuity embeds are comment-placeholder only. Embed codes pending client.

**Next Session Starts At:**
Phase 3 completion: homepage production upgrade + reviews + contact pages.
Then Phase 4 — Conversion Flow Integration (Lodgify embed, Acuity embed, VIP form wire-up).

**Blockers:**
- Lodgify embed code (Phase 4) — pending client
- Acuity embed code (Phase 4) — pending client
- Host story copy for /about — pending Angela & Marc

---

### Session 2 — 2026-03-30
**Completed:**
- /prime executed: all 8 files loaded, full session debrief delivered
- Phase 1 fully implemented: Button, StayCard, ExperienceCard, SiteHeader, SiteFooter, homepage
- Build passes: zero TypeScript errors, 16 static pages generated
- Committed: feat(design-system): implement brand tokens, typography, and core components (f5a2ac5)

**Discovered:**
- ui/ components directory was empty — Button and Card components were Phase 1 stubs
- SiteHeader and SiteFooter were TODO stubs — implemented with full design-system.md spec
- Homepage was still the default Next.js scaffold — replaced with full branded homepage
- metadataBase warning from layout.tsx — fixed with enchantedmadison.com base URL
- ScaleIn, FadeUp, StaggerContainer animations are fully implemented from Session 1

**Decisions Made:**
- Homepage hero uses bg-dark as placeholder (no orbs/particles per anti-pattern #13) until real photography arrives
- ExperienceCard uses secondary (rose) CTA per design-system.md §5 to distinguish from stay CTAs
- SiteFooter uses hardcoded link groups (not from site.ts footer.links) for better structural control — flagged for refactor if needed

**Next Session Starts At:**
Phase 2 — Site Architecture & Content Planning. Run /prime to reload context.
Task: Build individual /stays/[slug] property pages with full copy from initial-business-data.md §4.

**Blockers:**
- Lodgify embed code (Phase 4) — pending client
- Acuity Scheduling embed code (Phase 4) — pending client
- Professional photography (Phase 7) — pending client
- Host story copy for /about (Phase 3) — pending Angela & Marc
