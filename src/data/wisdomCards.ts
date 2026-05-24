export interface WisdomCard {
  quote: string;   // Tamil quote — spoken, natural register
  by: string;      // Attribution (Tamil)
  en: string;      // English translation (no quotes — canvas adds them)
}

export const wisdomCards: WisdomCard[] = [
  {
    quote: 'என் பேத்தி என்னிடம் சொன்னாள் — ஆசிரியர் கையை வலிக்க தொட்டாங்க. உடனே நடவடிக்கை எடுத்தோம்.',
    by: 'ஒரு பாட்டி',
    en: 'My granddaughter told me a teacher hurt her. We acted immediately.',
  },
  {
    quote: 'அம்மா என்னிடம் சொன்னாங்க — உன் உடல் உனக்கே சொந்தம். அன்றே புரிஞ்சுச்சு.',
    by: 'ஒரு 10 வயது மாணவி',
    en: 'My mother told me — your body belongs to you. I understood it immediately.',
  },
  {
    quote: 'டாக்டர் கிட்ட போகும்போது கூட அம்மா என்னோட வந்தாங்க. அது எனக்கு நம்பிக்கை கொடுத்தது.',
    by: 'ஒரு 8 வயது மாணவன்',
    en: 'Even at the doctor, my mother came with me. That gave me confidence.',
  },
];
