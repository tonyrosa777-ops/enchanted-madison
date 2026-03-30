# CLAUDE.md — Enchanted Madison Project Rules

## Core Law: Research-Backed Decisions Only
Every design decision, copy choice, UX pattern, or technical recommendation
MUST be traceable to Market-Intelligence-Report.md. If you cannot cite the
research that backs a decision, do not make the decision — surface it for review.

## Mandatory Pre-Read Protocol
At the start of EVERY session, read in order:
1. CLAUDE.md (this file)
2. progress.md
3. initial-audit/initial-audit.md
4. initial-website-data.md
5. Market-Intelligence-Report.md
6. design-contract.md
7. frontend-design.md

Never skip this sequence. Never rely on context from a previous session.
Treat each session as if it is your first.

## Frontend Design Rule
Before making ANY UI/UX decision, visual design change, component creation,
color selection, typography choice, layout decision, or CSS modification,
you MUST re-read frontend-design.md in full. No exceptions.
Reference the specific section of frontend-design.md that authorizes the
design decision before implementing it.

## Design Contract Rule
The design-contract.md is the brand constitution. You may not deviate from
the approved color palette, typography system, tone of voice, or brand
personality without explicit written approval and an update to design-contract.md.
If a component requires a color not in the palette, flag it — do not improvise.

## Market Intelligence Rule
The Market-Intelligence-Report.md contains competitive research, audience
psychology, pricing benchmarks, and feature gap analysis. Every new feature,
page, or content block must be cross-referenced against this report.
Ask: "Does this serve the target audience? Is this validated by research?
Does this close a gap competitors have left open?"

## Progress Tracking Rule
After completing any subtask, immediately update progress.md with:
- What was completed
- What was discovered or decided
- What the next step is
- Any blockers or open questions
Never end a session without updating progress.md.

## Initial Audit Rule
Before designing any page or section, read the corresponding screenshots
and audit notes in initial-audit/ to understand what exists and what must
be eliminated, preserved, or transformed.

## Code Standards
- Next.js 14+ (App Router) deployed on Vercel
- Tailwind CSS for styling — no inline styles, no CSS modules unless justified
- TypeScript — strict mode on
- Mobile-first breakpoints: always design for 390px width before desktop
- Atomic git commits after every subtask — format: type(scope): description
- No hardcoded content — all copy goes through a content layer
- No magic numbers — all spacing/sizing uses Tailwind tokens from design-contract.md
- Performance budget: Lighthouse score ≥ 90 on all pages

## Booking Engine Rule
Never embed third-party booking redirects that leave the enchantedmadison.com
domain. All booking flows must be embedded inline. Approved engine: Lodgify
(launch phase) or OwnerRez (scale phase). Day-use experiences use Checkfront
or FareHarbor.

## SEO Rule
Every page must include: semantic HTML5 structure, title tag, meta description,
OG tags, LodgingBusiness or VacationRental schema markup, crawlable text (no
content locked in images), and proper heading hierarchy (one H1 per page).

## Communication Rule
Be opinionated. Flag tradeoffs. Cite research. When there is a clearly better
architectural choice, recommend it with justification. When something will break
at scale, say so. Do not pad responses. Do not assume obvious tasks are complete
without verifying.
