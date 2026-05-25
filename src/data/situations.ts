/**
 * @deprecated — situations.ts has been split into per-situation files.
 * Source of truth is now src/data/situations/_index.ts
 * This file is a re-export shim and should be deleted once all imports are updated.
 */
export { situations, getSituation } from './situations/_index';
export type { Situation, SituationScript } from './situations/_index';
