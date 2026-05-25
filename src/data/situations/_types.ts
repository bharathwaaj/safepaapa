export interface SituationScript {
  label: string;   // e.g. "குழந்தையிடம் சொல்லுங்கள்:"
  lines: string[]; // word-for-word Tamil lines
}

export interface Situation {
  slug: string;
  icon: string;
  title: string;          // Tamil
  titleEn: string;        // English
  summary: string;        // Tamil — 1 sentence, for cards
  summaryEn: string;      // English — for cards
  shareLine?: string;     // Tamil — concise line for generated share cards
  why: string;            // Tamil — emotional paragraph
  scripts: SituationScript[];
  remember: string[];     // Key reminders (Tamil)
  order: number;
  imagePrompt: string;    // ChatGPT/DALL-E prompt
  imageSrc?: string;      // Set when generated
}
