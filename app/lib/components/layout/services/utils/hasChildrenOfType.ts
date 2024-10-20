import { Children, ElementType, isValidElement, ReactNode } from 'react';

export default function hasOnlyChildrenOfType(
  children: ReactNode,
  type: ElementType,
): boolean {
  if (!children) {
    return false;
  }

  const childrenArray = Children.toArray(children);

  return childrenArray.every(child => {
    return isValidElement(child) && child.type === type;
  });
}
