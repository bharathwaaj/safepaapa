/** 4 seasonal banners shown on the homepage based on current month/day */

export interface SeasonalBanner {
  /** Start of date range as MMDD (e.g. 515 = May 15) */
  start: number;
  /** End of date range as MMDD — may wrap past Dec 31 (e.g. 115 = Jan 15 next year) */
  end: number;
  icon: string;
  ta: string;
  body: string;
  bodyEn: string;
  link: string;
  linkText: string;
}

export const seasonalBanners: SeasonalBanner[] = [
  {
    start: 515, end: 630,
    icon: '☀️',
    ta: 'கோடை விடுமுறை — கூடுதல் கவனம்',
    body: 'கோடை காலத்தில் குழந்தைகள் டியூஷன், கோடை முகாம் (summer camp) போவார்கள். புதிய இடங்களில் யார் யார் இருக்கிறார்கள் என்று கவனிங்கள். குழந்தை தனியாக இருக்கிறதா என்று உறுதி செய்யுங்கள்.',
    bodyEn: 'Summer holidays: new environments, tuition centres, camps. Know who is around your child at all times.',
    link: '/situations/tuition-teacher',
    linkText: 'Tuition safety tips →',
  },
  {
    start: 701, end: 815,
    icon: '🎒',
    ta: 'பள்ளி திறக்கும் நேரம் — பாதுகாப்பு நினைவுபடுத்துங்கள்',
    body: 'புதிய வகுப்பு, புதிய ஆசிரியர், புதிய நண்பர்கள். இந்த நேரத்தில் குழந்தையிடம் நல்ல தொடுதல் / கெட்ட தொடுதல் (Good Touch / Bad Touch), 1098 — இவற்றை மீண்டும் நினைவுபடுத்துங்கள்.',
    bodyEn: 'School reopening: new teachers and faces. Refresh body safety rules with your child today.',
    link: '/situations/school-van',
    linkText: 'School van safety →',
  },
  {
    start: 1001, end: 1130,
    icon: '🪔',
    ta: 'பண்டிகை காலம் — கூட்டத்தில் கவனம்',
    body: 'தீபாவளி, விழாக்கள் — கூட்டமான இடங்களில் குழந்தைகள் தொலைந்து போகலாம். "கூட்டத்தில் தொலைந்தால் என்ன செய்வாய்?" என்று இப்போதே பயிற்சி செய்யுங்கள்.',
    bodyEn: 'Festival season: crowds mean separation risk. Practise the lost-child drill with your child now.',
    link: '/situations/lost-in-mall',
    linkText: 'Crowded place safety →',
  },
  {
    start: 1201, end: 115, // wraps: Dec 1 → Jan 15
    icon: '🏠',
    ta: 'விடுமுறை காலம் — வீட்டு விருந்தினர்கள்',
    body: 'Pongal, Christmas விடுமுறைகளில் உறவினர்கள் வீட்டிற்கு வருவார்கள். குழந்தை எப்போதும் நம்பகமான பெரியவர் கவனிப்பில் இருக்கட்டும். தனியாக விட வேண்டாம்.',
    bodyEn: 'Holiday season: relatives visiting. Ensure your child always has a trusted adult nearby.',
    link: '/situations/unsafe-relative',
    linkText: 'Family visitor safety →',
  },
];
