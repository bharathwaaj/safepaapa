import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'ride-offer',
  icon: '🚗',
  order: 13,
  title: 'யாரோ வாகனத்தில் வர சொன்னால்',
  titleEn: 'Someone offers your child a ride',
  summary: '"வழியில்தான் போறேன்" என்று தெரிந்தவரும் கூட வாகனத்தில் அழைக்கலாம் — உடனே "வேண்டாம்" சொல்வது எப்படி?',
  summaryEn: "Even familiar people can pose a risk — never accept a ride without a parent's OK.",
  why: '"வழியில்தான் போறேன், ஏத்திக்கிட்டு போறேன்" — இது அந்நியரால் மட்டுமில்ல, தெரிந்தவர்களாலும் சொல்லப்படலாம். குழந்தைகளுக்கு பெரியவர்களிடம் "வேண்டாம்" சொல்வது கஷ்டம் — குறிப்பாக அறிமுகமானவர்களிடம். ஆனால் ஒரு எளிய விதி — "அப்பா அம்மா சொல்லாமல் யாரின் வாகனத்திலும் ஏறக்கூடாது" — குழந்தையை பாதுகாக்கும்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யார் வேண்டுமானாலும் வாகனத்தில் வர சொன்னால் — "நன்றி, நான் நடந்து போவேன்" என்று சொல்."',
        '"அல்லது "அம்மா / அப்பாவிடம் கேட்டுவிட்டு சொல்கிறேன்" என்று சொல்லி உடனே phone-ல் கேள்."',
        '"அவர் கோபப்பட்டாலும் — வாகனத்தில் ஏறாதே."',
        '"வீடு வந்தவுடன் என்னிடம் சொல்."',
      ],
    },
    {
      label: 'வீட்டு விதியாக வையுங்கள்:',
      lines: [
        '"அப்பா அம்மா அனுமதி இல்லாமல் யாரின் வாகனத்திலும் ஏறக்கூடாது — தெரிந்தவர்களாக இருந்தாலும்."',
      ],
    },
  ],
  remember: [
    'இந்த விதி தெரிந்தவர்களுக்கும் பொருந்தும் என்று தெளிவாக்குங்கள் — உறவினர்களும் கேட்கலாம்',
    'குழந்தை "வேண்டாம்" சொன்னதால் யாராவது கோபப்பட்டால் — அவர்தான் தவறு என்று சொல்லுங்கள்',
    'Phone-ல் உடனே கேட்பது சரி — "நம்பிக்கையற்றது" இல்லை என்று பக்கத்திருப்பவர்களிடமும் சொல்லுங்கள்',
    'குழந்தை வாகனத்தில் ஏறிவிட்டால் — உடனே location share செய்யட்டும்',
  ],
  imagePrompt:
    'A Tamil child standing on a pavement confidently shaking their head at a blurry car with a figure inside offering a ride, the child alert and self-assured, bright daytime street, flat illustration style, teal palette, empowered mood, no text',
  imageSrc: '/images/situation-ride-offer.jpg',
};
