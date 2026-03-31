# progress.md — The Enchanted Collective Website Build

**Project:** enchantedmadison.com — new website build
**Client:** The Enchanted Collective | Madison, Indiana
**Business Type:** Luxury glamping and romantic experience property
**Launch Target:** June 2026
**Last Updated:** 2026-03-31
**Current Phase:** Phase 4 blocked (client embeds pending) → Phase 7 next

---

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Environment Setup & Strategy | ✅ Complete (pending client: Vercel dashboard, DNS, embed codes) |
| 1 | Design System & Brand Identity | ✅ Complete |
| 2 | Site Architecture & Content Planning | ✅ Complete |
| 3 | Core Pages Build | ✅ Complete |
| 4 | Conversion Flow Integration | ⬜ Not Started |
| 5 | Secondary Pages & Content | ✅ Complete |
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
| `/vip` | VIP Early Access Sign-Up | ✅ Built |

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
| Shop (Stripe + Printful) | **REMOVE** | No physical product sales. Source: initial-business-data.md |
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

## Session Log

### Session 4 — 2026-03-31
**Completed:**
- /prime executed: all 8 files loaded, current state assessed
- Fixed progress.md header (was incorrectly set to Phase 7 — corrected to reflect actual state)
- Homepage production upgrade: added trust strip (hero → stays) and "Why Enchanted Madison?" differentiator section (experiences → reviews)
- Both sections copy-sourced from market-intelligence.md §8 "Trust builder for pre-launch" — no improvised content
- Build verified: 22 pages, zero TypeScript errors (765addd)
- Phase 3 marked complete

**Discovered:**
- Homepage was already structurally solid from Session 2/3 — hero, stays, experiences, reviews, location, VIP all built. The "upgrade" gap was two sections called out specifically in market-intelligence.md §8 that weren't implemented.

**Decisions Made:**
- Trust strip uses `--bg-elevated` + Josefin Sans uppercase to distinguish it from sections without adding visual weight
- Why Us section uses `--bg-dark` to create contrast before the reviews section and match the drive-times dark section pattern

**Next Session Starts At:**
Phase 7 — Performance, QA & Launch Prep (Phase 4 remains blocked on client embed codes).
Start with: Lighthouse audit, mobile 390px QA pass, internal link check, image alt text audit.

**Blockers:**
- Lodgify embed code (Phase 4) — pending Angela & Marc
- Acuity Scheduling embed code (Phase 4) — pending Angela & Marc
- Professional photography (Phase 7) — pending client
- Host story copy for /about — pending Angela & Marc

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
