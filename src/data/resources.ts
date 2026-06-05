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
    en: 'National child helpline — free, confidential, 24/7',
    primary: true,
  },
  {
    name: 'Police',
    number: '100',
    ta: 'அவசர காவல்துறை உதவி',
    en: 'Emergency police help',
    primary: false,
  },
  {
    name: 'Women Helpline',
    number: '181',
    ta: 'தமிழ்நாடு பெண்கள் மற்றும் குழந்தைகள் நல ஆணையம்',
    en: 'Tamil Nadu women helpline',
    primary: false,
  },
  {
    name: 'Emergency Service',
    number: '112',
    ta: 'பொது அவசர சேவை — காவல், தீயணைப்பு, ஆம்புலன்ஸ்',
    en: 'Integrated emergency response',
    primary: false,
  },
];

// ── Tamil Nadu government bodies ──────────────────────────────────────────────

export interface TnGovBody {
  name: string;
  nameEn: string;
  ta: string;
  en: string;
  contact: string;
  contactEn: string;
}

export const tnGovBodies: TnGovBody[] = [
  {
    name: 'குழந்தை நல குழு (CWC)',
    nameEn: 'Child Welfare Committee (CWC)',
    ta: 'குழந்தை நல குழு (Child Welfare Committee) — மாவட்டம் தோறும் உள்ளது. குழந்தைகளுக்கான சட்ட பாதுகாப்பு.',
    en: 'Child Welfare Committee (CWC) — available in every district for legal protection of children.',
    contact: 'உங்கள் மாவட்ட ஆட்சியர் அலுவலகம் (Collectorate) வழியாக தொடர்பு கொள்ளவும்',
    contactEn: 'Contact through your district Collectorate.',
  },
  {
    name: 'POCSO சிறப்பு நீதிமன்றம்',
    nameEn: 'POCSO Special Court',
    ta: 'POCSO வழக்குகளுக்கான சிறப்பு நீதிமன்றங்கள் — கோவை, சென்னை, மதுரை உட்பட அனைத்து மாவட்டங்களிலும்.',
    en: 'Special courts for POCSO cases are available across districts, including Coimbatore, Chennai, and Madurai.',
    contact: '100 (காவல்துறை வழியாக தொடர்பு கொள்ளவும்)',
    contactEn: 'Call 100 to contact through the police.',
  },
  {
    name: 'மாவட்ட குழந்தை பாதுகாப்பு அலகு (DCPU)',
    nameEn: 'District Child Protection Unit (DCPU)',
    ta: 'ஒருங்கிணைந்த குழந்தை பாதுகாப்பு திட்டம் (ICPS) கீழ் இயங்குகிறது.',
    en: 'District Child Protection Unit (DCPU), operating under the Integrated Child Protection Scheme.',
    contact: 'மாவட்ட சமூக நலன் அலுவலகம்',
    contactEn: 'District Social Welfare Office.',
  },
];

// ── NGO list ──────────────────────────────────────────────────────────────────

export interface NgoEntry {
  name: string;
  ta: string;
  en: string;
  url: string | null;
}

export const ngoList: NgoEntry[] = [
  {
    name: 'CHILDLINE India Foundation',
    ta: '1098 தேசிய குழந்தை உதவி சேவையை நடத்துகிறது',
    en: 'Runs the national 1098 child helpline service',
    url: 'https://www.childlineindia.org',
  },
  {
    name: 'Tulir — Centre for Prevention & Healing',
    ta: 'சென்னை — குழந்தை பாலியல் துஷ்பிரயோக தடுப்பு மற்றும் குணமாக்குதல் மையம்',
    en: 'Chennai-based centre focused on preventing and healing child sexual abuse',
    url: 'https://www.tulir.org',
  },
  {
    name: 'iCall (TISS)',
    ta: 'உளவியல் ஆலோசனை சேவை — 9152987821',
    en: 'Psychosocial counselling service — 9152987821',
    url: null,
  },
];
