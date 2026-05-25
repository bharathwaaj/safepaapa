/** All content for the teachers page — translators edit only this file */

import type { BilingualItem, DisclosureItem } from './parents';

// ── Warning signs to watch in students ───────────────────────────────────────

export const warningSignsToWatch: BilingualItem[] = [
  { ta: 'திடீர் கல்வி சரிவு',                                     en: 'Sudden drop in academic performance or concentration' },
  { ta: 'பள்ளிக்கு வர விரும்பாமல் இருப்பது',                      en: 'Unexplained reluctance to come to school' },
  { ta: 'குறிப்பிட்ட நபரை / இடத்தை தவிர்ப்பது',                  en: 'Avoiding a specific teacher, adult, or school area' },
  { ta: 'வகுப்பில் திடீர் நடத்தை மாற்றம்',                        en: 'Sudden aggression, withdrawal, or emotional outbursts' },
  { ta: 'மறை காயங்கள் அல்லது உடல் வலி',                          en: 'Unexplained bruises, injuries, or frequent physical complaints' },
  { ta: 'வயதுக்கு மீறிய பாலியல் அறிவு',                          en: 'Age-inappropriate sexual language, drawing, or behaviour' },
  { ta: 'தனிமையாக இருத்தல், நண்பர்களிடமிருந்து விலகுதல்',        en: 'Social withdrawal from peers' },
];

// ── Safe classroom tips ───────────────────────────────────────────────────────

export const safeClassroomTips: BilingualItem[] = [
  { ta: 'நல்ல தொடுதல் / கெட்ட தொடுதல் (Good Touch / Bad Touch) பாடம் ஆண்டுதோறும் கற்பியுங்கள்',   en: 'உடல் பாதுகாப்பை ஒரே முறை அல்ல — ஒவ்வொரு ஆண்டும் கற்பியுங்கள்.' },
  { ta: '"நம்பகமான பெரியவர்" பற்றி வகுப்பில் பேசுங்கள்',           en: 'Discuss trusted adults — let children name their own.' },
  { ta: 'தனியாக மாணவரை அறையில் வைக்காதீர்கள்',                   en: 'Never be alone with a single student in a closed room.' },
  { ta: 'குழந்தை சொல்வதை நம்பி கேளுங்கள்',                       en: 'When a child discloses — believe them first, investigate later.' },
  { ta: 'பள்ளியின் பாதுகாப்பு பொறுப்பாளர் (Safeguarding Officer) யார் என்று தெரிந்துகொள்ளுங்கள்',       en: 'உங்கள் பள்ளியின் நியமிக்கப்பட்ட பாதுகாப்பு பொறுப்பாளரை தெரிந்துகொள்ளுங்கள்.' },
  { ta: 'சக ஊழியரின் தவறான நடத்தையையும் புகார் செய்யுங்கள்',     en: 'சொல்வது சங்கடமாக இருந்தாலும், சக ஊழியரின் தவறான நடத்தையையும் புகார் செய்யுங்கள்.' },
];

// ── Student disclosure dos and don'ts ─────────────────────────────────────────

export const studentDisclosureDos: DisclosureItem[] = [
  { do: true,  ta: 'அமைதியாக கேளுங்கள் — குறுக்கிடாதீர்கள்',                        en: 'Listen calmly without interrupting.' },
  { do: true,  ta: '"உன் தப்பில்லை, நான் உதவுவேன்" என்று சொல்லுங்கள்',              en: 'Say: "This is not your fault. I will help you."' },
  { do: true,  ta: 'உடனே தலைமை ஆசிரியர் / முதல்வரிடம் (Headmaster / Principal) தெரிவியுங்கள்',                    en: 'உடனே தலைமை ஆசிரியர் அல்லது முதல்வரிடம் தெரிவிக்கவும்.' },
  { do: true,  ta: 'CHILDLINE 1098 அல்லது காவல்துறை 100 அழைக்கவும்',                en: 'Call CHILDLINE 1098 or police 100.' },
  { do: false, ta: 'நீங்களே விசாரணை செய்ய வேண்டாம்',                                en: 'Do NOT conduct your own investigation.' },
  { do: false, ta: 'குற்றவாளியிடம் பேச வேண்டாம்',                                   en: 'Do NOT speak to the alleged abuser.' },
  { do: false, ta: '"நீ சொன்னதை யாருக்கும் சொல்லவேண்டாம்" என்று வேண்டாம்',         en: 'Do NOT promise confidentiality you cannot keep.' },
];
