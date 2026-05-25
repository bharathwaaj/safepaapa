# Data / Skeleton Separation — Refactoring Plan

## Goal

Separate all Tamil content (text, scripts, lists) from page skeletons (HTML/Astro markup) so that:
1. An external translation service can work on data files without touching any markup
2. Each situation is its own file — easy to add, edit, or translate individually
3. Repeated content (scenarios on homepage + parents page) lives in one place
4. All translatable strings follow a consistent `{ ta, en }` shape

---

## Current State Analysis

### What is already in data files
| File | Content | Problem |
|------|---------|---------|
| `src/data/situations.ts` | All 8 situations | Single file, 400+ lines — hard to translate per situation |
| `src/data/wisdomCards.ts` | 3 wisdom quotes | OK size but could be a folder |

### What is hardcoded inline in pages (needs extraction)

| Page | Inline content | Items |
|------|---------------|-------|
| `index.astro` | 5 safety rules array | 5 |
| `index.astro` | 4 situation strip cards | 4 |
| `index.astro` | 7 scenario cards | 7 — **duplicated** in parents.astro |
| `index.astro` | 20 daily thought strings | 20 |
| `index.astro` | 4 seasonal banners | 4 |
| `parents.astro` | 8 warning signs | 8 |
| `parents.astro` | 4 how-to-talk tips | 4 |
| `parents.astro` | 7 disclosure do/don't items | 7 |
| `parents.astro` | 4 situation scripts (mini) | 4 |
| `parents.astro` | 7 scenario cards | 7 — **duplicated** from index.astro |
| `parents.astro` | 4 online safety tips | 4 |
| `children.astro` | 5 safety rules | 5 — **duplicated** from index.astro |
| `children.astro` | Good/bad touch examples | ~6 |
| `children.astro` | Trusted adult roles | ~5 |
| `teachers.astro` | 8 warning signs to watch | 8 |
| `teachers.astro` | POCSO Section 19 steps | ~4 |
| `teachers.astro` | 5 safe classroom tips | 5 |
| `teachers.astro` | 7 disclosure do/don't items | 7 — **similar** to parents.astro |
| `schools.astro` | Assembly script body | long |
| `schools.astro` | PTA message body | long |
| `schools.astro` | 8 checklist items | 8 |
| `schools.astro` | 5 poster rules | 5 — **duplicated** from index.astro |
| `emergency.astro` | 4 emergency numbers | 4 |
| `emergency.astro` | 4 "what to say" steps | 4 |
| `resources.astro` | Emergency numbers | 4 |
| `resources.astro` | NGO list | ~5 |
| `resources.astro` | Tamil Nadu bodies | ~3 |
| `Layout.astro` | Nav labels | 6 |
| `Layout.astro` | Footer text | static |

### Key duplications to fix
- **Safety rules**: 5 rules inline in `index.astro`, `children.astro`, and `schools.astro`
- **Scenarios**: 7 scenario cards inline in both `index.astro` and `parents.astro`
- **Disclosure do/don't**: similar lists in `parents.astro` and `teachers.astro`
- **Emergency numbers**: in `emergency.astro`, `resources.astro`, and `Layout.astro`

---

## Target Structure

```
src/
  data/
    situations/
      _types.ts              ← shared interfaces (Situation, SituationScript)
      _index.ts              ← imports all situations, exports situations[]
      stranger-candy.ts
      school-van.ts
      relative-secret.ts
      online-friend.ts
      lost-in-mall.ts
      unsafe-relative.ts
      school-toilet.ts
      gift-from-stranger.ts

    wisdomCards/
      _index.ts              ← exports wisdomCards[]
      card-appa-salem.ts
      card-amma-coimbatore.ts
      card-paatti-madurai.ts

    safetyRules.ts           ← 5 rules — used on home, children, schools
    scenarios.ts             ← 7 tap-to-reveal cards — used on home, parents
    emergencyNumbers.ts      ← numbers used on emergency, resources, layout

    parents.ts               ← warning signs, how-to-talk, disclosure, online tips
    children.ts              ← good/bad touch, trusted adults, body autonomy content
    teachers.ts              ← signs to watch, POCSO steps, classroom tips, disclosure
    schools.ts               ← assembly script, PTA message, checklist items
    emergency.ts             ← what-to-say steps, page-specific copy
    resources.ts             ← NGO list, TN bodies, links
    nav.ts                   ← nav labels, footer text
    dailyThoughts.ts         ← 20 rotating thoughts
    seasonal.ts              ← 4 seasonal banners
```

### Translation-friendly field convention
Every content object must use this shape consistently:
```ts
{ ta: string; en: string }        // bilingual item
{ label: string; lines: string[] } // script block (already in situations)
```
Tamil strings live in `ta`, English in `en`. An external service can grep for all `ta:` fields per file.

---

## Tasks & Commits

### Commit 1 — `refactor: split situations.ts into per-situation files`

**Why**: Translators (and Codex) can now open one file per situation. No risk of breaking another situation while editing one.

- [ ] Create `src/data/situations/_types.ts` — move `SituationScript` and `Situation` interfaces here
- [ ] Create `src/data/situations/stranger-candy.ts`
- [ ] Create `src/data/situations/school-van.ts`
- [ ] Create `src/data/situations/relative-secret.ts`
- [ ] Create `src/data/situations/online-friend.ts`
- [ ] Create `src/data/situations/lost-in-mall.ts`
- [ ] Create `src/data/situations/unsafe-relative.ts`
- [ ] Create `src/data/situations/school-toilet.ts`
- [ ] Create `src/data/situations/gift-from-stranger.ts`
- [ ] Create `src/data/situations/_index.ts` — imports all, exports `situations[]` and `getSituation()`
- [ ] Delete `src/data/situations.ts`
- [ ] Update `src/pages/situations/[slug].astro` import path
- [ ] Update `src/pages/situations/index.astro` import path
- [ ] Verify build passes

---

### Commit 2 — `refactor: extract shared safety rules, scenarios, emergency numbers`

**Why**: These are currently duplicated across 2–3 pages each. One source of truth.

- [ ] Create `src/data/safetyRules.ts`
  - 5 rules with `{ icon, ta, en }` shape
  - Used in: `index.astro` (rules section), `children.astro` (rules section), `schools.astro` (poster)
- [ ] Create `src/data/scenarios.ts`
  - 7 tap-to-reveal scenarios with `{ icon, prompt, promptEn, answer, answerLabel }` shape
  - Used in: `index.astro` and `parents.astro` (currently duplicated)
- [ ] Create `src/data/emergencyNumbers.ts`
  - Numbers with `{ number, name, ta, en, href, color }` shape
  - Used in: `emergency.astro`, `resources.astro`
- [ ] Update `index.astro` — replace inline arrays with imports
- [ ] Update `parents.astro` — replace duplicated scenarios with import
- [ ] Update `children.astro` — replace inline safety rules with import
- [ ] Update `schools.astro` — replace inline poster rules with import
- [ ] Update `emergency.astro` — replace inline numbers with import

---

### Commit 3 — `refactor: extract parents page content to data file`

**Why**: parents.astro has 40+ inline content items. Translators should not touch `.astro` markup.

- [ ] Create `src/data/parents.ts` with sections:
  - `warningSigns: { ta, en }[]` — 8 items
  - `howToTalk: { ta, en, tip }[]` — 4 items
  - `disclosureDos: { do: boolean, ta, en }[]` — 7 items
  - `situationScripts: { icon, ta, en, script }[]` — 4 items
  - `onlineSafetyTips: string[]` — 4 Tamil tips
- [ ] Update `parents.astro` — replace all inline arrays with `import { ... } from '../data/parents'`

---

### Commit 4 — `refactor: extract children, teachers page content to data files`

- [ ] Create `src/data/children.ts` with:
  - `goodBadTouchExamples: { type: 'good'|'bad', ta, en }[]`
  - `trustedAdultRoles: { icon, ta, en }[]`
  - `bodyAutonomyPoints: { ta, en }[]`
  - `yesNoRules: { ta, en }[]` — the "you can say no" rules
- [ ] Update `children.astro` to use imports

- [ ] Create `src/data/teachers.ts` with:
  - `warningSignsToWatch: { ta, en }[]` — 8 items
  - `pocssoSteps: { step: number, ta, en }[]`
  - `safeClassroomTips: { ta, en }[]` — 5 items
  - `disclosureDos: { do: boolean, ta, en }[]` — 7 items (similar to parents, but teacher-framed)
- [ ] Update `teachers.astro` to use imports

---

### Commit 5 — `refactor: extract schools page content to data file`

**Why**: Assembly script and PTA message are long strings — they need careful translation and should not be in markup.

- [ ] Create `src/data/schools.ts` with:
  - `assemblyScript: { paragraphs: string[] }` — each paragraph as a separate string (easier to translate line by line)
  - `ptaMessage: { paragraphs: string[] }` — same
  - `checklistItems: { icon, ta, en }[]` — 8 items
- [ ] Update `schools.astro` to use imports
- [ ] Note: Poster rules already come from `safetyRules.ts` after Commit 2

---

### Commit 6 — `refactor: extract emergency, resources, daily/seasonal content`

- [ ] Create `src/data/emergency.ts` with:
  - `whatToSaySteps: { step: number, ta, en }[]` — 4 steps
  - `pageHeadlines: { ta, en }` — hero text
- [ ] Update `emergency.astro`

- [ ] Create `src/data/resources.ts` with:
  - `ngoList: { name, ta, phone, url? }[]`
  - `tnGovBodies: { name, ta, description }[]`
- [ ] Update `resources.astro`

- [ ] Create `src/data/dailyThoughts.ts` — move the 20 `{ ta, en }` thought objects out of the `<script>` tag in `index.astro`
- [ ] Create `src/data/seasonal.ts` — move the 4 seasonal banner objects out of `index.astro`
- [ ] Update `index.astro` — import and pass data into the inline `<script>` via data attributes or a `<script define:vars>` block

---

### Commit 7 — `refactor: extract nav labels and footer text`

**Why**: Nav labels are in `Layout.astro` — the only UI string that touches every page.

- [ ] Create `src/data/nav.ts` with:
  - `navLinks: { href, label }[]`
  - `footerText: { tagline, legal }` — the footer blurb
- [ ] Update `Layout.astro` to import nav from data

---

### Commit 8 — `refactor: split wisdomCards into per-card files`

- [ ] Create `src/data/wisdomCards/` folder
- [ ] Create `src/data/wisdomCards/card-appa-salem.ts`
- [ ] Create `src/data/wisdomCards/card-amma-coimbatore.ts`
- [ ] Create `src/data/wisdomCards/card-paatti-madurai.ts`
- [ ] Create `src/data/wisdomCards/_index.ts` — imports all, exports `wisdomCards[]`
- [ ] Update `index.astro` import path

---

## Translation Workflow (after this refactor)

Once all commits are merged, the translation handoff is:

1. Hand translator the entire `src/data/` folder
2. Translator works only on `ta:` fields — all `en:` fields stay (or get their own target language field added)
3. Markup in `src/pages/` and `src/components/` is never touched
4. New language could be: `{ ta, en, hi? }` — just add a field

### Files a translator needs to touch (after refactor)
```
src/data/situations/stranger-candy.ts    ← title, summary, why, scripts, remember
src/data/situations/school-van.ts        ← same shape
... (one per situation)
src/data/safetyRules.ts                  ← 5 rules
src/data/scenarios.ts                    ← 7 scenarios
src/data/parents.ts                      ← warning signs, tips, scripts
src/data/children.ts                     ← body safety content
src/data/teachers.ts                     ← classroom content
src/data/schools.ts                      ← assembly script, PTA message
src/data/emergency.ts                    ← what-to-say steps
src/data/resources.ts                    ← NGO list
src/data/wisdomCards/*.ts                ← one per quote
src/data/nav.ts                          ← nav labels, footer
src/data/dailyThoughts.ts               ← 20 thoughts
src/data/seasonal.ts                     ← 4 banners
```

### Files a translator should NOT touch
```
src/layouts/Layout.astro
src/components/*.astro
src/pages/*.astro
src/styles/global.css
public/
```

---

## Status

| Commit | Description | Status |
|--------|-------------|--------|
| 1 | Split situations into per-file | ✅ Done |
| 2 | Extract shared: safetyRules, scenarios, emergencyNumbers | ✅ Done |
| 3 | Extract parents page content | ✅ Done |
| 4 | Extract children + teachers content | ✅ Done |
| 5 | Extract schools content | ✅ Done |
| 6 | Extract emergency, resources, daily/seasonal | ✅ Done |
| 7 | Extract nav labels | ✅ Done |
| 8 | Split wisdomCards into per-card files | ✅ Done |
