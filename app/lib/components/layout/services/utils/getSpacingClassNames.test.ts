// tests/getSpacingClassNames.test.ts
import {
  SpacingDirectionsMap,
  SpacingVariant,
  SpacingVariantXY,
} from '@/types/spacing';
import { describe, expect, it } from 'vitest';
import { getSpacingClassNames } from './getSpacingClassNames';

const mockStyles = {
  'base-class--gap-sm': 'base-class--gap-sm',
  'base-class--gap-x-sm': 'base-class--gap-x-sm',
  'base-class--gap-y-sm': 'base-class--gap-y-sm',
  'base-class--gap-top-sm': 'base-class--gap-top-sm',
  'base-class--gap-md': 'base-class--gap-md',
  'base-class--gap-x-md': 'base-class--gap-x-md',
  'base-class--gap-y-md': 'base-class--gap-y-md',
};

describe('getSpacingClassNames', () => {
  it('should return an empty array when spacing is undefined', () => {
    const result = getSpacingClassNames(undefined, mockStyles, 'base-class');
    expect(result).toEqual([]);
  });

  it('should return the correct class name when spacing is a string', () => {
    const result = getSpacingClassNames('sm', mockStyles, 'base-class--gap');
    expect(result).toEqual(['base-class--gap-sm']);
  });

  it('should return the correct class names for SpacingDirectionsMap', () => {
    const spacing: SpacingDirectionsMap = {
      x: 'md',
      top: 'sm',
    };
    const result = getSpacingClassNames(spacing, mockStyles, 'base-class--gap');
    expect(result).toEqual(
      expect.arrayContaining([
        'base-class--gap-top-sm',
        'base-class--gap-x-md',
      ]),
    );
  });

  it('should return the correct class names for SpacingDirectionsMapXY', () => {
    const spacing: SpacingVariantXY = {
      x: 'sm',
      y: 'md',
    };
    const result = getSpacingClassNames(spacing, mockStyles, 'base-class--gap');
    expect(result).toEqual(
      expect.arrayContaining(['base-class--gap-x-sm', 'base-class--gap-y-md']),
    );
  });

  it('should throw an error when there is an invalid class name', () => {
    const invalidStyles = {
      'base-class--gap-sm': '',
    };
    const spacing: SpacingVariant = 'sm';
    expect(() =>
      getSpacingClassNames(spacing, invalidStyles, 'base-class'),
    ).toThrow();
  });
});
