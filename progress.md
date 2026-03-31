# progress.md — The Enchanted Collective Website Build

**Project:** enchantedmadison.com — new website build
**Client:** The Enchanted Collective | Madison, Indiana
**Business Type:** Luxury glamping and romantic experience property
**Launch Target:** June 2026
**Last Updated:** 2026-03-30
**Current Phase:** Phase 0 — Environment Setup

---

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Environment Setup & Strategy | 🔄 In Progress |
| 1 | Design System & Brand Identity | ⬜ Not Started |
| 2 | Site Architecture & Content Planning | ⬜ Not Started |
| 3 | Core Pages Build | ⬜ Not Started |
| 4 | Conversion Flow Integration | ⬜ Not Started |
| 5 | Secondary Pages & Content | ⬜ Not Started |
| 6 | SEO, Schema & Analytics | ⬜ Not Started |
| 7 | Performance, QA & Launch Prep | ⬜ Not Started |

---

## Site Architecture

| Route | Page | Status |
|-------|------|--------|
| `/` | Homepage | ⬜ |
| `/stays` | Stays Overview | ⬜ |
| `/stays/enchanted-cottage` | The Enchanted Cottage | ⬜ |
| `/stays/velvet-buck` | The Velvet Buck | ⬜ |
| `/stays/bell-tent` | Curated Campsite — Bell Tent | ⬜ |
| `/stays/campsite` | Curated Campsite — BYOT | ⬜ |
| `/date-night` | Date Night & Hot Tub Escapes | ⬜ |
| `/proposals` | Proposal Packages | ⬜ |
| `/packages` | Add-Ons & Enhancement Packages | ⬜ |
| `/madison-guide` | Madison, Indiana Local Guide | ⬜ |
| `/about` | About The Enchanted Collective | ⬜ |
| `/faq` | FAQ | ⬜ |
| `/reviews` | Reviews | ⬜ |
| `/contact` | Contact | ⬜ |
| `/vip` | VIP Early Access Sign-Up | ⬜ |

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

### Proposed Task List
1. Install and configure Google Fonts in layout.tsx (Cormorant Garamond + Lato + Josefin Sans)
2. Build globals.css with all CSS custom properties from design-system.md
3. Configure Tailwind CSS 4 to reference CSS custom properties (no hardcoded values)
4. Build Button component (primary, secondary, ghost variants)
5. Build Card component (stay card, experience card variants)
6. Build SiteHeader with transparent → solid scroll behavior
7. Build SiteFooter with links, contact info, social icons
8. Build PageShell (layout wrapper with header/footer)
9. Verify fonts render correctly at all breakpoints
10. Commit: `feat(design-system): implement brand tokens, typography, and core components`

---

## Phase 2 — Site Architecture & Content Planning

### Proposed Task List
_(To be detailed after Phase 1 complete)_

---

## Session Log

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
