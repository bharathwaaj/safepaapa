import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'school-toilet',
  icon: '🚻',
  order: 7,
  title: 'பள்ளி கழிப்பறையில் தனிமையாக இருக்கும்போது',
  titleEn: 'Privacy and safety in school toilets',
  summary: 'கழிப்பறையில் எந்த பெரியவரும் உடன் வரக்கூடாது — குழந்தைக்கு தெரியட்டும்.',
  summaryEn: 'No adult should follow a child into a toilet — teach them to speak up.',
  shareLine: 'கழிப்பறைக்கு யாராவது உன் பின்பு வர முயன்றால், உரக்க கத்து; வெளியே ஓடி ஆசிரியரிடம் சொல்லு.',
  why: 'பள்ளி கழிப்பறைகள், public toilets — இவை குழந்தைகள் தனிமையாக இருக்கும் இடங்கள். எந்த பெரியவரும் — ஆசிரியரோ, helper-ஓ — குழந்தையை பின்பற்றி வருவது தப்பு என்று குழந்தைக்கு தெரிந்திருக்க வேண்டும். இந்த எளிய விதி குழந்தையை பாதுகாக்கலாம்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"கழிப்பறையில் நீ மட்டும்தான் இருக்கணும் — எந்த பெரியவரும் உன் கூட வரக்கூடாது."',
        '"யாரோ வர முயன்றால் — கத்து, வெளியே ஓடு, ஆசிரியரிடம் சொல்."',
        '"இந்த விதியை சொன்னால் யாரும் கோபப்படக்கூடாது — சொல்வது உன் உரிமை."',
      ],
    },
    {
      label: 'பெற்றோர் பள்ளியிடம் கேட்க வேண்டியது:',
      lines: [
        '"பள்ளி கழிப்பறையில் CCTV அல்லது கண்காணிப்பு இருக்கிறதா?"',
        '"குழந்தைகள் தனியாக போகலாமா, helpers உதவுகிறார்களா?"',
        '"ஏதாவது பிரச்சினை இருந்தால் யாரிடம் சொல்வது?"',
      ],
    },
  ],
  remember: [
    'பள்ளி orientation-ல் இந்த விதியை குழந்தைக்கு சொல்லுங்கள்',
    '"கத்துவது தப்பில்லை — உன்னை பாதுகாக்கும்" என்று வலியுறுத்துங்கள்',
    'குழந்தை சொன்னால் — உடனே பள்ளி நிர்வாகத்திடம் பேசுங்கள்',
    'வாட்சுமேன், helper, அனைவருக்கும் இந்த விதி பொருந்தும்',
  ],
  imagePrompt:
    'A பள்ளி corridor with a toilet door, a Tamil child walking alone confidently toward it, bright clean பள்ளி environment, safe and empowered mood, flat illustration style, teal and light palette, no text',
  imageSrc: '/images/situation-school-toilet.jpg',
};
