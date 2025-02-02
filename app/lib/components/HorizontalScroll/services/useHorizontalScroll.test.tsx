/* eslint-disable max-lines */
import { act, render, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useHorizontalScroll } from './useHorizontalScroll';

const MockComponent = () => {
  const {
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
    visibleItems,
  } = useHorizontalScroll(0.2);

  const items: { content: (isVisible: boolean) => ReactNode }[] = [
    {
      content: (isVisible: boolean) => (
        <div>item 1: {isVisible ? 'visible' : 'invisible'}</div>
      ),
    },
    {
      content: (isVisible: boolean) => (
        <div>item 2: {isVisible ? 'visible' : 'invisible'}</div>
      ),
    },
  ];

  return (
    <div ref={wrapperRef} data-testid="wrapper">
      <div ref={containerRef}>
        <div ref={sectionRef} data-testid="section">
          <div data-testid="content" ref={contentRef}>
            {items.map((item, index) => (
              <div
                data-testid={`item-${index + 1}`}
                ref={el => {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }}
                key={index}
              >
                {item.content(visibleItems.includes(index))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

describe('useHorizontalScroll', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should throw an error if threshold is out of range', () => {
    expect(() => renderHook(() => useHorizontalScroll(1.5))).toThrow(
      'Threshold must be between -1 and 1',
    );
    expect(() => renderHook(() => useHorizontalScroll(-1.5))).toThrow(
      'Threshold must be between -1 and 1',
    );
  });

  it('should render without errors', () => {
    const { getByTestId, unmount } = render(<MockComponent />);
    expect(getByTestId('wrapper')).not.toBeNull();
    unmount();
  });

  it('should add and remove event listeners on mount and unmount', () => {
    const addEventListener = vi.spyOn(window, 'addEventListener');
    const removeEventListener = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<MockComponent />);

    expect(addEventListener).toHaveBeenCalledTimes(2);
    expect(addEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
    expect(addEventListener).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );

    unmount();

    expect(removeEventListener).toHaveBeenCalledTimes(2);
    expect(removeEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
    expect(removeEventListener).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    );
  });

  it('should throw error if refs are not connected to any elements', () => {
    expect(() => renderHook(() => useHorizontalScroll(0.5))).toThrow(
      'All elements must be defined: sectionRef, wrapperRef, and contentRef',
    );
  });

  it('should update visibleItems when elements are scrolled into view', async () => {
    const { getByTestId, unmount } = render(<MockComponent />);

    const visibleItem = getByTestId('item-1');
    const invisibleItem = getByTestId('item-2');

    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(768);

    // Mock getBoundingClientRect for horizontal scrolling
    vi.spyOn(visibleItem, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 100,
      left: 0,
      right: window.innerWidth,
      width: window.innerWidth,
      height: 100,
      x: 0,
      y: 0,
    } as DOMRect);

    vi.spyOn(invisibleItem, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      bottom: 100,
      left: window.innerWidth,
      right: window.innerWidth * 2,
      width: window.innerWidth,
      height: 100,
      x: window.innerWidth,
      y: 0,
    } as DOMRect);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(visibleItem.textContent).toContain('item 1: visible');
    expect(invisibleItem.textContent).toContain('item 2: invisible');

    unmount();
  });

  it('should correctly calculate the section height', async () => {
    const { getByTestId, unmount } = render(<MockComponent />);

    const wrapperElement = getByTestId('wrapper');
    const contentElement = getByTestId('content');

    vi.spyOn(contentElement, 'offsetWidth', 'get').mockReturnValue(2000);
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(768);

    const heightSpy = vi
      .spyOn(wrapperElement.style, 'height', 'set')
      .mockImplementation(() => {});

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    // Expected height calculation: 768 + (2000 - 1024) = 1744px
    expect(heightSpy).toHaveBeenCalledWith('1744px');

    unmount();
  });

  it('should update section height on window resize', async () => {
    const { getByTestId, unmount } = render(<MockComponent />);

    const wrapperElement = getByTestId('wrapper');
    const contentElement = getByTestId('item-1').parentElement!;

    vi.spyOn(contentElement, 'offsetWidth', 'get').mockReturnValue(2000);
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1200);
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800);

    const heightSpy = vi
      .spyOn(wrapperElement.style, 'height', 'set')
      .mockImplementation(() => {});

    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(768);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    // Expected height calculation: 768 + (2000 - 1024) = 1744px
    expect(heightSpy).toHaveBeenCalledWith('1744px');

    unmount();
  });

  it('should correctly calculate and transform the section on scroll', async () => {
    const { getByTestId, unmount } = render(<MockComponent />);

    const wrapperElement = getByTestId('wrapper');
    const contentElement = getByTestId('content');
    const sectionElement = getByTestId('section');

    vi.spyOn(wrapperElement, 'offsetTop', 'get').mockReturnValue(50);
    vi.spyOn(contentElement, 'offsetWidth', 'get').mockReturnValue(2000);

    const transformSpy = vi
      .spyOn(sectionElement.style, 'transform', 'set')
      .mockImplementation(() => {});

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(100);

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(transformSpy).toHaveBeenCalledWith('translate3d(-50px, 0, 0)');

    unmount();
  });

  it('should not apply transformations until the wrapper is in view', async () => {
    const { getByTestId, unmount } = render(<MockComponent />);

    const wrapperElement = getByTestId('wrapper');
    const sectionElement = getByTestId('section');
    const contentElement = getByTestId('content');

    vi.spyOn(wrapperElement, 'offsetTop', 'get').mockReturnValue(1000);
    vi.spyOn(contentElement, 'offsetWidth', 'get').mockReturnValue(2000);
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024);
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(768);

    const transformSpy = vi
      .spyOn(sectionElement.style, 'transform', 'set')
      .mockImplementation(() => {});

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(500);

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(transformSpy).toHaveBeenCalledWith('translate3d(-0px, 0, 0)');

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(1100);

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(transformSpy).toHaveBeenCalledWith('translate3d(-100px, 0, 0)');

    unmount();
  });
});
