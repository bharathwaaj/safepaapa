import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'elevator-stranger',
  icon: '🛗',
  order: 19,
  title: 'லிப்டில் அந்நியர் இருந்தால்',
  titleEn: 'A stranger in the elevator',
  summary: 'அடுக்குமாடி குடியிருப்பில் குழந்தை தனியாக லிப்ட் பயன்படுத்தும்போது — என்ன கவனிக்க வேண்டும்?',
  summaryEn: 'Children in apartments need simple rules for using lifts safely with strangers.',
  why: 'தமிழ்நாட்டில் அடுக்குமாடி குடியிருப்புகள் வேகமாக அதிகரித்து வருகின்றன. குழந்தைகள் தினசரி தனியாக லிப்ட் பயன்படுத்துகிறார்கள். சில நிமிட லிப்ட் பயணம் — தனிமை, மூடிய கதவு — இவை ஆபத்தான சூழலை உருவாக்கலாம். ஒரு எளிய விதி பாதுகாப்பாக வைக்கும்.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"லிப்டில் தெரியாதவர் இருந்தால் — நீ ஏறாதே, அடுத்த லிப்ட் வரை காத்திரு."',
        '"ஏறிவிட்டால் — கதவு பக்கத்தில் நில், button panel-ல் நில்."',
        '"யாரோ தொட்டால் — alarm button அழு, உரக்க கத்து."',
        '"லிப்டிலிருந்து வெளியே வந்தவுடன் உடனே என்னை அழை."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"Apartment-ல் லிப்ட் camera இருக்கிறதா என்று உறுதி செய்யுங்கள்."',
        '"Alarm button எங்கே இருக்கிறது என்று குழந்தைக்கு நேரில் காட்டுங்கள்."',
      ],
    },
  ],
  remember: [
    'தெரிந்தவர் என்றாலும் — தனியாக லிப்டில் போவதை கவனமாக இருங்கள்',
    'Alarm button எங்கே இருக்கிறது என்று ஒரு முறை practice செய்து பாருங்கள்',
    '"தனியாக இருக்கும்போது கத்தலாம்" என்று வலியுறுத்துங்கள்',
    'Apartment security-இடம் குழந்தை பற்றி சொல்லி வையுங்கள்',
  ],
  imagePrompt:
    'A Tamil child standing confidently near the elevator button panel inside a lift, alert posture, near the door, bright interior light, flat illustration style, teal palette, safe prepared mood, no text',
  imageSrc: '/images/situation-elevator-stranger.jpg',
};
