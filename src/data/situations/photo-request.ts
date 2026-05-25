import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'photo-request',
  icon: '📷',
  order: 12,
  title: 'யாரோ photo அல்லது video எடுக்க சொன்னால்',
  titleEn: 'Someone asks to photograph or film your child',
  summary: 'Photo எடுப்பது பாதிப்பில்லாதது போல் தெரியும் — ஆனால் இது grooming-ன் பொதுவான ஆரம்ப படி.',
  summaryEn: 'Photographing a child seems harmless — but it is often the first step in grooming.',
  why: '"உன்னை photo எடுக்கட்டுமா? கவர்ச்சியாக இருக்கிற" என்று சொல்வது பாதிப்பில்லாதது போல் தெரியும். ஆனால் இது grooming-ன் ஒரு பொதுவான ஆரம்ப படி. குழந்தையை comfortable-ஆக வைத்து, படிப்படியாக தனிமைப்படுத்துவார்கள். social media-ல் போட்டு மிரட்டுவதற்கும் பயன்படுத்துவார்கள். இந்த ஒரு விதி குழந்தையை பாதுகாக்கலாம்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யார் வேண்டுமானாலும் உன் photo / video எடுக்க சொன்னால் — "அப்பா அம்மாவிடம் கேட்டுவிட்டு சொல்கிறேன்" என்று சொல்."',
        '"உடலை காட்டும்படி சொன்னால் — உடனே "வேண்டாம்" என்று சொல், வெளியே வா."',
        '"யாரோ உன் photo எடுத்தால் — அன்றே என்னிடம் சொல். நான் கோபப்படவில்லை."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"Online tutor, coach — யாரோ screen-ல் குழந்தையை record செய்கிறார்களா என்று கவனியுங்கள்."',
        '"குழந்தையின் photo யாரோ social media-ல் போடுகிறார்கள் என்று தெரிந்தால் — உடனே நடவடிக்கை எடுங்கள்."',
      ],
    },
  ],
  remember: [
    '"Photo எடுக்கலாம் — ஆனால் அப்பா அம்மா தெரியாமல் வேண்டாம்" என்று தெளிவாக்குங்கள்',
    'Online-லும் offline-லும் யார் குழந்தையின் photo எடுக்கிறார்கள் என்று கவனியுங்கள்',
    'குழந்தை "யாரோ photo எடுத்தார்கள்" என்று சொன்னால் — கோபப்படாமல் விவரம் கேளுங்கள்',
    'Social media-ல் குழந்தையின் முகம் தெரியும் படம் போடுவதை கவனமாக செய்யுங்கள்',
  ],
  imagePrompt:
    'A Tamil child confidently shaking their head and holding up a hand in a stop gesture toward a blurry adult figure holding a phone or camera, the child assertive and safe, bright outdoor setting, flat illustration style, teal palette, empowered mood, no text',
  imageSrc: '/images/situation-photo-request.jpg',
};
