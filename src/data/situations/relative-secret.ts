import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'relative-secret',
  icon: '🤫',
  order: 3,
  title: 'உறவினர் "யாரிடமும் சொல்லாதே" என்றால்',
  titleEn: 'A relative says "keep this a secret"',
  summary: 'நல்ல ரகசியம், கெட்ட ரகசியம் வித்தியாசம் குழந்தைக்கு தெரியட்டும்.',
  summaryEn: 'Teach children the difference between safe surprises and harmful secrets.',
  why: 'புள்ளிவிவரங்கள் சொல்கின்றன: குழந்தைகளுக்கு எதிரான பெரும்பாலான குற்றங்கள் அவர்கள் அறிந்த நபர்களால் — குடும்பத்தினர், அண்டை வீட்டினர், நம்பகமான நபர்கள் — நடக்கின்றன. "யாரிடமும் சொல்லாதே" என்ற ரகசியம்தான் குழந்தையை மௌனமாக வைத்திருக்கிறது. இந்த வார்த்தைகளை குழந்தைக்கு சொல்லுங்கள் — அது அவர்களுக்கு கவசமாகும்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"நல்ல ரகசியம்: பிறந்தநாள் சர்ப்ரைஸ் — சந்தோஷமான உணர்வு."',
        '"கெட்ட ரகசியம்: யாரோ உன்னை தொட்டுவிட்டு சொல்லாதே என்பது — பயமான உணர்வு."',
        '"உடல் பற்றிய எந்த ரகசியமும் அப்பா அம்மாவிடம் சொல்லலாம் — எப்போதும்."',
        '"சொன்னதால் அவர் கோபப்பட்டால் — அது உன் தப்பில்லை."',
      ],
    },
    {
      label: 'வீட்டு விதியாக வையுங்கள்:',
      lines: [
        '"எங்கள் வீட்டில் உடல் பற்றிய ரகசியங்கள் இல்லை."',
        '"எந்த பெரியவரும் உன்னிடம் ரகசியம் கேட்டால் — என்னிடம் சொல்."',
      ],
    },
  ],
  remember: [
    'குழந்தை சொல்லும்போது கோபப்படாதீர்கள் — நம்புங்கள், பாராட்டுங்கள்',
    '"சொன்னதால் நீ தைரியசாலி" என்று சொல்லுங்கள்',
    'உறவினராக இருந்தாலும் இந்த விதி நிலைக்கும் என்று தெளிவாக்குங்கள்',
    'குழந்தை சொல்வதை முழுமையாக கேளுங்கள், நடுவே நிறுத்தாதீர்கள்',
  ],
  imagePrompt:
    'A Tamil child whispering to their mother with a look of trust and relief, mother listening carefully with a gentle and open expression, warm home setting with evening light, flat illustration style, teal and care-soft palette, no text',
  imageSrc: '/images/situation-relative-secret.jpg',
};
