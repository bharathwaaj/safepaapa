/** All content for the children page — translators edit only this file */

// ── Good touch examples ───────────────────────────────────────────────────────

export interface TouchExample {
  emoji: string;
  ta: string;
  en: string;
}

export const goodTouchExamples: TouchExample[] = [
  { emoji: '🤗', ta: 'அம்மா அப்பா கட்டிப்பிடிப்பது',                      en: 'A hug from mum or dad' },
  { emoji: '🩺', ta: 'டாக்டர் பரிசோதிப்பது (அம்மா/அப்பா இருக்கும்போது)', en: "A doctor's check-up (with a parent present)" },
  { emoji: '👋', ta: 'கைகுலுக்குவது',                                       en: 'A handshake' },
  { emoji: '🩹', ta: 'காயத்திற்கு மருந்து போடுவது',                         en: 'Putting medicine on a wound' },
];

// ── Bad touch examples ────────────────────────────────────────────────────────

export const badTouchExamples: TouchExample[] = [
  { emoji: '❌', ta: 'உன் உள்ளாடை மூடும் இடங்களை தொடுவது',    en: 'Touching the parts covered by your underwear' },
  { emoji: '❌', ta: 'நீ "வேண்டாம்" சொன்னாலும் தொடுவது',       en: 'Touching you even after you say "No"' },
  { emoji: '❌', ta: '"ரகசியமாக வை" என்று சொல்வது',            en: 'Asking you to "keep it a secret"' },
  { emoji: '❌', ta: 'உன்னை நோக்கி ஆபாச படங்கள் காட்டுவது',   en: 'Showing you inappropriate pictures' },
];

// ── Trusted adult roles ───────────────────────────────────────────────────────

export interface TrustedAdult {
  icon: string;
  ta: string;
  en: string;
}

export const trustedAdults: TrustedAdult[] = [
  { icon: '👩‍👧', ta: 'அம்மா',            en: 'Mum' },
  { icon: '👨‍👧', ta: 'அப்பா',            en: 'Dad' },
  { icon: '👩‍🏫', ta: 'ஆசிரியர்',         en: 'Teacher' },
  { icon: '👵',   ta: 'பாட்டி / தாத்தா', en: 'Grandparent' },
  { icon: '👩',   ta: 'அத்தை',            en: 'Aunt / Uncle' },
  { icon: '📞',   ta: '1098',             en: '1098' },
];
