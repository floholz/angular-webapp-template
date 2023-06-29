/* tslint:disable */
/* eslint-disable */
import { PatternResponse } from './pattern-response';
export interface WeaponResponse {
  aoPattern?: PatternResponse;
  aoPatternId?: number;
  createdAt?: string;
  deletedAt?: null | string;
  handle?: null | string;
  hasStickers?: boolean;
  id?: number;
  isDeleted?: boolean;
  itemClassId?: number;
  maskPattern?: PatternResponse;
  maskPatternId?: number;
  modelUrl?: null | string;
  name?: null | string;
  posPattern?: PatternResponse;
  posPatternId?: number;
  sticker0X?: null | number;
  sticker0Y?: null | number;
  sticker0Z?: null | number;
  sticker1X?: null | number;
  sticker1Y?: null | number;
  sticker1Z?: null | number;
  sticker2X?: null | number;
  sticker2Y?: null | number;
  sticker2Z?: null | number;
  sticker3X?: null | number;
  sticker3Y?: null | number;
  sticker3Z?: null | number;
  substratePattern?: PatternResponse;
  substratePatternId?: number;
  surfacePattern?: PatternResponse;
  surfacePatternId?: number;
  uvScale?: number;
  weaponLength?: number;
}
