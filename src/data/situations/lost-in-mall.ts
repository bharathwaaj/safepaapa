import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'lost-in-mall',
  icon: '🏪',
  order: 5,
  title: 'கடை அல்லது கூட்டத்தில் தொலைந்தால்',
  titleEn: 'Lost in a mall or crowded place',
  summary: 'தொலைந்தால் என்ன செய்வது — குழந்தைக்கு ஒரு திட்டம் இருக்கட்டும்.',
  summaryEn: 'Every child needs a plan for what to do if they get separated in a crowd.',
  why: 'விழாக்கள், சினிமா தியேட்டர், கடைகள் — கூட்டமான இடங்களில் குழந்தை தொலைவது நொடியில் நடக்கும். பயமான குழந்தை யாரோ அழைத்துச் செல்வதற்கு ஒத்துக்கொள்ளலாம். முன்கூட்டியே ஒரு திட்டம் போட்டுவைத்தால் குழந்தை பாதுகாப்பாக இருக்கும்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"தொலைந்தால் — ஓடாதே, நில்."',
        '"அடுத்தே இருக்கும் கடை ஆள் அல்லது பெண் பாதுகாப்பாளரிடம் போ."',
        '"அப்பா அம்மா பெயர், தொலைபேசி எண் சொல்."',
        '"யாரோ "நான் அழைத்துச் செல்கிறேன்" சொன்னால் — வேண்டாம் என்று சொல், அங்கேயே நில்."',
      ],
    },
    {
      label: 'கடைக்கு போவதற்கு முன்பு சொல்லுங்கள்:',
      lines: [
        '"தொலைந்தால் இந்த கடை வெளியில் காத்திரு — நான் திரும்பி வருவேன்."',
        '"என் நம்பர் உன் போனில் இருக்கிறதா? சரிபார்."',
      ],
    },
  ],
  remember: [
    '5–6 வயதிலேயே பெற்றோர் போன் நம்பரை மனப்பாடம் செய்விக்கலாம்',
    'கூட்டமான இடங்களில் குழந்தை உடையில் பெயர்+நம்பர் எழுதிய சிறு card வையுங்கள்',
    '"அந்நியர் உதவி" vs "safe adult உதவி" வித்தியாசம் சொல்லுங்கள்',
    'ஒவ்வொரு முறை வெளியே போவதற்கு முன்பும் meeting point சொல்லுங்கள்',
  ],
  imagePrompt:
    "A small Tamil child looking slightly lost but calm in a busy market, approaching a woman shopkeeper behind a counter who is smiling helpfully and kneeling to the child's level, warm and safe reassuring scene, flat illustration style, teal palette, no text",
  imageSrc: '/images/situation-lost-in-mall.jpg',
};
