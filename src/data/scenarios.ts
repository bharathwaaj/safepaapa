/** 7 tap-to-reveal practice scenarios — used on home page and parents page */
export interface ScenarioData {
  icon: string;
  prompt: string;      // Tamil question shown before tap
  promptEn: string;    // English subtitle
  answer: string;      // Tamil answer shown after tap
  answerEn: string;    // English answer shown after tap
  answerLabel: string; // Label above the answer
}

export const scenarios: ScenarioData[] = [
  {
    icon: '🍬',
    prompt: 'அந்நியர் உன்னை தனியாக அழைத்தால்...',
    promptEn: 'A stranger tries to call you aside or offers something',
    answer: 'உரக்க \'வேண்டாம்\' என்று சொல்லு. அங்கிருந்து உடனே ஓடு. நம்பகமான பெரியவரிடம் — அம்மா, அப்பா அல்லது ஆசிரியர் — சொல்லு. யாரும் இல்லை என்றால் 1098 என்று அழை.',
    answerEn: 'Say "No" loudly. Leave the place immediately. Tell a trusted adult — mum, dad, or a teacher. If no one is nearby, call 1098.',
    answerLabel: 'குழந்தை என்ன செய்ய வேண்டும்?',
  },
  {
    icon: '🚐',
    prompt: 'வேன் ஓட்டுநர் வழக்கத்திற்கு மாறாக நடந்தால்...',
    promptEn: 'The school van driver behaves differently or takes an unusual route',
    answer: 'வழக்கத்திற்கு மாறாக தோன்றினால் வேனில் ஏறாதே — அல்லது வேனிலிருந்து இறங்கு. நம்பகமான யாரோ ஒருவர் பக்கத்தில் நின்று உடனே அம்மா அல்லது அப்பாவுக்கு அழை. தனியாக எங்கும் போகாதே.',
    answerEn: 'If something feels unusual, do not get into the van — or get out safely. Stand near a trusted person and call mum or dad immediately. Do not go anywhere alone.',
    answerLabel: 'குழந்தை என்ன செய்ய வேண்டும்?',
  },
  {
    icon: '🏪',
    prompt: 'கடை அல்லது கூட்டத்தில் தொலைந்தால்...',
    promptEn: 'Lost in a mall, market, or crowded festival',
    answer: 'ஓடாதே — நில். அருகில் இருக்கும் கடை ஆள் அல்லது பெண் பாதுகாப்பாளரிடம் போ. அம்மா அல்லது அப்பா பெயரும் தொலைபேசி எண்ணும் சொல். யாரோ \'நான் அழைத்துச் செல்கிறேன்\' சொன்னால் — வேண்டாம் என்று சொல், அங்கேயே நில், உதவிக்காக கத்து.',
    answerEn: 'Do not run. Stop where you are. Go to a nearby shop worker or woman security staff. Say your parent\'s name and phone number. If someone says "I will take you," say no, stay there, and shout for help.',
    answerLabel: 'குழந்தை என்ன செய்ய வேண்டும்?',
  },
  {
    icon: '🤫',
    prompt: 'ஒரு பெரியவர் — உறவினரோ, அந்நியரோ — "யாரிடமும் சொல்லாதே" என்றால்...',
    promptEn: 'Any adult — even a relative — says "keep this a secret"',
    answer: 'நல்ல ரகசியங்கள் உன்னை மகிழ்விக்கும். ஆனால் உன்னை பயமுறுத்தும் அல்லது வலிக்கும் ரகசியங்கள் சொல்லவே வேண்டும். "யாரிடமும் சொல்லாதே" என்று சொன்னவுடன் உடனே அம்மா அல்லது அப்பாவிடம் சொல்லு.',
    answerEn: 'Good secrets make you happy. Secrets that scare you or hurt you must be told. If someone says "do not tell anyone," tell mum or dad immediately.',
    answerLabel: 'குழந்தை என்ன செய்ய வேண்டும்?',
  },
  {
    icon: '🏠',
    prompt: 'குடும்பத்தில் யாரோ பயமாக உணர வைத்தால்...',
    promptEn: 'Someone at home or a known relative makes your child feel unsafe',
    answer: 'உறவினரோ, நெருங்கியவரோ — யார் தொட்டாலும் நீ வேண்டாம் சொல்லலாம். பயமாக உணர்ந்தால் உடனே அம்மா அல்லது அப்பாவிடம் சொல்லு. இது குடும்பத்தை காட்டிக் கொடுப்பது அல்ல — இது உன்னை பாதுகாப்பது. நீ சொன்னால் நான் நம்புவேன்.',
    answerEn: 'Even with relatives or close people, you can say no to touch. If you feel scared, tell mum or dad immediately. This is not betraying the family — it is protecting yourself. If you tell me, I will believe you.',
    answerLabel: 'குழந்தை என்ன செய்ய வேண்டும்?',
  },
  {
    icon: '📱',
    prompt: 'ஆன்லைன் நண்பர் நேரில் சந்திக்க சொன்னால்...',
    promptEn: 'An online-only contact asks to meet in person',
    answer: 'ஆன்லைனில் மட்டுமே தெரிந்தவரை நேரில் சந்திக்கச் செல்லாதே. இதை உடனே பெற்றோரிடம் சொல்லு. இணையத்தில் அனைவரும் சொல்வது உண்மையல்ல — அவர்கள் வேறு யாரோ ஆக இருக்கலாம்.',
    answerEn: 'Do not meet someone you only know online. Tell your parent immediately. People online may not be who they claim to be.',
    answerLabel: 'குழந்தை என்ன செய்ய வேண்டும்?',
  },
  {
    icon: '🛑',
    prompt: 'யாரோ உன் உடலை தொட்டால் — என்ன செய்வாய்?',
    promptEn: 'Someone touches your body in a way that feels wrong or uncomfortable',
    answer: 'உரக்க \'வேண்டாம், நிறுத்துங்கள்\' என்று சொல்லு. அந்த இடத்தை விட்டு விலகு. நம்பகமான பெரியவரிடம் — அம்மா, அப்பா, ஆசிரியர் — உடனே சொல்லு. இது உன் தவறே இல்லை. யாரும் கேட்காவிட்டால் 1098 அழை.',
    answerEn: 'Say "No, stop" loudly. Move away from that place. Tell a trusted adult — mum, dad, or a teacher — immediately. It is not your fault. If no one listens, call 1098.',
    answerLabel: 'குழந்தை என்ன செய்ய வேண்டும்?',
  },
];
