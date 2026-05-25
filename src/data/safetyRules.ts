/** 5 core body-safety rules — used on home page, schools poster, and children page */
export interface SafetyRule {
  icon: string;
  ta: string;   // Tamil
  en: string;   // English
}

export const safetyRules: SafetyRule[] = [
  {
    icon: '🙋',
    ta: 'உன் உடல் உனக்கே சொந்தம்',
    en: 'Your body belongs to you alone.',
  },
  {
    icon: '✋',
    ta: 'நல்ல தொடுதல் — கெட்ட தொடுதல் வேறுபாடு தெரிய வேண்டும்',
    en: 'Know the difference between safe and unsafe touch.',
  },
  {
    icon: '🚫',
    ta: '"வேண்டாம்" என்று சொல்லலாம் — யாரிடமும்',
    en: 'You can say NO to any uncomfortable touch — even from adults.',
  },
  {
    icon: '🗣️',
    ta: 'நம்பகமான பெரியவரிடம் சொல் — இது உன் தவறே இல்லை',
    en: 'Tell a trusted adult — it is NEVER your fault.',
  },
  {
    icon: '📞',
    ta: 'யாரும் கேட்காவிட்டால் தொடர்ந்து சொல் — 1098 அழை',
    en: 'If no one listens, keep telling. Call CHILDLINE 1098.',
  },
];
