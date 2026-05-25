/** All content for the parents page — translators edit only this file */

// ── Warning signs ────────────────────────────────────────────────────────────

export interface BilingualItem {
  ta: string;
  en: string;
}

export const warningSigns: BilingualItem[] = [
  { ta: 'திடீர் நடத்தை மாற்றம்',                        en: 'Sudden changes in behaviour or mood' },
  { ta: 'தனிமையாக இருக்க விரும்புவது',                  en: 'Withdrawing from family and friends' },
  { ta: 'தூக்கமின்மை அல்லது கெட்ட கனவுகள்',             en: 'Sleep disturbances or nightmares' },
  { ta: 'குறிப்பிட்ட நபரை பார்க்க பயப்படுவது',          en: 'Fear of a specific person or place' },
  { ta: 'வயதுக்கு மீறிய பாலியல் அறிவு',                  en: 'Age-inappropriate sexual knowledge or behaviour' },
  { ta: 'உடல் அடையாளங்கள் — காயங்கள், வலி',              en: 'Unexplained physical injuries or complaints' },
  { ta: 'பள்ளி செல்ல மறுப்பது',                          en: 'Refusing to go to school or certain places' },
  { ta: 'சாப்பிட மறுப்பது அல்லது அதிகமாக சாப்பிடுவது',  en: 'Changes in eating habits' },
];

// ── How to talk ───────────────────────────────────────────────────────────────

export interface HowToTalkItem {
  ta: string;
  en: string;
  tip: string;
}

export const howToTalk: HowToTalkItem[] = [
  {
    ta: 'அன்றாட வாழ்வில் பேசுங்கள்',
    en: 'Bring it up naturally — during bath time, bedtime, or while watching TV together.',
    tip: 'உடல் பாகங்களை சரியான பெயரில் அழைக்கவும். மறைக்காமல் பேசவும்.',
  },
  {
    ta: '"நம்பகமான பெரியவர்" யார் என்று முடிவு செய்யுங்கள்',
    en: 'Help your child identify 3–5 trusted adults they can go to if something feels wrong.',
    tip: 'ஆசிரியர், அத்தை, உறவினர் — குழந்தையே தேர்ந்தெடுக்கட்டும்.',
  },
  {
    ta: '"நீ சொன்னால் நம்புவேன்" என்று சொல்லுங்கள்',
    en: 'Explicitly tell your child: "If anything happens, you can tell me and I will always believe you."',
    tip: 'இந்த ஒரு வாக்கியம் குழந்தை வெளிப்படுத்த தைரியம் கொடுக்கும்.',
  },
  {
    ta: '"ரகசியம்" பற்றி கற்றுக்கொடுங்கள்',
    en: 'Teach the difference between surprise secrets (OK) and unsafe secrets (not OK).',
    tip: 'நல்ல ரகசியம்: பிறந்தநாள் பரிசு. கெட்ட ரகசியம்: யாரோ உன் உடலை தொட்டது.',
  },
];

// ── Disclosure dos and don'ts ─────────────────────────────────────────────────

export interface DisclosureItem {
  do: boolean;
  ta: string;
  en: string;
}

export const disclosureDos: DisclosureItem[] = [
  { do: true,  ta: 'அமைதியாக கேளுங்கள்',                              en: 'Stay calm and listen without interrupting.' },
  { do: true,  ta: '"உன் தப்பில்லை" என்று சொல்லுங்கள்',               en: 'Immediately reassure: "This is not your fault."' },
  { do: true,  ta: '"சொன்னதற்கு நன்றி" என்று சொல்லுங்கள்',            en: 'Thank them for trusting you: "I am so glad you told me."' },
  { do: true,  ta: 'உடனே CHILDLINE 1098 அல்லது காவல்துறை அழைக்கவும்', en: 'Report immediately — CHILDLINE 1098 or police 100.' },
  { do: false, ta: 'கோபப்படாதீர்கள் — குழந்தை பயப்படுவார்கள்',        en: 'Do NOT react with anger — it silences the child.' },
  { do: false, ta: 'குற்றவாளியை நீங்களே எதிர்கொள்ள வேண்டாம்',         en: 'Do NOT confront the abuser yourself.' },
  { do: false, ta: '"நீ ஏன் சொல்லவில்லை?" என்று கேட்காதீர்கள்',       en: 'Do NOT question or interrogate your child.' },
];

// ── Situation scripts ─────────────────────────────────────────────────────────

export interface SituationScript {
  icon: string;
  ta: string;
  en: string;
  script: string;
}

export const situationScripts: SituationScript[] = [
  {
    icon: '🍬',
    ta: 'அந்நியர் இனிப்பு / பரிசு கொடுத்தால்',
    en: 'Strangers giving gifts or candy — how to teach refusal safely.',
    script: '"அந்நியர் எதுவும் கொடுத்தால் வேண்டாம் என்று சொல்லு. அவர் நல்லவரா கெட்டவரா என்று நீ தெரியாது. உடனே என்னிடம் சொல்."',
  },
  {
    icon: '🚐',
    ta: 'வேன் / ஆட்டோவில் தனியாக இருக்கும்போது',
    en: 'School transport safety — what your child should do if uncomfortable.',
    script: '"வேன் ஓட்டுநர் அல்லது வேறு யாரோ உன்னை தொட்டால் — உரக்க "வேண்டாம்!" என்று சொல். வீடு வந்தவுடன் என்னிடம் சொல்."',
  },
  {
    icon: '🤫',
    ta: 'யாரோ "ரகசியம் வை" என்றால்',
    en: 'Teaching children that body-related secrets must never be kept.',
    script: '"யாராவது உன் உடலை பற்றி ரகசியம் வை என்று சொன்னால் — அது கெட்ட ரகசியம். உடனே என்னிடம் சொல். உனக்கு எந்த தண்டனையும் இல்லை."',
  },
  {
    icon: '📱',
    ta: 'ஆன்லைன் நண்பர் தனியாக அழைத்தால்',
    en: 'Online safety — no in-person meetings without parental knowledge.',
    script: '"ஆன்லைனில் பேசும் யாரையும் நேரில் சந்திக்க வேண்டாம். என்னிடம் கேளாமல் செல்லாதே. போவதற்கு முன் என்னிடம் சொல்."',
  },
];

// ── Online safety tips ────────────────────────────────────────────────────────

export const onlineSafetyTips: string[] = [
  'குழந்தையின் phone-ல் உள்ள apps பற்றி தெரிந்துகொள்ளுங்கள் — தடை செய்யாமல், உரையாடுங்கள்.',
  'YouTube, Instagram, WhatsApp-ல் யாரும் தனிப்பட்ட செய்திகள் அனுப்பினால் உடனே சொல்லவும் என்று கற்பிக்கவும்.',
  'ஆன்லைனில் "நண்பர்கள்" என்று யாரையாவது தனியாக சந்திக்க சொன்னால் அது ஆபத்தானது என்று புரியவையுங்கள்.',
  'Screen time-ஐ பொது இடத்தில் (hall அல்லது kitchen) வைத்திருங்கள் — bedroom-ல் தனியாக phone கொடுக்காதீர்கள்.',
];
