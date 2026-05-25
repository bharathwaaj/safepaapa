import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'gaming-stranger',
  icon: '🎮',
  order: 20,
  title: 'ஆன்லைன் கேமில் தெரியாதவர் தகவல் கேட்டால்',
  titleEn: 'A gaming contact asks for personal information',
  summary: 'Free Fire, BGMI, Roblox-ல் பழகும் "நண்பர்கள்" — தனிப்பட்ட தகவல் கேட்டால் என்ன செய்வது?',
  summaryEn: 'Online gaming contacts are strangers — never share personal details in a game.',
  why: 'Free Fire, BGMI, Roblox — இவை தமிழ்நாட்டு குழந்தைகளிடம் மிகவும் பிரபலமானவை. கேமிங்கில் "teammates" ஆக பழகி, நாளடைவில் நம்பிக்கையை உருவாக்கி, பிறகு பெயர், வீட்டு முகவரி, school பெயர், phone number, photo கேட்கிறார்கள். "Game friend" என்று குழந்தை நம்புகிறார்கள் — ஆனால் அவர்கள் யாரோ என்று தெரியாது.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"கேமில் பழகும் யாரோ — நிஜ பெயர், school, வீட்டு முகவரி, phone number கேட்டால் — சொல்லாதே."',
        '"Photo, video கேட்டால் — "வேண்டாம்" என்று சொல்லு, game விட்டு வெளியே வா."',
        '"நேரில் சந்திக்க சொன்னால் — உடனே என்னிடம் சொல்."',
        '"Game-ல் மட்டும் பழகுவது வேறு — real life தகவல் share வேறு."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"குழந்தையின் game account-ல் real பெயர், photo வேண்டாம் — username மட்டும் போதும்."',
        '"யாருடன் online-ல் பேசுகிறார்கள் என்று அவ்வப்போது கேளுங்கள் — கோபமில்லாமல்."',
      ],
    },
  ],
  remember: [
    '"Game friend" என்பவர்கள் real life-ல் அந்நியர் என்று வலியுறுத்துங்கள்',
    'In-game gifts, V-bucks, coins கொடுப்பவரை கவனமாக இருங்கள் — ஏதோ expect செய்கிறார்கள்',
    'Game account privacy settings check செய்யுங்கள் — "friends only" அல்லது "private" வையுங்கள்',
    'குழந்தை game பற்றி பேசும்போது — ஆர்வமாக கேளுங்கள், judge செய்யாதீர்கள்',
  ],
  imagePrompt:
    'A Tamil child playing a mobile game, looking alert and cautious as a chat message appears on screen asking for personal information, the child about to close the chat, flat illustration style, teal palette, aware empowered mood, no text',
  imageSrc: '/images/situation-gaming-stranger.jpg',
};
