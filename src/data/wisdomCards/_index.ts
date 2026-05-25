export interface WisdomCard {
  quote: string;   // Tamil quote — spoken, natural register
  by: string;      // Attribution (Tamil)
  en: string;      // English translation (no quotes — canvas adds them)
}

import { card as appalSalem } from './card-appa-salem';
import { card as ammaCoimbatore } from './card-amma-coimbatore';
import { card as paattiMadurai } from './card-paatti-madurai';

export const wisdomCards: WisdomCard[] = [
  appalSalem,
  ammaCoimbatore,
  paattiMadurai,
];
