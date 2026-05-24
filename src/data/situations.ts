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
  },
];

/** Quick lookup by slug */
export function getSituation(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}
