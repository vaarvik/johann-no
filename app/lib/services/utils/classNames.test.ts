import { describe, expect, it } from 'vitest';
import classNames from './classNames';

describe('classNames', () => {
  it('should return a single class name when one string is passed', () => {
    const result = classNames('class1');
    expect(result).toBe('class1');
  });

  it('should return multiple class names separated by a space', () => {
    const result = classNames('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should filter out boolean values', () => {
    const result = classNames('class1', false, 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should filter out undefined values', () => {
    const result = classNames(
      'class1',
      undefined,
      'class2',
      undefined,
      'class3',
    );
    expect(result).toBe('class1 class2 class3');
  });

  it('should return an empty string when no arguments are passed', () => {
    const result = classNames();
    expect(result).toBe('');
  });

  it('should handle a mix of strings, booleans, and undefined values', () => {
    const result = classNames('class1', false, undefined, 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });
});
