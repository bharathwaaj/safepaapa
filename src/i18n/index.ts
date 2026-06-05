/**
 * i18n utility for SafePaapa.
 *
 * Usage in an Astro page:
 *   import { useTranslations } from '../i18n';
 *   const t = useTranslations(Astro.currentLocale);
 *   // then: t('home.hero.badge')
 *
 * Supported locales: 'ta' (default), 'en'
 * English intentionally does not fall back to Tamil. Missing English keys should
 * be visible during development instead of leaking Tamil copy into /en pages.
 */

import ta from './ta';
import en from './en';

type Locale = 'ta' | 'en';

const dictionaries: Record<Locale, Record<string, string>> = { ta, en };

/**
 * Returns a `t(key)` function bound to the given locale.
 * Falls back to Tamil only for the default Tamil locale.
 */
export function useTranslations(locale: string | undefined) {
  const lang: Locale = locale === 'en' ? 'en' : 'ta';
  const dict = dictionaries[lang];

  return function t(key: string): string {
    return dict[key] ?? key;
  };
}

/** Convenience: get the alternate-locale URL for a given path */
export function getAlternateUrl(locale: string | undefined, path: string): string {
  if (locale === 'en') {
    // English page → link to Tamil (default, no prefix)
    return path.replace(/^\/en/, '') || '/';
  }
  // Tamil page → link to /en/...
  return `/en${path === '/' ? '' : path}`;
}

export type { Locale };
