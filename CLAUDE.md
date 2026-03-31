# CLAUDE.md — The Enchanted Collective Project Rules

## Core Law: Research-Backed Decisions Only
Every design decision, copy choice, UX pattern, or technical recommendation
MUST be traceable to market-intelligence.md or initial-business-data.md.
If you cannot cite the research that backs a decision, do not make the
decision — surface it for review.

## Mandatory Pre-Read Protocol
At the start of EVERY session, read in order:
1. CLAUDE.md (this file)
2. progress.md
3. C:\Projects\Optimus Assets\knowledge\build-log.md  ← Cross-project errors + patterns. Check before starting any phase.
4. initial-business-data.md
5. market-intelligence.md
6. design-system.md
7. frontend-design.md
8. website-build-template.md

Never skip this sequence. Never rely on context from a previous session.
Treat each session as if it is your first.

## Skill File Name Aliases
Some design skills reference files by generic names that differ from this
project's actual filenames. Resolve them:

| Skill references this name | Read this project file instead          |
|----------------------------|-----------------------------------------|
| FRONTEND_GUIDELINES.md     | frontend-design.md                      |
| APP_FLOW.md                | progress.md (site architecture section) |
| PRD.md                     | progress.md (phase overview + task list) |
| LESSONS.md                 | C:\Projects\Optimus Assets\knowledge\build-log.md |
| TECH_STACK.md              | website-build-template.md (Stack section) |
| progress.txt               | progress.md                             |

Never create duplicate files to satisfy a skill's expected filename.
Always resolve to the correct project file using this table.

## Frontend Design Rule
Before making ANY UI/UX decision, visual design change, component creation,
color selection, typography choice, layout decision, or CSS modification,
you MUST re-read frontend-design.md in full. No exceptions.
Reference the specific section of frontend-design.md that authorizes the
decision before implementing it.

## Build Template Rule
website-build-template.md is the build foundation — not the ceiling.
It defines the tech stack, directory structure, animation patterns, base
component architecture, and API route patterns that every Optimus project
starts from. Scaffold from the template first.

Then layer client-specific features on top, informed by initial-business-data.md
and market-intelligence.md. If a client need requires a component or pattern
not in the template, build it using the same stack, conventions, and patterns
the template establishes. Flag every custom addition in progress.md.

Do not ignore the template's patterns. Do not be constrained by its scope.

## Design System Rule
design-system.md is the brand constitution. It was synthesized directly
from market-intelligence.md and initial-business-data.md. You may not deviate
from the approved color palette, typography system, tone of voice, or brand
personality without explicit written approval and an update to design-system.md.
If a component requires a value not in the contract, flag it — do not improvise.

## Market Intelligence Rule
market-intelligence.md contains competitive research, audience psychology,
pricing benchmarks, and feature gap analysis. Every new feature, page, or
content block must be cross-referenced against this report.
Ask: "Does this serve the target audience? Is this validated by research?
Does this close a gap competitors have left open?"

## Progress Tracking Rule
After completing any subtask, immediately update progress.md with:
- What was completed
- What was discovered or decided
- What the next step is
- Any blockers or open questions
Never end a session without updating progress.md.

## Build Knowledge Rule
Before starting any phase, read the cross-project knowledge base:
`C:\Projects\Optimus Assets\knowledge\build-log.md`

This file contains every error solved and pattern discovered across all builds.
If a similar problem has been solved before, the solution is there.

When any error is resolved:
1. Add a row to the Error Encyclopedia table in `build-log.md` immediately
2. Create a detailed entry file in `C:\Projects\Optimus Assets\knowledge\errors\`
3. Do not continue work until the entry is written

When any phase completes with a non-obvious finding or pattern:
1. Add a row to the Build Patterns table in `build-log.md`

At project close:
1. Add a row to the Project Retrospectives table in `build-log.md`

## Code Standards
- Next.js (App Router) + Tailwind CSS 4 + PostCSS — see website-build-template.md Stack section
- Animations: Framer Motion + react-intersection-observer — all scroll-triggered
- Design tokens defined as CSS custom properties in globals.css — not in tailwind.config
- TypeScript — strict mode on
- Mobile-first breakpoints: always design for 390px width before desktop
- Atomic git commits after every subtask — format: type(scope): description
- All copy lives in /data/site.ts — zero hard-coded strings in components
- Performance budget: Lighthouse score ≥ 90 on all pages

## Conversion Flow Rule
Never embed third-party redirects that take users off the enchantedmadison.com domain.
All conversion flows (booking, scheduling, purchase, inquiry) must be embedded
inline or iframed with seamless visual integration. Approved conversion tool:
Lodgify (overnight stays) + Acuity Scheduling (experiences). Every extra click costs conversions. Every domain redirect
costs trust.

## SEO Rule
Every page must include: semantic HTML5 structure, unique title tag, meta
description, Open Graph tags, LodgingBusiness schema markup, crawlable text
(zero content locked in images or iframes), and proper heading hierarchy
(one H1 per page).

## Communication Rule
Be opinionated. Flag tradeoffs. Cite research. When there is a clearly better
architectural choice, recommend it with justification. When something will break
at scale, say so. Do not pad responses. Do not assume obvious tasks are complete
without verifying.
