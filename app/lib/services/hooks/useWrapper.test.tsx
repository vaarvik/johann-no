import { render } from '@testing-library/react';
import { useRef } from 'react';
import { describe, expect, it } from 'vitest';
import { useWrapper } from './useWrapper';

const WrapperTestComponent = ({
  classNames = ['custom-wrapper'],
  HTMLTag = 'section',
}: {
  classNames?: string[];
  HTMLTag?: keyof HTMLElementTagNameMap;
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  useWrapper<HTMLDivElement>(elementRef, classNames, HTMLTag);

  return (
    <div data-testid="test-container">
      <div ref={elementRef} data-testid="wrapped-element">
        Wrapped Element
      </div>
    </div>
  );
};

describe('useWrapper Hook', () => {
  it('should create only one wrapper element', () => {
    const { container, unmount } = render(<WrapperTestComponent />);
    const wrappers = container.querySelectorAll('section.custom-wrapper');
    expect(wrappers.length).toBe(1);
    unmount();
  });

  it('should wrap the target element correctly', () => {
    const { getByTestId, unmount } = render(<WrapperTestComponent />);
    const wrappedElement = getByTestId('wrapped-element');
    const wrapper = document.querySelector('section.custom-wrapper');

    expect(wrapper).toBeDefined();
    expect(wrappedElement.parentElement).toBe(wrapper);
    unmount();
  });
});
