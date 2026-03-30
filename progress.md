# progress.md — Enchanted Madison Website Rebuild

**Project:** enchantedmadison.com redesign & rebuild
**Client:** The Enchanted Collective | Madison, Indiana
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
| 4 | Booking Engine Integration | ⬜ Not Started |
| 5 | Experience & Proposal Pages | ⬜ Not Started |
| 6 | SEO, Schema & Analytics | ⬜ Not Started |
| 7 | Performance, QA & Launch Prep | ⬜ Not Started |

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

## Session Log

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
