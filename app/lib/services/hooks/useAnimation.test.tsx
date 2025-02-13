// useAnimation.test.ts
import { AnimationProps } from '@/types/animations';
import { act, render, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import classNames from '../utils/classNames';
import { isElementVisible } from '../utils/isElementVisible';
import { useAnimation } from './useAnimation';

vi.mock('../utils/isElementVisible', () => ({
  isElementVisible: vi.fn(() => true),
}));

vi.mock('../utils/generateClassNamesByStringOrObject', () => ({
  generateClassNamesByStringOrObject: vi.fn(() => ['mock-class']),
}));

const MockComponent = ({
  wrapperClasses = [],
  wrapperTag = 'div',
  animations = {},
}: {
  wrapperClasses?: string[];
  wrapperTag?: keyof HTMLElementTagNameMap;
  animations?: AnimationProps;
}) => {
  const { classes, ref } = useAnimation<HTMLHeadingElement>({
    animations,
    wrapper: { classes: wrapperClasses, tag: wrapperTag },
  });

  return (
    <div>
      <h1
        className={classNames(...classes)}
        ref={ref}
        data-testid="mock-element"
      >
        Hello my friends
      </h1>
    </div>
  );
};

describe('useAnimation Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with default classes', () => {
    const { result } = renderHook(() => useAnimation({ animations: {} }));
    const classes = result.current.classes.join(', ');
    expect(classes).toContain('animation');
    expect(classes).not.toContain('animation--init');
    expect(classes).not.toContain('animation--visible');
  });

  it('should initialize with default classes on render', () => {
    const { unmount, getByTestId } = render(
      <MockComponent
        wrapperClasses={['custom-wrapper']}
        wrapperTag="section"
        animations={{ in: { origin: 'center-center' } }}
      />,
    );

    const element = getByTestId('mock-element');

    expect(element.className).toContain('animation--init');
    unmount();
  });

  it('should wrap the element with specified wrapper element', () => {
    const { container, unmount } = render(
      <MockComponent
        wrapperClasses={['custom-wrapper']}
        wrapperTag="section"
      />,
    );

    const wrappers = container.querySelectorAll('section.custom-wrapper');
    expect(wrappers[0]).not.toBeNull();

    unmount();
  });

  it('should toggle visibility class on scroll', () => {
    const isElementVisibleSpy = vi.spyOn(
      { isElementVisible },
      'isElementVisible',
    );
    isElementVisibleSpy.mockImplementationOnce(() => false);

    const { unmount, getByTestId } = render(
      <MockComponent
        wrapperClasses={['custom-wrapper']}
        wrapperTag="section"
      />,
    );
    const element = getByTestId('mock-element');

    expect(element.className).not.toContain('animation--visible');

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(isElementVisibleSpy).toHaveBeenCalledTimes(3);

    expect(element.className).toContain('animation--visible');

    isElementVisibleSpy.mockRestore();
    unmount();
  });

  it('should generate proper animation classes based on animations prop', () => {
    const { unmount, getByTestId } = render(
      <MockComponent
        wrapperClasses={['custom-wrapper']}
        wrapperTag="section"
        animations={{ in: { origin: 'center-center' } }}
      />,
    );

    const element = getByTestId('mock-element');

    expect(element.classList).toContain('mock-class');
    unmount();
  });
});
