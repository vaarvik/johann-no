import { describe, expect, it } from 'vitest';
import hasOnlyChildrenOfType from './hasChildrenOfType';

const TestComponent: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => <div>{children}</div>;
const AnotherComponent: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => <div>{children}</div>;

describe('hasChildrenOfType', () => {
  it('should return false if children is null or undefined', () => {
    expect(hasOnlyChildrenOfType(null, TestComponent)).toBe(false);
    expect(hasOnlyChildrenOfType(undefined, TestComponent)).toBe(false);
  });

  it('should return false if no children are of the specified type', () => {
    const children = [
      <AnotherComponent key="1" />,
      <AnotherComponent key="2" />,
    ];
    expect(hasOnlyChildrenOfType(children, TestComponent)).toBe(false);
  });

  it('should return false if any child is not of the specified type', () => {
    const children = [<AnotherComponent key="1" />, <TestComponent key="2" />];
    expect(hasOnlyChildrenOfType(children, TestComponent)).toBe(false);
  });

  it('should return true if all children are of the specified type', () => {
    const children = [<TestComponent key="1" />, <TestComponent key="2" />];
    expect(hasOnlyChildrenOfType(children, TestComponent)).toBe(true);
  });

  it('should return false if children are not valid React elements', () => {
    const children = [
      <span key="1">Not a component</span>,
      <span key="2">Not a component</span>,
    ];
    expect(hasOnlyChildrenOfType(children, TestComponent)).toBe(false);
  });
});
