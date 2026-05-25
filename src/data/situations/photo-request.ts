import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'photo-request',
  icon: '📷',
  order: 12,
  title: 'யாரோ புகைப்படம் அல்லது வீடியோ எடுக்க சொன்னால்',
  titleEn: 'Someone asks to photograph or film your child',
  summary: 'புகைப்படம் எடுப்பது பாதிப்பில்லாதது போல் தெரியும் — ஆனால் இது grooming-ன் பொதுவான ஆரம்ப படி.',
  summaryEn: 'Photographing a child seems harmless — but it is often the first step in grooming.',
  why: '"உன்னை புகைப்படம் எடுக்கட்டுமா? கவர்ச்சியாக இருக்கிற" என்று சொல்வது பாதிப்பில்லாதது போல் தெரியும். ஆனால் இது grooming-ன் ஒரு பொதுவான ஆரம்ப படி. குழந்தையை வசதியாக உணர வைத்து, படிப்படியாக தனிமைப்படுத்துவார்கள். சமூக ஊடகத்தில் (social media) போட்டு மிரட்டுவதற்கும் பயன்படுத்துவார்கள். இந்த ஒரு விதி குழந்தையை பாதுகாக்கலாம்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யார் வேண்டுமானாலும் உன் புகைப்படம் / வீடியோ எடுக்க சொன்னால் — "அப்பா அம்மாவிடம் கேட்டுவிட்டு சொல்கிறேன்" என்று சொல்."',
        '"உடலை காட்டும்படி சொன்னால் — உடனே "வேண்டாம்" என்று சொல், வெளியே வா."',
        '"யாரோ உன் புகைப்படம் எடுத்தால் — அன்றே என்னிடம் சொல். நான் கோபப்படவில்லை."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"இணைய ஆசிரியர் (online tutor), பயிற்சியாளர் (coach) — யாரோ திரையில் குழந்தையை பதிவு செய்கிறார்களா என்று கவனியுங்கள்."',
        '"குழந்தையின் புகைப்படத்தை யாரோ சமூக ஊடகத்தில் (social media) போடுகிறார்கள் என்று தெரிந்தால் — உடனே நடவடிக்கை எடுங்கள்."',
      ],
    },
  ],
  remember: [
    '"புகைப்படம் எடுக்கலாம் — ஆனால் அப்பா அம்மா தெரியாமல் வேண்டாம்" என்று தெளிவாக்குங்கள்',
    'இணையத்திலும் நேரிலுமாக யார் குழந்தையின் புகைப்படம் எடுக்கிறார்கள் என்று கவனியுங்கள்',
    'குழந்தை "யாரோ புகைப்படம் எடுத்தார்கள்" என்று சொன்னால் — கோபப்படாமல் விவரம் கேளுங்கள்',
    'சமூக ஊடகத்தில் (social media) குழந்தையின் முகம் தெரியும் படம் போடுவதை கவனமாக செய்யுங்கள்',
  ],
  imagePrompt:
    'A Tamil child confidently shaking their head and holding up a hand in a stop gesture toward a blurry adult figure holding a தொலைபேசி or camera, the child assertive and safe, bright outdoor setting, flat illustration style, teal palette, empowered mood, no text',
  imageSrc: '/images/situation-photo-request.jpg',
};
