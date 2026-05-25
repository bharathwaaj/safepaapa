import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'private-photo',
  icon: '🔒',
  order: 21,
  title: 'யாரோ private அல்லது intimate புகைப்படம் கேட்டால்',
  titleEn: 'Someone asks for private or intimate photos',
  summary: 'Online-ல் யாரோ private photo கேட்டால் — உடனே "வேண்டாம்" என்று சொல்லு, பெற்றோரிடம் சொல்.',
  summaryEn: 'No one has the right to ask a child for private photos — refuse and tell a parent immediately.',
  why: 'WhatsApp, Instagram, Snapchat, கேமிங் apps — எல்லாவற்றிலும் குழந்தைகளிடம் private photo கேட்கப்படுகிறது. "யாரும் பார்க்க மாட்டார்கள்", "நீ மட்டும் தான்", "நாமளுக்குள்ள தான்" என்று சொல்கிறார்கள். ஒரு முறை அனுப்பினால் — அது எப்போதும் அவர்கள் கையில் இருக்கும். இதை குழந்தைக்கு தெளிவாக சொல்லுவது மிக முக்கியம்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யார் வேண்டுமானாலும் — நண்பரோ, காதலனோ, அந்நியரோ — private photo கேட்டால் உடனே "வேண்டாம்" என்று சொல்."',
        '"அனுப்பாதே — ஒரு முறை அனுப்பினால் நீ கட்டுப்படுத்த முடியாது."',
        '""யாரும் பார்க்க மாட்டார்கள்" என்று சொன்னாலும் நம்பாதே — screenshot எடுக்கலாம்."',
        '"உடனே என்னிடம் சொல் — நான் கோபப்படவில்லை, உன்னை பாதுகாப்பேன்."',
      ],
    },
    {
      label: 'யாரோ மிரட்டினால்:',
      lines: [
        '"Photo பகிர்வேன் என்று மிரட்டினால் — பயப்படாதே, உடனே என்னிடம் சொல்."',
        '"இது உன் தவறில்லை — CHILDLINE 1098 அல்லது Cyber Crime helpline 1930 அழைக்கலாம்."',
      ],
    },
  ],
  remember: [
    'குழந்தை photo அனுப்பிவிட்டால் — கோபப்படாதீர்கள், முதலில் ஆதரிக்குங்கள்',
    'Cyber Crime helpline: 1930 — online photo threat-க்கு 24/7 உதவுவார்கள்',
    '"Delete செய்தால் போய்விடும்" என்று நம்பாதே — screenshots எடுத்திருக்கலாம்',
    'இந்த உரையாடலை teens age-ல் ஆரம்பிக்காதீர்கள் — 10 வயதிலேயே ஆரம்பிக்கலாம்',
  ],
  imagePrompt:
    'A Tamil child looking at their phone screen with a firm and cautious expression, about to decline an inappropriate message request, confident body language, flat illustration style, teal palette, empowered safe mood, no text',
  imageSrc: '/images/situation-private-photo.jpg',
};
