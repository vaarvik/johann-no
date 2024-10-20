// utils/getSpacingClassNames.ts
import { SPACING_DIRECTIONS, SPACING_DIRECTIONS_XY } from '@/constants';
import {
  isSpacingVariantXY,
  SpacingDirectionsMap,
  SpacingDirectionsMapXY,
  SpacingVariant,
  SpacingVariantXY,
} from '@/types/spacing';

export function getSpacingClassNames(
  spacing: SpacingVariant | SpacingVariantXY | undefined,
  styles: { [key: string]: string },
  baseClass: string,
): string[] {
  if (!spacing) return [];

  let classNames: string[];
  if (typeof spacing === 'string') {
    classNames = [styles[`${baseClass}-${spacing}`]];
  } else {
    if (isSpacingVariantXY(spacing)) {
      classNames = getSpacingDirectionXYClassNames(spacing, styles, baseClass);
    }

    classNames = getSpacingDirectionClassNames(spacing, styles, baseClass);
  }

  const hasInvalidClassName = classNames.some(className => !className);

  if (hasInvalidClassName) {
    throw new Error(
      `No valid spacing class name found in passed in styles with baseClass: ${baseClass}`,
    );
  }

  return classNames;
}

function getSpacingDirectionClassNames(
  spacing: SpacingDirectionsMap,
  styles: { [key: string]: string },
  baseClass: string,
): string[] {
  const classNames: string[] = [];

  SPACING_DIRECTIONS.forEach(direction => {
    const spacingSize = spacing[direction];
    if (spacingSize) {
      classNames.push(styles[`${baseClass}-${direction}-${spacingSize}`]);
    }
  });

  return classNames;
}

function getSpacingDirectionXYClassNames(
  spacing: SpacingDirectionsMapXY,
  styles: { [key: string]: string },
  baseClass: string,
): string[] {
  const classNames: string[] = [];
  SPACING_DIRECTIONS_XY.forEach(direction => {
    const spacingSize = spacing[direction];
    if (spacingSize) {
      classNames.push(styles[`${baseClass}-${direction}-${spacingSize}`]);
    }
  });

  return classNames;
}
