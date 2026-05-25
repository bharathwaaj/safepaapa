import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'false-claim',
  icon: '🗣️',
  order: 14,
  title: '"அம்மா அனுப்பினாங்க" என்று யாரோ சொன்னால்',
  titleEn: 'A stranger claims "your parent sent me"',
  summary: 'யாரோ "உன் அம்மா அனுப்பினாங்க" என்று சொன்னால் — உடனே நம்பாமல் confirm செய்வது எப்படி?',
  summaryEn: '"Your parent sent me" is a classic abduction trick — always verify directly with a parent.',
  why: '"உன் அம்மா அனுப்பினாங்க, வா" — இது குழந்தைகளை ஏமாற்றும் மிகவும் பொதுவான முறை. "நம்மை அறிந்தவர் சொல்கிறார்" என்று குழந்தைகள் எளிதில் நம்பிவிடுவார்கள். ஆனால் ஒரு நிமிட phone call எல்லாவற்றையும் தெளிவாக்கும். ஒரு family code word இன்னும் சக்திவாய்ந்தது.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"யாரோ "அம்மா / அப்பா அனுப்பினாங்க" என்று சொன்னால் — உடனே நம்பாதே."',
        '"முதலில் phone எடுத்து என்னை அழை — நான் நேரில் confirm சொல்வேன்."',
        '"Phone இல்லை என்றாலும் — நீ இருக்கும் இடத்திலேயே நில், அவருடன் போகாதே."',
        '"நான் யாரையாவது அனுப்பினால் — உன்னுடைய secret codeword சொல்வேன்."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"குடும்ப secret codeword ஒன்று வையுங்கள் — உண்மையான நபர் மட்டுமே தெரியட்டும்."',
        '"யாரையாவது அனுப்பினால் — முன்கூட்டியே குழந்தையை phone-ல் warn செய்யுங்கள்."',
      ],
    },
  ],
  remember: [
    'Family codeword ஒரு சிறிய விளையாட்டாக கற்றுக்கொடுக்கலாம் — குழந்தை மறக்க மாட்டார்கள்',
    'குழந்தை confirm செய்தது தப்பில்லை என்று சொல்லுங்கள் — நம்பிக்கையின்மை இல்லை',
    'உண்மையில் அனுப்பப்பட்டவர் என்றாலும் — confirm செய்வது சரிதான் என்று வலியுறுத்துங்கள்',
    'குழந்தை phone இல்லாமல் வெளியே போகும்போது கவனமாக இருங்கள்',
  ],
  imagePrompt:
    'A Tamil child on a street looking cautious and reaching for their phone while a blurry adult figure approaches claiming to know their parent, the child alert and not going anywhere, flat illustration style, teal palette, empowered cautious mood, no text',
  imageSrc: '/images/situation-false-claim.jpg',
};
