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
- [ ] Phase 1 plan written and approved

### Decisions Log
- 2026-03-30: The repo will use Next.js App Router + Tailwind + TypeScript per project rules and session brief.
- 2026-03-30: The scaffolded application lives in `enchanted-madison/` as a dedicated app directory created from `create-next-app`.
- 2026-03-30: Brand direction is locked to "romantic, intimate, nature-luxe, curated, slightly mysterious" from Market-Intelligence-Report.md section 8.
- 2026-03-30: Booking strategy remains on-domain embedded booking only. Launch recommendation stays Lodgify, with OwnerRez reserved for scale and Checkfront/FareHarbor for day-use experiences.
- 2026-03-30: The existing Canva site and third-party redirect flow are treated as anti-patterns to eliminate, not design references to preserve.
- 2026-03-30: Tailwind design tokens were encoded in the scaffold using `tailwind.config.ts`, `src/app/globals.css`, and `src/lib/design-tokens.ts`.

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

**Discovered:**
- `CLAUDE.md`, `progress.md`, and `design-contract.md` did not exist before this session.
- The repo is currently document-only and does not yet contain a Next.js app scaffold.
- The market report strongly supports on-domain booking, transparent starting prices, a VIP capture upgrade, and destination/proposal content as the highest-leverage differentiators.
- The audit confirms the three biggest UX failures today are the off-brand booking redirect, broken or missing conversion paths on homepage/contact, and the unusable packages page.

**Next:**
- Establish the content layer, app shell, and base route architecture for homepage, stays, proposal, packages, Madison guide, reviews, FAQ, and contact.
- Confirm booking and deployment accounts needed for integration work.
- Review and approve the Phase 1 implementation plan before moving into route and component work.

**Blockers:**
- Vercel connection, booking engine confirmation, and DNS verification require external credentials or owner input.
- Phase 1 execution is ready, but formal approval of the plan is still needed before implementation begins.
