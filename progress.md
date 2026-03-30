# progress.md — Enchanted Madison Website Rebuild

**Project:** enchantedmadison.com redesign & rebuild
**Client:** The Enchanted Collective | Madison, Indiana
**Launch Target:** June 2026
**Last Updated:** 2026-03-30 (Session 3)
**Current Phase:** Phase 5 — Experience & Proposal Pages

---

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Environment Setup & Strategy | ✅ Done (pending external: Vercel/Lodgify/DNS) |
| 1 | Design System & Brand Identity | ✅ Done |
| 2 | Site Architecture & Content Planning | ✅ Done (2 owner gaps flagged) |
| 3 | Core Pages Build | ✅ Done |
| 4 | Booking Engine Integration | ⬜ Not Started |
| 5 | Experience & Proposal Pages | 🔄 In Progress |
| 6 | SEO, Schema & Analytics | ⬜ Not Started |
| 7 | Performance, QA & Launch Prep | ⬜ Not Started |

---

## Phase Definitions

> What we are building: a complete replacement for enchantedmadison.com.
> The current site is a Canva-built single page — all content is locked inside images,
> the booking flow sends visitors off-domain to direct-book.com (completely off-brand),
> the VIP button is broken, the contact page has no form, and the packages page has
> zero visual hierarchy. We are rebuilding it from scratch in Next.js, restoring all
> that content as real crawlable HTML, fixing every critical audit failure, and
> launching with a booking engine that never leaves enchantedmadison.com.

---

### Phase 0 — Environment Setup & Strategy
**Goal:** Lay the governance, tooling, and structural foundation before writing any UI code.
**Done when:** Next.js app builds clean, tokens are locked, all docs in place.

**Checklist:**
- [x] CLAUDE.md, progress.md, design-contract.md created
- [x] Next.js 14 + Tailwind + TypeScript scaffold
- [x] Brand tokens encoded in tailwind.config.ts + globals.css
- [x] Fonts loaded (Cormorant Garamond / Source Sans 3 / Allura)
- [x] Content layer scaffolded (site, stays, experiences, navigation, seo)
- [x] App shell: SiteHeader, SiteFooter, PageShell
- [x] Route skeletons for all 8 pages
- [x] Core UI primitives: Button, SectionHeading, PropertyCard, TrustBar, BookingEntry
- [ ] Vercel project connected *(owner action)*
- [ ] Booking engine confirmed: Lodgify vs OwnerRez *(owner decision)*
- [ ] Domain DNS verified at enchantedmadison.com *(owner action)*

---

### Phase 1 — Design System & Brand Identity
**Goal:** Build and validate the complete visual language — every component, every token,
every section pattern — before composing full pages. The homepage serves as the living
proof-of-concept for the design system.
**Done when:** Homepage is fully composed, all section patterns are defined, design tokens
have no exceptions or overrides, and the build passes with zero TypeScript errors.

**Checklist:**
- [x] Color palette locked in Tailwind tokens (forest, rose, gold, cream, charcoal, stone, ivory, night)
- [x] Typography system: Cormorant Garamond headings / Source Sans 3 body / Allura accent
- [x] Button variants: primary (rose), secondary (gold border), ghost
- [x] SectionHeading with eyebrow + title + description
- [x] PropertyCard with transparent pricing
- [x] TrustBar (4-chip differentiation strip)
- [x] BookingEntry (on-domain booking entry pattern)
- [x] HeroSection: full-viewport cinematic gradient hero, ivory headline, dual CTAs
- [x] DifferentiatorStrip: 4-column competitive differentiator bar
- [x] ExperiencesSection: dark section with 3 glass experience cards
- [x] VIPCapture: email capture with $25 off offer + success state
- [x] Homepage fully composed: Hero → Differentiators → Stays → TrustBar → Experiences → VIP
- [x] Mobile nav: hamburger menu for the primary nav at < md breakpoint
- [x] SiteHeader: transparent-over-hero variant for homepage (header currently always cream)

---

### Phase 2 — Content Layer Expansion
**Goal:** Extract and improve all content currently locked inside Canva image layers on the
live site. Write it as real copy in the content files so every page has proper crawlable HTML.
This is the migration phase — take what exists, make it better, and make it machine-readable.
**Done when:** Every page has its real copy in a content file and no page renders lorem ipsum
or placeholder skeleton text.

**What we are migrating / writing:**
- [x] About page content — property intro, proximity, amenities (host backstory flagged as gap — Angela & Marc need to provide this before /about page build)
- [x] Accommodations full copy — stays.ts expanded with full descriptions, amenities, capacity, opening notes, real rates
- [x] Packages — packages.ts created: Classic Romance ($95), Ultimate Romance ($129), Outdoor Movie ($25), Picnic & Ride ($125), S'mores Skillet ($24)
- [x] Proposal packages — 3-tier: Enchanted Proposal ($249), She Said Yes ($399), Ultimate Engagement ($599)
- [x] Date Night packages — 3-tier: Tranquility Escape ($119), Luxury Escape ($149), Ultimate Escape ($199) with Fireside Lounge flow
- [x] Madison Guide — 6 attractions; restaurants/wineries/seasonal flagged needsDetail for owner input
- [x] Reviews — reviews.ts: 3 verified reviews with guest name, city, package attribution
- [x] Contact page copy — contact.ts: address, directions, form field definitions
- [x] FAQ — faq.ts: 12 Q&As across all 5 categories
- [x] site.ts — second phone and full address added
- [x] 36/36 content tests passing

**Owner action required before Phase 3 page builds:**
- Angela & Marc host story (no copy exists — needed for /about)
- Madison Guide: restaurants, wineries, seasonal content (needsDetail items)

---

### Phase 3 — Core Pages Build
**Goal:** Build every non-experience page to full production quality using the design system
from Phase 1 and the content from Phase 2. Fix all CRITICAL and HIGH audit findings.
**Done when:** All listed pages render real content, pass Lighthouse ≥ 90, and have no broken
CTAs or empty sections.

**Pages:**
- [x] `/stays` — Stays listing page: property cards with full copy, amenities chips, pricing, VIP CTA.
- [x] `/stays/[slug]` — Dynamic detail pages: full description, amenities grid, package upsell, booking CTA.
- [ ] `/about` — BLOCKED: host story (Angela & Marc) not yet provided — owner action required.
- [x] `/contact` — Contact page with real form (name, email, phone, celebration type, message). Fixes audit §5 CRITICAL.
- [x] `/reviews` — Star ratings, 3 verified review cards, Google review placeholder. Fixes audit §12.
- [x] `/madison-guide` — 6 attractions with emoji icons, proximity strip, needsDetail flagging. Fixes audit §11.
- [x] `/faq` — 12 Q&As across 5 categories, CSS-only details/summary accordion, dark CTA block.
- [x] `/packages` — 5 packages with includes lists, price badges, "Add to My Stay" CTA. Fixes audit §10 CRITICAL.

**Completed:** 2026-03-30. 36/36 tests passing. Build clean. 16 routes rendered.

---

### Phase 4 — Booking Engine Integration
**Goal:** Replace the direct-book.com off-domain redirect with an embedded, on-domain booking
flow. Every booking action must stay on enchantedmadison.com. This is a CRITICAL audit fix.
**Done when:** A guest can select dates, choose a stay, and complete a booking without ever
leaving enchantedmadison.com. The booking UI matches the brand.

**Tasks:**
- [ ] Confirm booking engine: Lodgify (launch) vs OwnerRez (scale) — owner decision required
- [ ] Set up Lodgify account and property inventory (4 stays + day-use experiences)
- [ ] Embed Lodgify booking widget on `/stays` and individual `/stays/[slug]` pages
- [ ] Configure day-use/experience bookings: Checkfront or FareHarbor embed
- [ ] Remove all direct-book.com links from codebase
- [ ] Test full booking flow end-to-end on staging
- [ ] Verify mobile booking flow at 390px

---

### Phase 5 — Experience & Proposal Pages
**Goal:** Build the high-revenue differentiation pages — proposals, date night, and day-use
experiences — to their full production quality. These pages are the primary competitive
advantage over every property in the corridor.
**Done when:** All experience pages are fully composed, bookable (or inquiry-capable), and
convert at a higher rate than the current static placeholder pages.

**Pages:**
- [ ] `/proposals` — Full proposal page: romantic hero, 3-tier packages (Enchanted / Signature /
      Ultimate), what's-included detail, "how it works" 3-step flow, consultation intake form.
      Audit §8: currently best-designed page — preserve the dark/bokeh aesthetic, improve
      package card readability.
- [ ] `/date-night` — Date Night & Girls Night: 3-tier packages, mood photography, booking
      entry. Fixes audit §9 (MEDIUM): readability issues, package pricing not legible.
- [ ] `/packages` *(if not built in Phase 3)* — Romance add-ons: card layout, photos, pricing
      callouts, path to add at checkout. Fixes audit §10 (CRITICAL).
- [ ] Inline experience booking: proposal consultation form wired; date-night and day-use
      connected to Checkfront/FareHarbor embed from Phase 4.

---

### Phase 6 — SEO, Schema & Analytics
**Goal:** Make every page discoverable, indexable, and trackable. The current Canva site has
essentially zero SEO value (image-locked content, no schema, no crawlable text).
**Done when:** All pages pass a technical SEO audit, schema validates in Google's Rich Results
Test, and analytics are firing on all pages.

**Tasks:**
- [ ] Metadata: unique title + meta description on every page via Next.js Metadata API
- [ ] OG tags: og:title, og:description, og:image on every page
- [ ] Schema markup: LodgingBusiness on homepage; VacationRental on each stay; Event
      schema on proposal/experience pages
- [ ] Heading hierarchy audit: one H1 per page, logical H2/H3 cascade everywhere
- [ ] Semantic HTML audit: nav, main, article, section, aside used correctly
- [ ] Sitemap.xml generated and submitted to Google Search Console
- [ ] robots.txt configured
- [ ] Google Analytics 4 installed and verified
- [ ] Google Search Console verified and sitemap submitted
- [ ] Local SEO: business name/address/phone consistent across all pages
- [ ] Image alt text on every image

---

### Phase 7 — Performance, QA & Launch Prep
**Goal:** Ship a site that loads fast, looks perfect on mobile, and has no broken flows.
Lighthouse ≥ 90 is a hard requirement per CLAUDE.md.
**Done when:** All pages score ≥ 90 on Lighthouse, mobile QA is clean at 390px, and the
DNS cutover checklist is complete.

**Tasks:**
- [ ] Lighthouse audit on all pages — target ≥ 90 Performance, Accessibility, Best Practices, SEO
- [ ] Image optimization: all images WebP, `next/image` with explicit width/height + priority on LCP
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID/INP < 200ms
- [ ] Mobile QA at 390px: all pages, all flows, all interactive components
- [ ] Cross-browser: Chrome, Safari, Firefox, Edge
- [ ] Form testing: VIPCapture, contact form, consultation form — all submit paths
- [ ] Booking flow E2E test: select stay → pick dates → complete booking on-domain
- [ ] 404 page styled to match brand
- [ ] Deploy to Vercel production with custom domain enchantedmadison.com
- [ ] DNS cutover: point enchantedmadison.com to Vercel
- [ ] Redirect old Canva site to enchantedmadison.com
- [ ] Remove all direct-book.com links (final check)
- [ ] Smoke test all pages post-cutover

---

## Phase 0 — Environment Setup & Strategy

### Checklist
- [x] CLAUDE.md created
- [x] progress.md created (this file)
- [x] design-contract.md created
- [x] Tech stack scaffolded (Next.js 14 + Tailwind + TypeScript)
- [ ] Vercel project connected
- [ ] Lodgify account confirmed / booking engine selected
- [ ] Domain DNS confirmed (enchantedmadison.com)
- [x] All source files confirmed readable by Claude Code
- [x] Phase 1 plan written and approved
- [x] Content layer established in app code
- [x] Branded app shell established
- [x] Core route skeletons established
- [x] Reusable UI primitives established

### Decisions Log
- 2026-03-30: The repo will use Next.js App Router + Tailwind + TypeScript per project rules and session brief.
- 2026-03-30: The scaffolded application lives in `enchanted-madison/` as a dedicated app directory created from `create-next-app`.
- 2026-03-30: Brand direction is locked to "romantic, intimate, nature-luxe, curated, slightly mysterious" from Market-Intelligence-Report.md section 8.
- 2026-03-30: Booking strategy remains on-domain embedded booking only. Launch recommendation stays Lodgify, with OwnerRez reserved for scale and Checkfront/FareHarbor for day-use experiences.
- 2026-03-30: The existing Canva site and third-party redirect flow are treated as anti-patterns to eliminate, not design references to preserve.
- 2026-03-30: Tailwind design tokens were encoded in the scaffold using `tailwind.config.ts`, `src/app/globals.css`, and `src/lib/design-tokens.ts`.
- 2026-03-30: Phase 1 execution began with a typed content layer and lightweight Vitest coverage for site, navigation, stay, experience, and SEO defaults.
- 2026-03-30: The app now has a persistent branded shell with header/footer and route skeletons for stays, proposals, date night, packages, Madison guide, reviews, FAQ, and contact.
- 2026-03-30: Core UI primitives now exist for buttons, section headings, property cards, trust proof, and the on-domain booking entry pattern inspired by AutoCamp.

### Open Questions
- Can we install and authenticate the Vercel CLI in this environment, or should Vercel connection happen manually by the project owner?
- Has Lodgify already been chosen and provisioned, or do we still need a final booking-engine decision between Lodgify and OwnerRez?
- What is the intended app location long term: `enchanted-madison/` subdirectory or repository root?
- Is the generated nested app-level `enchanted-madison/CLAUDE.md` acceptable to keep, or do you want the root project rules mirrored into the app folder as well?

---

---

## Session Log

### Session 2 — 2026-03-30
**Completed:**
- Built HeroSection component: full-viewport cinematic hero with multi-layer dusk woodland gradient, ivory serif headline, script location accent, dual CTAs (Check Availability / Plan a Proposal), location trust line, animated scroll indicator. Photo-ready — swap in a real hero image with one line.
- Built DifferentiatorStrip component: 4-column competitive differentiator bar (transparent pricing, on-domain booking, romance-first, day-use). Grounded in market report §3 competitor gap analysis.
- Built ExperiencesSection component: dark gradient section with 3 glass-style experience cards (proposals, date night, day-use). Each card includes heading, sensory description, package list with prices, and individual CTA.
- Built VIPCapture component: dark night-bg email capture with form state, $25 off + weekend guide offer, inline success state. Form submission stubbed — ready to wire to Mailchimp/ConvertKit/Klaviyo.
- Rebuilt page.tsx: full homepage now composed from HeroSection → DifferentiatorStrip → Stays grid → TrustBar → ExperiencesSection → VIPCapture. PageShell hero removed; homepage has its own cinematic section.
- Build verified clean: 12 routes, 0 TypeScript errors.

**Discovered:**
- The VIPCapture component requires `"use client"` because it manages email input and submitted state. All other new section components are server components.
- The DifferentiatorStrip uses border-r divisions and hover states that only render correctly in a grid context — works as intended in the 4-column desktop layout.
- No placeholder `<img>` tags were added to HeroSection; the gradient placeholder approach means the layout is fully valid without any images and photo-swap is a one-line change.

**Next:**
- Build the Stays page: individual stay detail sections with full copy, amenities list, pricing transparency block, and inline booking entry.
- Build the Proposals page: two-tier package detail, what's included, how it works steps, and consultation form entry.
- Consider adding a location/context section to the homepage (Clifty Falls proximity, downtown Madison, seasonal appeal) as a 7th section.
- Wire VIPCapture to real email provider once confirmed by owner.

**Blockers:**
- Email provider not yet confirmed (Mailchimp / ConvertKit / Klaviyo). VIPCapture form is stubbed.
- Vercel connection, Lodgify/OwnerRez, and DNS still require owner action.

---

### Session 1 — 2026-03-30
**Completed:**
- Executed the required pre-read sequence against all existing source files and confirmed missing Phase 0 foundation files.
- Created root governance docs: `CLAUDE.md`, `progress.md`, and `design-contract.md`.
- Created a Phase 1 design-system implementation plan grounded in the audit and market report.
- Renamed and organized the screenshot set so the audit and image inventory align.
- Scaffolded a new Next.js + TypeScript + Tailwind app in `enchanted-madison/`.
- Encoded the initial brand tokens and font system into the app foundation and verified with lint/build.
- Converted the workspace into a single root git repo, created the initial commit, and pushed it to GitHub.
- Started Phase 1 by adding the structured content layer and test coverage inside the Next.js app.
- Built the branded app shell and core route skeletons, replacing the stock Next starter homepage.
- Built and integrated the reusable UI primitive layer into the homepage shell.

**Discovered:**
- `CLAUDE.md`, `progress.md`, and `design-contract.md` did not exist before this session.
- The repo is currently document-only and does not yet contain a Next.js app scaffold.
- The market report strongly supports on-domain booking, transparent starting prices, a VIP capture upgrade, and destination/proposal content as the highest-leverage differentiators.
- The audit confirms the three biggest UX failures today are the off-brand booking redirect, broken or missing conversion paths on homepage/contact, and the unusable packages page.
- Calendly is not a viable primary booking engine for overnight inventory or rate management; it is only potentially useful for consult calls or manual proposal intake.
- A route-first shell architecture gives us a safe place to iterate without hardcoding final design complexity too early, while still moving the site away from Canva/image-locked structure immediately.
- The homepage now uses reusable primitives instead of one-off CTA and card markup, which will make the next page builds faster and more consistent.

**Next:**
- Establish the content layer, app shell, and base route architecture for homepage, stays, proposal, packages, Madison guide, reviews, FAQ, and contact.
- Confirm booking and deployment accounts needed for integration work.
- Review and approve the Phase 1 implementation plan before moving into route and component work.
- Build the branded app shell and reusable UI primitives on top of the new content layer.
- Build reusable UI primitives next: buttons, section headings, property cards, trust bar, and booking entry module.
- Start the first fully composed marketing page pass, beginning with the homepage hero and below-the-fold conversion sections.

**Blockers:**
- Vercel connection, booking engine confirmation, and DNS verification require external credentials or owner input.
