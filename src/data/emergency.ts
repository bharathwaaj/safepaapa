/** All content for the emergency page — translators edit only this file */

import type { BilingualItem } from './parents';

// ── "What to say when you call 1098" steps ───────────────────────────────────

export interface WhatToSayStep extends BilingualItem {
  step: string;
}

export const whatToSaySteps: WhatToSayStep[] = [
  {
    step: '1',
    ta: '"என் பெயர் ___ . நான் ___ ல் இருக்கிறேன்."',
    en: 'State your name and location first.',
  },
  {
    step: '2',
    ta: '"ஒரு குழந்தை ஆபத்தில் இருக்கிறார் / என்னை யாரோ தொந்தரவு செய்கிறார்கள்."',
    en: 'Describe the problem in simple words.',
  },
  {
    step: '3',
    ta: '"இந்த address-ல் இருக்கிறோம்: ___"',
    en: 'Give the full address — street, area, city.',
  },
  {
    step: '4',
    ta: 'அவர்கள் கேட்கும் கேள்விகளுக்கு பதில் சொல்லுங்கள். Phone வைக்காதீர்கள்.',
    en: 'Answer their questions. Do not hang up until told to.',
  },
];
