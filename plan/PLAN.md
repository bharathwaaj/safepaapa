# SafePaapa — Build Plan & Progress

> Tamil Nadu child safety awareness site. Tamil-first, WhatsApp-viral, emotionally resonant.
> Stack: Astro · Tailwind CSS v4 · pnpm · Netlify · Lucide icons · Nunito + Noto Sans Tamil

---

## ✅ Done

### Infrastructure
- [x] Astro project scaffolded (`pnpm create astro`) in current directory
- [x] Tailwind CSS v4 configured with `@import "tailwindcss"` in global.css
- [x] Netlify deploy config (`netlify.toml` — `pnpm build`, `dist/`)
- [x] `dependabot.yml` added

### Design System (`src/styles/global.css`)
- [x] 3-layer token architecture: L1 primitives (`:root`), L2 semantic (`@theme`), L3 dark mode (`.dark {}`)
- [x] Brand tokens: `brand`, `brand-soft`, `brand-muted`, `brand-strong`, `brand-fg`, `brand-text`, `brand-border`
- [x] Surface tokens: `surface`, `surface-raised`, `surface-sunken`, `surface-ink`
- [x] Text tokens: `text`, `text-muted`, `text-subtle`, `text-inverse`
- [x] Border tokens: `border`, `border-strong`, `border-subtle`
- [x] Action tokens: `action`, `action-strong`, `action-fg`
- [x] Awareness/emotional tone tokens: `urgent-*`, `care-*`, `calm-*`, `trust-*` (soft, strong, fg, text, border variants)
- [x] Sage neutral gray scale overriding Tailwind's default grays
- [x] Shadow tokens: `shadow-card`, `shadow-raised`, `shadow-float`
- [x] Radius tokens: `radius-sm` through `radius-full`
- [x] `--leading-snug: 1.4` override (Tamil script needs more room than Latin default 1.375)
- [x] Dark mode: full `.dark {}` overrides for all semantic tokens
- [x] Body font: Nunito + Noto Sans Tamil (Google Fonts via `<link>` in Layout)

### Components
- [x] `src/layouts/Layout.astro` — shell with:
  - Emergency strip (dark bg, urgent-colored 1098)
  - Sticky header with logo, desktop nav, dark mode toggle, 1098 CTA, mobile hamburger
  - Anti-FOUC `is:inline` theme script
  - Footer with logo, nav links, emergency numbers
  - Mobile menu toggle (JS)
  - **Nav responsive fix**: `text-xs gap-3` at md, `text-sm gap-6` at lg (Tamil labels too wide at 1024px)
- [x] `src/components/ImagePlaceholder.astro` — dual-purpose:
  - Shows dashed placeholder + visible ChatGPT prompt when no `src`
  - Shows `<img>` with Netlify Image CDN URL (`/.netlify/images?...`) in prod when `src` given
  - Props: `prompt`, `src?`, `width`, `height`, `aspect`, `fit`, `class`, `rounded`

### Pages

#### `src/pages/index.astro` (Homepage) — Phase 1 rewrite

Original Phase 1 plan items and their status:

- [x] **Emotional hook hero** — single Tamil emotional statement, no statistics
  - "உங்கள் குழந்தையிடம் இன்று பேசியிருக்கீங்களா?"
  - 4 words as `<span class="block">` for even line spacing
  - Responsive font: `text-2xl sm:text-3xl md:text-4xl`
  - Responsive leading: `leading-snug sm:leading-[1.5] md:leading-[1.6]`
  - `min-w-0` on text column to respect grid boundary
- [x] **Removed "Three Pillars" section** — was too NGO-brochure; replaced with "யாருக்கு?" audience cards
- [x] **Situation card strip** — 4 real-world scenario cards (stranger candy, school van, secret-keeping relative, online friend)
  - ⚠️ "Start in 60 seconds" branding/label is **not yet added** to the strip header
  - ⚠️ Cards currently link to `/parents#situations` — should eventually link to `/situations/[slug]` (Phase 2)
- [x] **Tiny Wisdom section** — 3 first-person Tamil quotes from parents/grandparent
  - ⚠️ Not yet **screenshot-optimised** — quotes should be styled as bold shareable cards (high contrast, clear author, copy-paste friendly layout for WhatsApp forwards)
- [ ] **"Send to 3 parents" CTA** — currently a generic "WhatsApp-ல் பகிர" button
  - The original plan specified a *specific* viral mechanic: prompt "இதை 3 பெற்றோரிடம் அனுப்புங்கள்" (send to 3 parents)
  - This framing is more viral than a generic share button — not yet implemented
- [x] "Why Now" callout — Sulur incident context
- [x] 5 Safety Rules — emoji + Tamil + English
- [x] "யாருக்கு?" section — 3 audience cards with ImagePlaceholders
- [x] All ImagePlaceholders have Tamil Nadu-specific ChatGPT prompts; Codex has generated images (src props set)

#### `src/pages/parents.astro`
- [x] Hero with ImagePlaceholder (family talk scene)
- [x] Warning signs section — ImagePlaceholder (worried parent observing child)
- [x] "How to talk" section — 4 tips with ImagePlaceholder (bedtime talk)
- [x] "If child discloses" — do/don't list with ImagePlaceholder (comforting hug)
- [x] **Situations section** (`#situations`) — 4 word-for-word Tamil scripts parents can use:
  - Stranger offering candy/gift
  - School van driver alone
  - Relative saying "keep this secret"
  - Online friend wanting to meet
- [x] Online safety section with ImagePlaceholder (parent + child + phone)
- [x] CHILDLINE 1098 CTA
- [x] All design tokens fixed (replaced stale `gray-*`, `green-*` with semantic tokens)

#### `src/pages/children.astro`
- [x] Care-soft hero (no image overlay, clean)
- [x] Body autonomy section with ImagePlaceholder (confident child)
- [x] Good touch / Bad touch two-column cards with swimsuit-zone diagram ImagePlaceholder
- [x] Swimsuit rule callout
- [x] "Say NO — Yell Run Tell" with ImagePlaceholder (stop gesture)
- [x] Trusted adults grid with ImagePlaceholder (community of care circle)
- [x] "It is NEVER your fault" — trust-soft styled callout
- [x] CHILDLINE 1098 CTA
- [x] All design tokens fixed (replaced `yellow-*`, `purple-*`)

#### `src/pages/teachers.astro`
- [x] Hero with ImagePlaceholder (teacher listening to student)
- [x] "Why teachers matter" callout
- [x] Signs to watch — ImagePlaceholder (teacher observing withdrawn student)
- [x] POCSO Section 19 — mandatory reporting explanation with ImagePlaceholder (duty-of-care call)
- [x] Safe classroom tips with ImagePlaceholder (circle discussion)
- [x] "If student discloses" — do/don't list
- [x] CHILDLINE 1098 + Police 100 CTA
- [x] All design tokens fixed

#### `src/pages/resources.astro`
- [x] Emergency numbers: 1098, 100, 181, 112 — clickable `tel:` links
- [x] "Save to phone" card with ImagePlaceholder (hand saving 1098 to contacts)
- [x] Tamil Nadu government bodies (CWC, POCSO court, DCPU)
- [x] NGO list (CHILDLINE India, Tulir, iCall)
- [x] WhatsApp share CTA with ImagePlaceholder (woman forwarding message)
- [x] All design tokens fixed

### Bug Fixes
- [x] Hero headline overflow into image column → `min-w-0` on text column
- [x] `<br />` vs block spans causing uneven Tamil line-height → single inline flow then 4 block spans
- [x] "பேசியிருக்கீங்களா?" cut on iPhone → responsive `text-2xl sm:text-3xl md:text-4xl`
- [x] CTA arrow wrapping to next line → `whitespace-nowrap` on buttons
- [x] Warning signs image overflow → `w-36 sm:w-[220px] shrink-0` on wrapper
- [x] 1098 nav button cut on iPad Pro (1024px) → `text-xs gap-3` at md, `text-sm gap-6` at lg
- [x] Tamil leading too tight → `--leading-snug: 1.4` design token override

---

## 🔲 Pending

### Phase 1 — Remaining Homepage Items ✅ DONE

- [x] **"Start in 60 seconds" label** — added above situation strip
- [x] **"Send to 3 parents" CTA** — viral mechanic with "இதை 3 பெற்றோரிடம் அனுப்புங்கள்"
- [x] **Screenshot-optimised Tiny Wisdom cards** — high-contrast dark teal cards with Web Share API + WhatsApp fallback

---

### Phase 2 — Situation Pages ✅ DONE

- [x] `src/data/situations.ts` — TypeScript data file (8 situations, no MDX/content collections needed)
- [x] `src/pages/situations/index.astro` — grid of all 8 situation cards
- [x] `src/pages/situations/[slug].astro` — dynamic detail pages with canvas-based share cards (Web Share API + WhatsApp fallback)
- [x] Homepage situation cards now link to `/situations/[slug]`
- [x] Nav updated: "சூழல்கள்" added as first nav item

### Phase 3 — Reusable Components ✅ DONE

- [x] `src/components/ShareCard.astro` — screenshot-optimised card with brand footer, aspect ratio options, print CSS
- [x] `src/components/SituationCard.astro` — reusable card (icon, Tamil, English, link, iconSize)
- [x] `src/components/ChecklistCard.astro` — printable checklist item with print-only checkbox
- [x] `src/components/TinyWisdom.astro` — screenshot-optimised dark teal quote card with share button
- [x] `src/components/Scenario.astro` — tap-to-reveal `<details>/<summary>` card with Tailwind `group-open:` variants
- [x] Homepage + situations/index refactored to use new components

### Phase 4 — Interactive Scenario Cards on Homepage ✅ DONE

- [x] `Scenario.astro` component built (Phase 3)
- [x] 7 scenario cards added to homepage — "இந்த சூழல்களில் என்ன செய்வீர்கள்?" section
  - Place in a new "இந்த சூழல்களில் என்ன செய்வீர்கள்?" section on `index.astro`
  - Each scenario: situation prompt → tap → reveals what to say/do
  - Example scenarios for homepage:
    1. அந்நியர் உன்னை தனியாக அழைத்தால்
    2. வேன் ஓட்டுநர் வழக்கத்திற்கு மாறாக நடந்தால்
    3. ஒரு பெரியவர் "யாரிடமும் சொல்லாதே" என்றால்
    4. ஆன்லைன் நண்பர் நேரில் சந்திக்க சொன்னால்
    5. யாரோ உன் உடலை தொட்டால் — என்ன செய்வாய்?
- [ ] After homepage validation, also add to `/situations/[slug]` pages and `/parents`

### Phase 5 — Schools Section + Printables

- [ ] New page `src/pages/schools.astro`
- [ ] Content:
  - [ ] **Assembly script** — 5-minute script a teacher can read aloud to students; copy-paste ready
  - [ ] **PTA copy-paste text** — pre-written WhatsApp/email message a teacher can forward to parents; not just talking points — literally pasteable text
  - [ ] **Downloadable poster** — one A4 poster with key safety rules
    - Print CSS: `@media print` hides nav/footer, card goes **full-bleed** (no margins), high contrast
    - Browser "Save as PDF" = download; no backend needed
  - [ ] Classroom checklist for teachers (uses `ChecklistCard.astro` from Phase 3)
  - [ ] ImagePlaceholders throughout (assembly scene, PTA meeting, poster preview)

### Phase 6 — Dynamic / Alive Feel ✅ DONE

- [x] **"Today's safety thought"** — 20 thoughts rotating by day-of-year, shown on homepage
- [x] **Seasonal content** — 4 seasons (summer, school reopening, festival, holiday) with contextual banners

### Phase 6b — Emergency Page (`/emergency`) ← added beyond original plan
> Not in the original phase plan — added as a good-to-have. Lower priority than Phase 6.
- [ ] New page `src/pages/emergency.astro`
- [ ] Designed for crisis scanning — very large numbers, minimal prose
- [ ] Content: 1098, 100, 181, 112 with "what to say when you call" step-by-step
- [ ] Add to nav (replace or supplement current "உதவி" link)

### Phase 7 — SEO & Meta
- [ ] Open Graph image (`public/og-image.jpg`) — for WhatsApp link previews
- [ ] `<meta property="og:*">` tags in Layout.astro
- [ ] `sitemap.xml` (Astro sitemap integration)
- [ ] `robots.txt`
- [ ] Tamil language hreflang

### Phase 8 — Performance & Polish
- [ ] Verify all ImagePlaceholder `src` props are set (Codex has generated most images)
- [ ] Check Netlify Image CDN is serving WebP in production
- [ ] Lighthouse audit (performance, accessibility, SEO)
- [ ] `aria-current="page"` on active nav link
- [ ] Skip-to-content link for accessibility
- [ ] Test dark mode across all pages

---

## Image Generation Status (for ChatGPT / Codex)

> Run Codex and ask it to scan all `.astro` files for `<ImagePlaceholder` where `src` is missing, generate images using each `prompt`, save to `public/images/`, and set the `src` prop.

| File | Image | Status |
|---|---|---|
| `index.astro` | hero-mother-daughter.jpg | ✅ Generated |
| `index.astro` | parents-safety-book.jpg | ✅ Generated |
| `index.astro` | child-confident-schoolgirl.jpg | ✅ Generated |
| `index.astro` | teacher-student-classroom.jpg | ✅ Generated |
| `index.astro` | hands-family-support.jpg | ✅ Generated |
| `parents.astro` | parents-family-talk.jpg | ✅ Generated |
| `parents.astro` | parent-warning-signs.jpg | ✅ Generated |
| `parents.astro` | bedtime-safety-talk.jpg | ✅ Generated |
| `parents.astro` | parent-comforting-child.jpg | ⬜ Pending |
| `parents.astro` | parent-child-phone.jpg | ⬜ Pending |
| `children.astro` | child-body-confidence.jpg | ✅ Generated |
| `children.astro` | safe-touch-diagram.jpg | ✅ Generated |
| `children.astro` | child-stop-gesture.jpg | ✅ Generated |
| `children.astro` | trusted-adults-circle.jpg | ✅ Generated |
| `teachers.astro` | teacher-listening-student.jpg | ⬜ Pending |
| `teachers.astro` | classroom-observation.jpg | ⬜ Pending |
| `teachers.astro` | teacher-duty-call.jpg | ⬜ Pending |
| `teachers.astro` | safe-classroom-discussion.jpg | ⬜ Pending |
| `resources.astro` | save-childline-contact.jpg | ✅ Generated |
| `resources.astro` | whatsapp-safety-share.jpg | ✅ Generated |

---

## Design Decisions (for reference)

| Decision | Choice | Why |
|---|---|---|
| Language | Tamil primary, English secondary/captions | Audience is Tamil Nadu families |
| Icons | Lucide = system UI, Emoji = human emotion | Hybrid — system precision + warmth |
| Font | Nunito + Noto Sans Tamil | Rounded warmth (Nunito) + Tamil script (Noto) |
| Primary color | Teal (`#0f766e`) | Calm, trustworthy — not alarming red |
| Urgent color | Rose (`#e11d48`) | Emergency numbers only |
| Neutral scale | Sage (green-tinted gray) | Warm, not cold tech gray |
| Images | ChatGPT DALL-E 3 via Codex | Contextual Tamil Nadu scenes |
| Image CDN | Netlify Image CDN | Auto WebP, resize, edge cache |
| Deployment | Netlify | Free, edge, Image CDN built-in |
