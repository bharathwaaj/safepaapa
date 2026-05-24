# OG Image Generation — Instructions for Codex / ChatGPT

Generate one 1200×630 JPEG per row below.
Save each file to `public/og/<filename>` in the safepaapa project.
Do not alter any other files.

---

## How to generate

For each image:
1. Use the prompt exactly as written below
2. Generate at **1200×630 pixels**, JPEG format
3. Save to `public/og/<filename>`
4. After all images are saved, run `git add public/og/ && git commit -m "chore: add og images" && git push`

---

## Images to generate

| File | Status |
|------|--------|
| `public/og/home.jpg` | ⬜ Pending |
| `public/og/parents.jpg` | ⬜ Pending |
| `public/og/children.jpg` | ⬜ Pending |
| `public/og/teachers.jpg` | ⬜ Pending |
| `public/og/schools.jpg` | ⬜ Pending |
| `public/og/emergency.jpg` | ⬜ Pending |
| `public/og/resources.jpg` | ⬜ Pending |
| `public/og/situations.jpg` | ⬜ Pending |

---

## Prompts

### `public/og/home.jpg`
```
A warm Tamil mother kneeling to eye level with her young daughter in a bright home interior. Dark teal overlay at the bottom third with bold white Tamil text "குழந்தைகளை பாதுகாப்போம்" and "SafePaapa · safepaapa.in" in the bottom right corner. Hopeful, protective atmosphere, Tamil Nadu home setting, soft natural morning light. Photorealistic style. 1200x630 JPEG.
```

---

### `public/og/parents.jpg`
```
Tamil father and mother sitting together with their young child between them, warm evening lamp light, open picture book on their laps, caring and attentive expressions. Dark teal bottom bar with white text "பெற்றோருக்கு வழிகாட்டி · SafePaapa". Photorealistic, Tamil Nadu home setting. 1200x630 JPEG.
```

---

### `public/og/children.jpg`
```
A confident Tamil girl aged 8 in school uniform, one hand raised in a calm but firm stop gesture, gentle brave smile, bright teal background. Bold white text overlay "உன் உடல் உனக்கே சொந்தம்" in upper area and "SafePaapa" bottom right. Flat illustration style, empowering and safe mood, no scary elements. 1200x630 JPEG.
```

---

### `public/og/teachers.jpg`
```
Kind Tamil female teacher sitting beside a student who is quietly confiding something, warm afternoon light in an empty classroom, teacher leaning in with calm and trustworthy expression. Dark teal bottom bar with white text "ஆசிரியர்களுக்கு · POCSO · SafePaapa". Photorealistic, Tamil Nadu school setting. 1200x630 JPEG.
```

---

### `public/og/schools.jpg`
```
Tamil school teacher standing at the front of a bright classroom holding up a colourful safety rules poster, young students aged 7-10 seated and listening attentively, Tamil Nadu government school setting, morning sunlight through large windows. Dark teal bottom bar with white text "பள்ளி குழந்தை பாதுகாப்பு · SafePaapa". Flat illustration style, warm and empowering mood. 1200x630 JPEG.
```

---

### `public/og/emergency.jpg`
```
Bold solid red background. Giant white text "1098" centered in the upper half, below it "CHILDLINE" in white bold text, below that smaller Tamil text "குழந்தை ஆபத்தில் இருந்தால் — இப்போதே அழைக்கவும்". Thin horizontal strip at the bottom showing "100 · Police  |  181 · Women Helpline  |  112 · Emergency" in white. "SafePaapa" small text bottom right. Clean typographic design, no photos, no illustrations. 1200x630 JPEG.
```

---

### `public/og/resources.jpg`
```
Dark teal (#042f2e) background. Left half: large white text "1098" with "CHILDLINE" in teal-accent below it, and Tamil text "உதவி எண்கள்" beneath that. Right half: a Tamil woman's hand holding a smartphone screen that displays the number 1098. Bold white "SafePaapa · safepaapa.in" at the bottom. Clean, trustworthy, minimal design. 1200x630 JPEG.
```

---

### `public/og/situations.jpg`
```
Dark teal (#042f2e) background. Four large emoji-style icons arranged in a 2x2 grid in the centre: candy 🍬 (top left), school van 🚐 (top right), shushing face 🤫 (bottom left), mobile phone 📱 (bottom right). Above the grid bold white Tamil text "இந்த சூழல்களில் உங்கள் குழந்தை என்ன செய்வார்?". Below the grid smaller white text "Tap to prepare your child". "SafePaapa · safepaapa.in" bottom right in teal-accent colour. Flat clean illustration style. 1200x630 JPEG.
```

---

## Notes for Codex

- All images go in `public/og/` — create the folder if it does not exist
- The Layout component references these as `/og/<filename>` via the `ogImage` prop on each page
- Situation pages (`/situations/[slug]`) reuse their existing `/images/` photos — no OG images needed for those
- After generating, update the Status column above from ⬜ Pending to ✅ Generated
