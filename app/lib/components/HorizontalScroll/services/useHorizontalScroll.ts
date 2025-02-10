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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  if (threshold > 1 || threshold < -1) {
    throw Error('Threshold must be between -1 and 1');
  }

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

    const updateSectionSize = (): void => {
      if (!isMobile || mobileScrollDirection === 'horizontal') {
        const sectionWidth = contentElement.offsetWidth;
        wrapperElement.style.height = `${
          window.innerHeight + (sectionWidth - window.innerWidth)
        }px`;
      } else {
        wrapperElement.style.height = 'auto';
      }
    };

    const onScroll = (): void => {
      const offsetTop = wrapperElement.offsetTop;
      const contentSize =
        mobileScrollDirection === 'vertical' && isMobile
          ? contentElement.offsetHeight
          : contentElement.offsetWidth;

      let amount = window.scrollY - offsetTop;
      amount = amount < 0 ? 0 : amount;

      if (
        amount <
        contentSize - (isMobile ? window.innerHeight : window.innerWidth)
      ) {
        if (mobileScrollDirection === 'vertical' && isMobile) {
          sectionElement.style.transform = `translate3d(0, -${amount}px, 0)`;
        } else {
          sectionElement.style.transform = `translate3d(-${amount}px, 0, 0)`;
        }
      }

      const visibleItemsIndices: number[] = [];
      itemElements.forEach((item, index) => {
        if (isElementVisible(item, threshold)) {
          visibleItemsIndices.push(index);
        }
      });
      setVisibleItems(visibleItemsIndices);
    };

    const isElementVisible = (
      element: HTMLDivElement,
      threshold: number,
    ): boolean => {
      const rect = element.getBoundingClientRect();

      const elementSize =
        mobileScrollDirection === 'vertical' && isMobile
          ? rect.height
          : rect.width;

      const visibleSize =
        mobileScrollDirection === 'vertical' && isMobile
          ? Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
          : Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);

      return visibleSize / elementSize >= threshold;
    };

    updateSectionSize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateSectionSize);

    return (): void => {
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
