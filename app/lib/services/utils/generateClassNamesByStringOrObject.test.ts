import { SpacingVariant, SpacingVariantXY } from '@/types/spacing';
import { describe, expect, it } from 'vitest';
import { generateClassNamesByStringOrObject } from './generateClassNamesByStringOrObject';

const mockBasicStyles = {
  'base-class--gap-300': 'base-class--gap-300',
  'base-class--gap-x-300': 'base-class--gap-x-300',
  'base-class--gap-y-300': 'base-class--gap-y-300',
  'base-class--gap-top-300': 'base-class--gap-top-300',
  'base-class--gap-400': 'base-class--gap-400',
  'base-class--gap-x-400': 'base-class--gap-x-400',
  'base-class--gap-y-400': 'base-class--gap-y-400',
};

const mockScreenStyles = {
  'base-class--gap-mobile-300': 'base-class--gap-mobile-300',
  'base-class--gap-mobile-x-300': 'base-class--gap-mobile-x-300',
  'base-class--gap-mobile-y-300': 'base-class--gap-mobile-y-300',
  'base-class--gap-desktop-y-300': 'base-class--gap-desktop-y-300',
  'base-class--gap-desktop-bottom-400': 'base-class--gap-desktop-bottom-400',
  'base-class--gap-desktop-top-500': 'base-class--gap-desktop-top-500',
};

const mockStyles = { ...mockBasicStyles, ...mockScreenStyles };

describe('generateSpacingClassNames', () => {
  it('should return the correct class name when value is a string', () => {
    const result = generateClassNamesByStringOrObject(
      '300',
      mockStyles,
      'base-class--gap',
    );
    expect(result).toEqual(['base-class--gap-300']);
  });

  it('should return the correct class names for SpacingDirection300ap', () => {
    const value: SpacingVariant = {
      x: '400',
      top: '300',
    };
    const result = generateClassNamesByStringOrObject(
      value,
      mockStyles,
      'base-class--gap',
    );
    expect(result).toEqual(
      expect.arrayContaining([
        'base-class--gap-top-300',
        'base-class--gap-x-400',
      ]),
    );
  });

  it('should return the correct screen specific class names for SpacingDirection300ap', () => {
    const value: SpacingVariant = {
      x: '400',
      mobile: '300',
      desktop: { bottom: '400', top: '500' },
    };

    const result = generateClassNamesByStringOrObject(
      value,
      mockStyles,
      'base-class--gap',
    );
    expect(result).toEqual(
      expect.arrayContaining([
        'base-class--gap-mobile-300',
        'base-class--gap-x-400',
        'base-class--gap-desktop-bottom-400',
        'base-class--gap-desktop-top-500',
      ]),
    );
  });

  it('should return the correct class names for SpacingDirection300apXY', () => {
    const value: SpacingVariantXY = {
      x: '300',
      y: '400',
    };
    const result = generateClassNamesByStringOrObject(
      value,
      mockStyles,
      'base-class--gap',
    );
    expect(result).toEqual(
      expect.arrayContaining([
        'base-class--gap-x-300',
        'base-class--gap-y-400',
      ]),
    );
  });

  it('should return the correct screen specific class names for SpacingDirection300apXY', () => {
    const value: SpacingVariantXY = {
      mobile: { x: '300', y: '300' },
      desktop: { y: '300' },
    };

    const result = generateClassNamesByStringOrObject(
      value,
      mockStyles,
      'base-class--gap',
    );
    expect(result).toEqual(
      expect.arrayContaining([
        'base-class--gap-mobile-x-300',
        'base-class--gap-mobile-y-300',
        'base-class--gap-desktop-y-300',
      ]),
    );
  });

  it('should throw an error when there is an invalid class name', () => {
    const invalidValue = { y: '300', mobile: { y: '300' }, x: 'not-valid' };
    expect(() =>
      generateClassNamesByStringOrObject(
        invalidValue,
        mockStyles,
        'base-class--gap',
      ),
    ).toThrow();
  });

  it('should throw an error when value is undefined', () => {
    expect(() =>
      generateClassNamesByStringOrObject(
        undefined,
        mockStyles,
        'base-class--gap',
      ),
    ).toThrow();
  });
});
