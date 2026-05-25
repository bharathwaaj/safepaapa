import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'public-transport',
  icon: '🚌',
  order: 11,
  title: 'பேருந்து அல்லது share auto-வில் தனியாக பயணிக்கும்போது',
  titleEn: 'Travelling alone on a public bus or shared auto',
  summary: 'பொது போக்குவரத்தில் தனியாக பயணிக்கும் குழந்தைக்கு — என்ன செய்வது என்று தெரியட்டும்.',
  summaryEn: 'Children travelling alone on public transport need a plan for unsafe situations.',
  why: 'பள்ளி வேன் இல்லாத நேரம், tuition திரும்பும் நேரம், வீட்டருகே கடைக்கு போகும் நேரம் — பல குழந்தைகள் தனியாக பேருந்தில் பயணிக்கிறார்கள். கூட்டமான இடத்தில் அடையாளம் தெரியாதவர்கள் பக்கத்தில் உட்காருகிறார்கள். கூட்டம் இருக்கிறது என்பதால் பாதுகாப்பானது என்று இல்லை — குழந்தைக்கு ஒரு திட்டம் தேவை.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"பஸ்ஸில் யாரோ தொட்டால் — உரக்க "வேண்டாம்!" என்று கத்து, எழுந்திரு, வேறு இடத்திற்கு போ."',
        '"Conductor அல்லது அருகில் இருக்கும் பெண் பயணியிடம் உதவி கேள்."',
        '"அடுத்த stop-ல் இறங்கி என்னை அழை — தனியாக இருக்க வேண்டாம்."',
        '"யாரும் உதவிக்கு வரவில்லை என்றால் — 1098 அல்லது 100 அழை."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"குழந்தையின் போனில் உங்கள் நம்பர் speed dial-ல் இருக்கட்டும் — 1098 மனப்பாடம் செய்விக்கவும்."',
        '"பெண் conductor அல்லது பெண் பயணியிடம் உதவி கேட்பது safe என்று சொல்லுங்கள்."',
      ],
    },
  ],
  remember: [
    '"கத்துவது தப்பில்லை" என்று மீண்டும் மீண்டும் சொல்லுங்கள் — பொது இடத்தில் குழந்தை வெட்கப்படுவார்கள்',
    'Route தெரிந்திருக்கட்டும் — எந்த stop-ல் இறங்க வேண்டும் என்று உறுதிப்படுத்துங்கள்',
    'முதல் சில தடவை தனியாக பயணிக்கும்போது நீங்களே வழியனுப்பி பாருங்கள்',
    'குழந்தை வீடு வந்தவுடன் அழையுங்கள் / message செய்யுங்கள் — route confirm செய்யுங்கள்',
  ],
  imagePrompt:
    'A Tamil child sitting alone on a public bus near the window, alert and confident expression, other passengers visible in background, bright daytime, flat illustration style, teal palette, empowered safe mood, no text',
  imageSrc: '/images/situation-public-transport.jpg',
};
