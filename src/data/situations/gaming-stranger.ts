import type { Situation } from './_types';

export const situation: Situation = {
  slug: 'gaming-stranger',
  icon: '🎮',
  order: 20,
  title: 'ஆன்லைன் கேமில் தெரியாதவர் தகவல் கேட்டால்',
  titleEn: 'A gaming contact asks for personal information',
  summary: 'Free Fire, BGMI, Roblox-ல் பழகும் "நண்பர்கள்" — தனிப்பட்ட தகவல் கேட்டால் என்ன செய்வது?',
  summaryEn: 'Online gaming contacts are strangers — never share personal details in a game.',
  shareLine: 'கேமில் யாராவது பெயர், பள்ளி, புகைப்படம் கேட்டால் சொல்லாதே. உடனே என்னிடம் சொல்லு.',
  why: 'Free Fire, BGMI, Roblox — இவை தமிழ்நாட்டு குழந்தைகளிடம் மிகவும் பிரபலமானவை. கேமிங்கில் "teammates" ஆக பழகி, நாளடைவில் நம்பிக்கையை உருவாக்கி, பிறகு பெயர், வீட்டு முகவரி, பள்ளி பெயர், தொலைபேசி எண், புகைப்படம் கேட்கிறார்கள். "கேம் நண்பர்" என்று குழந்தை நம்புகிறார்கள் — ஆனால் அவர்கள் யாரோ என்று தெரியாது.',
  scripts: [
    {
      label: 'குழந்தையிடம் சொல்லுங்கள்:',
      lines: [
        '"கேமில் பழகும் யாரோ — நிஜ பெயர், பள்ளி, வீட்டு முகவரி, தொலைபேசி எண் கேட்டால் — சொல்லாதே."',
        '"புகைப்படம், வீடியோ கேட்டால் — "வேண்டாம்" என்று சொல்லு, கேமிலிருந்து வெளியே வா."',
        '"நேரில் சந்திக்க சொன்னால் — உடனே என்னிடம் சொல்."',
        '"கேமில் மட்டும் பழகுவது வேறு — நிஜ வாழ்க்கை தகவல் பகிர்வது வேறு."',
      ],
    },
    {
      label: 'பெற்றோர் செய்ய வேண்டியது:',
      lines: [
        '"குழந்தையின் கேம் கணக்கில் உண்மையான பெயர், புகைப்படம் வேண்டாம் — பயனர் பெயர் (username) மட்டும் போதும்."',
        '"யாருடன் இணையத்தில் பேசுகிறார்கள் என்று அவ்வப்போது கேளுங்கள் — கோபமில்லாமல்."',
      ],
    },
  ],
  remember: [
    '"கேம் நண்பர்" என்பவர்கள் நிஜ வாழ்க்கையில் அந்நியர் என்று வலியுறுத்துங்கள்',
    'கேமில் பரிசுகள் (gifts), V-bucks, coins கொடுப்பவரை கவனமாக இருங்கள் — அவர்கள் ஏதோ எதிர்பார்க்கலாம்',
    'கேம் கணக்கின் தனியுரிமை அமைப்புகளை (privacy settings) சரிபார்த்து, "நண்பர்கள் மட்டும்" அல்லது "தனிப்பட்ட" என்று வையுங்கள்',
    'குழந்தை கேம் பற்றி பேசும்போது — ஆர்வமாக கேளுங்கள், குறை சொல்லாதீர்கள்',
  ],
  imagePrompt:
    'A Tamil child playing a mobile game, looking alert and cautious as a chat message appears on screen asking for personal information, the child about to close the chat, flat illustration style, teal palette, aware empowered mood, no text',
  imageSrc: '/images/situation-gaming-stranger.jpg',
};
