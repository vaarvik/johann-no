import { DIRECTIONS } from '@/constants';
import { ScreenAndDirectionMap, ScreenAndDirectionMapXY } from './layout';

export type SpacingSizes =
  | '0'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '1000'
  | '1200'
  | '1400'
  | '1600'
  | '2000'
  | '4000';

export type SpacingVariant = SpacingSizes | ScreenAndDirectionMap<SpacingSizes>;

export type SpacingVariantXY =
  | SpacingSizes
  | ScreenAndDirectionMapXY<SpacingSizes>;

export function isSpacingVariant(
  spacing: SpacingVariant,
): spacing is SpacingVariant {
  return (
    typeof spacing !== 'string' && DIRECTIONS.some(size => size in spacing)
  );
}

export function isSpacingVariantXY(
  spacing: SpacingVariant | SpacingVariantXY,
): spacing is SpacingVariantXY {
  return typeof spacing !== 'string' && ('x' in spacing || 'y' in spacing);
}
