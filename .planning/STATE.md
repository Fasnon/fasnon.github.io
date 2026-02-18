# Project State: Dave's Personal Website

## Project Reference
**Building:** Interactive personal portfolio with node-graph experience timeline, project grid, 3D terrain background, and scroll/hover animations
**Core value:** Let visitors explore Dave's work through a polished, interactive experience
**Milestone:** v1.0.0

## Current Position
**Phase:** 1 of 4 — Project Grid
**Current Plan:** Not started
**Status:** Milestone complete
**Progress:** [██████████] 100%

## Phase Overview
| # | Phase | Status |
|---|-------|--------|
| 1 | Project Grid | Complete (2/2 plans done) |
| 2 | Scroll & Hover Animations | Pending |
| 3 | Vue Flow Experience Timeline | Pending |
| 4 | Three.js Terrain Background | Pending |

## Recent Decisions
| Decision | Date | Outcome |
|----------|------|---------|
| Vue Flow for experience timeline | 2026-02-18 | Use `@vue-flow/core`, not custom SVG |
| Raw Three.js over TresJS | 2026-02-18 | Composable approach, ~85 KB vs ~200 KB |
| `@vueuse/motion` for scroll | 2026-02-18 | Directive-based, ~15 KB, handles IO cleanup |
| CSS-only hover effects | 2026-02-18 | Tailwind `group` utilities, no JS needed |
| TypeScript data files | 2026-02-18 | Typed arrays over JSON fetching |
| Uniform muted-green StackTag color | 2026-02-18 | bg-muted-green (#D9E4DB) with text-mahogany for all tags |
| aspect-video for card images | 2026-02-18 | 16:9 ratio chosen for landscape screenshot format |
| Gradient placeholder background | 2026-02-18 | from-muted-green to-muted-peach, within existing palette |
| TransitionGroup for show more/less toggle | 2026-02-18 | Smooth card entrance/exit without JS animation libraries |
| xl:grid-cols-4 added to project grid | 2026-02-18 | Fills wide screens better than stopping at 3 columns |
| NavBar z-50 | 2026-02-18 | Prevents card hover lift from overlapping sticky navbar |
| shrink-0 on ProjectCard image wrapper | 2026-02-18 | Fixes gradient collapse on flex-col-reverse (even) cards |

## Pending Todos
None

## Blockers / Concerns
- All npm package versions need verification at install time (research based on Aug 2025 data)

## Session Continuity
Last session: 2026-02-18
Stopped at: Completed 01-project-grid/01-02-PLAN.md — Phase 1 (Project Grid) complete
Resume file: .planning/phases/02-scroll-hover-animations/ (Phase 2 next)
