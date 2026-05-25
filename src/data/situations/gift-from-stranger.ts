import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'gift-from-stranger',
  icon: '🎁',
  order: 8,
  title: 'அந்நியர் பரிசு அல்லது பணம் கொடுத்தால்',
  titleEn: 'A stranger offers a gift or money',
  summary: 'அந்நியர் கொடுக்கும் பரிசு, பணம் — எதுவும் வாங்க வேண்டாம், பெற்றோரிடம் சொல்லுங்கள்.',
  summaryEn: 'Teach children never to accept gifts or money from strangers without a parent.',
  shareLine: 'யாராவது பரிசு அல்லது பணம் கொடுத்தால், "அம்மாவிடம் கேட்டுவிட்டு வருகிறேன்" என்று சொல்லி என்னிடம் வா.',
  why: 'பரிசு, பணம் கொடுப்பது கவர்ச்சியான முறை. "என் பேத்தி மாதிரி இருக்கே" என்று சொல்லி நெருங்குவார்கள், நாளடைவில் தனிமையில் அழைப்பார்கள். குழந்தைக்கு இந்த நுட்பமான ஆபத்தை புரிய வைப்பது கஷ்டம் — ஆனால் எளிய விதியாக சொல்லலாம்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யார் வேண்டுமானாலும் பரிசு, பணம் கொடுத்தால் — "நன்றி, என் அம்மாவிடம் கேட்டுவிட்டு வருகிறேன்" என்று சொல்."',
        '"வாங்கிவிட்டு என்னிடம் சொல் — நான் கோபப்பட மாட்டேன்."',
        '"யாரோ "யாரிடமும் சொல்லாதே" என்று சொன்னால் — உடனே என்னிடம் சொல்."',
      ],
    },
  ],
  remember: [
    'குழந்தை வாங்கிவிட்டால் கோபப்படாதீர்கள் — சொன்னதை பாராட்டுங்கள்',
    '"யாரும் காரணமின்றி பரிசு கொடுக்க மாட்டார்கள்" என்று வயதுக்கு ஏற்ப புரிய வையுங்கள்',
    'அக்கம்பக்கத்தில் யார் குழந்தைகளிடம் அதிக நெருக்கமாக இருக்கிறார்கள் என்று கவனியுங்கள்',
    'குழந்தையின் புகாரை எப்போதும் நம்புங்கள்',
  ],
  imagePrompt:
    'A Tamil child confidently shaking their head at a blurry adult figure holding out a gift box, child looking calm and assured, bright outdoor setting, flat illustration style, teal palette, empowered mood, no text',
  imageSrc: '/images/situation-gift-from-stranger.jpg',
};
