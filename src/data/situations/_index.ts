export type { Situation, SituationScript } from './_types';

import { situation as strangerCandy }    from './stranger-candy';
import { situation as schoolVan }         from './school-van';
import { situation as relativeSecret }    from './relative-secret';
import { situation as onlineFriend }      from './online-friend';
import { situation as lostInMall }        from './lost-in-mall';
import { situation as unsafeRelative }    from './unsafe-relative';
import { situation as schoolToilet }      from './school-toilet';
import { situation as giftFromStranger }  from './gift-from-stranger';
import { situation as tuitionTeacher }    from './tuition-teacher';
import { situation as neighbourHouse }    from './neighbour-house';
import { situation as publicTransport }   from './public-transport';
import { situation as photoRequest }      from './photo-request';
import { situation as rideOffer }         from './ride-offer';
import { situation as falseClaim }        from './false-claim';
import { situation as homeAlone }         from './home-alone';
import { situation as beingFollowed }     from './being-followed';
import { situation as noPickup }          from './no-pickup';
import { situation as friendInDanger }    from './friend-in-danger';
import { situation as elevatorStranger }  from './elevator-stranger';
import { situation as gamingStranger }    from './gaming-stranger';
import { situation as privatePhoto }      from './private-photo';

export const situations = [
  strangerCandy,
  schoolVan,
  relativeSecret,
  onlineFriend,
  lostInMall,
  unsafeRelative,
  schoolToilet,
  giftFromStranger,
  tuitionTeacher,
  neighbourHouse,
  publicTransport,
  photoRequest,
  rideOffer,
  falseClaim,
  homeAlone,
  beingFollowed,
  noPickup,
  friendInDanger,
  elevatorStranger,
  gamingStranger,
  privatePhoto,
].sort((a, b) => a.order - b.order);

/** Quick lookup by slug */
export function getSituation(slug: string) {
  return situations.find((s) => s.slug === slug);
}
