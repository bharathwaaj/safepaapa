export interface SituationScript {
  label: string;   // e.g. "குழந்தையிடம் சொல்லுங்கள்:"
  lines: string[]; // word-for-word Tamil lines
}

export interface Situation {
  slug: string;
  icon: string;
  title: string;          // Tamil
  titleEn: string;        // English
  summary: string;        // Tamil — 1 sentence, for cards
  summaryEn: string;      // English — for cards
  why: string;            // Tamil — emotional paragraph
  scripts: SituationScript[];
  remember: string[];     // Key reminders (Tamil)
  order: number;
  imagePrompt: string;    // ChatGPT/DALL-E prompt
  imageSrc?: string;      // Set when generated
}

export const situations: Situation[] = [
  {
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
  },
  {
    slug: 'school-van',
    icon: '🚐',
    order: 2,
    title: 'வேன் ஓட்டுநருடன் தனியாக இருக்கும்போது',
    titleEn: 'Alone with the school van driver',
    summary: 'பள்ளி வேனில் தனியாக இருக்கும்போது என்ன செய்வது என்று முன்கூட்டியே சொல்லுங்கள்.',
    summaryEn: 'Prepare your child for what to do if alone with the van driver.',
    why: 'பள்ளி வேன் பாதுகாப்பானது என்று நாம் நம்புகிறோம். ஆனால் தினமும் காலை ஒரு குழந்தை வேனில் கடைசியாக கிளம்பும்போது, அல்லது மாலை கடைசியாக இறங்கும்போது, சில நிமிடங்கள் தனியாக இருக்கலாம். அந்த நிமிடங்களில் என்ன செய்வது என்று உங்கள் குழந்தைக்கு தெரியுமா? தயாரிப்பு இருந்தால் குழந்தை பாதுகாப்பாக இருக்கும்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"வேனில் நீ மட்டும் தனியாக இருந்தால் — கதவருகே உட்காரு, ஜன்னல் திறந்து வை."',
          '"ஓட்டுநர் உன்னை தொட முயன்றால் — உரத்த குரலில் கத்து, கதவை திற, வெளியே ஓடு."',
          '"அருகில் யாரோ பெரியவர் இருந்தால் — ஓடிப்போய் உதவி கேள்."',
          '"பயமாக இருந்தால் என் நம்பரை dial செய்."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"ஒவ்வொரு நாளும் குழந்தை வீடு திரும்பும்போது ஒரு நிமிடம் பேசுங்கள் — எல்லாம் சரியாக இருந்ததா என்று."',
          '"வேன் ஓட்டுநர் மாறும்போது குழந்தைக்கு சொல்லுங்கள், கேள்விகள் கேளுங்கள்."',
        ],
      },
    ],
    remember: [
      'குழந்தையின் போனில் உங்கள் நம்பர் speed dial-ல் இருக்கட்டும்',
      'வேன் route-ஐயும், ஓட்டுநர் பெயரையும் குழந்தைக்கு தெரியட்டும்',
      '"கத்துவது தப்பில்லை — உன்னை பாதுகாப்பதற்கே" என்று சொல்லுங்கள்',
      'ஒருநாள் வேனில் வராவிட்டால் உடனே தகவல் தெரிவிக்க பழக்குங்கள்',
    ],
    imagePrompt:
      'A Tamil child sitting near the door of a school van looking alert and confident, window open, bright daytime, safe and empowered body language, flat illustration style, teal and warm palette, no text in image',
    imageSrc: '/images/situation-school-van.jpg',
  },
  {
    slug: 'relative-secret',
    icon: '🤫',
    order: 3,
    title: 'உறவினர் "யாரிடமும் சொல்லாதே" என்றால்',
    titleEn: 'A relative says "keep this a secret"',
    summary: 'நல்ல ரகசியம், கெட்ட ரகசியம் வித்தியாசம் குழந்தைக்கு தெரியட்டும்.',
    summaryEn: 'Teach children the difference between safe surprises and harmful secrets.',
    why: 'புள்ளிவிவரங்கள் சொல்கின்றன: குழந்தைகளுக்கு எதிரான பெரும்பாலான குற்றங்கள் அவர்கள் அறிந்த நபர்களால் — குடும்பத்தினர், அண்டை வீட்டினர், நம்பகமான நபர்கள் — நடக்கின்றன. "யாரிடமும் சொல்லாதே" என்ற ரகசியம்தான் குழந்தையை மௌனமாக வைத்திருக்கிறது. இந்த வார்த்தைகளை குழந்தைக்கு சொல்லுங்கள் — அது அவர்களுக்கு கவசமாகும்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"நல்ல ரகசியம்: பிறந்தநாள் சர்ப்ரைஸ் — சந்தோஷமான உணர்வு."',
          '"கெட்ட ரகசியம்: யாரோ உன்னை தொட்டுவிட்டு சொல்லாதே என்பது — பயமான உணர்வு."',
          '"உடல் பற்றிய எந்த ரகசியமும் அப்பா அம்மாவிடம் சொல்லலாம் — எப்போதும்."',
          '"சொன்னதால் அவர் கோபப்பட்டால் — அது உன் தப்பில்லை."',
        ],
      },
      {
        label: 'வீட்டு விதியாக வையுங்கள்:',
        lines: [
          '"எங்கள் வீட்டில் உடல் பற்றிய ரகசியங்கள் இல்லை."',
          '"எந்த பெரியவரும் உன்னிடம் ரகசியம் கேட்டால் — என்னிடம் சொல்."',
        ],
      },
    ],
    remember: [
      'குழந்தை சொல்லும்போது கோபப்படாதீர்கள் — நம்புங்கள், பாராட்டுங்கள்',
      '"சொன்னதால் நீ தைரியசாலி" என்று சொல்லுங்கள்',
      'உறவினராக இருந்தாலும் இந்த விதி நிலைக்கும் என்று தெளிவாக்குங்கள்',
      'குழந்தை சொல்வதை முழுமையாக கேளுங்கள், நடுவே நிறுத்தாதீர்கள்',
    ],
    imagePrompt:
      'A Tamil child whispering to their mother with a look of trust and relief, mother listening carefully with a gentle and open expression, warm home setting with evening light, flat illustration style, teal and care-soft palette, no text',
    imageSrc: '/images/situation-relative-secret.jpg',
  },
  {
    slug: 'online-friend',
    icon: '📱',
    order: 4,
    title: 'ஆன்லைன் "நண்பர்" நேரில் சந்திக்க சொன்னால்',
    titleEn: 'An online "friend" wants to meet in person',
    summary: 'ஆன்லைனில் அறிமுகமானவர் நேரில் சந்திக்க சொன்னால் — உடனே பெற்றோரிடம் சொல்ல வேண்டும்.',
    summaryEn: 'If an online contact asks to meet in person, tell a parent immediately.',
    why: 'இன்றைய குழந்தைகள் ஆன்லைனில் நண்பர்களை உருவாக்குகிறார்கள் — games, YouTube comments, WhatsApp groups. ஆபத்தான நபர்கள் குழந்தைகளாக நடிக்கிறார்கள், மாதக்கணக்கில் நம்பிக்கை உருவாக்கிவிட்டு நேரில் சந்திக்க அழைக்கிறார்கள். இந்த ஒரு பாடம் உங்கள் குழந்தையை பாதுகாக்கலாம்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"ஆன்லைனில் நண்பர் என்பவர் — நேரில் சந்திக்கும் வரை அந்நியர்தான்."',
          '"யாராவது நேரில் சந்திக்க சொன்னால் — உடனே என்னிடம் சொல், நான் கோபப்பட மாட்டேன்."',
          '"தனியாக போகாதே — என்னிடம் சொல்லாமல் எங்கும் போகாதே."',
          '"யார் உன் பெற்றோர் பெயர், வீட்டு முகவரி கேட்டாலும் சொல்லாதே."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"குழந்தையின் apps, games-ல் யார் friends list-ல் இருக்கிறார்கள் என்று அவ்வப்போது பாருங்கள்."',
          '""அந்நியர்" என்பதை குழந்தை புரிந்துகொள்ளும் வகையில் சொல்லுங்கள் — offline-ல் மட்டுமில்ல, online-லும்."',
        ],
      },
    ],
    remember: [
      'Online safety-ஐ கோபமான விதியாக சொல்லாதீர்கள் — நம்பிக்கையான உரையாடலாக வையுங்கள்',
      'குழந்தை சொன்னால் phone பிடுங்காதீர்கள் — முதலில் நம்புங்கள், பேசுங்கள்',
      'Screen time கண்காணிப்பு முக்கியம் — ஆனால் குழந்தை மறைப்பதை தடுக்கவே நம்பிக்கை தேவை',
      'Online-ல் நண்பர்கள் ஆனாலும் offline-ல் பெற்றோர் அறிவு அவசியம்',
    ],
    imagePrompt:
      'A Tamil teenager looking at their phone with a thoughtful cautious expression, a caring parent sitting beside them looking at the screen together with a supportive expression, warm home setting, flat illustration style, teal and trust palette, no text',
    imageSrc: '/images/situation-online-friend.jpg',
  },
  {
    slug: 'lost-in-mall',
    icon: '🏪',
    order: 5,
    title: 'கடை அல்லது கூட்டத்தில் தொலைந்தால்',
    titleEn: 'Lost in a mall or crowded place',
    summary: 'தொலைந்தால் என்ன செய்வது — குழந்தைக்கு ஒரு திட்டம் இருக்கட்டும்.',
    summaryEn: 'Every child needs a plan for what to do if they get separated in a crowd.',
    why: 'விழாக்கள், சினிமா தியேட்டர், கடைகள் — கூட்டமான இடங்களில் குழந்தை தொலைவது நொடியில் நடக்கும். பயமான குழந்தை யாரோ அழைத்துச் செல்வதற்கு ஒத்துக்கொள்ளலாம். முன்கூட்டியே ஒரு திட்டம் போட்டுவைத்தால் குழந்தை பாதுகாப்பாக இருக்கும்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"தொலைந்தால் — ஓடாதே, நில்."',
          '"அடுத்தே இருக்கும் கடை ஆள் அல்லது பெண் பாதுகாப்பாளரிடம் போ."',
          '"அப்பா அம்மா பெயர், phone number சொல்."',
          '"யாரோ "நான் அழைத்துச் செல்கிறேன்" சொன்னால் — வேண்டாம் என்று சொல், அங்கேயே நில்."',
        ],
      },
      {
        label: 'கடைக்கு போவதற்கு முன்பு சொல்லுங்கள்:',
        lines: [
          '"தொலைந்தால் இந்த கடை வெளியில் காத்திரு — நான் திரும்பி வருவேன்."',
          '"என் நம்பர் உன் போனில் இருக்கிறதா? சரிபார்."',
        ],
      },
    ],
    remember: [
      '5–6 வயதிலேயே பெற்றோர் போன் நம்பரை மனப்பாடம் செய்விக்கலாம்',
      'கூட்டமான இடங்களில் குழந்தை உடையில் பெயர்+நம்பர் எழுதிய சிறு card வையுங்கள்',
      '"அந்நியர் உதவி" vs "safe adult உதவி" வித்தியாசம் சொல்லுங்கள்',
      'ஒவ்வொரு முறை வெளியே போவதற்கு முன்பும் meeting point சொல்லுங்கள்',
    ],
    imagePrompt:
      'A small Tamil child looking slightly lost but calm in a busy market, approaching a woman shopkeeper behind a counter who is smiling helpfully and kneeling to the child\'s level, warm and safe reassuring scene, flat illustration style, teal palette, no text',
    imageSrc: '/images/situation-lost-in-mall.jpg',
  },
  {
    slug: 'unsafe-relative',
    icon: '🏠',
    order: 6,
    title: 'குடும்பத்தில் யாரோ பயமாக உணர வைத்தால்',
    titleEn: 'An unsafe person within the family',
    summary: 'குடும்பத்தினர் என்றாலும் — குழந்தை பயமாக உணர்ந்தால் சொல்லலாம்.',
    summaryEn: 'Even within family, a child has the right to feel safe and speak up.',
    why: 'இதை சொல்வது கஷ்டம். ஆனால் புள்ளிவிவரங்கள் தெளிவாக சொல்கின்றன: குழந்தைகளுக்கு எதிரான பெரும்பாலான குற்றங்கள் குடும்பத்தினரால் அல்லது அறிமுகமானவர்களால் நடக்கின்றன. குழந்தை பயமாக உணர்கிறது என்றால் — அது யாரையும் கொடியவர் என்று சொல்வதற்கு அல்ல. அது குழந்தையை பாதுகாப்பதற்கு.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"யார் வேண்டுமானாலும் — உறவினரா இருந்தாலும் — உன்னை தொட்டால் நீ வேண்டாம் சொல்லலாம்."',
          '"பயமாக உணர்ந்தால் — உடனே என்னிடம் சொல். நான் நம்புவேன்."',
          '"நீ சொன்னதால் குடும்பத்தில் பிரச்சினை வந்தாலும் — அது உன் தப்பில்லை."',
          '"உன்னை பாதுகாப்பது என் வேலை — குடும்பத்தை காக்கும் வேலை அல்ல."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"குழந்தை சொன்னால் — முதலில் நம்புங்கள், விசாரியுங்கள்."',
          '"குழந்தையை நம்பாவிட்டால் — அவர்கள் இனி சொல்ல மாட்டார்கள்."',
          '"CHILDLINE 1098 அல்லது உள்ளூர் CWC-ஐ தொடர்புகொள்ளுங்கள்."',
        ],
      },
    ],
    remember: [
      'குழந்தை சொன்னதை dismiss செய்யாதீர்கள் — "சின்னப் பிள்ளை, தெரியாது" என்று சொல்லாதீர்கள்',
      'குடும்பத்தின் மரியாதையை குழந்தையின் பாதுகாப்பைவிட உயர்வாக வைக்காதீர்கள்',
      'CHILDLINE 1098 — 24/7, இலவசம், ரகசியம் காக்கப்படும்',
      'நீங்கள் நம்பினீர்கள் என்று குழந்தைக்கு சொல்லுங்கள் — அது குணமடைவதற்கு முக்கியம்',
    ],
    imagePrompt:
      'A Tamil mother kneeling to her child\'s level with open arms and a gentle trusting expression, the child looking relieved and safe, warm home interior, soft evening light, flat illustration style, care-soft and teal palette, no text',
    imageSrc: '/images/situation-unsafe-relative.jpg',
  },
  {
    slug: 'school-toilet',
    icon: '🚻',
    order: 7,
    title: 'பள்ளி கழிப்பறையில் தனிமையாக இருக்கும்போது',
    titleEn: 'Privacy and safety in school toilets',
    summary: 'கழிப்பறையில் எந்த பெரியவரும் உடன் வரக்கூடாது — குழந்தைக்கு தெரியட்டும்.',
    summaryEn: 'No adult should follow a child into a toilet — teach them to speak up.',
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
      'A school corridor with a toilet door, a Tamil child walking alone confidently toward it, bright clean school environment, safe and empowered mood, flat illustration style, teal and light palette, no text',
    imageSrc: '/images/situation-school-toilet.jpg',
  },
  {
    slug: 'gift-from-stranger',
    icon: '🎁',
    order: 8,
    title: 'அந்நியர் பரிசு அல்லது பணம் கொடுத்தால்',
    titleEn: 'A stranger offers a gift or money',
    summary: 'அந்நியர் கொடுக்கும் பரிசு, பணம் — எதுவும் வாங்க வேண்டாம், பெற்றோரிடம் சொல்லுங்கள்.',
    summaryEn: 'Teach children never to accept gifts or money from strangers without a parent.',
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
  },
  {
    slug: 'tuition-teacher',
    icon: '📚',
    order: 9,
    title: 'தனியாக tuition ஆசிரியரிடம் இருக்கும்போது',
    titleEn: 'Alone with a private tuition teacher',
    summary: 'Tuition ஆசிரியர் நம்பகமானவர் — ஆனால் தனிமையில் என்ன செய்வது என்று குழந்தைக்கு தெரியட்டும்.',
    summaryEn: 'Tutors are trusted — but children must know what to do if something feels wrong.',
    why: 'தமிழ்நாட்டில் tuition வகுப்புகள் இல்லாத வீடு இல்லை. பெற்றோர் நம்பிக்கையோடு குழந்தையை அனுப்புகிறார்கள். "நம்பகமான" பெரியவர்தான் அதிக ஆபத்தாக இருக்கலாம் — ஏனென்றால் அவரிடம் குழந்தை தனிமையில் இருக்கும் வாய்ப்பு தினசரி இருக்கிறது. ஒரு எளிய விதி போதும் — குழந்தையை பாதுகாக்கலாம்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"tuition ஆசிரியர் உன் உடலை தொட்டால் — உடனே "வேண்டாம்" என்று சொல்லு."',
          '"வீட்டிற்கு வந்தவுடன் — நடந்தது என்னவென்று என்னிடம் சொல்."',
          '"ஆசிரியர் என்றாலும் தவறாக தொட்டால் சொல்லலாம் — இது தைரியம், தப்பில்லை."',
          '"யாரும் கேட்காவிட்டால் 1098 என்று அழை."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"Tuition அறையில் கதவு திறந்திருக்கட்டும் — முழுவதும் மூடி வைக்க வேண்டாம் என்று ஆசிரியரிடம் சொல்லுங்கள்."',
          '"குழந்தை "tuition போக வேண்டாம்" என்று சொன்னால் — காரணம் கேளுங்கள், நம்புங்கள்."',
        ],
      },
    ],
    remember: [
      'குழந்தை வீடு திரும்பும்போது ஒரு நிமிடம் பேசுங்கள் — "எல்லாம் சரியாக இருந்ததா?"',
      'Online tuition-லும் கவனமாக இருங்கள் — screen recording / screenshot கேட்பவரை நம்பாதீர்கள்',
      'Tuition அறையில் CCTV அல்லது திறந்த கதவு இருக்கட்டும் என்று கேட்கலாம்',
      'குழந்தை சொன்னால் — முதலில் நம்புங்கள், விசாரியுங்கள்',
    ],
    imagePrompt:
      'A Tamil child sitting at a tuition desk looking alert and slightly uncomfortable as a blurry adult figure stands nearby, the child aware and self-assured, bright room, flat illustration style, teal palette, empowered cautious mood, no text',
    imageSrc: '/images/situation-tuition-teacher.jpg',
  },
  {
    slug: 'neighbour-house',
    icon: '🏘️',
    order: 10,
    title: 'அண்டை வீடு அல்லது நெருங்கிய நண்பர் வீட்டில் தனியாக',
    titleEn: "Alone at a neighbour's or family friend's house",
    summary: 'நம்பகமான வீடு என்று நினைக்கிறோம் — ஆனால் குழந்தை தனியாக இருக்கும்போது என்ன செய்வது என்று தெரியட்டும்.',
    summaryEn: 'Trusted homes can still pose risks — teach children when and how to leave.',
    why: '"அண்டை வீட்டு அண்ணன்", "நெருங்கிய நண்பரின் வீடு" — இவை பாதுகாப்பானவை என்று நம்புகிறோம். சில நேரம் பெற்றோர் அறியாமலேயே குழந்தை நீண்ட நேரம் அங்கே இருக்கும். "நம்பகமான" இடம் என்ற உணர்வே கவலையை குறைக்கிறது. ஆனால் புள்ளிவிவரங்கள் சொல்கின்றன: அறிமுகமான இடங்களில்தான் ஆபத்து அதிகம் நடக்கிறது.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"யாரின் வீட்டிலும் — யாரோ உன்னை தொட்டால் "வேண்டாம்" என்று சொல்லி வெளியே வா."',
          '"பயமாக உணர்ந்தால் — "வீட்டிற்கு போக வேண்டும்" என்று சொல்லு, காரணம் சொல்ல வேண்டாம்."',
          '"வீடு வந்தவுடன் என்னிடம் சொல்லு — நான் கோபப்பட மாட்டேன்."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"குழந்தை எந்த வீட்டிற்கு போகிறார்கள் என்று தெரிந்திருக்கட்டும்."',
          '"குழந்தை "அந்த வீட்டிற்கு போக வேண்டாம்" என்று சொன்னால் — காரணம் கேளுங்கள், நம்புங்கள்."',
        ],
      },
    ],
    remember: [
      '"வெளியே வா" என்று சொல்வது எப்போதும் சரிதான் — யாரும் கோபப்படக்கூடாது என்று தெளிவாக்குங்கள்',
      'அண்டை வீட்டினர் வீட்டில் யாரோ தனியாக குழந்தையுடன் இருக்கிறார்களா என்று கவனியுங்கள்',
      'குழந்தை திடீரென ஒரு வீட்டிற்கு போக மறுத்தால் — காரணம் அன்போடு கேளுங்கள்',
      'நம்பகமான வீடு என்றாலும் — எல்லா விதிகளும் பொருந்தும் என்று சொல்லுங்கள்',
    ],
    imagePrompt:
      'A Tamil child standing at the doorway of a neighbour house, looking thoughtful and self-aware, the child deciding whether to enter, bright daytime setting, flat illustration style, warm teal palette, empowered mood, no text',
    imageSrc: '/images/situation-neighbour-house.jpg',
  },
  {
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
  },
  {
    slug: 'photo-request',
    icon: '📷',
    order: 12,
    title: 'யாரோ photo அல்லது video எடுக்க சொன்னால்',
    titleEn: 'Someone asks to photograph or film your child',
    summary: 'Photo எடுப்பது பாதிப்பில்லாதது போல் தெரியும் — ஆனால் இது grooming-ன் பொதுவான ஆரம்ப படி.',
    summaryEn: 'Photographing a child seems harmless — but it is often the first step in grooming.',
    why: '"உன்னை photo எடுக்கட்டுமா? கவர்ச்சியாக இருக்கிற" என்று சொல்வது பாதிப்பில்லாதது போல் தெரியும். ஆனால் இது grooming-ன் ஒரு பொதுவான ஆரம்ப படி. குழந்தையை comfortable-ஆக வைத்து, படிப்படியாக தனிமைப்படுத்துவார்கள். social media-ல் போட்டு மிரட்டுவதற்கும் பயன்படுத்துவார்கள். இந்த ஒரு விதி குழந்தையை பாதுகாக்கலாம்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"யார் வேண்டுமானாலும் உன் photo / video எடுக்க சொன்னால் — "அப்பா அம்மாவிடம் கேட்டுவிட்டு சொல்கிறேன்" என்று சொல்."',
          '"உடலை காட்டும்படி சொன்னால் — உடனே "வேண்டாம்" என்று சொல், வெளியே வா."',
          '"யாரோ உன் photo எடுத்தால் — அன்றே என்னிடம் சொல். நான் கோபப்படவில்லை."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"Online tutor, coach — யாரோ screen-ல் குழந்தையை record செய்கிறார்களா என்று கவனியுங்கள்."',
          '"குழந்தையின் photo யாரோ social media-ல் போடுகிறார்கள் என்று தெரிந்தால் — உடனே நடவடிக்கை எடுங்கள்."',
        ],
      },
    ],
    remember: [
      '"Photo எடுக்கலாம் — ஆனால் அப்பா அம்மா தெரியாமல் வேண்டாம்" என்று தெளிவாக்குங்கள்',
      'Online-லும் offline-லும் யார் குழந்தையின் photo எடுக்கிறார்கள் என்று கவனியுங்கள்',
      'குழந்தை "யாரோ photo எடுத்தார்கள்" என்று சொன்னால் — கோபப்படாமல் விவரம் கேளுங்கள்',
      'Social media-ல் குழந்தையின் முகம் தெரியும் படம் போடுவதை கவனமாக செய்யுங்கள்',
    ],
    imagePrompt:
      'A Tamil child confidently shaking their head and holding up a hand in a stop gesture toward a blurry adult figure holding a phone or camera, the child assertive and safe, bright outdoor setting, flat illustration style, teal palette, empowered mood, no text',
    imageSrc: '/images/situation-photo-request.jpg',
  },

  // ── Tier 1 additions ───────────────────────────────────────────────────────

  {
    slug: 'ride-offer',
    icon: '🚗',
    order: 13,
    title: 'யாரோ வாகனத்தில் வர சொன்னால்',
    titleEn: 'Someone offers your child a ride',
    summary: '"வழியில்தான் போறேன்" என்று தெரிந்தவரும் கூட வாகனத்தில் அழைக்கலாம் — உடனே "வேண்டாம்" சொல்வது எப்படி?',
    summaryEn: 'Even familiar people can pose a risk — never accept a ride without a parent\'s OK.',
    why: '"வழியில்தான் போறேன், ஏத்திக்கிட்டு போறேன்" — இது அந்நியரால் மட்டுமில்ல, தெரிந்தவர்களாலும் சொல்லப்படலாம். குழந்தைகளுக்கு பெரியவர்களிடம் "வேண்டாம்" சொல்வது கஷ்டம் — குறிப்பாக அறிமுகமானவர்களிடம். ஆனால் ஒரு எளிய விதி — "அப்பா அம்மா சொல்லாமல் யாரின் வாகனத்திலும் ஏறக்கூடாது" — குழந்தையை பாதுகாக்கும்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"யார் வேண்டுமானாலும் வாகனத்தில் வர சொன்னால் — "நன்றி, நான் நடந்து போவேன்" என்று சொல்."',
          '"அல்லது "அம்மா / அப்பாவிடம் கேட்டுவிட்டு சொல்கிறேன்" என்று சொல்லி உடனே phone-ல் கேள்."',
          '"அவர் கோபப்பட்டாலும் — வாகனத்தில் ஏறாதே."',
          '"வீடு வந்தவுடன் என்னிடம் சொல்."',
        ],
      },
      {
        label: 'வீட்டு விதியாக வையுங்கள்:',
        lines: [
          '"அப்பா அம்மா அனுமதி இல்லாமல் யாரின் வாகனத்திலும் ஏறக்கூடாது — தெரிந்தவர்களாக இருந்தாலும்."',
        ],
      },
    ],
    remember: [
      'இந்த விதி தெரிந்தவர்களுக்கும் பொருந்தும் என்று தெளிவாக்குங்கள் — உறவினர்களும் கேட்கலாம்',
      'குழந்தை "வேண்டாம்" சொன்னதால் யாராவது கோபப்பட்டால் — அவர்தான் தவறு என்று சொல்லுங்கள்',
      'Phone-ல் உடனே கேட்பது சரி — "நம்பிக்கையற்றது" இல்லை என்று பக்கத்திருப்பவர்களிடமும் சொல்லுங்கள்',
      'குழந்தை வாகனத்தில் ஏறிவிட்டால் — உடனே location share செய்யட்டும்',
    ],
    imagePrompt:
      'A Tamil child standing on a pavement confidently shaking their head at a blurry car with a figure inside offering a ride, the child alert and self-assured, bright daytime street, flat illustration style, teal palette, empowered mood, no text',
    imageSrc: '/images/situation-ride-offer.jpg',
  },
  {
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
  },
  {
    slug: 'home-alone',
    icon: '🏠',
    order: 15,
    title: 'வீட்டில் தனியாக இருக்கும்போது',
    titleEn: 'When your child is home alone',
    summary: 'வேலைக்கு செல்லும் பெற்றோரின் குழந்தைகள் சில நேரம் வீட்டில் தனியாக இருக்கலாம் — கதவு, phone, அவசர திட்டம் தெரியட்டும்.',
    summaryEn: 'Children home alone need clear rules for the door, phone calls, and emergencies.',
    why: 'இரண்டு பெற்றோரும் வேலைக்கு செல்லும் வீடுகளில் குழந்தை சில மணி நேரம் தனியாக இருக்கும். இது தமிழ்நாட்டில் மிகவும் பொதுவானது. "கதவை திறக்காதே" என்று சொல்கிறோம் — ஆனால் யாரிடம் திறக்கலாம், அவசரமாக என்ன செய்வது, யாரை அழைப்பது என்று குழந்தைக்கு தெளிவாக தெரிகிறதா?',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"யார் வந்தாலும் — கதவை திறக்காதே. "அம்மா / அப்பா வீட்டில் இல்லை" என்று சொல்லாதே."',
          '"தெரியாதவர் வந்தால் — "யார்?" என்று கேள், கதவை திறக்காமலேயே பேசு."',
          '"தீ, தண்ணீர் கசிவு, ஏதாவது அவசரம் என்றால் — 112 அல்லது என்னை அழை."',
          '"யாரோ கதவை உடைக்க முயன்றால் — கத்து, பக்கத்து வீட்டாரை அழை, 100 அழை."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"அவசர எண்கள் — 1098, 100, 112 — fridge-ல் ஒட்டி வையுங்கள்."',
          '"நம்பகமான பக்கத்து வீட்டினரிடம் முன்கூட்டியே சொல்லி வையுங்கள்."',
          '"ஒவ்வொரு மணி நேரமும் ஒரு முறை call / message செய்யுங்கள்."',
        ],
      },
    ],
    remember: [
      '"வீட்டில் தனியாக இருக்கிறேன்" என்று யாரிடமும் சொல்லாதே என்று வலியுறுத்துங்கள்',
      'பக்கத்து வீட்டினர் பெயர் + door number குழந்தைக்கு தெரியட்டும்',
      'வீட்டு முகவரி மனப்பாடம் இருக்கட்டும் — அவசர நேரத்தில் சொல்ல தேவைப்படும்',
      'யாரோ வந்தால் என்ன செய்வது என்று ஒரு முறை practice செய்து பாருங்கள்',
    ],
    imagePrompt:
      'A Tamil child sitting safely inside a home near a closed front door, looking calm and alert, a phone on the table nearby, warm interior light, flat illustration style, teal palette, safe prepared mood, no text',
    imageSrc: '/images/situation-home-alone.jpg',
  },
  {
    slug: 'being-followed',
    icon: '👣',
    order: 16,
    title: 'யாராவது பின்தொடர்ந்தால்',
    titleEn: 'If someone is following your child',
    summary: 'பள்ளி அல்லது டியூஷன் செல்லும் பாதையில் யாரோ பின்தொடர்ந்தால் — பாதுகாப்பான இடத்திற்கு எப்படி செல்வது?',
    summaryEn: 'Children must know exactly where to go and what to do if someone is following them.',
    why: 'பள்ளி மற்றும் tuition பாதைகள் பல குழந்தைகளுக்கு தினசரி ஒரே மாதிரியாக இருக்கும். இந்த routine-ஐ யாரோ observe செய்து பின்தொடரலாம். "ஓடு" என்பது மட்டும் போதாது — எங்கே போவது, யாரிடம் உதவி கேட்பது என்று குழந்தைக்கு ஒரு திட்டம் இருக்க வேண்டும்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"யாரோ பின்தொடர்கிறார்கள் என்று தோன்றினால் — திரும்பி பார்க்காதே, கடைக்குள் அல்லது கூட்டமான இடத்திற்கு போ."',
          '"கடை, ஆஸ்பிட்டல், கோவில், மசூதி, தேவாலயம் — பொது இடங்களில் நில்."',
          '"உடனே என்னை அழை — phone இல்லை என்றால் கடை ஆளிடம் கேள்."',
          '"அவர் நேரடியாக நெருங்கினால் — உரக்க கத்து, ஓடு."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"குழந்தையின் school / tuition பாதையில் safe spots — கடை, ஆஸ்பிட்டல் — இடம் காட்டுங்கள்."',
          '"Route-ஐ அவ்வப்போது மாற்றுங்கள் — தினசரி ஒரே நேரம் ஒரே பாதை வேண்டாம்."',
        ],
      },
    ],
    remember: [
      'பாதையில் "safe spots" எங்கே இருக்கின்றன என்று நடந்தே காட்டுங்கள்',
      'Phone இல்லாமல் போகும் குழந்தைக்கு — கடை ஆளிடம் help கேட்கலாம் என்று சொல்லுங்கள்',
      'Route-ஐ அடிக்கடி மாற்றுவது ஒரு நல்ல பழக்கம்',
      'குழந்தை "யாரோ பார்க்கிறார்கள்" என்று சொன்னால் — seriously எடுத்துக்கொள்ளுங்கள்',
    ],
    imagePrompt:
      'A Tamil child walking confidently toward a brightly lit shop entrance, glancing back with awareness at a blurry figure behind them, making a smart safe decision, flat illustration style, teal palette, alert empowered mood, no text',
    imageSrc: '/images/situation-being-followed.jpg',
  },
  {
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
  },
  {
    slug: 'friend-in-danger',
    icon: '👫',
    order: 18,
    title: 'நண்பருக்கு ஏதாவது நடந்தால்',
    titleEn: 'When a friend is in danger or has been hurt',
    summary: 'குழந்தைகள் பெரும்பாலும் முதலில் தெரிந்துகொள்கிறார்கள் — நண்பருக்காக எப்படி உதவி கேட்பது என்று தெரியட்டும்.',
    summaryEn: 'Children often find out first — teach them to speak up for a friend in trouble.',
    why: 'குழந்தைகளுக்கு ஏதாவது நடக்கும்போது — நண்பர்கள்தான் முதலில் தெரிந்துகொள்கிறார்கள். "நண்பர் சொன்னது ரகசியம்" என்று நினைத்து அமைதியாக இருக்கிறார்கள். ஆனால் இது "கெட்ட ரகசியம்" — ஒரு பெரியவரிடம் சொல்வது நண்பரை காட்டிக் கொடுப்பது அல்ல, காப்பாற்றுவது. இந்த வித்தியாசம் குழந்தைக்கு தெரியட்டும்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"நண்பர் ஏதாவது சொன்னால் — "யாரிடமும் சொல்லாதே" என்று கேட்டாலும் — அம்மா அல்லது அப்பாவிடம் சொல்லு."',
          '"இது நண்பரை காட்டிக் கொடுப்பது இல்லை — நண்பரை காப்பாற்றுவது."',
          '"நண்பர் கோபப்பட்டாலும் — அவர் பாதுகாப்பாக இருப்பது முக்கியம்."',
          '"என்ன சொல்வது என்று தெரியாவிட்டாலும் — என்னிடம் வா, நாம் சேர்ந்து யோசிப்போம்."',
        ],
      },
      {
        label: 'பெற்றோர் செய்ய வேண்டியது:',
        lines: [
          '"குழந்தை நண்பரைப் பற்றி கவலையுடன் பேசினால் — seriously எடுத்துக்கொள்ளுங்கள்."',
          '"நண்பரின் பெற்றோரிடம் அல்லது பள்ளி counselor-இடம் சொல்லுங்கள்."',
        ],
      },
    ],
    remember: [
      'குழந்தை நண்பரின் ரகசியம் சொன்னால் — நம்பியதற்கு நன்றி சொல்லுங்கள்',
      '"நண்பரை காட்டிக் கொடுக்கவில்லை, காப்பாற்றுகிறாய்" என்று வலியுறுத்துங்கள்',
      'நண்பரின் பெற்றோரிடம் பேசும்போது குழந்தையை involve செய்யுங்கள்',
      'நண்பருக்காக கவலைப்படுவது நல்ல உணர்வு என்று பாராட்டுங்கள்',
    ],
    imagePrompt:
      'Two Tamil children sitting together, one looking worried and the other listening with care and concern, warm school corridor setting, emotional and supportive mood, flat illustration style, teal and care-soft palette, no text',
    imageSrc: '/images/situation-friend-in-danger.jpg',
  },

  // ── Tier 2 additions ───────────────────────────────────────────────────────

  {
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
          '"Apartment-ல் லிப்ட் camera இருக்கிறதா என்று confirm செய்யுங்கள்."',
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
  },
  {
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
  },
  {
    slug: 'private-photo',
    icon: '🔒',
    order: 21,
    title: 'யாரோ private அல்லது intimate புகைப்படம் கேட்டால்',
    titleEn: 'Someone asks for private or intimate photos',
    summary: 'Online-ல் யாரோ private photo கேட்டால் — உடனே "வேண்டாம்" என்று சொல்லு, பெற்றோரிடம் சொல்.',
    summaryEn: 'No one has the right to ask a child for private photos — refuse and tell a parent immediately.',
    why: 'WhatsApp, Instagram, Snapchat, கேமிங் apps — எல்லாவற்றிலும் குழந்தைகளிடம் private photo கேட்கப்படுகிறது. "யாரும் பார்க்க மாட்டார்கள்", "நீ மட்டும் தான்", "நாமளுக்குள்ள தான்" என்று சொல்கிறார்கள். ஒரு முறை அனுப்பினால் — அது எப்போதும் அவர்கள் கையில் இருக்கும். இதை குழந்தைக்கு தெளிவாக சொல்லுவது மிக முக்கியம்.',
    scripts: [
      {
        label: 'குழந்தையிடம் சொல்லுங்கள்:',
        lines: [
          '"யார் வேண்டுமானாலும் — நண்பரோ, காதலனோ, அந்நியரோ — private photo கேட்டால் உடனே "வேண்டாம்" என்று சொல்."',
          '"அனுப்பாதே — ஒரு முறை அனுப்பினால் நீ கட்டுப்படுத்த முடியாது."',
          '""யாரும் பார்க்க மாட்டார்கள்" என்று சொன்னாலும் நம்பாதே — screenshot எடுக்கலாம்."',
          '"உடனே என்னிடம் சொல் — நான் கோபப்படவில்லை, உன்னை பாதுகாப்பேன்."',
        ],
      },
      {
        label: 'யாரோ மிரட்டினால்:',
        lines: [
          '"Photo பகிர்வேன் என்று மிரட்டினால் — பயப்படாதே, உடனே என்னிடம் சொல்."',
          '"இது உன் தவறில்லை — CHILDLINE 1098 அல்லது Cyber Crime helpline 1930 அழைக்கலாம்."',
        ],
      },
    ],
    remember: [
      'குழந்தை photo அனுப்பிவிட்டால் — கோபப்படாதீர்கள், முதலில் ஆதரிக்குங்கள்',
      'Cyber Crime helpline: 1930 — online photo threat-க்கு 24/7 உதவுவார்கள்',
      '"Delete செய்தால் போய்விடும்" என்று நம்பாதே — screenshots எடுத்திருக்கலாம்',
      'இந்த உரையாடலை teens age-ல் ஆரம்பிக்காதீர்கள் — 10 வயதிலேயே ஆரம்பிக்கலாம்',
    ],
    imagePrompt:
      'A Tamil child looking at their phone screen with a firm and cautious expression, about to decline an inappropriate message request, confident body language, flat illustration style, teal palette, empowered safe mood, no text',
    imageSrc: '/images/situation-private-photo.jpg',
  },
];

/** Quick lookup by slug */
export function getSituation(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}
