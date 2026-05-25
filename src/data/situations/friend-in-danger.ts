import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'friend-in-danger',
  icon: '👫',
  order: 18,
  title: 'நண்பருக்கு ஏதாவது நடந்தால்',
  titleEn: 'When a friend is in danger or has been hurt',
  summary: 'குழந்தைகள் பெரும்பாலும் முதலில் தெரிந்துகொள்கிறார்கள் — நண்பருக்காக எப்படி உதவி கேட்பது என்று தெரியட்டும்.',
  summaryEn: 'Children often find out first — teach them to speak up for a friend in trouble.',
  why: 'குழந்தைகளுக்கு ஏதாவது நடக்கும்போது — நண்பர்கள்தான் முதலில் தெரிந்துகொள்கிறார்கள். "நண்பர் சொன்னது ரகசியம்" என்று நினைத்து அமைதியாக இருக்கிறார்கள். ஆனால் இது "கெட்ட ரகசியம்" — ஒரு பெரியவரிடம் சொல்வது நண்பரை காட்டிக் கொடுப்பது அல்ல, காப்பாற்றுவது. இந்த வித்தியாசம் குழந்தைக்கு தெரியட்டும்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"நண்பர் ஏதாவது சொன்னால் — "யாரிடமும் சொல்லாதே" என்று கேட்டாலும் — அம்மா அல்லது அப்பாவிடம் சொல்லு."',
        '"இது நண்பரை காட்டிக் கொடுப்பது இல்லை — நண்பரை காப்பாற்றுவது."',
        '"நண்பர் கோபப்பட்டாலும் — அவர் பாதுகாப்பாக இருப்பது முக்கியம்."',
        '"என்ன சொல்வது என்று தெரியாவிட்டாலும் — என்னிடம் வா, நாம் சேர்ந்து யோசிப்போம்."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"குழந்தை நண்பரைப் பற்றி கவலையுடன் பேசினால் — seriously எடுத்துக்கொள்ளுங்கள்."',
        '"நண்பரின் பெற்றோரிடம் அல்லது பள்ளி counselor-இடம் சொல்லுங்கள்."',
      ],
    },
  ],
  remember: [
    'குழந்தை நண்பரின் ரகசியம் சொன்னால் — நம்பியதற்கு நன்றி சொல்லுங்கள்',
    '"நண்பரை காட்டிக் கொடுக்கவில்லை, காப்பாற்றுகிறாய்" என்று வலியுறுத்துங்கள்',
    'நண்பரின் பெற்றோரிடம் பேசும்போது குழந்தையை involve செய்யுங்கள்',
    'நண்பருக்காக கவலைப்படுவது நல்ல உணர்வு என்று பாராட்டுங்கள்',
  ],
  imagePrompt:
    'Two Tamil children sitting together, one looking worried and the other listening with care and concern, warm school corridor setting, emotional and supportive mood, flat illustration style, teal and care-soft palette, no text',
  imageSrc: '/images/situation-friend-in-danger.jpg',
};
