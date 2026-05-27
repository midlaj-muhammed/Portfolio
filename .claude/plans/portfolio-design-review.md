# Portfolio Design Review Plan

## Design Review Summary

- **Initial Score:** 5/10
- **Overall Score (after fixes):** 7/10
- **Decisions Made:** 6
- **Unresolved:** 1 (DESIGN.md gap — recommend /design-consultation)

---

## NOT in Scope

| Decision | Rationale |
|----------|-----------|
| Custom 404 page | Not a design gap — a feature request. Add separately. |
| Individual blog post pages | No content exists yet. When articles are written, revisit. |
| Design system (DESIGN.md) | Recommend running `/design-consultation` to establish one. Too large for this review. |
| Hero animation changes | The scrollytelling canvas is the site's strongest asset. No changes needed. |

## What Already Exists

- **Glassmorphism card pattern:** `bg-white/[0.02] border border-white/10 backdrop-blur-md` — used across services, projects, blog, contact
- **fadeUpVariant animation:** Staggered entrance with `easeOut` — consistent across About, Blog, Contact
- **Pill shape pattern:** `rounded-full` on nav, social links, project categories, availability badge
- **font-serif italic accent:** Used on section heading spans ("Showcase", "Conversation", "Research")
- **Lucide icon system:** Consistent icon style across social links, project actions, services
- **Outfit font family:** Single typeface, loaded via `next/font/google`

---

## Pass 1: Information Architecture — 6/10 → 8/10

### Finding 1: Services grid is the textbook AI-template pattern

**Issue:** About.tsx:90-101 — three symmetric cards with icon + bold title + 2-line description. This is pattern #2 on the AI slop blacklist.

**Decision (D2):** Replace with bento grid layout — two side-by-side cards plus one full-width card.

**Implementation:**
- Change `grid grid-cols-1 md:grid-cols-3` to a bento layout
- "AI & ML Architecture" and "Full-Stack Engineering" side-by-side
- "Intelligent Systems" full-width below, potentially with a visual element or code snippet
- Vary card padding and internal layout to break symmetry

**Files:** `src/components/About.tsx`

### Finding 2: Section headings use identical pattern

Every section heading follows the same pattern: large `font-light` text with one `font-serif italic` span. While consistent, it becomes predictable.

**Not fixing now** — the pattern is recognizable as "this site's style" rather than "template." The bento grid change is sufficient to break the monotony.

---

## Pass 2: Interaction State Coverage — 4/10 → 7/10

### Finding 3: Contact form uses alert() for validation

**Issue:** Contact.tsx:31 — `alert("Message must be at least 10 characters long.")`. Browser popup breaks the premium glassmorphism design.

**Decision (D3):** Replace with inline validation — red text below the field.

**Implementation:**
- Add per-field error state: `{ name?: string, email?: string, projectType?: string, message?: string }`
- Validate on submit, show red text below each invalid field
- Remove the `alert()` call
- Style: `text-red-400 text-xs mt-1` for error text
- Keep `no-cors` Google Forms approach (it works) — no change to submission logic

**Files:** `src/components/Contact.tsx`

### Finding 4: No 404 page

**Issue:** No `src/app/not-found.tsx` exists. Next.js shows a default ugly 404 page.

**Not in scope** — feature request, not a design gap. Note for future work.

### Finding 5: Mobile project descriptions hidden

**Issue:** Projects.tsx:180 — `className="... hidden sm:block"`. On phones, project cards show only title + category. No way to know what the project does.

**Implementation:**
- Change to show truncated description on mobile: `line-clamp-2 sm:line-clamp-none`
- This gives mobile users a 2-line preview instead of nothing

**Files:** `src/components/Projects.tsx`

---

## Pass 3: User Journey & Emotional Arc — 5/10 → 7/10

### Finding 6: Blog cards are dead ends

**Issue:** Blog cards have "Read more" links and slug data, but clicking them does nothing. The slugs are hardcoded strings that don't point to any actual pages.

**Decision (D4):** Link blog cards to relevant project repos/demos.

**Implementation:**
- Add `relatedLink` field to each BlogPost interface entry
- Map each blog post to the most relevant project's live demo or repo:
  - "Building Explainable AI" → XAI Credit Scoring live demo
  - "Computer Vision for Agriculture" → Leaf Lens live demo
  - "Real-Time Sign Language Recognition" → Sign Language Detector Pro demo
- Make the entire `<motion.article>` wrapped in an `<a>` tag with `target="_blank"`
- Add `rel="noreferrer"` for external links

**Files:** `src/components/Blog.tsx`

### Finding 7: No visual rhythm between sections

**Issue:** Every section uses `bg-[#121212]`, same padding, same fade-up animation. The eye gets bored.

**Decision (D5):** Add gradient dividers between key sections.

**Implementation:**
- Add a subtle horizontal gradient line between About→Projects, Projects→Blog, Blog→Contact
- Pattern: `h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent`
- Place inside each section's top border area, or as a standalone divider element
- Keep existing `border-t border-white/5` but enhance with gradient

**Files:** `src/components/About.tsx`, `src/components/Projects.tsx`, `src/components/Blog.tsx`, `src/components/Contact.tsx`

---

## Pass 4: AI Slop Risk — 4/10 → 7/10

### Finding 8: Uniform border-radius on all cards

**Issue:** Every card uses `rounded-[2rem]` — services, projects, blog, contact. Same radius everywhere is a template signal.

**Decision (D6):** Vary border-radius by card type.

**Implementation:**
- Service cards (bento): `rounded-2xl` (1rem) — tighter, more contained
- Project cards: `rounded-[2rem]` — keep current, they're the hero content
- Blog cards: `rounded-2xl` (1rem) — tighter, distinct from projects
- Contact form: `rounded-3xl` (1.5rem) — between the two

**Files:** `src/components/About.tsx`, `src/components/Projects.tsx`, `src/components/Blog.tsx`, `src/components/Contact.tsx`

### Finding 9: Services grid description copy is generic

The service descriptions use vague language: "scalable deep learning models", "highly responsive, interactive web applications", "massive-scale data workflows." These could describe anyone's portfolio.

**Not fixing now** — copy refinement is a content task, not a structural design issue. Note for future polish.

---

## Pass 5: Design System Alignment — 3/10

No DESIGN.md exists. All design decisions are implicit in the code:

| Token | Current Usage | Status |
|-------|--------------|--------|
| Background | `#121212` (main), `#0a0a0a` (projects, footer), `#050505` (footer) | Implicit |
| Text | `white`, `gray-400`, `white/50`, `white/30` | Implicit |
| Card style | `bg-white/[0.02] border border-white/10 backdrop-blur-md` | Implicit |
| Border | `border-white/5` (sections), `border-white/10` (cards), `border-white/20` (nav) | Implicit |
| Radius | `rounded-[2rem]` (cards), `rounded-full` (pills) | Implicit — Decision 6 adds variation |
| Font | Outfit (all weights) | Explicit via next/font |
| Animation | `fadeUpVariant` (stagger, easeOut, 0.6-0.8s) | Implicit |

**Recommendation:** Run `/design-consultation` to extract these into a formal DESIGN.md. This review will proceed with the implicit system.

---

## Pass 6: Responsive & Accessibility — 5/10 → 7/10

### Finding 10: Mobile project descriptions hidden

Already covered in Finding 5 (Pass 2).

### Finding 11: Touch targets on mobile nav dock

**Issue:** Mobile nav buttons have `px-3 py-2.5` with `text-[10px]`. At 6 items in a ~400px dock, each button is roughly 60px wide — meets the 44px minimum. OK.

**No action needed.**

### Finding 12: Keyboard navigation for project cards

**Issue:** Project cards are `<motion.article>` elements but have no `tabindex` or keyboard interaction. The links inside (Live Demo, Source) are focusable, but the card itself isn't interactive — this is fine since the links are the actionable elements.

**No action needed.**

### Finding 13: Contact form labels

**Issue:** Form labels use `<label>` elements with `text-sm font-mono text-gray-400 uppercase tracking-wider`. They're visible and properly associated via DOM order (label immediately before input). Good.

**One improvement:** Add `htmlFor` attributes to connect labels to inputs for proper accessibility.

**Implementation:**
- Add `htmlFor="name"`, `htmlFor="email"`, `htmlFor="projectType"`, `htmlFor="message"` to labels
- Add matching `id` attributes to inputs

**Files:** `src/components/Contact.tsx`

---

## Pass 7: Unresolved Design Decisions

| Decision | Status | If Deferred |
|----------|--------|-------------|
| Services grid layout | **Resolved (D2)** — Bento grid | N/A |
| Contact form validation | **Resolved (D3)** — Inline validation | N/A |
| Blog card links | **Resolved (D4)** — Link to project repos | N/A |
| Section rhythm | **Resolved (D5)** — Gradient dividers | N/A |
| Border-radius variation | **Resolved (D6)** — Vary by card type | N/A |
| Mobile project descriptions | **Resolved** — Show truncated | N/A |
| Form label htmlFor | **Resolved** — Add accessibility attributes | N/A |
| DESIGN.md gap | **Deferred** — Recommend /design-consultation | Design decisions stay implicit |

---

## Implementation Tasks

Synthesized from this review's findings. Each task derives from a specific finding above.

- [x] **T1 (P1, human: ~1h / CC: ~15min)** — About — Bento grid services layout
  - Surfaced by: Pass 1 — Services grid is the textbook AI-template pattern (#2 on slop blacklist)
  - Files: `src/components/About.tsx`
  - Verify: Visual check — two cards side-by-side, one full-width below. No 3-column symmetry.

- [x] **T2 (P1, human: ~30min / CC: ~10min)** — Contact — Inline validation replacing alert()
  - Surfaced by: Pass 2 — alert() breaks premium glassmorphism feel
  - Files: `src/components/Contact.tsx`
  - Verify: Submit form with empty/short message. Red text appears below field, no browser popup.

- [x] **T3 (P2, human: ~15min / CC: ~5min)** — Blog — Wire up "Read more" to project links
  - Surfaced by: Pass 3 — Blog cards are dead ends; clicking does nothing
  - Files: `src/components/Blog.tsx`
  - Verify: Each blog card "Read more" opens a relevant project demo/repo in new tab.

- [x] **T4 (P2, human: ~20min / CC: ~5min)** — Global — Gradient dividers between sections
  - Surfaced by: Pass 3 — No visual rhythm; every section identical
  - Files: `src/components/About.tsx`, `src/components/Projects.tsx`, `src/components/Blog.tsx`
  - Verify: Subtle gradient lines visible between About/Projects, Projects/Blog, Blog/Contact.

- [x] **T5 (P2, human: ~10min / CC: ~5min)** — Global — Vary border-radius by card type
  - Surfaced by: Pass 4 — Uniform rounded-[2rem] on every card is a template signal
  - Files: `src/components/About.tsx`, `src/components/Blog.tsx`, `src/components/Contact.tsx`
  - Verify: Service cards use rounded-2xl, blog cards use rounded-2xl, contact uses rounded-3xl.

- [x] **T6 (P2, human: ~10min / CC: ~5min)** — Projects — Show truncated description on mobile
  - Surfaced by: Pass 6 — Mobile project cards show only title + category
  - Files: `src/components/Projects.tsx`
  - Verify: On mobile viewport, project cards show 2-line description preview.

- [x] **T7 (P3, human: ~10min / CC: ~5min)** — Contact — Add htmlFor to form labels
  - Surfaced by: Pass 6 — Labels lack explicit htmlFor/id connection
  - Files: `src/components/Contact.tsx`
  - Verify: Inspect DOM — each label has htmlFor matching input id.

---

## Review Log

```bash
$GSTACK_ROOT/bin/gstack-review-log '{"skill":"plan-design-review","timestamp":"2026-05-27T00:00:00Z","status":"issues_open","initial_score":5,"overall_score":7,"unresolved":1,"decisions_made":6,"commit":"'$(git rev-parse --short HEAD 2>/dev/null)'"}'
```

---

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` | Scope & strategy | 0 | — | — |
| Codex Review | `/codex review` | Independent 2nd opinion | 0 | — | — |
| Eng Review | `/plan-eng-review` | Architecture & tests (required) | 0 | — | — |
| Design Review | `/plan-design-review` | UI/UX gaps | 1 | issues_open | score: 5/10 → 7/10, 6 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | — | — |

- **UNRESOLVED:** 1 (DESIGN.md gap — recommend /design-consultation)
- **VERDICT:** Design review complete. Eng review required before shipping.
