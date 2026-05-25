/** Emergency contact numbers — used on emergency page and resources page */
export interface EmergencyNumber {
  number: string;
  name: string;    // English name
  ta: string;      // Tamil label
  en: string;      // English description
  color: string;   // Tailwind bg class for the number badge
  href: string;    // tel: link
}

export const emergencyNumbers: EmergencyNumber[] = [
  {
    number: '1098',
    name: 'CHILDLINE',
    ta: 'குழந்தை உதவி மையம்',
    en: 'Free, 24/7 — any child in distress can call',
    color: 'bg-red-600',
    href: 'tel:1098',
  },
  {
    number: '100',
    name: 'Police',
    ta: 'காவல்துறை',
    en: 'Immediate physical danger, crime in progress',
    color: 'bg-blue-600',
    href: 'tel:100',
  },
  {
    number: '181',
    name: 'Women Helpline',
    ta: 'பெண்கள் உதவி மையம்',
    en: 'Women and girl child in distress',
    color: 'bg-purple-600',
    href: 'tel:181',
  },
  {
    number: '112',
    name: 'Emergency',
    ta: 'அனைத்து அவசர சேவைகள்',
    en: 'Police · Ambulance · Fire — all in one',
    color: 'bg-orange-600',
    href: 'tel:112',
  },
  {
    number: '1800-599-0019',
    name: 'iCall',
    ta: 'மனநல ஆலோசனை',
    en: 'Free mental health helpline — Tamil support available',
    color: 'bg-teal-700',
    href: 'tel:18005990019',
  },
];
