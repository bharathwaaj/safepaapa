import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'no-pickup',
  icon: '⏰',
  order: 17,
  title: 'பள்ளி முடிந்தும் யாரும் வரவில்லை என்றால்',
  titleEn: 'No one picks your child up after school',
  summary: 'பள்ளி முடிந்த பிறகு குழந்தை தனியாக காத்திருக்க நேரிடலாம் — பாதுகாப்பான திட்டம் தெரியட்டும்.',
  summaryEn: 'A child stranded after school is vulnerable — a practised plan keeps them safe.',
  why: 'Traffic, தாமதம், அவசரம் — பல காரணங்களால் பெற்றோர் சரியான நேரத்தில் வர முடியாமல் போகலாம். பள்ளி வாயிலில் தனியாக காத்திருக்கும் குழந்தையை "உதவி" பேரில் யாரோ அழைத்துச் செல்ல முயற்சிக்கலாம். முன்கூட்டியே ஒரு திட்டம் இருந்தால் குழந்தை பாதுகாப்பாக இருக்கும்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யாரும் வரவில்லை என்றால் — பள்ளியை விட்டு வெளியே போகாதே."',
        '"ஆசிரியர் அல்லது school office-ல் இருங்கள் — அவர்களிடம் சொல்லு."',
        '"என்னை அழை — reply இல்லை என்றால் backup person-ஐ அழை."',
        '"யாரோ "நான் அழைத்துச் செல்கிறேன்" என்று சொன்னால் — ஆசிரியரை confirm செய்யாமல் போகாதே."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"குழந்தையின் contact list-ல் backup person — அத்தை, அண்ணன், neighbour — இருக்கட்டும்."',
        '"ஆசிரியரிடம் "தாமதமாகும்போது யாரை அழைக்கணும்" என்று சொல்லி வையுங்கள்."',
      ],
    },
  ],
  remember: [
    'Backup contact list பள்ளி record-லும் இருக்கட்டும்',
    '"பள்ளியை விட்டு வெளியே போகாதே" என்பது மிக முக்கியமான விதி',
    'குழந்தை school-ல் காத்திருப்பது தப்பில்லை — ஆசிரியர்கள் உதவுவார்கள் என்று சொல்லுங்கள்',
    'தாமதமாகும்போது — phone-ல் முன்கூட்டியே warn செய்யுங்கள்',
  ],
  imagePrompt:
    'A Tamil child waiting calmly at a school gate with a bag, looking alert and patient, a teacher visible in the background, late afternoon light, flat illustration style, teal palette, safe prepared mood, no text',
  imageSrc: '/images/situation-no-pickup.jpg',
};
