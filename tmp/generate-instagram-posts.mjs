import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'public/social/first-9';
mkdirSync(outDir, { recursive: true });

const posts = [
  {
    n: '02',
    slug: 'stranger-candy',
    title: ['அந்நியர் இனிப்பு', 'கொடுத்தால்?'],
    line: ['“அம்மாவிடம் கேட்டுவிட்டு', 'தான் வாங்குவேன்.”'],
    image: '../../images/situation-stranger-candy.jpg',
    caption:
`அந்நியர் இனிப்பு அல்லது உணவு கொடுத்தால்?

குழந்தையிடம் சொல்ல வேண்டிய வரி:
“யாராவது உணவு, இனிப்பு, பழம் கொடுத்தால் — அம்மா அப்பாவிடம் கேட்டுவிட்டு தான் வாங்க வேண்டும்.”

குழந்தை “வேண்டாம்” என்று சொல்வது தவறு இல்லை. அது பாதுகாப்பு.

CHILDLINE: 1098
safepaapa.in

#SafePaapa #ChildSafety #TamilParents #TamilNadu #குழந்தைபாதுகாப்பு`,
  },
  {
    n: '03',
    slug: 'school-van',
    title: ['பள்ளி வேனில்', 'தனியாக இருந்தால்?'],
    line: ['கதவருகே நில்.', 'உடனே அழை.'],
    image: '../../images/situation-school-van.jpg',
    caption:
`பள்ளி வேனில் குழந்தை தனியாக இருந்தால்?

குழந்தையிடம் சொல்ல வேண்டிய வரி:
“வேனில் தனியாக இருக்கும்போது பயமாக இருந்தால், கதவருகே நில். உடனே என்னையோ ஆசிரியரையோ அழை.”

குழந்தைக்கு பயம் வந்தால் அது சிறிய விஷயம் இல்லை.

CHILDLINE: 1098
safepaapa.in

#SafePaapa #SchoolSafety #ChildSafety #TamilParents #TamilNadu`,
  },
  {
    n: '04',
    slug: 'relative-secret',
    title: ['“ரகசியம் வை”', 'என்றால்?'],
    line: ['உடனே சொல்லு.', 'நான் கோபப்பட மாட்டேன்.'],
    image: '../../images/situation-relative-secret.jpg',
    caption:
`யாராவது “இது ரகசியம், யாரிடமும் சொல்லாதே” என்றால்?

குழந்தையிடம் சொல்ல வேண்டிய வரி:
“யாராவது ‘ரகசியம் வை’ என்றால் உடனே என்னிடம் சொல்லு. நான் கோபப்பட மாட்டேன். உன்னை நம்புவேன்.”

குழந்தை எல்லாவற்றையும் சொல்லலாம் என்ற நம்பிக்கை வீட்டில் தொடங்க வேண்டும்.

CHILDLINE: 1098
safepaapa.in

#SafePaapa #ChildSafety #TamilParents #GoodTouchBadTouch #குழந்தைபாதுகாப்பு`,
  },
  {
    n: '05',
    slug: 'online-friend',
    title: ['ஆன்லைன் நண்பர்', 'சந்திக்க சொன்னால்?'],
    line: ['தனியாக போகாதே.', 'முதலில் சொல்லு.'],
    image: '../../images/situation-online-friend.jpg',
    caption:
`ஆன்லைன் நண்பர் நேரில் சந்திக்க சொன்னால்?

குழந்தையிடம் சொல்ல வேண்டிய வரி:
“ஆன்லைன் நண்பர் தனியாக சந்திக்க சொன்னால் போகாதே. முதலில் என்னிடம் சொல்லு.”

ஆன்லைனில் பேசும் எல்லாரும் உண்மையான நண்பர்கள் அல்ல.

CHILDLINE: 1098
safepaapa.in

#SafePaapa #OnlineSafety #ChildSafety #TamilParents #TamilNadu`,
  },
  {
    n: '06',
    slug: 'lost-in-mall',
    title: ['கூட்டத்தில்', 'தொலைந்தால்?'],
    line: ['ஓடாதே.', 'அங்கேயே நில்.'],
    image: '../../images/situation-lost-in-mall.jpg',
    caption:
`கூட்டத்தில் குழந்தை தொலைந்தால்?

குழந்தையிடம் சொல்ல வேண்டிய வரி:
“கூட்டத்தில் தொலைந்தால் ஓடாதே. அங்கேயே நில். கடை ஆள் அல்லது பெண் பணியாளரிடம் உதவி கேள்.”

அம்மா அப்பாவை தேடி ஓட வேண்டாம். பாதுகாப்பான பெரியவரிடம் உதவி கேட்க வேண்டும்.

CHILDLINE: 1098
safepaapa.in

#SafePaapa #ChildSafety #TamilParents #ParentingTamil #TamilNadu`,
  },
  {
    n: '07',
    slug: 'unsafe-relative',
    title: ['உறவினர் என்றாலும்', 'பயம் வந்தால்?'],
    line: ['உடனே சொல்லு.', 'முதலில் பாதுகாப்பு.'],
    image: '../../images/situation-unsafe-relative.jpg',
    caption:
`உறவினர் என்றாலே எல்லாரும் பாதுகாப்பானவர்கள் என்று குழந்தைக்கு தோன்றக்கூடாது.

குழந்தையிடம் சொல்ல வேண்டிய வரி:
“யார் இருந்தாலும், உனக்கு பயமாக இருந்தால் உடனே என்னிடம் சொல்லு. நான் முதலில் உன்னை பாதுகாப்பேன்.”

குழந்தை சொன்னதை நம்புவது பாதுகாப்பின் முதல் படி.

CHILDLINE: 1098
safepaapa.in

#SafePaapa #ChildSafety #TamilParents #குழந்தைபாதுகாப்பு #TamilNadu`,
  },
  {
    n: '08',
    slug: 'school-toilet',
    title: ['பள்ளி கழிப்பறை', 'பாதுகாப்பு'],
    line: ['உரக்க கத்து.', 'ஆசிரியரிடம் சொல்லு.'],
    image: '../../images/situation-school-toilet.jpg',
    caption:
`பள்ளி கழிப்பறையில் குழந்தை பாதுகாப்பு.

குழந்தையிடம் சொல்ல வேண்டிய வரி:
“கழிப்பறைக்கு யாராவது உன் பின்பு வர முயன்றால், உரக்க கத்து. வெளியே ஓடி ஆசிரியரிடம் சொல்லு.”

கத்துவது தவறு இல்லை. உதவி கேட்பது தவறு இல்லை.

CHILDLINE: 1098
safepaapa.in

#SafePaapa #SchoolSafety #ChildSafety #TamilParents #TamilNadu`,
  },
  {
    n: '09',
    slug: 'emergency-help',
    title: ['அவசர உதவி', 'எண்கள்'],
    line: ['CHILDLINE 1098', 'காவல்துறை 100'],
    image: '../../images/save-childline-contact.jpg',
    caption:
`குழந்தை ஆபத்தில் இருந்தால் உடனே உதவி கேளுங்கள்.

முக்கிய உதவி எண்கள்:
CHILDLINE: 1098
காவல்துறை: 100
பெண்கள் உதவி: 181

குழந்தை ஏதாவது சொன்னால்: நம்புங்கள். அமைதியாக கேளுங்கள். குற்றம் குழந்தையிடம் இல்லை என்று சொல்லுங்கள்.

safepaapa.in

#SafePaapa #ChildSafety #TamilParents #EmergencyHelp #TamilNadu`,
  },
];

function textLines(lines, x, y, size, weight, fill, gap = Math.round(size * 1.26)) {
  return lines.map((line, i) => `<text x="${x}" y="${y + i * gap}" fill="${fill}" font-family="Arial Unicode MS, Kohinoor Tamil, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="middle">${escapeXml(line)}</text>`).join('\n');
}

function escapeXml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

for (const post of posts) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#042f2e"/>
      <stop offset="0.62" stop-color="#0f766e"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#042f2e" stop-opacity="0.08"/>
      <stop offset="0.62" stop-color="#042f2e" stop-opacity="0.56"/>
      <stop offset="1" stop-color="#042f2e" stop-opacity="0.96"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#022c22" flood-opacity="0.28"/>
    </filter>
  </defs>
  <rect width="1080" height="1080" fill="url(#bg)"/>
  <image href="${post.image}" x="86" y="116" width="908" height="514" preserveAspectRatio="xMidYMid slice" opacity="0.96"/>
  <rect x="86" y="116" width="908" height="514" rx="46" fill="url(#fade)"/>
  <rect x="86" y="116" width="908" height="514" rx="46" fill="none" stroke="#ccfbf1" stroke-opacity="0.28" stroke-width="2"/>

  <g transform="translate(540 638)" filter="url(#shadow)">
    <circle cx="0" cy="-492" r="58" fill="#ecfeff" opacity="0.96"/>
    <image href="../../logo.svg" x="-64" y="-531" width="128" height="77" preserveAspectRatio="xMidYMid meet"/>
  </g>

  <g>
    ${textLines(post.title, 540, 710, 64, 800, '#ffffff', 78)}
  </g>

  <g>
    ${textLines(post.line, 540, 860, 36, 700, '#ccfbf1', 48)}
  </g>

  <g transform="translate(120 956)">
    <rect x="0" y="0" width="840" height="70" rx="35" fill="#042f2e" opacity="0.86"/>
    <text x="52" y="45" fill="#fda4af" font-family="Nunito, Arial, sans-serif" font-size="23" font-weight="900">1098</text>
    <text x="420" y="45" fill="#ffffff" font-family="Nunito, Arial, sans-serif" font-size="23" font-weight="900" text-anchor="middle">safepaapa.in</text>
    <text x="788" y="45" fill="#99f6e4" font-family="Nunito, Arial, sans-serif" font-size="23" font-weight="900" text-anchor="end">@safepaapa</text>
  </g>
</svg>`;

  writeFileSync(join(outDir, `${post.n}-${post.slug}.svg`), svg);
  writeFileSync(join(outDir, `${post.n}-${post.slug}-caption.txt`), post.caption);
}
