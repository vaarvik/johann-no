import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to create a horizontal or vertical scroll effect.
 * - Horizontal scrolling applies by default on non-mobile screens.
 * - On mobile, you can choose between horizontal or vertical scrolling.
 *
 * @param threshold - The threshold for an item to be considered visible
 * @param mobileScrollDirection - Defines scroll direction on mobile ('horizontal' or 'vertical')
 * @returns The refs for the wrapper, container, section, content, and items, as well as the indices of the visible items
 */
export function useHorizontalScroll(
  threshold = 0.2,
  mobileScrollDirection: 'horizontal' | 'vertical' = 'horizontal',
) {
  if (threshold > 1 || threshold < -1) {
    throw new Error('Threshold must be between -1 and 1');
  }

  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const sectionElement = sectionRef.current;
    const contentElement = contentRef.current;
    const itemElements = itemRefs.current;

    if (!wrapperElement || !sectionElement || !contentElement) {
      throw new Error(
        'All elements must be defined: wrapperRef, sectionRef, and contentRef',
      );
    }

    const updateSectionSize = createResizeHandler(
      wrapperElement,
      contentElement,
      setIsMobile,
      mobileScrollDirection,
    );
    const onScroll = createScrollHandler(
      wrapperElement,
      sectionElement,
      contentElement,
      itemElements,
      setVisibleItems,
      threshold,
      isMobile,
      mobileScrollDirection,
    );

    updateSectionSize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateSectionSize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSectionSize);
    };
  }, [threshold, isMobile, mobileScrollDirection]);

  return {
    wrapperRef,
    containerRef,
    sectionRef,
    contentRef,
    itemRefs,
    visibleItems,
  };
}

export function isElementVisible(
  element: HTMLDivElement,
  threshold: number,
  isMobile: boolean,
  mobileScrollDirection: 'horizontal' | 'vertical',
): boolean {
  const rect = element.getBoundingClientRect();

  const elementSize =
    mobileScrollDirection === 'vertical' && isMobile ? rect.height : rect.width;

  const visibleSize =
    mobileScrollDirection === 'vertical' && isMobile
      ? Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
      : Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);

  return visibleSize / elementSize >= threshold;
}

function createScrollHandler(
  wrapperElement: HTMLDivElement,
  sectionElement: HTMLDivElement,
  contentElement: HTMLDivElement,
  itemElements: HTMLDivElement[],
  setVisibleItems: (indices: number[]) => void,
  threshold: number,
  isMobile: boolean,
  mobileScrollDirection: 'horizontal' | 'vertical',
) {
  return (): void => {
    const offsetTop = wrapperElement.offsetTop;
    const contentSize =
      mobileScrollDirection === 'vertical' && isMobile
        ? contentElement.offsetHeight
        : contentElement.offsetWidth;

    let amount = window.scrollY - offsetTop;
    amount = Math.max(amount, 0);

    if (
      amount <
      contentSize -
        (isMobile && mobileScrollDirection === 'vertical'
          ? window.innerHeight
          : window.innerWidth)
    ) {
      sectionElement.style.transform =
        isMobile && mobileScrollDirection === 'vertical'
          ? `translate3d(0, -${amount}px, 0)`
          : `translate3d(-${amount}px, 0, 0)`;
    }

    const visibleItemsIndices: number[] = [];
    itemElements.forEach((item, index) => {
      if (isElementVisible(item, threshold, isMobile, mobileScrollDirection)) {
        visibleItemsIndices.push(index);
      }
    });

    setVisibleItems(visibleItemsIndices);
  };
}

function createResizeHandler(
  wrapperElement: HTMLDivElement,
  contentElement: HTMLDivElement,
  setIsMobile: (state: boolean) => void,
  mobileScrollDirection: 'horizontal' | 'vertical',
) {
  return (): void => {
    setIsMobile(window.innerWidth < 768);

    if (window.innerWidth >= 768 || mobileScrollDirection === 'horizontal') {
      const sectionWidth = contentElement.offsetWidth;
      wrapperElement.style.height = `${window.innerHeight + (sectionWidth - window.innerWidth)}px`;
    } else {
      wrapperElement.style.height = 'auto';
    }
  };
}
