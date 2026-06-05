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

export const assemblyParagraphsEn: ScriptParagraph[] = [
  {
    html: 'Friends, today we are going to talk about something very important — keeping your body safe.',
  },
  {
    html: '<strong>Rule 1:</strong> Your body belongs to you. Nobody — not even a parent, teacher, or relative — should touch your body in a way you do not want.',
  },
  {
    html: '<strong>Rule 2:</strong> A good touch is a handshake or a pat on the back. A bad touch is one that makes you feel scared, hurt, or confused.',
  },
  {
    html: '<strong>Rule 3:</strong> If anyone touches you in a wrong way — shout "No!" loudly. Run. Tell a trusted adult straight away. It is never your fault.',
  },
  {
    html: '<strong>Rule 4:</strong> If a grown-up says "don\'t tell anyone" — that is a warning sign. Tell your mum, dad, or teacher immediately.',
  },
  {
    html: '<strong>Rule 5:</strong> CHILDLINE 1098 is a free helpline. If you are ever in danger — day or night — call this number.',
  },
  {
    html: 'Share these 5 rules with your mum or dad at home today. Okay?',
    className: 'text-brand font-bold',
  },
  {
    html: '— Reading time: approximately 3–4 minutes at a steady pace.',
    className: 'text-text-subtle text-xs italic',
  },
];

// ── PTA WhatsApp Message ──────────────────────────────────────────────────────

export const ptaParagraphs: ScriptParagraph[] = [
  { html: '🏫 பள்ளியில் இன்று பேசியது — வீட்டிலும் 5 நிமிடம் பேசுங்கள்' },
  { html: 'அன்புள்ள பெற்றோர்களே,' },
  { html: 'இன்று காலை கூட்டத்தில் (assembly) குழந்தைகளிடம் உடல் பாதுகாப்பு பற்றி எளிமையாக பேசினோம். அதே நம்பிக்கையை வீட்டிலும் கொடுக்க, இன்று இந்த 3 வரிகளை குழந்தையிடம் சொல்லிப் பாருங்கள்:' },
  { html: '✅ உடல் உரிமை: "உன் உடல் உனக்கே. யாராவது தொடுவது உனக்கு பிடிக்கவில்லை என்றால், வேண்டாம் என்று சொல்லலாம்."' },
  { html: '✅ நம்பிக்கை: "எதாவது உன்னை குழப்பமாகவோ பயமாகவோ உணர வைத்தால், என்னிடம் சொல்லலாம். நான் அமைதியாக கேட்பேன், உன்னை நம்புவேன்."' },
  { html: '✅ உதவி எண்: "அவசரத்தில் பெரியவர் அருகில் இல்லையென்றால் 1098-க்கு அழைக்கலாம். அது குழந்தைகளுக்கான இலவச உதவி எண்."' },
  { html: 'இந்த உரையாடல் குழந்தையை பயமுறுத்துவதற்காக அல்ல — எந்த சூழலிலும் பேசலாம் என்ற நம்பிக்கை கொடுக்கத்தான்.' },
  { html: 'முழு வழிகாட்டி: safepaapa.in' },
  {
    html: '— SafePaapa குழந்தை பாதுகாப்பு விழிப்புணர்வு · safepaapa.in · CHILDLINE 1098',
    className: 'text-text-subtle text-xs italic',
  },
];

export const ptaParagraphsEn: ScriptParagraph[] = [
  { html: '🏫 We spoke about this at school today — please take 5 minutes at home too.' },
  { html: 'Dear Parents,' },
  { html: 'This morning in assembly we spoke to the children simply about body safety. To reinforce the same confidence at home, please try saying these 3 things to your child today:' },
  { html: '✅ Body ownership: "Your body belongs to you. If anyone touches you in a way you don\'t like, you can say No."' },
  { html: '✅ Trust: "If anything makes you feel confused or scared, you can tell me. I will listen calmly and I will believe you."' },
  { html: '✅ Helpline: "If you are ever in an emergency and no adult is nearby, you can call 1098. That is a free helpline just for children."' },
  { html: 'This conversation is not to frighten your child — it is to give them the confidence that they can always talk to you.' },
  { html: 'Full guide: safepaapa.in' },
  {
    html: '— SafePaapa Child Safety Awareness · safepaapa.in · CHILDLINE 1098',
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
    en: 'I know that reporting suspected abuse is my legal duty under POCSO Section 19.',
  },
  {
    icon: '📞',
    ta: 'CHILDLINE 1098 எண் என் தொலைபேசியில் சேமித்து வைத்திருக்கிறேன்',
    en: 'I have CHILDLINE 1098 saved in my phone and know how to report.',
  },
  {
    icon: '👨‍👩‍👧',
    ta: 'பெற்றோர்-ஆசிரியர் கூட்டத்தில் (PTA meeting) பெற்றோரிடம் பாதுகாப்பு பற்றி பேசியிருக்கிறேன்',
    en: 'I have spoken to parents about child safety at least once this term.',
  },
  {
    icon: '🔒',
    ta: 'வகுப்பறையில் ஒற்றை மாணவர் + ஒற்றை ஆசிரியர் — கதவு திறந்திருக்கும்',
    en: 'When alone with a single student, I keep the door open or windows visible.',
  },
];
