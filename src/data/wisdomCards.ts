export interface WisdomCard {
  quote: string;   // Tamil quote — spoken, natural register
  by: string;      // Attribution (Tamil)
  en: string;      // English translation (no quotes — canvas adds them)
}

export const wisdomCards: WisdomCard[] = [
  {
    // Give parents the exact words — and address the two fears (anger, disbelief)
    quote: 'என் பிள்ளைக்கு தினமும் சொல்வேன் — உன் உடல் உன்னோட. யார் தொட்டாலும் வேண்டாம்னு சொல்லலாம். அப்பா நம்புவேன், கோபப்பட மாட்டேன்.',
    by: 'ஒரு அப்பா, சேலம்',
    en: 'I tell my child every day — your body is yours. You can say no to anyone. I will believe you. I won\'t be angry.',
  },
  {
    // A concrete house rule parents can adopt immediately
    quote: 'எங்க வீட்டுல ஒரு விதி — குழந்தைகள் எந்த பெரியவரோடயும் தனியா இருக்க மாட்டாங்க. உறவினரா இருந்தாலும் சரி, யாரும் விதிவிலக்கில்ல.',
    by: 'ஒரு அம்மா, கோவை',
    en: 'Our house rule — children are never alone with any adult. Not relatives, not anyone. No exceptions.',
  },
  {
    // Outcome: disclosure worked because the child was believed and action was immediate
    quote: 'என் பேத்தி சொன்னாள். நாங்க நம்பினோம். உடனே நடவடிக்கை எடுத்தோம். அவ தைரியமா பேசினதனால காப்பாற்றப்பட்டாள்.',
    by: 'ஒரு பாட்டி, மதுரை',
    en: 'My granddaughter spoke. We believed her. We acted immediately. She was protected because she had the courage to tell.',
  },
];
