// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://safepaapa.in',
  integrations: [sitemap()],

  i18n: {
    defaultLocale: 'ta',
    locales: ['ta', 'en'],
    routing: {
      prefixDefaultLocale: false, // Tamil stays at /  — English at /en/
    },
  },
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),
});
