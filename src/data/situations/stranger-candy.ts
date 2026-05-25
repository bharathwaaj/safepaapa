import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'stranger-candy',
  icon: '🍬',
  order: 1,
  title: 'அந்நியர் இனிப்பு அல்லது உணவு கொடுத்தால்',
  titleEn: 'A stranger offers candy or food',
  summary: 'அந்நியர் கொடுக்கும் எதையும் வாங்கக்கூடாது — அம்மா அப்பாவிடம் கேட்டுவிட்டு வாங்கலாம்.',
  summaryEn: 'Never accept food or gifts from strangers without asking a parent first.',
  why: 'குழந்தைகளுக்கு பெரியவர்கள் சொல்வதை மறுக்க கஷ்டமாக இருக்கும். "வேண்டாம் சொல்லாதே, பெரியவர்கள் கோபப்படுவார்கள்" என்று வீட்டில் சொல்லி வளர்க்கிறோம். இதை பயன்படுத்திக்கொண்டுதான் அபாயகரமான நபர்கள் குழந்தைகளை நெருங்குகிறார்கள். இனிப்பு, பிஸ்கட், பழம் — இவை கொடுப்பதன் மூலம் நம்பிக்கையை உருவாக்கி, தனிமையில் அழைக்கிறார்கள். உங்கள் குழந்தைக்கு இன்றே இந்த விதியை சொல்லுங்கள்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யாராவது அந்நியர் உணவு, இனிப்பு, பழம் கொடுத்தால் — மறுத்துவிடு."',
        '"வேண்டாம், நன்றி" என்று சொல்லி விலகிவிடு.',
        '"அவர் கோபப்பட்டாலும் பரவாயில்லை — நீ தப்பு செய்யவில்லை."',
        '"உடனே என்னிடம் சொல்."',
      ],
    },
    {
      label: 'வீட்டு விதியாக வையுங்கள்:',
      lines: [
        '"அப்பா அம்மா கூட இல்லாமல் வெளியில் யாரிடமும் எதுவும் வாங்கக்கூடாது."',
        '"இது யாரையும் புண்படுத்தவில்லை — உன்னை பாதுகாப்பதற்காக."',
      ],
    },
  ],
  remember: [
    'இந்த விதி குழந்தைக்கு 4–5 வயதிலேயே சொல்லலாம்',
    '"வேண்டாம்" சொல்வது பெரியவர்களை மதிக்காதது அல்ல என்று தெளிவாக்குங்கள்',
    'குழந்தை சொன்னால் கோபப்படாதீர்கள் — நம்புங்கள், பாராட்டுங்கள்',
    'உங்கள் வீட்டு விதியை குழந்தை நண்பர்களிடமும் தெளிவாக சொல்லலாம்',
  ],
  imagePrompt:
    'A young Tamil girl around age 6 confidently shaking her head and holding her palm up in a gentle "no" gesture to a blurry adult figure offering something sweet, bright outdoor setting near a school gate, empowered and safe body language, flat illustration style, teal and warm white palette, no text',
  imageSrc: '/images/situation-stranger-candy.jpg',
};
