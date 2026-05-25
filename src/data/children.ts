/** All content for the children page — translators edit only this file */

// ── Good touch examples ───────────────────────────────────────────────────────

export interface TouchExample {
  emoji: string;
  ta: string;
}

export const goodTouchExamples: TouchExample[] = [
  { emoji: '🤗', ta: 'அம்மா அப்பா கட்டிப்பிடிப்பது' },
  { emoji: '🩺', ta: 'டாக்டர் பரிசோதிப்பது (அம்மா/அப்பா இருக்கும்போது)' },
  { emoji: '👋', ta: 'கைகுலுக்குவது' },
  { emoji: '🩹', ta: 'காயத்திற்கு மருந்து போடுவது' },
];

// ── Bad touch examples ────────────────────────────────────────────────────────

export const badTouchExamples: TouchExample[] = [
  { emoji: '❌', ta: 'உன் உள்ளாடை மூடும் இடங்களை தொடுவது' },
  { emoji: '❌', ta: 'நீ "வேண்டாம்" சொன்னாலும் தொடுவது' },
  { emoji: '❌', ta: '"ரகசியமாக வை" என்று சொல்வது' },
  { emoji: '❌', ta: 'உன்னை நோக்கி ஆபாச படங்கள் காட்டுவது' },
];

// ── Trusted adult roles ───────────────────────────────────────────────────────

export interface TrustedAdult {
  icon: string;
  label: string;
}

export const trustedAdults: TrustedAdult[] = [
  { icon: '👩‍👧', label: 'அம்மா' },
  { icon: '👨‍👧', label: 'அப்பா' },
  { icon: '👩‍🏫', label: 'ஆசிரியர்' },
  { icon: '👵',   label: 'பாட்டி / தாத்தா' },
  { icon: '👩',   label: 'அத்தை' },
  { icon: '📞',   label: '1098' },
];
