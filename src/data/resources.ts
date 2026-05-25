/** All content for the resources page — translators edit only this file */

// ── Emergency helplines (resources page version) ──────────────────────────────

export interface ResourceNumber {
  name: string;
  number: string;
  ta: string;
  en: string;
  primary: boolean;
}

export const resourceNumbers: ResourceNumber[] = [
  {
    name: 'CHILDLINE India',
    number: '1098',
    ta: 'குழந்தைகளுக்கான தேசிய உதவி எண் — 24/7, இலவசம், ரகசியம்',
    en: 'National child helpline — free, confidential, round the clock',
    primary: true,
  },
  {
    name: 'காவல்துறை',
    number: '100',
    ta: 'அவசர காவல்துறை உதவி',
    en: 'Police emergency',
    primary: false,
  },
  {
    name: 'பெண்கள் உதவி எண்',
    number: '181',
    ta: 'தமிழ்நாடு பெண்கள் மற்றும் குழந்தைகள் நல ஆணையம்',
    en: 'TN Women Helpline',
    primary: false,
  },
  {
    name: 'அவசர சேவை',
    number: '112',
    ta: 'பொது அவசர சேவை — காவல், தீயணைப்பு, ஆம்புலன்ஸ்',
    en: 'Unified emergency response',
    primary: false,
  },
];

// ── Tamil Nadu government bodies ──────────────────────────────────────────────

export interface TnGovBody {
  name: string;
  ta: string;
  contact: string;
}

export const tnGovBodies: TnGovBody[] = [
  {
    name: 'குழந்தை நல குழு (CWC)',
    ta: 'Child Welfare Committee — மாவட்டம் தோறும் உள்ளது. குழந்தைகளுக்கான சட்ட பாதுகாப்பு.',
    contact: 'உங்கள் மாவட்ட Collectorate வழியாக தொடர்பு கொள்ளவும்',
  },
  {
    name: 'POCSO சிறப்பு நீதிமன்றம்',
    ta: 'POCSO வழக்குகளுக்கு சிறப்பு நீதிமன்றங்கள் — கோவை, சென்னை, மதுரை உட்பட அனைத்து மாவட்டங்களிலும்.',
    contact: '100 (காவல்துறை வழியாக தொடர்பு கொள்ளவும்)',
  },
  {
    name: 'மாவட்ட குழந்தை பாதுகாப்பு அலகு (DCPU)',
    ta: 'ஒருங்கிணைந்த குழந்தை பாதுகாப்பு திட்டம் (ICPS) கீழ் இயங்குகிறது.',
    contact: 'மாவட்ட சமூக நலன் அலுவலகம்',
  },
];

// ── NGO list ──────────────────────────────────────────────────────────────────

export interface NgoEntry {
  name: string;
  ta: string;
  url: string | null;
}

export const ngoList: NgoEntry[] = [
  {
    name: 'CHILDLINE India Foundation',
    ta: '1098 தேசிய குழந்தை உதவி சேவையை நடத்துகிறது',
    url: 'https://www.childlineindia.org',
  },
  {
    name: 'Tulir — Centre for Prevention & Healing',
    ta: 'சென்னை — குழந்தை பாலியல் துஷ்பிரயோக தடுப்பு மற்றும் குணமாக்குதல் மையம்',
    url: 'https://www.tulir.org',
  },
  {
    name: 'iCall (TISS)',
    ta: 'உளவியல் ஆலோசனை சேவை — 9152987821',
    url: null,
  },
];
