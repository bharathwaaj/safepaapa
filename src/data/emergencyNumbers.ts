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
    en: 'இலவசம், 24/7 — ஆபத்தில் இருக்கும் எந்த குழந்தையும் அழைக்கலாம்',
    color: 'bg-red-600',
    href: 'tel:1098',
  },
  {
    number: '100',
    name: 'Police',
    ta: 'காவல்துறை',
    en: 'உடனடி உடல் ஆபத்து, குற்றம் நடந்து கொண்டிருக்கும்போது',
    color: 'bg-blue-600',
    href: 'tel:100',
  },
  {
    number: '181',
    name: 'Women Helpline',
    ta: 'பெண்கள் உதவி மையம்',
    en: 'ஆபத்தில் இருக்கும் பெண்கள் மற்றும் பெண் குழந்தைகள்',
    color: 'bg-purple-600',
    href: 'tel:181',
  },
  {
    number: '112',
    name: 'Emergency',
    ta: 'அனைத்து அவசர சேவைகள்',
    en: 'காவல் · ஆம்புலன்ஸ் · தீயணைப்பு — அனைத்தும் ஒரே எண்ணில்',
    color: 'bg-orange-600',
    href: 'tel:112',
  },
  {
    number: '1800-599-0019',
    name: 'iCall',
    ta: 'மனநல ஆலோசனை',
    en: 'இலவச மனநல உதவி எண் — தமிழ் ஆதரவு கிடைக்கும்',
    color: 'bg-teal-700',
    href: 'tel:18005990019',
  },
];
