import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const tamilScript = /[\u0B80-\u0BFF]/;
const englishField =
  /\b(?:en|titleEn|summaryEn|bodyEn|tipEn|scriptEn|answerEn|contactEn|nameEn)\s*:\s*(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g;

const checkedDirs = ['src/data', 'src/i18n'];
const errors = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      walk(path);
      continue;
    }
    if (!/\.(ts|astro)$/.test(path)) continue;

    const text = readFileSync(path, 'utf8');
    let match;
    while ((match = englishField.exec(text))) {
      const value = match[2];
      if (!tamilScript.test(value)) continue;
      const line = text.slice(0, match.index).split('\n').length;
      errors.push(`${path.replace(`${root}/`, '')}:${line} English field contains Tamil script`);
    }
  }
}

for (const dir of checkedDirs) {
  walk(join(root, dir));
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('Language field check passed.');
