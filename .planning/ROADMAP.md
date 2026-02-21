# Roadmap: Dave's Personal Website v1.0.0

**Created:** 2026-02-18
**Phases:** 4
**Milestone:** v1.0.0 — Interactive Portfolio

---

## Phase 1: Project Grid
**Goal:** Build a responsive project showcase with rich cards, typed data model, and hover effects.
**Requirements:** R1, R4 (hover on project cards), R6 (palette)
**Dependencies:** None — zero new npm packages needed
**Plans:** 2/2 plans complete

Plans:
- [x] 01-01-PLAN.md — Data model, StackTag, and ProjectCard components (complete: 5e5aaac)
- [ ] 01-02-PLAN.md — Rebuild Projects.vue with responsive grid and show more/less toggle

**Scope:**
- Fix asymmetric padding (`pl-40 pr-16` → centered layout) across sections
- Create `src/data/projects.ts` with `Project` and `Tag` TypeScript interfaces
- Build `ProjectCard.vue` — image, description, tech tags, links, hover lift + shadow
- Build `StackTag.vue` — pill badge with category-to-color mapping using existing palette
- Create `public/projects/` directory with pre-optimized WebP screenshots
- Rebuild `Projects.vue` with responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- Placeholder strategy for projects without screenshots

**Success criteria:**
- [ ] Project grid renders 3/2/1 columns at desktop/tablet/mobile breakpoints
- [ ] Cards show image, title, description, tech tags, and links
- [ ] Hover effect lifts card and deepens shadow
- [ ] Data is typed and lives in `src/data/projects.ts`
- [ ] `npm run build` succeeds with no TypeScript errors

---

## Phase 2: Scroll & Hover Animations
**Goal:** Add scroll-triggered reveals and polished hover effects site-wide for a premium feel.
**Requirements:** R4 (site-wide hover), R5, R7 (reduced-motion)
**Dependencies:** Phase 1 (need real content to animate)
**Plans:** 2 plans

Plans:
- [ ] 02-01-PLAN.md — Foundation, scroll reveals, and reduced-motion accessibility
- [ ] 02-02-PLAN.md — Hover effects site-wide (cards, NavBar, CTA, buttons)

**Scope:**
- Install `@vueuse/motion` and register `MotionPlugin` in `main.ts`
- Add `v-motion` scroll reveals (pure fade, whole sections, once-only) to below-the-fold sections
- Add custom `card-hover` shadow and `link-underline` CSS to config/styles
- Apply hover effects to ProjectCard, WriteupInfocard, NavBar, resume CTA, Contact/Writeups buttons
- Add `prefers-reduced-motion` support: `motion-safe:` prefix on all transforms + CSS override

**Success criteria:**
- [ ] Below-the-fold sections fade in on scroll (500ms ease-out, once only)
- [ ] Above-the-fold (AboutMe) renders instantly — no fade
- [ ] Card hover: lift, shadow, border highlight, bg tint
- [ ] NavBar: animated underline slides in from left on hover
- [ ] Resume CTA: arrow-only with slide-right hover
- [ ] `prefers-reduced-motion: reduce` disables all transform animations
- [ ] No layout shift during scroll reveals

---

## Phase 3: Vue Flow Experience Timeline
**Goal:** Replace the static experience section with an interactive node-graph timeline.
**Requirements:** R2, R6 (palette)
**Dependencies:** None (can run after Phase 1 for consistent styling patterns)

**Scope:**
- Install `@vue-flow/core`
- Import `@vue-flow/core/dist/style.css` in `main.ts` (skip theme-default.css)
- Create `src/data/experiences.ts` — typed experience data with positions
- Build `ExperienceNode.vue` — custom node SFC with click-to-expand, Tailwind styling
- Build `ExperienceTimeline.vue` — Vue Flow wrapper with portfolio UX settings
- Disable: `nodes-draggable`, `nodes-connectable`, `zoom-on-scroll`
- Use `onPaneReady` + `fitView()` (not `fit-view-on-init`)
- Style edges with earth-tone palette
- Type node data with `Node<ExperienceNodeData>` generic

**Success criteria:**
- [ ] Experience timeline renders as connected node graph
- [ ] Clicking a node expands to show role details
- [ ] Nodes are not draggable; canvas doesn't zoom on scroll
- [ ] Graph auto-fits viewport on load (no layout flash)
- [ ] Styled consistently with site palette

---

## Phase 4: Three.js Terrain Background
**Goal:** Add an animated 3D terrain mesh behind the hero section with graceful mobile degradation.
**Requirements:** R3, R7 (a11y), R8 (performance)
**Dependencies:** None (goes last due to highest risk)

**Scope:**
- Install `three` + `@types/three`
- Build `useDeviceCapability.ts` — 4-tier detection (none/low/medium/high)
- Build `useTerrainBackground.ts` — full Three.js lifecycle composable:
  - GLSL vertex shader with sine-wave displacement
  - Fragment shader with elevation-based color blend (right-green → muted-peach)
  - Dynamic `import('three')` inside `onMounted`
  - `ResizeObserver` for canvas sizing
  - Page Visibility API to pause when tab hidden
  - Full `dispose()` on unmount (geometry, material, renderer)
- Build `TerrainBackground.vue` — canvas wrapper with absolute positioning
- Integrate behind hero section (`AboutMe.vue`) with `z-index` layering
- CSS gradient fallback for `none`/`low` tiers
- `pointer-events: none` + `aria-hidden="true"` on canvas
- Cap `devicePixelRatio` at 2
- 80×80 segments desktop, 30×30 mobile

**Success criteria:**
- [ ] Terrain renders and animates smoothly on desktop
- [ ] Graceful fallback on mobile/low-end (CSS gradient, no Three.js download)
- [ ] Canvas does not block pointer events on content
- [ ] No GPU memory leak on navigation (dispose verified)
- [ ] Animation pauses when tab is hidden
- [ ] `npm run build` produces correct async chunk for Three.js

---

## Phase Order Rationale

1. **Project Grid first** — zero dependencies, establishes layout patterns, surfaces padding bugs early
2. **Animations second** — needs real content from Phase 1; installs one dependency, applies everywhere
3. **Vue Flow third** — self-contained, well-documented, medium complexity; done before hardest phase
4. **Three.js last** — highest risk/complexity; cannot block other features if it needs iteration
