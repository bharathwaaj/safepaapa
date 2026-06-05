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
    en: 'Free, 24/7 — any child in danger can call',
    color: 'bg-red-600',
    href: 'tel:1098',
  },
  {
    number: '100',
    name: 'Police',
    ta: 'காவல்துறை',
    en: 'Immediate physical danger or a crime in progress',
    color: 'bg-blue-600',
    href: 'tel:100',
  },
  {
    number: '181',
    name: 'Women Helpline',
    ta: 'பெண்கள் உதவி மையம்',
    en: 'Women and girls in danger',
    color: 'bg-purple-600',
    href: 'tel:181',
  },
  {
    number: '112',
    name: 'Emergency',
    ta: 'அனைத்து அவசர சேவைகள்',
    en: 'Police, ambulance, and fire services in one number',
    color: 'bg-orange-600',
    href: 'tel:112',
  },
  {
    number: '1800-599-0019',
    name: 'iCall',
    ta: 'மனநல ஆலோசனை',
    en: 'Free mental-health support helpline with Tamil support available',
    color: 'bg-teal-700',
    href: 'tel:18005990019',
  },
];
