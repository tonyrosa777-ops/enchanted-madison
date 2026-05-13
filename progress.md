# progress.md — The Enchanted Collective Website Build

**Project:** enchantedmadison.com — new website build
**Client:** The Enchanted Collective | Madison, Indiana
**Business Type:** Luxury glamping and romantic experience property
**Launch Target:** June 2026
**Last Updated:** 2026-05-04 (Session 14)
**Current Phase:** Session 14 — Madison Guide real photos + Hanover→Broadway Fountain swap
**Package Selected:** Pro ($3,000)

---

## Client Package — Pro ($3,000) — CONTRACTED DELIVERABLES

Angela (owner) selected the **Pro** package. Everything listed below is what we are contractually required to deliver. This is the single source of truth for scope.

### Inherited from Starter
- [ ] Full brand identity & design system
- [ ] Up to 6 core pages (Home, Stays, About, FAQ, Contact, Reviews)
- [ ] Mobile-first responsive design
- [ ] SEO foundations — title tags, meta, OG, schema markup
- [ ] VIP email capture form with $25 off incentive
- [ ] Vercel deployment + domain connection

### Pro-Specific Deliverables
- [ ] Experience Finder — 3-question funnel routes visitors to the right booking path
- [ ] Journal / Blog — 10 editorial SEO articles written and published
- [ ] Proposals page — 3-tier packages + branded 3-step inquiry form with email notifications
- [ ] Date Night / Experiences pages with Acuity Scheduling embedded on-domain
- [ ] Stay pages with Little Hotelier booking widget embedded (no redirect)
- [ ] Madison Guide local content hub
- [ ] Add-Ons & Packages upsell page
- [ ] 60-day post-launch support

### NOT Included (Premium-Only — Removed from Build)
- ~~Shop / e-commerce (gift cards, merch, digital downloads)~~
- ~~Persistent cart with localStorage~~
- ~~Stripe Checkout integration~~
- ~~Printful print-on-demand fulfillment~~
- ~~Automated order alerts + confirmation emails~~
- ~~Manual fulfillment path for digital products~~
- ~~90-day post-launch support~~

---

## Client Onboarding — Access & Accounts Needed from Angela

Everything below is required before we can launch. Nothing on this list is optional.

### 1. Domain Host Account — Remote Access
- [ ] **What:** Login credentials or shared access to wherever enchantedmadison.com is registered (GoDaddy, Namecheap, Cloudflare, etc.)
- [ ] **Why:** We need to point DNS to Vercel for deployment. Requires adding A/CNAME records.
- [ ] **Action for Angela:** Either share login or add us as an authorized user on the account.

### 2. Resend — Email Delivery Service
- [ ] **What:** We create a Resend account (resend.com) to power all transactional emails — proposal inquiry notifications, quiz auto-replies, contact form submissions
- [ ] **Why:** Every form on the site needs to send emails. Resend is the service that delivers them.
- [ ] **Action for Angela:** We'll set this up. She needs to verify the domain (enchantedmadison.com) by adding DNS records — which is why we need domain access first.
- [ ] **Deliverable:** `RESEND_API_KEY` env var set in Vercel, domain verified, sending from `angela@enchantedmadison.com`

### 3. Little Hotelier — Overnight Stay Booking Widget
- [ ] **What:** Embed URL for each property's booking widget from Angela's Little Hotelier dashboard
- [ ] **Why:** The stay pages (`/stays/enchanted-cottage`, `/stays/velvet-buck`, etc.) have a `LodgifyWidget` component ready to render the booking calendar inline. Currently showing a placeholder until we get the real URLs.
- [ ] **Action for Angela:** Go to Little Hotelier dashboard → each property → Widget/Embed → copy the URL. One URL per accommodation.
- [ ] **We need URLs for:** Enchanted Cottage, Velvet Buck, Bell Tent, Curated Campsite (BYOT)

### 4. Acuity Scheduling — Experience Booking
- [ ] **What:** Scheduler embed URL from Angela's Acuity account (yes, it's like Calendly — she already uses it)
- [ ] **Why:** The Date Night, Proposals, and Hot Tub Escape booking flows all end with an `AcuityModal` that loads Acuity's scheduler in a branded modal. Currently in demo mode until we get the real URL.
- [ ] **Action for Angela:** Go to Acuity dashboard → Scheduling Page → Share → copy the scheduler URL
- [ ] **Format:** `https://app.acuityscheduling.com/schedule.php?owner=XXXX&appointmentType=XXXX`

### 5. Professional Photography (Before Launch)
- [ ] **What:** Real photos of the property, accommodations, hot tubs, grounds, experiences
- [ ] **Why:** All current images are AI-generated placeholders. They look good for now but real photography is non-negotiable before launch for trust and conversion.
- [ ] **Action for Angela:** Schedule a professional shoot or provide existing high-quality photos

### 6. About Page — Host Story Copy
- [ ] **What:** Angela & Marc's personal story — why they built The Enchanted Collective
- [ ] **Why:** The `/about` page layout is built and ready but has placeholder content. The host story is a key trust-builder for boutique hospitality.
- [ ] **Action for Angela:** Write or voice-record their story. We'll polish it.

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
| `/shop` | ~~The Enchanted Collective Shop~~ | ❌ Removed (Premium-only, not in Pro package) |

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
| Shop (Stripe + Printful) | **REMOVED** (Session 11 — client chose Pro package, shop is Premium-only) | Was built in Session 5, removed in Session 11. Gift cards, merch, Stripe Checkout, Printful POD all deleted. |
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

### Session 16 — 2026-05-13 — Playwright verification pass + Pattern #51 systemic fix + stay-page polish
**Context:** Live Playwright walkthrough of Session 15's revisions surfaced several bugs that the static typecheck didn't catch. This session addresses all of them, plus a wave of polish requests from Angela.

**Bugs fixed (in order surfaced):**

1. **Hero top padding insufficient for fixed nav on `lg`** — every page hero used static `pt-32` (128px) but the SiteHeader is `h-28` (112px) on `lg`, leaving only 16px of breathing room. Eyebrow text was rendering flush against the navbar. Bulk fix: `pt-32 pb-` → `pt-32 sm:pt-36 lg:pt-40 pb-` across 15 hero sections. Verified gap went 15px → 47px on `/about`. **Logged as Optimus Error #59.**

2. **Homepage H1 oversized + CTAs below fold** — clamp was sized for the old 28-char "Where Romance Meets the Wild" headline. Angela's new 95-char SEO H1 was rendering at 117px and wrapping to 6+ lines, pushing CTAs off-screen. Retuned clamp to `clamp(30px, min(4.2vw, 6.5vh), 60px)`. Then bumped again on wide desktop (1920+) to `clamp(30px, min(5vw, 9vh), 100px)` so the H1 fills the viewport meaningfully. **Logged as Optimus Error #60.**

3. **Homepage section alternation regression** — Session 15's inserted tagline section between the trust strip and the stays grid created 4 consecutive cream sections, breaking Pattern #8. Flipped the tagline section to `bg-dark` + Fireflies + GodRays. **Logged as Optimus Error #61.**

4. **Homepage showing all 5 stays** — should be 3 + "View All Stays" CTA per Angela's revisions. Switched `siteData.stays.map` to `.slice(0, 3)` and updated the CTA label to "View All N Stays" (auto-syncs with future stays).

5. **Site-wide flat-cream-body monotony** — audited every page; almost every content page had a dark hero followed by 3–6 cream body sections in a row (worst case: `/about` with 6 cream-in-a-row). Applied **Optimus Pattern #51 — Luxury Gradient Backgrounds systemically** via a single `globals.css` edit. Every `<section style={{ background: "var(--bg-*)" }}>` now auto-gets a brass-tinted breathing-orb gradient via `::before`, with three cream variants + three dark variants cycled through `:nth-of-type` modulo selectors so adjacent same-bg sections have distinct orb positions + drift directions + durations. **Added Optimus Pattern #70 for this implementation approach** (CSS attribute selectors as the auto-applied mechanism — no per-section refactor needed).

6. **`/stays/[slug]` 5-cream-in-a-row** — same flat-body issue on the per-property template. Made the carousel section + add-ons teaser DARK so the rhythm is now `c-D-c-D-c` (hero → carousel → main → add-ons → related). Fixes all 5 stay slugs at once via the template.

7. **Cottage hero photo redundant with carousel** — removed the giant 16:7 hero image above the carousel. Carousel is now the primary visual.

8. **Cottage gallery missing 2 photos** — `Entrance.jpg` was integrated to disk but never wired into the gallery array; `EC Swing.png` was being silently SKIPped because the integrate script was looking for the old filename `Swing  at EC.png` (double space). Both added; cottage gallery now 10 photos (every EC-labeled source photo + Entrance).

9. **Photo gallery sideways orientation (EXIF)** — phone photos render rotated 90° because sharp drops EXIF metadata on webp output without applying the Orientation tag first. Added `.rotate()` to the sharp pipeline (reads EXIF, applies rotation, strips tag). Bedroom photo went from sideways-landscape to correct portrait. **Logged as Optimus Error #62.**

10. **Carousel cropping portrait photos** — slots were `16:10` with `object-cover`, cropping top/bottom of portrait shots. Switched to `object-contain` + subtle translucent backdrop so portrait photos show in full with letterbox bars that blend into the dark section.

**Photo remap (per Angela's source-photo filenames):**
- All `EC ___` + `Entrance.jpg` + `EC Swing.png` → Enchanted Cottage gallery (10 photos)
- All `Glamping ___` + `Tent Site with tent` → Bell Tent Site gallery (4 photos after Enhanced bedroom moved)
- `Tent Site Roasting Marshmallows` + `Tent Site with tent` → BYO Tent Site gallery (2 photos)
- `Enhanced bedroom for glamping.png` → Velvet Buck gallery (per Angela 2026-05-13: filename contains "glamping," fits VB's luxury-glamping identity)
- All previous `Glamping ___ → velvet-buck` mappings REMOVED (Angela wanted those on the tent stays instead)

**New fal.ai-generated photos (12 images via fal-ai/flux/dev, ~$0.30):**
- Velvet Buck: hero + 4 gallery photos (exterior / hot-tub / lounge / firepit) — warm-twilight forest glamping mood. Bedroom is now the real "Enhanced bedroom" photo, not fal.ai.
- Starlit Buck: hero + 5 gallery photos (exterior / bedroom / hot-tub / firepit / path) — deep-night Milky Way mood, distinct from VB.
- Script: `scripts/generate-velvet-starlit-images.ts` (non-interactive, can re-run anytime).

**/date-night double-pick friction removed (this session):**
Angela's revisions doc had a friction point about users picking date/time twice — once on a custom picker, then again on Acuity. Session 15 missed it. Removed:
- `BookingCalendar` import + component usage (custom date picker)
- The entire "Pick Your Date and Package" section
Replaced with a dark final-CTA section + a single "Book Your Hot Tub Escape" button that links directly to `siteData.booking.acuityUrl` (opens Acuity scheduler in a new tab). Hero "Book Now" CTA + each package card's "Book This Escape" button also re-routed to Acuity directly. Users now pick once on Acuity instead of twice. Pattern reference: Optimus Pattern #53 (Collaborative Insights) — same friction class.

**Operating principle: photo source filenames need rename pass**
Angela's source-photo filenames mix "EC," "Glamping," "Tent Site," "Enhanced," and "Entrance" prefixes — the inconsistency made the per-stay assignment ambiguous (e.g., "Enhanced bedroom for glamping" fits VB better than Bell Tent despite "glamping" being in the name). Pre-launch we should rename every source-photo file to a stay-prefix convention:
- `cottage-hot-tub.jpg`, `cottage-bedroom.jpg`, `cottage-swing.jpg`, etc.
- `bell-tent-tent.png`, `bell-tent-bathroom.png`, etc.
- `byo-tent-marshmallows.png`, `byo-tent-tent.png`
- `velvet-buck-bedroom.png` (the Enhanced one)
- `starlit-buck-*.jpg` (when real photos arrive)
- `hot-tub-escape-sunrise.png`, `hot-tub-escape-brighter.png`
- `proposal-christmas.png`
- `addon-outdoor-movie.png`
- `madison-guide-{lanier,downtown,broadway-fountain}.jpg` (these are already correct via subfolder)
Once renamed, update the integrate-angela-photos.mjs JOBS table to match. Future photo drops follow the new convention. **Tracked here as a pre-launch TODO.**

**Other items tracked here for completeness:**
- `BookingCalendar.tsx` component file remains in the repo but is now unused. Kept because it's a working component that could be repurposed (e.g., a pre-launch demo on a marketing landing page) — flagged for deletion if still unused at launch.
- `Entrance.png` (PNG duplicate of `Entrance.jpg`) — reference only, not in any mapping.
- "Swing  at EC.png" (double-space filename) — was the legacy filename; user renamed to `EC Swing.png` and integrate script updated accordingly.
- ANGELA-PHOTOS.md needs a refresh to reflect this session's remap.

**Commits this session (highlights):**
- `81159f2` fix(layout): pt-32 → responsive pt scale across 15 heroes
- `bd7ee5f` fix(homepage): H1 size + section alternation + 3-card stays grid
- `65a0b4c` feat(visual): Pattern #51 luxury-gradient backgrounds — site-wide via globals.css
- `0a75110` fix(hero): scale H1 + subheadline + typewriter on wide desktops
- `79aafa5` fix(stays): remove giant hero image, carousel is now the primary visual
- `37a0bf5` fix(photos): honor EXIF orientation in sharp conversion script
- `9409169` feat(stays): photo remap per Angela + new fal.ai Velvet/Starlit Buck galleries + c-D-c-D-c alternation
- `3a9547d` fix(cottage): add 2 missing EC photos to gallery — Swing + Entrance
- `9be784f` fix(gallery): object-contain so portrait photos aren't cropped
- `3688c96` fix(stays): move 'Enhanced bedroom for glamping' from Bell Tent → Velvet Buck
- (this commit) fix(date-night): remove BookingCalendar double-pick friction + progress.md log

**Optimus knowledge contributions this session:**
- Error #59 — Hero top padding insufficient for fixed header on lg
- Error #60 — H1 clamp scale not retuned after headline content rewrite
- Error #61 — Section alternation regression on revision-pass section insertion
- Error #62 — Sharp webp conversion silently drops EXIF orientation
- Error #63 — Orphan-cell grid layouts (n % cols ≠ 0)
- Pattern #70 — Auto-applied Pattern #51 gradients via CSS attribute selectors
- Pattern #71 — Never ship orphan-cell grids (with decision matrix per item count)
- 5 detailed entry files in `C:\Projects\Optimus Assets\knowledge\errors/`

---

### Session 16 (continued) — same day, additional work after the entry above

This appendix covers everything that shipped after the initial Session 16 log was written. Per the user's reinforced workflow (memory: `feedback_always_push`): every commit must be followed by both a push AND a progress.md update — never batch.

**Photo gallery remap per Angela's filenames (2026-05-13 commit `9409169`):**
- **EC / Entrance** photos → Enchanted Cottage gallery (now 10 photos, expanded from 5 to use every EC source). Cottage carousel showed missing Swing + Entrance earlier — both wired in via the integrate script.
- **Glamping ___** photos moved OFF Velvet Buck → ONTO Bell Tent + BYO Campsite per Angela (her words: "The Velvet Buck — those photos are for glamping. The glamping photos should be under curated bell tent site and curated tent site.")
- **Velvet Buck + Starlit Buck** got new fal.ai-generated photo sets (12 images via fal-ai/flux/dev, ~$0.30). Velvet Buck = warm-twilight forest glamping mood. Starlit Buck = deep-night Milky Way mood. Two distinct aesthetics so they don't read as reskins of each other.
- **"Enhanced bedroom for glamping.png"** later moved from Bell Tent → Velvet Buck (Angela 2026-05-13: filename contains "glamping," better fit for VB's luxury-glamping identity).
- **"Outdoor Movie Bed with real bed.png"** flagged as unplaced (was only on /packages addons, not in any carousel). Added to Cottage carousel as 11th photo. Final placement pass deferred to upcoming photo call.
- **EXIF rotation fix** — sharp `.webp()` was silently dropping the EXIF Orientation tag; phone photos were rendering rotated 90° (caught on cottage bedroom). Added `.rotate()` before resize/encode in integrate-angela-photos.mjs. All 26 source photos regenerated.

**Stay-page template (`/stays/[slug]`) restructure:**
- Removed the giant 16:7 hero image above the carousel (commit `79aafa5`) — was redundant with the carousel directly below it.
- Section alternation reworked to c-D-c-D-c rhythm: hero (cream) → carousel (DARK with Fireflies + GodRays) → main content (cream) → add-ons teaser (DARK with Fireflies) → related stays (cream). Was 5 cream-in-a-row before.
- PropertyGallery thumbnail aspect: switched `object-cover` → `object-contain` (commit `9be784f`) so portrait phone photos aren't cropped top/bottom. Added subtle translucent backdrop for the letterbox bars.

**Site-wide flat-cream-body monotony fix (commit `65a0b4c`):**
- Audited every page; almost every content page had 3-6 cream sections back-to-back after the hero (worst: `/about` 6-in-a-row).
- **Applied Optimus Pattern #51 (Luxury Gradient Backgrounds) systemically** via a single `globals.css` edit. Every `<section style={{ background: "var(--bg-*)" }}>` now auto-gets a brass-tinted breathing-orb gradient via `::before`, with 3 cream variants + 3 dark variants cycled through `:nth-of-type` modulo selectors. Adjacent same-bg sections now have distinct orb positions + drift directions + durations — no monotony.
- **New Optimus Pattern #70** documents this implementation approach (CSS attribute selectors as the auto-applied mechanism — no per-section refactor needed).

**`/date-night` double-pick friction removed (commit `88fc27d`):**
- Angela's revisions doc flagged that users were picking date/time twice (once on a custom BookingCalendar pre-picker, then again on the Acuity scheduler).
- Removed the entire `BookingCalendar` section. Hero "Book Now" CTA + each package card's "Book This Escape" button + a new dark final-CTA section all link directly to `siteData.booking.acuityUrl` (Acuity scheduler opens in new tab). Users pick once.
- Same fix family as Optimus Pattern #53 (Collaborative Insights native-picker-plus-Calendly double-entry).

**Orphan-cell grid bug class + Pattern #71 codified (commits `4d6c4d4` + Optimus `1614910`):**
- User caught `/vip` rendering 3 perks in a 2-col grid = 2+1 orphan (third card alone next to an empty cell). Same pattern broke `/stays` (5 stays in 3-col = 3+2 orphan in row 2).
- Fixes: VIP perks → vertical flex stack; /stays → featured (Enchanted Cottage in `max-w-3xl mx-auto` wrapper) + 2x2 grid of the remaining 4 stays.
- **New Optimus Pattern #71 — Never ship orphan-cell grids** documents the decision matrix per item count (2 through 12+), the featured + grid canonical recipe, the vertical stack alternative for 3-item sets, and the dynamic-count handling pattern. **New Error #63** logs the discovery incident.

**VIP page luxury rebuild (commit `2ed7eaf`):**
- Old `/vip` was plain cream form on plain cream background — didn't communicate "VIP" at all.
- Full rebuild with: dark forest-green section + hot tub escape photo at 22% opacity + Fireflies(28) + GodRays(50%) + Embers(18) particle systems + brass radial overlay + dark gradient layered for depth.
- Hero: pill badge with glowing gold dot ("Opening June 2026 · VIP Access"), ShimmerText H1 at clamp(40, 72), gold ornament divider (line + ✦ + line), social-proof counter.
- Perks: glass-blur cards with brass-outlined gold ✦ medallion icons (with brass glow shadow), horizontal hover lift.
- Form: glass-blur container with brass-outlined edge + drop shadow, translucent white-on-dark inputs with brass focus state, secondary (rose) submit button.
- Success state: glowing brass-bordered ✦ medallion, ShimmerText "You're on the list" headline.

**Email draft to Angela (in chat, not code) summarizing all of the above** — itemized SHIPPED list, format reminder for future revisions (with quote-wrapped page name + change format), and a meeting request agenda covering photo naming + photo placement (Outdoor Movie example) + filling out the glamping carousels.

**Operating principle reinforced (this entry):**
After every commit: push AND update progress.md. Both. No batching. Saved as durable feedback memory `feedback_always_push.md`.

**Open items to close before launch:**
1. Lodgify per-property widget URLs (5 min per property once Angela sends them)
2. Real fireside lounge photo (AI placeholder live)
3. Madison Guide photo credit display preference
4. Photo source filename rename pass (covered in upcoming photo call)
5. More photos for Velvet Buck + Bell Tent + Campsite + Starlit Buck galleries (covered in photo call — fal.ai placeholders fill the gap currently)
6. Outdoor Movie photo placement final decision (currently in Cottage carousel; could also fit elsewhere — covered in photo call)

---

### Session 15 — 2026-05-13 — Angela revisions pass (Phases A–K of 12)
**Context:** Angela submitted a 6-page revision document (`angela-revisions-2026-05-13.md.docx`) with line-item changes covering homepage, About, Hot Tub Escapes, Stays, Proposals, Madison Guide, navigation, and SEO. This session shipped Phases A through K of the 12-phase execution plan in `C:\Users\Anthony\.claude\plans\alright-it-s-in-the-hazy-sloth.md`. Final remaining work: Phase H8 (per-property photo carousel) and Phase L (Lighthouse + Vercel deploy + changelog email).

**Completed — Phase A (copy + data edits, 9 atomic commits):**
- **A1** Homepage hero H1: `'Where Romance Meets the Wild'` → `'Private Hot Tub Escapes, Luxury Glamping and Bell Tent sites in Madison, Indiana'`. Subheadline replaced with Angela's verbatim long-tail copy including Louisville/Cincinnati/Indianapolis drive context.
- **A2** New `siteData.homepageTagline` data field + rendered between trust strip and stays grid: SEO-rich paragraph covering luxury glamping, curated tent sites, private cottage, hot tub escapes.
- **A3** New shared `siteData.staysIntro` (heading + intro + 4 bullets + footer). Renders on both homepage stays section and `/stays` page H1. Replaces 'Choose Your Escape' (homepage) and 'Where You'll Stay' (/stays) with `'Romantic Getaways & Date Night Experiences in Madison, Indiana'` + Angela's 4-bullet accommodation breakdown.
- **A4** Fixed false 'every accommodation has a hot tub' claims in three places (Why Us bullet, /stays quick-stat detail, /stays meta description). Now reads 'select accommodations.'
- **A5** VIP: perk 1 rewritten 'exclusive discount on first booking' → 'Exclusive private offers on bookings.' Subheadline drops the 'VIPs always get first access' clause.
- **A6** Tent site pricing $35 → $45 across `bell-tent`, `campsite`, find-your-escape result card, and /stays meta description.
- **A7** Removed 'The Chandler Hotel's rooftop terrace' from Madison Guide Downtown tip (competitor). Replaced with riverfront-park pointer at sunset.
- **A8** Proposals photographer FAQ rewritten — narrows to 'one of our preferred photographers,' photo time is now flexible per guest preference.
- **A9** Homepage SEO meta: `siteData.seo.defaultTitle` + `defaultDescription` set to Angela's verbatim title/description. Subpages keep their per-page titles.

**Completed — Phase B (nav + structure, 2 atomic commits):**
- **B1** Renamed 'The Enchanted Journal' → 'Our Enchanted Guides' in 4 places (header dropdown, footer, /blog metadata title, /blog hero eyebrow). Reverses Session 14's flip back to Angela's preferred name. `/blog` URL unchanged.
- **B2** Added 'Gift Certificates' to header dropdown + footer 'Experiences' group. Links to `https://app.acuityscheduling.com/catalog.php?owner=38559471` (the general Acuity catalog page per owner-roleplay decision). External link handling added as first-class concept: nav items + footer links now accept optional `external?: boolean`; header (desktop + mobile) and footer render `<a target="_blank">` when set.

**Completed — Phase C (sticky CTA, 1 commit):**
- New `<FloatingCTA />` mobile-only component in `src/components/layout/FloatingCTA.tsx`. Mounted in `PageShell`. Appears bottom-right after the user scrolls 400px past the hero. Hidden on `/stays/[slug]`, `/proposals`, `/date-night` to avoid competing with the in-page booking widget. Desktop already has the always-visible sticky header CTA — no duplication. Styled to translate Angela's CSS intent (rgba dark backdrop, compact pill, 13px mono caps) into design-system tokens.

**Completed — Phase D2 (1 commit):**
- Cincinnati drive time corrected 75 → 60 min per Angela's brief (updated `siteData.driveTimes` + matching FAQ answer).
- New metro distance pill strip below the homepage tagline: 60 min Louisville / 60 min Cincinnati / 90 min Indianapolis. Reuses `siteData.driveTimes`. Full Location section lower down kept intact.

**Completed — Phase E1 (1 commit):**
- About page 'What We Believe' restructured: H2 now reads 'What we believe' with subheading 'How we built this place' beneath it. Eyebrow swapped to 'Our Approach' to avoid duplicating H2.
- Card 2 renamed 'Genuinely Private' → 'Thoughtful Layout, Real Setting.'
- All three card bodies rewritten in Angela's voice (verbatim, with ellipses preserved per `user_angela_voice` memory).

**Completed — Phase G (3 commits):**
- **G1–G3** Replaced `hot-tub-soak.webp` demo image with the real `Sunrise Hot Tub Escape.png` (already in `source-photos/`). Updated `scripts/integrate-angela-photos.mjs`: `SOURCE_ROOT` now points to `source-photos/` (Session 14 reorg), added the `madison-guide/` subfolder jobs that were previously hand-integrated, added the new `hot-tub-soak` mapping. Re-ran the script — all 26 jobs OK. Fireside Lounge card kept AI placeholder (owner roleplay decision; flagged in `ANGELA-PHOTOS.md`).
- **G4** Found the actual root cause of Angela's 'photo coming soon' report: `/stays/[slug]` 'You Might Also Like' StayCard render was dropping the `image` prop. Added it. Also made StayCard fallback graceful: instead of 'Photo coming soon' on a flat grey panel, the empty state now shows the property type label centered on a brand gradient — so any future fallback (e.g. a property whose image hasn't generated yet) never reads as broken. Removed stale `// TODO: real photo` comments. Added `siteData.stays` CONTRACT comment documenting the image-path dependency for related-stays.

**Completed — Phase I (tent SEO, 1 commit):**
- Bell Tent: name 'Curated Campsite — Bell Tent' → 'Curated Bell Tent Site'; type 'Glamping Campsite' → 'Glamping Tent Site.'
- BYOT: name 'Curated Campsite — Bring Your Own Tent' → 'Curated Tent Site — Bring Your Own Tent'; type 'Traditional Campsite' → 'Wooded Tent Site.'
- Both stay taglines now use 'tent site' explicitly.
- New FAQ entry under Accommodations: 'Do you offer tent sites in Madison, Indiana?' — long-tail answer hitting tent site, Clifty Falls, fire pit, shower facilities, $45 entry price.
- Footer labels updated to match.

**Completed — Phase J (1 commit):**
- Google Analytics 4 (`G-1VQ056C1GV`) wired into `app/layout.tsx` via `next/script` with `afterInteractive` strategy. Reads from `NEXT_PUBLIC_GA_ID` env var with fallback to Angela's literal ID. Coexists with existing Vercel Analytics.

**Completed — Phase K (1 commit):**
- New `ANGELA-PHOTOS.md` at project root: catalogs every emailed photo, its destination(s), credit, integration session, and which page renders it. Lists outstanding photo needs (fireside lounge, gallery fills for Velvet Buck / Bell Tent / Campsite, Starlit Buck hero + gallery, smores + picnic add-ons, photo-credit attribution decision). Documents the going-forward workflow: drop into `source-photos/<category>/`, add a row, register the script mapping, re-run.

**Completed — Phase H1–H7 (Starlit Buck 5th property, 1 commit):**
- Angela confirmed via text on 2026-05-13: **5th property in addition to Velvet Buck, not a rename.** Spec sourced from owner-roleplay pass on claude.ai.
- Added Starlit Buck to `siteData.stays`: slug `starlit-buck`, type `Luxury Glamping Tent`, sleeps 2, 320 sq ft, From $175/night, badge `Opening This Summer`. 6 features per Angela's spec. Description and tagline verbatim. Positioned directly after Velvet Buck.
- Added `'starlit-buck': ''` to `littleHotelierWidgets`.
- Footer Stays group expanded from 4 → 5 (Starlit Buck between Velvet Buck and Bell Tent).
- Homepage + `/stays` grid changed `lg:grid-cols-4` → `lg:grid-cols-3` to accommodate the 5th card cleanly (3+2 layout vs orphaned 4+1).
- Starlit Buck ships with `image: ''` (no photo yet). Both `StayCard` and `/stays/[slug]` hero fallbacks render the property type label on a brand gradient — never reads as broken.
- `staysIntro` 4-bullet block NOT expanded to 5 (bullet 2 'Luxury Glamping Tents' is plural and already covers both glamping tents).
- Quiz routing kept Velvet Buck as the primary glamping recommendation; Starlit Buck discoverable via /stays.
- Build verified: 40 pages, `/stays/starlit-buck` prerendered, zero TypeScript errors.

**Phase H8 — Per-property photo carousel (1 commit, Session 15):**
- Installed `embla-carousel-react` (only added dependency for this entire revision pass).
- New `<PropertyGallery />` client component combining a swipeable horizontal carousel (embla) with an in-house fullscreen lightbox (Framer Motion + AnimatePresence). Keyboard nav (←/→/Esc), counter, body scroll lock, click-outside-to-close, single-image graceful fallback.
- Added `gallery: string[]` to every stay in `siteData.stays`: Cottage gets 5 (hot tub / bedroom / family room / kitchen / cocktail bar), Velvet Buck gets 4 (after integrating 3 unwired source photos — Enhanced bedroom for glamping, Glamping bathroom, Glamping kitchen — into `/images/accommodations/velvet-buck/`), Bell Tent + Campsite get single-image arrays, Starlit Buck gets empty gallery (awaiting shoot).
- Rendered between hero and description on `/stays/[slug]`. `/stays/[slug]` hero fallback also upgraded to brand-gradient + type-label so empty-image properties don't read as broken.
- Build verified: 40 pages, zero TS errors.

**Phase L — Changelog + final session log (Session 15):**
- `CHANGELOG-ANGELA-2026-05-13.md` written at project root. Maps every line in Angela's revision doc to its shipped status, lists 8 follow-up items for Angela.
- This session log entry written.
- 22 atomic commits shipped this session, all pushed to `origin/main`. Vercel auto-deploys from main, so the latest revisions are live on production.
- Browser testing: not performed in this session (out of harness scope). Recommend Angela do a 390px + 1440px walk-through using the live URL before signing off on launch.

**Commits this session (14 total, all pushed):**
1. `e7169bd` feat(homepage): rewrite hero H1 + subheadline
2. `17a84da` feat(homepage): add tagline section
3. `397b8ca` feat(stays): swap header to Romantic Getaways + bulleted description
4. `f01ac7a` fix(stays): correct 'every accommodation' hot tub claims
5. `98ff93b` fix(vip): rewrite perk 1 + remove 'first access' clause
6. `706557c` fix(stays): raise tent site pricing $35 → $45
7. `f71a078` fix(madison-guide): remove Chandler Hotel mention
8. `41ee046` fix(proposals): rewrite photographer FAQ answer
9. `aeea8e6` feat(seo): set homepage SEO title + description
10. `5097cb3` feat(nav): rename Journal → Our Enchanted Guides
11. `d59e2a0` feat(nav): add Gift Certificates link
12. `e756ddd` feat(cta): add mobile floating Check Availability button
13. `f93f84e` feat(homepage): add metro distance strip + fix Cincinnati
14. `2976b95` feat(about): restructure 'What We Believe' section
15. `5513849` feat(date-night): replace hot-tub-soak with real Sunrise photo
16. `9bcb569` fix(stays): replace 'Photo coming soon' fallback + add image contract
17. `9727fd3` feat(analytics): install Google Analytics 4
18. `68115a9` feat(seo): surface 'tent site' terminology across stays + FAQ
19. `a52f468` docs: add ANGELA-PHOTOS.md photo inventory
20. `0d10d80` feat(stays): add The Starlit Buck as 5th property

**Decisions:**
- 'The Enchanted Journal' reverted to 'Our Enchanted Guides' per Angela's explicit revision doc — Session 14's flip is now reversed.
- Cincinnati distance treated as 60 min (Angela's brief, not the prior 75 min in code).
- Hot tub claims wherever they appeared as 'every accommodation' or 'every overnight stay' corrected to 'select accommodations' — Bell Tent + BYOT do not have private hot tubs.
- Sticky CTA implemented as mobile-only floating pill (desktop header already always-visible) — clean conversion add without disrupting the existing transparent → solid scroll behavior.
- Starlit Buck ships with empty image string. Both fallbacks (StayCard, /stays/[slug] hero) now render gracefully on missing photos, so the property is launchable without blocking on photography.
- Tent site SEO sweep deliberately surfaces 'tent site' on H1/type/tagline/FAQ rather than rewriting Angela's verbatim homepage SEO copy (which she sourced herself).

**Pre-launch follow-up items (for Phase L changelog email):**
1. Confirm 'Opening This Summer' badge phrasing for Starlit Buck (vs 'Opens June 2026' or similar)
2. Send screenshot if she still sees a 'duplicate availability checker' anywhere after the new deploy
3. Send real fireside-lounge photo when available (AI placeholder live)
4. Send 4 more photos each for Bell Tent + Campsite if she wants real galleries instead of fal.ai fills
5. Send Starlit Buck hero + gallery photos when the property is photographed
6. Confirm Lodgify widget URLs per property (still placeholder)
7. Confirm whether Madison Guide cards should show visible photographer credit (Westendorf / Spry / Grunt Pics)

---

### Session 14 — 2026-05-04
**Context:** Angela emailed three real Madison-area photos and asked us to (a) update the photos for accuracy on the Madison Guide page and (b) replace Hanover College with the Broadway Fountain. Source JPGs landed in the project root with photographer-credited filenames.

**Completed:**
- **Real photos integrated on `/madison-guide`** — replaced AI-generated `lanier-mansion.webp` (orange Greek Revival exterior, photo by Jay Westendorf) and `downtown-madison.webp` (golden-hour aerial of riverfront + bridge, photo by Brent Spry). Both retained their existing filenames so no component changes were needed.
- **Broadway Fountain replaces Hanover College** — `src/data/site.ts:601-610`. New attraction entry uses the Broadway Fountain photo (Grunt Pics) and research-backed copy (1876 Philadelphia Centennial origin, brought to Madison 1886, 1980 bronze recasting, "downtown's most photographed landmark"). Category set to **History**, distance **5 min** (downtown). Old `hanover-college.webp` deleted from disk.
- **Generator script kept consistent** — `scripts/generate-madison-guide-images.ts` Hanover College job replaced with a Broadway Fountain prompt so any future re-generation creates the right slot.
- **Source photos archived** — three credited JPGs moved out of project root into gitignored `source-photos/madison-guide/` so the root stays clean.
- **Verified live** — booted dev server, browsed `/madison-guide` at 1920×1080, confirmed all 5 cards render with correct images, hover lift intact, scroll animations firing. No console errors. Pre-existing LCP hint (Clifty Falls image) is unchanged and not in scope.

**Image weights (final):** Lanier 219KB / Downtown 235KB / Broadway Fountain 421KB / Clifty 292KB / Wineries 196KB. Broadway is heavier than peers because the source has very high-frequency detail (foliage + fountain spray). Below the fold, lazy-loaded — Lighthouse impact negligible.

**Decisions:**
- Kept the Broadway Fountain entry under the **History** category rather than spinning up a new "Landmarks" category — fits the design system's existing 5 category colors and the fountain is genuinely a historical artifact (1876).
- Did **not** remove Hanover College from the `things-to-do-madison-indiana` blog post — that's a 10-item editorial list where Hanover is item #8 alongside other places. Angela's edit was specifically about the Madison Guide cards, not pruning Hanover from the brand entirely.

**Pre-launch follow-up:**
- Photo credits not yet rendered on-page. Angela should confirm whether she wants visible "Photo by Jay Westendorf / Brent Spry / Grunt Pics" attribution. Filenames preserve credit in the source archive either way.

**Blog renamed: "The Enchanted Guide" → "The Enchanted Journal"**
- **Why:** With the Madison Guide page now properly photographed and surfaced, having the blog also called "Guide" created a taxonomy collision in nav ("The Enchanted Guide" vs "Madison Guide"). For a luxury romance brand, "Journal" is the boutique-hospitality genre convention (Auberge, Soho House, every high-end inn) — it converts because the audience recognizes the pattern. Also reuses the "Enchanted" brand word on every post page/email/URL — free brand reps a generic name doesn't give.
- **Scope of change:** 4 strings — primary nav dropdown, footer link, blog page metadata title, blog page hero eyebrow. URL `/blog` and image directory `/images/blog/` unchanged (no SEO impact, no redirects needed).
- **⚠️ Reverses Session 12 client preference:** Session 12 logged at line 372: *"'The Enchanted Guide' is the client-preferred name for the blog/journal section."* Anthony made the call to flip back, but Angela should sign off before launch — she explicitly preferred "Guide" once, and we don't have on-record confirmation of the new name.

---

### Session 13 — 2026-04-15
**Context:** Angela delivered a batch of real property photos (dropped into project root) and two copy corrections after seeing the live site. Goal: replace AI-generated placeholder imagery across the site with authentic property shots before paid promotion begins.

**Completed:**
- **Hero subheadline rewritten** — `src/data/site.ts:93`. Old copy ("Luxury glamping, private hot tubs, and curated experiences…") replaced with Angela's new copy that leads with overnight stays and introduces the hot-tub-escape day option. Removes "curated experiences" per her note.
- **Photo integration script added** — `scripts/integrate-angela-photos.mjs`. Uses the existing `sharp` dep to convert `.jpg`/`.png` source photos to `.webp` at max 1600px width, quality 80. Keeps original filenames in `/public/images/` so no component changes were needed. Repeatable for future photo drops.
- **Accommodation card images replaced with real photos:**
  - Enchanted Cottage → `EC Hot Tub.jpg` (per Angela — cottage opens mid-April, needed real image)
  - Bell Tent → `Tent Site with tent.png` (matches "tent provided" caption)
  - Campsite → `Tent Site Roasting Marshmallows.png`
  - Velvet Buck → `Glamping hot tub close up.png`
- **Experience images replaced:**
  - `hot-tub-escape.webp` ← `Sunrise Hot Tub Escape.png`
  - `date-night.webp` + `date-night-card.webp` ← `Brighter Hot Tub Pic.png`
  - `proposal.webp` + `proposals-card.webp` ← `Christmas Proposal.png`
  - `why-enchanted.webp` ← `Swing at EC.png`
- **Add-on images replaced:**
  - `outdoor-movie.webp` ← `Outdoor Movie Bed with real bed.png`
  - `classic-romance.webp` ← `EC Romance Package.jpg`
  - `ultimate-romance.webp` ← `EC Cocktail Bar.jpg`
- **Cottage gallery assets staged** — 9 real cottage photos (bathroom, bedroom, family room aerial, front deck, kitchen, cocktail bar, romance package, hot tub, entrance) converted and placed in new `public/images/accommodations/cottage/` folder. Ready for a future detail-page gallery component.

**Blocked — Waiting on Angela:**
- `smores-skillet.webp` and `picnic-and-ride.webp` — no matching source photos in the drop. Still AI-generated. Request real photos.
- Logo refresh — both `Given-Logo.png` and `Logo-Final.png` arrived in project root. Need to confirm which (if either) supersedes the currently deployed `public/images/logo-final.png` before swapping.
- Cottage detail-page gallery UI — photos are staged, but the gallery component itself requires Angela's sign-off on layout before building.

**Decisions:**
- Image filenames preserved across swaps → zero component churn, single commit for asset-only changes possible.
- Script-based conversion committed to `scripts/` so future photo drops are one-command.

---

### Session 12 — 2026-04-13
**Context:** Angela (owner) reviewed the live site and sent a numbered change list. This session implements all actionable items and documents what's blocked.

**Completed:**
- **VIP perks copy updated** — Homepage VIP section + /vip standalone page now use Angela's exact perks language: exclusive discount on first booking, complimentary luxury sugar scrub, curated snack & drink pairing. CTA changed to "Join the VIP List" with "Claim your perks before they disappear" subtext.
- **Nav: "Experiences" renamed to "Hot Tub Escapes"** — Primary nav, footer, and date-night page title all updated. Angela wants the experience page framed as "Hot Tub Escapes" specifically.
- **Nav: "Journal" renamed to "The Enchanted Guide"** — Dropdown nav, footer, and blog page eyebrow/metadata all updated.
- **About Us copy replaced** — Removed generic brand intro placeholder. Replaced with Angela's full copy (personal, emotionally direct, speaks to disconnection and reconnection). Copy split across three alternating sections with closing lines elevated to display font for emphasis.
- **Packages page renamed** — "Stay Enhancements & Add-Ons" → "Enhancements for Your Stay" (title, eyebrow, footer label). Angela's item #9 confirmed: /packages already has all add-ons on one page.

**Angela's Voice & Tone (noted for future copywriting):**
- More personal and vulnerable than our initial marketing copy
- Speaks directly to the feeling of disconnection ("busy schedules, responsibilities, everything pulling at your attention")
- Uses second person directly ("you don't need more time, you just need the space to use it differently")
- Comfortable with ellipses and em dashes for pacing
- Includes friends/girls' night — not exclusively couples-only in tone (though couples remain primary audience)
- Aspirational but grounded — no superlatives, no hype

- **Nav bar enlarged** — Header height h-16 → h-20, logo text-xl → text-2xl, nav links 13px → 15px, CTA button sm → default size. Per client feedback that nav felt too small on desktop.
- **Logo integrated (logo-final.png)** — Angela provided her official logo (gold crescent moon EC monogram). Replaced text-based logo in SiteHeader with Image component. Uses `brightness(0.55) saturate(1.1)` filter on scrolled state and when mobile menu is open for contrast against light backgrounds.
- **Logo added to footer** — Gold EC monogram replaces text logo in SiteFooter brand column. Looks great on dark bg.
- **Favicon generated from logo** — 32x32 icon.png + 180x180 apple-icon.png generated via sharp from logo-final.png. Old default favicon.ico removed.
- **Mobile menu logo fix** — Logo filter, header bg, and hamburger color now trigger on `menuOpen` in addition to `scrolled`, preventing gold-on-cream invisibility when menu opens on homepage.
- **Acuity Scheduling integrated** — `booking.acuityUrl` set to `https://app.acuityscheduling.com/schedule.php?owner=38559471`. AcuityModal iframe now loads Angela's real scheduler with "Hot Tub Retreats" appointment types. iframe height increased to fill modal, `allow="payment"` added.
- **Little Hotelier URL confirmed** — `booking.littleHotelierUrl` already correct (`direct-book.com/properties/enchantedcollectivemadison`). Stay page CTAs link there. Per-property widget iframes still in placeholder mode — Angela needs to provide individual embed URLs from Little Hotelier dashboard.
- **Acuity modal centered** — Fixed positioning so modal opens center-screen on desktop instead of half off-screen. Uses flex centering on backdrop container.
- **Acuity modal double scrollbar fixed** — Removed outer `overflow-y-auto` when iframe is active; iframe handles its own scrolling.

**Blocked — Waiting on Angela:**
1. **Property map page** — Angela wants a page showing campsites, glamping sites, bathroom, and hot tub escape locations. Needs: a property layout/map asset or enough info to build one (site dimensions, relative positions of structures).
2. **Liability waiver for bike packages** — Angela mentioned this for the Picnic and Ride add-on. We need the waiver text/policy from her or her attorney.
3. **"Hot Tub Escapes" page restructuring** — Angela wants a menu for picking specific hot tub escape packages with descriptions of the evening + bullet points of what's included + individual "Book Now" buttons. The current /date-night page partially covers this but may need restructuring to match her vision more closely. Need to confirm with Angela if current layout satisfies this or if she wants a different format.
4. **Per-property Little Hotelier widget URLs** — Need individual embed URLs from Angela's Little Hotelier dashboard for each accommodation (Enchanted Cottage, Velvet Buck, Bell Tent, Campsite) to enable inline booking calendars on stay pages.

**Decisions:**
- Angela's About Us copy is now the canonical voice for the brand. Future copy should match this tone — personal, vulnerable, grounded.
- "Hot Tub Escapes" is the client-preferred name for the experience category (not "Date Night," not "Experiences").
- "The Enchanted Guide" is the client-preferred name for the blog/journal section.

---

### Session 11 — 2026-04-09
**Completed:**
- **Pro package confirmed** — Angela chose the Pro tier ($3,000). Full deliverables checklist documented at top of this file under "Client Package — Pro ($3,000) — CONTRACTED DELIVERABLES"
- **Pricing page deleted** — `/optimus-pricing` (page.tsx + RoiCalculator.tsx) removed. Was an internal sales tool, no longer needed.
- **Premium features stripped** — All e-commerce/shop infrastructure removed since it's Premium-only:
  - `/shop` page deleted
  - `/src/components/shop/` (CartDrawer, ProductCard, ShopContent) deleted
  - `/src/lib/cart.tsx` (CartContext + CartProvider) deleted
  - `/src/lib/printful.ts` + `printful-seeded-products.json` deleted
  - `/src/data/shop.ts` (product catalog) deleted
  - `/api/stripe/checkout` + `/api/stripe/webhook` routes deleted
  - `/api/printful/products` + `/api/printful/variants/[id]` routes deleted
  - Cart icon removed from SiteHeader (desktop + mobile)
  - CartProvider removed from Providers.tsx
  - "Shop" removed from nav dropdown + footer links
  - "Pricing ⚑" removed from nav dropdown
- Nav dropdown now: Find My Escape, Journal, Madison Guide, About

**Decisions Made:**
- Pro package scope is the contractual ceiling. No shop, no Stripe, no Printful, no cart.
- 60-day post-launch support (not 90 — that's Premium)
- Pricing page was marked "DELETE BEFORE LAUNCH" — deleted now since it served its purpose

**Next Session Starts At:**
- Upgrade remaining pages to quality standard (reviews, faq, contact, madison-guide, vip)
- OR Phase 4 completion — wire Lodgify + Acuity when Angela provides embed codes
- OR Phase 7 — Performance, QA & Launch Prep

**Blockers (unchanged):**
- Lodgify embed code — pending client
- Acuity embed code — pending client
- RESEND_API_KEY + verified Resend domain — pending setup
- Professional photography (replace AI placeholders before launch)
- Host story copy for /about — pending Angela & Marc

---

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
