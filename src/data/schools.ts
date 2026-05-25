/** All content for the schools page — translators edit only this file */

// ── Assembly Script ───────────────────────────────────────────────────────────

export interface ScriptParagraph {
  /** HTML string — may contain <strong> for bold terms */
  html: string;
  /** Optional Tailwind classes for special paragraph styling */
  className?: string;
}

export const assemblyParagraphs: ScriptParagraph[] = [
  {
    html: 'நண்பர்களே, இன்று நாம் ஒரு முக்கியமான விஷயம் பேசுவோம் — உங்கள் உடல் பாதுகாப்பு.',
  },
  {
    html: '<strong>விதி 1:</strong> உங்கள் உடல் உங்களுக்கே சொந்தம். யாரும் — அம்மா, அப்பா, ஆசிரியர் என்று யாரானாலும் — உங்கள் உடலை நீங்கள் விரும்பாத விதத்தில் தொடக்கூடாது.',
  },
  {
    html: '<strong>விதி 2:</strong> நல்ல தொடுதல் என்பது — கை குலுக்குவது, தட்டிக் கொடுப்பது. கெட்ட தொடுதல் என்பது — உங்களுக்கு பயமாகவோ, வலியாகவோ, குழப்பமாகவோ உணர வைப்பது.',
  },
  {
    html: '<strong>விதி 3:</strong> யாரோ உங்களை தவறாக தொட்டால் — "வேண்டாம்" என்று உரக்க சொல்லுங்கள். ஓடுங்கள். நம்பகமான பெரியவரிடம் உடனே சொல்லுங்கள். இது உங்கள் தவறே இல்லை.',
  },
  {
    html: '<strong>விதி 4:</strong> ஒரு பெரியவர் "யாரிடமும் சொல்லாதே" என்று சொன்னால் — அது ஒரு எச்சரிக்கை சமிக்ஞை. உடனே அம்மா, அப்பா, அல்லது ஆசிரியரிடம் சொல்லுங்கள்.',
  },
  {
    html: '<strong>விதி 5:</strong> CHILDLINE 1098 — இது ஒரு இலவச உதவி எண் (helpline). நீங்கள் எந்த ஆபத்திலும் இருந்தால் — பகலோ, இரவோ — இந்த எண்ணை அழையுங்கள்.',
  },
  {
    html: 'இந்த 5 விதிகளை இன்றே வீட்டில் அம்மாவிடமோ, அப்பாவிடமோ சொல்லுங்கள். சரியா?',
    className: 'text-brand font-bold',
  },
  {
    html: '— வாசிக்க எடுக்கும் நேரம்: மெதுவாக வாசித்தால் 3–4 நிமிடங்கள்.',
    className: 'text-text-subtle text-xs italic',
  },
];

// ── PTA WhatsApp Message ──────────────────────────────────────────────────────

export const ptaParagraphs: ScriptParagraph[] = [
  { html: '🏫 பள்ளி குழந்தை பாதுகாப்பு — பெற்றோர் அவசியம் தெரிய வேண்டியது' },
  { html: 'அன்பு பெற்றோர்களே,' },
  { html: 'இன்று காலை கூட்டத்தில் (assembly) குழந்தைகளுக்கு உடல் பாதுகாப்பு பற்றி கற்பித்தோம். இந்த 3 விஷயங்களை இன்றே வீட்டில் மீண்டும் பேசுங்கள்:' },
  { html: '✅ உடல் சொந்தம்: "உன் உடல் உனக்கே சொந்தம் — யாரும் உன் அனுமதி இல்லாமல் தொட முடியாது" என்று சொல்லுங்கள்.' },
  { html: '✅ சொல்லணும்: "யாரோ உன்னை தவறாக தொட்டால் — எனக்கு உடனே சொல். நான் நம்புவேன், நான் கோபப்படமாட்டேன்" என்று சொல்லுங்கள்.' },
  { html: '✅ 1098: "CHILDLINE 1098 — நீ எங்கிருந்தும் இலவசமாக அழைக்கலாம்" என்று குழந்தைக்கு கற்றுக்கொடுங்கள்.' },
  { html: 'முழு வழிகாட்டி: safepaapa.in' },
  {
    html: '— SafePaapa குழந்தை பாதுகாப்பு விழிப்புணர்வு · safepaapa.in · CHILDLINE 1098',
    className: 'text-text-subtle text-xs italic',
  },
];

// ── Classroom Checklist ───────────────────────────────────────────────────────

export interface ChecklistItem {
  icon: string;
  ta: string;
  en: string;
}

export const checklistItems: ChecklistItem[] = [
  {
    icon: '📢',
    ta: 'வகுப்பில் குழந்தை பாதுகாப்பு விதிகளை சொல்லியிருக்கிறேன்',
    en: 'I have taught body safety rules to my class this term.',
  },
  {
    icon: '👀',
    ta: 'மாணவர்களின் நடவடிக்கை மாற்றங்களை கவனிக்கிறேன்',
    en: 'I actively observe for behavioural changes in students.',
  },
  {
    icon: '🚪',
    ta: 'கழிப்பறை / தனியிடங்களில் குழந்தைகளை தனியாக விடுவதில்லை',
    en: 'I do not leave children alone with unknown adults in isolated spaces.',
  },
  {
    icon: '🗣️',
    ta: 'மாணவர் ஏதோ சொல்ல முயன்றால் — நிறுத்தி, கேட்கிறேன்',
    en: 'When a student tries to tell me something, I stop and listen fully.',
  },
  {
    icon: '📋',
    ta: 'POCSO சட்டம் 19ஆம் பிரிவு (Section 19) கீழ் — சந்தேகம் வந்தால் புகார் செய்வேன்',
    en: 'சந்தேகப்படும் துஷ்பிரயோகத்தை புகார் செய்வது என் சட்டப் பொறுப்பு என்பதை நான் அறிவேன்.',
  },
  {
    icon: '📞',
    ta: 'CHILDLINE 1098 எண் என் தொலைபேசியில் சேமித்து வைத்திருக்கிறேன்',
    en: 'CHILDLINE 1098-ஐ என் தொலைபேசியில் சேமித்து, எப்படி புகார் செய்வது என்று அறிவேன்.',
  },
  {
    icon: '👨‍👩‍👧',
    ta: 'பெற்றோர்-ஆசிரியர் கூட்டத்தில் (PTA meeting) பெற்றோரிடம் பாதுகாப்பு பற்றி பேசியிருக்கிறேன்',
    en: 'இந்த பருவத்தில் குறைந்தது ஒருமுறை பெற்றோரிடம் குழந்தை பாதுகாப்பு பற்றி பேசியிருக்கிறேன்.',
  },
  {
    icon: '🔒',
    ta: 'வகுப்பறையில் ஒற்றை மாணவர் + ஒற்றை ஆசிரியர் — கதவு திறந்திருக்கும்',
    en: 'When alone with a single student, I keep the door open or windows visible.',
  },
];
