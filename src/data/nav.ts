/** Navigation labels and footer text — translators edit only this file */

// ── Main nav links ────────────────────────────────────────────────────────────

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
  handle: string;
}

export const navLinks: NavLink[] = [
  { href: '/situations', label: 'சூழல்கள்' },
  { href: '/parents',    label: 'பெற்றோருக்கு' },
  { href: '/children',   label: 'குழந்தைகளுக்கு' },
  { href: '/teachers',   label: 'ஆசிரியர்களுக்கு' },
  { href: '/schools',    label: 'பள்ளிகளுக்கு' },
  { href: '/emergency',  label: 'அவசரம்' },
];

/** Footer nav = main nav + resources link */
export const footerNavLinks: NavLink[] = [
  ...navLinks,
  { href: '/resources', label: 'உதவி' },
];

// ── Footer text ───────────────────────────────────────────────────────────────

export const footerText = {
  tagline: 'குழந்தைகளை பாதுகாப்போம்.',
  taglineEn: "Protecting Tamil Nadu's children through awareness.",
  legal: 'SafePaapa — இது ஒரு இலவச விழிப்புணர்வு முயற்சி. எந்த அரசு அமைப்புடனும் தொடர்பில்லை.',
};

export const socialLinks = {
  instagram: {
    href: 'https://www.instagram.com/safepaapa/',
    label: 'SafePaapa Instagram',
    handle: '@safepaapa',
  },
} satisfies Record<string, SocialLink>;
