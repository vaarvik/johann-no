import { Directions, DirectionsXY } from './directions';

export type SpacingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SpacingDirectionsMap = Partial<Record<Directions, SpacingSizes>>;

export type SpacingVariant = SpacingSizes | SpacingDirectionsMap;

export type SpacingDirectionsMapXY = Partial<
  Record<DirectionsXY, SpacingSizes>
>;

export type SpacingVariantXY = SpacingSizes | SpacingDirectionsMapXY;

export function isSpacingVariantXY(
  spacing: SpacingVariant | SpacingVariantXY,
): spacing is SpacingVariantXY {
  return typeof spacing !== 'string' && 'x' in spacing && 'y' in spacing;
}
