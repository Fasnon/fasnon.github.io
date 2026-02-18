---
phase: 01-project-grid
plan: 02
subsystem: ui
tags: [vue3, typescript, tailwind, project-grid, responsive, transitions]

# Dependency graph
requires:
  - phase: 01-project-grid/01
    provides: ProjectCard component and typed projects data array
provides:
  - Rebuilt Projects.vue with responsive 1/2/3/4-column grid consuming ProjectCard and projects data
  - Show more/less toggle with TransitionGroup slide animation
  - NavBar z-index fix preventing hover overlap
  - Symmetric section padding replacing broken pl-40 pr-16
affects:
  - 02-scroll-hover-animations (animations will be applied to this grid view)
  - 03-vue-flow-timeline (section layout pattern to match)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "TransitionGroup with card-enter/leave CSS transitions for list add/remove animation"
    - "Dynamic INITIAL_COUNT based on viewport width via window resize listener"
    - "xl:grid-cols-4 breakpoint for extra large screen density"
    - "Heading kept outside grid padding wrapper so it aligns with other view titles"

key-files:
  created: []
  modified:
    - src/views/Projects.vue
    - src/components/ProjectCard.vue
    - src/components/NavBar.vue
    - src/data/projects.ts

key-decisions:
  - "TransitionGroup for show more/less — smooth card entrance/exit without JS animation libraries"
  - "Dynamic cols ref (resize listener) for INITIAL_COUNT — show correct number of projects for viewport"
  - "xl:grid-cols-4 added — fills wide screens better than stopping at 3 columns"
  - "shrink-0 on image wrapper in ProjectCard — prevents flex-col-reverse from collapsing image height on even cards"
  - "NavBar z-50 — prevents project card hover lift from appearing above the sticky navbar"
  - "image: undefined in projects data — removed non-existent screenshot paths, placeholder icons display instead"

patterns-established:
  - "Pattern: separate heading padding from grid padding so heading aligns with other view titles"
  - "Pattern: TransitionGroup with scoped card-enter/leave-active classes for grid list transitions"
  - "Pattern: window resize listener with onMounted/onUnmounted for reactive breakpoint tracking"

requirements-completed: [R1, R6]

# Metrics
duration: 30min
completed: 2026-02-18
---

# Phase 1 Plan 02: Projects.vue Responsive Grid with Show More/Less Toggle Summary

**Rebuilt Projects.vue as a responsive 1/2/3/4-column grid using ProjectCard and typed projects data, with TransitionGroup-animated show more/less toggle and fixed symmetric padding**

## Performance

- **Duration:** ~30 min
- **Started:** 2026-02-18T00:15:00Z
- **Completed:** 2026-02-18T00:45:00Z
- **Tasks:** 2 (1 auto + 1 checkpoint:human-verify)
- **Files modified:** 4

## Accomplishments
- Rebuilt `Projects.vue` from scratch: responsive Tailwind grid (1 col mobile, 2 tablet, 3 desktop, 4 xl), show more/less toggle with TransitionGroup animation, symmetric padding replacing the old `pl-40 pr-16` bug
- Fixed gradient rendering on even (flex-col-reverse) cards by adding `shrink-0` to the image wrapper in `ProjectCard.vue`
- Added `z-50` to `NavBar.vue` to prevent card hover lift from overlapping the sticky navigation
- Cleaned `projects.ts` data by removing non-existent image paths (set to `undefined`), placeholder gradient and icon display correctly for all cards

## Task Commits

Each task was committed atomically:

1. **Task 1: Rebuild Projects.vue with responsive grid and show more/less toggle** - `9bb2a91` (feat)
2. **Task 2: Visual verification refinements** - `8b1c62a` (fix)

## Files Created/Modified
- `src/views/Projects.vue` - Full rebuild: responsive grid, TransitionGroup, show more/less toggle, dynamic INITIAL_COUNT, symmetric padding, heading alignment
- `src/components/ProjectCard.vue` - shrink-0 on image wrapper, responsive sizing (text/padding/aspect), max-width constraints per breakpoint
- `src/components/NavBar.vue` - Added z-50 to prevent hover overlap with card lift effect
- `src/data/projects.ts` - Removed non-existent image paths (all set to undefined), placeholder icons remain

## Decisions Made
- Dynamic `cols` ref with resize listener used for `INITIAL_COUNT` so the initial visible count matches the column count — avoids showing a partial last row
- `xl:grid-cols-4` added during visual verification — 3 columns left too much whitespace on wide monitors
- Heading (`<h2>`) kept outside the grid's horizontal padding wrapper so it aligns with other section titles (About, Experience)
- `TransitionGroup` chosen over `v-show` for the toggle — cards animate in/out cleanly without requiring an animation library

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed gradient not rendering on even cards**
- **Found during:** Task 2 (visual verification)
- **Issue:** Cards with `flex-col-reverse` had the image wrapper collapsing to zero height, hiding the placeholder gradient
- **Fix:** Added `shrink-0` to the image/placeholder wrapper `div` in `ProjectCard.vue` so it doesn't shrink in a flex container
- **Files modified:** `src/components/ProjectCard.vue`
- **Verification:** Even-indexed cards (imageFirst=false) now display the gradient placeholder correctly
- **Committed in:** `8b1c62a` (Task 2 refinement commit)

**2. [Rule 1 - Bug] NavBar overlapping hovered cards**
- **Found during:** Task 2 (visual verification)
- **Issue:** Card hover lift (`-translate-y-2`) caused cards near the top of the viewport to visually overlap the sticky navbar
- **Fix:** Added `z-50` to the navbar root div in `NavBar.vue`
- **Files modified:** `src/components/NavBar.vue`
- **Verification:** Cards no longer appear above the navbar on hover
- **Committed in:** `8b1c62a` (Task 2 refinement commit)

**3. [Rule 1 - Bug] Removed non-existent image paths from project data**
- **Found during:** Task 2 (visual verification)
- **Issue:** Projects had `image` values set to placeholder paths that don't exist, causing broken img src fetches
- **Fix:** Set `image: undefined` for all projects without real screenshots — placeholder icon/gradient displays correctly instead
- **Files modified:** `src/data/projects.ts`
- **Verification:** No broken image requests in browser network tab; gradient placeholders render for all cards
- **Committed in:** `8b1c62a` (Task 2 refinement commit)

---

**Total deviations:** 3 auto-fixed (all Rule 1 - bugs found during visual verification)
**Impact on plan:** All fixes were necessary for correct visual rendering. No scope creep — all changes stayed within the files listed in the plan.

## Issues Encountered

None outside the auto-fixed bugs above.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Project grid is fully functional and visually verified
- `Projects.vue`, `ProjectCard.vue`, `StackTag.vue`, and `src/data/projects.ts` are all stable
- Phase 2 (scroll and hover animations) can apply `@vueuse/motion` directives to ProjectCard and the grid container
- NavBar z-index is now set correctly, so any future animated sections near the top won't overlap

---
*Phase: 01-project-grid*
*Completed: 2026-02-18*
